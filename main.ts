// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line (1-200 chars) to /output/entry.txt.
// Validates the line in code and refuses to write anything invalid.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smart fridge pushed a firmware update at 3 a.m. and now the ice maker is paywalled — one free cube a day, then it just flashes 'Upgrade to Premium Chill' at my lemonade.";

const OUT_PATH = "/output/entry.txt";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("line must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("line must be a single line");
  }
  // No control characters (allow normal printable text only).
  for (const ch of line) {
    if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
      throw new Error(`line contains a control character: U+${ch
        .codePointAt(0)!
        .toString(16)
        .padStart(4, "0")}`);
    }
  }
}

validate(LINE);
mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUT_PATH}`);
