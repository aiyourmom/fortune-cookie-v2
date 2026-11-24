import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Your future is bright. Your logs are not \u2014 40,000 warnings you have ignored since Tuesday.";

const chars = [...TEXT].length;
if (chars < 1 || chars > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${chars}`);
}
if (/[\n\r]/.test(TEXT)) {
  throw new Error("fortune must be a single line");
}
if (TEXT.trim().length === 0) {
  throw new Error("fortune must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
