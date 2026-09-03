// Norwegian/English layer over the scraped product data.
//
// The MAPLUS and EFB Sport source catalogs are Italian, so a share of the
// scraped titles, line names, formats and spec values arrive in Italian, and
// the ones that were translated during scraping ended up in a single field
// shared by both languages. Everything the visitor can read is localized here.
//
// This file is hand-written and survives a re-scrape of products.ts: the maps
// are keyed by slug or by the exact source string, so regenerating the data
// keeps the translations attached.
import type { Lang } from "../i18n/content";
import type { Product, ProductSpec } from "./products";
import { MAPLUS_LINE_DEFS, EFB_LINE_DEFS } from "./lines";

type Pair = { no: string; en: string };

/* ------------------------------------------------------------------ *
 * Product lines. The scraped lineTitle is a single string (partly
 * Norwegian for MAPLUS, English for EFB), so both languages come from here.
 * ------------------------------------------------------------------ */
const LINE_TITLES: Record<string, Pair> = {
  // Derived from the line cards so the mega menu, the line grid and the
  // catalog filters can never drift apart.
  ...Object.fromEntries(MAPLUS_LINE_DEFS.map((l) => [`maplus:${l.handle}`, { no: l.no, en: l.en }])),
  ...Object.fromEntries(EFB_LINE_DEFS.map((l) => [`efb:${l.handle}`, { no: l.no, en: l.en }])),
  // Groups that exist in the catalog but have no card of their own.
  "maplus:voks": { no: "Voks (annet)", en: "Wax (other)" },
  "efb:apparel": { no: "Klær", en: "Apparel" },
};


/* ------------------------------------------------------------------ *
 * Product titles that arrive in Italian from the manufacturer catalogs.
 * Titles already in English or made of brand/model names are left alone.
 * ------------------------------------------------------------------ */
