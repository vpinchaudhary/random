# /write-chapter

## Description
Write a specific chapter for an existing story.

## Arguments
- `story`: The story folder name (kebab-case)
- `chapter`: The chapter number to write

## Instructions

When the user runs `/write-chapter <story> <chapter-number>`:

1. **Load Context**:
   - Read `stories/<story>/outline.md` for the chapter plan
   - Read `stories/<story>/characters.md` for character states
   - Read `stories/<story>/worldbuilding.md` for world rules
   - Read `stories/<story>/timeline.md` for chronology
   - Read the previous 2-3 chapters for continuity

2. **Write the Chapter**:
   - Use the **chapter-writer** agent
   - Target 5000 words (4500-5500 acceptable)
   - Follow the outline's planned events for this chapter
   - Start with a hook, end with a cliffhanger
   - Use scene breaks (`---`) between major scenes

3. **Validate**:
   - Run the **consistency-checker** against all prior material
   - Run the **editor-agent** for quality review
   - Fix any CRITICAL issues found

4. **Update Tracking**:
   - Update `characters.md` with character developments
   - Update `timeline.md` with new events
   - Update `worldbuilding.md` if new world details introduced

5. **Save**:
   - Write to `stories/<story>/chapters/chapter-XX.md` (zero-padded)
   - Report word count and any consistency notes to user
