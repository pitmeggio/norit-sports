export type Lang = "no" | "en";

export const LANGS: Lang[] = ["no", "en"];
export const DEFAULT_LANG: Lang = "no";

// Maps a logical page key to its slug per language. Slugs are kept identical
// across languages; the English variants live under the /en/ prefix.
export const ROUTES = {
  home: { no: "/", en: "/en/" },
  maplus: { no: "/maplus", en: "/en/maplus" },
  videos: { no: "/videos", en: "/en/videos" },
  retail: { no: "/forhandlere", en: "/en/retailers" },
  partner: { no: "/partner", en: "/en/partner" },
  contact: { no: "/kontakt", en: "/en/kontakt" },
  privacy: { no: "/personvern", en: "/en/privacy" },
} as const;

export type RouteKey = keyof typeof ROUTES;

export function path(lang: Lang, key: RouteKey): string {
  return ROUTES[key][lang];
}

export const COMPANY = {
  name: "Norit Sports",
  address: "Tenåsvegen 184, 2432 Slettås",
  orgNr: "936 711 111",
  email: "info@norit-sports.no",
  phone: "+39 340 546 0879",
  instagram: "https://www.instagram.com/",
};

type Dict = {
  nav: { brands: string; videos: string; retail: string; partner: string; contact: string };
  privacyNav: string;
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
    error: string;
    invalid: string;
    privacy: string;
  };
  meta: Record<RouteKey, { title: string; description: string }>;
  footer: { info: string; hours: string; hoursDays: string; hoursTime: string; follow: string };
  home: {
    heroEyebrow: string;
    heroTagline: string;
    heroScroll: string;
    pillarsKicker: string;
    pillarsTitle: string;
    pillars: { title: string; desc: string }[];
    ticker: string[];
    strip: string[];
    aboutKicker: string;
    aboutBody: string;
    brandsKicker: string;
    brandsBadge: string;
    maplusDesc: string;
    exploreMaplus: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  maplus: {
    kicker: string;
    intro: string;
    brandKicker: string;
    brandTagline: string;
    brandTitle: string;
    brandBody1: string;
    brandBody2: string;
    facts: { value: string; label: string }[];
    linesLabel: string;
    lines: string[];
    productsKicker: string;
    downloadCatalog: string;
    viewGuide: string;
    catSki: string;
    catSkiDesc: string;
    catBike: string;
    catBikeDesc: string;
    catTextile: string;
    catTextileDesc: string;
    videosTitle: string;
    videosDesc: string;
    videosButton: string;
  };
  videos: {
    kicker: string;
    intro: string;
    categories: Record<string, string>;
    all: string;
  };
  partner: {
    kicker: string;
    intro: string;
    brandsTitle: string;
    brandsBody: string;
    brandsPoints: string[];
    teamsTitle: string;
    teamsBody: string;
    teamsPoints: string[];
    ctaButton: string;
  };
  retail: {
    kicker: string;
    intro: string;
    becomeKicker: string;
    becomeTitle: string;
    becomeWhy: string;
    becomeBody: string;
    points: string[];
    cta: string;
    whereTitle: string;
    whereEmpty: string;
    visit: string;
  };
  contact: {
    kicker: string;
    intro: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    formError: string;
    formInvalid: string;
    detailsTitle: string;
  };
};

