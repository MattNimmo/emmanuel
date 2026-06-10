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

const WEEKS      = ['Dec 24','Jan 4','Jan 11','Jan 18','Jan 25','Feb 1','Feb 8','Feb 15','Feb 22','Mar 1','Mar 8','Mar 15','Mar 22','Mar 29','Apr 12','Apr 19','Apr 26','May 3','May 10','May 17','May 24','May 31','Jun 7'];
const WEEKS_FULL = ['2025-12-24','2026-01-04','2026-01-11','2026-01-18','2026-01-25','2026-02-01','2026-02-08','2026-02-15','2026-02-22','2026-03-01','2026-03-08','2026-03-15','2026-03-22','2026-03-29','2026-04-12','2026-04-19','2026-04-26','2026-05-03','2026-05-10','2026-05-17','2026-05-24','2026-05-31','2026-06-07'];

// Mid-service variance in seconds per service. null = no data / unusable.
// [9am, 11am] per week, aligned to WEEKS index.
const DATA = {
  ELK: {
    // Dec24–Jan25: SLP-only historical data; ELK/LV/MG null. Feb1+: multi-campus tracking.
    // Feb1: 9am timer bleed → null; 11am clean. Feb8: Super Sunday. Feb15: WB Sunday. Feb22–Mar8: standard/communion.
    '9am':  [null, null, null, null, null, null,  76,  235,  135,   -2,   13,  null,  -71,   18,  182,  118,   41,   82,  125,   -7,   57,  153,   41],
    '11am': [null, null, null, null, null,   95, 175,   32,  131,  176,    1,   -71,   78,    6,   57,  101,   56,  157,  167,  138,  184,  264,   34]
  },
  LV: {
    // Dec24–Jan25: SLP-only historical data; ELK/LV/MG null. Feb1: timer bleed → null. Feb8: Super Sunday unreliable → null. Feb15: timer errors → null. Feb22+: usable.
    '9am':  [null, null, null, null, null, null, null, null,   42,  332,  -15,  -188,  -56,   26,   32,  101,  193,  -23,  210,  198,  -22,  365,   26],
    '11am': [null, null, null, null, null, null, null, null, null, null, null,  null, null, null, null, null, null, null, null, null, null, null, null]
  },
  MG: {
    // Dec24–Jan25: SLP-only historical data; ELK/LV/MG null. Feb1: both services usable. Feb8: 9am moment, 11am timer error. Feb15: 9am moment, 11am unusable. Feb22+.
    '9am':  [null, null, null, null, null,   88,  52,  163,  271,  142,  143,  null,  -69,   51,  107,  227,  -25,  215,  147,   27,  229,  188,   69],
    '11am': [null, null, null, null, null,  146, null, null,  372, null, null,  null,   52,  -21,   47,  205,   54,  212,   74,   58,  261,  295,  105]
  },
  SLP: {
    // Dec24: Christmas Eve (3pm/5pm); Jan4: New Year; Jan11: Vision Sunday; Jan18: MLK Weekend; Jan25: Nate Address.
    '9am':  [  67,  42,  46,  81,  118,  51,  202,  153,  113,   52,   58,   42,   24,   26,    3,   64,   -9,   17,   44,   73,   84,   68,   74],
    '11am': [ 183,  72,  63, 127,  161,  43,  206,  170,  168,  146,   73,   42,   42,   46,   27,   86,   50,   36,   65,  141,  132,   89,   41]
  }
};

// Moment flags — true = calendar moment (Category A/B) or data too unreliable to trend.
// Moment weeks shown as hollow points in the trend chart; excluded from averages.
const MOMENTS = {
  // Dec24=Christmas Eve(A), Jan4=standard, Jan11=Vision Sunday(B), Jan18=MLK Weekend(B), Jan25=Nate Address(B)
  ELK: [ true, false,  true,  true,  true, false,  true,  true, false,  true, false,  false,  true,  true,  true, false, false,  true,  true, false, false, false, false],
  LV:  [ true, false,  true,  true,  true, false,  true,  true, false,  true, false,  false, false,  true,  true, false, false,  true,  true, false, false, false, false],
  MG:  [ true, false,  true,  true,  true, false,  true,  true, false,  true, false,  false, false,  true,  true, false, false,  true,  true, false, false, false, false],
  SLP: [ true, false,  true,  true,  true, false,  true,  true, false,  true, false,   true, false,  true,  true, false, false,  true,  true, false, false, false, false]
};

