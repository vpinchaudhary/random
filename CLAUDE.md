# Fanfic Writer - AI Story Generation System

## Project Overview
This is an AI-powered fanfic writing system. Given a concept, it generates full-length fanfiction with **40+ chapters**, each chapter being **~5000 words**. The system uses specialized agents for research, writing, and consistency checking.

## Directory Structure
```
stories/
  <story-name>/
    concept.md          # Original concept/prompt
    outline.md          # Full story outline (all 40+ chapters)
    characters.md       # Character bible - tracks all characters
    worldbuilding.md    # World rules, settings, lore
    timeline.md         # Chronological event tracker
    chapters/
      chapter-01.md
      chapter-02.md
      ...
      chapter-40.md
```

## Writing Rules

### Chapter Requirements
- Each chapter MUST be approximately **5000 words** (4500-5500 acceptable range)
- Each story MUST have at least **40 chapters**
- Chapters must have a title and chapter number as H1 header
- Every chapter must end with a hook or cliffhanger to maintain reader engagement
- Include scene breaks with `---` between major scene transitions

### Story Quality Standards
- Characters must behave consistently with their established personality
- Plot threads introduced MUST be resolved by story end
- No plot holes - every event must have logical cause and effect
- Dialogue must sound natural and distinct per character
- Show, don't tell - use action and dialogue over exposition
- Maintain consistent tone throughout the story
- Pacing: balance action, dialogue, and description

### Consistency Rules
- ALWAYS check `characters.md` before writing dialogue or character actions
- ALWAYS check `timeline.md` before referencing past events
- ALWAYS check `worldbuilding.md` before describing settings or rules
- Update tracking files after each chapter is written
- Never contradict established canon or previously written chapters

## Agent System

### Available Agents (in `.claude/agents/`)
- **story-planner**: Creates full story outlines from concepts
- **chapter-writer**: Writes individual 5000-word chapters
- **consistency-checker**: Validates chapters against established facts
- **character-tracker**: Maintains character bible and catches OOC behavior
- **research-agent**: Researches source material for accuracy
- **world-builder**: Develops and maintains world/setting details
- **editor-agent**: Reviews chapters for quality, pacing, and prose

### Writing Workflow
1. User provides a concept
2. `research-agent` researches relevant source material
3. `story-planner` creates a 40+ chapter outline
4. `world-builder` establishes the setting and rules
5. `character-tracker` creates character profiles
6. For each chapter:
   a. `chapter-writer` drafts the chapter (~5000 words)
   b. `consistency-checker` validates against existing material
   c. `editor-agent` reviews for quality
   d. `character-tracker` updates character states
   e. Timeline is updated
7. Repeat until all chapters complete

## Commands
- `/write-story <concept>` - Start a new story from concept
- `/write-chapter <story> <chapter-number>` - Write a specific chapter
- `/check-consistency <story>` - Run consistency checks on a story
- `/story-status <story>` - Show progress of a story

## Style Notes
- Use markdown for all story files
- Chapter filenames: `chapter-XX.md` (zero-padded)
- Story folder names: kebab-case (e.g., `the-last-dragon`)
- Keep prose literary and engaging - this is creative writing, not technical docs
