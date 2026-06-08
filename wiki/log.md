# Wiki Log

---

## [2026-06-08] ingest | PI Behavioral Reports (Matt/Sara/Tanner) + Message-Creative Meeting June 1

- Sources ingested: MattNimmo_BehavioralReport.pdf, SaraWestcott_BehavioralReport.pdf, TannerTaschuk_BehavioralReport.pdf, Message-Creative_mtg-Summary.pdf (June 1, 2026)
- Source checked, not duplicated: Message Planning Meeting Summary-2.pdf (already at [[message-planning-meeting-05-04]])
- Pages created: [[pi-report-matt-nimmo]], [[pi-report-sara-wescott]], [[pi-report-tanner-taschuk]], [[message-creative-mtg-06-01]]
- Pages updated: [[sara-wescott]] (PI Promoter section), [[tanner-taschuk]] (PI Guardian section), [[matt-nimmo-leadership-profile]] (PI Operator section), [[seven-churches-of-revelation]] (title confirmed), [[message-planning-meeting-05-04]] (August series resolved)
- Key decisions captured:
  - "The Future Is Ancient: Wisdom from the Seven Churches of Revelation" — confirmed full series title (was "proposed subtitle")
  - "The Storyteller" Aug 9–Sept 6 — five-week series, parables from all gospels, campfire/patio aesthetic
  - Ephesians Sept 13–Oct 18; finalize title July 13
  - Brian and Nathan departure risk flagged; successors not in the room
- PI cross-assessment note: Operator (Matt) + Promoter (Sara) = high-tension pairing. Matt (Operator) + Tanner (Guardian) = natural harmony but shared blind spots (neither escalates conflict).

---

## [2026-06-08] review | Weekly Review — June 1–8, 2026

- Period: June 1–8, 2026 (7 days)
- Pages created: [[weekly-review-2026-06-08]]
- Pages updated: [[overview]], [[log]]
- Key findings:

  **Seven Churches launched June 7** — No post-launch debrief yet in wiki. Open loop.

  **TEC 2026 is the new primary build** — 12-week runway; 77 pre-registrants; Essential Leadership Track announced at June 1 planning meeting; [[leadership-pipeline]] and [[brandi-hammond]] are new wiki additions.

  **Service times: dataset-worst on May 31** — MG Close Worship 11am hit +3:50 over plan (4:35 vs 0:45). SLP ran +12:59/+14:56. No corrective plan in place for MG. Past-due decision.

  **Gravity Engine approaching beta** (~June 8–11) — Luke Fredrickson confirmed active build; replaces website vendor evaluation. No post-beta update yet.

  **Past-due decisions flagged:**
  - August series — needed by ~June 1 for Sara's production window; nothing in wiki
  - MG Close Worship plan revision — data conclusive, no owner named

  **Unprocessed raw sources (P0):** Message Planning Meeting PDF, Message-Creative summary PDF, Weekend Planning Meeting docx (×2), June 1 attendance CSV, MattNimmo/SaraWestcott/TannerTaschuk Predictive Index reports, PI Leadership summary RTF

---

## [2026-06-01] ingest | Management Training Notes + Gravity Engine Meeting (May 28)

- Audited raw/sources/ against wiki/sources/; identified two un-ingested docs
- Updated skills/ingest.md with a Pending Queue section (ongoing maintenance)
- Pages created: [[management-training-notes]], [[gravity-engine-meeting-05-28]], [[gravity-engine]]
- Pages updated: [[luke-fredrickson]], [[zac-anderson]], [[website-strategy]], [[index]], [[log]]
- Key findings:

  **Management Training Notes (undated DOCX):**
  - EOS management training; likely Matt's own notes
  - Core framework: know your team via story, personality assessments (Working Genius, Predictive Index), work rhythm
  - Production team challenge named directly: stuck managing tasks instead of leading volunteers; broadcast excellence standards make every small mistake consequential
  - Connects to [[eos-initiative]], [[emmanuel-production-team]], [[dr-lori-meeting-04-21]], [[creative-team-meeting-05-04]]

  **Gravity Engine Meeting — May 28, 2026 (major):**
  - Luke Fredrickson presents Gravity Engine to Nate Ruch; Zach Anderson joins mid-meeting
  - **Thesis:** Emmanuel's brand has national potential; must shift from announcing events to telling what God is doing in the room
  - **Technology:** Custom Supabase + React/Next.js platform replacing WordPress; unified database for website, app, and email; AI generates content from Sunday sermon transcripts
  - **Story tiers (Zach):** Tier 1 mini-doc, Tier 2 mid-tier social/web, Tier 3 quick social grab — Tier 3 tested at Holy Spirit Night (May 31)
  - **Beta:** Internal beta ~1–2 weeks from May 28; staff connect group beta follows
  - **Status change:** Luke Fredrickson upgraded from exploratory → active build
  - **Conflict flagged:** Ministry website vendor evaluation (from [[website-overhaul-04-29]]) is superseded by this custom build; [[website-strategy]] updated with a platform direction note

---

## [2026-05-24] lint | Harness migration + discrepancy review

- Migrated ecc-wiki to skills-based architecture: thin-router CLAUDE.md, rewritten OPERATOR.md and RESOLVER.md, root `skills/` folder with 30 skill files
- Deleted: `.agents/` directory, root `SERVICE-TIMES-INGEST.md`, root `.impeccable.md` (moved to `skills/impeccable.md`)
- Ran full lint pass; 6 fixes executed in series:
  1. Broke P0 self-refs: `[[matt-nimmo]]` → `[[matt-nimmo-leadership-profile]]` in eos-meeting-05-20 and ecc-state-may-2026; `[[sparrow-moving]]` removed from OPERATOR.md
  2. Fixed RESOLVER.md Route E: `comms-weekly-capacity-hours-2026-2027.md` (nonexistent) → `.html`; created markdown wrapper synthesis page
  3. Created stub pages for missing wikilink targets: `[[dylan-hathcock]]`, `[[tanner-taschuk]]`, `[[mission-52]]`, `[[team-emmanuel-conference]]`
  4. Backtick-escaped phantom `[[weekend-planning-05-11]]` reference in log.md historical note
  5. Updated index.md with all new pages
  6. Updated overview.md to reflect skills migration
- Pages created: [[dylan-hathcock]], [[tanner-taschuk]], [[mission-52]], [[team-emmanuel-conference]], [[comms-weekly-capacity-hours-2026-2027]]
- Pages updated: [[eos-meeting-05-20]], [[ecc-state-may-2026]], [[log]], [[index]], [[overview]]

---

## [2026-05-24] synthesis | Location Visit Rubric

- Created rubric for evaluating location alignment during campus visits
- Pages created: [[location-visit-rubric]]
- Pages updated: [[index]]
- 6 domains: Weekend Service Experience, Physical Environment & Brand, Guest Experience, Production & Technology, Communications & Alignment, Team Health
- Each item labeled Central / Flex / Local; scored ✓ / ~ / ✗

---

## [2026-05-21] synthesis | ECC State of the Church — May 2026

- Synthesized three May 18–20 sources into a current-state narrative
- Pages created: [[ecc-state-may-2026]]
- Pages updated: [[overview]], [[index]]
- Key synthesis threads:
  - Org restructuring (EOS + XP) is the structural backdrop for everything in H2 2026
  - Seven Churches creative direction confirmed; ~2-week execution window before June 7
  - Named tensions: comms capacity during EOS rollout, August series decision gap, XP culture transition

---

## [2026-05-21] ingest | Weekly Planning 05-18, EOS Meeting 05-20, Seven Churches Creative 05-20

