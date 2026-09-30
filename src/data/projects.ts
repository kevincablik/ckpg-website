export type FeaturedProject = {
  id: string;
  name: string;
  location: string;
  line: string;
  kicker: string;
  headline: string;
  summary: string;
  body: string[];
  bullets: string[];
  image: {
    src: string;
    alt: string;
  };
  extraImage?: {
    src: string;
    alt: string;
  };
  href: string;
  externalUrl?: string;
  externalLabel?: string;
};

export const seventhAndFranklinPhase2: FeaturedProject = {
  id: "seventh-and-franklin-phase-2",
  name: "Seventh & Franklin Phase 2",
  location: "Downtown Boise",
  line: "Downtown Boise · Building B",
  kicker: "In progress · Building B · Downtown Boise",
  headline: "The next chapter at Seventh & Franklin",
  summary: "Building B continues the Seventh & Franklin community in Downtown Boise.",
  body: ["Building B continues the Seventh & Franklin community in Downtown Boise."],
  bullets: [],
  image: {
    src: "/images/seventh-franklin-phase2-01.jpg",
    alt: "Exterior rendering of Seventh & Franklin Phase 2, Building B, in Downtown Boise.",
  },
  extraImage: {
    src: "/images/seventh-franklin-phase2-02.jpg",
    alt: "Street elevation rendering of Seventh & Franklin Phase 2, Building B, in Downtown Boise.",
  },
  href: "/projects/seventh-and-franklin-phase-2",
  externalUrl: "https://seventhandfranklin.com",
  externalLabel: "seventhandfranklin.com",
};

export const seventhAndFranklinPhase3: FeaturedProject = {
  id: "seventh-and-franklin-phase-3",
  name: "Seventh & Franklin Phase 3",
  location: "711 W Franklin, Downtown Boise",
  line: "Downtown Boise · 711 W Franklin",
  kicker: "Current · 711 W Franklin",
  headline: "The last phase of the community",
  summary: "The last phase of Seventh & Franklin is at 711 W Franklin in Downtown Boise.",
  body: ["The last phase of Seventh & Franklin is at 711 W Franklin in Downtown Boise."],
  bullets: [],
  image: {
    src: "/images/seventh-franklin-phase3-01.jpg",
    alt: "Aerial rendering of Seventh & Franklin Phase 3 at 711 W Franklin in Downtown Boise.",
  },
  extraImage: {
    src: "/images/seventh-franklin-phase3-02.jpg",
    alt: "Street rendering of Seventh & Franklin Phase 3 at 711 W Franklin in Downtown Boise.",
  },
  href: "/projects/seventh-and-franklin-phase-3",
  externalUrl: "https://seventhandfranklin.com",
  externalLabel: "seventhandfranklin.com",
};

export const seventhAndFranklin: FeaturedProject = {
  id: "seventh-and-franklin",
  name: "Seventh & Franklin Phase 1",
  location: "Downtown Boise",
  line: "Downtown Boise",
  kicker: "Completed · Downtown Boise",
  headline: "Historic landmark, reimagined",
  summary:
    "Seventh & Franklin reimagines the historic J.W. McLean House, originally designed in 1903, as contemporary residences at the gateway to Downtown Boise.",
  body: [
    "The J.W. McLean House was originally designed in 1903 as brick-terraced residences at Seventh and Franklin. Seventh & Franklin reimagines that landmark character for contemporary living: historic brickwork paired with a modern addition, light-filled interiors, and a downtown address that still feels like a retreat.",
    "Each residence is composed for privacy while remaining at the gateway to Downtown Boise, close to dining, culture, parks, and the Boise River. Private rooftop terraces look toward Downtown Boise, the Idaho State Capitol, and the foothills. Designed by Pivot North Architecture.",
  ],
  bullets: [],
  image: {
    src: "/images/seventh-franklin-exterior.jpg",
    alt: "Exterior rendering of Seventh & Franklin Phase 1 in Downtown Boise, with the historic brick residence beside a contemporary townhome addition.",
  },
  extraImage: {
    src: "/images/seventh-franklin-dusk.jpg",
    alt: "Dusk rendering of Seventh & Franklin Phase 1 in Downtown Boise, with illuminated interiors and rooftop terraces.",
  },
  href: "/projects/seventh-and-franklin",
  externalUrl: "https://seventhandfranklin.com",
  externalLabel: "seventhandfranklin.com",
};

export const midtownHeights: FeaturedProject = {
  id: "midtown-heights",
  name: "Midtown Heights",
  location: "1709 S Federal Way, Boise",
  line: "Boise · 35 townhomes",
  kicker: "Completed · 1709 S Federal Way, Boise",
  headline: "Thirty-five townhomes in Boise",
  summary:
    "Midtown Heights is 35 townhomes at 1709 S Federal Way in Boise. The community was sold to a Berkshire Hathaway subsidiary.",
  body: [
    "The townhomes are at 1709 S Federal Way in Boise.",
    "The community was sold to a Berkshire Hathaway subsidiary.",
  ],
  bullets: [],
  image: {
    src: "/images/midtown-heights-roof-1.jpg",
    alt: "Rooftop terrace rendering at Midtown Heights, 1709 S Federal Way in Boise.",
  },
  extraImage: {
    src: "/images/midtown-heights-roof-2.jpg",
    alt: "Rooftop lounge rendering at Midtown Heights in Boise.",
  },
  href: "/projects/midtown-heights",
};

