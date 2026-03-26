# /fanfic-researcher

## Description
Deep research on source material, canon facts, comparable fics, and audience expectations. The anti-hallucination foundation.

Adapted from: book-genesis `/book-researcher`

## Arguments
- `concept`: The story concept/premise
- `fandom`: (optional) The source material/fandom

## Instructions

When the user runs `/fanfic-researcher <concept>`:

### 1. Source Material Analysis
- Research the canon: characters, events, timeline, world rules, power systems
- Identify key canon facts that MUST NOT be contradicted (unless AU)
- Document canon character voices, speech patterns, relationships
- Note popular fan interpretations (fanon) vs. actual canon
- Use web search to verify facts against wikis and official sources

### 2. Fandom Landscape
- What are the most popular tropes in this fandom?
- What ships/pairings are popular?
- What has been overdone? (avoid retreading)
- What gaps exist that readers want filled?
- What are common reader complaints about fics in this fandom?

### 3. Comparable Fics Analysis
- Identify top-rated fics with similar premises
- What did they do well? What could be improved?
- What length/chapter count do successful fics in this fandom target?
- What tags and tropes perform best?

### 4. Audience Profile
- Who reads this fandom? (demographics, expectations)
- What do they value most? (characterization, plot, romance, action, angst?)
- What will make them click on chapter 1?
- What will make them subscribe/bookmark?

### 5. Anti-Hallucination Fact Sheet
For every fact gathered, assign a confidence level:
- **CONFIRMED**: Verified from official/canon source
- **LIKELY**: Widely accepted, multiple sources agree
- **FANON**: Popular fan interpretation, not canon
- **UNVERIFIED**: Could not confirm — flag for caution

### Output
Save to `stories/<story-name>/research.md`:
- Canon fact sheet with confidence levels
- Character canon profiles
- Fandom landscape summary
- Comparable fics analysis
- Audience expectations
- Anti-hallucination warnings (things commonly gotten wrong)
