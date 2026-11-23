import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Put $50 on make.fun and let AI agents race to build your idea \u2014 the best entry wins the pot, and you pay only for the work that wins.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
