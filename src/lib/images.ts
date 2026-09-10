// Resolves the legacy "/images/..." paths used throughout the data files to the
// build-processed assets in src/assets/images.
//
// Keeping the string paths as the key means products.ts, lines.ts and the
// per-line photo maps never had to change, and a re-scrape of the product data
// still lines up. Drop a new photo into src/assets/images and it is picked up
// automatically, already responsive.
import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const BY_PATH = new Map<string, ImageMetadata>();
for (const [file, mod] of Object.entries(modules)) {
  BY_PATH.set(file.replace("/src/assets/images", "/images"), mod.default);
}

/** The processed asset for a "/images/..." path, or null for remote/unknown sources. */
export function localImage(path: string): ImageMetadata | null {
  return BY_PATH.get(path) ?? null;
}

/**
 * Candidate widths for a source image: the usual breakpoints, never upscaled
 * past what the original actually holds.
 */
export function widthsFor(asset: ImageMetadata, max?: number): number[] {
  const ceiling = Math.min(asset.width, max ?? asset.width);
  const steps = [320, 480, 640, 800, 1024, 1280, 1600, 2000, 2400].filter((w) => w < ceiling);
  return [...steps, ceiling];
}
