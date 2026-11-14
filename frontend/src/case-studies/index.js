// =============================================================================
// CASE STUDIES — loader
// Every caseN.js file in this folder is one investigation, exported as
// `export default { ... }`. This file picks them up automatically, so to add
// a new case you only need to create the next caseN.js (see _template.js).
//
// Order: cases are sorted by their file number (case1, case2, ... case10, ...).
// The first 3 are shown as "featured" on the Home page.
// Files whose name starts with "_" (like _template.js) are ignored.
// =============================================================================

const modules = import.meta.glob("./case*.js", { eager: true });

const caseNumber = (path) => Number(path.match(/case(\d+)\.js$/)?.[1] ?? Infinity);

export const CASE_STUDIES = Object.keys(modules)
  .filter((path) => /\/case\d+\.js$/.test(path))
  .sort((a, b) => caseNumber(a) - caseNumber(b))
  .map((path) => modules[path].default)
  .filter(Boolean);

// Catch copy-paste mistakes early: duplicate ids would make two cases share a URL.
if (import.meta.env.DEV) {
  const seen = new Set();
  for (const c of CASE_STUDIES) {
    if (seen.has(c.id)) console.warn(`[case-studies] Duplicate case id "${c.id}"`);
    seen.add(c.id);
  }
}