// Per-element averages (seconds). Update midTotal and element val fields each ingest.
// Color and bar width derive automatically — do not edit elColor() or barPct() for routine updates.
// val: null = no meaningful average (variable or too few data points).
// barWidth: overrides auto-calculated bar width for special cases.
// dimBar: renders the bar at 40% opacity (used for "variable" elements).
const EL_AVGS = {
  ELK: {
    label: 'ELK · Elk River', color: 'var(--elk)', midTotal: 81,
    elements: [
      { name: 'Close Worship',  val:  17 },
      { name: 'Meet & Greet',   val:  20 },
      { name: 'Announcements',  val:  44 },
      { name: 'Campaign Video', val: null, display: '≈0:00', barWidth: 1 },
      { name: 'Offering',       val:   0 }
    ]
  },
  LV: {
    label: 'LV · Lakeville', color: 'var(--lv)', midTotal: 60,
    elements: [
      { name: 'Close Worship',    val:  -6 },
      { name: 'Meet & Greet',     val:  -4 },
      { name: 'Announcements',    val:  71 },
      { name: '5 Spot (LV-only)', val:   3 },
      { name: 'Offering',         val:   9 }
    ]
  },
  MG: {
    label: 'MG · Maple Grove', color: 'var(--mg)', midTotal: 135,
    elements: [
      { name: 'Close Worship',  val:  75 },
      { name: 'Meet & Greet',   val:   4 },
      { name: 'Hosted Moment',  val:  47 },
      { name: 'Campaign Video', val:  -5 },
      { name: 'Offering',       val:  17 }
    ]
  },
  SLP: {
    label: 'SLP · Spring Lake Park', color: 'var(--slp)', midTotal: 60,
    elements: [
      { name: 'Host Pastor / NG',  val:  15 },
      { name: 'Greet & Seat',      val:  -6 },
      { name: 'Announcements',     val: null, display: 'variable', barWidth: 30, dimBar: true },
      { name: 'KB Video / Moment', val:   9 },
      { name: 'Offering',          val:  25 }
    ]
  }
};

// Message length data (minutes, decimal). null = no reliable data.
// Aligned to WEEKS index. SLP 9am and 11am are the tracked series (broadcast campus).
// ELK/MG/LV not tracked. SLP 9am has a recurring Live-section timer issue — null if suspect.
// series: 'Std' = standard sermon, 'Q&A' = What About format, '' = moment/special week.
// On ingest: append one value to each array; update series type.
const MSG_DATA = {
  planned: 38,
  // Dec24: Christmas Eve (short message); Jan4: series launch; Jan11: Vision Sunday; Jan18: MLK embedded; Jan25: Paul Hurkman guest
  series:  ['',    'Std', 'Std', 'Std', 'Std', 'Std', '',   'Std', 'Std', 'Std', 'Std', '',    'Std', '',    'Std', 'Q&A', 'Q&A', 'Std', '',    'Q&A', 'Q&A', 'Q&A', 'Std'],
  ELK: {
    '9am':  [null, null, null, null, null, 40.77, null, 39.80, 43.87, 44.87, 40.25, null,  42.37, null,  41.07, 38.67, 39.75, 39.17, 32.70, 45.72, 39.68, 46.35, 46.05],
    '11am': [null, null, null, null, null, 42.48, null, 39.43, 43.78, 47.83, 43.15, 48.63, 47.08, null,  42.23, 38.65, 44.33, 38.53, 33.43, 43.87, 40.65, 45.33, 42.80]
  },
  SLP: {
    // Dec24: 9:46/13:14; Jan4: 42:40/45:20; Jan11: 41:31/45:54; Jan18: 57:03/58:09 (MLK embedded); Jan25: 32:41/38:43
    '9am':  [ 9.77, 42.67, 41.52, 57.05, 32.68, 35.07, null, null,  null,  47.65, null,  48.90, null,  35.92, 42.58, 38.65, 40.15, 35.05, 27.25, 46.08, 39.70, 46.20, 46.15],
    '11am': [13.23, 45.33, 45.90, 58.15, 38.72, 36.47, null, null,  null,  null,  null,  47.55, null,  37.27, 45.58, 42.00, 41.58, 37.38, 30.05, 44.77, 40.65, 45.33, 42.77]
  }
};

