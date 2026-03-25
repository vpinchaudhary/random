# /write-story

## Description
Start writing a new fanfiction story from a concept. Creates the full project structure, outline, and begins chapter generation.

## Instructions

When the user runs `/write-story <concept>`, follow this complete workflow:

### Phase 1: Setup
1. Convert the concept into a kebab-case folder name
2. Create the story directory: `stories/<story-name>/chapters/`
3. Save the original concept to `stories/<story-name>/concept.md`

### Phase 2: Research
1. Use the **research-agent** to research the source material, setting, and any real-world elements
2. Verify key facts and canon details
3. Save research findings for reference during writing

### Phase 3: Planning
1. Use the **story-planner** to create a full 40+ chapter outline
2. Structure across 5 acts with clear character arcs and plot progression
3. Save `outline.md` to the story folder

### Phase 4: World & Characters
1. Use the **world-builder** to create `worldbuilding.md`
2. Use the **character-tracker** to create `characters.md`
3. Create initial `timeline.md`

### Phase 5: Writing (per chapter)
1. Use the **chapter-writer** to draft each chapter (~5000 words)
2. Use the **consistency-checker** to validate the chapter
3. Use the **editor-agent** to review quality
4. Use the **character-tracker** to update character states
5. Update `timeline.md` with chapter events
6. Save chapter as `stories/<story-name>/chapters/chapter-XX.md`

### Phase 6: Review
1. After all chapters are written, run a full consistency check
2. Generate a story summary/synopsis

Always confirm the outline with the user before proceeding to write chapters.
