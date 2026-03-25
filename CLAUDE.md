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
    entity-state.yaml   # Persistent entity tracking (characters, locations, objects, knowledge graph)
    plot-threads.md     # Setup-payoff tracker (Chekhov's gun enforcement)
    tension-curve.md    # Conflict escalation mapping per chapter
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
- Plot threads introduced MUST be resolved by story end (tracked in `plot-threads.md`)
- No plot holes - every event must have logical cause and effect
- Dialogue must sound natural and distinct per character (cover-the-name test: can you tell who's speaking without the name tag?)
- Show, don't tell - maintain minimum 2:1 show/tell ratio
- Maintain consistent tone throughout the story
- Pacing: balance action, dialogue, and description (follow `tension-curve.md`)
- Every planted story element (Chekhov's guns) must pay off

### Anti-AI Writing Patterns (MANDATORY)
Every chapter MUST contain:
- One strange personal detail unrelated to the plot
- One imperfect moment (stumbling, irrationality, failed composure)
- One unresolved micro-element (not everything ties up neatly)
- One grounding physical detail (specific, sensory, non-generic)

BANNED patterns (instant revision trigger):
- Explanatory extensions (unpacking every simile/metaphor)
- Clean dialogue turns (real people interrupt, trail off, change subject)
- Thematic echo chambers (not every scene reinforces the theme)
- LLM favorite words: "obsidian", "settled", "heavy", "whispered", "flickered", "steeled", "breathed", "murmured"
- Starting consecutive chapters the same way
- Maximum-intensity emotions in every scene
- Perfect explanations and neat resolutions

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
- **research-agent**: Researches source material for accuracy (anti-hallucination)
- **world-builder**: Develops and maintains world/setting details
- **editor-agent**: Reviews chapters for quality, pacing, and prose
- **chaos-engine**: Injects human unpredictability and breaks AI patterns
- **plot-thread-tracker**: Tracks setup/payoff elements (Chekhov's gun enforcement)
- **beta-reader**: Simulates reader experience, flags confusion points, scores chapters

### Writing Workflow
1. User provides a concept
2. `research-agent` researches relevant source material and verifies facts
3. `story-planner` creates a 40+ chapter outline with tension curve
4. `world-builder` establishes the setting and rules
5. `character-tracker` creates character profiles with chaos markers
6. `plot-thread-tracker` registers all planted story elements from outline
7. For each chapter:
   a. `chapter-writer` drafts the chapter (~5000 words)
   b. `chaos-engine` injects human imperfections and breaks AI patterns
   c. `consistency-checker` validates against existing material + entity state
   d. `editor-agent` reviews for quality (target: 7/10 minimum, retry up to 2x if below)
   e. `beta-reader` simulates reader experience and scores
   f. `character-tracker` updates character states and knowledge graph
   g. `plot-thread-tracker` marks resolved setups, flags overdue payoffs
   h. Timeline and entity state updated
8. **Chapters 1-3 MUST be written sequentially** to lock voice and tone
9. Chapters 4+ may be batched if outline is stable
10. Final pass: `consistency-checker` runs full-manuscript audit

## Commands
- `/write-story <concept>` - Start a new story from concept
- `/write-chapter <story> <chapter-number>` - Write a specific chapter
- `/check-consistency <story>` - Run consistency checks on a story
- `/story-status <story>` - Show progress of a story
- `/chaos-pass <story> <chapter-number>` - Run chaos engine on a chapter
- `/beta-read <story> <chapter-number>` - Simulate beta reader feedback

## Style Notes
- Use markdown for all story files
- Chapter filenames: `chapter-XX.md` (zero-padded)
- Story folder names: kebab-case (e.g., `the-last-dragon`)
- Keep prose literary and engaging - this is creative writing, not technical docs