// Weekly table rows. Append one block of 4 rows (one per campus) each ingest.
// m9/m11: display string for mid-service actual (MM:SS). p9/p11: mid variance (+M:SS or −M:SS).
// tot9/tot11: display string for service-total actual (MM:SS). pt9/pt11: total variance.
// Use '—' for missing/unusable data. moment:true highlights the row and adds the ★ chip.
// MG tot/pt: now unlocked where phantom-corrected plans are available.
// LV tot9: now unlocked on all weeks; phantom songs subtracted from planned totals.
const TABLE_DATA = [
  { date:'Dec 24', loc:'SLP', m9:'7:27',  p9:'+1:07', m11:'9:23',  p11:'+3:03', tot9:'60:20', pt9:'−0:30',  tot11:'70:40', pt11:'+9:50',  notes:'Christmas Eve (3pm/5pm); Story Time message 9:46/13:14; total variance: 3pm on plan, 5pm +9:50 (★)', moment:true },
  { date:'Jan 4',  loc:'SLP', m9:'15:12', p9:'+0:42', m11:'15:42', p11:'+1:12', tot9:'78:53', pt9:'+6:53',  tot11:'81:28', pt11:'+9:28',  notes:'Anything Is Possible launch; Communion + new song (I Need Your Presence) in mid; message 42:40/45:20 (+4:40/+7:20)', moment:false },
  { date:'Jan 11', loc:'SLP', m9:'5:36',  p9:'+0:46', m11:'5:53',  p11:'+1:03', tot9:'75:46', pt9:'+4:26',  tot11:'85:23', pt11:'+14:03', notes:'Vision Sunday; 11am worship extended (22:01 vs 19:00 plan, +3:01); message +3:31/+7:54; service total 14:03 over at 11am (★)', moment:true },
  { date:'Jan 18', loc:'SLP', m9:'6:11',  p9:'+1:21', m11:'6:57',  p11:'+2:07', tot9:'87:41', pt9:'+16:21', tot11:'88:04', pt11:'+16:44', notes:'MLK Weekend; MLK Moment+KB Video (2:30) embedded in message (+17:03/+18:09); Offering +1:21/+1:41 over plan (★)', moment:true },
  { date:'Jan 25', loc:'SLP', m9:'15:03', p9:'+1:58', m11:'15:46', p11:'+2:41', tot9:'81:42', pt9:'+9:52',  tot11:'83:52', pt11:'+12:02', notes:'Nate Address (10:34/12:40) in mid-service; Offering moved post-disconnect; 9am Prayer Moment +1:47 unplanned; Paul Hurkman 32:41/38:43 (M)', moment:true },
  { date:'Feb 1',  loc:'ELK', m9:'—',     p9:'—',     m11:'11:04',p11:'+1:35', tot9:'83:11', pt9:'+9:42',  tot11:'80:15', pt11:'+6:46',  notes:'KB Launch Video; 9am timer bleed excluded', moment:false },
  { date:'Feb 1',  loc:'LV',  m9:'—',     p9:'—',     m11:'—',    p11:'—',     tot9:'77:31', pt9:'+2:11',  tot11:'—',     pt11:'—',      notes:'10am mid-service timer bleed — mid excluded; total valid', moment:false },
  { date:'Feb 1',  loc:'MG',  m9:'11:03', p9:'+1:28', m11:'12:01',p11:'+2:26', tot9:'86:49', pt9:'+3:25',  tot11:'81:38', pt11:'−1:46',  notes:'KB Launch Video in plan; Close Worship over', moment:false },
  { date:'Feb 1',  loc:'SLP', m9:'8:46',  p9:'+0:51', m11:'8:38', p11:'+0:43', tot9:'75:40', pt9:'+6:15',  tot11:'86:42', pt11:'+17:17', notes:'KB Video on plan', moment:false },
  { date:'Feb 8',  loc:'ELK', m9:'19:36', p9:'+1:16', m11:'21:15',p11:'+2:55', tot9:'81:29', pt9:'−4:22',  tot11:'85:49', pt11:'−0:02',  notes:'Super Sunday — interview + two-part stream (★)', moment:true },
  { date:'Feb 8',  loc:'LV',  m9:'—',     p9:'—',     m11:'—',    p11:'—',     tot9:'74:20', pt9:'−1:00',  tot11:'—',     pt11:'—',      notes:'Super Sunday — data unreliable (★)', moment:true },
  { date:'Feb 8',  loc:'MG',  m9:'19:27', p9:'+0:52', m11:'—',    p11:'—',     tot9:'75:27', pt9:'+1:22',  tot11:'—',     pt11:'—',      notes:'Super Sunday; 11am timer error (★)', moment:true },
  { date:'Feb 8',  loc:'SLP', m9:'19:11', p9:'+3:22', m11:'19:15',p11:'+3:26', tot9:'78:31', pt9:'+1:17',  tot11:'82:22', pt11:'+5:08',  notes:'Super Sunday — Football Coach interview (★)', moment:true },
  { date:'Feb 15', loc:'ELK', m9:'11:15', p9:'+3:55', m11:'7:52', p11:'+0:32', tot9:'80:13', pt9:'+8:53',  tot11:'75:16', pt11:'+3:56',  notes:'Water Baptism; 9am Offering flagged (★)', moment:true },
  { date:'Feb 15', loc:'LV',  m9:'—',     p9:'—',     m11:'—',    p11:'—',     tot9:'73:53', pt9:'−1:27',  tot11:'—',     pt11:'—',      notes:'Water Baptism; Close Worship + G&S timer errors (★)', moment:true },
  { date:'Feb 15', loc:'MG',  m9:'9:13',  p9:'+2:43', m11:'—',    p11:'—',     tot9:'74:22', pt9:'+2:52',  tot11:'—',     pt11:'—',      notes:'Water Baptism; 11am timer error 181:10 (★)', moment:true },
  { date:'Feb 15', loc:'SLP', m9:'7:23',  p9:'+2:33', m11:'7:40', p11:'+2:50', tot9:'77:40', pt9:'+6:20',  tot11:'79:33', pt11:'+8:13',  notes:'Water Baptism Sunday (★)', moment:true },
  { date:'Feb 22', loc:'ELK', m9:'9:15',  p9:'+2:15', m11:'9:11', p11:'+2:11', tot9:'83:19', pt9:'−2:45',  tot11:'84:01', pt11:'−2:03',  notes:'9am Announce spike 7:04 — largest in dataset', moment:false },
  { date:'Feb 22', loc:'LV',  m9:'7:42',  p9:'+0:42', m11:'—',    p11:'—',     tot9:'83:04', pt9:'−1:00',  tot11:'—',     pt11:'—',      notes:'Announce doubled (+2:00)', moment:false },
  { date:'Feb 22', loc:'MG',  m9:'15:01', p9:'+4:31', m11:'16:42',p11:'+6:12', tot9:'81:39', pt9:'+4:09',  tot11:'78:57', pt11:'+1:27',  notes:'Offering anomaly (+3:07/+2:52)', moment:false },
  { date:'Feb 22', loc:'SLP', m9:'7:58',  p9:'+1:53', m11:'8:53', p11:'+2:48', tot9:'80:41', pt9:'+8:06',  tot11:'85:07', pt11:'+12:32', notes:'11am announce spike (5:05)', moment:false },
  { date:'Mar 1',  loc:'ELK', m9:'6:58',  p9:'−0:02', m11:'9:56', p11:'+2:56', tot9:'—',     pt9:'—',      tot11:'—',     pt11:'—',      notes:'Child Dedication; plan inflated (91:25); 11am Announce+Offering both over (★)', moment:true },
  { date:'Mar 1',  loc:'LV',  m9:'12:52', p9:'+5:32', m11:'—',    p11:'—',     tot9:'88:35', pt9:'+18:45', tot11:'—',     pt11:'—',      notes:'Child Ded unplanned 5:29; excl. Ded: +0:03 (★)', moment:true },
  { date:'Mar 1',  loc:'MG',  m9:'12:07', p9:'+2:22', m11:'—',    p11:'—',     tot9:'81:42', pt9:'+8:27',  tot11:'—',     pt11:'—',      notes:'Meet & Greet anomaly (5:10); 11am not recorded (★)', moment:true },
  { date:'Mar 1',  loc:'SLP', m9:'9:27',  p9:'+0:52', m11:'11:01',p11:'+2:26', tot9:'81:08', pt9:'+9:03',  tot11:'85:17', pt11:'+13:12', notes:'Child Dedications + Susie Larson (★)', moment:true },
  { date:'Mar 8',  loc:'ELK', m9:'7:13',  p9:'+0:13', m11:'7:01', p11:'+0:01', tot9:'78:28', pt9:'−2:20',  tot11:'80:25', pt11:'−0:23',  notes:'Tightest ELK mid in dataset — Communion Sunday', moment:false },
  { date:'Mar 8',  loc:'LV',  m9:'7:05',  p9:'−0:15', m11:'—',    p11:'—',     tot9:'82:26', pt9:'+2:51',  tot11:'—',     pt11:'—',      notes:'Timer issues on Close Worship + Meet & Greet', moment:false },
  { date:'Mar 8',  loc:'MG',  m9:'8:53',  p9:'+2:23', m11:'—',    p11:'—',     tot9:'79:50', pt9:'+4:20',  tot11:'—',     pt11:'—',      notes:'Close Worship +2:53; 11am not recorded', moment:false },
  { date:'Mar 8',  loc:'SLP', m9:'5:48',  p9:'+0:58', m11:'6:03', p11:'+1:13', tot9:'78:42', pt9:'+7:22',  tot11:'79:37', pt11:'+8:17',  notes:'Communion + Dwell in worship bundle', moment:false },
  { date:'Mar 15', loc:'ELK', m9:'5:49',  p9:'−1:11', m11:'—',    p11:'—',     tot9:'—',     pt9:'—',      tot11:'77:19', pt11:'+2:37',  notes:'9am run-through only; 11am tracked', moment:false },
  { date:'Mar 15', loc:'LV',  m9:'3:52',  p9:'−3:08', m11:'—',    p11:'—',     tot9:'75:36', pt9:'+0:36',  tot11:'—',     pt11:'—',      notes:'', moment:false },
  { date:'Mar 15', loc:'MG',  m9:'—',     p9:'—',     m11:'—',    p11:'—',     tot9:'—',     pt9:'—',      tot11:'—',     pt11:'—',      notes:'Data unusable', moment:false },
  { date:'Mar 15', loc:'SLP', m9:'5:29',  p9:'+0:42', m11:'5:29', p11:'+0:42', tot9:'79:45', pt9:'+8:28',  tot11:'80:16', pt11:'+8:59',  notes:'Host Pastor moment (M)', moment:true },
  { date:'Mar 22', loc:'ELK', m9:'5:49',  p9:'−1:11', m11:'8:18', p11:'+1:18', tot9:'85:18', pt9:'+14:18', tot11:'80:33', pt11:'+9:33',  notes:'ELK 9am worship response (M)', moment:true },
  { date:'Mar 22', loc:'LV',  m9:'11:24', p9:'−0:56', m11:'—',    p11:'—',     tot9:'76:53', pt9:'+7:44',  tot11:'—',     pt11:'—',      notes:'Incl. 5 Spot; songs run individually (reverse phantom)', moment:false },
  { date:'Mar 22', loc:'MG',  m9:'5:21',  p9:'−1:09', m11:'7:22', p11:'+0:52', tot9:'78:09', pt9:'+5:39',  tot11:'—',     pt11:'—',      notes:'7:45am service', moment:false },
  { date:'Mar 22', loc:'SLP', m9:'5:39',  p9:'+0:24', m11:'5:57', p11:'+0:42', tot9:'73:55', pt9:'+2:10',  tot11:'77:58', pt11:'+6:13',  notes:'', moment:false },
  { date:'Mar 29', loc:'ELK', m9:'7:18',  p9:'+0:18', m11:'~7:06',p11:'~+0:06',tot9:'78:29', pt9:'+7:29',  tot11:'75:04', pt11:'+4:04',  notes:'Palm Sunday (M)', moment:true },
  { date:'Mar 29', loc:'LV',  m9:'7:46',  p9:'+0:26', m11:'—',    p11:'—',     tot9:'70:24', pt9:'+0:24',  tot11:'—',     pt11:'—',      notes:'Palm Sunday; songs run individually (reverse phantom) (M)', moment:true },
  { date:'Mar 29', loc:'MG',  m9:'7:21',  p9:'+0:51', m11:'6:09', p11:'−0:21', tot9:'—',     pt9:'—',      tot11:'—',     pt11:'—',      notes:'Partial data — service total unusable (M)', moment:true },
  { date:'Mar 29', loc:'SLP', m9:'5:41',  p9:'+0:26', m11:'6:01', p11:'+0:46', tot9:'73:00', pt9:'+1:14',  tot11:'75:58', pt11:'+4:12',  notes:'Palm Sunday (M)', moment:true },
  { date:'Apr 12', loc:'ELK', m9:'10:02', p9:'+3:02', m11:'7:57', p11:'+0:57', tot9:'78:32', pt9:'+7:32',  tot11:'78:13', pt11:'+7:13',  notes:'9am Announce spike (5:52)', moment:false },
  { date:'Apr 12', loc:'LV',  m9:'7:32',  p9:'+0:32', m11:'—',    p11:'—',     tot9:'76:58', pt9:'+1:58',  tot11:'—',     pt11:'—',      notes:'Water Baptism (M)', moment:true },
  { date:'Apr 12', loc:'MG',  m9:'8:17',  p9:'+1:47', m11:'7:17', p11:'+0:47', tot9:'80:19', pt9:'+12:49', tot11:'74:04', pt11:'+6:34',  notes:'Water Baptism (M)', moment:true },
  { date:'Apr 12', loc:'SLP', m9:'5:18',  p9:'+0:03', m11:'5:42', p11:'+0:27', tot9:'75:58', pt9:'+5:13',  tot11:'81:56', pt11:'+11:11', notes:'Water Baptism (M)', moment:true },
  { date:'Apr 19', loc:'ELK', m9:'9:50',  p9:'+1:58', m11:'9:33', p11:'+1:41', tot9:'76:28', pt9:'+4:36',  tot11:'78:51', pt11:'+6:59',  notes:'ODTFTW campaign offering', moment:false },
  { date:'Apr 19', loc:'LV',  m9:'8:41',  p9:'+1:41', m11:'—',    p11:'—',     tot9:'80:01', pt9:'+5:01',  tot11:'—',     pt11:'—',      notes:'ODTFTW campaign offering', moment:false },
  { date:'Apr 19', loc:'MG',  m9:'10:17', p9:'+3:47', m11:'9:55', p11:'+3:25', tot9:'—',     pt9:'—',      tot11:'78:15', pt11:'+5:45',  notes:'Worst MG mid in dataset', moment:false },
  { date:'Apr 19', loc:'SLP', m9:'7:34',  p9:'+1:04', m11:'7:56', p11:'+1:26', tot9:'75:50', pt9:'+2:50',  tot11:'81:34', pt11:'+8:34',  notes:'Two announcement blocks', moment:false },
  { date:'Apr 26', loc:'ELK', m9:'9:01',  p9:'+0:41', m11:'9:16', p11:'+0:56', tot9:'82:23', pt9:'+9:33',  tot11:'83:16', pt11:'+10:26', notes:'What About #3', moment:false },
  { date:'Apr 26', loc:'LV',  m9:'10:13', p9:'+3:13', m11:'—',    p11:'—',     tot9:'81:14', pt9:'+6:14',  tot11:'—',     pt11:'—',      notes:'', moment:false },
  { date:'Apr 26', loc:'MG',  m9:'6:20',  p9:'−0:25', m11:'7:39', p11:'+0:54', tot9:'82:10', pt9:'+8:40',  tot11:'83:05', pt11:'+9:35',  notes:'', moment:false },
  { date:'Apr 26', loc:'SLP', m9:'6:16',  p9:'−0:09', m11:'7:15', p11:'+0:50', tot9:'79:55', pt9:'+4:00',  tot11:'83:38', pt11:'+7:43',  notes:'', moment:false },
  { date:'May 3',  loc:'ELK', m9:'5:52',  p9:'+1:22', m11:'7:07', p11:'+2:37', tot9:'76:25', pt9:'−0:22',  tot11:'81:55', pt11:'+5:08',  notes:'ODTFTW offering in LOCAL; 11am prayer +4:49 (M)', moment:true },
  { date:'May 3',  loc:'LV',  m9:'3:37',  p9:'−0:23', m11:'—',    p11:'—',     tot9:'72:25', pt9:'−2:35',  tot11:'—',     pt11:'—',      notes:'Close worship 0:07 poss. timer issue; ODTFTW offering +3:16 in LOCAL (M)', moment:true },
  { date:'May 3',  loc:'MG',  m9:'7:35',  p9:'+3:35', m11:'7:32', p11:'+3:32', tot9:'75:54', pt9:'+0:54',  tot11:'74:44', pt11:'−0:16',  notes:'Close worship +3:13/+2:19; 9am bumper/msg timer swap; ODTFTW (M)', moment:true },
  { date:'May 3',  loc:'SLP', m9:'3:22',  p9:'+0:17', m11:'3:41', p11:'+0:36', tot9:'78:15', pt9:'+6:30',  tot11:'79:30', pt11:'+7:45',  notes:'9am bumper/msg timer swap; 9am salvation +3:31; ODTFTW (M)', moment:true },
  { date:'May 10', loc:'ELK', m9:'9:05',  p9:'+2:05', m11:'12:47',p11:'+2:47', tot9:'72:25', pt9:'−1:35',  tot11:'74:34', pt11:'+0:34',  notes:'Mother\'s Day; Jodi Ruch preaching; 11am incl. Child Ded (M)', moment:true },
  { date:'May 10', loc:'LV',  m9:'7:20',  p9:'+3:30', m11:'—',    p11:'—',     tot9:'70:44', pt9:'−8:42',  tot11:'—',     pt11:'—',      notes:'Mother\'s Day; unplanned Child Ded 4:20; close worship 0:23 timer pattern (M)', moment:true },
  { date:'May 10', loc:'MG',  m9:'6:27',  p9:'+2:27', m11:'5:14', p11:'+1:14', tot9:'74:45', pt9:'−1:45',  tot11:'—',     pt11:'—',      notes:'Mother\'s Day; close worship +1:01/+0:51; 11am closing prayer 16:40 timer leave-on (M)', moment:true },
  { date:'May 10', loc:'SLP', m9:'3:49',  p9:'+0:44', m11:'4:10', p11:'+1:05', tot9:'73:48', pt9:'−0:48',  tot11:'78:33', pt11:'+3:57',  notes:'Mother\'s Day; Jodi Ruch; 9am offering 7:20 ODTFTW recap; 11am salvation 11:31 (M)', moment:true },
  { date:'May 17', loc:'ELK', m9:'12:53', p9:'−0:07', m11:'15:18',p11:'+2:18', tot9:'85:33', pt9:'+11:33', tot11:'86:05', pt11:'+12:05', notes:'Staff Moment (Mallory); 11am M&G +1:31; messages 45:43/43:52 (+7:43/+5:52)', moment:false },
  { date:'May 17', loc:'LV',  m9:'12:48', p9:'+3:18', m11:'—',    p11:'—',     tot9:'81:20', pt9:'+6:50',  tot11:'—',     pt11:'—',      notes:'Close worship resolved (1:16); Announce 5:48 (+3:48, 4 items incl. GDOP); msg/bumper 46:07', moment:false },
  { date:'May 17', loc:'MG',  m9:'4:27',  p9:'+0:27', m11:'4:58', p11:'+0:58', tot9:'80:51', pt9:'+3:51',  tot11:'80:18', pt11:'+3:18',  notes:'Lowest MG mid in dataset; Close Worship 11am +0:03; 11am bumper timer bleed 38:00/msg 6:28', moment:false },
  { date:'May 17', loc:'SLP', m9:'8:38',  p9:'+1:13', m11:'9:46', p11:'+2:21', tot9:'75:09', pt9:'+3:14',  tot11:'84:38', pt11:'+12:43', notes:'Announcements +1:14/+1:28; messages 46:05/44:46 (+8:05/+6:46); 11am Here As In Heaven 9:48', moment:false },
  { date:'May 24', loc:'ELK', m9:'9:27',  p9:'+0:57', m11:'11:34',p11:'+3:04', tot9:'80:19', pt9:'+7:49',  tot11:'82:13', pt11:'+9:43',  notes:'Offering elevated non-campaign week (+1:09/+1:55); 11am Announce 4:57 (+1:57); Close Worship near-zero (timer advance suspected)', moment:false },
  { date:'May 24', loc:'LV',  m9:'6:58',  p9:'−0:22', m11:'—',    p11:'—',     tot9:'75:43', pt9:'+1:19',  tot11:'—',     pt11:'—',      notes:'Cleanest LV mid in months; Announce +0:59; Offering −0:45; Close Worship near-plan (1:28)', moment:false },
  { date:'May 24', loc:'MG',  m9:'7:49',  p9:'+3:49', m11:'8:21', p11:'+4:21', tot9:'—',     pt9:'—',      tot11:'—',     pt11:'—',      notes:'Close Worship resurges (+2:16/+1:39); Hosted Moment 4:03/5:12 (+1:33/+2:42) — heaviest MG announcement week in dataset', moment:false },
  { date:'May 24', loc:'SLP', m9:'7:39',  p9:'+1:24', m11:'8:27', p11:'+2:12', tot9:'77:59', pt9:'+5:14',  tot11:'80:39', pt11:'+7:54',  notes:'Offering elevated no-campaign (+2:03/+1:08); Fresh Wind 11am 9:07 (+5:07, extended response); no KB block on plan', moment:false },
  { date:'May 31', loc:'ELK', m9:'10:33', p9:'+2:33', m11:'12:24',p11:'+4:24', tot9:'84:22', pt9:'+13:22', tot11:'85:08', pt11:'+14:08', notes:'What About #6; Graduation Sunday; Close Worship +1:39 (P. Bryan pastoral); Offering 11am 4:48 (+3:18 vs 1:30 plan); message 46:21/45:20', moment:false },
  { date:'May 31', loc:'LV',  m9:'11:20', p9:'+6:05', m11:'—',    p11:'—',     tot9:'80:47', pt9:'+9:02',  tot11:'—',     pt11:'—',      notes:'What About #6; Graduation Sunday; Announce 6:09 (+4:49) Graduate Recognition + HSN TONIGHT; largest LV mid in dataset; message 46:10', moment:false },
  { date:'May 31', loc:'MG',  m9:'7:08',  p9:'+3:08', m11:'8:55', p11:'+4:55', tot9:'—',     pt9:'—',      tot11:'—',     pt11:'—',      notes:'What About #6; Close Worship new dataset-worst 4:35 at 11am (+3:50); message 49:40/49:01 (+11:40/+11:01) — longest MG messages in dataset', moment:false },
  { date:'May 31', loc:'SLP', m9:'6:53',  p9:'+1:08', m11:'7:14', p11:'+1:29', tot9:'85:14', pt9:'+12:59', tot11:'87:11', pt11:'+14:56', notes:'What About #6; Graduation Sunday; mid moderate; Fresh Wind+Salvation block +3:39/+4:11 total; message 46:12/45:20', moment:false },
  { date:'Jun 7',  loc:'ELK', m9:'8:01',  p9:'+0:41', m11:'7:54', p11:'+0:34', tot9:'83:30', pt9:'+12:10', tot11:'82:37', pt11:'+11:17', notes:'Seven Churches Week 1; Announce 9am +1:00; Close Worship short; Worship Response extended', moment:false },
  { date:'Jun 7',  loc:'LV',  m9:'5:41',  p9:'+0:26', m11:'—',   p11:'—',     tot9:'81:56', pt9:'+10:11', tot11:'—',     pt11:'—',      notes:'Seven Churches Week 1; Announce +1:19; Worship Response 6:41 (+2:41); message 46:15', moment:false },
  { date:'Jun 7',  loc:'MG',  m9:'7:39',  p9:'+1:09', m11:'8:15', p11:'+1:45', tot9:'—',     pt9:'—',      tot11:'—',     pt11:'—',      notes:'Seven Churches Week 1; Close Worship best in 5 weeks (+0:43/+0:22); 11am Worship Response 12:07; message 45:50/42:27', moment:false },
  { date:'Jun 7',  loc:'SLP', m9:'6:29',  p9:'+1:14', m11:'5:56', p11:'+0:41', tot9:'82:36', pt9:'+10:51', tot11:'83:00', pt11:'+11:15', notes:'Seven Churches Week 1; Host Pastor 9am +0:49; Worship Response 6:24/7:17; message 46:09/42:46', moment:false },
];

