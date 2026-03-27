#!/usr/bin/env node
// Build script: generates a static site in dist/
// Scans stories/ and creates a stories.json manifest

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const STORIES_DIR = path.join(ROOT, 'stories');
const READER_DIR = __dirname;
const DIST = path.join(ROOT, 'dist');

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

// Clean and create dist
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
fs.mkdirSync(DIST, { recursive: true });

// Copy static files
for (const file of ['index.html', 'style.css', 'app.js']) {
  fs.copyFileSync(path.join(READER_DIR, file), path.join(DIST, file));
}

// Scan stories
const manifest = [];

const storyDirs = fs.readdirSync(STORIES_DIR).filter(d =>
  fs.statSync(path.join(STORIES_DIR, d)).isDirectory()
).sort();

for (const storyName of storyDirs) {
  const storyDir = path.join(STORIES_DIR, storyName);
  const distStoryDir = path.join(DIST, 'stories', storyName);

  // Get root-level files
  const allFiles = fs.readdirSync(storyDir).filter(f => {
    const full = path.join(storyDir, f);
    return fs.statSync(full).isFile() && (f.endsWith('.md') || f.endsWith('.yaml'));
  }).sort(naturalSort);

  // Get chapters
  const chaptersDir = path.join(storyDir, 'chapters');
  let chapters = [];
  if (fs.existsSync(chaptersDir)) {
    chapters = fs.readdirSync(chaptersDir)
      .filter(f => f.endsWith('.md'))
      .sort(naturalSort);
  }

  // Check for chapter/interlude files in root
  const rootChapters = allFiles.filter(f =>
    f.match(/^(chapter-|interlude-)\d+.*\.md$/)
  ).sort(naturalSort);

  if (chapters.length === 0 && rootChapters.length > 0) {
    chapters = rootChapters;
  }

  manifest.push({ name: storyName, chapters, files: allFiles });

  // Copy story files to dist
  fs.mkdirSync(distStoryDir, { recursive: true });
  for (const f of allFiles) {
    fs.copyFileSync(path.join(storyDir, f), path.join(distStoryDir, f));
  }

  // Copy chapters dir if it exists
  if (fs.existsSync(chaptersDir)) {
    const distChaptersDir = path.join(distStoryDir, 'chapters');
    fs.mkdirSync(distChaptersDir, { recursive: true });
    for (const f of fs.readdirSync(chaptersDir)) {
      fs.copyFileSync(path.join(chaptersDir, f), path.join(distChaptersDir, f));
    }
  }
}

// Write manifest
fs.writeFileSync(path.join(DIST, 'stories.json'), JSON.stringify(manifest, null, 2));

console.log(`Built static site in dist/`);
console.log(`Stories: ${manifest.map(s => s.name).join(', ')}`);
console.log(`Total files: ${manifest.reduce((n, s) => n + s.files.length + s.chapters.length, 0)}`);
