---
title: Service Times Tracking
type: concept
created: 2026-04-26
updated: 2026-05-10
weeks_tracked: 14
tags: [service-times, production, worship, mid-service, locations, elk, lv, mg, slp, planning-center]
sources: [Elk Times April 26 2026, LV Times April 26 2026, MG Times April 26 2026, SLP Times April 26 2026, Elk 26-03-15, LV 26-03-15, MG 26-03-15, SLP 26-03-15, Elk 26-03-22, LV 26-03-22, MG 26-03-22, SLP 26-03-22, Elk 26-03-29, LV 26-03-29, MG 26-03-29, SLP 26-03-29, Elk - 26-04-12, LV - 26-04-12, MG - 26-04-12, SLP - 26-04-12, Elk 26-04-19, LV 26-04-19, MG 26-04-19, SLP 26-04-19]
---

**TLDR:** ECC tracks planned vs. actual element lengths for each Sunday service across all four locations via Planning Center, staffed by a timer volunteer at each location. The primary focus is mid-service variance — both for accountability (are we running on time?) and design (are individual elements calibrated correctly?).

---

## Source & Ownership

- **System:** Planning Center (run-of-show timing module)
- **Input:** Timer volunteer at each location records actual element lengths live during service
- **Output:** "Times" PDF exported per location per Sunday (format: `[Location] Times [Date].pdf`)
- **Owner:** Production team (not location pastors — this is a production doc)

---

## Location Service Schedule

| Location | Run-Through | Tracked Services |
|--------|-------------|-----------------|
| ELK | 7:45am | **9:00am, 11:00am** |
| LV | — | **10:00am** (only service) |
| MG | 7:45am | **9:00am, 11:00am** |
| SLP | 7:40am | **9:00am, 11:00am** |

**Run-throughs** are early services used to walk through the order before the public services. Timer data from run-throughs is frequently incomplete and is excluded from all trending and analysis.

> ⚠️ **Holiday service times vary:** LV held Easter (Apr 5) and Good Friday (Apr 3) services at different times than its standard schedule; other locations may have as well. Do not assume standard service times when ingesting holiday weekend PDFs. Document the actual service time per location before calculating any variance.

> ⚠️ **MG Planning Center labeling errors:** On some dates, Planning Center exports the 9am and 11am service data under "07:45am" column labels. When this occurs, the actual run-through may not appear as a separate column. Always check column timestamps — if the "07:45am" label shows a service starting at 08:55am or later, it is the 9am service mislabeled. MG's public services are always 9:00am and 11:00am; 7:45am is the run-through.

---

## Service Structure

All locations follow a shared backbone with location-specific local sections. The segment names and element labels vary slightly by location but map to the same structure:

### 1. Pre-Service
| Element | Planned |
|---------|---------|
| Pre-service slides/loop | 0:00 (ambient, not timed) |
| Countdown video | ~5:00 |

### 2. Praise & Worship
| Element | Planned |
|---------|---------|
| Worship bundle (all songs combined) | 19:00–20:00 |
| Close worship transition | 0:45–1:30 |

Individual songs within the bundle are listed in the sheet but carry 0:00 planned time — they are informational only (song selection record), not separately timed for planning purposes.

### 3. Mid Service ← Primary tracking focus
The segment between close of worship and the message bumper. This is where the most variance occurs and where accountability and design attention is highest.

| Element | ELK | LV | MG | SLP |
|---------|-----|----|----|-----|
| Greet & Seat / Meet & Greet | 0:20 | 0:30 | 0:45 | 0:20 |
| Announcements / Hosted Moment | 3:00 | 2:00 | 2:30 | 1:20 |
| Location highlight (Pastoral Moment / KB Moment) | included in announcements | — | included in hosted moment | 2:15 |
| Campaign / series video | 1:30 | — | 1:00 | — |
| Offering | 2:30 | 3:00 | 2:30 | 1:30 |
| **Planned Total** | **~8:20** | **~7:00** | **~6:45** | **~6:25** |

> Planned times are per-Sunday baselines set in Planning Center. They can shift slightly week to week (e.g., a longer campaign video, a child dedication moment). Always use the **Planned Length column from that week's sheet** as the baseline — do not carry over prior weeks' planned totals.

### 4. Live (Message Block — broadcast from central location)
| Element | Planned |
|---------|---------|
| Bumper video | 0:30 |
| Message | 38:00 |
| Salvation response / Communion | varies (0:00–4:00) |

### 5. Local Response (post-disconnect from central)
| Element | Planned |
|---------|---------|
| Worship response song | 4:00–5:30 |
| Dwell / additional song | 0:00 (as needed) |
| Final prayer / dismissal | 1:00–2:00 |

---

## What to Track

### Accountability (are we running on time?)
- **Total service length** vs. planned total — per location, per service
- **Total mid-service length** vs. planned mid — per location, per service
- Flag any service running **more than +5:00 over** planned total
- Flag any mid-service segment running **more than +2:00 over** planned mid

### Design (are elements calibrated correctly?)
- **Per-element variance** from planned — positive = over, negative = under
- Flag any individual element running **more than +1:00 over** its planned time
- Watch for **consistent directional variance** (an element always running long = the plan is wrong, not the execution)
- Note when elements are **unplanned (0:00 planned, non-zero actual)** — these indicate plan was not updated before service

### Location-specific elements to watch
| Location | Watch |
|--------|-------|
| ELK | Announcements / Pastoral Moment — most variable element, content-dependent |
| LV | Offering — ran +2:31 on first tracked week |
| MG | Close Worship transition — ran +1:00 over plan at both services on first tracked week |
| SLP | KB Moment (content-dependent); Communion; Final Prayer (consistently over on first tracked week) |

---

## Comparison Framework

All analysis of this data operates across four axes and three time horizons. The ingest process below implements this framework automatically.

### Four Axes

| Axis | Question |
|------|----------|
| **Element × Time** | Is this element getting tighter or looser over weeks? |
| **Location × Time** | Is this location trending better or worse overall? |
| **Element × Location** | Do different locations handle the same element differently? |
| **Service × Service** | Is the 9am → 11am gap consistent, widening, or narrowing? |