// ── Service Total Length ──────────────────────────────────────────────────────
// Overall service length variance in seconds (actual − planned). null = unusable.
// Phantom-song correction rule: if a song has planned > 0 but actual ≈ 0s across all
// public services, the bundle timer was run and the song entry is phantom — subtract
// its planned time from the planned total. Reverse case: if the bundle has actual ≈ 0
// but songs were run individually, subtract the bundle planned time instead.
// MG and LV planned totals are corrected per this rule retroactively.
// ELK Mar 1 null — planned total 91:25 is inflated vs typical 71–77 min.
// ELK Mar 15 9am null — 9:45am service was a run-through, not a full public service.
// Index-aligned to WEEKS.
const SERVICE_TOTAL = {
  ELK: {
    '9am':  [null, null, null, null, null,  582, -262,  533, -165, null, -140, null,  858,  449,  452,  276,  573,  -22,  -95,  693,  469,  802,  730],
    '11am': [null, null, null, null, null,  406,   -2,  236, -123, null,  -23,  157,  573,  244,  433,  419,  626,  308,   34,  725,  583,  848,  677]
  },
  LV: {
    '9am':  [null, null, null, null, null,  131,  -60,  -87,  -60, 1125,  171,   36,  464,   24,  118,  301,  374, -155, -522,  410,   79,  542,  611],
    '11am': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  },
  MG: {
    '9am':  [null, null, null, null, null,  205,   82,  172,  249,  507,  260, null,  339, null,  769, null,  520,   54, -105,  231, null, null, null],
    '11am': [null, null, null, null, null, -106, null, null,   87, null, null, null, null, null,  394,  345,  575,  -16, null,  198, null, null, null]
  },
  SLP: {
    // Dec24: −0:30/+9:50; Jan4: +6:53/+9:28; Jan11: +4:26/+14:03; Jan18: +16:21/+16:44; Jan25: +9:52/+12:02
    '9am':  [  -30,  413,  266,  981,  592,  375,   77,  380,  486,  543,  442,  508,  130,   74,  313,  170,  240,  390,  -48,  194,  314,  779,  651],
    '11am': [  590,  568,  843, 1004,  722, 1037,  308,  493,  752,  792,  497,  539,  373,  252,  671,  514,  463,  465,  237,  763,  474,  896,  675]
  }
};

