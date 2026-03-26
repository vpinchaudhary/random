# /fanfic-auto

## Description
Fully autonomous fanfic generation pipeline. One command, one concept, complete story. Runs all 17 phases with 3 human checkpoints.

Adapted from: book-genesis `/book-auto`

## Arguments
- `concept`: The story concept/premise

## Instructions

When the user runs `/fanfic-auto <concept>`:

Run the full 17-phase pipeline autonomously, pausing only at 3 checkpoints:

### Phase 1: Research & Audience
1. `/fanfic-researcher` — Research source material, canon, market
2. `/reader-persona` — Create 3-5 target reader profiles

### Phase 2: Foundation
3. `/narrative-foundation` — Characters, theme, outline, engagement type
4. `/voice-fingerprint` — Per-character voice DNA
5. **>>> CHECKPOINT 1: Show foundation to user for approval <<<**
6. `/entity-tracker BUILD` — Initialize entity-state.yaml
7. `/check-consistency` on outline — Pre-flight continuity check

### Phase 3: Writing (per chapter, 40+ chapters)
8. `/prose-craft` — Write chapter (~5000 words) with structural type
9. `/dialogue-polish` — Refine dialogue, cover-the-name test
10. `/hook-craft` — Score and improve opening + ending hooks
11. `/chaos-pass` — Inject human unpredictability
12. `/entity-tracker UPDATE` — Update entity state after chapter
13. `/mechanical-preprocess` — Fix dashes, adverbs, repetition patterns

### Phase 4: Evaluation (per chapter)
14. `/beta-read` — Score chapter (7-dimension + Tomorrow Test)
15. `/quality-gate` — If score < 7, loop: fix → re-evaluate (max 3x)
16. **>>> CHECKPOINT 2: Every 10 chapters, show progress to user <<<**

### Phase 5: Revision (full manuscript)
17. `/fanfic-editor` — Surgical revision of flagged issues
18. `/entity-tracker UPDATE` — Final entity state sync
19. `/check-consistency` — Full manuscript audit

### Phase 6: Delivery
20. `/story-status` — Final progress report
21. **>>> CHECKPOINT 3: Story complete, deliver to user <<<**

### Key Rules
- Chapters 1-3 MUST be written sequentially to lock voice
- Chapters 4+ can proceed faster once voice is established
- Never skip the quality gate — minimum 7/10 per chapter
- Update entity-state.yaml after EVERY chapter, not in batches
