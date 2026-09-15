export type FeaturedProject = {
  id: string;
  name: string;
  location: string;
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

export const seventhAndFranklin: FeaturedProject = {
  id: "seventh-and-franklin",
  name: "seventh&franklin",
  location: "Downtown Boise",
  kicker: "Downtown Boise",
  headline: "Historic landmark, reimagined",
  summary:
    "At the gateway to Downtown Boise, seventh&franklin blends the character of the historic J.W. McLean House—originally designed in 1903—with contemporary architecture, designer interiors, and private rooftop living. Residences are positioned for privacy and retreat while remaining steps from dining, culture, parks, and the Boise River.",
  body: [
    "The J.W. McLean House was originally designed in 1903 as brick-terraced residences at Seventh and Franklin. seventh&franklin reimagines that landmark character for contemporary living: historic brickwork paired with a modern addition, light-filled interiors, and a downtown address that still feels like a retreat.",
    "Each residence is composed for privacy while remaining at the gateway to Downtown Boise—close to dining, culture, parks, and the Boise River. Architecture is by Pivot North Architects.",
  ],
  bullets: [
    "Private rooftop terraces with views toward Downtown Boise, the Idaho State Capitol, and the foothills",
    "Historic brickwork paired with modern exteriors and light-filled interiors",
    "Architecture by Pivot North Architects",
  ],
  image: {
    src: "/images/seventh-franklin-exterior.jpg",
    alt: "Exterior rendering of seventh&franklin at Seventh and Franklin in Downtown Boise, pairing the historic brick residence with a contemporary townhome addition.",
  },
  extraImage: {
    src: "/images/seventh-franklin-dusk.jpg",
    alt: "Dusk rendering of seventh&franklin showing illuminated interiors, rooftop terraces, and the historic brick façade.",
  },
  href: "/projects#seventh-and-franklin",
  externalUrl: "https://seventhandfranklin.com",
  externalLabel: "seventhandfranklin.com",
};

export const midRvr: FeaturedProject = {
  id: "mid-rvr",
  name: "MID RVR",
  location: "317 N River Street, Hailey",
  kicker: "317 N River Street, Hailey",
  headline: "Mountain living on River Street",
  summary:
    "MID RVR is a collection of 10 townhomes in Hailey, designed by Pivot North Architecture and developed in partnership with CK Property Group. Lock-and-leave mountain living near the gateway to Sun Valley, private garages and rooftop decks.",
  body: [
    "MID RVR brings lock-and-leave mountain living to River Street in Hailey, near the gateway to Sun Valley. The community is a collection of 10 townhomes across two buildings, with private garages and rooftop decks.",
    "The project is designed by Pivot North Architecture, built by Conrad Brothers, and developed in partnership with CK Property Group. 410 RVR is a separate completed community at 410 N River Street.",
  ],
  bullets: [
    "10 townhomes across two buildings",
    "Pivot North Architecture",
    "Conrad Brothers",
    "Private garages and rooftop decks",
  ],
  image: {
    src: "/images/midrvr-hero.jpg",
    alt: "Exterior rendering of MID RVR townhomes on River Street in Hailey, with gabled volumes, balconies, and mountain landscape beyond.",
  },
  href: "/projects#mid-rvr",
};

export const rvr410: FeaturedProject = {
  id: "410-rvr",
  name: "410 RVR",
  location: "410 N River Street, Hailey",
  kicker: "Completed · 410 N River Street, Hailey",
  headline: "Twelve townhomes on River Street",
  summary:
    "410 RVR is a completed community of 12 townhomes at 410 N River Street in Hailey. It is a separate project from MID RVR at 317 N River Street.",
  body: [
    "410 RVR is a completed community of 12 townhomes at 410 N River Street in Hailey.",
    "It is a separate project from MID RVR at 317 N River Street.",
  ],
  bullets: ["12 townhomes", "410 N River Street, Hailey", "Completed"],
  image: {
    src: "/images/410-rvr-dusk.jpg",
    alt: "Dusk view of the 410 RVR townhomes at 410 N River Street in Hailey.",
  },
  extraImage: {
    src: "/images/410-rvr-entry.jpg",
    alt: "Completed townhome entries at 410 RVR in Hailey.",
  },
  href: "/projects#410-rvr",
};

export const featuredProjects = [seventhAndFranklin, midRvr, rvr410] as const;

export const homePortfolio = [
  { name: "Kootenai Townhomes", place: "Boise" },
  { name: "Midtown Heights", place: "Boise" },
  { name: "410 RVR", place: "Hailey", status: "Completed" },
] as const;

export const atlantaCommunities = [
  "1463 LaFrance",
  "Skyhill",
  "Metropolitan at Phipps",
] as const;

export const selectPortfolio = [
  { name: "Kootenai Townhomes", place: "Boise" },
  { name: "Midtown Heights", place: "Boise" },
  { name: "410 RVR", place: "Hailey", status: "Completed" },
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