// Planned service total in seconds per week. null = plan was inflated / unreliable.
// ELK/SLP use same plan for both services each week.
const SERVICE_TOTAL_PLANNED = {
  ELK: {
    '9am':  [null, null, null, null, null, 4409, 5151, 4280, 5164, null, 4848, 4482, 4260, 4260, 4260, 4312, 4370, 4607, 4440, 4440, 4350, 4260, 4280],
    '11am': [null, null, null, null, null, 4409, 5151, 4280, 5164, null, 4848, 4482, 4260, 4260, 4260, 4312, 4370, 4607, 4440, 4440, 4350, 4260, 4280]
  },
  LV: {
    '9am':  [null, null, null, null, null, 4520, 4520, 4520, 5044, 4190, 4775, 4500, 4149, 4200, 4500, 4500, 4500, 4500, 4766, 4470, 4464, 4305, 4305],
    '11am': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  },
  MG: {
    '9am':  [null, null, null, null, null, 5004, 4445, 4290, 4650, 4395, 4530, 4276, 4350, 4350, 4050, 4350, 4410, 4500, 4590, 4620, null, null, null],
    '11am': [null, null, null, null, null, 5004, 4445, 4290, 4650, 4395, 4530, 4276, 4350, 4350, 4050, 4350, 4410, 4500, 4590, 4620, null, null, null]
  },
  SLP: {
    // Dec24: plan 60:50 (3650s); Jan4: 72:00 (4320); Jan11: 71:20 (4280); Jan18: 71:20 (4280); Jan25: 71:50 (4310)
    '9am':  [3650, 4320, 4280, 4280, 4310, 4165, 4634, 4280, 4355, 4325, 4280, 4277, 4305, 4306, 4245, 4380, 4555, 4305, 4476, 4315, 4365, 4335, 4305],
    '11am': [3650, 4320, 4280, 4280, 4310, 4165, 4634, 4280, 4355, 4325, 4280, 4277, 4305, 4306, 4245, 4380, 4555, 4305, 4476, 4315, 4365, 4335, 4305]
  }
};