- Ingested 3 transcripts from May 18–20, 2026
- Pages created: [[weekly-planning-05-18]], [[eos-meeting-05-20]], [[seven-churches-05-20]], [[andy-ballew]], [[eos-initiative]]
- Pages updated: [[nate-ruch]], [[seven-churches-of-revelation]], [[index]], [[log]]
- Key findings:

  **Weekly Planning (May 18):**
  - Bill Johnson confirmed as guest speaker for May 24 (What About? #5)
  - Grad honoring moment added to May 31 (Sunday after Memorial Day = new standard)
  - Script/resource channel launched in Teams for centralized service assets
  - Camera controller incident (Zac): settings pushed to live camera mid-service; not a hardware issue
  - SLP confidence monitor glitched all morning; appointment scheduled
  - Alert communications must go to PC Alive channel, not only Sunday chat
  - Next Gen (Pastor Manny) flagged as missing voice in planning meetings

  **EOS / Organizational Restructuring (May 20 — major):**
  - Nate Ruch publicly named the dual Lead Pastor + XP burden: "I cannot be a visionary right now"
  - Pastor Ben (former XP) departure has left Nate covering both roles — unsustainable for years
  - Nate turning 55 this summer; 10-year window to 65; succession planning acknowledged
  - Andy Ballew (board member 13+ years, licensed A/G minister) named as EOS consultant
  - ECC building "Emmanuel Operating System" based on EOS framework; vision work (VTO) starting immediately
  - XP search accelerating; budget targeting 2027 hire; looking for "integrator" type
  - Target: all 6 EOS components operational within 6 months (~Nov 2026)
  - Named dysfunctions: clunky systems, firefighter culture, inconsistent location experience, thin bench strength, passive-aggressive water-cooler culture, end-arounds to Nate
  - JC quote: "We want an off-road vehicle but continue to drive a sports car"
  - JC quote: "We function more as family rather than a team"
  - Nate self-named: "People don't feel trusted by me" — acknowledged as legitimate; behavior change required

  **Seven Churches Creative (May 20):**
  - Series title confirmed: Seven Churches of Revelation; proposed subtitle "The Future Is Ancient"
  - Series runs June 7 – late July 2026 (~7 weeks); Teen Challenge one weekend
  - Nate shared Turkey trip photos/video in the session via AirDrop
  - Platform: white drapes crumpled to look like stone columns; gobos; uplit for ancient texture
  - Lobby: photo backdrop at each location (Ephesus arch, columns, palm trees)
  - Promo video: narrative voiceover + Turkey B-roll + Jeremy (guide) audio; possible Anoka amphitheater shoot
  - Social: after-service "what's your takeaway?" interviews run weekly throughout series
  - August series decision deferred

---

## [2026-05-18] ingest | Message Planning Meeting — May 4, 2026

- Ingested "Message Planning Meeting: Holy Spirit Focus, Seven Churches Series, and Fall Kickoff Coordination-Summary-2.pdf" (meeting date 2026-05-04)
- Pages created: [[message-planning-meeting-05-04]], [[seven-churches-of-revelation]]
- Pages updated: [[holy-spirit-night]], [[nate-meeting-05-18]], [[index]]
- Key findings:
  - **Holy Spirit Night teaching:** Alpha-like approach; 15–25 min; indwelling vs. infilling framework; Pastor Phil preaches Week 1 (May 24) while Speaker 2 travels; Speaker 2 preaches Week 2 (May 31) before HSN
  - **Holy Spirit Night personnel:** Grant + Danny renting vans for youth; local elders for altar ministry; Ab Donovan included
  - **Seven Churches of Revelation:** Confirmed June 7–late July; speaker map partially assigned (June 14 = Darren/Jeff; June 21 = likely Nathan; July 5 = Allie/Donovan/Shai); June 7 + July 19 unassigned; Speaker 2 has site-visit photos from Turkey
  - **August:** Dr. Darnell Williams (North Central University President) standalone Aug 2; four-week State Fair / back-to-school series Aug 9–30
  - **Fall:** Ephesians walkthrough begins September; Rob Hoskins (OneHope) giving/Great Commission series late Oct–Nov
  - **Stories & Parables of Jesus:** Long-arc multi-season concept surfaced; no calendar window yet
  - **Sermon note workflow:** Final notes delivered Monday morning of preaching week; creative preview window = 2–3 weeks before launch
  - **Fall Kickoff:** Post-Labor Day; Darren + Brian deciding; baptism target Sept 20
  - **Prayer:** Nathan Grams' mother Sherry recovering from major brain surgery

---

## [2026-05-18] ingest | Meeting with Nate — action items

- Filed verbal to-do list from a May 18 meeting with Pastor Nate Ruch
- Pages created: [[nate-meeting-05-18]], [[ashley-olson]]
- Pages updated: [[website-strategy]], [[index]]
- Key findings:
  - Website co-ownership: Jodi Ruch + Ashley Olson (Connections Ministry Coordinator) take ~90% of Dedications, Growth Track, Connections, ministry-specific sections — significant governance shift from comms-owned to ministry-owned
  - Website training needed for Zac Anderson, Matt Nimmo, and Kylie
  - **7 Churches of Revelation** — new project/series on the horizon; meeting to be set with JC + Matt + Nate; no details yet
  - TEC ("Team Emmanuel Conference") — Nate expressed desire to support TEC win; "Help us help you" framing; deliverables TBD
  - Vinyl mockups: Matt to design mockups for stage platform vinyl wrap

---

## [2026-05-18] ingest | Emmanuel Production Handbook

- Ingested PRODUCTION HANDBOOK_ILLUSTRATOR_FINAL_Small.pdf (compressed version; 45 MB, readable)
- Service Producer signed the handbook — confirmed as Josh Patterson based on prior wiki context (his title updated to "Production Lead / Service Producer")
- Pages created: [[production-handbook]], [[emmanuel-production-team]]
- Pages updated: [[josh-patterson]], [[index]]
- Key findings:
  - **Service length target: 70–80 minutes** (explicit handbook policy; aligns with service-times data)
  - "Services, not shows" — governing philosophy for all production decisions
  - "The sermon isn't over until the response has been sung" — defines where broadcast ends
  - Two-track hierarchy: Broadcast Producing (Service Producer leads) + Video Directing (Live Video Director leads); only these two roles are Staff-led
  - **Broadcast Timekeeper role = the person generating the element-by-element timing data** used in weekly service sheets and [[service-times-tracking]]
  - Inter-Location Comms creates time stamps as "play buttons" for location campuses to sync to broadcast stream
  - Loudness standard: 88–94 dB during full energy moments
  - Lighting programmed 1 day in advance minimum; dress rehearsal = first service
  - Message Notes graphic reviewed by Service Producer or Communications Lead before each service
  - ProPresenter = worship graphics/lyrics software; Dante VSC + WAVES Sound Grid = audio infrastructure
  - "Think sunsets, not lightning bolts" — lighting vision principle
  - Volunteer-driven: no experience required; 3-minute sign-up form

---

## [2026-05-18] ingest | Emmanuel Worship Handbook V6 + Lookbook V2

- Ingested two foundational Emmanuel Worship documents added to raw/sources/ on May 18
- Production Handbook (701 MB, Illustrator-based) exceeds PDF extraction limit; not ingested — image-only file
- JonCarlos Velez title updated: "Creative & Worship Director" → "Lead Worship Pastor" (official title per Handbook V6)
- Pages created: [[worship-handbook-v6]], [[worship-lookbook-v2]], [[emmanuel-worship-team]]
- Pages updated: [[joncarlos-velez]], [[index]]
- Key findings:
  - JonCarlos Velez signed as Lead Worship Pastor; 50+ year worship history at ECC
  - Defined roles: WL, FLV, Piano, Keys, Acoustic Guitar, Electric Guitar, Bass, Drums, MD
  - MD is the Ableton operator and production/band liaison; must know Nashville Number System
  - Hand signal system (9 signals) standardizes real-time song direction on platform
  - Planning Center = rehearsal material delivery system; music memorized — no stands on platform
  - Ethics section covers platform accountability, biblical sexuality, social media, alcohol, substance abuse, team care
  - Lookbook (2023): earth tones/solids/pastels recommended; white glows on camera; tight patterns cause moiré; no shorts on platform

---

## [2026-05-18] maintenance | Phantom-song correction — MG and LV service totals retroactive

- Identified phantom song inflation in MG and LV Planning Center exports across all 15 historical weeks
- Rule: subtract phantom song planned times (songs listed with planned > 0 but actual ≈ 0s because the bundle timer was run, not individual song timers). Reverse case: subtract bundle planned time when songs ran individually (LV Mar 22, Mar 29).
- Applied correction retroactively to all 15 weeks of MG and LV data in `data.js`
- MG service totals unlocked for 12/15 weeks (3 remain null: Mar 15 unusable, Mar 29 partial data, Apr 19 9am unusable); LV service totals unlocked for all 15 weeks
- Updated `SERVICE_TOTAL_PLANNED`, `SERVICE_TOTAL`, `SERVICE_TOTAL_AVGS`, `TABLE_DATA` tot/pt fields, and all inline comments in data.js
- Pushed to GitHub; dashboard now shows MG and LV service-total columns with corrected variance
- LV avg9: −51s → +228s (corrected from inflated plans). MG avg9: 328s → 301s; avg11: 225s → 220s.
- Pages updated: [[service-times-tracking]], [[log]]

---

## [2026-05-18] ingest | Attendance Report — Updated through May 17, 2026

- Ingested `2026 Attendance Report May 18th.xlsx`; updated coverage from May 10 to May 17
- May 17 (What About #4): 3,839 total (+75 vs. 2025); SLP 2,225 | MG 420 | ELK 422 | LV 198 | Online 574
- Lowest non-anomaly total since Feb 22 (3,804); consistent with Q&A sermon format and no special event
- Extraction required formula evaluation (openpyxl data_only=False); campus sub-columns contained inline arithmetic formulas (e.g. `=178+71`) rather than hardcoded values
- Pages updated: [[attendance-report-2026]], [[index]], [[log]]

---

## [2026-05-18] ingest | Service Times — May 17, 2026

- Ingested service timing PDFs for all 4 campuses (ELK, LV, MG, SLP) from May 17, 2026
- What About...#4 (Holy Spirit); standard week, no moment flags
- Key findings: Pastor Nate messages ran 46:05/44:46 at SLP (longest Q&A series messages in dataset; more standard-series length); LV close worship timer pattern resolved (1:16 after 3 consecutive sub-30s weeks); SLP 9am Live-section timer issue resolved; MG posted lowest non-moment mid-service readings in dataset (+0:27/+0:58)
- LV announcements spiked to 5:48 (+3:48) on 4-item week; SLP 11am Here As In Heaven 9:48 (+5:48) extended worship response; MG 11am bumper timer bleed (38:00)
- data.js updated, pushed to GitHub; dashboard extended to 15 weeks
- Pages created: [[service-times-2026-05-17]]
- Pages updated: [[service-times-tracking]], [[index]], [[log]]

## [2026-05-13] ingest | Staff Chapel — May 12, 2026

- Ingested partial RTF transcript from Staff Chapel held May 12, 2026
- Transcript severely incomplete: only timestamps 12:31–14:04 and 2:06:30–2:13:43 of a 2+ hour chapel captured; middle 2 hours entirely missing
- "Josh Patterson" in transcript is the recording device name, not a speaker; no statements are attributable to individuals
- Key finding: Sage Benkin hired as new Maple Grove worship leader; announced at chapel with her present
- Caleb and Jess Ballew recognized for serving as interim MG worship leads since January 2026 on top of their regular roles
- Closing prayer themes: Mission 52, prodigals returning, vision casting, Team Emmanuel Conference (Aug 15), leadership pipeline
- Pages created: [[staff-chapel-05-12]], [[sage-benkin]], [[caleb-ballew]], [[jessica-ballew]]
- Pages updated: [[index]]

---

## [2026-05-11] synthesis | Matt Nimmo — Leadership Profile

- Drew from close reading of 10 transcripts (Apr–May 2026): comms offsite, team meeting, vendor consultations, director syncs, creative meetings, weekend planning
- Key framing: Matt stepped into Creative Director 8 weeks ago alongside JC; prior role was Worship Director (5 years); 17-year ECC tenure
- Core patterns identified: insider/guest identity tension; bilateral protection reflex; internal decisiveness vs. external tentativeness; speed from vision to structure; humor as social management
- New context reframes several patterns — systems-first instinct as smart adaptation to unfamiliar domains; "less is more" camera philosophy as native worship knowledge; role-newcomer framing as temporary orientation, not permanent character
- Growth edges named: claiming worship-director authority in the creative chair; starting with the position not the question; surfacing tension rather than absorbing it; letting story land before it becomes structure; developing a distinctive point of view
- Pages created: [[matt-nimmo-leadership-profile]]
- Pages updated: [[index]]

---

## [2026-05-11] maintenance | Lint pass

- Fixed: director-sync-05-11 TLDR and body — baby dedication governance corrected (October stays centralized; Nathan Grams objected)
- Fixed: recurring-feedback-patterns Pattern 6 — narrowed resolution claim to match actual decision
- Fixed: director-sync-05-11 broken wikilink `[[weekend-planning-05-11]]` → [[weekly-planning-05-11]]
- Fixed: deleted duplicate wiki/concepts/holy-spirit-night.md (synthesis version is canonical)
- Fixed: moved guest-speaker-protocol from Synthesis to Concepts in index.md
- Added: Interactive HTML Tools section to index.md with all 3 HTML files, descriptions, and connected wiki pages
- Updated: overview.md — date, active builds (playbook refresh, 180 pipeline, MG Resi resolved), key open questions (baby ded governance, GDOP, calendar stacking, LV data integrity), active synthesis pages
- Pages updated: [[director-sync-05-11]], [[recurring-feedback-patterns]], [[index]], [[overview]]

---

## [2026-05-11] ingest | Creative Department Weekly Meeting

- Source: 2026-05-11 Creative Department Weekly Meeting transcript (397 lines)
- Key extractions: camera philosophy settled (less is more during message; connection shots during response); production/worship playbook refresh called by JC — deadline TEC Aug 16; Eagle Brook site visit planned; Dante 8-channel limit documented (expandable to 16 via Resi SDI); LED walls capital case articulated; 180 Stages video ready to deploy; website events consolidation via CCB; Hispanic service logistics
- Pastor Nate joined mid-meeting; weighed in on multisite camera psychology and dream to preach from a location campus
- Pages created: [[creative-dept-weekly-05-11]]
- Pages updated: [[index]]

---

## [2026-05-11] synthesis | Recurring Feedback Patterns — Deeper Connections

- Cross-referenced weekend planning notes + meeting transcripts + service times data + attendance report
- Added 9 new connections (section "Deeper Connections Across Sources") not in the original 12-pattern analysis
- Key finds: wrong-video incident = 2 distinct failure modes; Mother's Day commitment count reveals guest-design gap; Jodi Ruch preaching short explains "tight execution" credit; stalling root cause is measurable (message length vs plan); LV 08:45am affects data integrity; fall 2026 risk window is denser than labeled
- Pages updated: [[recurring-feedback-patterns]]

---

## [2026-05-11] synthesis | Recurring Feedback Patterns

- Analyzed 18 months of Weekend Planning Meeting debriefs against master calendar
- Identified 12 distinct recurring patterns; cross-referenced seasonal calendar risk windows
- MG Resi/Internet marked resolved (confirmed by Matt Nimmo, May 2026)
- Two patterns partially resolved: child dedication form (moving to locations), scripts folder (Matt, in progress)
- Highest-risk calendar window identified: Oct–Nov KB/Miracle Offering season (4 overlapping patterns)
- Pages created: [[recurring-feedback-patterns]]
- Pages updated: [[weekend-planning-notes]] (MG Resi resolution note), [[index]]

---

## [2026-05-11] ingest | Weekend Planning Notes (Living Document)

- Ingested Weekend Planning Meeting.docx — the team's living notes document spanning Dec 2024 through May 11, 2026 (70+ meetings, ~14,700 lines)
- Document ends with the origin story: Slack submissions from JC, Bryan, Matt, Stefan, and James proposing the meeting format; Stefan's 4-question structure was adopted
- Key extractions: 14-series sermon arc, Sunday standards established Apr 2025 (sound/lighting/haze/dress), 18-month pattern of recurring production issues (MG internet, PCO timers, late notes, lobby TVs, camera shots)
- Noted overlap with transcript-based pages: [[weekend-planning-05-04]] and [[weekly-planning-05-11]] — transcript pages are richer on dialogue; this doc is richer on service structure
- Pages created: [[weekend-planning-notes]]
- Pages updated: [[index]]

---

## [2026-05-11] ingest | Director Sync, Weekly Planning, Attendance Report

- Ingested three sources: 05-11 Director Sync transcript, 05-11 Weekly Planning Meeting transcript, 2026 Attendance Report CSV
- Pages created: [[director-sync-05-11]], [[weekly-planning-05-11]], [[attendance-report-2026]], [[holy-spirit-night]] (was listed in index but file was missing — now created with confirmed May 31 details)
- Key signals from Director Sync: scripts folder in service prep established (Normal Sundays / Unique Sundays / Events); MG and ELK missing app Location Events tab (CCB calendar fix needed); baby dedication form returning to location management after Mother's Day central-management failure; broadcast camera feedback consolidated — background consistency is the #1 multisite complaint; comms strategy shifting from bulletin-board social/web to app + email + platform announcements
- Key signals from Weekly Planning: Mother's Day strong overall — flower bouquet, photo booths, video, offering moment, women's prayer all worked; misses include Gabby backup dropout, SLP lobby noise, PCO countdown miscue, post-service mic left on at MG, and too-heavy event stack (Pulse/NCU Commencement + child dedication + Mother's Day). Child dedication timing discussion — move earlier in service (between songs, like communion) flagged for October experiment. GDOP May 17 format still TBD (Pastor Nate processing). Team Emmanuel Conference RSVP needs website/app page by Sunday.
- Key signals from Attendance Report: Easter 2026 = 6,993 total (+79% vs. Easter 2025 at 3,895) — standout growth signal. Super Sunday 2026 = 4,830. Mother's Day 2026 = 4,294 (flat vs. 2025). Mar 15 anomaly = 2,100 total (851 in-person, likely severe weather). Baseline typical Sundays: 3,800–4,430 total.
- Pages updated: [[index]] (3 new sources + 1 synthesis added; holy-spirit-night entry updated)

---

## [2026-05-10] lint | Post-ingest health check

- Rewrote [[overview]] to reflect May 10 reality — three live workstreams (comms/ClickUp, service times, org operating model); removed stale "Tuesday meeting" and "Foundation ingested" claims; added service-times tracking system to big picture; updated key contacts and open questions
- Fixed self-contradicting sentence in [[2027-churchwide-events-magnet]] TLDR (Mother's Day 5/9/27 verification)
- Deorphaned 9 pages by adding cross-references:
  - [[audrey-johnson]] → [[comms-team]] Key Contacts
  - [[what-the-heck-is-eos]] → [[eos-framework]] Related
  - [[comms-deliverables-may-july-2026]], [[gantt-developer-spec]], [[2027-churchwide-events-magnet]] → [[comms-project-horizon-2026-2027]] Related
  - [[comms-projects-by-category]] → [[communications-capacity-planning]] Related
  - [[creative-weekly-04-15]], [[weekly-meeting-04-29]] → [[creative-team-meeting-05-04]] Related
  - [[social-media-platform-strategy]] → [[social-media-strategy]] Related
  - [[daily-review-2026-05-04]] → [[weekend-planning-05-04]] Related + [[overview]] Active Synthesis
- Verified: 0 missing pages, 0 orphans, all `data.js` arrays index-aligned at 14 weeks
- Flagged (not fixed): MG production reliability (timer-process), LV close worship 3-week pattern, SLP 9am Live-section 2-week pattern, 8 tentative 2027 dates pending Nathan confirmation
- Pages updated: [[overview]], [[2027-churchwide-events-magnet]], [[comms-team]], [[eos-framework]], [[comms-project-horizon-2026-2027]], [[communications-capacity-planning]], [[creative-team-meeting-05-04]], [[social-media-strategy]], [[weekend-planning-05-04]]

---

## [2026-05-10] ingest | Service Times May 10 + 2027 Churchwide Events

- Ingested four May 10 service-times PDFs (ELK, LV, MG, SLP) — Mother's Day, Pastor Jodi Ruch preaching
- Applied Category B moment flag campus-week-wide (Mother's Day / guest host / child dedications per Special Services Reference)
- Key signals surfaced:
  - **Jodi Ruch message cluster:** 27:15–33:37 across all 7 services vs 35–38:00 plan → new emerging signal "guest preacher message-length pattern"
  - **LV close worship sub-30s for 3rd consecutive week** (Mar 8, May 3, May 10) — confirmed timer-process pattern; promoted to emerging signal
  - **SLP 9am Live-section timer issue for 2nd consecutive week** — promoted to emerging signal
  - **MG 11am Closing Prayer 16:40** likely timer leave-on
  - ELK 11am child dedication 7:48; LV unplanned child ded 4:20 (same as Mar 1)
  - SLP 9am Offering 7:20 (ODTFTW total recap) +5:10 over plan
- Ingested **2027 Churchwide Events (Magnet Content)** — Nathan Grams' one-page 2027 calendar; ~30 dated items, 8 tentative; identified Nov 5 Sisterhood + Nov 7 Miracle Offering as a tighter cadence than 2026
- Dashboard `data.js` updated: WEEKS, WEEKS_FULL, DATA, MOMENTS, SERVICE_TOTAL, SERVICE_TOTAL_PLANNED, MSG_DATA, TABLE_DATA (May 10 = moment-flagged → EL_AVGS and SERVICE_TOTAL_AVGS unchanged)
- Pages created: [[service-times-2026-05-10]], [[2027-churchwide-events-magnet]]
- Pages updated: [[service-times-tracking]] (Baseline + Emerging Signals + Related Pages), [[index]], `data.js` (dashboard)
- **TODO:** Copy `data.js` to `emmanuel/data.js` and push to GitHub — `emmanuel/` directory not present on local disk; user to confirm dashboard repo location

---

## [2026-05-07] ingest | Screenshot, Decision Rights, Employee List
- Sources ingested: Screenshot (Slack fall/winter comms thread), Decision Rights.xlsx, EmployeeListExport (4).xlsx
- Pages created: [[slack-fall-winter-comms-05-06]], [[decision-rights]], [[employee-list-2026]], [[audrey-johnson]]
- Pages updated: [[payge-martin]] (role confirmed: HR / Kingdom Builders Coordinator), [[jess-porter]] (title corrected: Location Coordinator), [[sara-wescott]] (official spelling: Westcott; sources updated)
- Key findings: 72-person staff directory captured; two Creative Directors at Central (Matt + Audrey Johnson); prior "Audrey" departure flagged as unresolved; Tanner Taschuk confirmed as 2nd Filmmaker in comms; Miracle Offering = 4-week integrated preaching series (Darin); KB Catalytic fall dates still open

---

## [2026-05-07] maintenance | Correct series graphics package definition
- Removed weekly thumbnail and announcement slide from the standard sermon series graphics package — these are separate deliverables, not part of the package
- Pages updated: [[sermon-series-comms-workflow]], [[comms-work-categories]], [[communications-capacity-planning]], [[clickup-capacity-setup]], [[comms-deliverables-may-july-2026]]

## [2026-05-06] synthesis | Comms deliverables May–July 2026

- Pages created: [[comms-deliverables-may-july-2026]]
- Pages updated: [[comms-team]] (Tanner Taschuk last name confirmed), [[index]]
- Covers: Holy Spirit Night, Kids Camp, 7 Churches of Revelation launch, Baptism, recurring What About... graphics; production due dates + deployment dates; capacity flag for Sara late May; 3 active blockers

---

## [2026-05-06] maintenance | Elevated Nathan Grams meeting notes into operational workflow

- Pages updated: [[sermon-series-comms-workflow]] (announcement cadence section added — 4-week/2-week/Monday email protocol, slot counts, app/website events, platform speakers, testimony flow, baptism CTA, focus protection), [[announcement-cadence]] (cross-reference updated)
- Reason: Matt flagged the Nathan Grams master calendar doc as high-priority; cadence rules are now authoritative in the series workflow, not just filed as a source

---

## [2026-05-06] ingest | Meeting with Nathan Grams — Master Calendar + KB/Miracle Offering chat

- Sources: `Meeting With Nathan - Master Calendar.pdf`, `Screenshot 2026-05-06 at 5.58.37 PM.png`
- Pages created: [[meeting-with-nathan-master-calendar]], [[announcement-cadence]], [[darin-poli]], [[payge-martin]]
- Pages updated: [[nathan-grams]] (reporting line + meeting context), [[180-testimony-videos]] (service flow integration + Kylie action item), [[kylie]] (testimony chase action item), [[index]]
- Key findings: 4-week/2-week announcement cadence documented; comms owns churchwide app events; CCB locally owned; Kylie assigned 6 testimonies (3 stewardship + 3 life change) for rest of 2026 on last week of month; Miracle Offering = 4-week integrated preaching series (Darin Poli); baptism as CTA after big rock reinforced; open decisions: gratitude wall Nov 22, Stages video, broader calendar build

---

## [2026-05-06] ingest | Decision Rights.xlsx — Nathan Grams framework

- Source: `Decision Rights.xlsx`
- Pages created: [[decision-rights-framework]], [[nathan-grams]]
- Pages updated: [[comms-priority-framework]] (cross-reference added), [[index]]
- Key finding: 1–5 scale mapping Location vs. Central decision authority; Level 3 = gray zone requiring ownership conversation; ECC familiar with this framework; potential overlay with P0–P3 priority framework

---

## [2026-05-04] synthesis | Daily review — May 4, 2026

- Pages created: [[daily-review-2026-05-04]]
- Pages updated: [[index]]
- Synthesizes all 4 May 4 meetings into a director-level action digest: per-department this-week tasks, 5 outstanding decisions, longer-term items

---

## [2026-05-04] ingest | 4 meetings — Creative Team, Director Sync, Luke Fredrickson, Weekend Planning

- Sources: 4 transcripts from May 4, 2026 (creative team meeting, director sync, Luke Fredrickson consultation, weekend planning meeting)
- Pages created: [[creative-team-meeting-05-04]], [[director-sync-05-04]], [[luke-fredrickson-05-04]], [[weekend-planning-05-04]], [[luke-fredrickson]], [[guest-speaker-protocol]], [[holy-spirit-night]]
- Pages updated: [[josh-patterson]] (run-through coaching), [[kylie]] (schedule confirmed — Mon/Tue Central, Wed/Thu/Sun LV; active May 5), [[online-broadcast-strategy]] (Tito 5-week loop issue, going-live plan), [[social-media-strategy]] (Luke Fredrickson framework + JC volunteer team direction), [[index]], [[log]]

**Key findings:**

- **Wrong video incident (Brad Rosenberg, May 4):** Five ODTFTW videos in system; team loaded wrong one for message; missed at Thursday content check. Root cause: no explicit labeling of "this is the message video" + team didn't critically watch content. Fix: guest speaker content routes to `message` group email; Thursday must include full sequential content review. Checklist assigned to production.
- **Guest speaker protocol:** Being formalized. Josh Patterson owns the production piece. Key items: call time process (7:45 standard; flex requires Matt+JC decision), what to ask and tell speakers at arrival, video labeling, offering graphic sequencing. Rob Hoskins (Miracle Offering) flagged as a rider-level speaker — needs careful handling.
- **Josh Patterson coaching:** Director-level feedback (Darren) flagged Josh's run-through command presence as less authoritative than Matt's. Matt committed to coaching on communication. Root cause: Josh carries LP technical questions during run-through which fragments his focus.
- **Kylie confirmed:** Active May 5; schedule is Mon/Tue Central, Wed/Thu/Sun Lakeville.
- **Staffing decisions imminent:** Sage (dual role, worship piece), Pastor Brian + JT — Darren described as "a week of decisions."
- **Luke Fredrickson:** External tech/content strategist; met with Matt, JC, Nate. Pitch: build a listening-team model (attend service, capture spirit-led moments, cut and distribute mid-week). Systems integration of content → app → small groups. Exploratory, no formal engagement.
- **Mother's Day (May 11):** Full service plan locked. Jody preaching (~35 min); Nathan + Analia hosting; child dedication after greet and seat; "Take It to Jesus" (4:32 track) response song (sit, not stand); all women invited to altar; Global Day of Prayer graphic needed (Sara). Child dedication sign-up had discoverability failure — fix in progress.
- **Holy Spirit Night:** 6pm; 18–20 min worship; 25-min message; ~45-min altars; kids programming (2nd-5th grade Holy Spirit lesson); cross-location staffing; not live streamed. Announced starting May 17.
- **Pre-roll Tito loop:** 5 consecutive weeks flagged by online attender. Decision: go live for pre-rolls in ~2-3 weeks (Eric returning); drop Tito in interim rather than continue the loop.
- **Whiteboard for platform:** Matt + Josh tasked by Nate to purchase a smaller dedicated whiteboard for stage use.

---

## [2026-05-03] ingest | Service Times — May 3, 2026 (ELK, LV, MG, SLP)
- Sources: ELK Catalyitic May 3 2026.pdf, LV KB Catalyitic May 3 2026.pdf, MG KB Catalyitic May 3 2026.pdf, SLP KB Catalyitic May 3 2026.pdf
- Pages created: [[service-times-2026-05-03]]
- Pages updated: [[service-times-tracking]] (Baseline Observations table, key patterns summary), [[index]], [[log]]
- Data updated: data.js (WEEKS, WEEKS_FULL, DATA, MOMENTS, TABLE_DATA)
- Key findings:
  - **Category B week** (ODTFTW offering + campaign video) — MOMENTS=true all campuses; DATA[] retained
  - **MG close worship: 3:58 (9am) / 3:04 (11am) vs planned 0:45** — worst single-element execution overrun in the full dataset
  - MG mid-service: +3:35/+3:32 — matches Apr 19 peak levels despite different series content
  - SLP tightest of all locations: +0:17/+0:36 mid-service; essentially on plan
  - ELK offering moved to LOCAL (post-message) this week; 11am extended prayer+response accounts for +5:08 total overrun
  - Bumper/message timer swaps at MG 9am and SLP 9am — pattern worth investigating with Production
  - LV close worship 0:07 vs 1:30 planned — probable timer bleed; element excluded from LV element average
  - ODTFTW offering significantly over at LV (+3:16) and ELK (+1:52/+1:44) in LOCAL sections

## [2026-05-03] ingest | Service Times — February 1 – March 8, 2026 (ELK, LV, MG Historical Batch)

- Pages created: [[service-times-2026-02-01]], [[service-times-2026-02-08]], [[service-times-2026-02-15]], [[service-times-2026-02-22]], [[service-times-2026-03-01]], [[service-times-2026-03-08]]
- Pages updated: [[service-times-tracking]] (baseline table extended, per-element averages revised to 12 weeks, trends updated, data quality updated), [[index]]
- Sources: 18 Planning Center timing PDFs — ELK, LV, and MG for each of 6 Sundays (Feb 1–Mar 8, 2026)

**Batch summary:**
- Backfill of 6 weeks of ELK/LV/MG data predating formal multi-campus tracking (which began Mar 15)
- Averages updated from 6-week to 12-week baseline; service counts: ELK = 19, LV = 9, MG = 15, SLP = 10
- Historical data quality caveats documented in each source page; timer bleeds and missing columns are significant in this period

**Key findings from historical batch:**
- MG Close Worship overrun pattern confirmed back to Feb 1 — structural, not recent; promoted to deeper Confirmed Pattern with 13-service history
- ELK Feb 22 Announcements spike (7:04 vs 3:00 plan, +4:04) — largest single-element overrun in full dataset
- LV Announcements average revised sharply upward (+0:29 avg vs prior -0:02) — historical data shows consistent overruns that formal tracking had not yet captured
- MG 11am recording dropped to all-zeros on Mar 1 and Mar 8 — pattern flagged
- LV Mar 8 08:45am is first confirmed full public service at that time — pending campus confirmation
- MG Feb 22 Offering anomaly (+3:07 / +2:52, no known context) — flagged for investigation, excluded from averages

**Moment flags applied:**
- Feb 8: Category A full flag (Super Sunday) — all three campuses excluded from averages
- Feb 15: Category B (Water Baptism Sunday); ELK 9am Offering flagged (M); MG 11am unusable
- Mar 1: Category B (Child Dedication Sunday); LV Child Dedication element flagged (M)
- Communion Sundays (Mar 8 at ELK + LV): post-message response elements flagged (M)

---

## [2026-04-30] synthesis | Social Media Platform Strategy

- Pages created: [[social-media-platform-strategy]]
- Pages updated: [[index]]
- Synthesizes current state (~3–4 posts/week, no strategy) into a two-phase recommendation: Phase 1 targets ~12 posts/week using existing content differently; Phase 2 is the volunteer room model at 25–35 posts/week
- Includes platform purpose map (proposed), Phase 1 mechanics, and 5 open questions for JC/Sara alignment

---

## [2026-04-30] ingest | SLP Historical Service Times — Mar 2025 – Mar 2026 (Aggregate)

- Pages created: [[slp-service-times-historical]]
- Pages updated: [[index]]
- Sources: 57 standalone SLP-only timing PDFs (March 9, 2025 – March 8, 2026); Staff Chapel Mar 10 and blank template Mar 15 excluded
- This completes ingestion of all SLP historical data predating the multi-campus tracking format

**Dataset summary:**
- ~53 usable weekends; 3 services/week (07:40am run-through excluded from analysis)
- Exceptions: Christmas Eve 2025 (3pm/5pm); Super Sunday Feb 8, 2026 (07:25am)
- Full element-by-element mid-service digest: Dec 2025–Mar 2026 (11 weekends)
- Highlight/pattern-level mid-service data: Mar–Nov 2025 (40+ weekends)

**Confirmed data quality exclusions:**
- Apr 13, Aug 31, 2025 11am: all zeros (timer not running)
- Apr 27, 2025 11am: partial (timer stopped after Offering)
- Sep 14, 2025 11am: 4528:29 announcements timer error — column excluded
- Mar 15, 2026: all zeros (blank template)

**Key patterns confirmed across full dataset:**
- 11am always runs longer than 9am (typical gap: 5–10 min)
- Plan consistently optimistic; virtually no standard week at or under plan for both services
- Message is primary overrun driver; PNate typically +5–15 min; worst case Jan 18 (+17–18 min with MLK Moment + KB Video embedded)
- KB 5 Spot has never come in at or under its 5:00 plan; worst case Oct 26 KB Launch (+5:18 at 11am)
- Miracle Offering weeks reliably elevate Offering by +1:30 to +2:00 over standard plan
- Host Pastor 1:00 plan functions as floor; near-weekly overrun

**Series and special moments captured:**
- Mark (Jun–Jul 2025), People Get Ready (Aug–Sep 2025), This Is The Way (Sep–Oct 2025), Tracking The Package (Dec 2025), Anything Is Possible (Jan 2026), Go The Extra Mile (Jan 18–25), unnamed winter series (Feb 15–Mar 15)
- Special flags: Good Friday, Easter, MNTC Sunday, Christmas Eve, Vision Sunday, MLK Weekend, Super Sunday, Child Dedication Sunday, Water Baptism Sundays, Miracle Offering Sundays

---

## [2026-04-30] ingest | Service Times — March 29, April 12, April 19, 2026 (All Locations)

- Pages created: [[service-times-2026-03-29]], [[service-times-2026-04-12]], [[service-times-2026-04-19]]
- Pages updated: [[service-times-tracking]] (averages updated to 6 weeks, trends revised, Special Services calendar updated), [[index]]
- Sources: Elk/LV/MG/SLP timing sheets for March 29, April 12, and April 19, 2026
- Dataset now covers: ELK = 11 services, LV = 6, MG = 9, SLP = 10

**March 29 — Palm Sunday findings:**
- Messages ran UNDER plan at SLP (both services: -2:05 / -0:44) and LV (-4:47) — Palm Sunday content effect
- Extended worship response moments: ELK 09am (8:55), ELK 11am (6:12), SLP 09am (5:37), SLP 11am (7:03) — all flagged (M)
- ELK 11am column truncated in PDF; bottom total (75:04) confirmed; message derived at ~37:13
- MG Col2 (~9am) post-message data incomplete (timer stopped); Col3 (~11am) timer stopped after offering
- MG Hosted Moment notes "Baptism April 12" — advance calendar confirmation
- Mid-service across all locations moderate and clean; Palm Sunday effects are post-message

**April 12 — Water Baptism Sunday findings:**
- Messages returned to over-plan across all locations (Palm Sunday was an anomaly)
- ELK 09am Announcements: 5:52 vs planned 3:00 (+2:52) — largest single announcement overrun in dataset
- SLP 11am: 81:56 total (+11:11) — largest single-service overrun in dataset; message ran 45:35 (+7:35)
- MG column label changed from "07:45am" to "06:45am" for run-through column — cause unknown
- MG 11am ran UNDER plan (74:04 vs 76:34) — first time MG has come in under plan
- MG 09am Worship Bundle: 20:40 vs planned 15:00 (+5:40) — likely Water Baptism ceremony during worship set, flagged (M)
- MG Hosted Moment introduced "Intro Pastor Darin" — new name in dataset
- Post-message response elements elevated at all locations due to Water Baptism Sunday (M)

**April 19 — "What About...#2" findings:**
- **Critical finding: Messages ran near-plan at ELK (38:40/38:39), MG (38:44/38:41), SLP 09am (38:39), LV (39:32).** The What About Q&A series produces dramatically tighter messages than the standard sermon series.
- This revises the earlier "calibration problem" diagnosis: the 38:00 planned time is correct for Q&A format, not for standard series
- SLP 11am message (42:00) broke the Q&A pattern — may be preacher-dependent at that service
- MG mid-service: worst overruns in dataset (+3:25/+3:47) due to compounding — Close Worship (+1:00–+1:36) + Hosted Moment (+1:04–+1:15) + campaign offering (+0:59–+1:09)
- LV Response Song (Dwell): 8:27 vs planned 5:30 (+2:57) — elevated without a calendar flag; watch next Dwell occurrence
- ELK 09am post-message anomaly: Worship Response essentially skipped (0:25), Salvation Response 3:41, Final Prayer 3:57
- SLP introduced two announcement blocks this week (Kids Highlight + Men's/KB Video/Close Out); both ran over plan
- ODTFTW campaign elevated offering at all locations: ELK (+1:24/+0:55), LV (+1:29), MG (+0:59–+1:09)

**Tracking framework updates:**
- REVISED: "Message consistently overruns" → "Message length is series/format-dependent." Q&A series near plan; standard series 42–49 min
- UPDATED per-element averages: ELK mid +0:07 → +0:47; LV mid -0:17 → +0:18; MG mid +0:27 → +1:17; SLP mid +0:27 → +0:36
- PROMOTED to Confirmed: "MG Hosted Moment creeping higher" (now +0:24 avg, accelerating)
- ADDED emerging: MG mid-service compounding overrun; LV offering campaign-dependency pattern; SLP response song calibration; SLP KB Video block overrun
- ADDED to Special Services Reference: Mar 29 (Palm Sunday, Cat B) and Apr 12 (Water Baptism, Cat B)

---

## [2026-04-29] ingest | Service Times — March 15 & March 22, 2026 (All Locations)

- Pages created: [[service-times-2026-03-15]], [[service-times-2026-03-22]]
- Pages updated: [[service-times-tracking]] (averages, trends, data quality), [[index]]
- Sources: Elk/LV/MG/SLP timing sheets for March 15 and March 22, 2026

**March 15 findings:**
- MG data entirely unusable (timer failure + data anomalies)
- LV ran under total planned despite message overrunning +10:33 — mid-service compensated (-3:08 vs plan)
- ELK had only one usable service (11am); ran +2:37 over, message +10:38
- SLP ran +8:28/+8:59 over; primary drivers: message (+10:54/+9:33) and extended Host Pastor welcome for co-preacher week (Pastor Phil, +3:55/+3:20 — flagged as moment)
- Series: #5 — "Pastor Nate & Pastor Phil"

**March 22 findings:**
- ELK 9am Worship Response ran 14:41 (planned 4:00) — extended prayer/altar response, flagged as moment. Without it, 9am would have been ~+3:37
- LV introduced "5 Spot" family spotlight segment (Hetlands family, 5:03) — LV-unique mid-service element adding ~5 min to the block
- MG 7:45am column confirmed as a real public service (63:46 total, complete) — contradicts current framework treating it as run-through. Pending MG campus confirmation
- SLP ran +2:10/+6:13 over; message the primary driver (42:29/48:31 vs planned 38:00)
- No KB Video at SLP this week (present in Mar 15 and Apr 26)
- Series: #6 — "Pastor Nate"

**Tracking framework updates:**
- Promoted to Confirmed: "Message consistently overruns planned 38:00" and "11am messages run 4–8 min longer than 9am"
- Promoted to Confirmed: "MG Close Worship transition consistently overruns" (+1:09 avg across 3 services)
- Closed: "LV Offering outlier" — did not repeat in March weeks; Apr 26 was one-time spike
- Added emerging: MG 7:45am real service, LV 5 Spot structural element, SLP KB presence variation
- Updated all Per-Element Average Overage tables (ELK now 5 services, LV 3, MG 3, SLP 4)
- Flagged Planning Center calibration recommendation: update message planned time from 38:00 to 44:00–45:00

---

## [2026-04-29] maintenance | Service Times Tracking — framework build + language update

- Pages updated: [[service-times-tracking]], [[service-times-2026-04-26]]
- Changes made:
  - All "campus/campuses/Campus" language replaced with "location/locations/Location" across both pages
  - Fixed title typo ("All Locationes" → "All Locations") introduced by replacement cascade
  - Added **Comparison Framework** section: four analysis axes (Element×Time, Location×Time, Element×Location, Service×Service), three time horizons (3mo/6mo/1yr) with action triggers, Moments vs. Trends definition and `(M)` flag convention
  - Added **Per-Element Average Overage** tables for all four locations (mid-service elements, running averages, service counts)
  - Added **Trends** section with Confirmed Patterns / Emerging Signals structure
  - Added **Location Ranking (Quarterly)** table — updated at weeks 13/26/52
  - Added **Planning Center Calibration Log** — tracks when planned times are officially changed
  - Added **Special Services Reference** — 2026 moment-flag calendar (Category A full flags, Category B element flags) cross-referenced against [[emmanuel-master-calendar]] and [[emmanuel-2026-calendar]]
  - Rewrote **Weekly Ingest Process** (7 steps → 10 steps) to implement the full framework: extract, create source page, flag moments against Special Services Reference, use current planned times, exclude run-throughs, flag data quality, update averages, evaluate trends, quarterly synthesis trigger, update index/log
  - Retroactively applied `(M)` moment flags to April 26 source page for Communion block (ELK/SLP/MG) — confirmed against master calendar; mid-service totals unaffected

---

## [2026-04-29] ingest | 4 sources — ClickUp evaluation, website overhaul, weekly meeting, EOS L10 template

- Pages created: [[clickup-evaluation-04-21]], [[website-overhaul-04-29]], [[weekly-meeting-04-29]], [[eos-creative-l10-template]], [[kylie]], [[website-strategy]], [[creative-team-l10]]
- Pages updated: [[clickup-capacity-setup]] (pricing added, Kylie noted), [[comms-team]] (Kylie added as PM), [[eos-framework]] (Creative Team L10 noted), [[index]]
- Key findings:
  - ClickUp chosen as platform; $6,375/yr (10 users, 2-yr contract); decision by end of April
  - Kylie (Creative PM) starts April 30; Tenacity WG hire; Jess Porter mentoring through May
  - Website direction confirmed as external front door; summer 2026 rebuild; vendor eval in progress; CCB integration confirmed
  - ClickUp live in creative team (Sara set up Emmanuel Creative Workspace)
  - Matt out Tuesdays through summer; JC covers
  - EOS Creative Team L10 template drafted by Matt — exploratory, not yet adopted

---

## [2026-04-26] ingest | Service Times — April 26, 2026 (All 4 Campuses)

- Pages created: [[service-times-2026-04-26]], [[service-times-tracking]]
- Pages updated: [[index]]
- Sources: ELK Times, LV Times, MG Times, SLP Times (April 26, 2026)
- Series tracked: "What About...#3"
- Key findings: All complete services (9am/10am/11am) ran 80–83 min vs. 72–81 planned. Mid-service ranged from ~6:16 (SLP 9am) to ~10:13 (LV 10am). Early service logs (7:40–8:45am) are incomplete/unreliable. MG has a duplicate "7:45am" column anomaly needing clarification. LV offering ran 5:31 vs. 3:00 planned — largest single-element overrun. Announcements at ELK are the most variable element (1:33 to 4:21 across services within same Sunday).
- This is the first week of service times tracking in the wiki.

---

## [2026-04-24] ingest | EOS PDF deep review — eos-framework major upgrade

- Pages updated: [[eos-framework]] (major rewrite), [[what-the-heck-is-eos]] (upgraded from minimal to full source)
- New content added: V/TO (8-question framework), Level 10 Meeting full agenda (IDS = 60/90 min), Visionary/Integrator distinction, GWC (Get It/Want It/Capacity to Do It), People Analyzer, Scorecard structure, SMART Rocks mechanics, EOS Organizational Checkup, EOS implementation process flow
- Key insight: Visionary/Integrator distinction maps directly to Nate (Visionary) / Matt+JC (de facto Integrators) — formalizing this would resolve the "inspiration as permission" problem structurally

---

## [2026-04-24] ingest | Dr. Lori Meeting (Apr 21) + EOS Reference PDF

- Pages created: [[dr-lori-meeting-04-21]], [[dr-lori]], [[what-the-heck-is-eos]]
- Pages updated: [[index]]
- Key findings: comms team has no Tenacity WG — Kylie's PM role + EOS structure must compensate; Matt needs "tenacity mode" focus blocks; Nate's inspiration-as-permission dynamic named and owned; Matt/JC need explicit green-light empowerment; Comms Resource Channel revival (Jess Porter) is the brand self-service fix; Sara's merch capped at 1–2/year in June/July; Working Genius + EOS offsite planned for June at North House with Dr. Lori; Matt's frustration = galvanizing; JC = Wonder + Invention confirmed; EOS PDF = general reference, minimal new ECC-specific content

---

## [2026-04-21] ingest | 04-21 Nate/JC/Matt Meeting (Confidential)

- Pages created: [[nate-jc-meeting-04-21-confidential]], [[social-media-strategy]], [[online-broadcast-strategy]]
- Pages updated: [[180-testimony-videos]] (podcast pause → redirect to 180s), [[sara-wescott]] (pending bonus noted), [[jodi-ruch]] (strategic role in online + connections), [[index]]
- Key findings: actual online viewership ~600–700 (not 160–200); One Church Columbus volunteer social media room = model to adopt; podcast pausing in favor of 180s; Dr. NR brand to migrate to Nate's office; Sara bonus confirmed but not yet paid; Bill Titus recommended as advisor; comms priority framework presented and approved by Nate

---

## [2026-04-21] ingest | 04-15 Creative Weekly: Mother's Day, Worship Video, Stage Wrap

- Pages created: [[creative-weekly-04-15]], [[gabby-velez]], [[josh-patterson]]
- Pages updated: [[joncarlos-velez]] (Gabby family note added), [[index]]
- Key findings: Mother's Day plan finalized (Gabby song → music video; two-tier social rollout; photo booth; standalone look); worship night full video releasing Apr 25; stage wrap going black pending Tim's crew availability; camera switchover week of Apr 21; Gabe Hunt new intern under Josh

---

## [2026-04-21] ingest | 04-14 Central Meeting: EOS/Org Pieces

- Pages created: [[central-meeting-04-14]], [[eos-framework]]
- Pages updated: [[communications-capacity-planning]] (85% threshold SMART goal added), [[nate-ruch]] (EOS adoption + key convictions), [[index]]
- Key findings: EOS rollout 3–6 months out; DLT pilot already underway; Matt's SMART goal = reprioritize at 85% capacity (~48 hrs/week); SMART goals roundtable captured across all departments; feedback loop accountability gap is an org-wide pattern

---

## [2026-04-21] ingest | 04-13 Team Meeting: Capacity Issues, Process Breakdowns, Social Media

- Pages created: [[comms-team-meeting-04-13]], [[zac-anderson]], [[comms-intake-process]]
- Pages updated: [[comms-team]] (Zac/Sara wikilinked, absorbed responsibilities section added), [[index]]
- Key findings: process bypass pattern started immediately after Audrey left; Zac named two specific incidents (Keneally podcast, JoviConnector); Sara absorbing app/website/ordering work; social media stuck as bulletin board; Zach Brauer contractor being explored with reservations; Matt/JC now the filter

---

## [2026-04-21] ingest | 04-13 Comms Offsite: Favorite & Vision Projects

- Pages created: [[comms-offsite-04-13]], [[joncarlos-velez]], [[sara-wescott]], [[jess-porter]], [[180-testimony-videos]], [[church-environmental-design]]
- Pages updated: [[index]]
- Key findings: 180 videos = team's unanimous #1 vision item; two-tier format proposed (quick reflex + mini-doc); testimony database + baptism integration ideas surfaced; Sara's porch signage mockup exists; online merch store feasible via Shopify + Letterman

---

## [2026-04-21] synthesis | KB vs. Sunday bumper video time cost comparison

- Pages created: [[kb-vs-sunday-bumper-video-hours]]
- Pages updated: [[index]]
- Finding: original KB videos = same cost as Sunday bumpers (8–12 hrs); re-edits are 1–4 hrs

---

## [2026-04-21] synthesis | Priority framework finalized — Q1–Q5 resolved

- Recorded answers to all five priority questions from Matt + Joncarlos
- Q1: P1 tiebreaker = Sunday-related > growth-driving > external reach (standing rule)
- Q2: Growth outranks member-serving; Baptism and Growth Track always protected at P1
- Q3: No fixed P1 ranking — context-driven; Matt + JC own the call, no escalation needed; Sisterhood not permanently top of P1
- Q4: Late requests → Matt + JC decide stay or outsource; no automatic downgrade
- Q5: No fixed middle tier; production scaling is a valid alternative to outsourcing in heavy seasons
- Pages updated: [[pastor-nate-priority-questions]], [[comms-priority-framework]]

---

## [2026-04-21] maintenance | Recurring task ownership corrections

- Corrected weekly email owner: Sara Wescott → **Zac**
- Corrected Sara Wescott's Sunday commitment: 7 hrs (photo coverage + editing + receiving social content from locations)
- Sara's effective capacity updated: 26 hrs → **19 hrs/week** (same as Tanner + Zac)
- Total team effective capacity updated: 64 hrs → **57 hrs/week**
- Available project capacity updated: ~48.5 hrs → **~41.5 hrs/week**
- Pages updated: [[comms-team]], [[communications-capacity-planning]]

---

## [2026-04-20] synthesis | Comms Projects by Category

- Built category-organized view of all comms projects Apr 2026–Apr 2027 for priority-setting meeting with [[nate-ruch]]
- 8 categories: Sermon Series, Major Sundays & Campaigns, KB Events, Major Non-Sunday Events, Connect Groups, Announcement-Level Events, Print & Booklets, Recurring Baseline
- Flags 3 unresolved/needs-scoping items: Summer Book Study, ELC Launch Day, Dr. Nate Ruch book campaign
- Pages created: [[comms-projects-by-category]]
- Pages updated: [[index]]

---

## [2026-04-20] maintenance | Team composition correction

- Corrected team composition: 3-person internal team (Tanner + Zac filmmakers, Sara designer); no internal photographer
- "Switcher" role renamed to Zac (Filmmaker) — second filmmaker, not a switcher role
- Photography is contracted externally — removed from all capacity models
- Effective team capacity updated: 78 hrs/week raw → 64 hrs/week effective (after Sunday deductions)
- Weekly recurring baseline updated: 23.5 hrs → 15.5 hrs/week (photo coverage/editing removed)
- Available project capacity updated: ~80 hrs → ~48.5 hrs/week
- Pages updated: [[comms-team]], [[communications-capacity-planning]], [[comms-team-deliverables-with-hours]], [[comms-weekly-capacity-hours-2026-2027]] (HTML — Photographer column removed, Switcher renamed Zac)

---

## [2026-04-20] synthesis | Weekly capacity hours model

- Built week-by-week hour model for all 52 weeks (Apr 2026–Apr 2027) per team member
- Assigned deliverable hours from [[comms-team-deliverables-with-hours]] to each week based on project timelines and lead-time logic
- Effective capacity: Sara 26 hrs (9 recurring, 17 project), Tanner 19 hrs (7.5 recurring, 11.5 project), Switcher 19 hrs (~2 recurring), Photographer 26 hrs (8 recurring, 18 project)
- Critical over-capacity weeks confirmed: Aug 9, Aug 15, Nov 8, Nov 15, Jan 11 (Sara consistently >26 hrs); Oct 4, Nov 8 (Tanner >19 hrs)
- Color-coded utilization bands: ≤60% green, 61–80% yellow, 81–95% orange, >95% red
- Department support hours (ELC, KB, Dr. NR, Worship, SHL Podcast) NOT yet included — actual load will be higher
- Pages created: [[comms-weekly-capacity-hours-2026-2027]] (HTML)
- Pages updated: [[index]]

---

## [2026-04-20] ingest | Emmanuel 2026 Calendar (print asset)

- Ingested `raw/assets/Screenshot 2026-04-13 at 3.32.09 PM.png` — official printed 2026 Emmanuel calendar with exact dates for all 30+ major events Jan–Dec 2026
- **Open Item resolved:** Worship Night confirmed as October 4 (was Open Item #5 in comms-project-horizon)
- **Miracle Offering confirmed:** November 11 (was estimated ~Nov 8)
- **Fall Kickoff confirmed:** September 13; CG series launch projected ~Sep 20
- **New events surfaced:** One Day to Feed the World (May 3), Avalanche Youth Winter Camp (Feb 20–21), ELC Welcome Week (Aug 23), Soul Care Conference (Mar 26–28) — comms scopes TBD
- Pages created: [[emmanuel-2026-calendar]]
- Pages updated: [[comms-project-horizon-2026-2027]] (confirmed 8 dates, resolved Open Item #5, added Child Ded/Mother's Day co-date, One Day to Feed the World, Youth Summer Camp Jul 20–24, MYC dates), [[index]]

---

## [2026-04-20] maintenance | Department hours + Tanner Sunday commitment

- Mapped department-specific deliverables (KB, Dr. NR, Worship, SHL Podcast) to nearest equivalent in core hours list — no longer showing "—"
- Added Tanner (Filmmaker) by name to [[comms-team]]; confirmed 7 hrs/Sunday → 19 hrs/week effective capacity
- Updated [[communications-capacity-planning]] with Tanner's confirmed hours; switcher and photographer Sunday deductions still TBD
- Pages updated: [[comms-team-deliverables-with-hours]], [[comms-team]], [[communications-capacity-planning]]

---

## [2026-04-20] ingest | Comms Team Deliverables with Hours

- Ingested "Comms Team Deliverables with Hours.xlsx" — same deliverable catalog as original but with Hours Avg column now populated
- Key finding: **time estimates now exist for ~55 of 74 core deliverables** — resolves the primary blocker for ClickUp capacity planning
- Weekly recurring baseline calculated: ~23.5 hrs/week consumed before any project work begins
- Per-series launch package calculated: ~39 hrs per series × 8–9 series/year = 312–351 hrs/year (~6–7 hrs/week annualized)
- Remaining gaps: department-specific deliverables (KB, Dr. NR, Worship, SHL Podcast) have no hours estimates; Turn Around Time column still blank
- Pages created: [[comms-team-deliverables-with-hours]]
- Pages updated: [[comms-team-deliverables]] (flagged as superseded, linked to new source), [[communications-capacity-planning]] (marked time-estimates blocker ✅, added weekly recurring baseline table, per-series package table, updated open items), [[index]]

---

## [2026-04-20] synthesis | Comms Project Horizon update

- Updated [[comms-project-horizon-2026-2027]] with two key changes from ingested sources
- Miracle Offering (November): expanded from 3 deliverables to 12 — promo video, giving envelopes (print), slides, lead-up promo slide, per-location project/goal/YTD graphics, app/web features, 2 emails; flagged data dependency on KB team and print lead time for envelopes
- KB Launch (January): added full scope — booklet final (due first week of Jan), engagement cards, launch video, team launch slides; noted booklet design must begin in December alongside annual report
- Open Items: marked ClickUp architecture as resolved (Custom Fields, Views, Process Library, Status guidance); added 2 new open items (Miracle Offering data handoff deadline; giving envelope print lead time)
- Risk summary: November upgraded from "overcapacity" to "worse than previously scoped"
- Pages updated: [[comms-project-horizon-2026-2027]]

---

## [2026-04-20] ingest | ZenPilot ClickUp Guide + KB Comm Deliverables

- Ingested "How to Use ClickUp 2024.pdf" (ZenPilot, 56 pages) — ClickUp's highest-rated partner guide
- Key additions: Process Library Space concept, 3-field Custom Field starting set (Role, Work Category, Task Type), 4 must-have views (My Tasks, Assignee, Date Remap, Workload), Status simplicity rule (To-Do/Complete only), ClickUp Champion role definition
- Ingested "KB Comm Deliverables Q1 2026 Review.docx" — KB-specific annual deliverables list
- Key finding: Miracle Offering has 12+ distinct deliverables (promo video, envelopes, per-location goal slides, year-to-date slide, app/web features, 2 emails) — far more than the "engagement card" listed in comm-requests. Confirms November as highest-risk month.
- Pages created: [[clickup-zenpilot-guide]], [[kb-comm-deliverables-q1-2026-review]]
- Pages updated: [[clickup-capacity-setup]] (Process Library, Custom Fields, 4 views, Status guidance, ClickUp Champion), [[comm-requests]] (added KB Launch + Miracle Offering cross-refs), [[index]]

---

## [2026-04-20] synthesis | Comms Work Categories

- Defined 5 categories for tagging all comms deliverables: Sunday Experience, Invitational Sunday, Ministry Event, Recurring Content, Department Support
- Validated against best practices for small in-house teams (3–5 categories max)
- Invitational Sunday replaces "Growth Campaign" — defined by invite-card test; Easter, Christmas, Super Sunday, Fall Kickoff
- 21 Days of Prayer & Fasting moved to Ministry Event (not outward-facing growth)
- Includes ClickUp tagging guidance and category-to-priority mapping
- Pages created: [[comms-work-categories]]
- Pages updated: [[index]]

---

## [2026-04-19] synthesis | Priority Framework + Pastor Nate Meeting Prep

- Built P0–P3 comms priority framework through structured discovery session
- Key decisions: P0 = Sunday-service events only; Sisterhood moved to top of P1 (non-Sunday); P3 = empower and redirect, not a comms item
- Held 3 questions for Pastor Nate that require his authority to resolve
- Pages created: [[comms-priority-framework]], [[pastor-nate-priority-questions]]
- Pages updated: [[index]]

---

## [2026-04-19] synthesis | Comms Project Horizon 2026–2027

- Cross-referenced [[emmanuel-master-calendar]], [[comm-requests]], and 2024–2025 patterns to project all comms projects Apr 2026–Apr 2027
- Confirmed: no Sisterhood Spring 2026; Holy Spirit Night = central announcement slide only (not full package)
- Added central announcement policy: all church-wide announcements receive graphic support
- Added Sara Wescott (Graphic Designer) by name to [[comms-team]] roster
- Added Emmanuel MN social posts (2–3/week, Sara Wescott confirmation pending) as recurring weekly commitment
- Added Dr. Nate Ruch book campaign as separate TBD social need
- Noted upcoming workload upload and capacity-at-a-glance sheet as next milestone
- Pages created: [[comms-project-horizon-2026-2027]]
- Pages updated: [[comms-team]], [[communications-capacity-planning]], [[index]]

---

## [2026-04-19] lint | Health check pass

- Fixed data errors: Video deliverable count corrected 9→11; Web count corrected 4→3 (verified against source Excel)
- Removed stale "Tuesday meeting" date references from [[communications-capacity-planning]] and [[clickup-capacity-setup]]
- Resolved orphan pages: added [[clickup-capacity-setup]] to [[communications-capacity-planning]] Related Pages; added [[emmanuel-christian-center]] wikilink to [[comms-team]] and [[overview]]
- Added [[nate-ruch]] and [[jodi-ruch]] wikilinks to [[comms-team]], [[emmanuel-christian-center]], [[clickup-capacity-setup]], [[communications-capacity-planning]]
- Pages created: [[nate-ruch]], [[jodi-ruch]]
- Pages updated: [[comms-team-deliverables]], [[communications-capacity-planning]], [[clickup-capacity-setup]], [[comms-team]], [[emmanuel-christian-center]], [[overview]], [[index]]

---

## [2026-04-19] ingest | Emmanuel Website + ClickUp Documentation

- Crawled emmanuelcc.org (homepage, connect, give, sisterhood pages)
- Researched ClickUp workload/capacity documentation
- Pages created: [[emmanuel-christian-center]], [[clickup-capacity-setup]]
- Pages updated: [[index]]
- Key findings:
  - ECC has 4 physical campuses (SLP, Maple Grove, Elk River, Lakeville) + Emmanuel Online
  - Mission: "For everyone to know Jesus, grow together and live with purpose."
  - Full ministry map documented: KB, Sisterhood, ELC, SHL Podcast, Worship, NextGen, Growth Track, Team Emmanuel
  - ClickUp Workload view confirmed as right tool; requires time estimates + assignees on every task
  - ClickUp does not support recurring project templates — use clone-from-master approach for sermon series
  - Recommended ClickUp architecture documented with folder structure, template tasks, custom fields, build sequence

---

## [2026-04-19] ingest | Comms Capacity Planning — Three Sources

- Ingested three source files added to `raw/sources/` by Matt Nimmo
- Context: project to build a ClickUp capacity view for the Emmanuel comms team
- Pages created: [[comm-requests]], [[comms-team-deliverables]], [[emmanuel-master-calendar]], [[comms-team]], [[communications-capacity-planning]], [[sermon-series-comms-workflow]]
- Pages created (meta): [[index]], [[overview]], [[log]]
- Key findings:
  - 34 annual events/campaigns in Comm Requests; no time estimates exist
  - 76 deliverable types cataloged; Lead Time + Turn Around Time fields are blank
  - Master Calendar reveals 8–9 sermon series/year; Fall (Sep–Nov) is peak load period
  - Team is 4 people × 26 hrs/week; Sunday commitments reduce effective production hours
  - Two blockers before ClickUp build: (1) time estimates per deliverable, (2) priority tiers from Pastor Nate
- Priority meeting with Pastor Nate Ruch scheduled for Tuesday


---

## [2026-06-04] ingest | TEC Planning Meeting + Leadership Levels Playbook

- Ingested two new raw sources: June 1 TEC planning meeting transcript + Team Emmanuel Playbook - Leadership Levels RTF
- Note: Management Training Notes and Gravity Engine Meeting were already ingested (commit eba47d7); ingest skill queue was stale — updated implicitly
- Note: Weekend Planning Meeting.docx is a running notes file, content already captured in [[weekend-planning-notes]]
- Pages created: [[tec-planning-meeting-06-01]], [[leadership-levels-playbook]], [[leadership-pipeline]]
- Pages updated: [[team-emmanuel-conference]] (expanded from stub to full), [[index]]
- Key findings:
  - TEC 2026 (Aug 15) planning kicked off June 1, 12 weeks out; format mirrors 2025 with one major addition
  - Nathan Grams introducing Essential Leadership Track — 4-tier pipeline (Team Member → Leader → Coach → Coordinator) as TEC afternoon breakout content; first public introduction of this framework
  - 77 pre-registrants as of June 1; TEC Champions meeting June 2
  - JC + Matt Nimmo lead worship/production for central sessions; opening worship 10–15 min then Nate speaks
  - Open gaps: decor lead (Camry floated), young adult attendance (2025 problem — Micah/Josiah to champion), communication timeline still needed
  - Logistics lessons from 2025 documented: Chick-fil-A 2-week deadline, lunch distribution, directional signage, booklet format
