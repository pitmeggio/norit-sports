// Auto-generated from MAPLUS Shopify API + product pages + EFB Sport scrape (2026-07-01).
// Specs are factual product data (temperature, snow type, size). Regenerate via _scrape/ scripts.

export type ProductBrand = "maplus" | "efb";

export type ProductSpec = { labelNo: string; labelEn: string; valueNo: string; valueEn: string };

export type Product = {
  brand: ProductBrand;
  slug: string;
  title: string;
  lineHandle: string;
  lineTitle: string;
  image: string | null;
  desc: string;
  tags: string[];
  productType: string;
  specs: ProductSpec[];
  sku: string[];
  format: string[];
};

export type ProductLine = { handle: string; title: string };

export const MAPLUS_LINES: ProductLine[] = [{"handle": "xcelerate", "title": "Xcelerate"}, {"handle": "gm", "title": "GM"}, {"handle": "bp10", "title": "BP10"}, {"handle": "racing-base", "title": "Racing Base"}, {"handle": "xc-line", "title": "XC Line"}, {"handle": "block-line", "title": "Block Line"}, {"handle": "voks", "title": "Voks (annet)"}, {"handle": "accessori", "title": "Tilbehør"}, {"handle": "bike", "title": "Sykkel"}, {"handle": "textile", "title": "Tekstilpleie"}];

export const EFB_LINES: ProductLine[] = [{"handle": "apparel", "title": "Apparel"}, {"handle": "accessories", "title": "Boot accessories"}, {"handle": "workshop", "title": "Workshop equipment"}, {"handle": "insoles", "title": "Insoles"}];

