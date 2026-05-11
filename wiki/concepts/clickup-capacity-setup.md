---
title: ClickUp Capacity Setup
type: concept
created: 2026-04-19
updated: 2026-05-07
tags: [clickup, capacity, workload, setup, templates, views, custom-fields]
sources: [ClickUp help documentation, How to use ClickUp 2024.pdf]
---

**TLDR:** ClickUp's Workload view is the right tool for Emmanuel's comms capacity view. It requires time estimates and assignees on every task to function. The recommended architecture is a Space-per-year with Folders for each sermon series and major event, cloned from master templates. Recurring weekly tasks handle baseline workload. **Decision status: ClickUp is chosen; pricing pending final approval (end of April 2026).**

---

## How ClickUp's Workload View Works

The **Workload view** shows each team member's assigned hours vs. their set capacity for the week. It:

- Aggregates time estimates across all assigned tasks per person
- Displays over/under capacity visually (color-coded bars)
- Can be filtered by team, date range, or custom fields
- Pulls from any tasks in scope (list, folder, or space level)

### Hard Requirements
- **Every task must have a time estimate** (hours) — without this, the view shows nothing useful
- **Every task must have an assignee** — tasks without owners don't appear in anyone's workload
- **Each team member's capacity must be set** — configure in workspace settings (e.g., 26 hrs/week per person)

---

## Recommended Architecture for Emmanuel Comms

### Workspace Structure

```
ECC Communications (Space)
├── 📁 Recurring Weekly           ← Always-on baseline tasks
├── 📁 Sermon Series — Template   ← Master template (never delete)
├── 📁 [Series Name] 2025         ← Cloned per series launch
├── 📁 [Series Name] 2025         ← etc.
├── 📁 Major Events — Template    ← Master event template
├── 📁 Easter 2026                ← Cloned per major event
├── 📁 Christmas 2026             ← etc.
├── 📁 Department Requests        ← ELC, KB, Dr. NR, Worship, SHL
└── 📁 Ad Hoc Requests            ← One-off items
```

### Why Templates + Cloning (Not Native Recurrence)
ClickUp does not support recurring project templates — only recurring individual tasks. For sermon series (which repeat 8–9x/year with the same deliverable set), the workflow is:
1. Maintain a **master template folder** with all tasks, assignees, and time estimates pre-loaded
2. Clone it when a new series is confirmed on the calendar
3. Update task due dates backward from the series launch date

This is the cleanest approach given ClickUp's current capabilities.

---

## Sermon Series Template (Per Series)

Each cloned series folder should contain these tasks at minimum:

### Designer Tasks (One-Time)
| Task | Estimated Hours | Assignee |
|------|----------------|---------|
| Series Graphic | ⚠️ TBD | Designer |
| Speaker Background | ⚠️ TBD | Designer |
| Lower Thirds | ⚠️ TBD | Designer |
| Social Post Template | ⚠️ TBD | Designer |

### Videographer Tasks (One-Time)
| Task | Estimated Hours | Assignee |
|------|----------------|---------|
| Bumper Video Production | ⚠️ TBD | Videographer |

### Recurring (Weekly Within Series — Set as Recurring Tasks)
| Task | Estimated Hours | Assignee |
|------|----------------|---------|
| Weekly social graphic adaptation | ⚠️ TBD | Designer |

⚠️ **All hours marked TBD — must be gathered from team before this template is useful.**

---

## Recurring Weekly Tasks (Baseline Load)

These live in the "Recurring Weekly" folder and represent the always-on workload that consumes capacity before any project work begins. Set each as a **weekly recurring task**.

| Task | Role | Est. Hours |
|------|------|-----------|
| Sunday switcher / livestream operation | Videographer 1 | ⚠️ TBD |
| Sunday photo coverage (all locations) | Photographer | ⚠️ TBD |
| Photo editing + uploading/sharing | Photographer | ⚠️ TBD |
| Sunday message video + audio editing | Videographer | ⚠️ TBD |
| Upload Sunday message → all platforms | Videographer | ⚠️ TBD |
| Sermon clips creation + posting | Videographer | ⚠️ TBD |
| Weekly email content/formatting/sending | Designer or lead | ⚠️ TBD |
| Weekly announcement graphics | Designer | ⚠️ TBD |
| Social media posting + management | Designer or social | ⚠️ TBD |
| Lobby TV management | Misc | ⚠️ TBD |

Once these are estimated, subtract them from each team member's 26 hrs/week to find **true project capacity per week.**

---

## Major Event Template

For non-negotiable events (Easter, Christmas, Super Sunday, Sisterhood, KB Weekends, Fall Kickoff, Miracle Offering, Worship Night), clone a major event template:

| Task | Role | Est. Hours |
|------|------|-----------|
| Full graphics package (all assets) | Designer | ⚠️ TBD |
| Bumper video | Videographer | ⚠️ TBD |
| Promo video | Videographer | ⚠️ TBD |
| Ad campaign assets | Designer | ⚠️ TBD |
| Banners design + ordering | Designer | ⚠️ TBD |
| Photobooth design + ordering | Designer | ⚠️ TBD |
| Event photo coverage | Photographer | ⚠️ TBD |
| Social campaign content | Designer | ⚠️ TBD |
| Testimony/recap video | Videographer | ⚠️ TBD |
| Merch design + ordering | Designer | ⚠️ TBD |

Not all tasks apply to every event — customize per event when cloning.

---

## Custom Fields to Add

