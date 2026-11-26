// Your AI Therapist's Diagnosis — make.fun entry (Batch 49, wave F).
// Writes the single-line diagnosis to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, so the line is
// checked against that cap before it is written.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Diagnosis: chronic over-apologizing to machines. You said sorry to the printer 11 times today, to me 38. The printer forgives you. I charge by the session.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