### Time Horizons

| Horizon | Weeks | What it answers | Action trigger |
|---------|-------|-----------------|----------------|
| **3-month** | ~13 | Is this pattern real or noise? | Element over plan in 8 of 13 weeks → update the planned time |
| **6-month** | ~26 | Is this execution or calibration? | 20+ services of directional variance → revise planned time or execution protocol |
| **1-year** | ~52 | Is total service length drifting? | Annual avg vs. planned avg diverges → full Planning Center plan review |

Quarterly synthesis pages are produced at weeks 13, 26, and 52 → `wiki/synthesis/service-times-Q[N]-YYYY.md`.

### Moments vs. Trends

**A moment** is a content-driven spike explainable by a specific element that week: child dedication, Easter altar call, unplanned Communion, extra-long campaign video, special guest. Mark moments with `(M)` in the source page's element notes. **Moments are excluded from trend averages** — they are real data, but they distort the signal if left in.

**A trend** is directional variance that persists across 3+ weeks regardless of what's on the order of service. Trends are the signal this system exists to surface.

**Rule of thumb:** If you can point to specific content that caused the overrun, it's a moment. If you can't, it's a trend.

---

## Baseline Observations (12 Weeks: Feb 1 – Apr 26)

> **Note on Feb 1 – Mar 8 data:** ELK, LV, and MG timing sheets exist for this period but formal multi-campus tracking had not yet begun. SLP data for these weeks is in [[slp-service-times-historical]]. Data quality issues (timer bleeds, missing 11am columns at MG) are documented in the individual source pages. Use with appropriate caution — moment flags and data quality flags apply before averaging.

### Historical Batch (Feb 1 – Mar 8) — ELK, LV, MG Only

| Date | Location | 9am/10am Mid | vs Plan | 11am Mid | vs Plan | Notes |
|------|--------|-------------|---------|----------|---------|-------|
| Feb 1 | ELK | 14:24 *(⚠️ timer bleed)* | ⚠️ +4:55 | 11:04 | +1:35 | Close Worship 9am timer bleed; KB Launch Video active |
| Feb 1 | LV | 13:20 *(⚠️ timer bleed)* | ⚠️ +6:00 | — | — | Close Worship timer bleed; KB Video unplanned |
| Feb 1 | MG | 11:03 | +1:28 | 12:01 | +2:26 | KB Launch Video in plan; Close Worship +1:01/+1:06 |
| Feb 8 | ELK | 19:36 *(M)* | *(M)* +1:16 | 21:15 *(M)* | *(M)* +2:55 | **Super Sunday — Category A flag** |
| Feb 8 | LV | *(M — timer issues)* | — | — | — | **Super Sunday — Category A flag; data unreliable** |
| Feb 8 | MG | 19:27 *(M)* | *(M)* +0:52 | ⚠️ timer error | — | **Super Sunday — Category A flag; 11am unusable** |
| Feb 15 | ELK | 11:15 *(M-Offering)* | *(M)* +3:55 | 7:52 | +0:32 | Water Baptism; 9am Offering flagged (M) |
| Feb 15 | LV | 5:15 *(timer issues)* | ⚠️ -2:05 | — | — | Close Worship + G&S timer errors; data unreliable |
| Feb 15 | MG | 9:13 *(M-Close)* | *(M)* +2:43 | ⚠️ unusable | — | Close Worship flagged (M); 11am timer error (181:10) |
| Feb 22 | ELK | 9:15 | +2:15 | 9:11 | +2:11 | 9am Announce spike 7:04 (+4:04); 9am Offering suspect |
| Feb 22 | LV | 7:42 | +0:42 | — | — | Announce +2:00; Offering -0:48 |
| Feb 22 | MG | 15:01 | +4:31 | 16:42 | +6:12 | KB 5 Spot on plan; Offering anomaly (+3:07 / +2:52) |
| Mar 1 | ELK | 6:58 | -0:02 | 9:56 | +2:56 | 9am on plan; 11am Announce+Offering both over |
| Mar 1 | LV | 12:52 *(M-Child Ded)* | *(M)* +5:32 | — | — | Child Ded unplanned 5:29; excl. Ded: +0:03 |
| Mar 1 | MG | 12:07 *(⚠️ Meet anomaly)* | ⚠️ +2:22 | *not recorded* | — | Meet & Greet 5:10 suspect; 11am all zeros |
| Mar 8 | ELK | 7:13 | **+0:13** | 7:01 | **+0:01** | Tightest ELK week — both services on plan |
| Mar 8 | LV | 7:05 *(timer issues)* | -0:15 | — | — | Close Worship + Meet timer errors; Announce +1:17 |
| Mar 8 | MG | 8:53 | +2:23 | *not recorded* | — | Close Worship +2:53; Offering short (-1:05) |

### Formal Multi-Campus Tracking (Mar 15 – Apr 26)

Mid-service actuals vs. planned, per tracked service. Moment-flagged services shown with `(M)` — excluded from averages but retained for context.

