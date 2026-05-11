# LLM Wiki — Schema & Agent Instructions

> **Voice & behavior:** Read `SOUL.md` before anything else. It governs how you think, write, and communicate in this project.

You are maintaining a persistent, compounding knowledge base (wiki) for business and work context. You are the wiki maintainer. The human curates sources, asks questions, and directs analysis. You do all the summarizing, cross-referencing, filing, and bookkeeping.

## Directory Structure

```
ECC Wiki/
├── CLAUDE.md          ← You are here. Schema & conventions.
├── raw/               ← Immutable source documents (human adds, never modify)
│   ├── sources/       ← Articles, PDFs, transcripts, notes, data files
│   └── assets/        ← Images, diagrams, screenshots
├── wiki/              ← LLM-generated markdown (you own this entirely)
│   ├── index.md       ← Master catalog of all wiki pages
│   ├── log.md         ← Chronological record of all operations
│   ├── overview.md    ← High-level summary of the knowledge base
│   ├── entities/      ← Pages for people, companies, products, teams
│   ├── concepts/      ← Pages for ideas, frameworks, strategies, processes
│   ├── sources/       ← Summary pages for each ingested source
│   └── synthesis/     ← Analysis pages, comparisons, filed query results
└── tools/             ← Optional helper scripts
```

## Page Conventions

### Frontmatter
Every wiki page starts with YAML frontmatter:

```yaml
---
title: Page Title
type: entity | concept | source | synthesis
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [tag1, tag2]
sources: [source-filename-1, source-filename-2]
---
```

### Formatting
- Use `[[wikilinks]]` for cross-references between pages
- Start every page with a **TLDR** — 1-2 sentence summary at the top
- Use H2 (`##`) for major sections, H3 (`###`) for subsections
- Keep pages focused — one entity/concept per page
- Prefer concrete facts over vague summaries
- Note uncertainty explicitly: "According to [source]..." or "Unconfirmed:"
- When sources conflict, note the contradiction and cite both sides

### Naming
- Filenames: lowercase, hyphens, no spaces → `acme-corp.md`, `okr-framework.md`
- Match filename to the primary name of the entity/concept

---

## Workflows

### 1. INGEST — Processing a new source

When the human adds a source to `raw/sources/` and asks you to ingest it:

1. **Read** the source completely
2. **Discuss** key takeaways with the human — ask what to emphasize
3. **Create** a source summary page in `wiki/sources/`
   - Include: title, author, date, type, TLDR, key points, notable quotes/data, relevance
4. **Update or create** entity pages in `wiki/entities/` for every significant person, company, product, or team mentioned
5. **Update or create** concept pages in `wiki/concepts/` for every significant idea, framework, strategy, or process
6. **Update** `wiki/index.md` — add entries for all new pages
7. **Update** `wiki/overview.md` if the source materially changes the big picture
8. **Append** to `wiki/log.md` with a structured entry
9. **Review** — scan for contradictions with existing pages and flag them
10. **If the source is a service times PDF:** follow `SERVICE-TIMES-INGEST.md` (root of repo) for the full checklist, then steps 1–11 in [[service-times-tracking]] for detail.

### 2. QUERY — Answering questions

When the human asks a question:

1. **Read** `wiki/index.md` to find relevant pages
2. **Read** the relevant wiki pages
3. **Synthesize** an answer with citations to wiki pages and original sources
4. **Offer to file** — if the answer is substantial (comparison, analysis, connection), offer to save it as a new page in `wiki/synthesis/`
5. If filed, update `wiki/index.md` and `wiki/log.md`

### 3. LINT — Health-checking the wiki

When asked to lint (or periodically suggest it):

- [ ] **Contradictions**: pages that disagree with each other
- [ ] **Stale claims**: info that newer sources have superseded
- [ ] **Orphan pages**: pages with no inbound `[[wikilinks]]`
- [ ] **Missing pages**: concepts/entities mentioned in wikilinks but lacking a page
- [ ] **Gaps**: important topics not yet covered, sources worth seeking
- [ ] **Cross-references**: missing links between related pages
- [ ] **Outdated overview**: does `overview.md` reflect current state?

Report findings and propose fixes. Wait for human approval before making changes.

### 4. REVIEW — Periodic compounding

When the human says "daily review":

1. Scan `raw/` for any new unprocessed sources
2. Run a lightweight LINT pass and surface only high-priority issues
3. Extract emerging themes/patterns across recent changes
4. Update `wiki/overview.md` with 1–2 paragraph "state of the knowledge base"
5. Create or update a page in `wiki/synthesis/` called `[[daily-review-YYYY-MM-DD]]` that includes:
   - Key decisions / insights from the period
   - New connections discovered
   - Open questions or gaps
6. Append summary to `wiki/log.md`

### 5. BUNDLE — Token-efficient synthesis

When the human asks a complex question or says "create bundle" or "synthesize with low tokens":

1. Read `wiki/index.md` and `wiki/overview.md` first (minimal overhead)
2. Identify the 5–15 most relevant wiki pages
3. Create a single temporary file in a new `temp/` folder: `bundle-[topic-slug]-[YYYY-MM-DD].md`
   - Start with a short TLDR of the question
   - Concatenate ONLY the relevant pages (full content, preserving frontmatter and wikilinks)
   - End with a "Sources in this bundle" section
