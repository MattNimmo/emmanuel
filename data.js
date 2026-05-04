// ── ECC Service Times — Weekly Data ─────────────────────────────────────────
// This file is the only thing that changes on a weekly ingest.
// HTML (ecc-times.html) is a static template — do not edit it for data updates.
//
// WEEKLY INGEST CHECKLIST:
//   1. Append new week label to WEEKS and WEEKS_FULL
//   2. Append 9am and 11am variance (seconds) to DATA[loc]['9am'] and ['11am']
//      - null = no data / timer error / unusable
//   3. Append moment flag to MOMENTS[loc] (true = Category A/B calendar event)
//   4. Update EL_AVGS[loc].midTotal and element val fields (seconds, from wiki)
//   5. Push new TABLE_DATA rows (one per campus per week)

const WEEKS      = ['Feb 1','Feb 8','Feb 15','Feb 22','Mar 1','Mar 8','Mar 15','Mar 22','Mar 29','Apr 12','Apr 19','Apr 26','May 3'];
const WEEKS_FULL = ['2026-02-01','2026-02-08','2026-02-15','2026-02-22','2026-03-01','2026-03-08','2026-03-15','2026-03-22','2026-03-29','2026-04-12','2026-04-19','2026-04-26','2026-05-03'];

// Mid-service variance in seconds per service. null = no data / unusable.
// [9am, 11am] per week, aligned to WEEKS index.
const DATA = {
  ELK: {
    // Feb1: 9am timer bleed → null; 11am clean. Feb8: Super Sunday. Feb15: WB Sunday. Feb22–Mar8: standard/communion.
    '9am':  [null,  76,  235,  135,   -2,   13,  null,  -71,   18,  182,  118,   41,   82],
    '11am': [  95, 175,   32,  131,  176,    1,   -71,   78,    6,   57,  101,   56,  157]
  },
  LV: {
    // Feb1: timer bleed → null. Feb8: Super Sunday unreliable → null. Feb15: timer errors → null. Feb22+: usable.
    '9am':  [null, null, null,   42,  332,  -15,  -188,  -56,   26,   32,  101,  193,  -23],
    '11am': [null, null, null, null, null, null,  null, null, null, null, null, null, null]
  },
  MG: {
    // Feb1: both services usable. Feb8: 9am moment, 11am timer error. Feb15: 9am moment, 11am unusable. Feb22+.
    '9am':  [  88,  52,  163,  271,  142,  143,  null,  -69,   51,  107,  227,  -25,  215],
    '11am': [ 146, null, null,  372, null, null,  null,   52,  -21,   47,  205,   54,  212]
  },
  SLP: {
    '9am':  [ 51,  202,  153,  113,   52,   58,   42,   24,   26,    3,   64,   -9,   17],
    '11am': [ 43,  206,  170,  168,  146,   73,   42,   42,   46,   27,   86,   50,   36]
  }
};

// Moment flags — true = calendar moment (Category A/B) or data too unreliable to trend.
// Moment weeks shown as hollow points in the trend chart; excluded from averages.
const MOMENTS = {
  ELK: [false,  true,  true, false,  true, false,  false,  true,  true,  true, false, false,  true],
  LV:  [false,  true,  true, false,  true, false,  false, false,  true,  true, false, false,  true],
  MG:  [false,  true,  true, false,  true, false,  false, false,  true,  true, false, false,  true],
  SLP: [false,  true,  true, false,  true, false,   true, false,  true,  true, false, false,  true]
};