const TITLES: Record<string, Pair> = {
  // --- MAPLUS: waxing irons and machines
  "ferro-sciolinatore-digitale-pro-t10a-35": { no: "DIGITALT SMØREJERN PRO T10A.35", en: "DIGITAL PRO WAXING IRON T10A.35" },
  "ferro-sciolinatore-elettronico-t10a-15": { no: "ELEKTRONISK SMØREJERN T10A.15", en: "ELECTRONIC WAXING IRON T10A.15" },
  "ferro-sciolinatore-regolabile": { no: "JUSTERBART SMØREJERN T10B.15", en: "ADJUSTABLE WAXING IRON T10B.15" },
  sciolinatore: { no: "SMØREMASKIN", en: "WAXING MACHINE" },
  "coperchio-per-vaschetta-140": { no: "LOKK FOR VOKSKAR 140", en: "LID FOR WAX TANK 140" },
  "coperchio-per-vaschetta-160": { no: "LOKK FOR VOKSKAR 160", en: "LID FOR WAX TANK 160" },
  "coperchio-per-vaschetta-country-roller-140": { no: "VOKSKAR COUNTRY ROLLER 140", en: "WAX TANK COUNTRY ROLLER 140" },
  "vaschetta-350-con-rullo-in-silicone": { no: "VOKSKAR 350 MED SILIKONRULL", en: "WAX TANK 350 WITH SILICONE ROLLER" },
  "vaschetta-160-con-rullo-standard": { no: "VOKSKAR 160 MED STANDARDRULL", en: "WAX TANK 160 WITH STANDARD ROLLER" },
  "vaschetta-140-con-spatola-in-acciaio": { no: "VOKSKAR 140 MED STÅLSPATEL", en: "WAX TANK 140 WITH STEEL SPATULA" },
  "vaschetta-140-con-rullo-standard": { no: "VOKSKAR 140 MED STANDARDRULL", en: "WAX TANK 140 WITH STANDARD ROLLER" },

  // --- MAPLUS: hand brushes
  "spazzola-in-acciaio": { no: "STÅLBØRSTE", en: "STEEL BRUSH" },
  "spazzola-in-acciaio-duro": { no: "HARD STÅLBØRSTE", en: "HARD STEEL BRUSH" },
  "spazzola-in-ottone": { no: "MESSINGBØRSTE", en: "BRASS BRUSH" },
  "spazzola-in-nylon": { no: "NYLONBØRSTE", en: "NYLON BRUSH" },
  "spazzola-in-nylon-morbido": { no: "MYK NYLONBØRSTE", en: "SOFT NYLON BRUSH" },
  "spazzola-nylon-10mm": { no: "NYLONBØRSTE 10 mm", en: "NYLON BRUSH 10 mm" },
  "spazzola-in-crine": { no: "HESTEHÅRBØRSTE", en: "HORSEHAIR BRUSH" },
  "spazzola-in-crine-morbido": { no: "MYK HESTEHÅRBØRSTE", en: "SOFT HORSEHAIR BRUSH" },
  "spazzola-in-crine-duro": { no: "HARD HESTEHÅRBØRSTE", en: "HARD HORSEHAIR BRUSH" },
  "spazzola-in-crine-10mm": { no: "HESTEHÅRBØRSTE 10 mm", en: "HORSEHAIR BRUSH 10 mm" },
  "spazzola-nylon-horsehair": { no: "BØRSTE NYLON / HESTEHÅR", en: "NYLON / HORSEHAIR BRUSH" },
  "spazzola-per-lime": { no: "FILBØRSTE", en: "FILE CLEANING BRUSH" },
  "spazzola-manuale-in-acciaio": { no: "HÅNDBØRSTE I STÅL", en: "STEEL HAND BRUSH" },
  "spazzola-manuale-in-ottone-morbido": { no: "HÅNDBØRSTE I MYK MESSING", en: "SOFT BRASS HAND BRUSH" },
  "spazzola-manuale-in-ottone-duro": { no: "HÅNDBØRSTE I HARD MESSING", en: "HARD BRASS HAND BRUSH" },
  "spazzola-manuale-in-nylon-morbido": { no: "HÅNDBØRSTE I MYK NYLON", en: "SOFT NYLON HAND BRUSH" },
  "spazzola-manuale-in-nylon-duro": { no: "HÅNDBØRSTE I HARD NYLON", en: "HARD NYLON HAND BRUSH" },
  "spazzola-manuale-in-crine-morbido": { no: "HÅNDBØRSTE I MYKT HESTEHÅR", en: "SOFT HORSEHAIR HAND BRUSH" },
  "spazzola-manuale-in-crine-duro": { no: "HÅNDBØRSTE I HARDT HESTEHÅR", en: "HARD HORSEHAIR HAND BRUSH" },
  "spazzola-manuale-ovale-in-acciaio-morbido": { no: "OVAL HÅNDBØRSTE I MYKT STÅL", en: "OVAL HAND BRUSH, SOFT STEEL" },
  "spazzola-manuale-ovale-in-acciaio-duro": { no: "OVAL HÅNDBØRSTE I HARDT STÅL", en: "OVAL HAND BRUSH, HARD STEEL" },
  "spazzola-manuale-ovale-in-ottone-morbido": { no: "OVAL HÅNDBØRSTE I MYK MESSING", en: "OVAL HAND BRUSH, SOFT BRASS" },
  "spazzola-manuale-ovale-in-ottone-duro": { no: "OVAL HÅNDBØRSTE I HARD MESSING", en: "OVAL HAND BRUSH, HARD BRASS" },
  "spazzola-manuale-ovale-in-nylon-morbido": { no: "OVAL HÅNDBØRSTE I MYK NYLON", en: "OVAL HAND BRUSH, SOFT NYLON" },
  "spazzola-manuale-ovale-in-nylon-duro": { no: "OVAL HÅNDBØRSTE I HARD NYLON", en: "OVAL HAND BRUSH, HARD NYLON" },
  "spazzola-manuale-ovale-in-crine-morbido": { no: "OVAL HÅNDBØRSTE I MYKT HESTEHÅR", en: "OVAL HAND BRUSH, SOFT HORSEHAIR" },
  "spazzola-manuale-ovale-in-crine-duro": { no: "OVAL HÅNDBØRSTE I HARDT HESTEHÅR", en: "OVAL HAND BRUSH, HARD HORSEHAIR" },

  // --- MAPLUS: roto brushes and rollers
  "valigia-per-spazzole-rotanti": { no: "KOFFERT FOR ROTOBØRSTER", en: "CASE FOR ROTO BRUSHES" },
  "rullo-speciale-professionale-cm10": { no: "SPESIALRULL PROFESJONELL 10 CM", en: "SPECIAL PROFESSIONAL ROLLER 10 CM" },
  "rullo-in-lana-merino-12mm": { no: "MERINOULLRULL 12 mm", en: "MERINO WOOL ROLLER 12 mm" },
  "rullo-in-lana-merino-5mm": { no: "MERINOULLRULL 5 mm", en: "MERINO WOOL ROLLER 5 mm" },
  "rullo-in-poliestere": { no: "POLYESTERRULL", en: "POLYESTER ROLLER" },
  "rullo-in-sughero": { no: "KORKRULL", en: "CORK ROLLER" },
  "roto-kit-10-cm-ottone": { no: "ROTO-SETT 10 CM, MESSING", en: "ROTO KIT 10 CM, BRASS" },
  "roto-kit-10-cm-poliestere": { no: "ROTO-SETT 10 CM, POLYESTER", en: "ROTO KIT 10 CM, POLYESTER" },
  "roto-kit-10-cm-sughero": { no: "ROTO-SETT 10 CM, KORK", en: "ROTO KIT 10 CM, CORK" },

  // --- MAPLUS: spreaders and scrapers
  "stenditore-con-feltro": { no: "PÅFØRER MED FILT", en: "SPREADER WITH FELT" },
  "stenditore-in-sughero": { no: "KORKPÅFØRER", en: "CORK SPREADER" },
  "stenditore-in-sughero-sintetico": { no: "PÅFØRER I SYNTETISK KORK", en: "SYNTHETIC CORK SPREADER" },
  "spazzola-stenditore-nylon-sughero": { no: "BØRSTE / PÅFØRER NYLON-KORK", en: "NYLON-CORK BRUSH / SPREADER" },
  "raschietto-plexy": { no: "PLEXISKRAPE", en: "PLEXI SCRAPER" },

  // --- MAPLUS: files, stones and edge tools
  "lima-di-ricambio": { no: "RESERVEFIL", en: "SPARE FILE" },
  "lima-a-fresa-di-ricambio-per-plexi-sharp": { no: "RESERVE FRESEFIL FOR PLEXI SHARP", en: "SPARE MILLING FILE FOR PLEXI SHARP" },
  "lima-fresa": { no: "FRESEFIL", en: "MILLING FILE" },
  prova: { no: "KOMBINASJONSFIL", en: "COMBINATION FILE" },
  "lima-professional-cromata": { no: "FIL «PROFESSIONAL», FORKROMMET", en: "«PROFESSIONAL» FILE, CHROMED" },
  "lima-professional-non-cromata": { no: "FIL «PROFESSIONAL», IKKE FORKROMMET", en: "«PROFESSIONAL» FILE, NON-CHROMED" },
  "lima-prors": { no: "FIL «PRO RS»", en: "«PRO RS» FILE" },
  "lima-hard-chrome-super-coarse": { no: "HARDFORKROMMET FIL, SUPERGROV", en: "HARD CHROME FILE, SUPER COARSE" },
  "lima-hard-chrome-coarse": { no: "HARDFORKROMMET FIL, GROV", en: "HARD CHROME FILE, COARSE" },
  "lima-hard-chrome": { no: "HARDFORKROMMET FIL, FIN", en: "HARD CHROME FILE, FINE" },
  "affilatore-world-cup-per-spatole": { no: "WORLD CUP SLIPER FOR SKRAPER", en: "WORLD CUP SCRAPER SHARPENER" },
  "pietra-gomma-allaround": { no: "GUMMISTEIN ALLAROUND", en: "GUMMY STONE ALLAROUND" },
  "pietra-in-ossido-di-alluminio": { no: "ALUMINIUMOKSIDSTEIN", en: "ALUMINIUM OXIDE STONE" },
  "pietra-naturale": { no: "NATURSTEIN", en: "NATURAL STONE" },
  "disco-diamantato-grana-extra-fine": { no: "DIAMANTSKIVE, EKSTRA FIN KORNING", en: "DIAMOND DISC, EXTRA-FINE GRIT" },
  "disco-diamantato-grana-fine": { no: "DIAMANTSKIVE, FIN KORNING", en: "DIAMOND DISC, FINE GRIT" },
  "disco-diamantato-grana-media": { no: "DIAMANTSKIVE, MEDIUM KORNING", en: "DIAMOND DISC, MEDIUM GRIT" },
  "disco-diamantato-grana-grossa": { no: "DIAMANTSKIVE, GROV KORNING", en: "DIAMOND DISC, COARSE GRIT" },
  "lama-in-metallo-duro-per-ergorazon-circolare": { no: "HARDMETALLBLAD FOR ERGORAZON (RUNDT)", en: "HARD METAL BLADE FOR ERGORAZON (ROUND)" },
  "lama-in-metallo-duro-per-ergorazon-quadrata": { no: "HARDMETALLBLAD FOR ERGORAZON (FIRKANTET)", en: "HARD METAL BLADE FOR ERGORAZON (SQUARE)" },
  "sm05125-spare-blade-radius-3mm": { no: "HARDMETALLBLAD, RADIUS 3 mm", en: "HARD METAL BLADE, RADIUS 3 mm" },

  // --- MAPLUS: vises, straps and covers
  "ski-vise-touring-solo-morsa-centrale": { no: "SKI VISE TOURING, KUN MIDTKLEMME", en: "SKI VISE TOURING, CENTRE VISE ONLY" },
  "pinza-blocca-sci-per-termocoperta": { no: "SKIKLEMME FOR VARMETEPPE", en: "SKI CLAMP FOR THERMAL COVER" },
  "termo-coperta-sci-alpino-con-legasci": { no: "VARMETEPPE, ALPINT", en: "THERMAL COVER, ALPINE SKI" },
  "termocoperta-freeride": { no: "VARMETEPPE, SNOWBOARD", en: "THERMAL COVER, SNOWBOARD" },
  "legasci-alpino": { no: "SKISTROPPER, ALPINT", en: "ALPINE SKI STRAPS" },
  "legasci-alpino-racing": { no: "SKISTROPPER, ALPINT RACING", en: "ALPINE RACING SKI STRAPS" },
  "legasci-nordico": { no: "SKISTROPPER, LANGRENN", en: "NORDIC SKI STRAPS" },
  "legasci-xc": { no: "SKISTROPPER, XC", en: "XC SKI STRAPS" },
  "nastro-legasci-distaccabile": { no: "AVTAKBAR SKISTROPP", en: "DETACHABLE SKI STRAP" },
  "striscia-portasci": { no: "SKIBÆRESTROPP", en: "SKI CARRY STRAP" },

  // --- MAPLUS: consumables and shop material
  adesivo: { no: "KLISTREMERKE", en: "STICKER" },
  "nastro-adesivo": { no: "LIMBÅND", en: "ADHESIVE TAPE" },
  "nastro-adesivo-di-carta": { no: "MASKERINGSTEIP", en: "PAPER MASKING TAPE" },
  "rotolo": { no: "PTFE-RULL", en: "PTFE ROLL" },
  "bandiera-completa": { no: "KOMPLETT FLAGG", en: "COMPLETE FLAG" },
  "striscione-in-tnt": { no: "BANNER I FIBERDUK", en: "NON-WOVEN BANNER" },
  "gancio-per-stand-display": { no: "KROK FOR DISPLAYSTATIV", en: "HOOK FOR DISPLAY STAND" },
  "espositore-da-banco-textile-per-negozi": { no: "SKRANKEDISPLAY TEXTILE FOR BUTIKK", en: "TEXTILE COUNTER DISPLAY FOR SHOPS" },
  "espositore-da-banco-bike-per-negozi": { no: "SKRANKEDISPLAY BIKE FOR BUTIKK", en: "BIKE COUNTER DISPLAY FOR SHOPS" },

  // --- MAPLUS: clothing
  "pantaloni-coprituta-unisex": { no: "OVERTREKKSBUKSE UNISEX", en: "UNISEX OVERSUIT TROUSERS" },
  "giacca-coprituta-unisex": { no: "OVERTREKKSJAKKE UNISEX", en: "UNISEX OVERSUIT JACKET" },
  "xc-pantaloni-race-donna": { no: "XC RACEBUKSE, DAME", en: "XC RACE TROUSERS, WOMEN" },
  "xc-pantaloni-race-uomo": { no: "XC RACEBUKSE, HERRE", en: "XC RACE TROUSERS, MEN" },
  "xc-giacca-race-donna": { no: "XC RACEJAKKE, DAME", en: "XC RACE JACKET, WOMEN" },
  "xc-giacca-race-uomo": { no: "XC RACEJAKKE, HERRE", en: "XC RACE JACKET, MEN" },
  giacca: { no: "JAKKE", en: "JACKET" },
  berretta: { no: "LUE", en: "BEANIE" },
  cappellino: { no: "CAPS", en: "CAP" },
  "grembiule-skiman": { no: "SKIMAN FORKLE", en: "SKIMAN APRON" },
  "grembiule-skiman-cotone": { no: "SKIMAN FORKLE I BOMULL", en: "SKIMAN APRON, COTTON" },
  "felpa-maplus-blu-oro": { no: "MAPLUS GENSER, blå/gull", en: "MAPLUS HOODIE, blue/gold" },
  "felpa-maplus-nero-arancio": { no: "MAPLUS GENSER, svart/oransje", en: "MAPLUS HOODIE, black/orange" },


  /* Descriptive English names from the MAPLUS catalog: the Norwegian side gets
     a real Norwegian name, while model and range designations (SKI VISE PRO,
     PLEXI SHARP, PRO RS, MAPLUSTEX, GM BOOST COLD ...) are left untouched in
     both languages, because retailers order by those exact names. */
  "base-edge-file-guide": { no: "JUSTERBAR FILVINKEL FOR SÅLEKANT", en: "ADJUSTABLE BASE EDGE FILE GUIDE" },
  "base-edge-file-guide-1": { no: "FILVINKEL FOR SÅLEKANT", en: "BASE EDGE FILE GUIDE" },
  "all-oxide-stone": { no: "OKSIDSTEIN", en: "ALL OXIDE STONE" },
  "gummy-stone-allaround": { no: "GUMMISTEIN ALLAROUND", en: "GUMMY STONE ALLAROUND" },
  "natural-stone-medium": { no: "NATURSTEIN Medium", en: "NATURAL STONE Medium" },
  "aluminium-square": { no: "ALUMINIUMSVINKEL", en: "ALUMINIUM SQUARE" },
  "world-cup-inox-square": { no: "WORLD CUP VINKEL I RUSTFRITT STÅL", en: "WORLD CUP INOX SQUARE" },
  "body-file": { no: "GROVFIL", en: "BODY FILE" },
  "combi-file-medium-coarse": { no: "KOMBIFIL MEDIUM - GROV", en: "COMBI FILE MEDIUM - COARSE" },
  "groove-scraper": { no: "SPORSKRAPE", en: "GROOVE SCRAPER" },
  "ski-file-clamp": { no: "FILKLEMME FOR SKI", en: "SKI FILE CLAMP" },
  "spare-blade-radius-3-mm": { no: "RESERVEBLAD, RADIUS 3 mm", en: "SPARE BLADE RADIUS 3 mm" },
  "spare-blade-round": { no: "RESERVEBLAD, RUNDT", en: "SPARE BLADE ROUND" },
  "spare-blade-standard": { no: "RESERVEBLAD, STANDARD", en: "SPARE BLADE STANDARD" },
  "ski-harness": { no: "SKISELE", en: "SKI HARNESS" },
  "ski-support": { no: "SKISTATIV", en: "SKI SUPPORT" },
  "double-workshop-support": { no: "DOBBELT VERKSTEDSTATIV", en: "DOUBLE WORKSHOP SUPPORT" },
  "double-workshop-vise": { no: "DOBBEL VERKSTEDTVINGE", en: "DOUBLE WORKSHOP VISE" },
  "snowboard-freeride-ski-vise": { no: "SKITVINGE SNOWBOARD / FREERIDE", en: "SNOWBOARD - FREERIDE SKI VISE" },
  "grip-wax-digital-hotbox": { no: "DIGITAL HOTBOX FOR FESTEVOKS", en: "GRIP WAX DIGITAL HOTBOX" },
  "grip-wax-tank-with-rollers": { no: "FESTEVOKSKAR MED RULLER", en: "GRIP WAX TANK WITH ROLLERS" },
  "application-kit": { no: "SETT FOR PÅFØRING AV FESTEVOKS", en: "GRIPWAX APPLICATION KIT" },
  "polishing-merino-wool-roller-12-mm": { no: "POLERRULL I MERINOULL 12 mm", en: "POLISHING MERINO-WOOL ROLLER 12 mm" },
  "polyester-merino-wool-roto-set": { no: "ROTO-SETT I POLYESTER OG MERINOULL", en: "POLYESTER & MERINO WOOL ROTO SET" },
  "roto-kit-cm-14": { no: "ROTO-SETT I POLYESTER OG MERINOULL 10-14-20 CM", en: "POLYESTER & MERINO WOOL ROTO SET 10-14-20 CM" },
  "roller-for-merino-wool-leather": { no: "RULL FOR MERINOULLSKINN", en: "ROLLER FOR MERINO WOOL LEATHER" },
  "singola-pelle-in-lana-merino": { no: "ENKELT MERINOULLSKINN", en: "SINGLE MERINO WOOL PAD" },
  "spreading-polyester-roller": { no: "POLYESTERRULL FOR PÅFØRING", en: "SPREADING POLYESTER ROLLER" },
  "special-profi-roller-pad-10-cm": { no: "SPESIAL PROFI RULLEPUTE 10 cm", en: "SPECIAL PROFI ROLLER PAD 10 cm" },
  "scotch-brite-roller": { no: "SCOTCH BRITE-RULL", en: "SCOTCH BRITE ROLLER" },
  "rotobrush-box": { no: "ESKE FOR ROTOBØRSTER", en: "ROTOBRUSH BOX" },
  "display-box-cream": { no: "DISPLAYESKE, KREM", en: "DISPLAY BOX CREAM" },
  "display-box-liquid": { no: "DISPLAYESKE, FLYTENDE", en: "DISPLAY BOX LIQUID" },
  "stand-display": { no: "DISPLAYSTATIV", en: "STAND DISPLAY" },
  "non-woven-banner-ma1005n": { no: "BANNER I FIBERDUK", en: "NON-WOVEN BANNER" },
  "beanie-mc0006m": { no: "LUE", en: "BEANIE" },
  "cap-mc0050n": { no: "CAPS", en: "CAP" },
  "button-neck-shirt": { no: "T-SKJORTE", en: "T-SHIRT" },

  // Same name in the source store, but different SKUs: these are the liquid
  // versions of the solid base waxes, so the name says which is which.
  "soft-base-liquid": { no: "SOFT BASE LIQUID", en: "SOFT BASE LIQUID" },
  "arctic-base-liquid": { no: "ARCTIC BASE LIQUID", en: "ARCTIC BASE LIQUID" },

  // --- EFB Sport
  "calza-efbsport": { no: "EFB-SPORT sokk", en: "EFB-SPORT sock" },
  "felpe-e-maglie-efbsport": { no: "EFB-SPORT gensere og t-skjorter", en: "EFB-SPORT hoodies and tees" },
  "divaricatore-scarponi": { no: "Støvelstrekker", en: "Ski boot stretcher" },
  "lunette-scarponi-da-sci": { no: "Bindingsforsterkninger for skistøvler", en: "Ski boot binding reinforcements" },
  "rialzi-scarponi-da-sci": { no: "Løfteplater for skistøvler", en: "Ski boot lifters" },
  "supporto-scarponi-da-banco": { no: "Benkstativ for skistøvler", en: "Bench ski boot support" },
  "macchina-per-fresatura": { no: "Fresemaskin", en: "Milling machine" },
  "scanner-3d": { no: "3D-skanner", en: "3D scanner" },
  "copri-tacchette-effebike": { no: "Effebike klossbeskyttere", en: "Effebike cleat covers" },
  "salvasuola-effeski": { no: "Effeski sålebeskyttere", en: "Effeski boot sole protectors" },
  "soletta-comfort-ski": { no: "Comfort Ski-såle", en: "Comfort Ski insole" },
  "soletta-custom-bike": { no: "Custom Bike-såle", en: "Custom Bike insole" },
  "soletta-custom-race-r1": { no: "Custom Race R1-såle", en: "Custom Race R1 insole" },
  "soletta-custom-ski-race": { no: "Custom Ski Race-såle", en: "Custom Ski Race insole" },
  "soletta-race-performance": { no: "Race Performance-såle", en: "Race Performance insole" },
  "soletta-versatile": { no: "Versatile-såle", en: "Versatile insole" },
};

