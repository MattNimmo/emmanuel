---
name: monday-meeting-ingest
version: 1.0.0
description: Process Monday morning meeting transcripts into structured wiki entries with full ECC context — service planning, Hot/Not/Next debrief, action items, active initiative touchpoints. Covers all four Monday meeting types (Creative Team, Weekly Planning, Director Sync, Creative Dept Weekly).
allowed-tools: [Read, Write, Edit, Grep, Glob, Bash, AskUserQuestion]
---

# Monday Morning Meeting Ingest

ECC runs four distinct Monday meeting types that are easy to conflate. This skill knows the format of each, who the people are, what the active initiatives are, and what cross-links to make — without being told. The output is filed wiki entries, not a chat reply.

---

## Step 0: Load Context

Run these before reading the transcript. They tell you who the people are and what they're working on.

```bash
WIKI_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
DATE=$(date +%Y-%m-%d)
echo "WIKI_ROOT: $WIKI_ROOT"
echo "DATE: $DATE"

# Read current focus + people graph
cat "$WIKI_ROOT/OPERATOR.md"

# Load SOUL.md for voice
cat "$WIKI_ROOT/SOUL.md"

# Find the two most recent meeting source files for continuity
ls -t "$WIKI_ROOT/wiki/sources/"*.md | head -10
```

Read the two most recent Monday meeting source pages to understand what was open or planned last time. This prevents filing duplicate action items and surfaces unresolved threads.

---

## Step 1: Identify the Meeting Type

Scan the transcript and determine which type this is. A single Monday may have multiple back-to-back; if so, split them into separate files.

| Meeting Type | Key Signals in Transcript |
|---|---|
| **Creative Team Meeting** | Hot/Not/Next, L10, breakouts by department, JC + Matt co-leading, Scorecard |
| **Weekly Planning Meeting** | Service flow for upcoming Sundays, PCO, location pastors joining, debrief of prior Sunday |
| **Director Sync** | Cross-campus status report, escalations from LPs, Nathan Grams / Jeff Lindquist / Brian Tausch |
| **Creative Dept Weekly** | Camera philosophy, playbook, 180 testimony pipeline, website/events, comms capacity |

If unclear, look at who's speaking. Location pastors = Weekly Planning. Creative/production core (JC, Josh, Sara, Zac, Dylan, Tanner) = Creative Team or Creative Dept. Both = combined session, split it.

**Filename slug by type:**
- Creative Team → `creative-team-meeting-{date}.md`
- Weekly Planning → `weekly-planning-{date}.md`
- Director Sync → `director-sync-{date}.md`
- Creative Dept Weekly → `creative-dept-weekly-{date}.md`

---

## Step 2: Extract — Common to All Meetings

### TLDR (5 bullets max)
What would a reader who has 30 seconds need to know? Lead with the biggest thing decided or surfaced.

### Decisions Made
Each decision: what was decided, who made it, what alternatives were considered, what would trigger a revisit. If nothing resolved, write "None — discussion only."

### Action Items

| Owner | What | By When |
|---|---|---|
| [name] | [specific task] | [date or "before Sunday" / "this week" / "TBD"] |

Pull every explicit commitment. The most common failure mode in these meetings is an action item that gets acknowledged verbally and never filed.

### Open Questions
Things raised but not resolved. Include: the question, who raised it, why it matters. These are research or follow-up candidates.

### People Mentioned
Every person named. For each: what role they play in this meeting, what was said about or by them that belongs in their entity page.

ECC core people for quick reference (do not confuse):
- **JC / JonCarlos Velez** — Lead Worship Pastor / Creative & Worship Director; Matt's direct vision-source
- **Matt Nimmo** — Creative Director; chairs or co-chairs most Monday meetings
- **Josh Patterson** — Production Lead / Service Producer; owns cameras, Reach system, stage
- **Sara Wescott** — Graphic Designer; sole internal design resource
- **Zac Anderson** — Filmmaker; also owns set lists + weekly email (not "Zach Brauer")
- **Tanner Taschuk** — Second videographer; comms team
- **Dylan Hathcock** — Creative team; video/media
- **Kylie** — Creative Project Manager (Mon/Tue Central, Wed/Thu/Sun LV); hired May 2026
- **Nathan Grams** — SLP Campus Pastor
- **Jeff Lindquist** — Maple Grove Location Pastor
- **Darin Poli** — Oversees Location Pastors; KB point person
- **Jodi Ruch** — Pastor; primary comms requestor
- **Nate Ruch** — Senior Pastor; priority gatekeeper
- **Andy Ballew** — Board member; EOS consultant

---

## Step 3: Extract — Meeting-Type-Specific

### Creative Team Meeting

**Hot / Not / Next Debrief:**

| Category | Item | Detail | Owner/Campus |
|---|---|---|---|
| Hot (worked) | | | |
| Not (missed) | | | |
| Next (coming up) | | | |

For each "Not": capture the **root cause** (not just the symptom) and the **fix decided**. These often become recurring patterns.

**Creative Direction Discussed:**
- Active series updates (current: Seven Churches of Revelation, June 7 → late July)
- New design decisions, aesthetic direction
- Volunteer culture / standards raised

**Format / Structure Changes:**
- Any changes to the meeting format itself
- Breakout action items from each sub-team

---

### Weekly Planning Meeting

**Service Planning Table:**

| Sunday | Date | Series/Message | Speaker | Special Elements | Flags/Open Items |
|---|---|---|---|---|---|
| This Sunday | | | | | |
| Next Sunday | | | | | |
| +2 Weeks | | | | | |

