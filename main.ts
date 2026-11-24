// One Letter for Your Day — entry program (v2).
//
// One letter, A-Z, is the whole entry. The letter stands for the word
// that describes the day, and the judge picks the letter whose hidden
// word feels most vivid, funniest, or truest.
//
// Our pick: "K" — for "Karaoke". A day of friends passing one
// microphone around, every chorus sung off-key at full volume, nobody
// reaching the high notes, everybody loving it anyway. It paints a
// sharp, specific scene instead of a vague mood, it lands as a joke
// the moment you hear it, and it is an honest report of a real kind
// of day. The letter K fits the word's hard, punchy sound.
//
// The gate seals /output/entry.txt at exactly 1 character, so the
// program writes the single letter and nothing else — no newline,
// no punctuation, no gloss.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The day, in one letter.
const LETTER = "K";
const HIDDEN_WORD = "Karaoke";

function isSingleLetter(value: string): boolean {
  return /^[A-Z]$/.test(value);
}

function writeEntry(letter: string, outDir: string): void {
  if (!isSingleLetter(letter)) {
    throw new Error(`entry must be exactly one letter A-Z, got: ${JSON.stringify(letter)}`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(LETTER, outDir);
console.log(`ok: entry.txt is 1 character: ${LETTER} (${HIDDEN_WORD})`);
