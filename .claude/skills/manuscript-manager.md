# /manuscript-manager

## Description
State engine for tracking the overall project — which phases are complete, decision log, and handoff safety between skills.

Adapted from: book-genesis `/manuscript-manager`

## Arguments
- `story`: The story folder name
- `action`: `status` | `update` | `init`

## Instructions

### Init (`/manuscript-manager <story> init`)
Create `stories/<story>/project-state.yaml`:

```yaml
story: "<story-name>"
created: "YYYY-MM-DD"
status: "in-progress"  # in-progress | paused | complete | abandoned

phases:
  research:
    status: "not-started"  # not-started | in-progress | complete | skipped
    completed_at: null
  reader-personas:
    status: "not-started"
    completed_at: null
  narrative-foundation:
    status: "not-started"
    completed_at: null
  voice-fingerprint:
    status: "not-started"
    completed_at: null
  entity-tracker-build:
    status: "not-started"
    completed_at: null
  writing:
    status: "not-started"
    chapters_complete: 0
    chapters_total: 40
    last_chapter_written: 0
    completed_at: null
  evaluation:
    status: "not-started"
    chapters_passed: 0
    completed_at: null
  revision:
    status: "not-started"
    completed_at: null
  continuity-audit:
    status: "not-started"
    completed_at: null

checkpoints:
  foundation_approved: false
  mid_progress_approved: false
  final_approved: false

decision_log:
  - date: "YYYY-MM-DD"
    decision: "Project initialized"
    reason: "User provided concept"

word_count:
  total: 0
  per_chapter: {}

quality_scores:
  per_chapter: {}
  average: 0
```

### Status (`/manuscript-manager <story> status`)
Read `project-state.yaml` and display:
- Current phase and progress
- Chapters complete / total
- Total word count
- Average quality score
- Next action needed
- Any blockers or overdue items

### Update (`/manuscript-manager <story> update`)
Update `project-state.yaml` after any skill runs:
- Mark phases complete
- Update chapter counts
- Log decisions
- Update word counts and quality scores
- Record checkpoint approvals

### Handoff Safety
Before any skill runs, check project state:
- Are prerequisites complete? (can't write chapters before foundation)
- Is another skill currently modifying the same chapter? (prevent conflicts)
- Are there unresolved critical issues from previous phases?
