---
title: Comms Team Gantt Chart — Developer Spec
type: synthesis
created: 2026-04-20
updated: 2026-04-20
tags: [gantt, capacity, planning, developer-spec, html]
sources: [comms-project-horizon-2026-2027, comms-team-deliverables-with-hours, emmanuel-2026-calendar, comm-requests, kb-comm-deliverables-q1-2026-review]
---

**TLDR:** Full developer spec for a self-contained HTML Gantt chart showing 52 weeks of comms team projects (Apr 19, 2026 – Apr 11, 2027), with per-person capacity heatmap, back-loaded hour scheduling, and hover tooltips.

---

## 1. Overview

**Deliverable:** Single `gantt.html` file. No build step, no dependencies.

**Update model:** All project data lives in a `const DATA = { ... }` block at the top of the `<script>` tag. Future edits touch only that object — no changes to rendering logic required.

**Key behaviors:**
- 52-week timeline, weeks start Sunday, columns labeled with month + date
- Three team rows (Tanner, Zac, Sara) rendered as color heatmap cells (green / yellow / red) based on % of available project capacity consumed each week
- ~38 project rows rendered as horizontal bars; solid border = confirmed ✅, dashed = inferred ⚠️
- Hours are **back-loaded** toward each project's deadline; if a week is over capacity, hours spill to prior weeks automatically
- Post-event projects (Worship Night video only) are **forward-scheduled** from event date
- Hover tooltip on project bar cells showing breakdown per person per week
- Left label column is sticky; chart scrolls horizontally

---

## 2. File Architecture

```
gantt.html
├── <style>                  CSS — layout, heatmap colors, bars, tooltip
├── <body>
│   ├── <div#gantt-wrap>     outer scroll container
│   │   └── <table#gantt>   main grid
│   │       ├── <thead>      month row + week-date row
│   │       └── <tbody>
│   │           ├── team section rows (Tanner, Zac, Sara)
│   │           ├── section-divider row
│   │           └── project rows (~38)
│   └── <div#tooltip>        floating tooltip (hidden by default)
└── <script>
    ├── ── DATA BLOCK (edit here) ──
    │   ├── CONFIG            dates, team, heatmap thresholds
    │   └── PROJECTS          array of project objects
    ├── ── ALGORITHM ──
    │   ├── buildWeekIndex()  date string → week number (0–51)
    │   ├── buildCapacityMap() initializes available[person][week]
    │   ├── scheduleProjects() back-loads hours per person per project
    │   └── buildHeatmap()    computes % utilization per person per week
    └── ── RENDER ──
        ├── renderHeader()    month + week rows
        ├── renderTeamRows()  heatmap rows
        ├── renderProjectRows() bar rows
        └── initTooltip()     mouseover / mouseout handlers
```

---

## 3. Data Model

### 3a. CONFIG

```js
const CONFIG = {
  startDate: '2026-04-19',   // ISO string, must be a Sunday
  weeks: 52,
  heatmap: {
    low:  0.70,   // < 70% → green
    high: 0.90,   // 70–90% → yellow; > 90% → red
  },
  team: [
    {
      id:       'tanner',
      name:     'Tanner',
      role:     'Filmmaker',
      capacity: 19,     // raw hours/week
      baseline: 4.0,    // recurring weekly: message edit 3h + upload 1h
      color:    '#3B82F6',
    },
    {
      id:       'zac',
      name:     'Zac',
      role:     'Filmmaker',
      capacity: 26,
      baseline: 0,      // no weekly recurring deduction
      color:    '#8B5CF6',
    },
    {
      id:       'sara',
      name:     'Sara',
      role:     'Designer',
      capacity: 26,
      baseline: 15.5,   // see Section 7 for breakdown
      color:    '#F59E0B',
    },
  ],
};
```

### 3b. PROJECTS array item

```js
{
  id:          'string',           // kebab-case unique id
  name:        'string',           // display name
  confirmed:   true | false,       // true = solid bar; false = dashed bar
  eventDate:   'YYYY-MM-DD',       // hard deadline (or event date)
  postEvent:   false,              // true ONLY for Worship Night Post-Production
                                   // postEvent = forward-schedule from eventDate
  deliverables: [
    {
      person:  'tanner' | 'zac' | 'sara',
      hours:   Number,
      note:    'string',  // shown in tooltip
    },
    // ... one entry per person involved
  ],
  webNote:     'string' | null,    // folded into tooltip if present
  category:    'series' | 'event' | 'campaign' | 'print' | 'announcement',
}
```

