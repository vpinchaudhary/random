#!/usr/bin/env node
// Minimal story reader server
// Usage: node server.js [port]

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2]) || 3000;
const STORIES_DIR = path.join(__dirname, '..', 'stories');
const STATIC_DIR = __dirname;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.md': 'text/plain; charset=utf-8',
};

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function getStoryData(storyName) {
  const storyDir = path.join(STORIES_DIR, storyName);
  if (!fs.existsSync(storyDir)) return null;

  const allFiles = fs.readdirSync(storyDir).filter(f => {
    const full = path.join(storyDir, f);
    return fs.statSync(full).isFile() && (f.endsWith('.md') || f.endsWith('.yaml'));
  }).sort(naturalSort);

  // Chapters are files in a chapters/ subdirectory, or chapter-*.md / interlude-*.md in root
  const chaptersDir = path.join(storyDir, 'chapters');
  let chapters = [];
  if (fs.existsSync(chaptersDir)) {
    chapters = fs.readdirSync(chaptersDir)
      .filter(f => f.endsWith('.md'))
      .sort(naturalSort);
  }

  // Also check for chapter/interlude files in root
  const rootChapters = allFiles.filter(f =>
    f.match(/^(chapter-|interlude-)\d+.*\.md$/)
  ).sort(naturalSort);

  if (chapters.length === 0 && rootChapters.length > 0) {
    chapters = rootChapters;
  }

  return {
    name: storyName,
    chapters: chapters,
    files: allFiles,
  };
}

function handleAPI(req, res) {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const parts = url.pathname.split('/').filter(Boolean);
  // /api/stories
  if (parts.length === 2 && parts[0] === 'api' && parts[1] === 'stories') {
    const dirs = fs.readdirSync(STORIES_DIR).filter(d => {
      return fs.statSync(path.join(STORIES_DIR, d)).isDirectory();
    }).sort();
    const stories = dirs.map(getStoryData).filter(Boolean);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(stories));
    return true;
  }

  // /api/stories/:name
  if (parts.length === 3 && parts[0] === 'api' && parts[1] === 'stories') {
    const data = getStoryData(parts[2]);
    if (!data) { res.writeHead(404); res.end('Not found'); return true; }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return true;
  }

  // /api/stories/:name/:file
  if (parts.length === 4 && parts[0] === 'api' && parts[1] === 'stories') {
    const storyName = parts[2];
    const fileName = parts[3];
    // Security: no path traversal
    if (fileName.includes('..') || fileName.includes('/')) {
      res.writeHead(400); res.end('Bad request'); return true;
    }
    // Check chapters/ dir first, then root
    let filePath = path.join(STORIES_DIR, storyName, 'chapters', fileName);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(STORIES_DIR, storyName, fileName);
    }
    if (!fs.existsSync(filePath)) {
      res.writeHead(404); res.end('Not found'); return true;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(content);
    return true;
  }

  return false;
}

function serveStatic(req, res) {
  let filePath = path.join(STATIC_DIR, req.url === '/' ? 'index.html' : req.url);
  // Security
  if (!filePath.startsWith(STATIC_DIR)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404); res.end('Not found'); return;
  }
  const ext = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';
  const content = fs.readFileSync(filePath);
  res.writeHead(200, { 'Content-Type': mime });
  res.end(content);
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/')) {
    if (!handleAPI(req, res)) {
      res.writeHead(404); res.end('Not found');
    }
  } else {
    serveStatic(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Story Reader running at http://localhost:${PORT}`);
  console.log(`Reading stories from: ${STORIES_DIR}`);
});
