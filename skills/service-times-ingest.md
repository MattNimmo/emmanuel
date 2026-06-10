---
name: service-times-ingest
description: Ingest a week of ECC service timing PDFs — write wiki source page, update tracking page, refresh data.js dashboard, push HTML
type: skill
loads_on_demand: [SOUL.md, wiki/concepts/service-times-tracking.md, wiki/concepts/emmanuel-master-calendar.md, wiki/sources/service-times-2026-04-26.md]
---

# SERVICE-TIMES-INGEST

Fires when the operator drops a new week of timing PDFs (ELK, LV, MG, SLP — four per week) and asks to ingest them. Triggers: "ingest service times", "process this week's timings", "new timing PDFs".

## What this skill does

Two-sided update — wiki content side AND the `ecc-times.html` dashboard side (`data.js`). The HTML dashboard is the only artifact that pushes to GitHub; wiki content stays local.

### Wiki side

- [ ] Read all four PDFs completely.
- [ ] Check the date against the **Special Services Reference** table in [[service-times-tracking]] and [[emmanuel-master-calendar]] — apply Category A or B moment flags before calculating any variances.
- [ ] Create `wiki/sources/service-times-YYYY-MM-DD.md` (use [[service-times-2026-04-26]] as format reference).
  - Element-level data per service, mid-service totals, cross-location summary, data quality flags.
  - **Service Overview table** — record planned total (seconds) and actual total (seconds) per campus per service; note if plan is inflated (LV song double-count) or if service was a run-through.
- [ ] Update [[service-times-tracking]]:
  - Append new row(s) to **Baseline Observations** table.
  - Recalculate **Per-Element Average Overage** for all four campuses (exclude moment-flagged services and null values).
  - Evaluate **Trends** — does each Emerging Signal hold? Promote to Confirmed at 3+ consecutive non-moment weeks; close out reversals.
- [ ] Update [[index]] — add new source page entry.
- [ ] Append to [[log]].

### Dashboard side — `data.js` only

**Never edit `ecc-times.html` for data updates.** It is a static template.