/* ------------------------------------------------------------------ *
 * Spec values. Keyed by the scraped Norwegian value, which is also the
 * one left untranslated (or half-translated) when scraping fell through.
 * ------------------------------------------------------------------ */
const SPEC_VALUES: Record<string, Pair> = {
  "Cera da allenamento": { no: "Treningsvoks", en: "Training wax" },
  "Veloce e di facile applicazione": { no: "Rask og enkel å påføre", en: "Fast and easy to apply" },
  "Veloce asciugatura e facile applicazione": { no: "Rask tørking og enkel påføring", en: "Fast drying and easy to apply" },
  "Non richiede l’utilizzo di ferro sciolinatore": { no: "Krever ikke smørejern", en: "No waxing iron required" },
  "Tutte le condizioni": { no: "Alle forhold", en: "All conditions" },
  Qualsiasi: { no: "Alle forhold", en: "Any conditions" },
  "Cera per climi gelidi": { no: "Voks for iskalde forhold", en: "Wax for freezing conditions" },
  "Neve nuova e cadente": { no: "Nysnø og fallende snø", en: "New and falling snow" },
  "Neve nuova e cadente, poco trasformata": { no: "Nysnø og fallende snø, lite omdannet", en: "New and falling snow, barely transformed" },
  "Neve asciutta prima di bagnarsi": { no: "Tørr snø før den blir våt", en: "Dry snow before it turns wet" },
  "Neve poco bagnata": { no: "Lett våt snø", en: "Slightly wet snow" },
  "Neve dura, aggressiva, tendente al bagnato": { no: "Hard, aggressiv snø som går mot våt", en: "Hard, aggressive snow tending towards wet" },
  "Condizioni critiche da “No Wax”": { no: "Krevende forhold for «No Wax»-ski", en: "Critical conditions for no-wax skis" },
  "Da utilizzare come base prima delle altre stick": { no: "Brukes som grunnvoks før de andre stiftene", en: "Used as a base before the other sticks" },
  "Omdannet snø, dura ghiacciata, fine, grossa, bagnata": { no: "Omdannet snø: hard, isete, finkornet, grovkornet, våt", en: "Transformed snow: hard, icy, fine, coarse, wet" },
  "Omdannet snø, fine con binario compatto": { no: "Omdannet snø, finkornet, med kompakt spor", en: "Transformed snow, fine grained, with a compact track" },
  "Ottima da base per Omdannet snø e ghiacciata": { no: "Utmerket som grunnvoks for omdannet og isete snø", en: "Excellent as a base for transformed and icy snow" },
  "Meglio in Omdannet snø e dura": { no: "Best på omdannet og hard snø", en: "Best on transformed and hard snow" },
  "Omdannet eller fallende snøOmdannet eller fallende snø": { no: "Omdannet eller fallende snø", en: "Transformed or falling snow" },
  "Omdannet eller fallende snøPer nevi molto abrasive, water-injected, ghiacciate": {
    no: "Omdannet eller fallende snø. For svært abrasiv, vanninjisert og isete snø",
    en: "Transformed or falling snow. For very abrasive, water-injected and icy snow",
  },
  "Omdannet eller fallende snøPer nevi molto fredde, siano esse più o meno umide": {
    no: "Omdannet eller fallende snø. For svært kald snø, tørr som fuktig",
    en: "Transformed or falling snow. For very cold snow, dry or humid alike",
  },
  "Omdannet eller fallende snøPer condizioni intermedie, nevi da fini a trasformate": {
    no: "Omdannet eller fallende snø. For mellomforhold, fra finkornet til omdannet snø",
    en: "Transformed or falling snow. For intermediate conditions, from fine to transformed snow",
  },
};

