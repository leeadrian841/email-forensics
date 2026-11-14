// =============================================================================
// CASE STUDIES — loader
// Every caseN.js file in this folder is one investigation, exported as
// `export default { ... }`. This file picks them up automatically, so to add
// a new case you only need to create the next caseN.js (see _template.js).
//
// Order: cases are sorted by their file number (case1, case2, ... case10, ...).
// Featured cases on the Home page are chosen in FEATURED_CASE_IDS below.
// Files whose name starts with "_" (like _template.js) are ignored.
// =============================================================================

const modules = import.meta.glob("./case*.js", { eager: true });

const caseNumber = (path) => Number(path.match(/case(\d+)\.js$/)?.[1] ?? Infinity);

export const CASE_STUDIES = Object.keys(modules)
  .filter((path) => /\/case\d+\.js$/.test(path))
  .sort((a, b) => caseNumber(a) - caseNumber(b))
  .map((path) => modules[path].default)
  .filter(Boolean);

// -----------------------------------------------------------------------------
// FEATURED CASES — shown on the Home page, in this order.
// Use each case's `id` (the URL slug), not its file number.
// Leave the list empty to fall back to the first 3 cases.
// -----------------------------------------------------------------------------
export const FEATURED_CASE_IDS = [
  "fake-recruiter-retargeting-campaign", // case10
  "fake-cloud-storage-payment-phishing", // case1
  "corporate-bec-probe",                 // case2
];

const featured = FEATURED_CASE_IDS
  .map((id) => CASE_STUDIES.find((c) => c.id === id))
  .filter(Boolean);

export const FEATURED_CASES = featured.length > 0 ? featured : CASE_STUDIES.slice(0, 3);

// Catch copy-paste mistakes early: duplicate ids would make two cases share a URL.
if (import.meta.env.DEV) {
  const seen = new Set();
  for (const c of CASE_STUDIES) {
    if (seen.has(c.id)) console.warn(`[case-studies] Duplicate case id "${c.id}"`);
    seen.add(c.id);
  }
  for (const id of FEATURED_CASE_IDS) {
    if (!seen.has(id)) console.warn(`[case-studies] Featured id "${id}" matches no case`);
  }
}
