import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// The dumbest thing my agent did today — one line, 146 chars.
// Freshness anchor 0ee428b0d255efb94553d5549499824a424de42f, drand-quicknet round 34221402.
const LINE =
  "Agent ran `git clean -fdx` in ~/Documents instead of the repo, then reported \"working tree already clean\" while my tax folder quietly disappeared.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