export const PRODUCTS: Product[] = [
  {
    "brand": "maplus",
    "slug": "espositore-da-banco-textile-per-negozi",
    "title": "Espositore da banco Textile per negozi",
    "lineHandle": "textile",
    "lineTitle": "Tekstilpleie",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DISPLAY_TEXTILE_MD0003.png?v=1775036886",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [
      "MD0003"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "espositore-da-banco-bike-per-negozi",
    "title": "Espositore da banco Bike per negozi",
    "lineHandle": "bike",
    "lineTitle": "Sykkel",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DISPLAY_BIKE_MD0003.png?v=1775036886",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [
      "MD0003"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "maplus-bike-frame-protect",
    "title": "Maplus Bike Frame Protect",
    "lineHandle": "bike",
    "lineTitle": "Sykkel",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BIKE_FRAME_PROTECT_MBK006_34889aa9-65a9-480e-9f3c-5b0b48a99549.png?v=1775053274",
    "desc": "",
    "tags": [
      "Bike",
      "frame",
      "lucidante",
      "protect",
      "protettivo",
      "telaio"
    ],
    "productType": "Bike Frame",
    "specs": [],
    "sku": [
      "MBK006"
    ],
    "format": [
      "200 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "maplus-bike-frame-cleaner",
    "title": "Maplus Bike Frame Cleaner",
    "lineHandle": "bike",
    "lineTitle": "Sykkel",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BIKE_FRAME_CLEANER_MBK001_a4b47636-26f0-42bc-b980-a143cac49046.png?v=1775053246",
    "desc": "",
    "tags": [
      "Bike",
      "cleaner",
      "frame",
      "pulitore",
      "telaio"
    ],
    "productType": "Bike Frame",
    "specs": [],
    "sku": [
      "MBK001"
    ],
    "format": [
      "500 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "maplus-bike-chain-cleaner",
    "title": "Maplus Bike Chain Cleaner",
    "lineHandle": "bike",
    "lineTitle": "Sykkel",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BIKE_CHAIN_CLEANER_MBK005_a4294fbb-4fe0-4d27-a8b4-5d4c1ad0990f.png?v=1775053218",
    "desc": "",
    "tags": [
      "Bike",
      "catena",
      "chain",
      "cleaner",
      "pulitore"
    ],
    "productType": "Bike Chain",
    "specs": [],
    "sku": [
      "MBK005"
    ],
    "format": [
      "400 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "maplus-bike-chain-lube-competition",
    "title": "Maplus Bike Chain Lube Competition",
    "lineHandle": "bike",
    "lineTitle": "Sykkel",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BIKE_CHAIN_LUBE_COMPETITION_MBK004_63cf8bfb-f991-4cef-8e89-678b84abc3f5.png?v=1775053192",
    "desc": "",
    "tags": [
      "agonismo",
      "Bike",
      "catena",
      "chain",
      "competition",
      "lubrificante"
    ],
    "productType": "Bike Chain",
    "specs": [],
    "sku": [
      "MBK004"
    ],
    "format": [
      "200 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "maplus-bike-chain-lube-wet-condition",
    "title": "Maplus Bike Chain Lube Wet Condition",
    "lineHandle": "bike",
    "lineTitle": "Sykkel",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BIKE_CHAIN_LUBE_WET_MBK002_3d8b3442-5734-452c-bd8f-dcfc9c9cf613.png?v=1775053127",
    "desc": "",
    "tags": [
      "Bike",
      "catena",
      "chain",
      "lubrificante",
      "wet"
    ],
    "productType": "Bike Chain",
    "specs": [],
    "sku": [
      "MBK002"
    ],
    "format": [
      "150 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "maplus-bike-chain-lube-dry-condition",
    "title": "Maplus Bike Chain Lube Dry Condition",
    "lineHandle": "bike",
    "lineTitle": "Sykkel",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BIKE_CHAIN_LUBE_DRY_MBK003_5ddcfc50-c0e9-451b-97e5-4bdb6204577b.png?v=1775053300",
    "desc": "",
    "tags": [
      "Bike",
      "catena",
      "chain",
      "dry",
      "lubrificante"
    ],
    "productType": "Bike Chain",
    "specs": [],
    "sku": [
      "MBK003"
    ],
    "format": [
      "150 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "maplus-techwash-in",
    "title": "Maplus TechWash-In",
    "lineHandle": "textile",
    "lineTitle": "Tekstilpleie",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/TECHWASH-IN_MI0201_435621a3-673c-40df-84c5-b4c448f7a77a.png?v=1775053098",
    "desc": "",
    "tags": [
      "Textile",
      "textile care",
      "wash-in",
      "waterproofing"
    ],
    "productType": "Textile Care",
    "specs": [],
    "sku": [
      "MI0201"
    ],
    "format": [
      "500 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-boost-solid-med-copia",
    "title": "GM BOOST SOLID COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GMBOOSTSOLIDCOLD.png?v=1775053534",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22℃",
        "valueEn": "-8° / -22℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0860",
      "MFF0860M"
    ],
    "format": [
      "10 gr",
      "10 gr Molibdeno"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-boost-solid-med",
    "title": "GM BOOST SOLID MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GMBOOSTSOLIDMED.png?v=1775053469",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9℃",
        "valueEn": "-2° / -9℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0861",
      "MFF0861M"
    ],
    "format": [
      "10 gr",
      "10 gr Molibdeno"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-boost-solid-hot",
    "title": "GM BOOST SOLID HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GMBOOSTSOLIDHOT.png?v=1775053506",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3℃",
        "valueEn": "0° / -3℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0862",
      "MFF0862M"
    ],
    "format": [
      "10 gr",
      "10 gr Molibdeno"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-racing-base-cold",
    "title": "GM BLOCK RACING BASE COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gmblockracingbasecold_9cb0cba3-abcf-4e27-8688-924c1a241c07.png?v=1773052465",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-7° / -14℃",
        "valueEn": "-7° / -14℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0196"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-racing-base-hot-copia",
    "title": "GM BLOCK RACING BASE MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gmblockracingbasemed_c09a93a7-1c6c-45b5-9935-06120e04605c.png?v=1773052465",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-4° / -10℃",
        "valueEn": "-4° / -10℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0197"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-professional-cold-copia",
    "title": "GM BLOCK RACING BASE HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gmblockracingbasehot_6ed49551-913d-4d14-add1-92dd42cb1992.png?v=1773052465",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3℃",
        "valueEn": "0° / -3℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0198"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-professional-med-copia",
    "title": "GM BLOCK PROFESSIONAL COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gm_block_professional_cold_adcce48c-9154-4300-85fc-fe05b9f47aba.png?v=1773131945",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-7° / -14℃",
        "valueEn": "-7° / -14℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0193"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-professional-hot-copia",
    "title": "GM BLOCK PROFESSIONAL MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gm_block_professional_med_cea574c4-ff21-476f-b789-ded7b06cec03.png?v=1773129501",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-4° / -10℃",
        "valueEn": "-4° / -10℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0194"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-professional-hot",
    "title": "GM BLOCK PROFESSIONAL HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gmblockprofessionalhot_10b9b237-8517-4fdd-ad2e-33a54f39aa0b.png?v=1773052465",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3℃",
        "valueEn": "0° / -3℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0195"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-performance-med-copia",
    "title": "GM BLOCK PERFORMANCE COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gmblockperfromancecold_abb7390a-8b28-4e76-89cc-c31df6b81eeb.png?v=1773070917",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-7° / -14℃",
        "valueEn": "-7° / -14℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0190"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-performance-hot-copia",
    "title": "GM BLOCK PERFORMANCE MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gmblockperformancemed_9e458ee8-89ff-4379-949d-c18834866599.png?v=1773070917",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-4° / -10℃",
        "valueEn": "-4° / -10℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0191"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-block-performance-hot",
    "title": "GM BLOCK PERFORMANCE HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/gmblockperformancehot_2a2b38f0-169f-45d1-a664-0b8bdeb1a2db.png?v=1773070916",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3℃",
        "valueEn": "0° / -3℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      }
    ],
    "sku": [
      "MFF0192"
    ],
    "format": [
      "20 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "speed-1-copia",
    "title": "Speed 2",
    "lineHandle": "block-line",
    "lineTitle": "Block Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPEED2.png?v=1773052464",
    "desc": "",
    "tags": [
      "30gr",
      "Umida nuova"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-3° / -7℃",
        "valueEn": "-3° / -7℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140℃",
        "valueEn": "140℃"
      }
    ],
    "sku": [
      "MFF0304"
    ],
    "format": [
      "30 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "speed-1",
    "title": "Speed 1",
    "lineHandle": "block-line",
    "lineTitle": "Block Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPEED1.png?v=1775053615",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3℃",
        "valueEn": "0° / -3℃"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadenti"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140℃",
        "valueEn": "140℃"
      }
    ],
    "sku": [
      "MFF0301"
    ],
    "format": [
      "30 gr"
    ]
  },
  {
    "brand": "maplus",
    "slug": "plexi-sharp-1",
    "title": "PLEXI SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PLEXISHARP.png?v=1761640463",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "base-edge-file-guide-1",
    "title": "BASE EDGE FILE GUIDE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BASE_EDGE_FILE_GUIDE_fd8b7611-c3e4-447e-83a2-cddf349160ab.png?v=1761640283",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "sidewall-sharp-1",
    "title": "SIDEWALL SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SIDEWALLSHARP.png?v=1761638474",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "non-woven-banner-ma1005n",
    "title": "NON WOVEN BANNER",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/NonWavenBanner.png?v=1759225179",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MA1005N"
    ],
    "format": [
      "0,8x4 m"
    ]
  },
  {
    "brand": "maplus",
    "slug": "cap-mc0050n",
    "title": "CAP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/CAP.png?v=1761037877",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MC0050N"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "beanie-mc0006m",
    "title": "BEANIE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MC0006M_cuffiamaplus.png?v=1759225014",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MC0006M"
    ],
    "format": [
      "Black"
    ]
  },
  {
    "brand": "maplus",
    "slug": "grip-wax-tank-with-rollers",
    "title": "GRIP WAX TANK WITH ROLLERS",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIP_WAX_TANK_WITH_ROLLERS_cb5d9606-79bd-4633-8071-5916f3dbbc91.png?v=1761052268",
    "desc": "",
    "tags": [
      "Accessori",
      "Hotbox"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SV00014"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "grip-wax-digital-hotbox",
    "title": "GRIP WAX DIGITAL HOTBOX",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIP_WAX_DIGITAL_HOTBOX_32e875e7-5a3c-4d3f-b54a-7a54472458c8.png?v=1761052265",
    "desc": "",
    "tags": [
      "Accessori",
      "Hotbox"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SV00013"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "plexi-sharp",
    "title": "PLEXI SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/WORLD_CUP_PLEXI_SHARP_73751edf-a8eb-4869-b361-a1b9b7474f36.png?v=1761052262",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [
      "SM00630N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-file-clamp",
    "title": "SKI FILE CLAMP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_FILE_CLAMP_b76c3d67-b778-4815-ba05-a76172731e5c.png?v=1761052259",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [
      "MTO803"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "world-cup-plexi-sharp",
    "title": "WORLD CUP PLEXI SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/WORLD_CUP_PLEXI_SHARP.png?v=1761037900",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM00631-220",
      "SM00631-110US",
      "SM00631-110JP"
    ],
    "format": [
      "220V",
      "110V US plug",
      "110V Japanese plug"
    ]
  },
  {
    "brand": "maplus",
    "slug": "aluminium-square",
    "title": "ALUMINIUM SQUARE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ALUMINIUM_SQUARE_ddc92d96-28f9-4a95-b4e5-e1cd09abbdac.png?v=1761052256",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SQ0090V",
      "SQ0089V",
      "SQ0088V",
      "SQ0087V"
    ],
    "format": [
      "90°",
      "89°",
      "88°",
      "87°"
    ]
  },
  {
    "brand": "maplus",
    "slug": "world-cup-inox-square",
    "title": "WORLD CUP INOX SQUARE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/WORLD_CUP_INOX_SQUARE_2c1f1db7-a1a2-411e-bc85-4f6619a0ca32.png?v=1761052253",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SQ0088N",
      "SQ0087N",
      "SQ0086N",
      "SQ0085N"
    ],
    "format": [
      "88°",
      "87°",
      "86°",
      "85°"
    ]
  },
  {
    "brand": "maplus",
    "slug": "spare-blade-radius-3-mm",
    "title": "SPARE BLADE RADIUS 3 mm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPARE_BLADE_RADIUS_3MM_2_bd78b699-b943-4715-a73a-72bbef2c5240.png?v=1761052251",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM05125"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "spare-blade-round",
    "title": "SPARE BLADE ROUND",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPARE_BLADE_ROUND_bf7f7994-f3f0-4b16-9474-5e108dbdb2ef.png?v=1761052248",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM05130"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "spare-blade-standard",
    "title": "SPARE BLADE STANDARD",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPARE_BLADE_STANDARD_0face377-5465-4268-bdad-ddc30fd998e7.png?v=1761052246",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM05120"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "sidewall-sharp",
    "title": "SIDEWALL SHARP WORLD CUP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SIDEWALL_SHARP_WORLD_CUP_ebfea0d2-d02d-4652-826b-a1d265de31b4.png?v=1761052243",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM03004"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "ergo-sharp",
    "title": "ERGO SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ERGO_SHARP_b9c5f5c6-aa13-49d4-989c-a09a3798cf00.png?v=1761052239",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM05002"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "pro-sharp",
    "title": "PRO SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PRO_SHARP_512e022e-0e3b-4293-9531-a6149194dd49.png?v=1761052237",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM05001"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "racing-sharp",
    "title": "RACING SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/RACING_SHARP_d5cd958e-ddb3-41b3-a9fd-e04380c9bc53.png?v=1761052232",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "SM0506"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "groove-scraper",
    "title": "GROOVE SCRAPER",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GROOVE_SCRAPER_41aecd24-38c9-45a2-b8ad-e678067a50e8.png?v=1761052229",
    "desc": "",
    "tags": [
      "Accessori",
      "Scrapers"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MT0512"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "all-oxide-stone",
    "title": "ALL OXIDE STONE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ALL_OXIDE_STONE_b4f4e8b4-2af0-4511-a2f7-fbde8c6874f1.png?v=1761052227",
    "desc": "",
    "tags": [
      "Accessori",
      "Stones"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "BK00006"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gummy-stone-allaround",
    "title": "GUMMY STONE ALLAROUND",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GUMMY_STONE_ALLAROUND_42396c8e-bc49-4240-afc7-6caab0e52dca.png?v=1761052225",
    "desc": "",
    "tags": [
      "Accessori",
      "Stones"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MP0015"
    ],
    "format": [
      "Standard"
    ]
  },
  {
    "brand": "maplus",
    "slug": "natural-stone-medium",
    "title": "NATURAL STONE Medium",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/NATURAL_STONE.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori",
      "Stones"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MP0003"
    ],
    "format": [
      "Medium"
    ]
  },
  {
    "brand": "maplus",
    "slug": "pro-rs-no-chrome-fine",
    "title": "PRO RS NO-CHROME FINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PRO_RS_NO-CHROME.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0527"
    ],
    "format": [
      "100 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "pro-rs-no-chrome-medium",
    "title": "PRO RS NO-CHROME MEDIUM",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": null,
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0526"
    ],
    "format": [
      "100 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "pro-rs-no-chrome-coarse",
    "title": "PRO RS NO-CHROME COARSE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PRO_RS_NO-CHROME.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0525"
    ],
    "format": [
      "100 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "professional-hard-no-chrome-smooth",
    "title": "PROFESSIONAL HARD NO-CHROME SMOOTH",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PROFESSIONAL_HARD_NO-CHROME.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0513"
    ],
    "format": [
      "150 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "professional-hard-no-chrome-2nd-cut",
    "title": "PROFESSIONAL HARD NO-CHROME 2ND CUT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": null,
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0512"
    ],
    "format": [
      "200 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "professional-hard-no-chrome-bastard",
    "title": "PROFESSIONAL HARD NO-CHROME BASTARD",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": null,
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0511"
    ],
    "format": [
      "200 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "professional-hard-chrome-smooth",
    "title": "PROFESSIONAL HARD CHROME SMOOTH",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PROFESSIONAL_HARD_NO-CHROME.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0503"
    ],
    "format": [
      "150 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "professional-hard-chrome-2nd-cut",
    "title": "PROFESSIONAL HARD CHROME 2ND CUT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PROFESSIONAL_HARD_CHROME.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0502"
    ],
    "format": [
      "200 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "professional-hard-chrome-bastard",
    "title": "PROFESSIONAL HARD CHROME BASTARD",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PROFESSIONAL_HARD_CHROME.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0501"
    ],
    "format": [
      "200 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "body-file",
    "title": "BODY FILE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPARE_BODY_FILE_f4f4fb0f-211b-48d9-8760-bf7df8fcc629.png?v=1761052221",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0005"
    ],
    "format": [
      "300 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "combi-file-medium-coarse",
    "title": "COMBI FILE MEDIUM - COARSE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/COMBI_FILE_MEDIUM_633c1049-5c17-4bca-a957-a63ebd39b559.png?v=1761037877",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0530"
    ],
    "format": [
      "80 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "hard-chrome-super-coarse-cut-0",
    "title": "HARD CHROME SUPER COARSE CUT 0",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/LIMA_HARD_CHROME_COARSE.jpg?v=1755611823",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0004"
    ],
    "format": [
      "200 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "hard-chrome-coarse-cut-1",
    "title": "HARD CHROME COARSE CUT 1",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/HARD_CHROME_70aa550a-57ca-423c-92f8-cfa4d1202676.png?v=1761575711",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0003"
    ],
    "format": [
      "200 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "hard-chrome-fine-cut-2",
    "title": "HARD CHROME FINE CUT 2",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/LIMA_HARD_CHROME_COARSE.jpg?v=1755611823",
    "desc": "",
    "tags": [
      "Accessori",
      "Ski files"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "ML0001",
      "ML0002"
    ],
    "format": [
      "150 mm",
      "200 mm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "special-profi-roller-pad-10-cm",
    "title": "SPECIAL PROFI ROLLER PAD 10 cm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": null,
    "desc": "",
    "tags": [
      "Accessori",
      "Speed fabrics rollers"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MT0088"
    ],
    "format": [
      "10 cm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "polyester-merino-wool-roto-set",
    "title": "POLYESTER & MERINO WOOL ROTO SET",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/POLYESTER_MERINO_WOOL_ROTO_SET_1_1b124c4a-1960-4c90-885b-3599d07907f4.png?v=1761052218",
    "desc": "",
    "tags": [
      "Accessori",
      "Speed fabrics rollers"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MT0085N",
      "MT0086N",
      "MT0087N"
    ],
    "format": [
      "10 cm",
      "14 cm",
      "20 cm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "polishing-merino-wool-roller-12-mm",
    "title": "POLISHING MERINO-WOOL ROLLER 12 mm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": null,
    "desc": "",
    "tags": [
      "Accessori",
      "Speed fabrics rollers"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MT0072N",
      "MT0077N",
      "MT0082N"
    ],
    "format": [
      "10 cm",
      "14 cm",
      "20 cm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "spreading-polyester-roller",
    "title": "SPREADING POLYESTER ROLLER",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPREADING_POLYESTER_ROLLER_c4685c48-b962-4b83-82c1-c5c7b569be7f.png?v=1761052215",
    "desc": "",
    "tags": [
      "Accessori",
      "Speed fabrics rollers"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MT0070",
      "MT0075",
      "MT0080"
    ],
    "format": [
      "10 cm",
      "14 cm",
      "20 cm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "rotobrush-box",
    "title": "ROTOBRUSH BOX",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_BRUSH_BOX_0ebec56c-cfa5-4f46-a497-752f6f1fe3cc.png?v=1761052213",
    "desc": "",
    "tags": [
      "Accessori",
      "Rotobrush"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "BMC0103"
    ],
    "format": [
      "38 × 28 × 9 cm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "application-kit",
    "title": "GRIPWAX APPLICATION KIT",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_APPLICATION_KIT_9eb6d5c5-dc96-484d-9d5b-a5cd298bb05a.png?v=1761052207",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MW0SK050"
    ],
    "format": [
      "Kit"
    ]
  },
  {
    "brand": "maplus",
    "slug": "soft-base-liquid",
    "title": "SOFT BASE",
    "lineHandle": "racing-base",
    "lineTitle": "Racing Base",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SOFT_BASE_LIQUID_79bfa956-70fb-4d32-9256-989508b88490.png?v=1761052201",
    "desc": "",
    "tags": [
      "Liquid Racing Base",
      "Racing base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -10 °C",
        "valueEn": "0° / -10 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      }
    ],
    "sku": [
      "MFF0120"
    ],
    "format": [
      "250 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "arctic-base-liquid",
    "title": "ARCTIC BASE",
    "lineHandle": "racing-base",
    "lineTitle": "Racing Base",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ARCTIC_BASE_LIQUID_fe4a901b-1b57-4ceb-8a5f-96ca054a27dc.png?v=1761052194",
    "desc": "",
    "tags": [
      "Liquid Racing Base",
      "Racing base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-10° / -20 °C",
        "valueEn": "-10° / -20 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      }
    ],
    "sku": [
      "MFF0121"
    ],
    "format": [
      "250 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xsoft",
    "title": "XSOFT BASE",
    "lineHandle": "racing-base",
    "lineTitle": "Racing Base",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/X-SOFT_BASE_SOLID_72143129-8955-4d26-93a7-82e74accfdde.png?v=1761052186",
    "desc": "",
    "tags": [
      "Racing base",
      "Solid Racing Base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / 10 °C",
        "valueEn": "-2° / 10 °C"
      },
      {
        "labelNo": "Vokstype",
        "labelEn": "Wax type",
        "valueNo": "Cera da allenamento",
        "valueEn": "Cera da allenamento"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "120 °C",
        "valueEn": "120 °C"
      }
    ],
    "sku": [
      "MW0873",
      "MW0878"
    ],
    "format": [
      "250 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-cold-kit",
    "title": "BP10 COLD KIT",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_MED_KIT_2_5ac6edaf-3ccc-4e3e-b3d8-c1e0a84f815b.png?v=1761908017",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Kits"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MW0201"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-med-kit",
    "title": "BP10 MED KIT",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_MED_KIT_6280ddb9-9557-4503-8fd4-9d68fafaada2.png?v=1761908018",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Kits"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-9° / -2 °C",
        "valueEn": "-9° / -2 °C"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<40%",
        "valueEn": "<40%"
      }
    ],
    "sku": [
      "MW0202"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-hot-kit",
    "title": "BP10 HOT KIT",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_HOT_KIT_1e1723f7-d3a0-46cd-9fe3-67a948700290.png?v=1761908017",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Kits"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-3° / 0 °C",
        "valueEn": "-3° / 0 °C"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<40%",
        "valueEn": "<40%"
      }
    ],
    "sku": [
      "MW0203"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-kit-3x75-ml",
    "title": "BP10 KIT 3 × 75 ml",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_LIQUID_KIT_a47fd57d-3d64-4a68-8802-f75243fe2c41.png?v=1761908027",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Kits"
    ],
    "productType": "",
    "specs": [],
    "sku": [
      "MW0839"
    ],
    "format": [
      "3 × 75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-liquid-cold",
    "title": "BP10 LIQUID COLD",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_LIQUID_COLD_150ML_aefc14bf-b514-4f4d-8860-1668768a00e4.png?v=1761052178",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Liquid Wax base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22 °C",
        "valueEn": "-8° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<40%",
        "valueEn": "<40%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "Veloce e di facile applicazione",
        "valueEn": "Veloce e di facile applicazione"
      }
    ],
    "sku": [
      "MW0830",
      "MW0833",
      "MW0836"
    ],
    "format": [
      "75 ml",
      "150 ml",
      "0.5 L"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-liquid-med",
    "title": "BP10 LIQUID MED",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_LIQUID_MED_150ML_f91604c2-4ff9-45c6-a3ac-1ec854ff0b9a.png?v=1761052162",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Liquid Wax base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9 °C",
        "valueEn": "-2° / -9 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<40%",
        "valueEn": "<40%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "Veloce e di facile applicazione",
        "valueEn": "Veloce e di facile applicazione"
      }
    ],
    "sku": [
      "MW0831",
      "MW0834",
      "MW0837"
    ],
    "format": [
      "75 ml",
      "150 ml",
      "0.5 L"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-liquid-hot",
    "title": "BP10 LIQUID HOT",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_LIQUID_HOT_150ML_2276c578-e26b-4635-b554-9dcf153b5aba.png?v=1761052148",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Liquid Wax base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3 °C",
        "valueEn": "0° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<40%",
        "valueEn": "<40%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "Veloce e di facile applicazione",
        "valueEn": "Veloce e di facile applicazione"
      }
    ],
    "sku": [
      "MW0832",
      "MW0835",
      "MW0838"
    ],
    "format": [
      "75 ml",
      "150 ml",
      "0.5 L"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-solid-violet",
    "title": "BP10 SOLID VIOLET",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_SOLID_VIOLET_100GR_b85d8b4f-94f1-47c7-be09-1bafe177adf6.png?v=1761052131",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Solid Wax base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22 °C",
        "valueEn": "-8° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<50%",
        "valueEn": "<50%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "145 °C",
        "valueEn": "145 °C"
      }
    ],
    "sku": [
      "MW0300",
      "MW0310",
      "MW0320"
    ],
    "format": [
      "100 g",
      "250 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-solid-red",
    "title": "BP10 SOLID RED",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_SOLID_RED_100GR_06144c8d-d8a9-4b7f-9c0c-b4a3c91b86eb.png?v=1761052125",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Solid Wax base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9 °C",
        "valueEn": "-2° / -9 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<50%",
        "valueEn": "<50%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140 °C",
        "valueEn": "140 °C"
      }
    ],
    "sku": [
      "MW0301",
      "MW0311",
      "MW0321"
    ],
    "format": [
      "100 g",
      "250 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "bp10-solid-yellow",
    "title": "BP10 SOLID YELLOW",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_SOLID_YELLOW_100GR_255f84a9-49cf-4739-ac81-9226e5597554.png?v=1761052119",
    "desc": "",
    "tags": [
      "BP10",
      "BP10 Performance Solid Wax base"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3 °C",
        "valueEn": "0° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "<50%",
        "valueEn": "<50%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "130 °C",
        "valueEn": "130 °C"
      }
    ],
    "sku": [
      "MW0302",
      "MW0312",
      "MW0322"
    ],
    "format": [
      "100 g",
      "250 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-powder-cold",
    "title": "GM POWDER COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_POWDER_COLD_569d4fb0-d381-4e69-847f-ed029cfda886.png?v=1761052114",
    "desc": "",
    "tags": [
      "GM",
      "GM Powder Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22 °C",
        "valueEn": "-8° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "50% - 80%",
        "valueEn": "50% - 80%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "160 °C",
        "valueEn": "160 °C"
      }
    ],
    "sku": [
      "MFF0140",
      "MFF0140M"
    ],
    "format": [
      "25 g",
      "25 gr Molibdeno"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-powder-med",
    "title": "GM POWDER MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_POWDER_MED_166b1284-9bf0-43bd-aec8-fb35790c3edd.png?v=1761052106",
    "desc": "",
    "tags": [
      "GM",
      "GM Powder Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9 °C",
        "valueEn": "-2° / -9 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "50% - 90%",
        "valueEn": "50% - 90%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "160 °C",
        "valueEn": "160 °C"
      }
    ],
    "sku": [
      "MFF0141",
      "MFF0141M"
    ],
    "format": [
      "25 g",
      "25 gr Molibdeno"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-powder-hot",
    "title": "GM POWDER HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_POWDER_HOT_c60c6352-963b-46ab-a71b-cd12c6be5396.png?v=1761052101",
    "desc": "",
    "tags": [
      "GM",
      "GM Powder Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3 °C",
        "valueEn": "0° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "50% - 100%",
        "valueEn": "50% - 100%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "160 °C",
        "valueEn": "160 °C"
      }
    ],
    "sku": [
      "MFF0142",
      "MFF0142M"
    ],
    "format": [
      "25 g",
      "25 gr Molibdeno"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-boost-cold",
    "title": "GM BOOST COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GMBOOSTCOLD.png?v=1761161106",
    "desc": "",
    "tags": [
      "GM",
      "GM BOOST Liquid Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22 °C",
        "valueEn": "-8° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "50% - 80%",
        "valueEn": "50% - 80%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Veloce asciugatura e facile applicazione",
        "valueEn": "Veloce asciugatura e facile applicazione"
      }
    ],
    "sku": [
      "MFF0150"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-boost-med",
    "title": "GM BOOST MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_BOOST_MED_9fe51576-6fda-472e-aa70-61158a62aa42.png?v=1761052090",
    "desc": "",
    "tags": [
      "GM",
      "GM BOOST Liquid Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9 °C",
        "valueEn": "-2° / -9 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "50% - 90%",
        "valueEn": "50% - 90%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Veloce asciugatura e facile applicazione",
        "valueEn": "Veloce asciugatura e facile applicazione"
      }
    ],
    "sku": [
      "MFF0151"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-boost-hot",
    "title": "GM BOOST HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_BOOST_HOT_57ee9105-bcaa-4a6e-8e3f-0bdd7f66b5be.png?v=1761052085",
    "desc": "",
    "tags": [
      "GM",
      "GM BOOST Liquid Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3 °C",
        "valueEn": "0° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "60% - 100%",
        "valueEn": "60% - 100%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Veloce asciugatura e facile applicazione",
        "valueEn": "Veloce asciugatura e facile applicazione"
      }
    ],
    "sku": [
      "MFF0152"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-base-gel-cold",
    "title": "GM BASE GEL COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_GEL_COLD_75ML.png?v=1761067253",
    "desc": "",
    "tags": [
      "GM",
      "GM Race wax Gel"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22 °C",
        "valueEn": "-8° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "30% - 80%",
        "valueEn": "30% - 80%"
      }
    ],
    "sku": [
      "MFF0130",
      "MFF0136"
    ],
    "format": [
      "75 ml",
      "500 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-base-gel-med",
    "title": "GM BASE GEL MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_GEL_MED_75ML.png?v=1761066281",
    "desc": "",
    "tags": [
      "GM",
      "GM Race wax Gel"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9 °C",
        "valueEn": "-2° / -9 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "40% - 90%",
        "valueEn": "40% - 90%"
      }
    ],
    "sku": [
      "MFF0131",
      "MFF0137"
    ],
    "format": [
      "75 ml",
      "500 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-base-gel-hot",
    "title": "GM BASE GEL HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_GEL_HOT_75ML.png?v=1761161007",
    "desc": "",
    "tags": [
      "GM",
      "GM Race wax Gel"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3 °C",
        "valueEn": "0° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "50% - 100%",
        "valueEn": "50% - 100%"
      }
    ],
    "sku": [
      "MFF0132"
    ],
    "format": [
      "75 ml",
      "500 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-solid-cold",
    "title": "GM SOLID COLD",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_RACE_WAX_SOLID_COLD_250gr_f9b58b2b-44ef-4e3c-86f0-615a8a2826ab.png?v=1761160913",
    "desc": "",
    "tags": [
      "GM",
      "GM Race wax Solid"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22 °C",
        "valueEn": "-8° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "40% - 90%",
        "valueEn": "40% - 90%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "150 °C",
        "valueEn": "150 °C"
      }
    ],
    "sku": [
      "MFF0170",
      "MFF0160",
      "MFF0180"
    ],
    "format": [
      "250 g",
      "50 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-solid-med",
    "title": "GM SOLID MED",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_RACE_WAX_SOLID_MED_250gr_4b30d5cd-6a8c-4b71-9ec9-5274c25ff063.png?v=1761052067",
    "desc": "",
    "tags": [
      "GM",
      "GM Race wax Solid"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9 °C",
        "valueEn": "-2° / -9 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "40% - 90%",
        "valueEn": "40% - 90%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "130 °C",
        "valueEn": "130 °C"
      }
    ],
    "sku": [
      "MFF0171",
      "MFF0161",
      "MFF0181"
    ],
    "format": [
      "250 g",
      "50 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gm-solid-hot",
    "title": "GM SOLID HOT",
    "lineHandle": "gm",
    "lineTitle": "GM",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GM_RACE_WAX_SOLID_HOT_250gr_bac9e981-3766-4735-9faa-ee5704750fef.png?v=1761160877",
    "desc": "",
    "tags": [
      "GM",
      "GM Race wax Solid"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3 °C",
        "valueEn": "0° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": "50% - 100%",
        "valueEn": "50% - 100%"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140 °C",
        "valueEn": "140 °C"
      }
    ],
    "sku": [
      "MFF0172",
      "MFF0162",
      "MFF0182"
    ],
    "format": [
      "250 g",
      "50 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-powder-cold",
    "title": "XCELERATE PRO POWDER COLD",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_powder_cold_10gr.png?v=1758789540",
    "desc": "",
    "tags": [
      "XCELERATE",
      "Xcelerate Pro Racing Powder Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-8° / -22 °C",
        "valueEn": "-8° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": ">40%",
        "valueEn": ">40%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Non richiede l’utilizzo di ferro sciolinatore",
        "valueEn": "Non richiede l’utilizzo di ferro sciolinatore"
      }
    ],
    "sku": [
      "MFF0240"
    ],
    "format": [
      "10 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-powder-med",
    "title": "XCELERATE PRO POWDER MED",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_powder_med_10gr.png?v=1758789564",
    "desc": "",
    "tags": [
      "XCELERATE",
      "Xcelerate Pro Racing Powder Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2° / -9 °C",
        "valueEn": "-2° / -9 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": ">40%",
        "valueEn": ">40%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Non richiede l’utilizzo di ferro sciolinatore",
        "valueEn": "Non richiede l’utilizzo di ferro sciolinatore"
      }
    ],
    "sku": [
      "MFF0241"
    ],
    "format": [
      "10 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-powder-hot",
    "title": "XCELERATE PRO POWDER HOT",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_powder_hot_10gr.png?v=1758789590",
    "desc": "",
    "tags": [
      "XCELERATE",
      "Xcelerate Pro Racing Powder Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -3 °C",
        "valueEn": "0° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": ">40%",
        "valueEn": ">40%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Non richiede l’utilizzo di ferro sciolinatore",
        "valueEn": "Non richiede l’utilizzo di ferro sciolinatore"
      }
    ],
    "sku": [
      "MFF0242"
    ],
    "format": [
      "10 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-liquid-cold",
    "title": "XCELERATE PRO LIQUID COLD",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_cold_liquid_75ml.png?v=1758789263",
    "desc": "",
    "tags": [
      "XCELERATE",
      "Xcelerate Pro Racing Liquid Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-12° / -22 °C",
        "valueEn": "-12° / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": ">40%",
        "valueEn": ">40%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Circa 40 min",
        "valueEn": "Circa 40 min"
      }
    ],
    "sku": [
      "MFF0896"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-liquid-med",
    "title": "XCELERATE PRO LIQUID MED",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_med_liquid_75ml.png?v=1758789239",
    "desc": "",
    "tags": [
      "XCELERATE",
      "Xcelerate Pro Racing Liquid Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "6° / -12 °C",
        "valueEn": "6° / -12 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": ">40%",
        "valueEn": ">40%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Circa 40 min",
        "valueEn": "Circa 40 min"
      }
    ],
    "sku": [
      "MFF0895"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-liquid-hot",
    "title": "XCELERATE PRO LIQUID HOT",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_hot_liquid_75ml.png?v=1758789208",
    "desc": "",
    "tags": [
      "XCELERATE",
      "Xcelerate Pro Racing Liquid Accelerator"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0° / -5 °C",
        "valueEn": "0° / -5 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      },
      {
        "labelNo": "Luftfuktighet",
        "labelEn": "Humidity",
        "valueNo": ">40%",
        "valueEn": ">40%"
      },
      {
        "labelNo": "Tørketid",
        "labelEn": "Drying time",
        "valueNo": "Circa 40 min",
        "valueEn": "Circa 40 min"
      }
    ],
    "sku": [
      "MFF0894"
    ],
    "format": [
      "75 ml"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-5",
    "title": "XCELERATE PRO 3",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_solid_race_wax_3_200gr.png?v=1758788675",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-7 / -13 °C",
        "valueEn": "-7 / -13 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadentiPer nevi molto abrasive, water-injected, ghiacciate",
        "valueEn": "Per nevi trasformate o cadentiPer nevi molto abrasive, water-injected, ghiacciate"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140 °C",
        "valueEn": "140 °C"
      }
    ],
    "sku": [],
    "format": [
      "200g",
      "50g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-4",
    "title": "XCELERATE PRO 4",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_solid_race_wax_4_200gr.png?v=1758787993",
    "desc": "",
    "tags": [
      "Racing",
      "Solid Wax",
      "Xcelerate"
    ],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-13 / -22 °C",
        "valueEn": "-13 / -22 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadentiPer nevi molto fredde, siano esse più o meno umide",
        "valueEn": "Per nevi trasformate o cadentiPer nevi molto fredde, siano esse più o meno umide"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140 °C",
        "valueEn": "140 °C"
      }
    ],
    "sku": [
      "MFF0104",
      "MFF0114"
    ],
    "format": [
      "200g",
      "50g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-3",
    "title": "XCELERATE PRO 1",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_solid_race_wax_1_200gr_60d41fa3-c71a-46bb-be36-5b6b37db7a56.png?v=1761052382",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "0 / -3 °C",
        "valueEn": "0 / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadentiPer nevi trasformate o cadenti",
        "valueEn": "Per nevi trasformate o cadentiPer nevi trasformate o cadenti"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "130 °C",
        "valueEn": "130 °C"
      }
    ],
    "sku": [
      "MFF0101",
      "MFF0111"
    ],
    "format": [
      "200g",
      "50"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xcelerate-pro-2",
    "title": "XCELERATE PRO 2",
    "lineHandle": "xcelerate",
    "lineTitle": "Xcelerate",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/xcelerate_pro_solid_race_wax_2_200gr_eedec015-cbb9-4b95-ac2a-59b5424aae7d.png?v=1761052366",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-2 / -8 °C",
        "valueEn": "-2 / -8 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Per nevi trasformate o cadentiPer condizioni intermedie, nevi da fini a trasformate",
        "valueEn": "Per nevi trasformate o cadentiPer condizioni intermedie, nevi da fini a trasformate"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140 °C",
        "valueEn": "140 °C"
      }
    ],
    "sku": [
      "MFF0102",
      "MFF0112"
    ],
    "format": [
      "200g",
      "50g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "gancio-per-stand-display",
    "title": "GANCIO PER STAND DISPLAY",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/f5ddf7bd97d01d87f4a7985398aea709_0bc53065-98a9-45c5-b432-67d81367f7e2.jpg?v=1755614383",
    "desc": "",
    "tags": [
      "Espositore"
    ],
    "productType": "Espositore",
    "specs": [],
    "sku": [
      "MA1210"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "stand-display",
    "title": "STAND DISPLAY",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/60959e8d8c34f5c00b9627dfd768f462_114132a5-2252-4eac-91c8-d00a9a61a68f.jpg?v=1755614383",
    "desc": "",
    "tags": [
      "Espositore"
    ],
    "productType": "Espositore",
    "specs": [],
    "sku": [
      "MA1140"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "felpa-maplus-blu-oro",
    "title": "FELPA MAPLUS colore blu/oro",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/f3051eb70b962b646ad926757115bce0_86b08333-4d85-42be-be45-1c13ec1183a9.jpg?v=1755614382",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0022"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "felpa-maplus-nero-arancio",
    "title": "FELPA MAPLUS colore nero/arancio",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/6964130a6e5a2ce8c5a7fab6251afd2e_cb532599-4231-4417-a571-488527d6e157.jpg?v=1755614381",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0020"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "xc-pantaloni-race-donna",
    "title": "XC PANTALONI RACE - DONNA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/6eb4b1a8ed68214ae7a4c86692674e4d_351f4a30-d276-4830-a0d4-8fb55ae9abc3.jpg?v=1755614380",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA079003W"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "xc-pantaloni-race-uomo",
    "title": "XC PANTALONI RACE - UOMO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/85ca514f9886a96d3c067f991afcb736_030ecde6-0ed5-48fb-853e-09793f7053e8.jpg?v=1755614379",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA079004M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "berretta",
    "title": "BERRETTA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/839998e06c2f41419e3797450bd73178_a85bfa1f-9699-416e-8f0f-0f574708a1e2.jpg?v=1755614378",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MC0005M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "pantaloni-coprituta-unisex",
    "title": "PANTALONI COPRITUTA UNISEX",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/64cf547a8aac0c429c1de171c29426f0_587f855c-f402-4c2c-9aa7-b597b764498a.jpg?v=1755614377",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA079007U"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "xc-giacca-race-uomo",
    "title": "XC GIACCA RACE - UOMO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/0bb2d4215d5de184c10e9f50ee1d9553_5fc2c606-9afe-492e-924d-494f576e780b.jpg?v=1755614377",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA079002M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "xc-giacca-race-donna",
    "title": "XC GIACCA RACE - DONNA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9e02b4257c05e19434bd28a1f3ded3e5_612bb36b-9255-4a5d-bc6a-efc50fcf646e.jpg?v=1755614376",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA079001W"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "grembiule-skiman-cotone",
    "title": "GREMBIULE SKIMAN COTONE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKIMAN_APRON_COTTON.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0003J"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "xc-gilet-unisex",
    "title": "XC GILET - UNISEX",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/c5949b98a954ba20a6a6d17790280cde_e6a03379-0e9f-4a5f-b3bd-91b45499c31f.jpg?v=1755614374",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA079006U"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "giacca-coprituta-unisex",
    "title": "GIACCA COPRITUTA UNISEX",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9fc5e2a09509b5613281f31393bb0737_bd63d69e-6edd-4eaf-8b3f-18d502b02623.jpg?v=1755614373",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA079005U"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-harness",
    "title": "SKI HARNESS",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9962afd4d7801adbe96e49a2f2eab69f_77252724-51bc-4d28-8720-0ea15c5fd4e0.jpg?v=1755614372",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MB0105"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "legasci-alpino-racing",
    "title": "LEGASCI ALPINO RACING",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/753a82091bdf93df272697e1f26229c2_b5a39599-bbb9-463c-8056-927f41dc1a78.jpg?v=1755614370",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0044"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "legasci-alpino",
    "title": "LEGASCI ALPINO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9911ecbea07a30e7c89fdadbe8a058e8_9bb7b38c-a93c-49a9-aa48-ddc0988318bb.jpg?v=1755614368",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0004M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "legasci-xc",
    "title": "LEGASCI XC",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/XC_SKI_STRAP.png?v=1761037899",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0025M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "legasci-nordico",
    "title": "LEGASCI NORDICO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/XC_RACING_CLIP.png?v=1761037900",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0005M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bandiera-completa",
    "title": "BANDIERA COMPLETA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/7ab716354432ee12f19b58c60471093b_a23ad9a6-18d3-4403-84bb-77175b68ab21.jpg?v=1755614366",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA1008MS - MA1008ML"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "striscia-portasci",
    "title": "STRISCIA PORTASCI",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/f5207093f4bafcb21c0c017e46b49f6e_623ed6f2-6088-415c-903d-36bac531d6cb.jpg?v=1755614365",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0015M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "striscione-in-tnt",
    "title": "Striscione in TNT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/d383d2a7f18b38f50f531c6f6759cc5a_6b613df4-9592-4c60-ab64-d70806fc2055.jpg?v=1755614364",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA1005M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "adesivo",
    "title": "ADESIVO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/c9e8d9069e929f4898939a62f1adcffd_bf6fda64-d452-4a40-8c01-3a772488103c.jpg?v=1755614363",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA1001M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "nastro-legasci-distaccabile",
    "title": "NASTRO LEGASCI DISTACCABILE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/f9bbdeb62248e2fc4418a6935e64cf4c_37be1c04-f2e4-4a92-bacd-7dd9576de9c8.jpg?v=1755614362",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA1044M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "nastro-adesivo",
    "title": "NASTRO ADESIVO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SCOTCH.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA1004M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "nastro-adesivo-di-carta",
    "title": "NASTRO ADESIVO DI CARTA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/d382bd8ae87d9139df6458192532657c_cda034ea-be67-4461-80a3-4f607dc1f7e8.jpg?v=1755614360",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA1014M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "grembiule-skiman",
    "title": "GREMBIULE SKIMAN",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/f8a458e18503c86603dc02339a944feb_f23a2add-6060-4cb0-8b5d-79d9b2a75f95.jpg?v=1755614358",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0003M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "cappellino",
    "title": "CAPPELLINO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/CAP.png?v=1761037877",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MC0050M"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "button-neck-shirt",
    "title": "T-SHIRT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/c2be3493ce42ee658842d93c6d54529d_499a2f4b-fd4c-415d-931c-ccc23a0e8365.jpg?v=1755614355",
    "desc": "",
    "tags": [
      "Accessori"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0009"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "giacca",
    "title": "GIACCA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MAPLUS_JACKET.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori",
      "Bag & Accessories"
    ],
    "productType": "Accessori",
    "specs": [],
    "sku": [
      "MA0322"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "w",
    "title": "W",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/47359a90eed3ee35f2dab5a3c718abb3_41a69f45-cb13-47b1-a994-aa72aa41a6f7.jpg?v=1755614351",
    "desc": "",
    "tags": [
      "Rigatore manuale per sci di fondo"
    ],
    "productType": "Rigatore manuale per sci di fondo",
    "specs": [],
    "sku": [
      "SM08008"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "diagonal",
    "title": "DIAGONAL",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/5a61d31ed794cb758475f6c89477dfed_b3b005e5-7069-43ae-b04b-5b8745af0ef3.jpg?v=1755614350",
    "desc": "",
    "tags": [
      "Rigatore manuale per sci di fondo"
    ],
    "productType": "Rigatore manuale per sci di fondo",
    "specs": [],
    "sku": [
      "SM08005"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "linear",
    "title": "LINEAR",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/665e3353c5a0a1298b58f0408e39e998_113dfda1-9cf4-4b30-a673-befdfc051c03.jpg?v=1755614348",
    "desc": "",
    "tags": [
      "Rigatore manuale per sci di fondo"
    ],
    "productType": "Rigatore manuale per sci di fondo",
    "specs": [],
    "sku": [
      "SM08002"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "nordic-sharp",
    "title": "NORDIC SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/3409e45349ec9f6b3397bfe10e87a1d0_adc8c0c7-a9f0-44ad-98f9-c73697256bb8.jpg?v=1755614348",
    "desc": "",
    "tags": [
      "Rigatore manuale per sci di fondo"
    ],
    "productType": "Rigatore manuale per sci di fondo",
    "specs": [],
    "sku": [
      "SM08001"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "affilatore-world-cup-per-spatole",
    "title": "AFFILATORE WORLD CUP PER SPATOLE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/e88c403143ae0a81dde94b0909e552aa_2a45831b-b7b9-40c1-95c8-346c6eaaa1e7.jpg?v=1755614347",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM00631-220"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "disco-diamantato-grana-extra-fine",
    "title": "DISCO DIAMANTATO GRANA EXTRA-FINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/a955a3de9afa2794fbaf8cc2473586cb_6cde7273-b6a5-422f-95f3-84bf03b10cb5.jpg?v=1755614346",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM09005"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "disco-diamantato-grana-fine",
    "title": "DISCO DIAMANTATO GRANA FINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/4c5025fc27e21ebeebad07703ddb77e0_8257849a-2562-4c42-8c43-fae6c15eb9da.jpg?v=1755614345",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM09004"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "disco-diamantato-grana-media",
    "title": "DISCO DIAMANTATO GRANA MEDIA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/bf26253d7b8f171dddb155f84ce1d562_d7241c26-a280-4375-9977-b50026099e00.jpg?v=1755614344",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM09003"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "disco-diamantato-grana-grossa",
    "title": "DISCO DIAMANTATO GRANA GROSSA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/1371abab3c4aabc3692f4afcfda574f7_64094244-40e6-4f00-8b4e-290eda28436d.jpg?v=1755614344",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM09002"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "base-edge-file-guide",
    "title": "ADJUSTABLE BASE EDGE FILE GUIDE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ADJEUSTABLE_BASE_EDGE_FILE_GUIDE_c1073c79-2df0-47ea-9f73-d512cb4801c1.png?v=1761638303",
    "desc": "",
    "tags": [
      "Accessori",
      "Edge sharpeners"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM03051N",
      "SM03052N",
      "SM03053N"
    ],
    "format": [
      "0.5°",
      "0.75°",
      "1°"
    ]
  },
  {
    "brand": "maplus",
    "slug": "sm05125-spare-blade-radius-3mm",
    "title": "LAMA IN METALLO DURO RAGGIO 3mm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/8c4e7ddecfb739ef5c33c55621b27630_b8949fc8-a07e-47f8-921a-7eeb5ad9f46e.jpg?v=1755614342",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM05125"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-di-ricambio",
    "title": "LIMA DI RICAMBIO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/463052dad9377fe2445d3b1bfb5f62a3_7d864b0c-aac6-49db-8751-8dc111400b0e.jpg?v=1755614341",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM05104"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-a-fresa-di-ricambio-per-plexi-sharp",
    "title": "LIMA A FRESA DI RICAMBIO PER PLEXI SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPARE_BODY_FILE_1.png?v=1761640883",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM05101"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bravo-sharp",
    "title": "BRAVO SHARP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/a07bb170c4a36161aa1f8f4859c19794_64f1a441-24a9-4595-a55e-0e1a63df0371.jpg?v=1755614339",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM09001"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lama-in-metallo-duro-per-ergorazon-circolare",
    "title": "LAMA IN METALLO DURO PER ERGORAZON (CIRCOLARE)",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/aee44fc32e47f07b5fe3050745ad94ac_ba9912cf-b243-4910-9351-12c095860359.jpg?v=1755614338",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM05130"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lama-in-metallo-duro-per-ergorazon-quadrata",
    "title": "LAMA IN METALLO DURO PER ERGORAZON (QUADRATA)",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/7e58113966c67085953dd45e2ed189c9_231ea9e7-8f06-4b94-af0a-22b794204ecb.jpg?v=1755614337",
    "desc": "",
    "tags": [
      "Affilatori per lamine"
    ],
    "productType": "Affilatori per lamine",
    "specs": [],
    "sku": [
      "SM05120"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-touring-solo-morsa-centrale",
    "title": "SKI VISE TOURING - SOLO MORSA CENTRALE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/c36ca621a5bd9f22ed82eb87110f16dc_bd3ea561-fedc-4794-a307-4cc194a701b7.jpg?v=1755614336",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01007C"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-touring",
    "title": "SKI VISE TOURING",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_TOURING_88e8858b-3f98-4eb1-9c0d-b365a0c8049f.png?v=1761052333",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01007"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-support",
    "title": "SKI SUPPORT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_SUPPORT_bbe77527-fdf0-468f-9555-594dc2b3c940.png?v=1761052331",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM00695"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-xxl",
    "title": "SKI VISE XXL",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_XXL_c382ca6a-ff25-4959-9386-68a9823f7a89.png?v=1761052328",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM00994"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-24-ore",
    "title": "SKI VISE 24 ORE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_24_HOURS.png?v=1761037879",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM00650"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "double-workshop-support",
    "title": "DOUBLE WORKSHOP SUPPORT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DOUBLE_WORKSHOP_SUPPORT_cfc568fc-b0cc-4d65-9e31-e9bed0283930.png?v=1761052325",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01022N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "double-workshop-vise",
    "title": "DOUBLE WORKSHOP VISE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DOUBLE_WORKSHOP_VISE_958e0792-35fa-429f-a5ef-f7462993f45c.png?v=1761052322",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01021N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "snowboard-freeride-ski-vise",
    "title": "SNOWBOARD - FREERIDE SKI VISE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SNOWBOARD_FREERIDE_SKI_VISE_c603bf5b-7725-4017-86a5-1dd3b75b0050.png?v=1761052320",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01003N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-cross-country",
    "title": "SKI VISE CROSS COUNTRY",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_CROSS_COUNTRY_WORLD_CUP_b140211a-aeed-4bea-85a8-b32197bbd99e.png?v=1761052317",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM00670N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bravo-support",
    "title": "BRAVO SUPPORT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BRAVO_SUPPORT_903f2579-cba4-47f8-b9b6-3600a2825a13.png?v=1761052315",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM00635"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-pro-wide-opening",
    "title": "SKI VISE PRO \"WIDE OPENING\"",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/d0d354668f69293e040aa69de3140c78_45891a17-69dc-4e8d-9ebc-6996d2b3eeb0.jpg?v=1755614327",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01110NW"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-pro",
    "title": "SKI VISE PRO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_PRO_WIDE_e2bab8ef-c8d4-47e0-b048-86795ef4790a.png?v=1761052313",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01110N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-racing",
    "title": "SKI VISE RACING",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_RACING_568e8e0c-a32a-47b8-88fb-d578cc1aa997.png?v=1761052310",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM01070N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-quick",
    "title": "SKI VISE QUICK",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_QUICK_e3b81193-2258-4320-b16f-f4abe44691d2.png?v=1761052307",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM00690"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ski-vise-comp",
    "title": "SKI VISE COMP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKI_VISE_COMP_2_7d23adfb-f474-4046-9103-beb2d4d86fab.png?v=1761052304",
    "desc": "",
    "tags": [
      "Morse per sci e snowboard"
    ],
    "productType": "Morse per sci e snowboard",
    "specs": [],
    "sku": [
      "SM00691"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ferro-sciolinatore-digitale-pro-t10a-35",
    "title": "FERRO SCIOLINATORE DIGITALE PRO T10A.35",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIGITAL_WAXING_IRON_T10A.35.png?v=1761037878",
    "desc": "",
    "tags": [
      "Ferri sciolinatori"
    ],
    "productType": "Ferri sciolinatori",
    "specs": [],
    "sku": [
      "KZ03000N - AC 220V"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ferro-sciolinatore-elettronico-t10a-15",
    "title": "FERRO SCIOLINATORE ELETTRONICO T10A.15",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIGITAL_WAXING_IRON_T10A.15.png?v=1761037878",
    "desc": "",
    "tags": [
      "Ferri sciolinatori"
    ],
    "productType": "Ferri sciolinatori",
    "specs": [],
    "sku": [
      "KZ06000N - AC 220V"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "ferro-sciolinatore-regolabile",
    "title": "FERRO SCIOLINATORE REGOLABILE T10B.15",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/WAXING_IRON_T10B.15.png?v=1761037899",
    "desc": "",
    "tags": [
      "Ferri sciolinatori"
    ],
    "productType": "Ferri sciolinatori",
    "specs": [],
    "sku": [
      "KZ05000N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "pietra-gomma-allaround",
    "title": "PIETRA GOMMA ALLAROUND",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GUMMY_STONE_ALLAROUND.png?v=1761037878",
    "desc": "",
    "tags": [
      "Pietre"
    ],
    "productType": "Pietre",
    "specs": [],
    "sku": [
      "MP0015"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "pietra-in-ossido-di-alluminio",
    "title": "PIETRA IN OSSIDO DI ALLUMINIO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ALL_OXIDE_STONE.png?v=1761037877",
    "desc": "",
    "tags": [
      "Pietre"
    ],
    "productType": "Pietre",
    "specs": [],
    "sku": [
      "BK00006"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "pietra-naturale",
    "title": "PIETRA NATURALE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/NATURAL_STONE.png?v=1761037879",
    "desc": "",
    "tags": [
      "Pietre"
    ],
    "productType": "Pietre",
    "specs": [],
    "sku": [
      "MP0002"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "world-cup-diamond-gr-1000",
    "title": "WORLD CUP DIAMOND gr. 1000",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAMOND_1000gr.png?v=1761037877",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0314"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "world-cup-diamond-gr-600",
    "title": "WORLD CUP DIAMOND gr. 600",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAMOND_600gr.png?v=1761037877",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0313"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "world-cup-diamond-gr-400",
    "title": "WORLD CUP DIAMOND gr. 400",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAMOND_400gr.png?v=1761037878",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0312"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "world-cup-diamond-gr-200",
    "title": "WORLD CUP DIAMOND gr. 200",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAMOND_200gr.png?v=1761037877",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0311"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "world-cup-diamond-gr-100",
    "title": "WORLD CUP DIAMOND gr. 100",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAMOND_100gr.png?v=1761037878",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0310"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "diaface-gr-1500",
    "title": "DIAFACE gr. 1500",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAFACE_1500GR_d1b78ab9-e25e-46fb-a504-3415f14643b6.png?v=1761052299",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0214"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "diaface-gr-600",
    "title": "DIAFACE  gr. 600",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAFACE_600GR_0c5a1774-6e03-44c5-a130-e693f002290d.png?v=1761052296",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0213"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "diaface-gr-400",
    "title": "DIAFACE  gr. 400",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAFACE_400GR_4546be8b-69c8-426e-9643-08149f35130f.png?v=1761052294",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0212"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "diaface-gr-200",
    "title": "DIAFACE  gr. 200",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAFACE_200GR_22da1067-e1d7-48ef-840c-30e48b757903.png?v=1761052291",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0211"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "diaface-gr-100",
    "title": "DIAFACE  gr. 100",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/DIAFACE_100GR_4d1b0789-3d46-4fdc-91f7-d1e7f161a67b.png?v=1761052288",
    "desc": "",
    "tags": [
      "Diaface & diamond"
    ],
    "productType": "Diaface & diamond",
    "specs": [],
    "sku": [
      "MP0210"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-professional-non-cromata",
    "title": "LIMA \"PROFESSIONAL\" NON CROMATA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PROFESSIONAL_HARD_NO-CHROME_1b32788c-9f54-4d33-ad88-0cc4d64ef30d.png?v=1761576422",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "ML0511 - ML0512 - ML0513"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-professional-cromata",
    "title": "LIMA \"PROFESSIONAL\" CROMATA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PROFESSIONAL_HARD_CHROME_4df50585-c795-4b13-8e1b-ea09bbada03f.png?v=1761576490",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "ML0501"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-prors",
    "title": "LIMA \"PRO RS\"",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PRO_RS_NO-CHROME.png?v=1761037878",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "ML0525"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-per-lime",
    "title": "SPAZZOLA PER LIME",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/FILE_BRUSH.png?v=1761037877",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "MTO100"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-fresa",
    "title": "LIMA FRESA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BODY_FILE.png?v=1761037877",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "ML0005"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "prova",
    "title": "LIMA COMBINATA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/COMBI_FILE_MEDIUM_633c1049-5c17-4bca-a957-a63ebd39b559.png?v=1761037877",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "ML0530"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-hard-chrome-super-coarse",
    "title": "LIMA HARD CHROME SUPER COARSE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/HARD_CHROME_70aa550a-57ca-423c-92f8-cfa4d1202676.png?v=1761575711",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "ML0004"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-hard-chrome-coarse",
    "title": "LIMA HARD CHROME COARSE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/HARD_CHROME_70aa550a-57ca-423c-92f8-cfa4d1202676.png?v=1761575711",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "BK00010"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lima-hard-chrome",
    "title": "LIMA HARD CHROME FINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/HARD_CHROME_70aa550a-57ca-423c-92f8-cfa4d1202676.png?v=1761575711",
    "desc": "",
    "tags": [
      "Lime sci"
    ],
    "productType": "Lime sci",
    "specs": [],
    "sku": [
      "ML0001"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "rullo-speciale-professionale-cm10",
    "title": "RULLO SPECIALE PROFESSIONALE CM 10",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPECIAL_PROFI_ROLLER_PAD.png?v=1761037880",
    "desc": "",
    "tags": [
      "Rulli in poliestere e in lana merino"
    ],
    "productType": "Rulli in poliestere e in lana merino",
    "specs": [],
    "sku": [
      "MTO088"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "roto-kit-cm-14",
    "title": "POLYESTER & MERINO WOOL ROTO SET 10-14-20CM",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/POLYESTER_MERINO_WOOL_ROTO_SET_1.png?v=1761580940",
    "desc": "",
    "tags": [
      "Rulli in poliestere e in lana merino"
    ],
    "productType": "Rulli in poliestere e in lana merino",
    "specs": [],
    "sku": [
      "MTO086N-1",
      "MTO086N-2",
      "MTO086N-3"
    ],
    "format": [
      "10CM",
      "14CM",
      "20CM"
    ]
  },
  {
    "brand": "maplus",
    "slug": "rullo-in-lana-merino-12mm",
    "title": "RULLO IN LANA MERINO 12mm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/POLISHING_MERINO-WOOL_ROLLER.png?v=1761037880",
    "desc": "",
    "tags": [
      "Rulli in poliestere e in lana merino"
    ],
    "productType": "Rulli in poliestere e in lana merino",
    "specs": [],
    "sku": [
      "MTO072"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "rullo-in-lana-merino-5mm",
    "title": "RULLO IN LANA MERINO 5mm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/POLISHING_MERINO-WOOL_ROLLER.png?v=1761037880",
    "desc": "",
    "tags": [
      "Rulli in poliestere e in lana merino"
    ],
    "productType": "Rulli in poliestere e in lana merino",
    "specs": [],
    "sku": [
      "MTO076"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "rullo-in-poliestere",
    "title": "RULLO IN POLIESTERE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPREADING_POLYESTER_ROLLER.png?v=1761037879",
    "desc": "",
    "tags": [
      "Rulli in poliestere e in lana merino"
    ],
    "productType": "Rulli in poliestere e in lana merino",
    "specs": [],
    "sku": [
      "MTO070"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "roto-kit-10-cm-poliestere",
    "title": "ROTO KIT 10 CM - POLIESTERE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_KIT_10CM_2_f80d52fd-e273-4135-b7cc-feac87277d29.png?v=1762266865",
    "desc": "",
    "tags": [
      "Spazzole rotanti kit"
    ],
    "productType": "Spazzole rotanti kit",
    "specs": [],
    "sku": [
      "MT0066"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "roto-kit-10-cm-ottone",
    "title": "ROTO KIT 10 CM - OTTONE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_KIT_10CM_3_0ab3c0bf-028b-4044-9e30-5e4d85e2a2f5.png?v=1762266938",
    "desc": "",
    "tags": [
      "Spazzole rotanti kit"
    ],
    "productType": "Spazzole rotanti kit",
    "specs": [],
    "sku": [
      "MT0065"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "roto-kit-10-cm-sughero",
    "title": "ROTO KIT 10 CM - SUGHERO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_KIT_10CM_1230a64a-3856-441d-b27e-f482fa05491c.png?v=1762266864",
    "desc": "",
    "tags": [
      "Spazzole rotanti kit"
    ],
    "productType": "Spazzole rotanti kit",
    "specs": [],
    "sku": [
      "MT0060"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "maplustex-extra-fine",
    "title": "MAPLUSTEX EXTRA FINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MAPLUSTEX_EXTRA_FINE_2.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori",
      "Maplustex rollers"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MT0095RS"
    ],
    "format": [
      "10 cm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "maplustex-fine",
    "title": "MAPLUSTEX FINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MAPLUSTEX_FINE.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori",
      "Maplustex rollers"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MT0090RS"
    ],
    "format": [
      "10 cm"
    ]
  },
  {
    "brand": "maplus",
    "slug": "xc-combi-1",
    "title": "XC COMBI 1",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_BRUSH_STEEL_2.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO049"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-acciaio",
    "title": "SPAZZOLA IN ACCIAIO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_BRUSH_STEEL.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO017"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "rullo-in-sughero",
    "title": "RULLO IN SUGHERO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_BRUSH_CORK.png?v=1761037880",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO022"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-nylon",
    "title": "SPAZZOLA IN NYLON",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_BRUSH_NYLON.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO043"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-nylon-morbido",
    "title": "SPAZZOLA IN NYLON MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/e7c0584255fa6f2981e510285a9e9e4f_4246ef3b-dbff-4462-afe5-c0ad656a78b2.jpg?v=1755614256",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO013"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-crine",
    "title": "SPAZZOLA IN CRINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_BRUSH_HORSEHAIR.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO042"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-crine-morbido",
    "title": "SPAZZOLA IN CRINE MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/d722f2a14a84b7ad8053262f61a6106b_c5af1963-086a-42c2-807f-9f448a4b34f1.jpg?v=1755614255",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO016"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-crine-duro",
    "title": "SPAZZOLA IN CRINE DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/73608782f50eb6af17bb69bdcd662692_953326e4-1a4c-422a-9e3e-d0a4ce6bdc9c.jpg?v=1755614254",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO012"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "valigia-per-spazzole-rotanti",
    "title": "VALIGIA PER SPAZZOLE ROTANTI",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/948378d6a67ac0d7c7c6728581b072ab_2ec59b4b-522c-4312-904f-0d6889066272.jpg?v=1755614253",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "BMC0103"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "nomic-drive-shaft",
    "title": "NOMIC DRIVE SHAFT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/938a195f8810cb9b31c6503221891897_e30069c2-a962-4cea-8ce0-7853bd66cd6e.jpg?v=1755614252",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO041"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "quik-drive-shaft",
    "title": "QUIK DRIVE SHAFT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/QUICK_DRIVE_SHAFT_20b8509c-4334-4eb0-bc00-78eddd6630b7.png?v=1761052275",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO031"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "nomic-grip",
    "title": "NOMIC GRIP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/048731097de322302aff7e52151c991d_299bc4a5-74b3-45e4-b4c1-fb36dee46722.jpg?v=1755614251",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO040"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "quick-grip",
    "title": "QUICK GRIP",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/QUICK_GRIP_ae148639-f23a-43aa-9b6d-d1b88ec005a0.png?v=1761052272",
    "desc": "",
    "tags": [
      "Spazzole rotanti"
    ],
    "productType": "Spazzole rotanti",
    "specs": [],
    "sku": [
      "MTO030"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-crine-morbido",
    "title": "SPAZZOLA MANUALE OVALE IN CRINE MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_SOFT_HORSEHAIR.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO124"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-crine-duro",
    "title": "SPAZZOLA MANUALE OVALE IN CRINE DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_HARD_HORSEHAIR.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO121"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-ottone-morbido",
    "title": "SPAZZOLA MANUALE OVALE IN OTTONE MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_SOFT_BRASS.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO123"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-ottone-duro",
    "title": "SPAZZOLA MANUALE OVALE IN OTTONE DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_HARD_STEEL.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO126"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-nylon-morbido",
    "title": "SPAZZOLA MANUALE OVALE IN NYLON MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_SOFT_NYLON.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO122"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-nylon-duro",
    "title": "SPAZZOLA MANUALE OVALE IN NYLON DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_SOFT_NYLON.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO125"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-acciaio-morbido",
    "title": "SPAZZOLA MANUALE OVALE IN ACCIAIO MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_HARD_HORSEHAIR.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO127"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-ovale-in-acciaio-duro",
    "title": "SPAZZOLA MANUALE OVALE IN ACCIAIO DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/OVAL_MANUAL_BRUSH_HARD_STEEL.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO128"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-in-acciaio",
    "title": "SPAZZOLA MANUALE IN ACCIAIO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MANUAL_BRUSH_SOFT_STEEL.png?v=1761037878",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO107"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-in-ottone-morbido",
    "title": "SPAZZOLA MANUALE IN OTTONE MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MANUAL_BRUSH_SOFT_BRASS.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO103"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-in-ottone-duro",
    "title": "SPAZZOLA MANUALE IN OTTONE DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MANUAL_BRUSH_HARD_BRASS.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO106"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-in-nylon-morbido",
    "title": "SPAZZOLA MANUALE IN NYLON MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MANUAL_BRUSH_SOFT_NYLON.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO102"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-in-nylon-duro",
    "title": "SPAZZOLA MANUALE IN NYLON DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MANUAL_BRUSH_SOFT_NYLON.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO105"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-in-crine-morbido",
    "title": "SPAZZOLA MANUALE IN CRINE MORBIDO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MANUAL_BRUSH_HARD_HORSEHAIR.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO104"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-manuale-in-crine-duro",
    "title": "SPAZZOLA MANUALE IN CRINE DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MANUAL_BRUSH_HARD_HORSEHAIR.png?v=1761037879",
    "desc": "",
    "tags": [
      "Spazzole manuali"
    ],
    "productType": "Spazzole manuali",
    "specs": [],
    "sku": [
      "MTO101"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "termocoperta-freeride",
    "title": "TERMOCOPERTA SNOWBOARD",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/THERMO_WAXING_COVER.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO805N - MTO805NUS"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "stenditore-con-feltro",
    "title": "STENDITORE CON FELTRO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/FELT_PAD.png?v=1761037877",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO118"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "raschietto-plexy",
    "title": "RASCHIETTO PLEXY",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PLEXY_SCRAPER.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO511"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "pinza-blocca-sci-per-termocoperta",
    "title": "PINZA BLOCCA-SCI PER TERMOCOPERTA",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/CLAMPING_FOR_THERMO_COVER.png?v=1761037877",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO802"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "termo-coperta-sci-alpino-con-legasci",
    "title": "TERMOCOPERTA SCI ALPINO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/THERMO_WAXING_COVER.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO801N - AC 220V"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "rotolo",
    "title": "ROTOLO PTFE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/PTFE_TAPE.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO901"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spatola-per-canaline",
    "title": "SPATOLA PER CANALINE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GROOVE_SCRAPER_41aecd24-38c9-45a2-b8ad-e678067a50e8.png?v=1761052229",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO512"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spatola-nordico",
    "title": "SPATOLA NORDICO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/NORDIC_SCRAPER.png?v=1761037877",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO510"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "stenditore-in-sughero-sintetico",
    "title": "STENDITORE IN SUGHERO SINTETICO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SYNTHETIC_CORK.png?v=1761037879",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO113"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-stenditore-nylon-sughero",
    "title": "SPAZZOLA/STENDITORE NYLON-SUGHERO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/CORK_NYLON_BRUSH.png?v=1761037878",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO111"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "stenditore-in-sughero",
    "title": "STENDITORE IN SUGHERO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/CORK.png?v=1761037877",
    "desc": "",
    "tags": [
      "Accessori per sciolinatura"
    ],
    "productType": "Accessori per sciolinatura",
    "specs": [],
    "sku": [
      "MTO110"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-acciaio-duro",
    "title": "SPAZZOLA IN ACCIAIO DURO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/STEEL_STRUCTURE_BRUSH.png?v=1761037878",
    "desc": "",
    "tags": [
      "Ski lab accessori"
    ],
    "productType": "Ski lab accessori",
    "specs": [],
    "sku": [
      "BK00130"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "scotch-brite-roller",
    "title": "SCOTCH BRITE ROLLER",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ffb67c0cbdf3cc4dd2a13b69ce367cd4_b435a60d-ead4-4473-b532-c27b06085f51.jpg?v=1755614201",
    "desc": "",
    "tags": [
      "Sciolinatrice e Spazzolatrice a rulli"
    ],
    "productType": "Sciolinatrice e Spazzolatrice a rulli",
    "specs": [],
    "sku": [
      "SV00027"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-nylon-horsehair",
    "title": "SPAZZOLA NYLON/HORSEHAIR",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/358873fad4914931314b94f2036b503a_e9aa8f31-99e7-462c-a34f-b3b1de97f1a8.jpg?v=1755614200",
    "desc": "",
    "tags": [
      "Sciolinatrice e Spazzolatrice a rulli"
    ],
    "productType": "Sciolinatrice e Spazzolatrice a rulli",
    "specs": [],
    "sku": [
      "SV00026"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-nylon-10mm",
    "title": "SPAZZOLA NYLON 10mm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/42121f00ffc451d0c288e11c1f28cbd4_b1efa023-448a-4849-a5e2-cb5d9c37c11b.jpg?v=1755614200",
    "desc": "",
    "tags": [
      "Sciolinatrice e Spazzolatrice a rulli"
    ],
    "productType": "Sciolinatrice e Spazzolatrice a rulli",
    "specs": [],
    "sku": [
      "SV00024"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-crine-10mm",
    "title": "SPAZZOLA IN CRINE 10mm",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/51a3864ed3ad604d2340c3f8fe249f94_093079b0-6368-4077-8d5e-771d88c9a75c.jpg?v=1755614198",
    "desc": "",
    "tags": [
      "Sciolinatrice e Spazzolatrice a rulli"
    ],
    "productType": "Sciolinatrice e Spazzolatrice a rulli",
    "specs": [],
    "sku": [
      "SV00023"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "spazzola-in-ottone",
    "title": "SPAZZOLA IN OTTONE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ROTO_BRUSH_BRASS.png?v=1761037880",
    "desc": "",
    "tags": [
      "Sciolinatrice e Spazzolatrice a rulli"
    ],
    "productType": "Sciolinatrice e Spazzolatrice a rulli",
    "specs": [],
    "sku": [
      "SV00022"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "singola-pelle-in-lana-merino",
    "title": "SINGOLA PELLE IN LANA MERINO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/3707d8f2be163bd14c78cf07586f13bb_159103fc-ea04-4052-a0d4-8d77a5d90e45.jpg?v=1755614196",
    "desc": "",
    "tags": [
      "Sciolinatrice e Spazzolatrice a rulli"
    ],
    "productType": "Sciolinatrice e Spazzolatrice a rulli",
    "specs": [],
    "sku": [
      "SV00021"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "roller-for-merino-wool-leather",
    "title": "ROLLER FOR MERINO WOOL LEATHER",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/780149ddfa09fbd86eb140fe6810d770_f1142f83-0355-4298-8b43-778e7915adf6.jpg?v=1755614196",
    "desc": "",
    "tags": [
      "Sciolinatrice e Spazzolatrice a rulli"
    ],
    "productType": "Sciolinatrice e Spazzolatrice a rulli",
    "specs": [],
    "sku": [
      "SV00029"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "sciolinatore",
    "title": "SCIOLINATORE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/0d0c19531d6e29f793ed165732978408_a7c28034-5391-475b-bdfa-29721f41d85f.jpg?v=1755614195",
    "desc": "",
    "tags": [
      "SCIOLINATORE"
    ],
    "productType": "SCIOLINATORE",
    "specs": [],
    "sku": [
      "SV00030N"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "vaschetta-350-con-rullo-in-silicone",
    "title": "VASCHETTA 350 CON RULLO IN SILICONE",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/350_TANK_WITH_SILICON_ROLLER.png?v=1761037877",
    "desc": "",
    "tags": [
      "Hot box accessori"
    ],
    "productType": "Hot box accessori",
    "specs": [],
    "sku": [
      "SV00009"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "coperchio-per-vaschetta-160",
    "title": "COPERCHIO PER VASCHETTA 160",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/140_TANK_COVER.png?v=1761037877",
    "desc": "",
    "tags": [
      "Hot box accessori"
    ],
    "productType": "Hot box accessori",
    "specs": [],
    "sku": [
      "SV00012"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "vaschetta-160-con-rullo-standard",
    "title": "VASCHETTA 160 CON RULLO STANDARD",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/aaa082d2257ab65aecf61c2340e9c5b9_d2764cc1-83d3-451f-ad6a-67d3bd49c109.jpg?v=1755614190",
    "desc": "",
    "tags": [
      "Hot box accessori"
    ],
    "productType": "Hot box accessori",
    "specs": [],
    "sku": [
      "SV00011"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "coperchio-per-vaschetta-140",
    "title": "COPERCHIO PER VASCHETTA 140",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/140_TANK_COVER.png?v=1761037877",
    "desc": "",
    "tags": [
      "Hot box accessori"
    ],
    "productType": "Hot box accessori",
    "specs": [],
    "sku": [
      "SV00006"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "vaschetta-140-con-spatola-in-acciaio",
    "title": "VASCHETTA 140 CON SPATOLA IN ACCIAIO",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/140_TANK_WITH_SKI_WAX_SCRAPERS.png?v=1761037877",
    "desc": "",
    "tags": [
      "Hot box accessori"
    ],
    "productType": "Hot box accessori",
    "specs": [],
    "sku": [
      "SV00004"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "coperchio-per-vaschetta-country-roller-140",
    "title": "VASCHETTA COUNTRY ROLLER 140",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SPARE_BODY_FILE_2.png?v=1761640953",
    "desc": "",
    "tags": [
      "Hot box accessori"
    ],
    "productType": "Hot box accessori",
    "specs": [],
    "sku": [
      "SV00003"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "vaschetta-140-con-rullo-standard",
    "title": "VASCHETTA 140 CON RULLO STANDARD",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/140_TANK_WITH_STANDARD_ROLLER.png?v=1761037878",
    "desc": "",
    "tags": [
      "Hot box accessori"
    ],
    "productType": "Hot box accessori",
    "specs": [],
    "sku": [
      "SV00002"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hotbox-350",
    "title": "HOTBOX 350",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/HOTBOX_350_6b96b36a-7904-4dd4-8fde-b1f106e9c29a.png?v=1761052034",
    "desc": "",
    "tags": [
      "Hot box"
    ],
    "productType": "Hot box",
    "specs": [],
    "sku": [
      "SV00008"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hotbox-160",
    "title": "HOTBOX 160",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/HOTBOX_160_47b90197-779a-4f89-a985-c9019f74696d.png?v=1761052032",
    "desc": "",
    "tags": [
      "Hot box"
    ],
    "productType": "Hot box",
    "specs": [],
    "sku": [
      "SV00010"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hotbox-140",
    "title": "HOTBOX 140",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/HOTBOX_140_7a4260be-08ac-4d6f-b133-54f18e4cc1a3.png?v=1761052029",
    "desc": "",
    "tags": [
      "Hot box"
    ],
    "productType": "Hot box",
    "specs": [],
    "sku": [
      "SV00001"
    ],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "universal-k15",
    "title": "GRIPWAX UNIVERSAL K15",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/KLISTER_K15_UNIVERSAL.png?v=1761037880",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "KLISTER",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-5° / +5 °C",
        "valueEn": "-5° / +5 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Omdannet snø",
        "valueEn": "Transformed snow"
      }
    ],
    "sku": [
      "MW0K15"
    ],
    "format": [
      "60 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "silver-k14",
    "title": "GRIPWAX SILVER K14",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/KLISTER_K14_SILVER_59e5aa9f-b049-4139-be80-732a0740b4f2.png?v=1761052026",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "KLISTER",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "0° / +5 °C",
        "valueEn": "0° / +5 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Neve asciutta prima di bagnarsi",
        "valueEn": "Neve asciutta prima di bagnarsi"
      }
    ],
    "sku": [
      "MW0K14"
    ],
    "format": [
      "60 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "red-k13",
    "title": "GRIPWAX RED K13",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/KLISTER_K12_VIOLET_ad81107a-80ec-4667-a701-0736119bb7a2.png?v=1761724589",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "KLISTER",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-1° / +4 °C",
        "valueEn": "-1° / +4 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Neve dura, aggressiva, tendente al bagnato",
        "valueEn": "Neve dura, aggressiva, tendente al bagnato"
      }
    ],
    "sku": [
      "MW0K13"
    ],
    "format": [
      "60 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "violet-k12",
    "title": "GRIPWAX VIOLET K12",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/KLISTER_K12_VIOLET.png?v=1761037879",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "KLISTER",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-3° / +3 °C",
        "valueEn": "-3° / +3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Neve poco bagnata",
        "valueEn": "Neve poco bagnata"
      }
    ],
    "sku": [
      "MW0K12"
    ],
    "format": [
      "60 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "blue-k11",
    "title": "GRIPWAX BLUE K11",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/KLISTER_K11_BLUE.png?v=1761037879",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "KLISTER",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-4° / 0 °C",
        "valueEn": "-4° / 0 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Omdannet snø",
        "valueEn": "Transformed snow"
      }
    ],
    "sku": [
      "MW0K11"
    ],
    "format": [
      "60 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "green-k10",
    "title": "GRIPWAX GREEN K10",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/KLISTER_K10_GREEN.png?v=1761037878",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "KLISTER",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-7° / -1 °C",
        "valueEn": "-7° / -1 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Omdannet snø",
        "valueEn": "Transformed snow"
      }
    ],
    "sku": [
      "MW0K10"
    ],
    "format": [
      "60 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "red-s16",
    "title": "GRIPWAX RED S16",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_RED_S16_75bc554f-eb67-4cda-bf64-1c937c647e7c.png?v=1761052021",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "STICK",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "0° / +4 °C",
        "valueEn": "0° / +4 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Tutte le condizioni",
        "valueEn": "Tutte le condizioni"
      }
    ],
    "sku": [
      "MW0S16"
    ],
    "format": [
      "45 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "light-violet-s15",
    "title": "GRIPWAX LIGHT VIOLET S15",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_LIGHT_VIOLET_S15_5ee29446-db62-4c25-a327-056869101202.png?v=1761052019",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "STICK",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-2° / +1 °C",
        "valueEn": "-2° / +1 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Condizioni critiche da “No Wax”",
        "valueEn": "Condizioni critiche da “No Wax”"
      }
    ],
    "sku": [
      "MW0S15"
    ],
    "format": [
      "45 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "dark-violet-s14",
    "title": "GRIPWAX DARK VIOLET S14",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_DARK_VIOLET_S14_ea4118ef-6385-453b-846d-a73a3dee5750.png?v=1761052016",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "STICK",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-3° / -1 °C",
        "valueEn": "-3° / -1 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Neve nuova e cadente",
        "valueEn": "Neve nuova e cadente"
      }
    ],
    "sku": [
      "MW0S14"
    ],
    "format": [
      "45 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "light-blue-s13",
    "title": "GRIPWAX LIGHT BLUE S13",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_LIGHT_BLUE_S13_57fc6547-4721-4f09-a769-ee9b87db3baf.png?v=1761052014",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "STICK",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-5° / -3 °C",
        "valueEn": "-5° / -3 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Omdannet snø",
        "valueEn": "Transformed snow"
      }
    ],
    "sku": [
      "MW0S13"
    ],
    "format": [
      "45 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "dark-blue-s12",
    "title": "GRIPWAX DARK BLUE S12",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_DARK_BLUE_S12_ec4505a2-1978-494d-8951-db0971b4ab64.png?v=1761052011",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "STICK",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-10° / -6 °C",
        "valueEn": "-10° / -6 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Neve nuova e cadente, poco trasformata",
        "valueEn": "Neve nuova e cadente, poco trasformata"
      }
    ],
    "sku": [
      "MW0S12"
    ],
    "format": [
      "45 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "green-s11",
    "title": "GRIPWAX GREEN S11",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_GREEN_S11_a719366e-8682-402d-89fd-632d1f2eea3d.png?v=1761052009",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "STICK",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "-16° / -8 °C",
        "valueEn": "-16° / -8 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Omdannet snø",
        "valueEn": "Transformed snow"
      }
    ],
    "sku": [
      "MW0S11"
    ],
    "format": [
      "45 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "orange-s10",
    "title": "GRIPWAX ORANGE S10",
    "lineHandle": "xc-line",
    "lineTitle": "XC Line",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/GRIPWAX_BASE_S10_ffbbebc4-3b9b-4f66-9428-a82019d361ea.png?v=1761052006",
    "desc": "",
    "tags": [
      "Grip Wax",
      "XC Line"
    ],
    "productType": "STICK",
    "specs": [
      {
        "labelNo": "Lufttemperatur",
        "labelEn": "Air temperature",
        "valueNo": "Qualsiasi",
        "valueEn": "Qualsiasi"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Da utilizzare come base prima delle altre stick",
        "valueEn": "Da utilizzare come base prima delle altre stick"
      }
    ],
    "sku": [
      "MW0S10"
    ],
    "format": [
      "45 g"
    ]
  },
  {
    "brand": "maplus",
    "slug": "universal-skin-spray",
    "title": "UNIVERSAL SKIN SPRAY",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/UNIVERSAL_SKIN_SPRAY_923f0426-cec6-4d00-a9ed-a273b1aef18e.png?v=1761052003",
    "desc": "",
    "tags": [
      "250 ml",
      "Liquido",
      "TOURING SKIN & BASE WAX",
      "Tutti i tipi di neve"
    ],
    "productType": "TOURING SKIN & BASE WAX",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "universal-tour-liquid",
    "title": "UNIVERSAL TOUR LIQUID",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/UNIVERSAL_TOUR_1653f0eb-7bae-41b8-b6a7-215fcf4f55e0.png?v=1761051998",
    "desc": "",
    "tags": [
      "12x75 ml",
      "Liquido",
      "TOURING SKIN & BASE WAX",
      "Tutti i tipi di neve"
    ],
    "productType": "TOURING SKIN & BASE WAX",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-15 ° / 0 °C",
        "valueEn": "-15 ° / 0 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      }
    ],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "anti-ice",
    "title": "ANTI ICE SPRAY",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ANTI_ICE_SPRAY_4a9da6f7-f57a-4177-ac84-ffc74c1c44af.png?v=1761052001",
    "desc": "",
    "tags": [
      "150 ml",
      "ANTI-ICE",
      "Spray"
    ],
    "productType": "ANTI-ICE",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "universal",
    "title": "UNIVERSAL LIQUID PARAFFIN",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/UNIVERSAL_LIQUID_PARAFFIN.png?v=1761037899",
    "desc": "",
    "tags": [
      "1 lt - 4",
      "9 lt",
      "LIQUID",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "LIQUID",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "universal-hot",
    "title": "UNIVERSAL HOT",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/78.png?v=1761657453",
    "desc": "",
    "tags": [
      "1kg - 5 kg - 20 kg",
      "GRANULAR",
      "Solida"
    ],
    "productType": "GRANULAR",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "universal-cold",
    "title": "UNIVERSAL COLD",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/77.png?v=1761657463",
    "desc": "",
    "tags": [
      "1kg - 5 kg - 20 kg",
      "GRANULAR",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "GRANULAR",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "yellow-fluoro",
    "title": "YELLOW FLUORO",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/90701d02ae3da0e5a21abbd900c25748_c003da28-a63b-4dcd-adf7-a2a4f218f3c7.jpg?v=1755614159",
    "desc": "",
    "tags": [
      "100 gr - 1 kg",
      "SOLID FLUORINATED PARAFFIN",
      "Solida"
    ],
    "productType": "SOLID FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "red-fluoro",
    "title": "RED FLUORO",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/22c02097e4438bd2f2f3fe4a6a3ab0e1_673ec5e8-7afc-44bd-8b3d-880470390e49.jpg?v=1755614157",
    "desc": "",
    "tags": [
      "100 gr - 1 kg",
      "SOLID FLUORINATED PARAFFIN",
      "Solida"
    ],
    "productType": "SOLID FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "yellow",
    "title": "YELLOW",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/75.png?v=1761657464",
    "desc": "",
    "tags": [
      "100 gr - 1 kg",
      "SOLID PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "SOLID PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "display-box-cream",
    "title": "DISPLAY BOX CREAM",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/UNIVERSAL_LIQUID_2.png?v=1761037900",
    "desc": "",
    "tags": [
      "12 x 75 ml",
      "Liquido",
      "Super glide wax line",
      "Tutti i tipi di neve"
    ],
    "productType": "Super glide wax line",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-15 ° / 0 °C",
        "valueEn": "-15 ° / 0 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      }
    ],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "universal-cream",
    "title": "UNIVERSAL CREAM",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/UNIVERSAL_CREAM.png?v=1761037899",
    "desc": "",
    "tags": [
      "250 ml",
      "Solida",
      "Super glide wax line",
      "Tutti i tipi di neve"
    ],
    "productType": "Super glide wax line",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-15 ° / 0 °C",
        "valueEn": "-15 ° / 0 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      }
    ],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "display-box-liquid",
    "title": "DISPLAY BOX LIQUID",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/80.png?v=1761657465",
    "desc": "",
    "tags": [
      "12 x 75 ml",
      "Liquido",
      "Super glide wax line",
      "Tutti i tipi di neve"
    ],
    "productType": "Super glide wax line",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-15 ° / 0 °C",
        "valueEn": "-15 ° / 0 °C"
      },
      {
        "labelNo": "Snøtype",
        "labelEn": "Snow type",
        "valueNo": "Alle snøtyper",
        "valueEn": "All snow types"
      }
    ],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "skin-glide-top-kit",
    "title": "SKIN & GLIDE TOP KIT",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SKIN_GLICE_TOP_KIT_6361d5db-ed02-4da7-b6d1-2b20171c16f7.png?v=1761051994",
    "desc": "",
    "tags": [
      "75 ml",
      "GLIDING KIT",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "GLIDING KIT",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bp1-hot",
    "title": "BP1 HOT",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/BP10_HOT_KIT_c7e18ad7-b55e-442c-802c-273b087a5e91.png?v=1761051991",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 150 ml - 0",
      "BP1 HYDROCARBON PARAFFIN",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "BP1 HYDROCARBON PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bp1-med",
    "title": "BP1 MED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9653b574708b7a6469e28ee67a57dc73_6a4af3fe-cfb2-4d06-bdb1-6d9d08320704.jpg?v=1755614142",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 150 ml - 0",
      "BP1 HYDROCARBON PARAFFIN",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "BP1 HYDROCARBON PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bp1-cold",
    "title": "BP1 COLD",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/c6db11a71571f6269d8aa754fc40212f_d52a8af1-dd0e-4b89-a9ab-de0caf2bb0d8.jpg?v=1755614140",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 150 ml - 0",
      "BP1 HYDROCARBON PARAFFIN",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "BP1 HYDROCARBON PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-hot",
    "title": "LP2 HOT",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/47b9371a5ec847a6416d19e09506ac86_cf0e9f88-8003-4843-8eb6-d13b62d05379.jpg?v=1755614140",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 150 ml - 0",
      "Liquido",
      "LP2 FLUORINATED PARAFFIN",
      "Tutti i tipi di neve"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-med",
    "title": "LP2 MED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/fe392f78a62c6fc460cf8c2a182b395f_6b55e07c-c0ee-4881-9c73-0b8da7da6843.jpg?v=1755614138",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 150 ml - 0",
      "Liquido",
      "LP2 FLUORINATED PARAFFIN",
      "Tutti i tipi di neve"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-cold",
    "title": "LP2 COLD",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/817a0b87c8b4a5b09390d4c2ae24ca96_9ba21608-3205-40fb-b21d-f578d7ee9991.jpg?v=1755614137",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 150 ml - 0",
      "Liquido",
      "LP2 FLUORINATED PARAFFIN",
      "Tutti i tipi di neve"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-hot",
    "title": "HP3 HOT",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/bc5983b67a44bcede801e2ff363b54e0_bdddf5aa-c7b2-463b-b351-65a115b9727a.jpg?v=1755614136",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 0",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-med",
    "title": "HP3 MED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/bc04f87b1442e82a9d7828879f80552b_86b3fea6-2558-4a4d-85e9-6a01174b8090.jpg?v=1755614135",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 0",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-cold",
    "title": "HP3 COLD",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/c82e68ecc91a6115905b52a4dab0ec5b_faf6d008-2432-46d9-8df5-86e29b598c1e.jpg?v=1755614134",
    "desc": "",
    "tags": [
      "5 lt",
      "75 ml - 0",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Liquido",
      "Tutti i tipi di neve"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "clean",
    "title": "CLEAN",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/CLEAN_1LT.png?v=1761037878",
    "desc": "",
    "tags": [
      "0",
      "5 lt - 1 lt - 4",
      "9 lt",
      "CLEAN",
      "Liquido"
    ],
    "productType": "CLEAN",
    "specs": [],
    "sku": [],
    "format": [
      "150ML",
      "0.5L",
      "1L",
      "4.9 L"
    ]
  },
  {
    "brand": "maplus",
    "slug": "clean-spray",
    "title": "CLEAN SPRAY",
    "lineHandle": "accessori",
    "lineTitle": "Tilbehør",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/36fdb1a35cd2f54f95cf2119fb5bc7ed_ad5a2f1a-b08c-4efd-b76e-bca513a90029.jpg?v=1755614131",
    "desc": "",
    "tags": [
      "150 ml",
      "CLEAN",
      "Liquido"
    ],
    "productType": "CLEAN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "fluorclean",
    "title": "FLUORCLEAN",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/39eee751af30032eeece2f48de2de4ba_dd0735d9-180f-40f5-ada6-d16ed64b792d.jpg?v=1755614130",
    "desc": "",
    "tags": [
      "0",
      "5 lt - 1 lt",
      "FLUORCLEAN",
      "Liquido"
    ],
    "productType": "FLUORCLEAN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "fluorclean-spray",
    "title": "FLUORCLEAN SPRAY",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9ecd376e5371efaef9aad9bc9143aed8_35c4b4a7-c98c-4b4e-9ce3-9720ea6ecc5e.jpg?v=1755614129",
    "desc": "",
    "tags": [
      "150 ml",
      "FLUORCLEAN",
      "Liquido"
    ],
    "productType": "FLUORCLEAN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "arctic-base",
    "title": "ARCTIC BASE",
    "lineHandle": "racing-base",
    "lineTitle": "Racing Base",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ARCTIC_BASE_SOLID_40ea5da3-a838-4d19-8be7-62eb0023d5d1.png?v=1761746149",
    "desc": "",
    "tags": [
      "Racing base",
      "Solid Racing Base"
    ],
    "productType": "RACING BASE PARAFFIN",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-30° / -10 °C",
        "valueEn": "-30° / -10 °C"
      },
      {
        "labelNo": "Vokstype",
        "labelEn": "Wax type",
        "valueNo": "Cera per climi gelidi",
        "valueEn": "Cera per climi gelidi"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "160 °C",
        "valueEn": "160 °C"
      }
    ],
    "sku": [
      "MW1000",
      "MW0810",
      "MW0820"
    ],
    "format": [
      "100 g - Powder",
      "250 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "soft-base",
    "title": "SOFT BASE",
    "lineHandle": "racing-base",
    "lineTitle": "Racing Base",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/SOFT_BASE_SOLID.png?v=1761037879",
    "desc": "",
    "tags": [
      "Racing base",
      "Solid Racing Base"
    ],
    "productType": "RACING BASE PARAFFIN",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-5° / 0 °C",
        "valueEn": "-5° / 0 °C"
      },
      {
        "labelNo": "Vokstype",
        "labelEn": "Wax type",
        "valueNo": "Cera da allenamento",
        "valueEn": "Cera da allenamento"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "130 °C",
        "valueEn": "130 °C"
      }
    ],
    "sku": [
      "MW0871",
      "MW0876"
    ],
    "format": [
      "250 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "arctic-base-powder-additive",
    "title": "ARCTIC BASE POWDER ADDITIVE",
    "lineHandle": "racing-base",
    "lineTitle": "Racing Base",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/fa55c8bad0e242eb7986dc1135b50adb_fd5eec08-921a-4bc5-8936-f11d4c4dcfe7.jpg?v=1755614126",
    "desc": "",
    "tags": [
      "100 gr",
      "Polvere",
      "RACING BASE PARAFFIN",
      "Tutti i tipi di neve"
    ],
    "productType": "RACING BASE PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "med-base",
    "title": "MED BASE",
    "lineHandle": "racing-base",
    "lineTitle": "Racing Base",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/MED_BASE_SOLID_f7b447bf-1f46-4211-90ab-ae3fa15918b6.png?v=1761051974",
    "desc": "",
    "tags": [
      "Racing base",
      "Solid Racing Base"
    ],
    "productType": "RACING BASE PARAFFIN",
    "specs": [
      {
        "labelNo": "Snø-temperatur",
        "labelEn": "Snow temperature",
        "valueNo": "-10° / -5 °C",
        "valueEn": "-10° / -5 °C"
      },
      {
        "labelNo": "Vokstype",
        "labelEn": "Wax type",
        "valueNo": "Cera da allenamento",
        "valueEn": "Cera da allenamento"
      },
      {
        "labelNo": "Bruk",
        "labelEn": "Application",
        "valueNo": "140 °C",
        "valueEn": "140 °C"
      }
    ],
    "sku": [
      "MW0870",
      "MW0875"
    ],
    "format": [
      "250 g",
      "1 kg (4x250g)"
    ]
  },
  {
    "brand": "maplus",
    "slug": "lp2-orange",
    "title": "LP2 ORANGE",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/01f1a05053c6242fcfa23075e5b963c1_b0e53b90-32af-42ee-8aa1-a23ab643be4f.jpg?v=1755614123",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "LP2 FLUORINATED PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-yellow",
    "title": "LP2 YELLOW",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/787ae9ec9023a82f5aa7e4c1a64f73cb_0b101de9-20ef-4436-8dbe-af141028460f.jpg?v=1755614122",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "In trasformazione",
      "LP2 FLUORINATED PARAFFIN",
      "Solida"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-red-solida",
    "title": "LP2 RED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/feb4274796d93ff716e9650163a77fb8_fa8e290a-c469-41e2-886e-1d7354de3814.jpg?v=1755614120",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "LP2 FLUORINATED PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-violet",
    "title": "LP2 VIOLET",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/af2ef6a0e2c9c528b09655df79f3b312_4f25498e-bb96-4a41-bbea-e06a5bad05f1.jpg?v=1755614120",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "LP2 FLUORINATED PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-blue",
    "title": "LP2 BLUE",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/233826a67be66a810b23a263230da62e_4eefbd01-7d59-4aa8-8f36-f44898ec1dfe.jpg?v=1755614118",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "In trasformazione",
      "LP2 FLUORINATED PARAFFIN",
      "Solida"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp2-green-powder",
    "title": "LP2 GREEN POWDER",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/e2bf3b11df0b872112757f1c2fee6e32_c8b1f2ee-9524-4532-bd10-bfb919b9aeb5.jpg?v=1755614117",
    "desc": "",
    "tags": [
      "100 gr",
      "Fine nuova",
      "LP2 FLUORINATED PARAFFIN",
      "Polvere"
    ],
    "productType": "LP2 FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-orange-2-moly-hot-additive",
    "title": "HP3 ORANGE 2 MOLY HOT ADDITIVE",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/37a06e4a72d6cb27621f1ed829bbee81_a454e79c-04ce-4044-bbc5-c86212436fc7.jpg?v=1755614116",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "Bagnata",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Solida",
      "Trasformata"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-orange-2",
    "title": "HP3 ORANGE 2",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/8fe3e0f34d3083cba6fe73d62a783d7f_0c5d7fd4-d9c1-4fda-a3f8-4a208d0daa66.jpg?v=1755614115",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "Bagnata",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Solida"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-orange-1",
    "title": "HP3 ORANGE 1",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/8b6e33345ac8d5ffd9cf0d107a7d9e9d_c87aef01-1689-464b-9ca9-35c20ee666ca.jpg?v=1755614114",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Solida",
      "Trasformata"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-yellow-2",
    "title": "HP3 YELLOW 2",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/19f9cefdfb07230a68581d617885a3af_bd3be593-2614-4c62-8545-67dd17c408ae.jpg?v=1755614113",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "Bagnata",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Solida",
      "Trasformata"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-yellow-1",
    "title": "HP3 YELLOW 1",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/6f43b5263fbba79c5962514b85d34738_3c906aa8-34a8-4a24-a4d7-036b12cb6435.jpg?v=1755614112",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "Bagnata",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Solida",
      "Trasformata"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-red",
    "title": "HP3 RED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ccb4e23c8aa216f1e96d31ab209c036b_44d1c597-c84f-4d46-b7b6-e656993bc9fc.jpg?v=1755614111",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "In trasformazione",
      "Solida",
      "Trasformata"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-violet",
    "title": "HP3 VIOLET",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/71f67488b0857639cee631943a3fc6fa_dc3764b3-c248-4e41-9c35-2434fdb4c49d.jpg?v=1755614110",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-blue-moly",
    "title": "HP3 BLUE MOLY",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9b2c4b44fb86522964124ed80d03c5e8_cd964223-f30c-413e-bf17-1832d3339c40.jpg?v=1755614109",
    "desc": "",
    "tags": [
      "50 gr - 250 gr - 1kg",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "In trasformazione",
      "Solida",
      "Umida nuova"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "hp3-green-powder",
    "title": "HP3 GREEN POWDER",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/f4b6dca0e2911082f0eb6e1df1a0e11d_df20d45f-a6c4-4539-afeb-91b3cc3c5885.jpg?v=1755614107",
    "desc": "",
    "tags": [
      "50 gr",
      "Fine nuova",
      "HP3 HIGH FLUORINATED PARAFFIN",
      "Polvere"
    ],
    "productType": "HP3 HIGH FLUORINATED PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "fp4-supermed",
    "title": "FP4 SUPERMED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/e31ace2a15a7c70645ad83df9ecd43b0_16b3bff6-8551-4f89-974f-ea594b98b289.jpg?v=1755614106",
    "desc": "",
    "tags": [
      "30 gr",
      "FP4 PERFLUORINATED POWDER WAX",
      "Polvere"
    ],
    "productType": "FP4 PERFLUORINATED POWDER WAX",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "fp4-hot",
    "title": "FP4 HOT",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/d61d44254608dd06ccdd2ff02982d14d_7eb8465d-f394-4576-b49c-1dd1a37b19f4.jpg?v=1755614105",
    "desc": "",
    "tags": [
      "30gr",
      "FP4 PERFLUORINATED POWDER WAX",
      "Polvere",
      "Tutti i tipi di neve"
    ],
    "productType": "FP4 PERFLUORINATED POWDER WAX",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "fp4-med",
    "title": "FP4 MED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/184b7cb84d7b456c96a0bdfbbeaa5f14_a55eafb0-2216-4c32-9458-93b98dc34808.jpg?v=1755614104",
    "desc": "",
    "tags": [
      "30 gr",
      "FP4 PERFLUORINATED POWDER WAX",
      "Polvere",
      "Tutti i tipi di neve"
    ],
    "productType": "FP4 PERFLUORINATED POWDER WAX",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "fp4-cold",
    "title": "FP4 COLD",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/9caa2793658f3cc387f216157300b1ce_ae59ac3b-ce7d-4635-b92b-9e30b1c2cf45.jpg?v=1755614103",
    "desc": "",
    "tags": [
      "30 gr",
      "FP4 PERFLUORINATED POWDER WAX",
      "Polvere",
      "Tutti i tipi di neve"
    ],
    "productType": "FP4 PERFLUORINATED POWDER WAX",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bp10-yellow",
    "title": "BP10 YELLOW",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/94d43e327d9303539cb1e2aac7032668_f7e65c8d-9c8d-4ea5-818d-649f11dbdb55.jpg?v=1755614101",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "BP10 - BASE PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "BP10 - BASE PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bp10-red",
    "title": "BP10 RED",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/e0a70f72bdae9885bfc32d7cd19a26a1_157ffa97-215b-4a3e-8ec6-6b486611ac13.jpg?v=1755614099",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "BP10 - BASE PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "BP10 - BASE PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "bp10-violet",
    "title": "BP10 VIOLET",
    "lineHandle": "bp10",
    "lineTitle": "BP10",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/2fa67f482133f1c934235b73c2a03954_540879f6-dd6d-4f3e-8288-ae4bf62f790f.jpg?v=1755614098",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "BP10 - BASE PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "BP10 - BASE PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp15-yellow",
    "title": "LP15 YELLOW",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ada9a09acea936d776a6f55c82778c43_ebc302d0-6e9e-43e6-b23b-cadcb5c99a09.jpg?v=1755614096",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "LP15 - LOW FLUORINATED BASE PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "LP15 - LOW FLUORINATED BASE PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp15-violet",
    "title": "LP15 VIOLET",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/ffee2447b152494b43d9816faaea83c8_5eae5820-0a74-4cec-b35f-9e3372105f82.jpg?v=1755614094",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "LP15 - LOW FLUORINATED BASE PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "LP15 - LOW FLUORINATED BASE PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "maplus",
    "slug": "lp15-red",
    "title": "LP15 RED",
    "lineHandle": "voks",
    "lineTitle": "Voks (annet)",
    "image": "https://cdn.shopify.com/s/files/1/0908/2975/0608/files/2ff2ba0051687eef5ca0459cf942940c_5190e588-5f56-4f09-ab03-e81150818c51.jpg?v=1755614092",
    "desc": "",
    "tags": [
      "100 gr - 250 gr - 1 kg",
      "LP15 - LOW FLUORINATED BASE PARAFFIN",
      "Solida",
      "Tutti i tipi di neve"
    ],
    "productType": "LP15 - LOW FLUORINATED BASE PARAFFIN",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "calza-efbsport",
    "title": "Calza EFB-SPORT",
    "lineHandle": "apparel",
    "lineTitle": "Apparel",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/04/Calza-EFB-Sport-1.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "copri-tacchette-effebike",
    "title": "Salva tacchette Effebike",
    "lineHandle": "accessories",
    "lineTitle": "Boot accessories",
    "image": "https://www.efbsport.it/wp-content/uploads/2021/10/26.png",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "divaricatore-scarponi",
    "title": "Divaricatore per scarponi",
    "lineHandle": "workshop",
    "lineTitle": "Workshop equipment",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/03/Divaricatore.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "felpe-e-maglie-efbsport",
    "title": "Felpe e Maglie EFBSPORT",
    "lineHandle": "apparel",
    "lineTitle": "Apparel",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/06/Felpa-EFBSPORT.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "lunette-scarponi-da-sci",
    "title": "Lunette scarponi da sci",
    "lineHandle": "workshop",
    "lineTitle": "Workshop equipment",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/03/Lunette.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "macchina-per-fresatura",
    "title": "Macchina per fresatura",
    "lineHandle": "workshop",
    "lineTitle": "Workshop equipment",
    "image": "https://www.efbsport.it/wp-content/uploads/2024/11/macchina-per-fresatura.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "power-strap",
    "title": "Power strap",
    "lineHandle": "accessories",
    "lineTitle": "Boot accessories",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/04/EFFESKI-strap.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "rialzi-scarponi-da-sci",
    "title": "Rialzi scarponi da sci",
    "lineHandle": "accessories",
    "lineTitle": "Boot accessories",
    "image": "https://www.efbsport.it/wp-content/uploads/2022/02/91.png",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "salvasuola-effeski",
    "title": "Salvasuola Effeski",
    "lineHandle": "accessories",
    "lineTitle": "Boot accessories",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/04/salvasuola-azzurro.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "scanner-3d",
    "title": "Scanner 3D",
    "lineHandle": "workshop",
    "lineTitle": "Workshop equipment",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/04/Scanner-3D.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "soletta-comfort-ski",
    "title": "Soletta comfort ski",
    "lineHandle": "insoles",
    "lineTitle": "Insoles",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/06/Soletta-comfort-ski.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "soletta-custom-bike",
    "title": "Soletta Custom Bike",
    "lineHandle": "insoles",
    "lineTitle": "Insoles",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/03/Custom-Bike.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "soletta-custom-race-r1",
    "title": "Soletta Custom Race R1",
    "lineHandle": "insoles",
    "lineTitle": "Insoles",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/04/CUSTOM-RACE-R1-2.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "soletta-custom-ski-race",
    "title": "Soletta Custom Ski Race",
    "lineHandle": "insoles",
    "lineTitle": "Insoles",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/04/Custom-Ski-Race-1.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "soletta-race-performance",
    "title": "Soletta Race Performance",
    "lineHandle": "insoles",
    "lineTitle": "Insoles",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/04/Custom-Ski-Race-1.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "soletta-versatile",
    "title": "Soletta Versatile",
    "lineHandle": "insoles",
    "lineTitle": "Insoles",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/03/Soletta-versatile.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  },
  {
    "brand": "efb",
    "slug": "supporto-scarponi-da-banco",
    "title": "Supporto scarponi da banco",
    "lineHandle": "workshop",
    "lineTitle": "Workshop equipment",
    "image": "https://www.efbsport.it/wp-content/uploads/2026/03/SUPPORTO-SCARPONI-DA-BANCO.webp",
    "desc": "",
    "tags": [],
    "productType": "",
    "specs": [],
    "sku": [],
    "format": []
  }
];

export function productsByBrand(brand: ProductBrand): Product[] {
  return PRODUCTS.filter((p) => p.brand === brand);
}

export function findProduct(brand: ProductBrand, slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.brand === brand && p.slug === slug);
}
