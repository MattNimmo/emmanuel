---
title: "How to Use ClickUp" — ZenPilot Ultimate Guide (2024)
type: source
created: 2026-04-20
updated: 2026-04-20
tags: [clickup, setup, templates, workload, views, custom-fields, process]
sources: [How to use ClickUp 2024.pdf]
---

**TLDR:** A 56-page ClickUp implementation guide by ZenPilot (ClickUp's highest-rated solutions partner). Covers workspace setup, hierarchy, templates, custom fields, views, training, and optimization. Most relevant to ECC for: Process Library architecture, Custom Field starting set, 4 must-have views, and ClickUp Champion role.

---

## Source Details

- **Author:** ZenPilot (Jeff Cypher / Zeb Evans, ClickUp CEO foreword)
- **Type:** Implementation guide / PDF
- **Date:** 2024
- **Pages:** 56
- **Audience:** Teams new to or restructuring ClickUp

---

## The 12-Step Implementation Sequence

1. Create a ClickUp Workspace
2. Choose the correct pricing plan
3. Adjust personal settings (especially notifications)
4. Invite your implementation team first (not the full team yet)
5. Turn on helpful ClickApps
6. Build your ClickUp Hierarchy
7. Build ClickUp Templates
8. Leverage Custom Fields
9. Leverage ClickUp Views
10. Train your team and launch
11. Work in ClickUp
12. Optimize continuously

---

## Key Recommendations for ECC

### Pricing
- Minimum recommended: **Business** plan (not Unlimited — missing workload management)
- Business adds: Workload Management (critical for capacity visibility)

### ClickApps to Enable First
Turn on only essentials to start; add more as the team gains confidence.
- **Time Tracking** — track hours directly in ClickUp
- **Time Estimates** — required for Workload view to function
- **Custom Fields** — needed to build views and filters

Skip Automations until the team is comfortable with basics.

### Hierarchy for ECC Comms
The recommended structure maps naturally to ECC's context:
- **Space** = ECC Communications
- **Folder** = Sermon series / Major events / Department type
- **List** = Work category within that event
- **Parent Task** = Individual deliverable (the communication hub for that deliverable)
- **Subtask** = Actionable steps to complete the deliverable
- **Checklist** = Reminders/QA items attached to a subtask

> One task per person per sitting. The biggest mistake: one Parent Task assigned to multiple people. Use Subtasks instead.

### Status Simplicity
- Use only **To-Do** and **Complete** for 99% of tasks
- Never use Status as a proxy for project stage — use Subtasks for that
- Inconsistent statuses across Spaces make Dashboards and Views nearly impossible

### Process Library Space
Build a dedicated "Process Library" Space to store all template source files.
- Templates saved to the Template Center cannot be edited directly — you need the source
- Organize by department and template type (Delivery Task Templates, View Templates, etc.)
- This is how you keep templates updatable as workflows evolve

### Custom Field Starting Set (Start with exactly 3)
| Field | Type | Purpose |
|-------|------|---------|
| Role / Delivery Role | Dropdown | Assign work by role; bulk-assign after deployment |
| Work Category | Dropdown | Label and report on work type; maps to [[comms-work-categories]] |
| Task Type | Dropdown | Distinguish records, meetings, and actionable tasks |

Do not create more Custom Fields until the team is comfortable using these three. Keep Custom Fields at the **Space level** (not Workspace level) to prevent cross-contamination.

---

## 4 Must-Have Views

### 1. My Tasks View (Everyone needs this)
- Build at Everything level
- List view grouped by Due Date
- Subtasks shown as separate tasks
- Filtered to show only tasks assigned to you
- Make it private — each person customizes theirs

### 2. Assignee View (For project managers)
- List view at Folder or List level
- Grouped by Role custom field
- Subtasks as separate tasks
- Bulk-assign all tasks for a given role in one click

### 3. Date Remap View (Gantt — for rescheduling)
- Gantt view at Folder or List level
- Toggle: Hide and skip weekends + Reschedule dependencies
- Drag one task → entire workflow shifts with it
- Only works well if templates have Dependencies built in

### 4. Workload View (For capacity visibility)
- Build at Everything level
- Enable: Subtasks + Weekends shown
- Requires on every task: **Time Estimate**, **Due Date**, **Assignee**
- Break tasks into ≤4-hour chunks for accuracy
- Remap overdue tasks immediately — stale overdue tasks corrupt the view

---

## Working in ClickUp — Daily Habits

- **Commandment #1:** "If it's not in ClickUp, it didn't happen." Everything must be entered.
- Everyone starts and ends their day in their **My Tasks** view
- Parent Tasks = communication hubs; all comments, drafts, and context live there
- When rescheduling, use the Gantt Date Remap view — do not just drag one task in My Tasks
- When moving a due date, leave a comment on the task explaining why (@mention stakeholders)
- Aim for **ClickUp Inbox Zero** — the Inbox feeds off of task activity; live there

---

## ClickUp Champion Role

Assign one internal person to own ClickUp health checks. Their responsibilities:

| Cadence | Task |
|---------|------|
| Daily (10–30 min) | Spot check: overdue tasks, missing time estimates, task updates |
| Weekly | Roundup report to management: time tracked, completion rates, flagged issues |
| Monthly | Pull data impacting resource allocation, project scoping |
| Quarterly | Comprehensive analysis affecting estimates, planning, hiring |

> Build Dashboards (Time Reporting, ClickUp Leaderboard) to support the Champion's checks.

---

## Training Guidance

- Train team **before** inviting them to the live workspace
- Two types of training needed: (1) project management expectations, (2) ClickUp tool orientation
- Build onboarding tasks and courses inside ClickUp itself
- "Clarity = kindness" — the more clarity you provide on structure and expectations, the less confusion

---

## Key Quotes

> "The key to success is combining the right tools, with the right processes, and the right habits."

> "Your project management system is almost useless without process templates."

---

## Relevance to ECC Wiki

This guide directly informs:
- [[clickup-capacity-setup]] — added Process Library, Custom Fields, must-have views, ClickUp Champion
- [[communications-capacity-planning]] — Workload view requirements confirmed (Time Estimate + Due Date + Assignee)
- [[comms-work-categories]] — confirms Work Category as a standard Custom Field for comms teams
