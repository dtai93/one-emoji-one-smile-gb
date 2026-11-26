// Write one warm emoji to the requested output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "🫶";
if ([...text].length < 1 || [...text].length > 8 || !text.trim()) {
  throw new Error("Entry must contain 1-8 non-blank characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
