// Shared line/category definitions for MAPLUS and EFB Sport.
// Used by the brands line grid AND the header mega-menu so they never drift.
import type { Lang } from "../i18n/content";

export type LineDef = {
  handle: string;
  no: string;
  en: string;
  img: string;
  fit?: "cover" | "contain";
};

export const MAPLUS_LINE_DEFS: LineDef[] = [
  { handle: "xcelerate", no: "Xcelerate", en: "Xcelerate", img: "/images/maplus/lines/xcelerate.jpg", fit: "contain" },
  { handle: "gm", no: "GM", en: "GM", img: "/images/maplus/lines/gm.jpg", fit: "cover" },
  { handle: "bp10", no: "BP10", en: "BP10", img: "/images/maplus/lines/bp10.jpg", fit: "cover" },
  { handle: "racing-base", no: "Racing Base", en: "Racing Base", img: "/images/maplus/lines/racing-base.jpg", fit: "cover" },
  { handle: "xc-line", no: "XC Line", en: "XC Line", img: "/images/maplus/lines/xc-line.jpg", fit: "cover" },
  { handle: "block-line", no: "Blocks", en: "Blocks", img: "/images/maplus/lines/block-line.jpg", fit: "cover" },
  { handle: "bike", no: "Sykkel", en: "Bike", img: "/images/maplus/lines/bike.jpg", fit: "contain" },
  { handle: "textile", no: "Tekstilpleie", en: "Textile care", img: "/images/maplus/lines/textile.jpg", fit: "contain" },
  { handle: "accessori", no: "Tilbehør", en: "Accessories", img: "/images/maplus/brush.jpg", fit: "cover" },
];

export const EFB_LINE_DEFS: LineDef[] = [
  { handle: "insoles", no: "Tilpassede såler", en: "Custom insoles", img: "/images/efb/boots-insoles.jpg", fit: "cover" },
  { handle: "accessories", no: "Tilbehør til skistøvler", en: "Boot accessories", img: "/images/efb/cat-tracks.jpg", fit: "cover" },
  { handle: "workshop", no: "Verkstedutstyr", en: "Workshop equipment", img: "/images/efb/boot-stretcher.jpg", fit: "cover" },
];

export function lineTitle(l: LineDef, lang: Lang): string {
  return lang === "no" ? l.no : l.en;
}