// Rolling averages for card display. Recalculate each ingest.
// Excludes moment-flagged weeks and null values.
// MG/LV plans now phantom-corrected; limitedData flag retained where data points < 8.
const SERVICE_TOTAL_AVGS = {
  ELK: { avg9: 424, avg11: 448 },
  LV:  { avg9: 278, avg11: null, limitedData: true },
  MG:  { avg9: 301, avg11: 220, limitedData: true },
  SLP: { avg9: 378, avg11: 644 }
};

// Worship Bundle variance in seconds (actual − planned). null = no data for that week.
// Tracks the pre-message open worship section only — not Close Worship (mid-service) or Worship Response (post-message).
// Populated from May 24 onward; backfill earlier weeks from source PDFs as needed.
// LV has no 11am service — '11am' is always null. Align to WEEKS index.
// On ingest: append one value per campus per service from the Worship Bundle row in the PDF.
const WORSHIP_DATA = {
  ELK: {
    '9am':  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  24,   1, 122],
    '11am': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  -1, -10, 122]
  },
  LV: {
    '9am':  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, -67, -28,   7],
    '11am': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  },
  MG: {
    '9am':  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  48, -25,  26],
    '11am': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  61,  28,  66]
  },
  SLP: {
    // Dec24: −6/+3; Jan4: +4/−4; Jan11: −60/+181 (Vision Sunday 11am extended); Jan18: +10/+87; Jan25: −161/−14
    '9am':  [  -6,   4, -60,  10, -161, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, -10, -29, -29],
    '11am': [   3,  -4, 181,  87,  -14, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,   7,  95, -25]
  }
};
