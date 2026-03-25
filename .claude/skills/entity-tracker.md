# /entity-tracker

## Description
Maintain persistent entity state tracking across the entire manuscript. Tracks characters, locations, objects, timeline, and knowledge graph in YAML format.

Adapted from: book-genesis `/entity-tracker`

## Arguments
- `story`: The story folder name
- `mode`: BUILD (initial) or UPDATE (per-chapter)
- `chapter`: (for UPDATE mode) chapter number just written

## Instructions

### BUILD Mode (`/entity-tracker <story> BUILD`)
Initialize `entity-state.yaml` from the story's foundation files:

```yaml
story: "<story-name>"
last_updated: "chapter-00"

characters:
  character_name:
    location: "starting location"
    status: "alive/healthy/injured/etc"
    emotional_state: "current emotion"
    relationships:
      other_character:
        trust: 0  # -10 to +10
        bond: "description"
        shared_secrets: []
    knowledge:
      knows: ["list of key facts they know"]
      doesnt_know: ["key facts they don't know"]
    objectives:
      current: "what they're trying to do"
      urgency: 5  # 1-10
    inventory: ["important items"]
    last_appearance: "chapter-00"

locations:
  location_name:
    description: "brief"
    occupants: ["who is here"]
    state: "normal/destroyed/modified"
    security: "open/guarded/sealed"
    change_history: []

objects:
  object_name:
    description: "what it is"
    location: "where it is"
    holder: "who has it"
    status: "intact/damaged/used/destroyed"
    chekhov: true/false  # is this a setup that needs payoff?

timeline:
  - chapter: 0
    events: ["story begins"]
    time_in_story: "day 1"

mysteries:
  mystery_name:
    setup_chapter: 0
    clues:
      - chapter: X
        clue: "description"
        obviousness: "subtle/moderate/overt"
    red_herrings: []
    character_knowledge:
      character_name: "unaware/suspicious/investigating/knows"
    resolved: false

plot_threads:
  thread_name:
    status: "active/paused/resolved/abandoned"
    planted: 0
    priority: "critical/important/minor"
    milestones: []
```

### UPDATE Mode (`/entity-tracker <story> UPDATE <chapter>`)
1. Read the chapter just written
2. Parse all entity changes:
   - Character locations, emotional states, knowledge gained
   - Relationship changes (update trust scores)
   - Object movements (who picked up what, what was destroyed)
   - New locations introduced
   - Timeline events
   - Mystery clues revealed
   - Plot thread progress
3. Update `entity-state.yaml`
4. Flag any inconsistencies detected during update

### Output
- Updated `entity-state.yaml`
- Change log: what was modified and why
- Inconsistency warnings (if any)