---

## 4. Algorithm Spec

### 4a. buildWeekIndex(dateStr)
```
Input:  ISO date string 'YYYY-MM-DD'
Output: integer week index 0–51 (or -1 if before start, 52+ if after window)

Logic:
  days = (Date.parse(dateStr) - Date.parse(CONFIG.startDate)) / 86400000
  return Math.floor(days / 7)
```

### 4b. buildCapacityMap()
```
Output: available[personId][weekIndex] = person.capacity - person.baseline
        (same value for every week initially; decremented as projects are scheduled)
```

### 4c. scheduleProjects()
```
Output: schedule[projectId][personId][weekIndex] = hoursAssigned

Algorithm:
  Sort PROJECTS by eventDate ascending (earlier deadlines get first pick of capacity).

  For each project P:
    deadlineWeek = buildWeekIndex(P.eventDate)
    
    For each deliverable D in P.deliverables:
      remaining = D.hours
      
      if P.postEvent == false:
        week = min(deadlineWeek, 51)   // clamp to window
        direction = -1                  // move backward
        limit = 0
      else:
        week = max(deadlineWeek, 0)
        direction = +1
        limit = 51
      
      while remaining > 0:
        if week < 0 or week > 51:
          // overflow: mark project as starting-before-window or beyond-window
          schedule[P.id]['overflow'] = (schedule[P.id]['overflow'] || 0) + remaining
          break
        
        avail = available[D.person][week]
        assign = min(avail, remaining)
        
        available[D.person][week] -= assign
        schedule[P.id][D.person] = schedule[P.id][D.person] || {}
        schedule[P.id][D.person][week] = (schedule[P.id][D.person][week] || 0) + assign
        remaining -= assign
        week += direction
```

### 4d. buildHeatmap()
```
Output: heatmap[personId][weekIndex] = { used, available, pct, color }

For each person P, each week W:
  used = P.capacity - P.baseline - available[P.id][W]
  pct  = used / (P.capacity - P.baseline)
  color = pct < CONFIG.heatmap.low  ? 'green'
        : pct < CONFIG.heatmap.high ? 'yellow'
        : 'red'
  // If used == 0: color = 'empty' (light gray)
```

---

## 5. Visual Spec

### 5a. Dimensions
| Element | Value |
|---------|-------|
| Label column width | 200px, sticky left |
| Week column width | 32px |
| Row height | 28px |
| Team section row height | 32px |
| Total chart width | 200 + (52 × 32) = 1864px (scrollable) |

### 5b. Header rows
- **Row 1 — Months:** `<th colspan=N>` spanning each month's weeks. Month name + year. Background: dark gray.
- **Row 2 — Weeks:** `<th>` per column. Display: `M/D` of week-start Sunday. Small font, gray.

### 5c. Team heatmap cells
| State | Background |
|-------|-----------|
| empty (0% used) | `#F8FAFC` |
| green (< 70%) | `#86EFAC` |
| yellow (70–90%) | `#FDE047` |
| red (> 90%) | `#FCA5A5` |

Cell content: blank. Color conveys utilization. Tooltip on hover shows hours used / available.

### 5d. Project bar cells
Each project row has 52 `<td>` cells. Cells where the project has scheduled hours receive class `active`.

| Property | Confirmed (solid) | Inferred (dashed) |
|---|---|---|
| Background | `[category color] at 80% opacity` | `[category color] at 40% opacity` |
| Border top/bottom | `2px solid [color]` | `2px dashed [color]` |
| Border left (first active cell) | `2px solid/dashed [color]` + `border-radius-left: 4px` | same |
| Border right (last active cell) | `2px solid/dashed [color]` + `border-radius-right: 4px` | same |
| Inactive cells | transparent, no border | same |

#### Category colors
| Category | Color |
|----------|-------|
| series | `#6366F1` (indigo) |
| event | `#10B981` (emerald) |
| campaign | `#EF4444` (red) |
| print | `#F97316` (orange) |
| announcement | `#94A3B8` (slate) |

