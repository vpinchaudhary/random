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

### Full 17-Phase Pipeline Flow

```
CONCEPT
  │
  ▼
┌─────────────────────────────────────────────┐
│ PHASE 1: RESEARCH                           │
│  /fanfic-researcher → research.md           │
│  /reader-persona → reader-personas.md       │
└─────────────────┬───────────────────────────┘
                  ▼
┌─────────────────────────────────────────────┐
│ PHASE 2: FOUNDATION                         │
│  /narrative-foundation → outline.md,        │
│    characters.md, tension-curve.md          │
│  /voice-fingerprint → voice-dna.md          │
│                                             │
│  >>>>>> CHECKPOINT 1: User approves <<<<<<  │
│                                             │
│  /entity-tracker BUILD → entity-state.yaml  │
│  /continuity-guardian outline               │
└─────────────────┬───────────────────────────┘
                  ▼
┌─────────────────────────────────────────────┐
│ PHASE 3: WRITING (per chapter, 40+)         │
│  Chapters 1-3: SEQUENTIAL (lock voice)      │
│  Chapters 4+: can proceed faster            │
│                                             │
│  /prose-craft → chapter-XX.md               │
│    ↓                                        │
│  /dialogue-polish → refined dialogue        │
│    ↓                                        │
│  /hook-craft → scored openings/endings      │
│    ↓                                        │
│  /chaos-pass → human imperfection injected  │
│    ↓                                        │
│  /entity-tracker UPDATE                     │
│    ↓                                        │
│  /mechanical-preprocess → cleaned prose     │
└─────────────────┬───────────────────────────┘
                  ▼
┌─────────────────────────────────────────────┐
│ PHASE 4: EVALUATION (per chapter)           │
│  /beta-read → 7-dimension score             │
│    ↓                                        │
│  /quality-gate → evaluate→fix→re-evaluate   │
│    (loops max 3x until score ≥ 7/10)        │
│                                             │
│  >> CHECKPOINT 2: Every 10 chapters <<      │
└─────────────────┬───────────────────────────┘
                  ▼
┌─────────────────────────────────────────────┐
│ PHASE 5: REVISION (full manuscript)         │
│  /fanfic-editor → surgical fixes            │
│  /entity-tracker UPDATE → final state       │
│  /continuity-guardian manuscript             │
│  /check-consistency → full audit            │
└─────────────────┬───────────────────────────┘
                  ▼
┌─────────────────────────────────────────────┐
│ PHASE 6: DELIVERY                           │
│  /story-status → final report               │
│                                             │
│  >>>>>> CHECKPOINT 3: Story complete <<<<<<  │
└─────────────────────────────────────────────┘
```

### Key Rules
- **Chapters 1-3 MUST be sequential** to lock voice and tone
- **Minimum 7/10** quality score per chapter (quality gate enforces this)
- **Entity state updated after EVERY chapter** — never batch
- **Plot threads tracked continuously** — Chekhov's guns MUST fire
- **3 human checkpoints**: foundation approval, mid-progress review, final delivery

## Commands (21 Skills)

### Orchestration
- `/fanfic-auto <concept>` - **One command, full story.** Autonomous 17-phase pipeline with 3 checkpoints
- `/write-story <concept>` - Manual mode: phase-by-phase with user control
- `/manuscript-manager <story> <action>` - Project state engine (init/status/update)
- `/story-status <story>` - Quick progress dashboard

### Research & Foundation (Phases 1-2)
- `/fanfic-researcher <concept>` - Source material research, canon facts, anti-hallucination
- `/reader-persona <story>` - Create 3-5 target reader profiles with psychology
- `/narrative-foundation <story>` - Characters, theme-as-question, outline, tension curve, chaos markers
- `/voice-fingerprint <story>` - Per-character voice DNA and dialogue contrast matrix
- `/entity-tracker <story> <BUILD|UPDATE>` - Persistent entity state in YAML

### Writing (Phase 3)
- `/prose-craft <story> <chapter>` - Write chapter with structural type awareness (8 types)
- `/write-chapter <story> <chapter>` - Simple chapter writing (uses prose-craft internally)
- `/dialogue-polish <story> <chapter>` - Cover-the-name test, subtext injection, naturalism
- `/hook-craft <story> <chapter>` - Score/improve openings and endings, binge test
- `/chaos-pass <story> <chapter>` - Break AI patterns, inject human imperfection
- `/mechanical-preprocess <story> <chapter>` - Automated cleanup (dashes, adverbs, repetition, banned words)

### Evaluation (Phase 4)
- `/beta-read <story> <chapter>` - Multi-profile reader simulation, 7-dimension scoring
- `/quality-gate <story> <chapter>` - Auto-loop: evaluate → fix → re-evaluate (max 3x, min 7/10)

### Revision (Phase 5)
- `/fanfic-editor <story> <chapter>` - Surgical revision with 13 issue handlers
- `/check-consistency <story>` - Full manuscript consistency audit
- `/continuity-guardian <story> <scope>` - Fast entity-state-based continuity check

### Series Management
- `/series-architect <series> <action>` - Multi-fic universe bible, macro arcs, thread inheritance

## Style Notes
- Use markdown for all story files
- Chapter filenames: `chapter-XX.md` (zero-padded)
- Story folder names: kebab-case (e.g., `the-last-dragon`)
- Keep prose literary and engaging - this is creative writing, not technical docs
