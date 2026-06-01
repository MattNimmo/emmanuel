---
title: Gravity Engine
type: concept
created: 2026-06-01
updated: 2026-06-01
tags: [technology, website, app, content-strategy, storytelling, luke-fredrickson, digital]
sources: [Nate AND Luke Gravity Engine Meeting 5.28.26.rtf]
---

**TLDR:** The Gravity Engine is Luke Fredrickson's name for both a thesis and a technology platform. Thesis: Emmanuel has spiritual gravity — a pull that draws people in — and it gets realized when ECC consistently tells what God is doing in the room, not just what events are happening. Technology: a custom Supabase + React/Next.js platform replacing WordPress that auto-generates content from Sunday sermons and distributes it across website, app, and email from one database. Beta in summer 2026.

---

## The Thesis

Emmanuel's brand is bigger than its four locations. The country is hungry for authentic, Spirit-filled community — "blue collar, no chrome, no flash" — and Emmanuel has it. The problem is that ECC's current communications strategy describes the room instead of what's happening inside it.

The shift: from announcements to momentum. Every piece of content should make someone feel like they *missed something real*, not that they missed a service.

> "Instead of 'Come this Sunday, the Holy Spirit' — we need to get inside the room, find those stories, and send them out."

The goal isn't views. The goal is one person seeing the right story and inviting Emmanuel into a room of national influence.

---

## The Technology Platform

### Architecture

A single Supabase (Postgres) database powers everything:

| Surface | Technology |
|---------|-----------|
| Website | React / Next.js (replaces WordPress) |
| App | React wrapped for iOS and Android |
| Email | Outbound from same database |
| Social | Content list generated; manual post |

One database. One center of truth. Content created once, pushed across all surfaces.

### AI layer

Sunday sermon transcript → AI generates:
- Small group questions
- Daily devotionals
- Social media clips
- Supporting images

All reviewable and replaceable by the creative team. Augmentative, not autonomous.

### Studio interface

The creative team logs into a "studio" — a cockpit-style dashboard for content creation and management. Conversation-based updates ("change this page") handled by AI co-pilot. A separate repo-level access for structural changes (one person, high trust).

No more WordPress. No more Squarespace constraints. The platform is a canvas the team paints on.

---

## What It's Not Replacing

- **CCB** — stays as center of truth for event management and pastoral communications
- **Push Pay** — stays for giving and transactions
- **Social platforms** — Gravity Engine produces the hit list; humans post to socials

Luke's principle: "When it's time to mess with them, we'll know. We'll count the cost and be smart about it."

---

## Content Philosophy

**Momentum-tethered stories.** The content must be about *this week*, not last month. The urgency of recency is the point — people should watch a clip and think "I need to be there Sunday."

**Story tiers** (from [[zac-anderson]]):

| Tier | Format | Production Level |
|------|--------|-----------------|
| 1 — Mini-doc | Full shoot: set, B-roll, multiple interviews | High |
| 2 — Mid-tier | Well-produced for socials/web; not Sunday stage | Moderate |
| 3 — Quick social | Camera + mic: "What's God doing in your life?" | Low / fast |

Tier 3 was tested at Holy Spirit Night (May 31, 2026).

---

## Timeline

| Milestone | Target |
|-----------|--------|
| Internal beta (1 Sunday run-through) | ~June 2026 |
| Staff connect group beta | ~June–July 2026 |
| Full release | TBD — informed by beta feedback |

"Slow is fast." Luke's framing: the build is fast (weeks, not months); the release pace is set by Nate reading the organization's readiness.

---

## Status (as of May 28, 2026)

- **Active build** — Luke is building live; beta ~1–2 weeks out from May 28 meeting
- **Nate engaged** — described it as "when you hear about vision, sometimes it can go: how are we going to do that? This is trying to prevent that feeling from stopping us."
- **Zach Anderson** — confirmed as storytelling lead; three-tier framework already in development independently
- **Regular meeting rhythm** being established between Nate + Luke

---

## Related Pages

- [[gravity-engine-meeting-05-28]] — source: full meeting transcript
- [[luke-fredrickson]] — builder and architect
- [[zac-anderson]] — storytelling tier framework; content curation
- [[website-strategy]] — this replaces the WordPress/vendor evaluation direction
- [[social-media-strategy]] — content-first approach reframes the social cadence question
- [[180-testimony-videos]] — testimony pipeline feeds the Gravity Engine's content
- [[seven-churches-of-revelation]] — first major series the platform will need to distribute