export const t: Record<Lang, Dict> = {
  no: {
    nav: { brands: "Merker", videos: "Videoer", retail: "Forhandlere", partner: "Samarbeid", contact: "Kontakt" },
    privacyNav: "Personvern",
    newsletter: {
      title: "Hold deg oppdatert",
      subtitle: "Få nyheter om produkter, teknikk og MAPLUS-lanseringer rett i innboksen.",
      placeholder: "Din e-postadresse",
      button: "Meld deg på",
      success: "Takk! Du er nå påmeldt.",
      error: "Noe gikk galt. Prøv igjen.",
      invalid: "Skriv inn en gyldig e-postadresse.",
      privacy: "Vi sender kun relevant innhold. Du kan melde deg av når som helst.",
    },
    meta: {
      home: {
        title: "Norit Sports – Skandinavisk distributør av sportsmerker",
        description:
          "Norit Sports er et norsk distribusjonsselskap for tekniske, ytelsesdrevne sportsmerker. Offisiell distributør av MAPLUS skipreparering.",
      },
      maplus: {
        title: "MAPLUS – Skipreparering, sykkelpleie og tekstilpleie | Norit Sports",
        description:
          "Utforsk hele MAPLUS-utvalget: høytytende skipreparering, sykkelvedlikehold og tekstilpleie. Offisiell norsk distributør.",
      },
      videos: {
        title: "Tekniske videoer – MAPLUS bruksmetoder | Norit Sports",
        description:
          "Oppdag MAPLUS-bruksmetoder, produkttips og teknikker for konkurranseforberedelse innen langrenn og alpint.",
      },
      retail: {
        title: "Bli forhandler & hvor kjøpe MAPLUS | Norit Sports",
        description:
          "Vil du føre MAPLUS i butikken? Bli forhandler og få teknisk støtte og markedsmateriell. Se hvor du kan kjøpe MAPLUS.",
      },
      partner: {
        title: "Samarbeid med oss – for merker og lag | Norit Sports",
        description:
          "Vil du inn på det skandinaviske markedet, eller trenger laget ditt teknisk støtte? Samarbeid med Norit Sports.",
      },
      contact: {
        title: "Kontakt – Norit Sports",
        description:
          "Kontakt Norit Sports for produktspørsmål, teknisk veiledning eller forhandlersamarbeid.",
      },
      privacy: {
        title: "Personvern – Norit Sports",
        description:
          "Slik behandler Norit Sports personopplysninger fra kontaktskjema og nyhetsbrev.",
      },
    },
    footer: {
      info: "Info",
      hours: "Åpningstider",
      hoursDays: "Mandag – fredag",
      hoursTime: "09:00 – 18:00",
      follow: "Følg oss",
    },
    home: {
      heroEyebrow: "Norsk distributør · Skandinavia",
      heroTagline: "Skandinavisk distributør av ytelsesdrevne sportsmerker.",
      heroScroll: "Bla ned",
      pillarsKicker: "Hva vi står for",
      pillarsTitle: "Presisjon, innovasjon og pålitelighet",
      pillars: [
        { title: "Presisjon", desc: "Produkter utviklet for målbar ytelse i hver minste detalj." },
        { title: "Innovasjon", desc: "Teknologi fra topputøvere, gjort tilgjengelig for hele markedet." },
        { title: "Pålitelighet", desc: "Kvalitet som utøvere, lag og forhandlere kan stole på." },
      ],
      ticker: ["Presisjon", "Innovasjon", "Pålitelighet", "Skipreparering", "Sykkel", "Tekstil", "Skandinavia"],
      strip: ["Offisiell MAPLUS-distributør", "Teknisk støtte for lag og utøvere"],
      aboutKicker: "Bygget rundt ytelse",
      aboutBody:
        "Norit Sports er et norsk distribusjonsselskap med fokus på tekniske og ytelsesdrevne sportsmerker. Vi jobber tett med utøvere, lag og forhandlere for å levere produkter bygget rundt presisjon, innovasjon og pålitelighet.",
      brandsKicker: "Merker",
      brandsBadge: "Offisiell norsk distributør",
      maplusDesc:
        "Høytytende skiprepareringsprodukter som utøvere, lag og profesjonelle stoler på.",
      exploreMaplus: "Utforsk MAPLUS",
      ctaTitle: "Vil du inn på det skandinaviske markedet?",
      ctaBody:
        "Vi hjelper sportsmerker å vokse gjennom teknisk distribusjon, utøversamarbeid og posisjonering i butikk over hele Skandinavia.",
      ctaButton: "Samarbeid med oss",
    },
    maplus: {
      kicker: "Merket vårt",
      intro: "Høytytende skiprepareringsprodukter som utøvere, lag og profesjonelle stoler på.",
      brandKicker: "Om MAPLUS",
      brandTagline: "Just Flow",
      brandTitle: "Italiensk presisjon siden 1996",
      brandBody1:
        "MAPLUS er en spesialisert divisjon av det italienske kjemikonsernet MAFLON S.p.A., grunnlagt i 1996 ut fra Mazza-familiens lidenskap for ski og mestring av kjemi.",
      brandBody2:
        "Fra racingvoks til pulver, glidere og vedlikeholdsprodukter for ski, sykkel og tekstil forener MAPLUS italiensk håndverk med kjemisk presisjon. Som offisiell leverandør i verdenscupen brukes produktene av topputøvere som Federico Pellegrino og Mattia Casse.",
      facts: [
        { value: "1996", label: "Grunnlagt" },
        { value: "Made in Italy", label: "Utviklet og produsert" },
        { value: "World Cup", label: "Offisiell leverandør" },
      ],
      linesLabel: "Produktserier",
      lines: ["Xcelerate", "GM", "BP10", "Racing Base", "XC Line", "Block Line"],
      productsKicker: "Utforsk utvalget",
      downloadCatalog: "Last ned katalog",
      viewGuide: "Se guide",
      catSki: "Skipreparering",
      catSkiDesc: "Glider, voks, pulver og rens for langrenn og alpint på høyeste nivå.",
      catBike: "Sykkelpleie",
      catBikeDesc: "Vedlikehold og rens for å holde sykkelen rask og pålitelig.",
      catTextile: "Tekstilpleie",
      catTextileDesc: "Impregnering og vask som bevarer ytelsen i teknisk sportstøy.",
      videosTitle: "Tekniske videoer",
      videosDesc: "Produktbruk og teknisk støtte for langrenn og alpint.",
      videosButton: "Se tekniske videoer",
    },
    videos: {
      kicker: "Tekniske videoer",
      intro:
        "Oppdag MAPLUS-bruksmetoder, produkttips og teknikker for konkurranseforberedelse.",
      all: "Alle",
      categories: {
        "Base wax": "Grunnvoks",
        "Xcelerate Pro Line": "Xcelerate Pro Line",
        "GM line": "GM-serien",
        Cleaner: "Rens",
      },
    },
    retail: {
      kicker: "Forhandlere",
      intro:
        "Vil du føre MAPLUS i butikken din? Vi støtter forhandlere med produkter, teknisk kompetanse og markedsmateriell.",
      becomeKicker: "For butikker",
      becomeTitle: "Bli MAPLUS-forhandler",
      becomeWhy: "Hvorfor føre MAPLUS",
      becomeBody:
        "Som offisiell norsk distributør gjør vi det enkelt å føre MAPLUS. Du får et komplett sortiment, faglig støtte og materiell som hjelper deg å selge.",
      points: [
        "Konkurransedyktige betingelser",
        "Teknisk opplæring og support",
        "Markedsstøtte og materiell",
        "Tett oppfølging gjennom sesongen",
      ],
      cta: "Ta kontakt",
      whereTitle: "Hvor kjøpe MAPLUS",
      whereEmpty: "Ta kontakt, så hjelper vi deg å finne nærmeste forhandler.",
      visit: "Besøk",
    },
    partner: {
      kicker: "Samarbeid med oss",
      intro:
        "Norit Sports bygger broen mellom tekniske sportsmerker og det skandinaviske markedet – og støtter lagene og utøverne som bruker dem.",
      brandsTitle: "For merker",
      brandsBody:
        "Vil du inn på det skandinaviske markedet? Vi tilbyr teknisk distribusjon, utøversamarbeid og posisjonering i butikk over hele Skandinavia.",
      brandsPoints: [
        "Teknisk distribusjon og logistikk",
        "Posisjonering hos forhandlere",
        "Utøver- og lagsamarbeid",
      ],
      teamsTitle: "For lag og utøvere",
      teamsBody:
        "Vi støtter lag og utøvere med produkter, teknisk service og prepareringskompetanse på høyeste nivå – i trening og konkurranse.",
      teamsPoints: [
        "Produkter og teknisk støtte",
        "Prepareringskompetanse",
        "Oppfølging gjennom sesongen",
      ],
      ctaButton: "Ta kontakt",
    },
    contact: {
      kicker: "Kontakt oss",
      intro:
        "Har du spørsmål om produktene våre, trenger teknisk veiledning, eller er du interessert i å føre våre merker som forhandler? Kontakt oss via skjemaet nedenfor eller send e-post direkte til info@norit-sports.no. Vi svarer så raskt vi kan.",
      formName: "Navn",
      formEmail: "E-post",
      formMessage: "Melding",
      formSubmit: "Send",
      formSending: "Sender …",
      formSuccess: "Takk! Meldingen din er sendt. Vi svarer så snart vi kan.",
      formError: "Noe gikk galt. Prøv igjen, eller send e-post til info@norit-sports.no.",
      formInvalid: "Fyll ut alle feltene med en gyldig e-postadresse.",
      detailsTitle: "Kontaktinformasjon",
    },
  },
  en: {
    nav: { brands: "Brands", videos: "Videos", retail: "Retailers", partner: "Collaborate", contact: "Contact" },
    privacyNav: "Privacy",
    newsletter: {
      title: "Stay in the loop",
      subtitle: "Get product news, technique tips and MAPLUS launches straight to your inbox.",
      placeholder: "Your email address",
      button: "Subscribe",
      success: "Thanks! You're subscribed.",
      error: "Something went wrong. Please try again.",
      invalid: "Please enter a valid email address.",
      privacy: "We only send relevant content. Unsubscribe anytime.",
    },
    meta: {
      home: {
        title: "Norit Sports – Scandinavian distributor of sports brands",
        description:
          "Norit Sports is a Norwegian distribution company for technical, performance-driven sports brands. Official distributor of MAPLUS ski preparation.",
      },
      maplus: {
        title: "MAPLUS – Ski tuning, bike care and textile care | Norit Sports",
        description:
          "Explore the full range of MAPLUS: high-performance ski tuning, bike maintenance and textile care. Official Norwegian distributor.",
      },
      videos: {
        title: "Technical videos – MAPLUS application methods | Norit Sports",
        description:
          "Discover MAPLUS application methods, product tips and race-prep techniques for cross-country and alpine skiing.",
      },
      retail: {
        title: "Become a retailer & where to buy MAPLUS | Norit Sports",
        description:
          "Want to carry MAPLUS in your store? Become a retailer and get technical support and marketing materials. See where to buy MAPLUS.",
      },
      partner: {
        title: "Collaborate with us – for brands and teams | Norit Sports",
        description:
          "Looking to enter the Scandinavian market, or does your team need technical support? Partner with Norit Sports.",
      },
      contact: {
        title: "Contact – Norit Sports",
        description:
          "Contact Norit Sports for product questions, technical guidance or retail partnerships.",
      },
      privacy: {
        title: "Privacy – Norit Sports",
        description:
          "How Norit Sports processes personal data from the contact form and newsletter.",
      },
    },
    footer: {
      info: "Info",
      hours: "Hours",
      hoursDays: "Monday – Friday",
      hoursTime: "9am – 6pm",
      follow: "Follow",
    },
    home: {
      heroEyebrow: "Norwegian distributor · Scandinavia",
      heroTagline: "Scandinavian distributor for performance-driven sports brands.",
      heroScroll: "Scroll",
      pillarsKicker: "What we stand for",
      pillarsTitle: "Precision, innovation and reliability",
      pillars: [
        { title: "Precision", desc: "Products engineered for measurable performance in every detail." },
        { title: "Innovation", desc: "Technology from elite athletes, made available to the whole market." },
        { title: "Reliability", desc: "Quality that athletes, teams and retailers can trust." },
      ],
      ticker: ["Precision", "Innovation", "Reliability", "Ski tuning", "Bike", "Textile", "Scandinavia"],
      strip: ["Official MAPLUS distributor", "Technical support for teams and athletes"],
      aboutKicker: "Built around performance",
      aboutBody:
        "Norit Sports is a Norwegian distribution company focused on technical and performance-driven sports brands. We work closely with athletes, teams and retailers to deliver products built around precision, innovation and reliability.",
      brandsKicker: "Brands",
      brandsBadge: "Official Norwegian distributor",
      maplusDesc:
        "High-performance ski preparation products trusted by athletes, teams and professionals.",
      exploreMaplus: "Explore MAPLUS",
      ctaTitle: "Looking to enter the Scandinavian market?",
      ctaBody:
        "We help sports brands grow through technical distribution, athlete partnerships and retail positioning across Scandinavia.",
      ctaButton: "Work with us",
    },
    maplus: {
      kicker: "Our brand",
      intro: "High-performance ski preparation products trusted by athletes, teams and professionals.",
      brandKicker: "About MAPLUS",
      brandTagline: "Just Flow",
      brandTitle: "Italian precision since 1996",
      brandBody1:
        "MAPLUS is a specialized division of the Italian chemical group MAFLON S.p.A., founded in 1996 out of the Mazza family's passion for skiing and mastery of chemistry.",
      brandBody2:
        "From racing waxes to powders, glides and maintenance products for ski, bike and textile, MAPLUS combines Italian craftsmanship with chemical precision. As an official World Cup supplier, its products are trusted by elite athletes such as Federico Pellegrino and Mattia Casse.",
      facts: [
        { value: "1996", label: "Founded" },
        { value: "Made in Italy", label: "Developed & produced" },
        { value: "World Cup", label: "Official supplier" },
      ],
      linesLabel: "Product lines",
      lines: ["Xcelerate", "GM", "BP10", "Racing Base", "XC Line", "Block Line"],
      productsKicker: "Explore the range",
      downloadCatalog: "Download catalog",
      viewGuide: "View guide",
      catSki: "Ski tuning",
      catSkiDesc: "Glide, wax, powders and cleaners for cross-country and alpine at the highest level.",
      catBike: "Bike care",
      catBikeDesc: "Maintenance and cleaning to keep your bike fast and reliable.",
      catTextile: "Textile care",
      catTextileDesc: "Proofing and washing that preserve performance in technical sportswear.",
      videosTitle: "Technical videos",
      videosDesc: "Product application and technical support for cross-country and alpine skiing.",
      videosButton: "Explore technical videos",
    },
    videos: {
      kicker: "Technical videos",
      intro:
        "Discover MAPLUS application methods, product tips and race-prep techniques.",
      all: "All",
      categories: {
        "Base wax": "Base wax",
        "Xcelerate Pro Line": "Xcelerate Pro Line",
        "GM line": "GM line",
        Cleaner: "Cleaner",
      },
    },
    retail: {
      kicker: "Retailers",
      intro:
        "Want to carry MAPLUS in your store? We support retailers with products, technical expertise and marketing materials.",
      becomeKicker: "For stores",
      becomeTitle: "Become a MAPLUS retailer",
      becomeWhy: "Why stock MAPLUS",
      becomeBody:
        "As the official Norwegian distributor, we make it easy to stock MAPLUS. You get a complete range, expert support and materials that help you sell.",
      points: [
        "Competitive terms",
        "Technical training and support",
        "Marketing support and materials",
        "Close follow-up throughout the season",
      ],
      cta: "Get in touch",
      whereTitle: "Where to buy MAPLUS",
      whereEmpty: "Get in touch and we'll help you find your nearest retailer.",
      visit: "Visit",
    },
    partner: {
      kicker: "Collaborate with us",
      intro:
        "Norit Sports bridges technical sports brands and the Scandinavian market – and supports the teams and athletes who use them.",
      brandsTitle: "For brands",
      brandsBody:
        "Looking to enter the Scandinavian market? We offer technical distribution, athlete partnerships and retail positioning across Scandinavia.",
      brandsPoints: [
        "Technical distribution and logistics",
        "Retail positioning",
        "Athlete and team partnerships",
      ],
      teamsTitle: "For teams and athletes",
      teamsBody:
        "We support teams and athletes with products, technical service and preparation expertise at the highest level – in training and competition.",
      teamsPoints: [
        "Products and technical support",
        "Preparation expertise",
        "Season-long follow-up",
      ],
      ctaButton: "Get in touch",
    },
    contact: {
      kicker: "Contact us",
      intro:
        "If you have questions about our products, require technical guidance, or are interested in carrying our brands as a retailer, please contact us using the form below or email us directly at info@norit-sports.no. We aim to respond as quickly as possible.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send",
      formSending: "Sending …",
      formSuccess: "Thanks! Your message has been sent. We'll reply as soon as we can.",
      formError: "Something went wrong. Please try again, or email info@norit-sports.no.",
      formInvalid: "Please fill in all fields with a valid email address.",
      detailsTitle: "Contact details",
    },
  },
};

