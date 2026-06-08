# ECC Wiki — Harness

Thin routing harness for Matt Nimmo's Emmanuel Christian Center (ECC) knowledge base — people, decisions, services, creative direction, leadership. Route to the right skill. The skill loads what it needs. **Do not preload OPERATOR.md, RESOLVER.md, or SOUL.md** — skills load them on demand.

**Voice:** Every output the operator sees → load [SOUL.md](SOUL.md) first. Direct, peer-level, no hedging.

**Success criteria:** A good session leaves the wiki richer, more accurate, or better connected than before. Propose before destroying. Cite sources. Surface conflicts — never silently pick a winner.

## File map

| File | Purpose | Loaded |
|---|---|---|
| `CLAUDE.md` | Routing layer | Every session |
| [OPERATOR.md](OPERATOR.md) | Who Matt is, what he's running at ECC | On demand |
| [RESOLVER.md](RESOLVER.md) | Query intent → wiki pages | On demand |
| [SOUL.md](SOUL.md) | Voice rules | On demand |
| `skills/` | Workflow definitions (incl. design context via [impeccable](skills/impeccable.md)) | Routed to from here |
| `.claude/skills/` | Impeccable design suite — UI craft sub-skills | Via [impeccable](skills/impeccable.md), then Skill tool |
| `wiki/` | The compiled brain | Via RESOLVER |
| `raw/` | Immutable source inputs | Read-only |
| `tools/` | Build scripts for the wiki console | Direct |
| `ecc-times.html` / `data.js` | Service-times dashboard | Per [service-times-ingest](skills/service-times-ingest.md) |

## Routing table

**Hard rule: when a trigger matches, stop. Read the skill file. Execute from it. Do not act before reading the skill.**

No match → default to [query](skills/query.md).

| Trigger | Skill |
|---|---|
| "ingest service times", "process this week's timings", new ELK/LV/MG/SLP PDFs | [service-times-ingest](skills/service-times-ingest.md) |
| "ingest this", "file this", "process this transcript/PDF" | [ingest](skills/ingest.md) |
| Shares URL, "read this", "save this", "think about this" | [idea-ingest](skills/idea-ingest.md) |
| Video, audio, PDF, book, screenshot, repo | [media-ingest](skills/media-ingest.md) |
| "process Monday meeting", "summarize the creative team meeting", "ingest this weekly planning", "what came out of the director sync" | [monday-meeting-ingest](skills/monday-meeting-ingest.md) |
| "process this transcript", "what came out of this meeting" | [transcript-ingest](skills/transcript-ingest.md) |
| Any brain question — "what does X say about Y", "pull up Z" | [query](skills/query.md) |
| "research X", "build me a primer", "state of the art on Y" | [research](skills/research.md) |
| "create bundle", complex multi-page question, token-efficient synthesis | [bundle](skills/bundle.md) |
| "enrich [person]", "fill out the dossier for X" | [person-enrich](skills/person-enrich.md) |
| "enrich this article", "this page is useless" | [article-enrichment](skills/article-enrichment.md) |
| "synthesize my concepts", "build my intellectual map" | [concept-synthesis](skills/concept-synthesis.md) |
| "read this through the lens of", "extract a playbook from" | [strategic-reading](skills/strategic-reading.md) |
| "daily/weekly review", "what's new since last week" | [review](skills/review.md) |
| "daily briefing", "morning briefing", "what's happening today" | [briefing](skills/briefing.md) |
| "weekly retro", "what did we ship" | [retro](skills/retro.md) |
| "lint", "check the wiki", "find broken links" | [lint](skills/lint.md) |
| "audit the wiki", "wiki health", "find orphans" | [wiki-audit](skills/wiki-audit.md) |
| "brainstorm this", "is this worth building", "office hours" | [office-hours](skills/office-hours.md) |
| "CEO review", "challenge this plan", "rethink the problem" | [plan-ceo-review](skills/plan-ceo-review.md) |
| "engineering review", "lock in the architecture" | [plan-eng-review](skills/plan-eng-review.md) |
| "design critique", "review the design plan" | [plan-design-review](skills/plan-design-review.md) |
| "devex review", "is this developer-friendly" | [plan-devex-review](skills/plan-devex-review.md) |
| "autoplan", "full plan review", "plan this end to end" | [autoplan](skills/autoplan.md) |
| "code review", "review this PR", "check my diff" | [code-review](skills/code-review.md) |
| "debug this", "why is this broken", "investigate" | [investigate](skills/investigate.md) |
| "ship", "create a PR", "push this" | [ship](skills/ship.md) |
| "update the docs", "docs are stale", "document what we shipped" | [document-release](skills/document-release.md) |
| "write docs for X", "generate missing docs" | [document-generate](skills/document-generate.md) |
| "what have we learned", "save this for next time", "show learnings" | [learn](skills/learn.md) |
| "polish this", "make this look better", "design this", "tone down", "add motion", any UI craft on `ecc-times.html` / `gantt.html` / dashboards | [impeccable](skills/impeccable.md) |

## Hard guardrails

- **Never modify `raw/`.** Never `git add raw/`.
- **Wiki content is local-only.** Never `git add wiki/` and push. Commit locally if at all.
- **The single push exception: service-times artifacts.** `ecc-times.html`, `data.js`, and the `emmanuel/` mirror push to GitHub. Everything else stays local. See [service-times-ingest](skills/service-times-ingest.md).
- **Never amend commits.** Always create new commits.
- **Never skip git hooks** unless the operator explicitly asks.
- **Propose before destroying** — deletions, mass renames, major rewrites need sign-off.
- **Filename convention:** lowercase-hyphenated, no spaces.
- **Check for prior ingestion across ALL wiki dirs** (entities, concepts, sources, synthesis) before creating a new source page. Sources frontmatter is the canonical signal — not folder location.