// Per-element averages (seconds). Update midTotal and element val fields each ingest.
// Color and bar width derive automatically — do not edit elColor() or barPct() for routine updates.
// val: null = no meaningful average (variable or too few data points).
// barWidth: overrides auto-calculated bar width for special cases.
// dimBar: renders the bar at 40% opacity (used for "variable" elements).
const EL_AVGS = {
  ELK: {
    label: 'ELK · Elk River', color: 'var(--elk)', midTotal: 58,
    elements: [
      { name: 'Close Worship',  val:  14 },
      { name: 'Meet & Greet',   val:  17 },
      { name: 'Announcements',  val:  52 },
      { name: 'Campaign Video', val: null, display: '≈0:00', barWidth: 1 },
      { name: 'Offering',       val: -26 }
    ]
  },
  LV: {
    label: 'LV · Lakeville', color: 'var(--lv)', midTotal: 19,
    elements: [
      { name: 'Close Worship',    val: -29 },
      { name: 'Meet & Greet',     val:  -3 },
      { name: 'Announcements',    val:  29 },
      { name: '5 Spot (LV-only)', val:   3 },
      { name: 'Offering',         val:  32 }
    ]
  },
  MG: {
    label: 'MG · Maple Grove', color: 'var(--mg)', midTotal: 124,
    elements: [
      { name: 'Close Worship',  val:  63 },
      { name: 'Meet & Greet',   val:   6 },
      { name: 'Hosted Moment',  val:  31 },
      { name: 'Campaign Video', val:  -5 },
      { name: 'Offering',       val:  33 }
    ]
  },
  SLP: {
    label: 'SLP · Spring Lake Park', color: 'var(--slp)', midTotal: 36,
    elements: [
      { name: 'Host Pastor / NG',  val:   9 },
      { name: 'Greet & Seat',      val:  -5 },
      { name: 'Announcements',     val: null, display: 'variable', barWidth: 30, dimBar: true },
      { name: 'KB Video / Moment', val:  15 },
      { name: 'Offering',          val:  21 }
    ]
  }
};