export const kootenaiTownhomes: FeaturedProject = {
  id: "kootenai-townhomes",
  name: "Kootenai Townhomes",
  location: "2294 W Kootenai Street, Boise",
  line: "Boise · 17 townhomes",
  kicker: "Completed · 2294 W Kootenai Street, Boise",
  headline: "Seventeen townhomes in Boise",
  summary: "Kootenai Townhomes is 17 townhomes at 2294 W Kootenai Street in Boise.",
  body: ["The townhomes are at 2294 W Kootenai Street in Boise."],
  bullets: [],
  image: {
    src: "/images/kootenai-aerial-dusk.jpg",
    alt: "Dusk aerial of Kootenai Townhomes at 2294 W Kootenai Street in Boise.",
  },
  href: "/projects/kootenai-townhomes",
};

export const k2Apartments: FeaturedProject = {
  id: "k2-apartments",
  name: "K2 Apartments",
  location: "2219 W Kootenai Street, Boise",
  line: "Boise · Market-rate multifamily",
  kicker: "Completed · 2219 W Kootenai Street, Boise",
  headline: "Market-rate multifamily near Boise State",
  summary:
    "K2 Apartments is a market-rate multifamily community at 2219 W Kootenai Street in Boise, aimed at the Boise State University market.",
  body: [
    "The community is at 2219 W Kootenai Street in Boise and is aimed at the Boise State University market.",
  ],
  bullets: [],
  image: {
    src: "/images/k2-dusk.jpg",
    alt: "Dusk exterior of K2 Apartments at 2219 W Kootenai Street in Boise.",
  },
  extraImage: {
    src: "/images/k2-aerial.jpg",
    alt: "Aerial view of K2 Apartments at 2219 W Kootenai Street in Boise.",
  },
  href: "/projects/k2-apartments",
};

export const rvr410: FeaturedProject = {
  id: "410-rvr",
  name: "410 RVR",
  location: "410 N River Street, Hailey",
  line: "Hailey · 12 townhomes",
  kicker: "Completed · 410 N River Street, Hailey",
  headline: "Twelve townhomes on River Street",
  summary: "410 RVR is 12 townhomes at 410 N River Street in Hailey.",
  body: ["The townhomes are at 410 N River Street in Hailey."],
  bullets: [],
  image: {
    src: "/images/410-rvr-photo-02.jpg",
    alt: "410 RVR townhomes at 410 N River Street in Hailey, with balconies and mountain views.",
  },
  extraImage: {
    src: "/images/410-rvr-photo-01.jpg",
    alt: "Aerial view of the 410 RVR townhomes along the street in Hailey.",
  },
  href: "/projects/410-rvr",
};

export const midRvr: FeaturedProject = {
  id: "mid-rvr",
  name: "MID RVR",
  location: "317 N River Street, Hailey",
  line: "Hailey · 10 townhomes",
  kicker: "Completed · 317 N River Street, Hailey",
  headline: "Mountain living on River Street",
  summary:
    "MID RVR is 10 townhomes in Hailey, designed by Pivot North Architecture and developed in partnership with CK Property Group, with private garages and rooftop decks.",
  body: [
    "MID RVR brings lock-and-leave mountain living to River Street in Hailey, near the gateway to Sun Valley. The community is 10 townhomes across two buildings, with private garages and rooftop decks.",
    "Designed by Pivot North Architecture, built by Conrad Brothers, and developed in partnership with CK Property Group.",
  ],
  bullets: [],
  image: {
    src: "/images/midrvr-02.jpg",
    alt: "Twilight view of MID RVR townhomes at the corner of River Street in Hailey, with mountains beyond.",
  },
  extraImage: {
    src: "/images/midrvr-01.jpg",
    alt: "Twilight street view of MID RVR townhomes in Hailey.",
  },
  href: "/projects/mid-rvr",
};

export const currentProjects = [seventhAndFranklinPhase2, seventhAndFranklinPhase3] as const;

export const completedProjects = [
  seventhAndFranklin,
  midtownHeights,
  kootenaiTownhomes,
  k2Apartments,
  rvr410,
  midRvr,
] as const;

export const featuredProjects = [...currentProjects, ...completedProjects] as const;

export const selectPortfolio = [
  { name: "Edge on Lucy", place: "Atlanta" },
  { name: "975 Piedmont", place: "Atlanta" },
  { name: "Skypointe", place: "Atlanta" },
  { name: "1463 LaFrance", place: "Atlanta" },
  { name: "Skyhill", place: "Atlanta" },
  { name: "Metropolitan at Phipps", place: "Atlanta" },
] as const;

export const howWeWork = [
  {
    number: "01",
    title: "Prime locations",
    text: "Careful site selection in highly desirable urban and infill settings—places people already want to live, with access to daily life, culture, and landscape.",
  },
  {
    number: "02",
    title: "Sophisticated design",
    text: "Architecture and interiors that respect context, emphasize light, privacy, and outdoor living, and hold up to the neighborhoods they join.",
  },
  {
    number: "03",
    title: "Quality execution",
    text: "Construction expertise and craftsmanship at every stage, supported by thorough due diligence and the financial strength of a privately funded company.",
  },
] as const;