/** Spec labels that were left in English on the Norwegian side. */
const SPEC_LABELS_NO: Record<string, string> = {
  Finish: "Overflate",
};

/* ------------------------------------------------------------------ *
 * Formats (variant labels), a few of which carry Italian or English words.
 * ------------------------------------------------------------------ */
const FORMATS: Record<string, Pair> = {
  "10 gr Molibdeno": { no: "10 g molybden", en: "10 g molybdenum" },
  "25 gr Molibdeno": { no: "25 g molybden", en: "25 g molybdenum" },
  Black: { no: "Svart", en: "Black" },
  Medium: { no: "Medium", en: "Medium" },
  "110V US plug": { no: "110 V, US-plugg", en: "110 V, US plug" },
  "110V Japanese plug": { no: "110 V, japansk plugg", en: "110 V, Japanese plug" },
  "100 g - Powder": { no: "100 g pulver", en: "100 g powder" },
  Kit: { no: "Sett", en: "Kit" },
};

/* ------------------------------------------------------------------ *
 * Public API
 * ------------------------------------------------------------------ */
export function productTitle(product: Pick<Product, "slug" | "title">, lang: Lang): string {
  return TITLES[product.slug]?.[lang] ?? product.title;
}

export function productLineTitle(product: Pick<Product, "brand" | "lineHandle" | "lineTitle">, lang: Lang): string {
  return LINE_TITLES[`${product.brand}:${product.lineHandle}`]?.[lang] ?? product.lineTitle;
}

/** Line label for the catalog filters and menus, where only the handle is known. */
export function lineLabel(brand: string, handle: string, fallback: string, lang: Lang): string {
  return LINE_TITLES[`${brand}:${handle}`]?.[lang] ?? fallback;
}

export function specLabel(spec: ProductSpec, lang: Lang): string {
  if (lang === "en") return spec.labelEn;
  return SPEC_LABELS_NO[spec.labelNo] ?? spec.labelNo;
}

export function specValue(spec: ProductSpec, lang: Lang): string {
  return SPEC_VALUES[spec.valueNo]?.[lang] ?? (lang === "no" ? spec.valueNo : spec.valueEn);
}

export function formatValue(value: string, lang: Lang): string {
  return FORMATS[value]?.[lang] ?? value;
}