### 5e. Section divider rows
Full-width rows with a label ("TEAM CAPACITY" and "PROJECTS") and a thicker border-top. Span all 52+1 columns. Background: `#1E293B` (dark), white text, uppercase, small font.

### 5f. Overflow indicator
If `schedule[projectId].overflow > 0`, add a small `⚠` icon to the project label cell and include overflow hours in the tooltip.

---

## 6. Tooltip Spec

**Trigger:** `mouseover` on any `.active` project cell.
**Position:** Follow cursor, offset `{ top: +12px, left: +12px }`. Clamp to viewport edges.
**Dismiss:** `mouseout` on chart container.

**Content structure:**
```
[Project Name]         [✅ Confirmed | ⚠ Inferred]
Week of [M/D/YYYY]

HOURS THIS WEEK
  Tanner:  Xh   [progress bar]
  Zac:     Xh   [progress bar]
  Sara:    Xh   [progress bar]

DELIVERABLES
  • [note from deliverable.note for each person with hours > 0]

[webNote if present, prefixed "🌐 Web: "]
[⚠ Xh overflow — started before planning window if applicable]
```

**Styling:** Dark background `#1E293B`, white text, `border-radius: 8px`, `box-shadow`, max-width 280px, z-index 1000.

---

## 7. Baseline Hours (Sara — 15.5h/week)

| Task | Hours/Week | Owner |
|------|-----------|-------|
| Sermon clips creation + posting (social) | 3.5 | Sara |
| Emmanuel MN social posts (avg 2.5/week × 1.5h) | 3.75 | Sara |
| Platforms management | 2.0 | Sara |
| Content posting | 1.0 | Sara |
| Weekly thumbnail | 1.0 | Sara |
| Weekly email (content / format / send) | 3.0 | Sara |
| Lobby TV management | 1.0 | Sara |
| **Total** | **~15.5** | |

| Task | Hours/Week | Owner |
|------|-----------|-------|
| Sunday message video + audio editing | 3.0 | Tanner |
| Upload + post to all platforms | 1.0 | Tanner |
| **Total** | **4.0** | |

**Effective project capacity:**
| Person | Raw | Baseline | Available for Projects |
|--------|-----|----------|------------------------|
| Tanner | 19h | 4.0h | **15.0h/week** |
| Zac | 26h | 0h | **26.0h/week** |
| Sara | 26h | 15.5h | **10.5h/week** |
| **Total** | **71h** | **19.5h** | **51.5h/week** |

---

## 8. Full Project Catalog

> Hours marked with `*` are inferred from nearest similar deliverable.

### Confirmed dates reference
| Deliverable deadline rule | Detail |
|---|---|
| Sunday launch series | Effective deadline = Thursday of launch week |
| Friday/Saturday events | Deadline = Thursday of event week |
| Print items | Add 2–3 week ordering lead time inside the hours schedule |
| Worship Night video | Forward-scheduled; Tanner start Oct 4 → release ~Jan 25, 2027 |

---