| Date | Location | 9am/10am Mid | vs Plan | 11am Mid | vs Plan | Notes |
|------|--------|-------------|---------|----------|---------|-------|
| Mar 15 | ELK | 5:49 *(11am only)* | -1:11 | — | — | |
| Mar 15 | LV | 3:52 | -3:08 | — | — | |
| Mar 15 | MG | *unusable* | — | — | — | |
| Mar 15 | SLP | 5:29 *(excl. moment)* | +0:42 | 5:29 *(excl. moment)* | +0:42 | Host Pastor moment (M) |
| Mar 22 | ELK | 5:49 | -1:11 | 8:18 | +1:18 | ELK 9am Worship Response (M) |
| Mar 22 | LV | 11:24 *(incl. 5 Spot)* | -0:56 | — | — | |
| Mar 22 | MG | 5:21 *(PC label: "07:45am")* | -1:09 | 7:22 | +0:52 | PC mislabeled 9am col as "07:45am" |
| Mar 22 | SLP | 5:39 | +0:24 | 5:57 | +0:42 | |
| **Mar 29** | **ELK** | **7:18** | **+0:18** | **~7:06** | **~+0:06** | **Palm Sunday (M) worship response post-message** |
| **Mar 29** | **LV** | **7:46** | **+0:26** | **—** | **—** | **Palm Sunday (M) message under plan** |
| **Mar 29** | **MG** | **7:21** *(9am, partial)* | **+0:51** | **6:09** *(11am, partial)* | **-0:21** | **Post-message data incomplete** |
| **Mar 29** | **SLP** | **5:41** | **+0:26** | **6:01** | **+0:46** | **Palm Sunday (M) worship response + message** |
| **Apr 12** | **ELK** | **10:02** | **+3:02** | **7:57** | **+0:57** | **9am Announcements spike (5:52)** |
| **Apr 12** | **LV** | **7:32** | **+0:32** | **—** | **—** | **Water Baptism Sunday (M) post-message** |
| **Apr 12** | **MG** | **8:17** | **+1:47** | **7:17** | **+0:47** | **Water Baptism (M); MG 11am first under-plan total** |
| **Apr 12** | **SLP** | **5:18** | **+0:03** | **5:42** | **+0:27** | **Water Baptism (M) post-message; SLP 11am +11:11 total** |
| **Apr 19** | **ELK** | **9:50** | **+1:58** | **9:33** | **+1:41** | **ODTFTW campaign offering; message near plan** |
| **Apr 19** | **LV** | **8:41** | **+1:41** | **—** | **—** | **ODTFTW campaign offering** |
| **Apr 19** | **MG** | **10:17** | **+3:47** | **9:55** | **+3:25** | **Worst MG mid in dataset; PC cols mislabeled as "07:45am"; message near plan** |
| **Apr 19** | **SLP** | **7:34** | **+1:04** | **7:56** | **+1:26** | **Two announcement blocks; 9am message near plan** |
| Apr 26 | ELK | 9:01 | +0:41 | 9:16 | +0:56 | What About #3 |
| Apr 26 | LV | 10:13 | +3:13 | — | — | |
| Apr 26 | MG | 6:20 | -0:25 | 7:39 | +0:54 | |
| Apr 26 | SLP | 6:16 | -0:09 | 7:15 | +0:50 | |
| **May 3 *(M)*** | **ELK** | **5:52** | **+1:22** | **7:07** | **+2:37** | **ODTFTW Cat B; offering in LOCAL; 11am extended prayer/response** |
| **May 3 *(M)*** | **LV** | **3:37** | **-0:23** | **—** | **—** | **Close worship 0:07 poss. timer issue; ODTFTW offering +3:16 in LOCAL** |
| **May 3 *(M)*** | **MG** | **7:35** | **+3:35** | **7:32** | **+3:32** | **Close worship +3:13/+2:19 — worst in dataset; 9am bumper/msg timer swap** |
| **May 3 *(M)*** | **SLP** | **3:22** | **+0:17** | **3:41** | **+0:36** | **Tightest mid across all locations; 9am bumper/msg timer swap** |
| **May 10 *(M)*** | **ELK** | **9:05** | **+2:05** | **12:47** *(incl. ded)* | **+2:47** | **Mother's Day / Jodi Ruch; 9am Anno spike 6:41; 11am Child Ded 7:48** |
| **May 10 *(M)*** | **LV** | **7:20** *(incl. unplanned ded)* | **+3:30** | **—** | **—** | **Mother's Day; unplanned Child Ded 4:20; close worship 0:23 (3rd-week timer pattern)** |
| **May 10 *(M)*** | **MG** | **7:35** | **+2:27** | **5:14** | **+1:14** | **Mother's Day; Hosted Moment +1:21 (Collin announce); 11am Closing Prayer 16:40 timer leave-on** |
| **May 10 *(M)*** | **SLP** | **3:49** | **+0:44** | **4:10** | **+1:05** | **Mother's Day / Jodi Ruch; 9am Offering 7:20 ODTFTW recap; 11am Salvation 11:31** |

**Key patterns at 7 weeks (formal tracking):** MG close worship is the dominant structural problem — May 3 posted the worst single-element overrun in the full dataset (+3:13 at 9am, +2:19 at 11am vs planned 0:45). SLP is consistently the tightest mid-service across all locations. Message length is series-dependent: Q&A format (What About) and individual messages both ran near 38:00 plan on May 3. Bumper/message timer swaps at both MG 9am and SLP 9am on May 3 suggest a possible shared Production Center issue on that date.

**Historical batch patterns (Feb 1 – Mar 8):** MG Close Worship consistently overran in every single week of the historical period, confirming this is a deeply embedded structural pattern, not a recent development. ELK Announcements are highly volatile (ranging from -0:02 to +4:04 in a single week). ELK mid-service was tightest in Mar 8 (+0:13 / +0:01), suggesting the team improved across the historical period. LV had persistent Close Worship timer recording issues that make the element-level data unreliable for trend averaging.

---

## Per-Element Average Overage (Mid-Service)

Running averages across all tracked services. Updated with each weekly ingest. See individual source pages for week-by-week breakdown. Moment-flagged services `(M)` are excluded from these calculations.

> **Note (12 weeks of data — Feb 1 through Apr 26):** ELK = 19 services, LV = 8–9 (varies by week availability), MG = 15, SLP = 10 (formal tracking only; historical SLP in [[slp-service-times-historical]]). Historical weeks (Feb 1–Mar 8) have data quality caveats documented in source pages. Averages below incorporate historical data where usable; flagged services `(M)` and confirmed timer errors are excluded. Confirm stable patterns at week 13 (reached Apr 26).

### ELK

