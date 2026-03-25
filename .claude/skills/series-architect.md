# /series-architect

## Description
Multi-fic series management — shared universe bible, macro arcs across stories, character continuity between fics, and thread inheritance.

Adapted from: book-genesis `/series-architect`

## Arguments
- `series`: The series folder name
- `action`: `init` | `add-story` | `status` | `bible`

## Instructions

### Init (`/series-architect <series> init`)
Create `stories/<series>/series-bible.yaml`:

```yaml
series: "<series-name>"
stories_planned: []
stories_complete: []

universe:
  shared_worldbuilding: "path to shared world doc"
  shared_characters: "path to shared character doc"
  timeline: "path to series-wide timeline"

macro_arcs:
  - name: "Main Arc Name"
    status: "active"
    spans_stories: ["story-1", "story-2", "story-3"]
    setup_story: "story-1"
    payoff_story: "story-3"
    current_state: "description"

character_continuity:
  character_name:
    first_appearance: "story-1, chapter-1"
    current_state: "as of latest story"
    arc_across_series: "description of growth"
    knowledge_at_series_end: ["what they know"]

unresolved_threads:
  - thread: "description"
    planted_in: "story-1, chapter-15"
    intended_resolution: "story-3"
    status: "active"

canon_divergences:
  - point: "where we diverge from canon"
    story: "story-1, chapter-X"
    reason: "why"
    consequences: ["what changes because of this"]
```

### Add Story (`/series-architect <series> add-story <story-name>`)
- Register the new story in the series
- Inherit unresolved threads from previous stories
- Import character states from last story's ending
- Set up thread connections to the macro arc

### Bible (`/series-architect <series> bible`)
Generate a comprehensive series bible document:
- Universe rules (accumulated from all stories)
- Character states (current, with full history)
- Timeline (all stories on one chronology)
- Open threads awaiting resolution
- Canon divergence registry

### Status (`/series-architect <series> status`)
Show series-wide progress:
- Stories complete / planned
- Macro arc progression
- Unresolved cross-story threads
- Character arc status across series
