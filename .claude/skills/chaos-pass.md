# /chaos-pass

## Description
Run the chaos engine on a chapter to inject human unpredictability and break AI patterns.

## Arguments
- `story`: The story folder name (kebab-case)
- `chapter`: The chapter number

## Instructions

When the user runs `/chaos-pass <story> <chapter-number>`:

1. **Read the Chapter**: Load `stories/<story>/chapters/chapter-XX.md`
2. **Read Context**: Load `characters.md` for character chaos markers
3. **Run the chaos-engine agent** which will:
   - Scan for AI writing patterns (banned words, clean dialogue, explanatory extensions)
   - Scan for monotonous rhythm and symmetric paragraphs
   - Identify locations to inject chaos markers (irrelevant obsessions, cognitive distortions, unprompted memories, failed composure, physical imperfection)
   - Make surgical edits — insert/modify specific passages
   - Replace banned LLM-favorite words
4. **Save** the updated chapter
5. **Report** changes made and human authenticity score
