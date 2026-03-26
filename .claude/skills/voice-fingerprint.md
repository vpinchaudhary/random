# /voice-fingerprint

## Description
Create detailed voice DNA for each character — their unique speech patterns, vocabulary, rhythm, and differentiation from every other character.

Adapted from: book-genesis `/voice-fingerprint`

## Arguments
- `story`: The story folder name

## Instructions

When the user runs `/voice-fingerprint <story>`:

### 1. Load Context
- Read `characters.md` for personality, background, education level
- Read `research.md` for canon speech patterns (if applicable)

### 2. For Each Character, Create Voice DNA

```markdown
## [Character Name] — Voice DNA

### Speech Fundamentals
- **Vocabulary Level**: [simple / moderate / advanced / technical / archaic]
- **Sentence Length**: [short and clipped / varied / long and flowing]
- **Formality**: [very formal / professional / casual / street / shifts by context]
- **Rhythm**: [staccato / flowing / measured / erratic]

### Verbal Habits
- **Catchphrases/Recurring Phrases**: [specific phrases they use]
- **Filler Words**: [um, like, well, I mean, etc.]
- **Profanity Level**: [none / mild / moderate / heavy]
- **Interruption Pattern**: [interrupts others / gets interrupted / finishes others' sentences]
- **Topic Avoidance**: [subjects they deflect or redirect from]

### Emotional Modifiers
- **When Angry**: [how their speech changes — shorter? louder? quieter? more precise?]
- **When Nervous**: [stammering? over-explaining? going silent?]
- **When Lying**: [too detailed? too casual? changes subject?]
- **When Comfortable**: [how they speak with people they trust]

### Subtext Patterns
- **What They Say vs. What They Mean**: [typical gap between surface and depth]
- **Deflection Style**: [humor, aggression, topic change, intellectualizing]
- **How They Show Affection**: [through words? through avoidance of words? insults?]

### Canon Markers (for fanfic)
- **Canon Catchphrases**: [phrases from source material]
- **Canon Speech Pattern**: [how they talk in canon]
- **Our Adaptation**: [how we maintain this while making it natural for long-form prose]
```

### 3. Dialogue Contrast Matrix
Create a matrix showing how any two characters differ:

```
[Char A] vs [Char B]:
- A uses long sentences, B is clipped
- A avoids profanity, B swears casually
- A intellectualizes emotions, B is blunt about feelings
- A asks questions, B makes statements
```

### 4. Cover-the-Name Test Examples
Write 3 sample lines for each character that should be identifiable without attribution. These serve as reference during chapter writing.

### Output
Save to `stories/<story>/voice-dna.md`
Referenced by chapter-writer and dialogue-polish during writing.
