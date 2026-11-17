// Checks the hand-edited case files before deploy: a missing field or a
// duplicate id builds fine but blanks the page for every visitor.
// Run: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { GUIDE_CONTENT } from "../src/guide-content.js";

const root = new URL("../", import.meta.url);
const caseDir = new URL("src/case-studies/", root);
const files = readdirSync(caseDir).filter((f) => /^case\d+\.js$/.test(f));
const cases = await Promise.all(
  files.map(async (f) => [f, (await import(new URL(f, caseDir))).default]),
);

const REQUIRED = ["id", "title", "subtitle", "date", "severity", "category", "tags",
  "summary", "verdict", "tldr", "analysis", "recommendations", "techniques", "iocs"];

// Collect every local image path ("/email-forensics/images/x.png") in an object.
const imagePaths = (o, acc = []) => {
  if (o && typeof o === "object") {
    for (const [k, v] of Object.entries(o)) {
      if (k === "url" && typeof v === "string" && v.startsWith("/")) acc.push(v);
      else imagePaths(v, acc);
    }
  }
  return acc;
};
const missingImages = (o) =>
  imagePaths(o).filter(
    (u) => !existsSync(fileURLToPath(new URL(u.replace(/^\/email-forensics\//, "public/"), root))),
  );

test("there are case files", () => assert.ok(cases.length > 0));

for (const [file, c] of cases) {
  test(file, () => {
    assert.ok(c, "needs `export default { ... }`");
    for (const key of REQUIRED) assert.ok(c[key] !== undefined, `missing "${key}"`);
    assert.ok(c.emailHeaders || c.emails, 'needs "emailHeaders" or "emails"');
    assert.match(c.date, /^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD");
    assert.ok(["Critical", "High", "Medium", "Low"].includes(c.severity), `bad severity "${c.severity}"`);
    assert.deepEqual(missingImages(c), [], "image files not in public/images");
  });
}

test("case ids are unique", () => {
  const ids = cases.map(([, c]) => c.id);
  assert.deepEqual(ids.filter((id, i) => ids.indexOf(id) !== i), []);
});

test("guide images exist", () => assert.deepEqual(missingImages(GUIDE_CONTENT), []));