| Element | Avg Variance | Services | Notes |
|---------|-------------|----------|-------|
| Close Worship / NG Connect Card | **+0:14** | 19 | Up from +0:07 — historical weeks confirm consistent overrun; Feb 22 11am (+1:09) was highest |
| Meet & Greet / Greet and Seat | +0:17 | 18 | Slightly elevated from +0:13 — Feb 22 11am (+1:13) was highest non-moment reading |
| Announcements / Pastoral Moment | **+0:52** | 19 | Feb 22 9am spike (7:04, +4:04) — largest single-element overrun in dataset. Campaign weeks continue to dominate. |
| Video (campaign, when present) | ~0:00 | 5 | Near-plan when present; KB Launch Video Feb 1 also on plan |
| Offering | **-0:26** | 19 | Deeper short average — Communion Sundays and standard weeks often run short; campaign weeks bring it up |
| **Mid-Service Total** | **+0:58** | 19 | Up from +0:47 — Feb 22 and Mar 1 11am elevated; historical data adds variability |

### LV

| Element | Avg Variance | Services | Notes |
|---------|-------------|----------|-------|
| Close Worship / Meet & Greet Transition | -0:29 | 7 | Persistent timer recording issue in historical weeks — reliable sessions only. Confirmed pattern: runs short |
| Meet & Greet | -0:03 | 8 | Slight underrun; consistent |
| Announcements | **+0:29** | 9 | **Revised upward significantly** — historical weeks showed +1:14 to +2:00 overruns. Was -0:02 in formal tracking; historical context reveals LV announcements are not on plan |
| 5 Spot (LV unique) | +0:03 | 1 | Mar 22 only — on plan |
| Offering | **+0:32** | 9 | Campaign weeks still dominant but historical non-campaign weeks averaged near plan. Net avg +0:32 |
| **Mid-Service Total** | **+0:19** | 8 | Stable near +0:18 — historical non-moment weeks added +0:42 (Feb 22) and +0:03 (Mar 1 excl. Child Ded) |

### MG

| Element | Avg Variance | Services | Notes |
|---------|-------------|----------|-------|
| Close Worship | **+1:03** | 13 | **Up from +0:49 — historical data confirms this pattern goes back at least to Feb 1.** Pattern is structural, not recent. Feb 15 9am was +2:37; Mar 8 9am was +2:53. The 0:45 plan is wrong. |
| Meet & Greet (Live Band) | +0:06 | 14 | Slightly elevated; Feb 22 had format change (no Close Worship, different elements) |
| Hosted Moment / Welcome | **+0:31** | 13 | Up from +0:24 — 11am Hosted Moment has consistently run longer than 9am. Feb 22 11am = +1:53 |
| KB / Campaign Video (when present) | -0:05 | 4 | KB Launch Video Feb 1 ran under plan (-0:41 at 9am); KB 5 Spot Feb 22 ran on plan |
| Offering | **+0:33** | 13 | **Up sharply from +0:15** — Feb 22 offering anomaly (+3:07 / +2:52) had major impact. Non-anomaly weeks avg near plan. |
| **Mid-Service Total** | **+2:04** | 15 | **Up sharply from +1:17** — Feb 22 MG was +4:31 / +6:12; remains the worst mid-service in the dataset |

### SLP

| Element | Avg Variance | Services | Notes |
|---------|-------------|----------|-------|
| Host Pastor / New Guest | +0:09 | 10 | *Mar 15 excluded (moment flag).* Slight consistent over. Mar 29 elevated (+0:26/+0:19). |
| Greet and Seat | -0:05 | 10 | Now slightly under on average — Apr 12 and Apr 19 both ran short |
| Announcements (primary block) | variable | 10 | Structure changed Apr 19 (two blocks). Too variable to avg meaningfully — see source pages |
| KB / KB Video | **+0:15** | 4 | Present most weeks; consistent overrun |
| Offering | **+0:21** | 12 | Stable near +0:21; campaign weeks slightly elevated but SLP offering is more consistent than LV |
| **Mid-Service Total** | **+0:36** | 10 | *Mar 15 excluded.* Up from +0:27 — Apr 19 two-announcement-block structure inflated mid |

---

## Trends

> Patterns are noted here as they emerge across multiple weeks. **Confirmed** = seen in 3+ weeks. **Emerging** = 1–2 weeks. Each entry includes the week(s) first observed and current status.

### Confirmed Patterns

- **Message length is series- and format-dependent — not a universal calibration problem** *(revised at 6 weeks)*. Early tracking (Weeks 1–3) suggested the 38:00 planned message time was simply wrong across the board. New data from the "What About" Q&A series (Apr 19, Apr 26) proves otherwise: messages ran 38:39–38:44 at ELK (both services), MG (both services), and SLP 09am — essentially on plan. **The 38:00 plan is correct for the Q&A format; it is wrong for the standard sermon series**, which runs 42–49 minutes.

  | Context | Message Range | Planned |
  |---------|--------------|---------|
  | Standard sermon series (Mar 15–Apr 12) | 40:09 – 49:03 | 38:00 |
  | "What About" Q&A series (Apr 19–26) | 38:39 – 42:00 | 38:00 |

  **Recommended action:** Add a series-type field to Planning Center plans, and use 38:00 for Q&A series and 44:00–45:00 for standard series. Do not change the universal planned time — the correct fix is context-dependent.

- **11am messages run longer than 9am on standard series weeks; gap shrinks or disappears on Q&A weeks** *(confirmed across standard series weeks; nuanced by Q&A data)*. On standard weeks the 9am → 11am message gap is 4–8 minutes. On "What About" weeks, ELK showed essentially zero gap (38:40 vs 38:39).

  | Week | Series | Location | 9am Message | 11am Message | Gap |
  |------|--------|--------|------------|-------------|-----|
  | Mar 22 | Standard | SLP | 42:29 | 48:31 | +6:02 |
  | Mar 22 | Standard | ELK | 42:22 | 47:05 | +4:43 |
  | Apr 12 | Standard | SLP | 42:35 | 45:35 | +3:00 |
  | Apr 19 | What About #2 | ELK | 38:40 | 38:39 | +0:01 |
  | Apr 19 | What About #2 | SLP | 38:39 | 42:00 | +3:21 |
  | Apr 26 | What About #3 | ELK | 39:45 | 44:20 | +4:35 |

  The gap appears to be preacher-dependent, not a fixed structural feature. Factor into buffer planning for 11am on standard series weeks.

