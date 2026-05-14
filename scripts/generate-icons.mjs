import sharp from "sharp";
import { readFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const iconsDir = join(publicDir, "icons");

mkdirSync(iconsDir, { recursive: true });

const svgContent = readFileSync(join(iconsDir, "icon.svg"));

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  const outputPath = name.startsWith("favicon") || name.startsWith("apple")
    ? join(publicDir, name)
    : join(iconsDir, name);

  await sharp(svgContent)
    .resize(size, size)
    .png()
    .toFile(outputPath);

  console.log(`Generated ${name} (${size}x${size})`);
}

// Maskable icon (with padding for safe zone)
const maskableSize = 512;
const padding = Math.round(maskableSize * 0.1);
const innerSize = maskableSize - padding * 2;

const innerIcon = await sharp(svgContent)
  .resize(innerSize, innerSize)
  .png()
  .toBuffer();

await sharp({
  create: {
    width: maskableSize,
    height: maskableSize,
    channels: 4,
    background: { r: 15, g: 28, b: 46, alpha: 1 },
  },
})
  .composite([{ input: innerIcon, left: padding, top: padding }])
  .png()
  .toFile(join(iconsDir, "icon-maskable-512.png"));

console.log("Generated icon-maskable-512.png (512x512, maskable)");

// OG image (1200x630) with logo
const logoPath = join(publicDir, "images", "logo-bastide.png");
const facadePath = join(publicDir, "images", "facade-bastide.jpg");

const ogWidth = 1200;
const ogHeight = 630;

const facadeBuffer = await sharp(facadePath)
  .resize(ogWidth, ogHeight, { fit: "cover" })
  .modulate({ brightness: 0.4 })
  .toBuffer();

const logoBuffer = await sharp(logoPath)
  .resize({ width: 500 })
  .toBuffer();

const logoMeta = await sharp(logoBuffer).metadata();

await sharp(facadeBuffer)
  .composite([
    {
      input: Buffer.from(`
        <svg width="${ogWidth}" height="${ogHeight}">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#0f1c2e" stop-opacity="0.3"/>
              <stop offset="1" stop-color="#0f1c2e" stop-opacity="0.8"/>
            </linearGradient>
          </defs>
          <rect width="${ogWidth}" height="${ogHeight}" fill="url(#g)"/>
        </svg>
      `),
      blend: "over",
    },
    {
      input: logoBuffer,
      left: Math.round((ogWidth - (logoMeta.width || 500)) / 2),
      top: Math.round((ogHeight - (logoMeta.height || 167)) / 2 - 40),
    },
    {
      input: Buffer.from(`
        <svg width="${ogWidth}" height="40">
          <text x="${ogWidth / 2}" y="30" text-anchor="middle"
            font-family="Georgia, serif" font-size="22" fill="#d4b884"
            letter-spacing="8">VILLEFRANCHE-SUR-MER</text>
        </svg>
      `),
      left: 0,
      top: Math.round((ogHeight + (logoMeta.height || 167)) / 2),
    },
  ])
  .png()
  .toFile(join(publicDir, "images", "og-image.png"));

console.log("Generated og-image.png (1200x630)");

// Generate ICO-like favicon (just use 32x32 PNG as favicon.ico replacement)
await sharp(svgContent)
  .resize(48, 48)
  .png()
  .toFile(join(publicDir, "favicon.png"));

console.log("Generated favicon.png (48x48)");

console.log("\nAll icons generated successfully!");
