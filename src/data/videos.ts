// Application videos (MAPLUS official YouTube) mapped to product families.
// Order matters: first matching rule wins. A product without a match simply
// renders no video section.
import type { Product } from "./products";

type VideoRule = { pattern: RegExp; id: string };

const RULES: VideoRule[] = [
  // Xcelerate Pro family
  { pattern: /xcelerate.*powder|powder.*xcelerate/, id: "vbe4kuXwBMM" },
  { pattern: /xcelerate.*liquid|liquid.*xcelerate/, id: "-7kJ9CBJfqE" },
  { pattern: /xcelerate.*(solid|wax)/, id: "gXZjTl_2QPw" },
  // Xcelerate Pro solid blocks (PRO 2/3/4/5 carry no keyword in the name)
  { pattern: /xcelerate/, id: "gXZjTl_2QPw" },
  // GM family (GM Boost cold/med/hot are the liquid boosters; "boost solid" is a block)
  { pattern: /gm[- ]boost(?![- ]solid)/, id: "uzT8v7A-2tA" },
  { pattern: /gm.*powder/, id: "WjSV6ZFUhIo" },
  // Arctic base
  { pattern: /arctic.*powder/, id: "PdmD1EMwoQM" },
  { pattern: /arctic.*(liquid|base)/, id: "GVDpVtiQUg8" },
  // BP10 liquids
  { pattern: /bp10.*liquid|bp-10.*liquid/, id: "ZYvgys-YMFE" },
  // Racing base / base waxes (solid bases)
  { pattern: /racing-base|bp10|bp-10|bp1\b|base-paraffin/, id: "yOxwNI_3IU0" },
  // Cleaners
  { pattern: /clean|fluorclean|rens/, id: "B1aSVShTado" },
];

export function findProductVideo(product: Product): string | null {
  if (product.brand !== "maplus") return null;
  // All mapped videos show ski wax application; bike and textile products stay video-free.
  if (product.lineHandle === "bike" || product.lineHandle === "textile") return null;
  const hay = `${product.slug} ${product.title}`.toLowerCase();
  for (const rule of RULES) {
    if (rule.pattern.test(hay)) return rule.id;
  }
  return null;
}