// Weekly table rows. Append one block of 4 rows (one per campus) each ingest.
// m9/m11: display string for mid-service actual (MM:SS). p9/p11: variance string (+M:SS or −M:SS).
// Use '—' for missing/unusable data. moment:true highlights the row and adds the ★ chip.
const TABLE_DATA = [
  { date:'Feb 1',  loc:'ELK', m9:'—',     p9:'—',     m11:'11:04',p11:'+1:35', notes:'KB Launch Video; 9am timer bleed excluded', moment:false },
  { date:'Feb 1',  loc:'LV',  m9:'—',     p9:'—',     m11:'—',    p11:'—',    notes:'10am timer bleed — data excluded', moment:false },
  { date:'Feb 1',  loc:'MG',  m9:'11:03', p9:'+1:28', m11:'12:01',p11:'+2:26', notes:'KB Launch Video in plan; Close Worship over', moment:false },
  { date:'Feb 1',  loc:'SLP', m9:'8:46',  p9:'+0:51', m11:'8:38', p11:'+0:43', notes:'KB Video on plan', moment:false },
  { date:'Feb 8',  loc:'ELK', m9:'19:36', p9:'+1:16', m11:'21:15',p11:'+2:55', notes:'Super Sunday — interview + two-part stream (★)', moment:true },
  { date:'Feb 8',  loc:'LV',  m9:'—',     p9:'—',     m11:'—',    p11:'—',    notes:'Super Sunday — data unreliable (★)', moment:true },
  { date:'Feb 8',  loc:'MG',  m9:'19:27', p9:'+0:52', m11:'—',    p11:'—',    notes:'Super Sunday; 11am timer error (★)', moment:true },
  { date:'Feb 8',  loc:'SLP', m9:'19:11', p9:'+3:22', m11:'19:15',p11:'+3:26', notes:'Super Sunday — Football Coach interview (★)', moment:true },
  { date:'Feb 15', loc:'ELK', m9:'11:15', p9:'+3:55', m11:'7:52', p11:'+0:32', notes:'Water Baptism; 9am Offering flagged (★)', moment:true },
  { date:'Feb 15', loc:'LV',  m9:'—',     p9:'—',     m11:'—',    p11:'—',    notes:'Water Baptism; Close Worship + G&S timer errors (★)', moment:true },
  { date:'Feb 15', loc:'MG',  m9:'9:13',  p9:'+2:43', m11:'—',    p11:'—',    notes:'Water Baptism; 11am timer error 181:10 (★)', moment:true },
  { date:'Feb 15', loc:'SLP', m9:'7:23',  p9:'+2:33', m11:'7:40', p11:'+2:50', notes:'Water Baptism Sunday (★)', moment:true },
  { date:'Feb 22', loc:'ELK', m9:'9:15',  p9:'+2:15', m11:'9:11', p11:'+2:11', notes:'9am Announce spike 7:04 — largest in dataset', moment:false },
  { date:'Feb 22', loc:'LV',  m9:'7:42',  p9:'+0:42', m11:'—',    p11:'—',    notes:'Announce doubled (+2:00)', moment:false },
  { date:'Feb 22', loc:'MG',  m9:'15:01', p9:'+4:31', m11:'16:42',p11:'+6:12', notes:'Offering anomaly (+3:07/+2:52)', moment:false },
  { date:'Feb 22', loc:'SLP', m9:'7:58',  p9:'+1:53', m11:'8:53', p11:'+2:48', notes:'11am announce spike (5:05)', moment:false },
  { date:'Mar 1',  loc:'ELK', m9:'6:58',  p9:'−0:02', m11:'9:56', p11:'+2:56', notes:'Child Dedication; 11am Announce+Offering both over (★)', moment:true },
  { date:'Mar 1',  loc:'LV',  m9:'12:52', p9:'+5:32', m11:'—',    p11:'—',    notes:'Child Ded unplanned 5:29; excl. Ded: +0:03 (★)', moment:true },
  { date:'Mar 1',  loc:'MG',  m9:'12:07', p9:'+2:22', m11:'—',    p11:'—',    notes:'Meet & Greet anomaly (5:10); 11am not recorded (★)', moment:true },
  { date:'Mar 1',  loc:'SLP', m9:'9:27',  p9:'+0:52', m11:'11:01',p11:'+2:26', notes:'Child Dedications + Susie Larson (★)', moment:true },
  { date:'Mar 8',  loc:'ELK', m9:'7:13',  p9:'+0:13', m11:'7:01', p11:'+0:01', notes:'Tightest ELK mid in dataset — Communion Sunday', moment:false },
  { date:'Mar 8',  loc:'LV',  m9:'7:05',  p9:'−0:15', m11:'—',    p11:'—',    notes:'Timer issues on Close Worship + Meet & Greet', moment:false },
  { date:'Mar 8',  loc:'MG',  m9:'8:53',  p9:'+2:23', m11:'—',    p11:'—',    notes:'Close Worship +2:53; 11am not recorded', moment:false },
  { date:'Mar 8',  loc:'SLP', m9:'5:48',  p9:'+0:58', m11:'6:03', p11:'+1:13', notes:'Communion + Dwell in worship bundle', moment:false },
  { date:'Mar 15', loc:'ELK', m9:'5:49',  p9:'-1:11', m11:'—',    p11:'—',    notes:'11am only tracked', moment:false },
  { date:'Mar 15', loc:'LV',  m9:'3:52',  p9:'-3:08', m11:'—',    p11:'—',    notes:'', moment:false },
  { date:'Mar 15', loc:'MG',  m9:'—',     p9:'—',     m11:'—',    p11:'—',    notes:'Data unusable', moment:false },
  { date:'Mar 15', loc:'SLP', m9:'5:29',  p9:'+0:42', m11:'5:29', p11:'+0:42',notes:'Host Pastor moment (M)', moment:true },
  { date:'Mar 22', loc:'ELK', m9:'5:49',  p9:'-1:11', m11:'8:18', p11:'+1:18',notes:'ELK 9am worship response (M)', moment:true },
  { date:'Mar 22', loc:'LV',  m9:'11:24', p9:'-0:56', m11:'—',    p11:'—',    notes:'Incl. 5 Spot', moment:false },
  { date:'Mar 22', loc:'MG',  m9:'5:21',  p9:'-1:09', m11:'7:22', p11:'+0:52',notes:'7:45am service', moment:false },
  { date:'Mar 22', loc:'SLP', m9:'5:39',  p9:'+0:24', m11:'5:57', p11:'+0:42',notes:'', moment:false },
  { date:'Mar 29', loc:'ELK', m9:'7:18',  p9:'+0:18', m11:'~7:06',p11:'~+0:06',notes:'Palm Sunday (M)', moment:true },
  { date:'Mar 29', loc:'LV',  m9:'7:46',  p9:'+0:26', m11:'—',    p11:'—',    notes:'Palm Sunday (M)', moment:true },
  { date:'Mar 29', loc:'MG',  m9:'7:21',  p9:'+0:51', m11:'6:09', p11:'-0:21',notes:'Partial data (M)', moment:true },
  { date:'Mar 29', loc:'SLP', m9:'5:41',  p9:'+0:26', m11:'6:01', p11:'+0:46',notes:'Palm Sunday (M)', moment:true },
  { date:'Apr 12', loc:'ELK', m9:'10:02', p9:'+3:02', m11:'7:57', p11:'+0:57',notes:'9am Announce spike (5:52)', moment:false },
  { date:'Apr 12', loc:'LV',  m9:'7:32',  p9:'+0:32', m11:'—',    p11:'—',    notes:'Water Baptism (M)', moment:true },
  { date:'Apr 12', loc:'MG',  m9:'8:17',  p9:'+1:47', m11:'7:17', p11:'+0:47',notes:'Water Baptism (M)', moment:true },
  { date:'Apr 12', loc:'SLP', m9:'5:18',  p9:'+0:03', m11:'5:42', p11:'+0:27',notes:'Water Baptism (M)', moment:true },
  { date:'Apr 19', loc:'ELK', m9:'9:50',  p9:'+1:58', m11:'9:33', p11:'+1:41',notes:'ODTFTW campaign offering', moment:false },
  { date:'Apr 19', loc:'LV',  m9:'8:41',  p9:'+1:41', m11:'—',    p11:'—',    notes:'ODTFTW campaign offering', moment:false },
  { date:'Apr 19', loc:'MG',  m9:'10:17', p9:'+3:47', m11:'9:55', p11:'+3:25',notes:'Worst MG mid in dataset', moment:false },
  { date:'Apr 19', loc:'SLP', m9:'7:34',  p9:'+1:04', m11:'7:56', p11:'+1:26',notes:'Two announcement blocks', moment:false },
  { date:'Apr 26', loc:'ELK', m9:'9:01',  p9:'+0:41', m11:'9:16', p11:'+0:56',notes:'What About #3', moment:false },
  { date:'Apr 26', loc:'LV',  m9:'10:13', p9:'+3:13', m11:'—',    p11:'—',    notes:'', moment:false },
  { date:'Apr 26', loc:'MG',  m9:'6:20',  p9:'-0:25', m11:'7:39', p11:'+0:54',notes:'', moment:false },
  { date:'Apr 26', loc:'SLP', m9:'6:16',  p9:'-0:09', m11:'7:15', p11:'+0:50',notes:'', moment:false },
  { date:'May 3',  loc:'ELK', m9:'5:52',  p9:'+1:22', m11:'7:07', p11:'+2:37',notes:'ODTFTW offering in LOCAL; 11am prayer +4:49 (M)', moment:true },
  { date:'May 3',  loc:'LV',  m9:'3:37',  p9:'-0:23', m11:'—',    p11:'—',    notes:'Close worship 0:07 poss. timer issue; ODTFTW offering +3:16 in LOCAL (M)', moment:true },
  { date:'May 3',  loc:'MG',  m9:'7:35',  p9:'+3:35', m11:'7:32', p11:'+3:32',notes:'Close worship +3:13/+2:19; 9am bumper/msg timer swap; ODTFTW (M)', moment:true },
  { date:'May 3',  loc:'SLP', m9:'3:22',  p9:'+0:17', m11:'3:41', p11:'+0:36',notes:'9am bumper/msg timer swap; 9am salvation +3:31; ODTFTW (M)', moment:true },
];