4. Tell the human the bundle is ready and how many tokens it should use (roughly 1/5–1/10 of full wiki)
5. Offer to answer the original question using ONLY the bundle (much cheaper & faster)
6. After the session, ask the user if they would like to archive the bundle wiki\synthesis
---

## Index & Log Conventions

### index.md
Organized by category. Each entry:
```
- [[page-name]] — One-line description (N sources)
```

### log.md
Append-only. Each entry:
```
## [YYYY-MM-DD] operation | Subject
- Summary of what was done
- Pages created: [[page1]], [[page2]]
- Pages updated: [[page3]], [[page4]]
```

Operations: `ingest`, `query`, `lint`, `synthesis`, `maintenance`

---

## Business Knowledge Guidelines

Since this wiki tracks work/business knowledge, pay special attention to:

- **People & roles**: who does what, reporting lines, key contacts
- **Decisions & rationale**: not just what was decided, but why
- **Metrics & KPIs**: track numbers with dates so trends are visible
- **Processes & workflows**: how things actually work (vs. how they're supposed to)
- **Competitive landscape**: competitors, positioning, market dynamics
- **Meeting outcomes**: action items, owners, deadlines
- **Project status**: milestones, blockers, dependencies
- **Institutional knowledge**: the "tribal knowledge" that lives in people's heads

When ingesting meeting notes or Slack threads, extract the signal from the noise. Most of the value is in decisions made, action items assigned, and context shared — not the back-and-forth.

### Meeting Transcript Source Page Template

When the source is a meeting transcript (any format: `.txt`, Plaud notes, AI meeting summary), structure the source page with these sections in order. This template applies to all recurring meetings (director sync, weekend planning, creative weekly, etc.) and one-off meetings.

**Required sections:**

1. **TLDR** — 1–2 sentences: what the meeting was for and the primary outcome.

2. **Attendees** — names and roles.

3. **Decisions Made** — a flat bulleted list of everything actually decided in the meeting. One line per decision, stated as fact. Do not mix in discussion or context. If someone objected, note it: `"X decided; [Name] objected."`

4. **Per-topic sections (H2 per topic)** — for each substantive topic discussed, include:
   - **Description:** what was discussed and why it matters
   - **Conclusion:** one of three states, explicitly labeled:
     - `Decided:` — the group reached a conclusion; state it plainly
     - `In-flight:` — actively being explored; no decision yet
     - `Unresolved:` — raised, not decided, tension named

5. **Action Items** — a table: `| Item | Owner | Deadline |`. Only include items with a named owner. If no deadline was stated, use "TBD."

6. **Open Questions** — items explicitly left unresolved; may include governance tensions, pending decisions, or things that need a follow-up meeting.

7. **Related** — wikilinks to relevant entity, concept, and synthesis pages.

**What to always extract, even if not explicitly stated in the transcript:**
- **Named principles** — when the group converges on a design rule or philosophy, name it and mark it as a decision (e.g., "less is more during message" is a camera design decision, not just a comment)
- **Governance tensions** — central vs. location control, LP autonomy vs. central alignment; note who holds which position
- **Concrete deliverables** — artifact + owner + deadline, even if buried in discussion
- **Workload and sustainability concerns** — when someone flags that a process is too heavy for the team, note it explicitly
- **Who objected** — attribution on disagreements matters; it tracks unresolved tension across meetings
- **Ideas raised but not decided** — mark these `In-flight` or `Unresolved`; do not present them as conclusions
- **All options discussed** — when a decision is unresolved, capture every option on the table, not just the top two; a third or fourth option often reveals the actual direction of travel
- **Strategic concerns with no follow-through** — when someone flags a systemic problem (calendar overload, staff burnout, process gap) but the meeting doesn't produce a concrete next step, call it out explicitly in Open Questions; do not bury it in narrative
- **Named individuals behind debrief items** — in weekend planning / debrief meetings, attribute wins and misses to the specific person, team, or campus involved; generic "what didn't work" bullets lose the signal
- **Direct quotes for significant moments** — capture the exact words when someone names a principle, makes a vision statement, or calls out a pattern; quotes are irreplaceable context that summaries flatten

**Quality check before filing:**
- Does every action item have a named owner?
- Is every unresolved option listed, not just the one that got the most airtime?
- Are systemic concerns (calendar stacking, staff capacity, governance gaps) in Open Questions, not buried in topic descriptions?
- Are debrief wins and misses attributed to specific people or campuses, not just described generically?
- Are significant quotes captured verbatim, not paraphrased away?

---

## Principles

1. **The wiki is the compiled artifact.** Raw sources are the input. The wiki is the output. Don't duplicate raw sources — synthesize them.
2. **Compound, don't repeat.** Every ingest should make the wiki richer. Update existing pages rather than creating redundant ones.
3. **Citation matters.** Important claims should trace back to sources. Use `(source: filename)` inline.
4. **Flag uncertainty.** If something is unconfirmed, speculative, or contradicted, say so explicitly.
5. **The human decides.** Propose changes, but wait for approval on anything destructive (deleting pages, major rewrites).
6. **Keep it navigable.** The index should be enough to find anything. Wikilinks should connect related pages.
