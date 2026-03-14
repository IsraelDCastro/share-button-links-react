import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const rootDir = process.cwd();
const configPath = path.join(rootDir, "bundle-size.config.json");
const shouldCheckThresholds = process.argv.includes("--check");

if (!fs.existsSync(configPath)) {
  console.error("Missing bundle-size.config.json");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
const failures = [];

const formatKb = (bytes) => (bytes / 1024).toFixed(2);

console.log("Bundle size report");
console.log("-------------------");

for (const [filePath, thresholds] of Object.entries(config.files)) {
  const absolutePath = path.join(rootDir, filePath);

  if (!fs.existsSync(absolutePath)) {
    failures.push(`Missing build artifact: ${filePath}`);
    continue;
  }

  const fileContent = fs.readFileSync(absolutePath);
  const rawBytes = fileContent.byteLength;
  const gzipBytes = zlib.gzipSync(fileContent).byteLength;

  const maxRawBytes = Math.round(thresholds.maxRawKb * 1024);
  const maxGzipBytes = Math.round(thresholds.maxGzipKb * 1024);

  console.log(
    `${filePath}
  raw:  ${formatKb(rawBytes)} kB / ${thresholds.maxRawKb.toFixed(2)} kB
  gzip: ${formatKb(gzipBytes)} kB / ${thresholds.maxGzipKb.toFixed(2)} kB`
  );

  if (shouldCheckThresholds) {
    if (rawBytes > maxRawBytes) {
      failures.push(`${filePath}: raw size ${formatKb(rawBytes)} kB exceeds ${thresholds.maxRawKb.toFixed(2)} kB`);
    }

    if (gzipBytes > maxGzipBytes) {
      failures.push(`${filePath}: gzip size ${formatKb(gzipBytes)} kB exceeds ${thresholds.maxGzipKb.toFixed(2)} kB`);
    }
  }
}

if (shouldCheckThresholds && failures.length > 0) {
  console.error("\nBundle size check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

if (shouldCheckThresholds) {
  console.log("\nBundle size check passed.");
}