- [ ] `WEEKS` — append short label (e.g. `'May 3'`).
- [ ] `WEEKS_FULL` — append ISO date (e.g. `'2026-05-03'`) — must stay index-aligned with WEEKS.
- [ ] `DATA[loc]['9am']` and `['11am']` — append variance in seconds (`actual − planned`) per campus; `null` if unusable or not held; LV `'11am'` is always `null`.
- [ ] `MOMENTS[loc]` — append `true` (Category A/B or unreliable) or `false` (standard week) per campus.
- [ ] `EL_AVGS[loc].midTotal` and each `element.val` — recalculate running averages (exclude moments and nulls); colors and bar widths derive automatically.
- [ ] `SERVICE_TOTAL[loc]['9am']` and `['11am']` — append variance in seconds (`actual − planned`); MG always `null`; LV `null` if plan is inflated (song double-count); `null` for run-throughs or unusable data.
- [ ] `SERVICE_TOTAL_PLANNED[loc]['9am']` and `['11am']` — append this week's planned total in seconds; `null` wherever `SERVICE_TOTAL` is `null`; MG always `null`; LV `'11am'` always `null`.
- [ ] `SERVICE_TOTAL_AVGS[loc]` — recalculate `avg9` and `avg11` (exclude moment-flagged and null entries; LV may retain `limitedData: true` if sample is thin; MG use `limitedData: true` until sample is robust).
- [ ] `MSG_DATA.series` — append `'Std'`, `'Q&A'`, or `''` (moment/special). `MSG_DATA.ELK['9am']`/`['11am']` and `MSG_DATA.SLP['9am']`/`['11am']` — append message length in decimal minutes (`MM + SS/60`, 2 decimal places). MG and LV are not tracked.
  - **Always record the message timer value as shown** — even if surrounding timers (bumper, intro) look suspect. The message timer is the data point. Note the anomaly in the source page but do not null out the message reading because context looks off.
  - **Timer bleed (operator didn't click next):** If a preceding timer (e.g. bumper) is much larger than planned AND the message timer shows ≈ 0:00, the operator missed advancing the timer. Derive the actual message length: `actual_message = overrun_timer_actual − overrun_timer_planned`. Verify with a combined check: `overrun_timer_actual + message_timer_actual ≈ overrun_timer_planned + message_timer_planned`. Record the derived value in decimal minutes and note the derivation in the source page.
  - Use `null` only if the service was not held or the message timer itself was clearly never started and cannot be derived (e.g. the combined check fails or surrounding context is missing).
- [ ] `WORSHIP_DATA[loc]['9am']` and `['11am']` — append Worship Bundle variance in seconds (`actual − planned`) for all four campuses. The Worship Bundle is the **pre-message open worship section** — not Close Worship (mid-service) or Worship Response (post-message). Use this week's planned time from the PDF (varies by campus and week). LV `'11am'` is always `null`. Use `null` if the worship bundle timer is clearly unreliable (bleed, all-zeros, or run-through contamination).
- [ ] `TABLE_DATA` — push 4 rows (one per campus): `m9`/`m11` as `'M:SS'` or `'—'`; `p9`/`p11` as `'+M:SS'`/`'−M:SS'` or `'—'`; `tot9`/`tot11` as `'MM:SS'` or `'—'`; `pt9`/`pt11` as `'+M:SS'`/`'−M:SS'` or `'—'`; `moment: true/false`; note `(★)` for Cat A, `(M)` for Cat B.
- [ ] Copy `data.js` to `emmanuel/data.js` and push to GitHub.
- [ ] Reload preview — confirm trend lines extend and table shows new week.

## Inclusion rules (quick ref)

### Mid-service variance — `DATA[]` / `MOMENTS[]`

| Situation | DATA[] | MOMENTS[] |
|-----------|--------|-----------|
| Standard week, clean data | actual seconds | `false` |
| Standard week, bleed on one element | actual total (flag element in notes) | `false` |
| Standard week, whole service bleed or all-zeros | `null` | `false` |
| Category A event | actual seconds (or `null` if unusable) | `true` |
| Category B event | actual seconds | `true` |
| Run-through (7:40–7:45am) | not tracked | — |
| No service held | `null` | `false` |

### Total service variance — `SERVICE_TOTAL[]` / `SERVICE_TOTAL_PLANNED[]`

| Situation | SERVICE_TOTAL[] | SERVICE_TOTAL_PLANNED[] |
|-----------|-----------------|------------------------|
| Standard week, clean plan | variance seconds | planned seconds |
| LV — plan inflated (song double-count) | `null` | `null` |
| MG — all weeks | `null` (excluded permanently) | `null` |
| Run-through or unusable | `null` | `null` |
| No service held | `null` | `null` |

MG is excluded from service-total tracking entirely due to persistent plan inflation in Planning Center. LV nulls are per-week; flag in source page notes.

Full decision tree: [[service-times-tracking]] → Data Inclusion & Exclusion Rules.

## What to load

- **SOUL.md** — voice for any TLDR or narrative in the source page.
- **wiki/concepts/service-times-tracking.md** — full decision rules, baseline table, trends, Special Services Reference.
- **wiki/concepts/emmanuel-master-calendar.md** — cross-check moment flags.
- **wiki/sources/service-times-2026-04-26.md** — canonical format reference for the new source page.

## Quality bar

- Every campus accounted for, even if `null` (no service held / unusable).
- Moment flags applied **before** variance math, not after.
- Source page cross-references the calendar entry that triggered any Category A/B flag.
- `data.js` index alignment preserved across `WEEKS`, `WEEKS_FULL`, `DATA`, `MOMENTS`, `SERVICE_TOTAL`, `SERVICE_TOTAL_PLANNED`, `MSG_DATA.series`, `MSG_DATA.ELK`, `MSG_DATA.SLP`, and `WORSHIP_DATA` (all per-campus arrays).
- The only push is `emmanuel/data.js` (and the HTML if changed). Wiki content stays local.
