import fs from "node:fs";
import path from "node:path";

const variablesPath = path.join(process.cwd(), "src/assets/scss/_variables.scss");
const buttonsStylesPath = path.join(process.cwd(), "src/assets/scss/_buttons.scss");
const iconButtonsStylesPath = path.join(process.cwd(), "src/assets/scss/_icon-buttons.scss");
const source = fs.readFileSync(variablesPath, "utf-8");
const buttonStyles = fs.readFileSync(buttonsStylesPath, "utf-8");
const iconButtonStyles = fs.readFileSync(iconButtonsStylesPath, "utf-8");
const colorRegex = /\$c-([a-z]+)-(\d{3}):\s*(#[0-9a-fA-F]{6});/g;
const networkRegex = /btn-link-([a-z]+)(?:-icon)?/g;
const colorMap = {};
const networks = new Set();
const failures = [];

let match;
while ((match = colorRegex.exec(source)) !== null) {
  const [, name, tone, value] = match;
  if (!colorMap[name]) {
    colorMap[name] = {};
  }
  colorMap[name][tone] = value.toLowerCase();
}

const collectNetworks = (content) => {
  let networkMatch;

  while ((networkMatch = networkRegex.exec(content)) !== null) {
    const [, network] = networkMatch;

    if (network !== "icon") {
      networks.add(network);
    }
  }
};

collectNetworks(buttonStyles);
collectNetworks(iconButtonStyles);

const normalizeHex = (value) => value.replace("#", "");

const toLinear = (channel) => {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
  const normalized = normalizeHex(hex);
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
};

const contrastRatio = (a, b) => {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const brightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  return (brightest + 0.05) / (darkest + 0.05);
};

const white = "#ffffff";
const minimumRatio = 4.5;

console.log("Contrast validation report");
console.log("--------------------------");
console.log(`Networks checked: ${Array.from(networks).sort().join(", ")}`);

if (networks.size === 0) {
  console.error("No share button networks found in SCSS.");
  process.exit(1);
}

const checkContrast = (network, tone, context) => {
  const value = colorMap[network]?.[tone];

  if (!value) {
    failures.push(`Missing token $c-${network}-${tone} for ${context}`);
    return;
  }

  const ratio = contrastRatio(value, white);
  const formattedRatio = ratio.toFixed(2);
  console.log(`${network}-${tone}: ${value} vs white => ${formattedRatio}:1 (${context})`);

  if (ratio < minimumRatio) {
    failures.push(`${network}-${tone} contrast ${formattedRatio}:1 is below ${minimumRatio}:1 (${context})`);
  }
};

for (const network of Array.from(networks).sort()) {
  checkContrast(network, "100", "filled/is-whited default + bordered text");
  checkContrast(network, "200", "filled/is-whited hover + bordered hover");
}

if (failures.length > 0) {
  console.error("\nContrast check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("\nContrast check passed.");
