# /quality-gate

## Description
Automated evaluate → fix → re-evaluate loop. Keeps running until chapter meets quality threshold or max iterations reached.

Adapted from: book-genesis `/quality-gate`

## Arguments
- `story`: The story folder name
- `chapter`: Chapter number to gate

## Instructions

When the user runs `/quality-gate <story> <chapter>`:

### The Loop

```
EVALUATE (beta-read) → score < 7? → FIX (editor) → RE-EVALUATE → score < 7? → FIX → RE-EVALUATE → ACCEPT
                     ↓                                           ↓
                  score ≥ 7? → PASS                          max 3 cycles → ACCEPT WITH NOTES
```

### Step 1: Evaluate
Run `/beta-read` on the chapter. Get the 7-dimension score.

### Step 2: Gate Check
- **Score ≥ 8**: PASS — chapter is publish-ready
- **Score 7-7.9**: PASS — minor polish optional, not required
- **Score 5-6.9**: NEEDS WORK — enter fix loop
- **Score < 5**: NEEDS MAJOR WORK — enter fix loop with higher priority

### Step 3: Fix (if needed)
Identify the weakest 1-2 dimensions from the score. Route to the appropriate fix:

| Weak Dimension | Fix Action |
|---------------|------------|
| Hook | Run `/hook-craft` |
| Characters | Check against voice-dna, run `/dialogue-polish` |
| Pacing | Targeted edit: expand rushed scenes or trim draggy ones |
| Emotion | Inject show-don't-tell rewrites, add physical sensation |
| Prose | Run `/mechanical-preprocess`, then targeted line edits |
| Plot | Check against outline, add missing plot advancement |
| Cliffhanger | Run `/hook-craft` focused on ending |

### Step 4: Re-Evaluate
Run `/beta-read` again on the revised chapter.

### Step 5: Iterate or Accept
- If score improved to ≥ 7: PASS
- If score improved but still < 7: one more fix cycle (max 3 total)
- If score didn't improve: ACCEPT WITH NOTES — flag for manual review

### Anti-Inflation Rule
- Score increases must be backed by specific evidence of improvement
- Max score increase per iteration: +1.5 points
- If a dimension drops during fixing another, flag it

### Output
```markdown
# Quality Gate: Chapter XX

## Iteration 1
- Score: X/10
- Weakest: [dimension]
- Action: [what was fixed]

## Iteration 2 (if needed)
- Score: X/10
- Improvement: +X
- Action: [what was fixed]

## Final Result: [PASS / ACCEPT WITH NOTES]
- Final Score: X/10
- Iterations Used: X/3
- Outstanding Issues: [if any]
```
