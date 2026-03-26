# /check-consistency

## Description
Run a full consistency check across all chapters of a story.

## Arguments
- `story`: The story folder name (kebab-case)

## Instructions

When the user runs `/check-consistency <story>`:

1. **Load All Material**:
   - Read every chapter in `stories/<story>/chapters/`
   - Read `characters.md`, `worldbuilding.md`, `timeline.md`
   - Read `outline.md` to check chapters follow the plan

2. **Run Checks** using the **consistency-checker** agent:

   ### Character Consistency
   - Track every character mention across all chapters
   - Verify physical descriptions never change unexpectedly
   - Check that characters only know what they've been told/witnessed
   - Verify relationship progression is gradual and logical
   - Flag any out-of-character behavior

   ### Timeline Consistency
   - Build a complete event timeline from all chapters
   - Verify chronological order makes sense
   - Check all "X days/weeks ago" references
   - Verify seasonal/weather consistency with timeline
   - Check character ages if mentioned

   ### World Consistency
   - Verify world rules are never violated
   - Check location descriptions match across chapters
   - Verify power system/magic/tech limitations are respected
   - Check named entities stay consistent

   ### Plot Consistency
   - Track all introduced plot threads
   - Identify unresolved threads
   - Check for contradictions between chapters
   - Verify cause-and-effect logic

3. **Generate Report**:
   - Summary: total issues by severity
   - Detailed findings per category
   - Prioritized fix list
   - Overall consistency score

4. **Output** the report to the user and optionally save as `stories/<story>/consistency-report.md`
