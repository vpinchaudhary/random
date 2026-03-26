# /dialogue-polish

## Description
Polish all dialogue in a chapter for voice distinctness, subtext, naturalism, and the cover-the-name test.

Adapted from: book-genesis `/dialogue-polish`

## Arguments
- `story`: The story folder name
- `chapter`: Chapter number to polish

## Instructions

When the user runs `/dialogue-polish <story> <chapter>`:

### 1. Load Context
- Read the chapter
- Read `voice-dna.md` for each character's speech patterns
- Read `characters.md` for relationship states and emotional context

### 2. Cover-the-Name Test
For every line of dialogue:
- Cover the character name / dialogue tag
- Can you tell who's speaking from the words alone?
- If NO → flag for revision with specific suggestion based on voice DNA

### 3. Subtext Injection
For each dialogue exchange, check:
- Are characters saying exactly what they mean? (Usually they shouldn't be)
- Is there tension between what's said and what's felt?
- Are there power dynamics reflected in speech patterns?
- Do characters with conflict talk past each other?

Inject subtext where dialogue is too "on the nose":
- Replace direct emotional statements with deflection, body language, or topic changes
- Add physical actions between dialogue that contradict or complicate the words
- Use silence and what's NOT said as powerfully as what IS said

### 4. Naturalism Check
- People interrupt each other — add interruptions where natural
- People trail off — add incomplete sentences where emotional
- People change subject — add topic shifts where avoiding discomfort
- People repeat themselves — add slight repetition where stressed
- People don't take perfect turns — break up clean back-and-forth

### 5. Dialogue Tag Audit
- Replace generic tags ("said", "asked") with action beats where possible
- Remove tags entirely when speaker is clear from context
- Never use exotic tags ("exclaimed", "proclaimed", "declared") unless ironic
- Maximum 30% of dialogue lines should have explicit tags

### 6. Relationship-Appropriate Speech
Cross-reference character relationships:
- Strangers speak formally
- Close friends use shorthand and inside references
- Enemies choose words like weapons
- Romantic tension shows in what's avoided, not said

### Output
- Updated chapter with polished dialogue
- Cover-the-name test results (pass/fail per character)
- Subtext additions made
- Tag audit summary