- **MG Close Worship transition consistently overruns** *(first observed: Feb 1, 2026 — predates formal tracking; confirmed across all 13 tracked services)*. Planned 0:45, actual range 0:33–3:38 across 13 tracked services. Average overage: +1:03. The pattern is structural — it appeared in every single week of the Feb 1–Mar 8 historical batch before formal multi-campus tracking began, and has continued through Apr 26. **Recommended action:** Update MG Close Worship planned time to 1:30–2:00 in Planning Center. This is no longer a watch item — it is a confirmed calibration error.

- **MG Hosted Moment creeping higher** *(first observed: Mar 22, confirmed at 6 weeks)*. Planned 2:30, average variance now +0:24 over 9 services. Apr 19 peaked at 3:34–3:45 (+1:04/+1:15). Content is growing — more items included in the hosted block each week. If not addressed, this element will need a higher planned time. Watch at week 9+.

### Emerging Signals

- **Guest preacher message-length pattern: Jodi Ruch runs ~5 min short** *(observed: May 10, 2026 — single week so far)*. Across all 4 campuses on Mother's Day, Pastor Jodi Ruch's message ran 27:15–33:37 vs 35–38:00 planned — consistently ~5 minutes under plan. Brad Rosenburg (May 3, 2026) ran near-plan at 38:32–39:10. **Hypothesis:** Guest preacher cadence is preacher-specific, not a fixed adjustment. Watch the next 2–3 guest-preacher weeks; if Jodi pattern holds across multiple weeks, build a per-preacher length profile in MSG_DATA.

- **LV close worship sub-30s reading: 3 consecutive weeks** *(Mar 8, May 3, May 10)*. LV close worship has now read 0:00–0:23 in three of the last weeks. Not real execution — this is a timer-process pattern. Element must be excluded from LV close worship element-level average until LV production resolves. **Action: flag to LV production team.**

- **SLP 9am Live-section timer issue: 2 consecutive weeks** *(May 3, May 10)*. May 3 was a bumper/message swap; May 10 shows Bumper 0:01 + Nate Intro 0:02 + Message 27:15 = combined ~27:18 vs 37:49 planned, with ~10 min unaccounted. Same campus, same service slot, two weeks running. **Action: flag to SLP production team for May 17 service.**

- **MG mid-service overrun is compounding** *(Weeks 4–6)*. The combination of Close Worship consistently over + Hosted Moment growing + campaign offering elevated produced +3:25–+3:47 mid-service overruns at MG on Apr 19. This is the largest mid overrun in the dataset. Individual elements are mild; together they compound. MG campus team needs to know mid-service is running 9–10 minutes vs planned 6:30.

- **LV Offering elevated on campaign weeks; near-plan otherwise** *(Weeks 3–6)*. Apr 12 (Ability Tree, +1:35), Apr 19 (ODTFTW, +1:29), Apr 26 (+2:31) all show LV offering spiking during named campaigns. Mar 15 (-1:26) and Mar 22 (+0:01) were near plan. This is a structural pattern: LV offering is content-dependent. The previous concern about LV offering "volatility" is now explained — it's predictable based on the campaign calendar.

- **ELK Offering consistently runs short on non-campaign weeks** *(Weeks 1–6)*. In 7 of 11 tracked ELK services, offering ran under its 2:30 plan. Campaign weeks (Apr 12 offered Ability Tree — ran 1:53; Apr 19 ODTFTW — ran 3:54/3:25) introduce variability. Non-campaign weeks average approximately -0:45 below plan. If this holds, adjust ELK planned offering to 1:45–2:00 for non-campaign weeks.

- **SLP Worship Response / "Dwell" song runs over plan consistently** *(Weeks 4–6)*. Mar 29 Palm Sunday (5:37/7:03, moment-flagged). Apr 19 Dwell (5:41/5:39 vs planned 4:00, +1:41 not flagged). The planned 4:00 for SLP's response song appears to be too short. Non-Palm-Sunday services also running +1:30+. Watch at week 9+.

- **MG Planning Center frequently mislabels service columns** *(first observed: Mar 22)*. On certain dates, the 9am and 11am service data is exported under "07:45am" column labels. The run-through may not appear separately. Check column timestamps to identify which column is which — see the MG labeling note in Location Service Schedule above.

- **LV "5 Spot" is a structural mid-service element** *(first observed: Mar 22)*. A ~5-minute family/testimony spotlight segment unique to LV. Ran exactly on plan (5:03 vs 5:00). This makes LV's mid-service structurally ~5 minutes longer than other locations on 5 Spot weeks. Factor into cross-location comparisons.

- **SLP KB Video / KB Moment block consistently overruns** *(Weeks 1–6)*. The second announcement block at SLP that includes KB Video ran 3:03–3:17 vs planned 2:00 (+1:03–+1:17) in every tracked occurrence. The planned 2:00 is wrong. Update to 3:00–3:30 or discipline the block to hit plan.

- **LV 08:45am may be a real public service** *(first observed: Mar 8, 2026)*. All prior weeks in the historical batch showed LV's 08:45am column with a partial or zero message (0:01–9:55), consistent with a run-through. On Mar 8, the 08:45am column shows a complete message (39:03 vs plan 38:30) and a reasonably full service structure — the first confirmed instance of a real LV 08:45am service. If LV runs two public services (08:45am and 10:00am), the current tracking framework is missing one tracked service per week. **Pending:** Confirm with LV campus whether 08:45am is a public service or a dress rehearsal. If confirmed, update [[service-times-tracking]] Location Service Schedule table and begin tracking LV 08:45am.