Special elements to listen for: child dedications, guest speakers, Kingdom Builders, offering appeals, response songs, grad honoring, Global Day of Prayer, memorial moments, baptisms, testimonies.

**Prior Sunday Debrief:**

| Category | Item | Root Cause | Fix |
|---|---|---|---|
| Win | | — | — |
| Miss | | | |
| Tech issue | | | |

**PCO Updates Needed:**
List anything that needs to be updated in Planning Center before Thursday content check.

**Thursday Content Check Notes:**
Anything flagged for the Thursday run-through (Josh's domain).

**Location-Specific Notes:**

| Campus | Item | Owner |
|---|---|---|
| SLP | | |
| ELK | | |
| LV | | |
| MG | | |

---

### Director Sync

**Campus Status:**

| Campus | Wins | Issues | Action | Owner |
|---|---|---|---|---|
| SLP | | | | |
| ELK | | | | |
| LV | | | | |
| MG | | | | |

**Escalations from Location Pastors:**
Issues that LP raised that require central team response.

**Cross-Campus Consistency Items:**
Anything flagged as "this works at SLP but not at MG" or similar variation patterns.

---

### Creative Dept Weekly

**Comms Capacity:**
- ClickUp status for the week
- Any bandwidth flags (Sara, Zac, Tanner, Kylie)
- Deliverables at risk

**Camera / Broadcast:**
- Philosophy decisions or updates (reference: the "less is more during message" principle confirmed May 11)
- Connected response planning
- Online broadcast notes

**Playbook Refresh (target: TEC Aug 16):**
- Progress on production + worship handbooks
- Specific sections being drafted or reviewed

**180 Testimony Pipeline:**
- Current status (monthly cadence; Kylie owns 6 for the year)
- Any new testimony contacts or filming decisions

**Website / Events:**
- CCB → App integration notes
- WordPress events updates
- Kylie's website ownership updates

---

## Step 4: Cross-Link Active Initiatives

After extraction, check whether the transcript touched any of these active initiatives. If yes, note briefly what was said and cross-link in the source page.

- **EOS rollout** — org restructuring, accountability chart, VTO, XP search (2027 budget)
- **Seven Churches of Revelation** — June 7 launch, "The Future Is Ancient" aesthetic, drape columns, Turkey B-roll, platform + lobby design
- **Comms team ClickUp** — Sara and Tanner onboarding; 4-person team, 104 raw hrs/week capacity
- **Service-times tracking** — ecc-times.html dashboard; MG Close Worship +1:03 overrun; data through June 7
- **Production + worship playbook refresh** — June/July build window, TEC Aug 16 target
- **180 testimony pipeline** — monthly cadence; Kylie assigned 6 for the year
- **Website overhaul** — vendor selected; CCB + app integration; summer 2026 target

---

## Step 5: Write the Source Page

File to `wiki/sources/{type-slug}-{YYYY-MM-DD}.md`. Example: `wiki/sources/weekly-planning-2026-06-09.md`.

Use this structure (matches existing wiki conventions — see `weekly-planning-05-18.md` as canonical example):

```markdown
---
title: "{Meeting Type} — {Month Day, Year}"
type: source
created: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
tags: [meeting, {type-tag}, {series-tag}, {other-relevant-tags}]
sources: [{original-transcript-filename}]
---

**TLDR:** {One sentence + key bullets}

---

## Attendees

| Name | Role |
|------|------|

---

## Decisions Made

{Decision blocks}

---

## {Meeting-type-specific sections from Step 3}

---

## Action Items

| Owner | What | By When |
|---|---|---|

---

## Open Questions

- **{question}** — raised by {who}. Why it matters: {one line}.

---

## Related

{wikilinks to active initiatives, people, prior meetings touched}
```

---

## Step 6: Update Affected Entity Pages

For each person mentioned in People Mentioned:

1. `Grep` for their entity page in `wiki/entities/`.
2. If found, append to their `## Timeline` section:
   ```
   ### {YYYY-MM-DD} — {meeting type and topic}
   {one paragraph of what they said or what was said about them}
   Source: [[{source filename}]]
   ```
3. If no entity page exists, create a stub (tags: [person, stub]) and note it in the report.

Do NOT rewrite Compiled Truth sections. That's `/person-enrich` territory.

---

## Step 7: Report

```
MEETING INGESTED: {filename}
TYPE: {meeting type}
DATE: {date}

EXTRACTED:
- {N} decisions
- {N} action items
- {N} open questions
- {N} people mentioned ({X} new stubs, {Y} entity pages updated)

ACTIVE INITIATIVES TOUCHED:
- {initiative} — {one-line note}

CONTINUITY FLAGS (threads from last meeting still open):
- {open item from prior meeting that this one resolved or left unresolved}

FOLLOW-UP CANDIDATES:
- /person-enrich: {names of new people worth enriching}
- /research: {open questions worth researching}

STATUS: DONE / DONE_WITH_CONCERNS / BLOCKED
```

---

## Important Rules

- **Never modify `raw/`.** Transcripts live there; source pages live in `wiki/sources/`.
- **One meeting type per file.** If Monday had back-to-back meetings, separate files.
- **Check for prior ingestion first.** Grep `wiki/sources/` for the meeting date before creating a new file.
- **Root cause over symptom.** For every "Not" or miss, capture why it happened, not just that it happened.
- **Specificity beats summary.** "JC said cameras should hold longer on the speaker's face during message" beats "camera philosophy was discussed."
- **Don't create topic stubs automatically.** Cross-link to existing concept/entity pages; surface missing ones in the report for deliberate creation.
