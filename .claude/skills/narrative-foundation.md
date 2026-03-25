# /narrative-foundation

## Description
Build the complete narrative foundation: characters with chaos markers, theme-as-question, full outline, engagement strategy, and voice bank. This is the single most important phase.

Adapted from: book-genesis `/narrative-foundation`

## Arguments
- `story`: The story folder name

## Instructions

When the user runs `/narrative-foundation <story>`:

### 1. Load Prerequisites
- Read `concept.md`, `research.md`, `reader-personas.md`

### 2. Theme as Question
Define the story's central theme as a question, not a statement:
- BAD: "Love conquers all"
- GOOD: "Can love survive when both people have been taught that vulnerability is weakness?"

The theme-question should have no easy answer. The story explores it; the ending suggests one possible answer.

### 3. Character Architecture
For each major character, define:
- Core identity, motivation, fatal flaw (standard)
- **5 Chaos Markers** (from book-genesis):
  1. Irrelevant Obsession (plot-irrelevant recurring thought)
  2. Cognitive Distortion (habitual thinking error)
  3. Unprompted Memory Trigger (sensory trigger for random memories)
  4. Failed Emotional Management Pattern (how composure breaks)
  5. Distinguishability Marker (identifiable without name tag)
- Relationship web with trust scores (-10 to +10)
- Character arc: where they start → crisis point → where they end

### 4. Full Outline (40+ chapters)
Create a chapter-by-chapter outline using 5-act structure:
- **Act 1** (Ch 1-8): Setup, hook, inciting incident
- **Act 2A** (Ch 9-18): Rising complications, subplot launches
- **Act 2B** (Ch 19-28): Midpoint shift, stakes escalate, character trials
- **Act 3** (Ch 29-36): Crisis, dark moment, all threads converge
- **Resolution** (Ch 37-40+): Climax, falling action, resolution

Each chapter entry includes: title, POV, key events, emotional arc, hook type, thread developments.

### 5. Tension Curve
Map the conflict intensity (0-1 scale) for each chapter:
- Use wave pattern: sinusoidal oscillation with upward trend
- Climactic boost in final 10% of chapters
- No more than 3 high-intensity chapters without a breather
- Detect "saturation" risk (prolonged high intensity = reader fatigue)

### 6. Voice Bank
Establish the story's overall voice:
- Prose style (lyrical, sparse, conversational, literary)
- Tense (past/present)
- POV mode (third limited, first person, alternating)
- Tone palette (dark, warm, sardonic, earnest, etc.)
- Vocabulary register (simple, moderate, literary)

### Output Files
- `stories/<story>/outline.md` — Full chapter outline
- `stories/<story>/characters.md` — Character bible with chaos markers
- `stories/<story>/tension-curve.md` — Per-chapter tension mapping
- Update `worldbuilding.md` and `timeline.md` skeleton