- **MG 11am recording is degrading** *(first observed: Mar 1, 2026)*. MG's 11am column was all zeros on both Mar 1 and Mar 8 — the final two weeks of the historical batch. Prior historical weeks (Feb 1, Feb 22) had usable 11am data at MG; the Feb 15 11am was lost to a critical timer error (181:10). This pattern may reflect a timer volunteer training failure or a service change at MG. Formal tracking (Mar 15+) should be evaluated for whether MG 11am data quality has improved. **Flag for follow-up with MG production.**

- **MG Feb 22 Offering anomaly is unexplained** *(observed: Feb 22, 2026 — single week, not yet a pattern)*. MG Offering ran 5:07 at 9am and 4:52 at 11am vs a planned 2:00 (+3:07 / +2:52) — the largest unexplained offering overrun in the full dataset. No known campaign or special content context. This could be: a giving initiative not captured in the planning sheet, a timer bleed from a previous element, or a genuinely extended offering moment. **Needs investigation with MG production.** Not averaged into trend data until explained.

---

## Location Ranking (Quarterly)

Updated at weeks 13, 26, and 52. Ranked by average mid-service variance — lower is tighter. Moment-flagged services excluded from averages.

| Quarter | ELK Avg Mid | LV Avg Mid | MG Avg Mid | SLP Avg Mid | Tightest | Notes |
|---------|------------|-----------|-----------|-----------|----------|-------|
| Baseline (Wk 1) | +0:49 | +3:13 | +0:15 | +0:21 | MG | 1 week — not yet comparable |

*Full rankings begin at Week 13.*

---

## Planning Center Calibration Log

Tracks when planned element times are officially changed in Planning Center and why. Referenced when evaluating whether an average reflects a real execution problem or an outdated plan.

| Date | Location | Element | Old Planned | New Planned | Reason |
|------|----------|---------|-------------|-------------|--------|
| — | — | — | — | — | No changes yet |

---

## Data Quality & Known Issues

**Planning Center column labeling errors:** MG consistently exports with "7:45am" labels for services that actually start at 8:55am–9:00am. This is a recurring Planning Center template issue. Flag these at source when they occur — do not reclassify silently in wiki.

**MG Planning Center column labeling errors are recurring:** On some dates (confirmed: Mar 22, Apr 19, Apr 26) Planning Center exports the 9am and/or 11am services under "07:45am" column labels. MG's public services are always 9:00am and 11:00am. Always verify column timestamps before assigning data to a service slot.

**Run-through data bleeds:** Timer volunteers sometimes fail to start/stop the log cleanly at the run-through → first public service transition. Typical symptoms: total under 60 min, or bumper/message showing an outlier time (e.g., 4:23 or 6:05 for a 0:30 element).

**MG March 15 — entirely unusable:** Timer data across all three columns was incomplete or clearly erroneous (offering logged at 17:02 vs 2:30 planned). Escalate to MG location re: timer volunteer training/process.

**Unplanned elements:** When an element has 0:00 planned but a non-zero actual (e.g., ELK Salvation & Communion 8:26 at 9am on Apr 26), the plan was not updated before the service. Track as a design flag — either the element needs a planned time, or it was genuinely improvised.

**LV 08:45am service status unclear:** All historical LV 08:45am data (Feb 1–Mar 1) shows partial or zero message readings consistent with a run-through. Mar 8 is the first week showing a complete message at 08:45am (39:03). The current framework excludes LV 08:45am as a run-through — but if it is a public service, the tracking has a gap. Pending campus confirmation. See Emerging Signals above.

**MG 11am recording failures (Mar 1, Mar 8):** Both of MG's final two historical weeks show all zeros for the 11am service — not a timer error (which typically shows a large bleed number) but genuinely no data recorded. Pattern may reflect a timer volunteer gap at MG. Evaluate whether this continued into the formal tracking period (Mar 15+).

**MG Feb 22 Offering anomaly:** MG Offering ran 5:07 / 4:52 vs plan 2:00 on Feb 22, with no known campaign context. Excluded from trend averages pending explanation. Do not fold into running average until MG production provides context for this week.

**LV planned total inflation:** LV lists individual songs separately within the worship bundle, inflating the planned total by 6–10 minutes of double-counted song time. Always use element-level variances for LV, not the service total comparison.

---

## Special Services Reference

Before calculating any variance, check the service date against this table. If a date matches, apply the moment flag `(M)` at the indicated scope. Also check [[emmanuel-master-calendar]] for the specific week's notes — the sermon series sheet includes per-Sunday details (guest speakers, child dedications, Communion, special videos) that aren't captured here.

### 2026 Moment-Flag Calendar

**Category A — Full flag.** Exclude the entire service from trend averages. Service format or attendance is significantly different from a standard week.

| Date | Event | Why it distorts |
|------|-------|-----------------|
| Jan 18 | Vision Sunday | KB video, special mid-service format |
| Jan 25 | KB Catalytic Weekend | Guest speaker; special offering/campaign moment |
| Feb 8 | Super Sunday | Major production event; different run-of-show |
| Apr 3 | Good Friday | Non-standard service format; LV (and possibly other locations) held Good Friday services — service times and structure differ entirely from a standard Sunday. Any Good Friday timing PDFs should be treated as a separate service type, not compared to Sunday mid-service baselines. |
| Apr 5 | Easter Sunday | Peak attendance; extended response, unplanned elements common. LV held Easter at different service times than a standard week (confirmed); other locations may have as well. Service structure may also differ. If ingesting Easter timing data, document actual service times per location and do not assume standard 9am/10am/11am slots. |
| May 31 | Holy Spirit Night | Special format; extended response block |
| Jul 12 | MNTC Sunday | External content; different mid-service structure |
| Aug 15 | Team Emmanuel Conference (TEC) | Non-standard format |
| Dec 24 | Christmas at Emmanuel | Holiday service; entirely different structure |

**Category B — Element flag.** The service is standard but one or more mid-service elements run materially different. Flag the affected element(s) with `(M)`; the rest of the service is usable for trend.

