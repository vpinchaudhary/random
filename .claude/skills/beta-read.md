# /beta-read

## Description
Simulate beta reader feedback on a chapter from multiple reader profiles.

## Arguments
- `story`: The story folder name (kebab-case)
- `chapter`: The chapter number

## Instructions

When the user runs `/beta-read <story> <chapter-number>`:

1. **Read the Chapter**: Load `stories/<story>/chapters/chapter-XX.md`
2. **Read Context**: Load the previous 2-3 chapters, `characters.md`, and `outline.md`
3. **Run the beta-reader agent** which will:
   - Simulate 3-5 reader profiles (Canon Purist, Casual Reader, Emotional Reader, Critical Reader, Binge Reader)
   - Score the chapter on 7 dimensions (Hook, Characters, Pacing, Emotion, Prose, Plot, Cliffhanger)
   - Run the "Tomorrow Test" (would the reader come back?)
   - Detect confusion points
   - Check for repetition against recent chapters
4. **If score < 7/10**: Flag for revision with specific, actionable feedback
5. **Report** the full beta reader analysis to the user
