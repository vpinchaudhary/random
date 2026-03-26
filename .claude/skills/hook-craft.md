# /hook-craft

## Description
Score and improve chapter openings and endings for maximum reader retention. The binge-read test.

Adapted from: book-genesis `/hook-craft`

## Arguments
- `story`: The story folder name
- `chapter`: Chapter number to evaluate

## Instructions

When the user runs `/hook-craft <story> <chapter>`:

### 1. Opening Hook Analysis
Read the first 500 words and score:

| Criterion | Score (1-10) |
|-----------|-------------|
| **Immediate engagement** — does it grab attention in the first line? | |
| **Curiosity gap** — does it raise a question the reader wants answered? | |
| **Grounding** — does the reader know where/when/who within 200 words? | |
| **Momentum** — does it propel the reader forward? | |
| **Differentiation** — is it different from the previous chapter's opening? | |

If opening score < 7/10: suggest a specific rewrite using one of the 7 opening strategies.

### 2. Ending Hook Analysis
Read the last 500 words and score:

| Criterion | Score (1-10) |
|-----------|-------------|
| **Cliffhanger/tension** — is there unresolved tension? | |
| **Emotional resonance** — does it leave an emotional impression? | |
| **Promise** — does it promise something compelling in the next chapter? | |
| **Surprise** — is there something unexpected in the final beat? | |
| **Compulsion** — would you click "next chapter" at 2 AM? | |

If ending score < 7/10: suggest a specific revision.

### 3. The Binge Test
Imagine reading this chapter immediately after the previous one:
- Does the transition feel smooth?
- Is there momentum carried forward?
- Is the reader rewarded for continuing?

Then imagine a reader deciding whether to read the NEXT chapter:
- **Would they stop here?** If yes, why? Fix it.
- **Would they keep going?** What specifically compels them?

### 4. Hook Type Variety Check
Review the last 5 chapters' hook types:
- Are endings repetitive? (all cliffhangers, all emotional, all reveal)
- Are openings repetitive? (all action, all dialogue, all description)
- Suggest variety where patterns are detected

### Output
```markdown
# Hook Analysis: Chapter XX

## Opening Score: X/10
[Assessment + specific fix if needed]

## Ending Score: X/10
[Assessment + specific fix if needed]

## Binge Test: [PASS / NEEDS WORK]
[Analysis]

## Hook Variety: [OK / REPETITIVE]
[Pattern detected + suggestion]
```
