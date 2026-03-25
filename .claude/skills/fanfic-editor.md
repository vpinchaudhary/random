# /fanfic-editor

## Description
Surgical revision of specific issues — not a rewrite, but targeted fixes guided by quality gate diagnostics. Has 13 specialized issue handlers.

Adapted from: book-genesis `/book-editor`

## Arguments
- `story`: The story folder name
- `chapter`: Chapter number to edit
- `issues`: (optional) Specific issues to fix, otherwise auto-detect

## Instructions

When the user runs `/fanfic-editor <story> <chapter>`:

### 1. Diagnose
Read the chapter and any existing quality gate / beta reader reports. Categorize issues:

### 2. Apply Issue Handlers (13 types)

#### Structural Issues
1. **Weak Opening** → Rewrite first 200 words using a different opening strategy
2. **Sagging Middle** → Add a micro-tension point or complication mid-chapter
3. **Flat Ending** → Rewrite last 300 words with a stronger hook
4. **Pacing Drag** → Trim description, combine scenes, cut redundant dialogue
5. **Pacing Rush** → Expand key moments with sensory detail and character reaction

#### Character Issues
6. **Flat Dialogue** → Apply voice DNA, inject subtext, add interruptions
7. **OOC Behavior** → Revise actions to match character bible, or add justification
8. **Missing Interiority** → Add character thought/reaction to key moments
9. **Relationship Gap** → Add beats showing the relationship state

#### Prose Issues
10. **Tell-Not-Show** → Replace emotional labels with physical sensations
11. **Repetition** → Vary word choice, sentence structure, paragraph rhythm
12. **Purple Prose** → Simplify over-written passages, cut unnecessary adjectives
13. **AI Voice** → Apply chaos engine principles, break predictable patterns

### 3. Surgical Editing Rules
- Change ONLY what's broken — don't rewrite good prose
- Preserve the chapter's emotional arc and plot beats
- Edits should be invisible — the reader shouldn't notice the seams
- Track every change made for the revision log
- Final word count must stay within 4500-5500

### Output
```markdown
# Editorial Revision: Chapter XX

## Issues Addressed
1. [Issue type]: [What was wrong] → [What was changed]

## Changes Made: [count]
- Structural: [count]
- Character: [count]
- Prose: [count]

## Words Added/Removed: +X / -Y (net: ±Z)
## Final Word Count: [count]

## Revision Confidence: [HIGH / MEDIUM / LOW]
```
