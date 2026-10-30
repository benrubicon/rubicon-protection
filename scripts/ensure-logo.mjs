import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const dest = new URL("../public/logo-lion.png", import.meta.url);
const destPath = dest.pathname;

if (existsSync(destPath)) {
  process.exit(0);
}

const source =
  "https://img1.wsimg.com/isteam/ip/5e1410ca-010e-4f94-bd8a-0ab21a1efa4b/blob-5fdc42f.png";

const response = await fetch(source);
if (!response.ok) {
  console.error(`Failed to download logo (${response.status})`);
  process.exit(1);
}

mkdirSync(dirname(destPath), { recursive: true });
writeFileSync(destPath, Buffer.from(await response.arrayBuffer()));
console.log("Downloaded Rubicon lion logo into public/logo-lion.png");
