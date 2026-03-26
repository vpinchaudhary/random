# /continuity-guardian

## Description
Cross-manuscript consistency audit using entity state for fast validation. Catches what individual chapter checks miss — patterns across the full story.

Adapted from: book-genesis `/continuity-guardian`

## Arguments
- `story`: The story folder name
- `scope`: `outline` (pre-writing) or `manuscript` (post-writing) or `chapter X` (single chapter)

## Instructions

When the user runs `/continuity-guardian <story> <scope>`:

### Outline Scope (pre-writing)
Before any chapters are written, audit the outline for:
- Plot threads that are planted but never resolved
- Character arcs that stall or regress without purpose
- Timeline impossibilities (events that can't happen in sequence)
- Power/ability escalation that breaks world rules
- Relationships that shift too fast without development chapters

### Chapter Scope (per chapter)
After a chapter is written, fast-check using `entity-state.yaml`:
- Character locations match where they were last seen
- Character knowledge doesn't include things they shouldn't know yet
- Objects are where they should be (nobody uses an item they don't have)
- Timeline progresses logically from previous chapter
- Relationship states match last known trust scores

### Manuscript Scope (full story)
After all chapters are written, comprehensive audit:

#### Character Continuity
- Track each character through every chapter appearance
- Verify physical descriptions never change (hair color, scars, etc.)
- Verify speech patterns stay consistent (check against voice DNA)
- Verify knowledge states progress logically (no retroactive knowledge)
- Verify relationship arcs develop gradually

#### Object Tracking
- Every Chekhov's gun fired
- No items appear from nowhere
- Destroyed/used items don't reappear

#### World Rule Compliance
- Magic/power system limitations respected throughout
- Geography consistent (distances, travel times)
- Political/social structures maintain logic

#### Timeline Audit
- Build complete chronology from chapter 1 to final
- Verify all "X days ago" references
- Check seasonal/weather continuity
- Verify aging consistency

### Speed Advantage
Uses `entity-state.yaml` for validation (seconds) rather than re-reading the full manuscript (minutes). Entity state is the source of truth — keep it updated.

### Output
```markdown
# Continuity Audit: [Story Name]
## Scope: [outline / chapter X / manuscript]

## Summary
- Issues Found: [count]
- Critical: [count]
- Warnings: [count]

## Findings
[Detailed issues with chapter references and fixes]

## Continuity Score: [X/10]
```
