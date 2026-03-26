# /reader-persona

## Description
Create 3-5 detailed reader personas representing the target audience. These personas guide writing decisions throughout the pipeline.

Adapted from: book-genesis `/reader-persona`

## Arguments
- `story`: The story folder name

## Instructions

When the user runs `/reader-persona <story>`:

### 1. Read Context
- Load `concept.md` and `research.md` from the story folder
- Understand the fandom, genre, and premise

### 2. Create 3-5 Reader Personas

For each persona, define:

```markdown
## [Persona Name] — [Archetype]

### Demographics
- **Age Range**:
- **Reading Habits**: [binge reader, slow savorer, chapter-by-chapter follower]
- **Fandom Experience**: [new to fandom, casual fan, deep lore expert]
- **Platform**: [AO3, FFN, Wattpad, etc.]

### What They Want
- **Primary Draw**: [romance, action, angst, humor, worldbuilding, character study]
- **Engagement Type**: [empathy, fascination, self-insertion, intellectual stimulation, aspiration]
- **Emotional Needs**: [comfort, catharsis, escapism, thrill, validation]

### What They'll Forgive
- [e.g., slow start if characters are compelling]
- [e.g., canon divergence if well-justified]

### What Will Make Them Leave
- [e.g., OOC behavior without justification]
- [e.g., pacing that drags for 3+ chapters]
- [e.g., untagged content they don't want]

### Their Internal Scorecard
- Hook importance: [1-10]
- Character authenticity: [1-10]
- Pacing tolerance: [patient / moderate / impatient]
- Canon compliance: [strict / flexible / don't care]
- Prose quality expectations: [published-level / good-enough / just-tell-the-story]
```

### 3. Engagement Ranking
Rank the 5 engagement types for this story's audience:
1. **Empathy** — feeling what characters feel
2. **Fascination** — being captivated by the world/mystery
3. **Self-Insertion** — seeing themselves in the character
4. **Intellectual Stimulation** — puzzle-solving, theory-crafting
5. **Aspiration** — admiring characters they want to be like

### Output
Save to `stories/<story-name>/reader-personas.md`
These personas are referenced by the beta-reader agent during evaluation.
