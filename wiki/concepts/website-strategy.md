---
title: ECC Website Strategy
type: concept
created: 2026-04-29
updated: 2026-06-01
tags: [website, digital, ccb, visitor-experience, design, app, gravity-engine]
sources: [04-29 Consultation_ Matt Nimmo - Church Website Overhaul-transcript.txt, 04-29 Weekly Meeting_ KB Catalytic & Mother's Day Events, ClickUp Adoption-transcript.txt, Nate AND Luke Gravity Engine Meeting 5.28.26.rtf]
---

**TLDR:** ECC's website (`emmanuelcc.org`) has been stuck in an identity crisis — serving neither new visitors nor members well. Matt's direction: rebuild it as an external-facing front door with a single call to action (plan a visit). Summer 2026 refresh target. Vendor evaluation in progress.

---

## The Problem

- **Identity crisis:** the current site is a mix of external (visitor) and internal (member) content. No clear primary audience.
- **No web expert:** no one on the comms team has website ownership; updates are manual and slow.
- **Broken events:** events in CCB must be manually re-entered into the website — duplicated effort every time.
- **Platform:** WordPress/Elementor. Not purpose-built for ministry; no native CCB integration.

---

## Matt's Strategic Direction

**Website = external-facing front door.** One primary CTA: plan a visit.

- Members use the **PushPay app** for internal content (campus events, groups, etc.)
- Website should not try to replicate app functionality
- Groups, internal calendars, member portals belong in the app — not on the public site

### Design Benchmark

Nate Ruch referenced `one.church` as a site he likes:
- Clean layout
- Strong CTA
- No clutter
- Not gimmicky

---

## App / Website Division of Responsibility

| Platform | Audience | Primary Content |
|---------|---------|----------------|
| `emmanuelcc.org` | New visitors | What is ECC? When/where to visit. What to expect. |
| PushPay App | Members | Campus events, groups, giving, internal news |

---

## Current Site Structure

- One site (`emmanuelcc.org`) for all four campuses
- Each campus has its own location page (not a separate subdomain)
- Each campus has its own location assignment in the app

---

## Vendor Evaluation

See [[website-overhaul-04-29]] for full call notes. Key points:

- **Vendor:** Ministry-specific custom platform (name unknown; rep: Brianna)
- **CCB integration:** confirmed — events from CCB auto-publish to website when set public
- **Live stream:** pulls YouTube live feed; auto-starts/ends with stream
- **Sermon catalog:** external video embed (not native hosting); podcast supported
- **Music/worship site:** also under evaluation for migration from Squarespace to same platform

### What's Resolved
- CCB integration: confirmed workable
- Platform fits the external-visitor model Matt wants
- No separate sites needed per campus — location pages work

### Open Questions
- Theme vs. custom build? (Matt wants to see themes first)
- Premium (self-managed) vs. Ultimate (fully managed)?
- Auto-creating event pages from CCB data — not yet built; flagged as feature request
- Cost — vendor sending pricing breakdown
- Music site migration — feasible per Brianna; no pricing yet

---

## Ownership Model (Updated May 2026)

Per direction from [[nate-ruch]] on May 18, the website is not a pure comms-owned asset. Ministry departments own their sections:

- **[[jodi-ruch]] and [[ashley-olson]]** take ~90% ownership of: Dedications, Growth Track, Connections, ministry-specific items
- Goal: integrate ministries into website management; empower them to make changes directly without routing through comms
- [[zac-anderson]], Matt Nimmo, and [[kylie]] to be trained on website operations
- This shifts comms role from "website owner" to "platform steward + training provider"

See [[nate-meeting-05-18]].

---

## Timeline

- **Target:** Summer 2026 refresh
- **Current phase:** vendor evaluation → training and ownership setup (May 2026)
- **Next step:** Train Zac/Matt/Kylie; define access/tools for Jodi and Ashley

---

## ⚠️ Platform Direction Update (May 28, 2026)

The ministry website vendor evaluation (above) is superseded by a custom build under the [[gravity-engine]] project, being architected and built by [[luke-fredrickson]].

**What changes:**
- WordPress/Elementor → React / Next.js (custom build)
- Vendor platform evaluation → paused/moot
- Website + app → unified single Supabase database
- Content management → AI-assisted studio interface; no CMS

**What stays the same:**
- External front-door intent (visitors, not members)
- CCB as event center of truth
- Push Pay for giving
- Ministry ownership model (Jodi, Ashley, etc. still own their sections)

**Beta timeline:** ~June 2026 (internal); phased rollout from there.

See [[gravity-engine]] for full platform architecture and [[gravity-engine-meeting-05-28]] for the May 28 meeting where this was formalized.

---

## Related Pages

- [[gravity-engine]] — the platform replacing the WordPress/vendor direction
- [[gravity-engine-meeting-05-28]] — May 28, 2026 build meeting with Luke + Nate
- [[luke-fredrickson]] — architect and builder
- [[website-overhaul-04-29]] — source: original vendor eval call notes
- [[emmanuel-christian-center]] — org context; 4 campuses
- [[online-broadcast-strategy]] — live stream is a key website feature
- [[comms-intake-process]] — website updates have been bypassing intake; refresh is chance to fix
- [[comms-team]] — no current web expert; website ownership is a gap
