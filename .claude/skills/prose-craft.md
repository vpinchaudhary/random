# /prose-craft

## Description
Write a chapter with structural type awareness — different chapter types get different writing approaches. The core writing engine.

Adapted from: book-genesis `/prose-craft`

## Arguments
- `story`: The story folder name
- `chapter`: Chapter number to write

## Instructions

When the user runs `/prose-craft <story> <chapter>`:

### 1. Determine Chapter Type
Read the outline and classify this chapter as one of 8 structural types:

| Type | Characteristics | Writing Approach |
|------|----------------|------------------|
| **Opening** | First impression, world entry | Heavy atmosphere, sensory immersion, slow reveal |
| **Action** | Conflict, chase, battle, confrontation | Short sentences, strong verbs, minimal introspection |
| **Emotional** | Character vulnerability, relationship shift | Long scenes, dialogue-heavy, internal monologue |
| **Revelation** | Secret exposed, truth uncovered | Building tension, dramatic irony, aftermath |
| **Transition** | Moving between major beats | Quieter, reflective, setup for what's next |
| **Escalation** | Stakes rising, complications mounting | Increasing pace, multiple threads converging |
| **Climax** | Peak conflict, decisive moment | Maximum intensity, payoffs landing, all threads |
| **Resolution** | Aftermath, new normal | Slower, emotional processing, closure |

### 2. Select Opening Strategy (7 options)
Based on chapter type and previous chapter's ending:
1. **In medias res** — start mid-action
2. **Dialogue hook** — start with compelling dialogue
3. **Sensory immersion** — start with vivid setting
4. **Question/mystery** — start with something unexplained
5. **Contrast** — start with the opposite of how last chapter ended
6. **Time skip** — jump forward, fill in context naturally
7. **Character interiority** — start inside someone's head

RULE: Never use the same opening strategy for 3 consecutive chapters.

### 3. Write the Chapter
- Target: 5000 words (4500-5500 acceptable)
- Follow the outline's events for this chapter
- Match writing style to chapter type
- Include 3-5 scenes with `---` breaks
- Apply tension level from `tension-curve.md`

### 4. Content Balance Check
Verify the content mix matches the chapter type:
- Action chapters: ≥70% action/dialogue, ≤15% description, ≤15% introspection
- Emotional chapters: ≥40% dialogue, ≥25% introspection, ≤20% description
- Revelation chapters: ≥45% dialogue, ≥25% description (atmosphere), ≤30% introspection
- Transition chapters: balanced mix, no category >40%

### 5. Save
Write to `stories/<story>/chapters/chapter-XX.md`

### Output
- The chapter file
- Word count
- Chapter type used
- Opening strategy used
- Content balance breakdown