// Newsletter signup endpoint. Currently points to the same Formspree form as
// the contact form — signups arrive tagged with subject "Newsletter signup"
// and a hidden field type=newsletter so they're easy to filter. To move to a
// dedicated tool later (Brevo/Mailchimp/Buttondown), just swap this URL.
// Leave empty ("") for demo mode (validates + shows success without sending).
export const NEWSLETTER_ENDPOINT = "https://formspree.io/f/xqejervo";

// Contact form endpoint. Leave empty for demo mode (validates + shows success
// without sending). To go live with Formspree: create a form at formspree.io
// and paste its endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
// The form POSTs { name, email, message } as form-data with Accept: application/json.
export const CONTACT_ENDPOINT = "https://formspree.io/f/xqejervo";

// Retailers that stock MAPLUS. Populate with real stores to show them on the
// /forhandlere (retail) page. Empty = the page shows a "contact us to find your
// nearest retailer" message instead of a list.
export type Retailer = { name: string; city: string; url?: string };
export const RETAILERS: Retailer[] = [];

// Cloudflare Web Analytics (cookieless, privacy-friendly). Paste the token from
// your Cloudflare dashboard → Web Analytics → (site) → "JS snippet". Leave empty
// to disable (no script is injected). Works on any host, no Cloudflare proxy needed.
export const CLOUDFLARE_ANALYTICS_TOKEN = "399b7cce8c3345a8aea31de642a731c4";

