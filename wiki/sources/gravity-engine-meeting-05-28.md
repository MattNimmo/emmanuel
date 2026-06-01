---
title: "Gravity Engine Meeting — May 28, 2026"
type: source
created: 2026-06-01
updated: 2026-06-01
tags: [meeting, technology, website, app, storytelling, content-strategy, luke-fredrickson]
sources: [Nate AND Luke Gravity Engine Meeting 5.28.26.rtf]
---

**TLDR:** May 28, 2026. Luke Fredrickson pitches the Gravity Engine to Nate Ruch, with Zach Anderson joining by phone. Luke presents both the thesis (Emmanuel's brand has national potential if it tells its stories with urgency and depth) and the technology (a custom Supabase + React/Next.js platform replacing WordPress, with AI content generation from Sunday sermons). Beta target: 1–2 weeks out. Zach presents a three-tier storytelling framework they've been developing.

---

## Attendees

- **Luke Fredrickson** (Speaker 1) — tech entrepreneur, Gravity Engine builder
- **Nate Ruch** — Senior Pastor
- **Speaker 2** — identity unconfirmed; likely Matt Nimmo or JonCarlos Velez (Luke notes he showed "Matt and John Carlos" the demo the previous night)
- **Zach Anderson** (Speaker 4) — ECC filmmaker / storytelling lead; joined remotely from Hastings mid-meeting

---

## The Thesis

Luke's core argument: Emmanuel's brand is called to more than its four locations. The country is hungry for "no chrome, no flash" — blue collar, Spirit-filled, real. Emmanuel has it.

The problem: ECC communications currently talks *about* the room (events, announcements, "come this Sunday") instead of talking about *what God is doing in the room*. To shift that requires a disciplined system — not just intent.

> "There is this spiritual gravity that Emmanuel has that will start to pull people in. That happens when we start taking what happens on Sunday and running it through a system that will let us carry it through the week."

North star: Get Emmanuel into "back-home rooms" nationally — rooms of influence — within three years. Not by chasing views, but by telling stories of momentum so compelling that people invite Emmanuel in.

> "Our job is not to get a bunch of views. Our job is, if we do it right, it only takes one person to see it to invite us into a room where massive impact is happening."

---

## The Technology

### What Gravity Engine is

A single-database platform (Supabase) powering:
- **Website** (React/Next.js — replaces WordPress)
- **App** (React, wrapped for iOS and Android)
- **Email** (outbound from same database)

Content created once, distributed across all surfaces. AI generates: small group questions, daily devotionals, social clips, and images — all from the Sunday sermon transcript. Human review/replacement layer on top.

### Studio interface

A "cockpit" login for the creative team to manage and post content — no WordPress, no Squarespace template constraints. Conversation-based updates ("I need this changed" → AI does it). Plus a separate power-user repo-level access for true structural changes.

### Event / CCB integration

CCB stays as the center of truth for events and pastoral communications. Gravity Engine ingests CCB event data and augments it with creative content. Push Pay stays for transactions. No plans to replace these.

### Social

Social media is not directly managed by Gravity Engine — the system generates a "hit list" of content types and cadence; the team posts from that list. The platform produces the source material; humans post to socials.

### Tech stack

- Database: Supabase (Postgres)
- Frontend: React / Next.js
- App: React inside iOS/Android wrapper
- Hosting: Supabase (can migrate to AWS)

---

## Beta Timeline

Luke's target: internal beta in 1–2 weeks from May 28. Staff connect group runs one Sunday through it first. Goal is buy-in by showing, not telling — staff who are analytical won't get it from a pitch; they'll get it when they see their stories in it.

> "The only way to really get it is to concretely put something in front of them and say this is what I'm talking about."

---

## Zach Anderson: Three-Tier Storytelling Framework

Zach has been working on a breakdown of story scale:

| Tier | Description | Production Level |
|------|-------------|-----------------|
| **1 — Mini-documentary** | Easter / Wade-style: full-day shoot, set, B-roll, multiple interviews | High — multiple team members, full edit |
| **2 — Mid-tier** | Well-produced for socials/web; doesn't require Sunday morning airtime | Moderate — practical, repeatable |
| **3 — Quick social** | Camera + mic: "What's God doing in your life?" — grab it, post it | Low — one person, fast turnaround |

Plan to test Tier 3 at Holy Spirit Night (May 31). Zach + camera: capture 10 quick testimonies, find the one that lands.

---

## Key Tensions

- **Urgency is the point.** Stories must be tethered to *this week*, not a month ago. Momentum requires recency.
- **Not a staffing multiplier.** Nate and Luke both acknowledge this isn't about doing more with the same people — it's about AI handling the volume so humans handle the curation.
- **Phase approach.** Start with website + app (highest impact, cleanest first play). Other surfaces (social cadence, CCB augmentation) are later phases informed by what the beta reveals.

---

## Decisions / Next Steps

- Luke demos the beta to the team in 1–2 weeks
- Nate to determine when to pull the trigger on broader release
- Regular meeting rhythm to be established (Nate + Luke weekly, minimum)
- Zach tests Tier 3 storytelling at Holy Spirit Night

---

## Related Pages

- [[gravity-engine]] — concept page for the full framework
- [[luke-fredrickson]] — entity page; status updated from exploratory → active build
- [[zac-anderson]] — storytelling tier framework contributor
- [[website-strategy]] — website-strategy updated to reflect this platform direction
- [[social-media-strategy]] — content-first approach shifts the social game
- [[180-testimony-videos]] — story tier model extends this concept
- [[seven-churches-05-20]] — content this system will need to distribute