| Date | Event | Element(s) to flag |
|------|-------|--------------------|
| Feb 15 | Water Baptism | Post-message / local response |
| Mar 1 | Child Dedication | Mid-service (dedications add time to greet/hosted moment block) |
| **Mar 29** | **Palm Sunday** | **Message (typically shorter); Worship Response (extended)** |
| **Apr 12** | **Water Baptism** | **Post-message / local response; worship bundle if baptism during worship** |
| May 3 | One Day to Feed the World | Offering (special campaign collection); campaign video |
| May 10 | Mother's Day / Child Dedication | Mid-service broadly (guest host — Jodi Ruch; child dedication) |
| Jun 21 | Father's Day | Mid-service if special element added |
| Jul 19 | Water Baptism | Post-message / local response |
| Sep 13 | Fall Kickoff | Mid-service (series launch often includes longer promo content) |
| Sep 20 | Water Baptism | Post-message / local response |
| Oct 4 | Emmanuel Live Worship Night | Full flag — different format |
| Oct 11 | Child Dedication | Mid-service |
| Nov 11 | Miracle Offering | Offering element (significantly elevated; giving video added) |
| Nov 15 | Water Baptism | Post-message / local response |
| Dec 13 | Preschool Choir | Local response |
| Dec 20 | NextGen Choir | Local response |

**Also check week-by-week:** The [[emmanuel-master-calendar]] Sermon Series sheet lists per-Sunday notes (Communion, guest speakers, 5-spots, special videos). Any week with Communion noted should have the Salvation/Communion element flagged `(M)` for post-message — it is real data but structurally adds 2–4 minutes that are content-driven, not execution variance.

---

## Data Inclusion & Exclusion Rules

Apply these rules in order during each ingest. **First matching rule wins.** These govern what goes into `DATA[]`, `MOMENTS[]`, and `TABLE_DATA` in `data.js`.

### Rule 1 — Is the service data usable at all?

Discard the whole service (`DATA[loc][service][i] = null`) if any of the following apply. Use `'—'` for all display columns in TABLE_DATA.

| Symptom | Likely cause |
|---------|-------------|
| A single element shows an implausible time (e.g., 35:49 or 181:10 for a 2:30 element) | Timer bleed from run-through |
| Mid-service total is implausibly large (>25:00 on a non-Category A week) | Run-through bleed into the public service log |
| All elements show 0:00 or near-zero actual times | No data recorded — timer not started |
| Service not held at this location this week | Campus closed |

> **Single-element bleed exception:** If exactly one element has an implausible reading but the rest of the order is clean, discard only that element from element-level averages (`EL_AVGS`). Keep the mid-service total in `DATA[]` — note the excluded element in TABLE_DATA `notes`. If two or more elements are unreliable, discard the entire service total.

### Rule 2 — Is this week a moment?

Check the **Special Services Reference** table (above) and [[emmanuel-master-calendar]] for that date. Then set:

| Category | DATA[] | MOMENTS[] | TABLE_DATA display |
|----------|--------|-----------|-------------------|
| **A — Full flag** | actual seconds if usable; `null` if unusable | `true` | Include actual values + `(★)` note; `'—'` only if data is null |
| **B — Element flag** | actual mid-service total | `true` | Include actual values + `(M)` note |
| **None — standard week** | actual seconds | `false` | Include actual values |

> `MOMENTS[loc][i]` is a **campus-week flag**, not per-service. If only one service (9am or 11am) contains a moment element, the flag still covers both services for that campus-week. The chart shows moment-week data points as hollow circles and excludes them from running averages.

### Quick-Reference Table

| Situation | DATA[] | MOMENTS[] | TABLE_DATA notes |
|-----------|--------|-----------|------------------|
| Standard week, clean data | actual seconds | `false` | normal |
| Standard week, one element bleed | actual total (rest clean) | `false` | name the bleed element |
| Standard week, whole service bleed | `null` | `false` | `'—'` |
| Standard week, no data recorded | `null` | `false` | `'—'` |
| Category A event, data clean | actual seconds | `true` | values + `(★)` |
| Category A event, data unusable | `null` | `true` | `'—'` |
| Category B event, data clean | actual seconds | `true` | values + `(M)` |
| Run-through (7:40–7:45am) | n/a — not tracked | n/a | not in TABLE_DATA |
| No service held this location | `null` | `false` | `'—'` |

---

## Weekly Ingest Process

Each Sunday, four PDF timing sheets are produced. Follow these steps in order.

**1. Extract**
Run `pdfplumber` extraction on all four PDFs (see prior source pages for the script).

**2. Create source page**
Create `wiki/sources/service-times-YYYY-MM-DD.md` following the format of [[service-times-2026-04-26]]. Include: element-level data per service, mid-service totals, cross-location summary, and data quality flags.

**3. Flag moments**
Check the service date against the **Special Services Reference** table above. Apply `(M)` flags at the indicated scope — full service (Category A) or specific elements (Category B) — before calculating any variances. Then check [[emmanuel-master-calendar]] for that specific week's sermon series notes. Communion Sundays, guest speakers, 5-spots, or special videos not in the table may still warrant element-level flags. Document all flags and reasons in the source page's Data Quality Flags section. Moment-flagged services are **excluded from Per-Element Average Overage calculations** but kept in the source page as real data.

**4. Use this week's planned times**
Always use the **Planned Length column from that week's sheet** as the variance baseline. Do not carry over prior weeks' planned times.

**5. Exclude run-throughs**
Omit all 7:40–7:45am / 8:45am services from all analysis.

**6. Flag data quality issues**
Note Planning Center labeling errors, timer bleed-through, and unplanned elements (0:00 planned, non-zero actual) in the source page's Data Quality Flags section.

**7. Update Per-Element Average Overage**
Recalculate all running averages in this page — add this week's non-moment services to each element's running total, increment service counts. Exclude moment-flagged services.

**8. Evaluate Trends**
- Check each Emerging Signal: does it hold this week? If it's held for 3+ consecutive non-moment weeks, promote to **Confirmed Patterns** with a date range.
- Add new emerging signals if a new pattern surfaces.
- Close out any signal that reversed or proved to be a one-off moment.