| # | Project | Confirmed | Event Date | Sara (h) | Tanner (h) | Zac (h) | Category | Notes |
|---|---------|-----------|------------|----------|------------|---------|----------|-------|
| 1 | What About... Series (ongoing) | ✅ | 2026-05-31 | 36 | 0 | 0 | series | 6 weeks remaining × 6h/wk ongoing graphics; bumper already done |
| 2 | One Day to Feed the World | ✅ | 2026-05-03 | 3 | 0 | 0 | announcement | Announcement slide only |
| 3 | Mother's Day / Child Dedication | ✅ | 2026-05-10 | 25 | 10 | 4 | event | Sara: graphics pkg 20h + photobooth 2.5h + extras 2.5h; Tanner: video for moms 10h; Zac: event filming 4h; webNote: app/web update 2h |
| 4 | Holy Spirit Night | ✅ | 2026-05-31 | 3 | 0 | 0 | announcement | Announcement slide only (same Sunday as What About... close) |
| 5 | Kids Camp | ✅ | 2026-06-17 | 20 | 10 | 8 | event | Sara: events graphics pkg; Tanner: promo video; Zac: multi-day filming |
| 6 | 7 Churches of Revelation Series | ✅ | 2026-06-07 | 95 | 10 | 4 | series | Sara: 29h launch + 11 wks × 6h ongoing; Tanner: bumper; Zac: bumper filming. Duration through ~Aug 23. webNote: series page 2h |
| 7 | Father's Day | ✅ | 2026-06-21 | 3 | 0 | 0 | announcement | Light screen support only; no standalone package |
| 8 | Summer Book Study | ⚠️ | 2026-07-05 | 20 | 0 | 0 | event | Events graphics package; no video |
| 9 | MNTC Sunday | ✅ | 2026-07-12 | 2 | 0 | 0 | announcement | Externally produced; minimal screen support |
| 10 | Youth Summer Camp | ✅ | 2026-07-20 | 3 | 0 | 0 | announcement | Announcement slide only |
| 11 | Serve Day | ⚠️ | 2026-07-26 | 8 | 0 | 0 | announcement | Announcement slide + email header + social template; webNote: website/app listing 2h |
| 12 | August Series | ✅ | 2026-08-02 | 65 | 10 | 4 | series | Sara: 29h launch + 6 wks × 6h ongoing (through Sep 13 Fall Kickoff); Tanner: bumper; Zac: bumper filming |
| 13 | Team Emmanuel Conference (TEC) | ✅ | 2026-08-15 | 28 | 14 | 12 | event | Sara: graphics pkg 20h + supers/bg 2h + photobooth 2.5h + invites 2.5h + 1h; Tanner: promo video 10h + production support 4h; Zac: major-event filming 12h; webNote: 2h |
| 14 | ELC Launch Day | ⚠️ | 2026-08-23 | 30 | 5 | 4 | event | Sara: merch design 20h + event graphics 10h (partial of annual ELC allocation); Tanner: short promo/reformat 5h; Zac: filming 4h |
| 15 | Fall CG Campaign Booklet | ⚠️ | 2026-09-20 | 30 | 64 | 8 | print | Sara: booklet cover + assets 30h (print-ready before Sep 20 launch); Tanner: 2 CG teaching videos × 32h each; Zac: filming 2 sessions 8h. ⚠️ Print order lead time 2–3 wks — design must be done ~Sep 1 |
| 16 | Fall Kickoff | ✅ | 2026-09-13 | 93 | 10 | 8 | event | Sara: graphics pkg 20h + **merch 70h** + photobooth 2.5h; Tanner: promo video; Zac: event filming. ⚠️ Merch design must be done ~Aug 17 (3-wk print lead) |
| 17 | Fall CG Campaign Series | ⚠️ | 2026-09-20 | 59 | 10 | 4 | series | Sara: 29h launch + 5 wks × 6h ongoing (through ~Oct 25); Tanner: bumper; Zac: filming |
| 18 | Worship Night — Prep + Event | ✅ | 2026-10-04 | 23 | 10 | 12 | event | Sara: events graphics pkg 20h + photobooth 2.5h; Tanner: promo bumper 10h; Zac: prep filming 4h + recording night 8h |
| 19 | Worship Night — Video Post-Production | ✅ | 2027-01-25 | 0 | 50 | 0 | campaign | **postEvent: true** — forward-scheduled from Oct 4. Tanner: 50h post-production editing spanning ~16 weeks. Audio mastering from external partner gates final release |
| 20 | MYC Announcement | ✅ | 2026-10-15 | 3 | 0 | 0 | announcement | Announcement slide only |
| 21 | KB / Generosity Series | ⚠️ | 2026-10-25 | 53 | 154 | 22 | series | Sara: 29h launch + 4 wks × 6h ongoing; **Tanner: bumper 10h + 3 testimony videos × 48h = 154h TOTAL** ⚠️ Overflow risk — flag on label; Zac: bumper filming 4h + testimony filming 3 × 6h = 22h |
| 22 | Sisterhood Night (Fall) | ✅ | 2026-11-06 | 97 | 20 | 12 | event | Sara: graphics pkg 20h + **merch 70h** + templates 4h + photobooth 2.5h; Tanner: recap bumper 10h + KB video 10h; Zac: event filming 12h. ⚠️ Merch design done ~early Sep (7-wk lead) |
| 23 | Miracle Offering | ✅ | 2026-11-11 | 36 | 10 | 4 | campaign | Sara: 24h pre-event (envelopes 5h + slides 3h + lead-up 3h + app 2h + web 2h + emails 6h + promo slides 3h) + 12h post-event data slides (due ~Nov 15 after KB provides giving data); Tanner: promo video 10h; Zac: promo filming 4h. ⚠️ Giving envelopes = print; order by ~Oct 20 |
| 24 | KB Catalytic Weekend #2 | ⚠️ | 2026-11-22 | 7 | 10 | 4 | event | Sara: engagement card 5h + KB project slides 2h; Tanner: KB project video 10h; Zac: filming 4h |
| 25 | Advent Booklet | ⚠️ | 2026-12-01 | 30 | 0 | 0 | print | Sara: booklet cover + assets + CG graphic 30h. Must be print-ready Dec 1 |
| 26 | Christmas Campaign | ⚠️ | 2026-12-06 | 38 | 18 | 12 | campaign | Sara: seasonal look pkg 20h + ad campaign 10h + banners 5h + photobooth 2.5h; Tanner: bumper 10h + Christmas Eve production 8h; Zac: bumper filming 4h + Christmas Eve 8h. Hard deadline: all assets done before Dec 6 series launch. Christmas Eve Dec 24. webNote: 2h |
| 27 | KB Booklet | ⚠️ | 2027-01-07 | 30 | 0 | 0 | print | Sara: full booklet design 30h. Design starts in December (while Christmas is live). Due first week of January |
| 28 | Vision Sunday / Annual Report | ⚠️ | 2027-01-17 | 43 | 0 | 0 | campaign | Sara: annual report booklet 40h + annual meeting slide 3h. Design must start in December |
| 29 | 21 Days of Prayer & Fasting | ⚠️ | 2027-01-05 | 23 | 10 | 4 | campaign | Sara: graphic pkg/look update 20h + website/app update 3h; Tanner: teaching videos update 10h; Zac: filming 4h. Runs Jan 5–25 |
| 30 | New Year Series | ⚠️ | 2027-01-11 | 47 | 10 | 4 | series | Sara: 29h launch + 3 wks × 6h ongoing (through ~Feb 7); Tanner: bumper; Zac: filming |
| 31 | KB Catalytic Weekend #1 / KB Launch | ⚠️ | 2027-01-25 | 8 | 10 | 4 | event | Sara: engagement cards 5h + launch slides 3h (KB Booklet is separate project #27); Tanner: launch video 10h; Zac: filming 4h |
| 32 | Super Sunday | ⚠️ | 2027-02-07 | 36 | 28 | 12 | campaign | Sara: graphics pkg 29h + social design 4h + stingers design 3h; Tanner: promo video 10h + social videos 3×4h + stingers 2×3h = 28h total; Zac: major-event filming 12h |
| 33 | Post-Super Sunday Series | ⚠️ | 2027-02-14 | 47 | 10 | 4 | series | Sara: 29h launch + 3 wks × 6h ongoing; Tanner: bumper; Zac: filming |
| 34 | Spring CG Campaign | ⚠️ | 2027-03-07 | 52 | 64 | 8 | campaign | Sara: full series pkg 29h + booklet cover 20h + website/app 3h; Tanner: 2 CG teaching videos × 32h each; Zac: filming 8h. Confirm with Jodi whether this runs in 2027 |
| 35 | Sisterhood Spring | ⚠️ | 2027-04-04 | 97 | 10 | 12 | event | Sara: graphics pkg 20h + **merch 70h** + templates 4h + photobooth 2.5h; Tanner: recap bumper 10h; Zac: event filming 12h. ⚠️ If Easter Apr 25 overlaps, Sara is at severe risk — flag |
| 36 | Easter Campaign | ⚠️ | 2027-04-25 | 40 | 58 | 14 | campaign | Sara: seasonal look pkg 20h + ad campaign 10h + banners 5h + photobooth 2.5h + extras 2.5h; Tanner: testimony video 48h + bumper 10h; Zac: testimony filming 6h + bumper filming 4h + Good Friday 4h. Event is Apr 25 — outside 52-week window; bar shows through week 51 with note |
| 37 | Good Friday | ⚠️ | 2027-04-23 | 5 | 3 | 2 | event | Sara: service support graphics 5h; Tanner: service support 3h; Zac: 2h |