**Start with exactly 3** (ZenPilot recommendation: don't add more until the team is comfortable):

| Field | Type | Purpose |
|-------|------|---------|
| Role / Delivery Role | Dropdown | Assign work by role; bulk-assign after deploying a template |
| Work Category | Dropdown | Maps to [[comms-work-categories]]; enables reporting by work type |
| Task Type | Dropdown | Distinguish actionable tasks, meetings, and records |

Keep Custom Fields at the **Space level** (not Workspace level). Adding at Workspace level applies the field to every task in every Space — creates clutter fast.

Additional fields to add later, once basics are established:

| Field | Type | Purpose |
|-------|------|---------|
| Priority | Dropdown (P0–P3) | Aligns with [[comms-priority-framework]] |
| Department | Dropdown (ECC / ELC / KB / Dr. NR / Worship / SHL) | Filter by requester |
| Deliverable Type | Dropdown (Video / Design / Photo / Web / Social / Print) | Filter by team role |
| Event/Series | Text or relationship | Links tasks to their parent campaign |

---

## Capacity Configuration

In ClickUp workspace settings, set each team member's weekly capacity:

| Role | Weekly Capacity |
|------|----------------|
| Videographer 1 (Switcher) | 26 hrs |
| Videographer 2 | 26 hrs |
| Graphic Designer | 26 hrs |
| Photographer | 26 hrs (adjust if Sunday-only) |

> After recurring tasks are estimated, the *effective project capacity* per role will be lower than 26 hrs. The Workload view will reflect the full picture once all tasks are in.

---

## Priority Tiers (Pending)

To be defined with [[nate-ruch]]. Recommended custom field values:

| Tier | Label | Meaning |
|------|-------|---------|
| P0 | Non-Negotiable | Always yes (Christmas, Easter, Sermon Series, etc.) |
| P1 | High Priority | Do when capacity allows; flag if blocked |
| P2 | Standard | Normal queue |
| P3 | Defer / Outsource | Route to third party if team is full |

---

## Build Sequence (Recommended Order)

1. ✅ Ingest sources and map annual workload (done)
2. ⚠️ Gather time estimates per deliverable with team
3. ⚠️ Define priority tiers with Pastor Nate (Tuesday)
4. Set team capacity in ClickUp (26 hrs/week per person)
5. Build Recurring Weekly folder + set tasks as recurring
6. Build Sermon Series master template
7. Build Major Event master template
8. Clone templates for all 2026 series/events (use [[emmanuel-master-calendar]] for dates)
9. Enable Workload view and verify data is populating correctly
10. Train team on task ownership and time estimate updates

---

## Process Library Space

Create a dedicated **Process Library** Space to store template source files. ClickUp Templates saved to the Template Center cannot be edited directly — you must have the source task/list/folder in ClickUp to update a template.

Recommended folder structure inside Process Library:
- Folder: Comms Task Templates (one List per work category)
- Folder: Comms List Templates (for multi-task projects)
- Folder: View Templates
- Folder: Doc Templates (meeting agendas, briefs)

This ensures templates stay editable as workflows evolve. (source: [[clickup-zenpilot-guide]])

---

## Status Simplicity

**Use only To-Do and Complete for 99% of tasks.** Do not use Status to track project stage.

Two common mistakes to avoid:
1. Using custom statuses as the source of truth for what stage a deliverable is in (use Subtasks instead)
2. Having different statuses in every Space/Folder (makes Dashboards and cross-Space views impossible)

The Subtask structure (each subtask = one actionable step, one owner, one sitting) makes project stage self-evident without status complexity.

---

## ClickUp Champion

Assign one team member to own ClickUp health and accountability:

| Cadence | Task |
|---------|------|
| Daily (10–30 min) | Spot check: overdue tasks, missing estimates, update gaps |
| Weekly | Short report to leadership: completion rates, time tracked, flags |
| Monthly | Resource/scoping data pull |
| Quarterly | Comprehensive analysis — estimates, planning, team capacity |

Build a **Time Reporting Dashboard** and **Leaderboard Dashboard** to support these checks. (source: [[clickup-zenpilot-guide]])

---

## 4 Must-Have Views

| View | Type | Purpose |
|------|------|---------|
| My Tasks | List (private) | Each person's daily work, grouped by due date |
| Assignee | List (grouped by Role field) | Bulk-assign tasks when deploying a template |
| Date Remap | Gantt | Reschedule entire workflows by dragging one task |
| Workload | Workload | Capacity visibility across the team |

- My Tasks is a private view each person configures for themselves
- Workload view accuracy requires: every task has a Time Estimate, Due Date, and Assignee
- Date Remap requires Dependencies built into templates to be useful
- "Default for everyone" setting on shared views ensures the team sees the same thing

---

## Pricing Reference

From the April 21 evaluation call (source: [[clickup-evaluation-04-21]]):

| Package | Users | Annual Cost (2-yr contract) |
|---------|-------|---------------------------|
| Small Business Suite | 5 | ~$3,187/yr |
| Small Business Suite | 10 | **$6,375/yr** (25% off $8,500 list) |
| Small Business Suite | 20 | ~$12,000/yr (TBD) |

- Includes ClickUp Brain (multi-LLM), ClickUp Assist (24 hrs onboarding), premium support
- Annual only; no month-to-month
- AI credits: 50k/month for 10 users; overage $100/100k credits

**Onboarding:** ClickUp Assist covers 2–3 team sessions over ~90 days. Kylie (PM, starting Apr 30) owns ClickUp day-to-day. See [[kylie]].

---

## Related Pages

- [[communications-capacity-planning]] — overall framework and open questions
- [[comms-team]] — team roles and capacity baseline
- [[sermon-series-comms-workflow]] — recurring deliverables per series
- [[comms-team-deliverables]] — full deliverable catalog (time estimates needed)
- [[emmanuel-master-calendar]] — source of truth for series/event dates
- [[clickup-zenpilot-guide]] — source guide for Process Library, Custom Fields, and Views