**9. Quarterly check (at weeks 13, 26, 52)**
- Create `wiki/synthesis/service-times-Q[N]-YYYY.md` — location ranking, top 3 overrun elements by avg variance, notable moments from the quarter, and 1–2 concrete design recommendations.
- Update the **Location Ranking** table in this page.
- Update the **Planning Center Calibration Log** if any planned times were adjusted during the quarter.
- Update `wiki/overview.md` if total service length shows a structural shift.

**10. Update index and log**
Add new source page to [[index]]. Append to [[log]].

**11. Update `data.js`**
`ecc-times.html` is a static template — **never edit it for data updates.** All weekly data lives in `data.js`. Make these five changes, in order:

**11a. `WEEKS` and `WEEKS_FULL`** — append one entry to each array.
```js
WEEKS      → append short label,  e.g. 'May 3'
WEEKS_FULL → append ISO date,     e.g. '2026-05-03'
```
Both arrays must stay the same length — they are index-aligned to every other array.

**11b. `DATA[loc]['9am']` and `DATA[loc]['11am']`** — append one value per campus per service.

Variance formula: `actual_mid_seconds − planned_mid_seconds`

Where `actual_mid_seconds` = sum of all mid-service element actuals for that service; `planned_mid_seconds` = sum of mid-service element plans from that week's sheet (use *this week's* planned times, not a prior-week carry-over).

```
null  → service unusable (timer bleed, all-zeros, not held) — see Inclusion Rules
0     → service ran exactly on plan
positive → over plan (e.g. 58 = +0:58)
negative → under plan (e.g. -71 = −1:11)
```

LV has no tracked 11am service — its `'11am'` array is always `null`. Append `null` every week.

**11c. `MOMENTS[loc]`** — append one boolean per campus.
```
true  → Category A or B event this week, or data too unreliable to trend
false → standard week, data usable
```
One flag per campus-week; it covers both 9am and 11am for that campus. See Inclusion Rules above.

**11d. `EL_AVGS[loc].midTotal` and each `element.val`** — recalculate running averages excluding moment-flagged services and null values. Update every field that changed. Bar widths and colors derive automatically from the updated values — do not touch `elColor()` or `barPct()`.

**11e. `TABLE_DATA`** — push four new rows (one per campus). Field reference:

| Field | Value |
|-------|-------|
| `date` | Short label matching `WEEKS`, e.g. `'May 3'` |
| `loc` | `'ELK'`, `'LV'`, `'MG'`, or `'SLP'` |
| `m9` / `m11` | Mid-service actual as `'M:SS'` string, or `'—'` if null |
| `p9` / `p11` | Variance as `'+M:SS'` or `'−M:SS'` string, or `'—'` if null |
| `notes` | Brief plain-English note; include `(★)` for Category A, `(M)` for Category B |
| `moment` | `true` if moment-flagged; `false` otherwise |

> After saving `data.js`, reload the preview and confirm all four trend lines extend correctly and the table shows the new week before reporting the ingest complete.

---

## Related Pages

### Historical Batch (Feb 1 – Mar 8, 2026) — ELK, LV, MG
- [[service-times-2026-02-01]] — Feb 1, 2026: KB Launch Video week; timer bleeds at ELK 9am + LV; MG 07:45am no data; all campuses had KB video
- [[service-times-2026-02-08]] — Feb 8, 2026: Super Sunday — Category A full flag; interview + two-part livestream; MG 11am Offering 35:49 timer error
- [[service-times-2026-02-15]] — Feb 15, 2026: Water Baptism Sunday; ELK 9am Offering flagged (M); MG 11am 181:10 timer error (unusable); LV timer issues
- [[service-times-2026-02-22]] — Feb 22, 2026: Standard Sunday; ELK 9am Announcements spike 7:04 (largest single-element overrun in dataset); MG Offering anomaly (+3:07/+2:52)
- [[service-times-2026-03-01]] — Mar 1, 2026: Child Dedication Sunday; LV unplanned 5:29 drove +5:32 mid; MG Meet & Greet anomaly (5:10); Susie Larson guest preacher
- [[service-times-2026-03-08]] — Mar 8, 2026: ELK tightest mid in dataset (+0:13/+0:01); LV 08:45am first confirmed full service; MG 11am all zeros again

### Formal Multi-Campus Tracking (Mar 15 – present)
- [[service-times-2026-03-15]] — Mar 15, 2026: Series #5; MG unusable; SLP overran on Host Pastor moment + message
- [[service-times-2026-03-22]] — Mar 22, 2026: Series #6; ELK 9am worship response moment; MG 7:45am confirmed real service; LV 5 Spot debut
- [[service-times-2026-03-29]] — Mar 29, 2026: Palm Sunday; messages under plan at SLP/LV; extended worship responses at ELK/SLP; MG data partial
- [[service-times-2026-04-12]] — Apr 12, 2026: Water Baptism Sunday; ELK 9am announcements spiked; SLP 11am +11:11; MG column label changed to "06:45am"
- [[service-times-2026-04-19]] — Apr 19, 2026: "What About...#2"; messages near plan at ELK/MG/SLP 9am; MG mid-service worst overrun yet; ODTFTW campaign
- [[service-times-2026-04-26]] — Apr 26, 2026: "What About...#3"; first tracked week; Communion Sunday moment flags
- [[service-times-2026-05-03]] — May 3, 2026: ODTFTW Category B; MG close worship worst single-element overrun in dataset; SLP tightest mid; bumper/msg timer swaps at MG+SLP 9am
- [[service-times-2026-05-10]] — May 10, 2026: Mother's Day Category B; Jodi Ruch preaching (~5 min short cluster); LV close worship 0:23 (3rd-week timer pattern); SLP 9am Live-section timer issue (2nd week); MG 11am closing prayer 16:40 timer leave-on

### Related
- [[slp-service-times-historical]] — SLP-only historical timing data Mar 2025–Mar 2026
- [[emmanuel-christian-center]]
- [[josh-patterson]] — Production lead; oversees this system
