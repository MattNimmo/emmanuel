---
name: ingest
description: Process a new raw source into the wiki — discuss with operator, summarize, file, cross-reference, log
type: skill
loads_on_demand: [SOUL.md, RESOLVER.md, wiki/index.md, wiki/overview.md]
---

# INGEST

Fires when the operator adds a source to `raw/sources/` and asks to ingest it (e.g., "ingest this", "process the new transcript", "file this PDF").

## What this skill does

A single ingest may touch 10–15 wiki pages. That's expected.

1. **Read** the source completely.
2. **Discuss** key takeaways with the operator — ask what to emphasize. **This step is mandatory.** Do not proceed to page creation until the operator has weighed in.
3. **Create** a source summary page in `wiki/sources/`.
   - Filename: `lowercase-hyphenated.md`. Append `-{monthYYYY}` only if the source's value depends on its date (community thread, dated meeting, monthly report, time-stamped benchmark). Per [RESOLVER §2](../RESOLVER.md).
   - Include: title, author, date, type, TLDR, key points, notable quotes/data, relevance.
4. **Update or create** entity pages in `wiki/entities/` for every significant person, company, product, or team mentioned.
5. **Update or create** concept pages in `wiki/concepts/` for every significant idea, framework, strategy, or process.
6. **Update** `wiki/index.md` — add entries for all new pages.
7. **Update** `wiki/overview.md` if the source materially changes the big picture.
8. **Append** to `wiki/log.md` with a structured entry (see format below).
9. **Review** — scan for contradictions with existing pages and flag them.
10. **Commit locally.** `git add wiki/` and commit. Never `git add raw/`. Never push.

## Log entry format

```
## [YYYY-MM-DD] ingest | Subject

- Summary of what was done
- Pages created: [[page1]], [[page2]]
- Pages updated: [[page3]], [[page4]]
```

## Pending queue

Files in `raw/sources/` not yet ingested (as of 2026-06-01). Process these on the next ingest call:

| File | Type | Notes |
|---|---|---|
| `raw/sources/Management Training Notes.docx` | DOCX | Unknown contents — read before summarizing |
| `raw/sources/Nate AND Luke Gravity Engine Meeting 5.28.26.rtf` | RTF | May 28, 2026 meeting: Nate Ruch + Luke Fredrickson, topic: Gravity Engine |

**Not listed here:**
- ELK/LV/MG/SLP service time PDFs → routed to [service-times-ingest](service-times-ingest.md)
- Monthly date-only PDFs (SLP 2025–2026) → already compiled in `wiki/sources/slp-service-times-historical.md`

## What to load

- **SOUL.md** — voice for any TLDR or summary text.
- **RESOLVER.md** §2 (filing rules) — confirm naming conventions before creating pages.
- **wiki/index.md** — check for existing entity/concept pages before creating duplicates.
- **wiki/overview.md** — only if the source changes the big picture.
- **OPERATOR.md** — only if the source touches Matt's operating contexts (Sparrow, ECC, family, personal interests).

## Quality bar

- No duplicate entity pages — search the index first.
- Every claim traceable: cite source filename inline as `(source: filename)`.
- Flag uncertainty explicitly: "According to [source]…" or "Unconfirmed:".
- When sources conflict, note both sides and the contradiction. Do not silently choose.