---

## 9. Known Overflow / Risk Flags

These projects will likely exceed available capacity near their deadlines. The algorithm should surface them visually (red cells + ⚠ label), not silently truncate.

| Project | Risk | Notes |
|---------|------|-------|
| KB/Generosity Series | Tanner: 154h across ~5 weeks | Testimony videos (3×48h) may need staggered scheduling or outsourcing. Algorithm will show overflow |
| Sisterhood Night + Miracle Offering | Sara: 97h + 36h in same ~6-week window | Two merch-heavy events simultaneously |
| Fall Kickoff (merch) | Sara: merch design must be done ~Aug 17 | 70h of merch inside summer when capacity looks light |
| Sisterhood Spring + Easter | Sara: 97h + 40h in ~4 weeks if April overlap confirmed | Flag if Sisterhood Spring is in April |
| Christmas + KB Booklet + Annual Report | Sara: all three design simultaneously in December | Booklet and annual report prep must start while Christmas is live |
| Nov–Dec Tanner | Worship Night post-prod + Christmas bumper + KB/Generosity testimonies | Tanner at or over capacity Oct–Dec |

---

## 10. Rendering Notes

- **Merch items** (Sisterhood ×2, Fall Kickoff, ELC): the algorithm will back-load hours to the print-order deadline (~3 weeks before event), not the event date. Add a `printLeadWeeks: 3` field to those project deliverables so the algorithm uses `eventDate - 3 weeks` as the effective deadline for those hours.
- **Miracle Offering post-event slides**: Sara's 12h post-event deliverable should be *forward*-scheduled from Nov 11 (similar to Worship Night). Add a `postEventDeliverable: true` flag on that specific deliverable.
- **Ongoing series** (projects 1, 6, 12, 17, 21, 30, 33): hours are spread across the full series duration, not back-loaded to the launch date. These should use uniform distribution (hours/totalWeeks per week) rather than back-loading. Add `distribution: 'uniform'` flag on these projects.
- **Worship Night Post-Production** (project 19): `postEvent: true`. Schedule Tanner's 50h forward from Oct 4 across available weeks. The release date Jan 25 is a soft target, not a hard deadline — hours just need to be placed after Oct 4.

