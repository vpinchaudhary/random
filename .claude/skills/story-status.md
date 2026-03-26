# /story-status

## Description
Show the current progress and status of a story.

## Arguments
- `story`: The story folder name (kebab-case)

## Instructions

When the user runs `/story-status <story>`:

1. **Read Story Files**:
   - Check which chapters exist in `stories/<story>/chapters/`
   - Read `outline.md` to know total planned chapters
   - Read `concept.md` for the original premise

2. **Calculate Progress**:
   - Chapters written vs. planned
   - Approximate total word count (sum of all chapter word counts)
   - Percentage complete

3. **Assess Quality**:
   - Check if tracking files (`characters.md`, `timeline.md`, `worldbuilding.md`) are up to date
   - Note the last chapter written
   - Flag any known consistency issues

4. **Display Status**:
   ```
   Story: [Title]
   Concept: [Brief summary]
   Progress: [X/Y chapters] ([Z%])
   Total Words: [approximate count]
   Last Chapter: chapter-XX
   Tracking Files: [up to date / needs update]
   Status: [In Progress / Complete / Needs Review]
   ```