export const CATALOGS = {
  ski: "/catalogs/maplus-catalogue-26-27.pdf",
  bike: "/catalogs/maplus-bike-care.pdf",
  textile: "/catalogs/maplus-textile-care.pdf",
};

export type VideoItem = {
  id: string;
  title: string;
  category: "Base wax" | "Xcelerate Pro Line" | "GM line" | "Cleaner";
};

export const VIDEOS: VideoItem[] = [
  { id: "PdmD1EMwoQM", title: "Arctic base powder", category: "Base wax" },
  { id: "GVDpVtiQUg8", title: "Liquid bases", category: "Base wax" },
  { id: "ZYvgys-YMFE", title: "BP10 liquid", category: "Base wax" },
  { id: "yOxwNI_3IU0", title: "Base waxes", category: "Base wax" },
  { id: "-7kJ9CBJfqE", title: "Xcelerate Pro liquid", category: "Xcelerate Pro Line" },
  { id: "vbe4kuXwBMM", title: "Xcelerate Pro powder", category: "Xcelerate Pro Line" },
  { id: "gXZjTl_2QPw", title: "Xcelerate Pro solid", category: "Xcelerate Pro Line" },
  { id: "WjSV6ZFUhIo", title: "GM powder", category: "GM line" },
  { id: "uzT8v7A-2tA", title: "GM Boost liquid", category: "GM line" },
  { id: "B1aSVShTado", title: "Ski cleaning", category: "Cleaner" },
];
