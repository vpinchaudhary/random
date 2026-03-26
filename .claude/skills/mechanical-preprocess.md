# /mechanical-preprocess

## Description
Automated mechanical cleanup of prose — fixes dashes, repeated words, adverb overuse, and common AI writing patterns. Fast, rule-based, no creative judgment.

Adapted from: book-genesis `/mechanical-preprocess`

## Arguments
- `story`: The story folder name
- `chapter`: Chapter number to preprocess

## Instructions

When the user runs `/mechanical-preprocess <story> <chapter>`:

### Automated Fixes (apply silently)

#### 1. Punctuation Cleanup
- Convert `--` to em dashes `—`
- Fix smart quote inconsistencies
- Remove double spaces
- Fix ellipsis formatting (`...` → `…` or consistent style)
- Ensure dialogue punctuation is inside quotes

#### 2. Banned Word Scan & Replace
Scan for and flag LLM-favorite words:
- `obsidian`, `ethereal`, `palpable`, `cacophony`, `gossamer`
- `steeled`, `flickered`, `murmured`, `breathed`, `piercing`
- `tangible`, `resonate`, `shattered` (when used for emotions)
- `settled` (as in "silence settled"), `heavy` (as in "heavy silence")

Don't auto-replace — flag with position and suggest alternatives.

#### 3. Adverb Audit
- Flag sentences with more than 1 adverb
- Flag `-ly` adverbs that weaken strong verbs ("ran quickly" → "sprinted")
- Provide strong verb alternatives

#### 4. Repetition Detection
- Flag any non-common word used 3+ times within 500 words
- Flag identical sentence openings within the same paragraph
- Flag repeated phrases across scenes (same description used twice)
- Flag "echo" words (same word at start/end of consecutive sentences)

#### 5. Passive Voice Detection
- Flag passive constructions ("was [verb]ed by")
- Suggest active alternatives
- Exception: passive is OK for emphasis ("The door was gone.")

#### 6. AI Pattern Detection
- **Explanatory extension**: simile/metaphor immediately followed by explanation
- **List of three**: three adjectives/items in a row (common AI pattern)
- **Emotional labeling**: "She felt [emotion]" instead of showing it
- **Perfect attribution**: every dialogue line having a tag

#### 7. Paragraph Length Check
- Flag any paragraph over 200 words (consider breaking up)
- Flag 5+ consecutive short paragraphs (may feel choppy)

### Output
```markdown
# Mechanical Preprocess: Chapter XX

## Auto-Fixed
- [X] punctuation issues corrected

## Flagged for Review
### Banned Words: [count]
- Line X: "[word]" → suggested: "[alternative]"

### Adverb Issues: [count]
- Line X: "[phrase]" → suggested: "[stronger verb]"

### Repetitions: [count]
- "[word]" appears X times in [range]

### Passive Voice: [count]
- Line X: "[passive]" → "[active suggestion]"

### AI Patterns: [count]
- Line X: [pattern type] — [suggestion]
```