---

## 11. CSS Details

```css
/* Outer wrapper — enables horizontal scroll */
#gantt-wrap { overflow-x: auto; position: relative; }

/* Sticky label column */
td.label, th.label {
  position: sticky;
  left: 0;
  z-index: 10;
  background: white;
  min-width: 200px;
  font-size: 13px;
  font-weight: 500;
  border-right: 2px solid #CBD5E1;
  padding: 0 8px;
}

/* Week columns */
td.week-cell { width: 32px; min-width: 32px; padding: 0; }

/* Heatmap */
td.heat-empty  { background: #F8FAFC; }
td.heat-green  { background: #86EFAC; }
td.heat-yellow { background: #FDE047; }
td.heat-red    { background: #FCA5A5; }

/* Project bars */
td.active               { border-top: 2px solid; border-bottom: 2px solid; }
td.active.confirmed     { border-style: solid; }
td.active.inferred      { border-style: dashed; }
td.active.bar-first     { border-left: 2px; border-radius: 4px 0 0 4px; }
td.active.bar-last      { border-right: 2px; border-radius: 0 4px 4px 0; }
td.active.bar-only      { border: 2px; border-radius: 4px; }

/* Tooltip */
#tooltip {
  position: fixed;
  background: #1E293B;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 12px;
  max-width: 280px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  z-index: 1000;
  pointer-events: none;
}
#tooltip.hidden { display: none; }
```

---

## 12. Update Instructions (for future edits)

To **add a project**: append an object to `PROJECTS` array. No other changes needed.

To **change hours**: edit the `hours` value inside `deliverables`. Algorithm recalculates on page load.

To **change a date**: edit `eventDate`. The algorithm will re-back-load automatically.

To **change a person's capacity**: edit `capacity` or `baseline` in `CONFIG.team`. All heatmap colors update.

To **confirm an inferred project**: change `confirmed: false` to `confirmed: true`. Bar changes from dashed to solid.
