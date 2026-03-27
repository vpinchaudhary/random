// Story Reader App
// Works in two modes:
// 1. Static (GitHub Pages): reads stories.json manifest + raw .md files
// 2. Local server: reads from /api/ endpoints

const isStatic = !window.location.port || window.location.protocol === 'file:';
let state = {
  view: 'stories', // stories | chapters | reading
  story: null,
  chapter: null,
  stories: [],
  chapters: [],
};

// Progress tracking via localStorage
function getProgress(story) {
  const data = JSON.parse(localStorage.getItem('reader-progress') || '{}');
  return data[story] || { lastChapter: null, read: [] };
}

function setProgress(story, chapterFile) {
  const data = JSON.parse(localStorage.getItem('reader-progress') || '{}');
  if (!data[story]) data[story] = { lastChapter: null, read: [] };
  data[story].lastChapter = chapterFile;
  if (!data[story].read.includes(chapterFile)) {
    data[story].read.push(chapterFile);
  }
  localStorage.setItem('reader-progress', JSON.stringify(data));
}

// Fetch helpers
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

// Format story name from kebab-case
function formatName(name) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// Extract chapter number and title from filename or content
function formatChapterName(filename) {
  const base = filename.replace('.md', '');
  // Handle chapter-XX format
  const match = base.match(/^chapter-(\d+)$/);
  if (match) return `Chapter ${parseInt(match[1])}`;
  // Handle interlude format
  if (base.startsWith('interlude')) return formatName(base);
  return formatName(base);
}

// Render views
async function renderStories() {
  state.view = 'stories';
  state.story = null;
  state.chapter = null;
  document.getElementById('header-title').textContent = 'Story Reader';
  document.getElementById('breadcrumb').innerHTML = '';
  document.getElementById('nav-footer').classList.add('hidden');

  try {
    const stories = isStatic
      ? await fetchJSON('stories.json')
      : await fetchJSON('/api/stories');
    state.stories = stories;

    if (stories.length === 0) {
      document.getElementById('content').innerHTML =
        '<p class="empty-state">No stories found. Add story directories to the stories/ folder.</p>';
      return;
    }

    let html = '<ul class="story-list">';
    for (const s of stories) {
      const progress = getProgress(s.name);
      const chapterCount = s.chapters.length;
      const readCount = progress.read.length;
      const badge = chapterCount > 0
        ? `<span class="progress-badge">${readCount}/${chapterCount} read</span>`
        : '<span class="chapter-meta">No chapters yet</span>';
      const fileCount = s.files.length;
      html += `
        <li onclick="openStory('${s.name}')">
          <div>
            <div class="story-title">${formatName(s.name)}</div>
            <div class="story-meta">${chapterCount} chapters, ${fileCount} files</div>
          </div>
          ${badge}
        </li>`;
    }
    html += '</ul>';
    document.getElementById('content').innerHTML = html;
  } catch (e) {
    document.getElementById('content').innerHTML =
      `<p class="empty-state">Failed to load stories. Make sure the server is running.<br><code>${e.message}</code></p>`;
  }
}

async function openStory(name) {
  state.view = 'chapters';
  state.story = name;
  state.chapter = null;
  document.getElementById('header-title').textContent = formatName(name);
  document.getElementById('breadcrumb').innerHTML =
    `<a href="#" onclick="renderStories(); return false;">Stories</a> / ${formatName(name)}`;
  document.getElementById('nav-footer').classList.add('hidden');

  try {
    const story = state.stories.find(s => s.name === name) ||
      (isStatic ? null : await fetchJSON(`/api/stories/${name}`));
    // Show chapters first, then other files
    const progress = getProgress(name);
    const chapters = story.chapters;
    const otherFiles = story.files.filter(f => !chapters.includes(f));

    let html = '';

    if (chapters.length > 0) {
      html += '<h3 style="margin-bottom:12px;font-size:1rem;color:#666;">Chapters</h3>';
      html += '<ul class="chapter-list">';
      for (const ch of chapters) {
        const isRead = progress.read.includes(ch);
        const isCurrent = progress.lastChapter === ch;
        let badge = '';
        if (isCurrent) badge = '<span class="progress-badge current">Last read</span>';
        else if (isRead) badge = '<span class="progress-badge">Read</span>';
        html += `
          <li onclick="openChapter('${name}', '${ch}')">
            <span class="chapter-name">${formatChapterName(ch)}</span>
            ${badge}
          </li>`;
      }
      html += '</ul>';
    }

    if (otherFiles.length > 0) {
      html += '<h3 style="margin:24px 0 12px;font-size:1rem;color:#666;">Reference Files</h3>';
      html += '<ul class="chapter-list">';
      for (const f of otherFiles) {
        html += `
          <li onclick="openChapter('${name}', '${f}')">
            <span class="chapter-name">${f}</span>
          </li>`;
      }
      html += '</ul>';
    }

    if (chapters.length === 0 && otherFiles.length === 0) {
      html = '<p class="empty-state">No files found in this story.</p>';
    }

    state.chapters = chapters.length > 0 ? chapters : otherFiles;
    document.getElementById('content').innerHTML = html;
  } catch (e) {
    document.getElementById('content').innerHTML =
      `<p class="empty-state">Failed to load story.<br><code>${e.message}</code></p>`;
  }
}

async function openChapter(storyName, chapterFile) {
  state.view = 'reading';
  state.story = storyName;
  state.chapter = chapterFile;

  document.getElementById('header-title').textContent = formatChapterName(chapterFile);
  document.getElementById('breadcrumb').innerHTML =
    `<a href="#" onclick="renderStories(); return false;">Stories</a> / ` +
    `<a href="#" onclick="openStory('${storyName}'); return false;">${formatName(storyName)}</a> / ` +
    formatChapterName(chapterFile);

  // Update progress for actual chapters
  if (chapterFile.startsWith('chapter-') || chapterFile.startsWith('interlude')) {
    setProgress(storyName, chapterFile);
  }

  // Show footer nav
  const footer = document.getElementById('nav-footer');
  footer.classList.remove('hidden');
  updateNavButtons();

  try {
    // In static mode, try chapters/ subdir first, then root
    let text;
    if (isStatic) {
      try {
        text = await fetchText(`stories/${storyName}/chapters/${chapterFile}`);
      } catch {
        text = await fetchText(`stories/${storyName}/${chapterFile}`);
      }
    } else {
      text = await fetchText(`/api/stories/${storyName}/${chapterFile}`);
    }
    const html = marked.parse(text);
    document.getElementById('content').innerHTML = `<div class="chapter-content">${html}</div>`;
    window.scrollTo(0, 0);
  } catch (e) {
    document.getElementById('content').innerHTML =
      `<p class="empty-state">Failed to load file.<br><code>${e.message}</code></p>`;
  }
}

function updateNavButtons() {
  const allFiles = state.chapters;
  const idx = allFiles.indexOf(state.chapter);
  document.getElementById('btn-prev').disabled = idx <= 0;
  document.getElementById('btn-next').disabled = idx >= allFiles.length - 1 || idx === -1;
}

function navPrev() {
  const idx = state.chapters.indexOf(state.chapter);
  if (idx > 0) openChapter(state.story, state.chapters[idx - 1]);
}

function navNext() {
  const idx = state.chapters.indexOf(state.chapter);
  if (idx < state.chapters.length - 1) openChapter(state.story, state.chapters[idx + 1]);
}

function navList() {
  openStory(state.story);
}

// Init
renderStories();
