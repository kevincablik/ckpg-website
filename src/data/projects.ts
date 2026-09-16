export type FeaturedProject = {
  id: string;
  name: string;
  location: string;
  kicker: string;
  headline: string;
  summary: string;
  body: string[];
  bullets: string[];
  image?: {
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
  photosPending?: boolean;
};

export const seventhAndFranklin: FeaturedProject = {
  id: "seventh-and-franklin",
  name: "seventh&franklin",
  location: "Downtown Boise",
  kicker: "Completed · Downtown Boise",
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

export const seventhAndFranklinPhase2: FeaturedProject = {
  id: "seventh-and-franklin-phase-2",
  name: "seventh&franklin Phase 2",
  location: "Downtown Boise",
  kicker: "In progress · Downtown Boise",
  headline: "The next chapter at Seventh & Franklin",
  summary:
    "seventh&franklin Phase 2 continues the Seventh & Franklin community in Downtown Boise, in the 711 W Franklin area. The project is in progress.",
  body: [
    "seventh&franklin Phase 2 continues the Seventh & Franklin community in Downtown Boise, in the 711 W Franklin area. The project is in progress.",
  ],
  bullets: ["In progress", "Downtown Boise", "711 W Franklin area"],
  image: {
    src: "/images/seventh-franklin-phase2-01.jpg",
    alt: "Exterior rendering of seventh&franklin Phase 2 in Downtown Boise.",
  },
  extraImage: {
    src: "/images/seventh-franklin-phase2-02.jpg",
    alt: "Street elevation of seventh&franklin Phase 2 in Downtown Boise.",
  },
  href: "/projects#seventh-and-franklin-phase-2",
  externalUrl: "https://seventhandfranklin.com",
  externalLabel: "seventhandfranklin.com",
};

export const seventhAndFranklinPhase3: FeaturedProject = {
  id: "seventh-and-franklin-phase-3",
  name: "seventh&franklin Phase 3",
  location: "711 W Franklin, Downtown Boise",
  kicker: "Current · 711 W Franklin",
  headline: "The last phase of the community",
  summary:
    "seventh&franklin Phase 3 is the last phase of the Seventh & Franklin community at 711 W Franklin in Downtown Boise.",
  body: [
    "seventh&franklin Phase 3 is the last phase of the Seventh & Franklin community at 711 W Franklin in Downtown Boise.",
  ],
  bullets: ["Last phase of the Seventh & Franklin community", "711 W Franklin, Downtown Boise", "Current"],
  image: {
    src: "/images/seventh-franklin-phase3-01.jpg",
    alt: "Aerial rendering of seventh&franklin Phase 3 at 711 W Franklin in Downtown Boise.",
  },
  extraImage: {
    src: "/images/seventh-franklin-phase3-02.jpg",
    alt: "Street rendering of seventh&franklin Phase 3 at 711 W Franklin in Downtown Boise.",
  },
  href: "/projects#seventh-and-franklin-phase-3",
  externalUrl: "https://seventhandfranklin.com",
  externalLabel: "seventhandfranklin.com",
};

export const midRvr: FeaturedProject = {
  id: "mid-rvr",
  name: "MID RVR",
  location: "317 N River Street, Hailey",
  kicker: "Completed · 317 N River Street, Hailey",
  headline: "Mountain living on River Street",
  summary:
    "MID RVR is a completed community of 10 townhomes at 317 N River Street in Hailey. Lock-and-leave mountain living near the gateway to Sun Valley, with private garages and rooftop decks.",
  body: [
    "MID RVR is a completed community of 10 townhomes at 317 N River Street in Hailey, near the gateway to Sun Valley. The townhomes sit across two buildings, with private garages and rooftop decks.",
    "The project is designed by Pivot North Architecture, built by Conrad Brothers, and developed in partnership with CK Property Group.",
  ],
  bullets: [
    "10 townhomes across two buildings",
    "Pivot North Architecture",
    "Conrad Brothers",
    "Private garages and rooftop decks",
  ],
  image: {
    src: "/images/midrvr-web-01.jpg",
    alt: "Twilight photograph of MID RVR townhomes at 317 N River Street in Hailey.",
  },
  extraImage: {
    src: "/images/midrvr-web-02.jpg",
    alt: "Twilight aerial of MID RVR at 317 N River Street in Hailey.",
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
    "410 RVR is a completed community of 12 townhomes at 410 N River Street in Hailey.",
  body: [
    "410 RVR is a completed community of 12 townhomes at 410 N River Street in Hailey.",
  ],
  bullets: ["12 townhomes", "410 N River Street, Hailey", "Completed"],
  image: {
    src: "/images/410-rvr-dusk.jpg",
    alt: "Dusk rendering of the 410 RVR townhomes at 410 N River Street in Hailey.",
  },
  extraImage: {
    src: "/images/410-rvr-terrace.jpg",
    alt: "Rooftop terrace at 410 RVR in Hailey.",
  },
  href: "/projects#410-rvr",
};

export const midtownHeights: FeaturedProject = {
  id: "midtown-heights",
  name: "Midtown Heights",
  location: "1709 S Federal Way, Boise",
  kicker: "Completed · 1709 S Federal Way, Boise",
  headline: "Thirty-five townhomes in Boise",
  summary:
    "Midtown Heights is a completed community of 35 townhomes at 1709 S Federal Way in Boise. CK Property Group developed and entitled the community, which was later sold to a Berkshire Hathaway subsidiary.",
  body: [
    "Midtown Heights is a completed community of 35 townhomes at 1709 S Federal Way in Boise. CK Property Group developed and entitled the community, which was later sold to a Berkshire Hathaway subsidiary.",
  ],
  bullets: ["35 townhomes", "1709 S Federal Way, Boise", "Completed"],
  image: {
    src: "/images/midtown-heights-01.jpg",
    alt: "Rooftop terrace at Midtown Heights, 1709 S Federal Way in Boise.",
  },
  extraImage: {
    src: "/images/midtown-heights-02.jpg",
    alt: "Rooftop lounge at Midtown Heights in Boise.",
  },
  href: "/projects#midtown-heights",
};

export const kootenaiTownhomes: FeaturedProject = {
  id: "kootenai-townhomes",
  name: "Kootenai Townhomes",
  location: "2294 W Kootenai St, Boise",
  kicker: "Completed · 2294 W Kootenai St, Boise",
  headline: "Seventeen townhomes in Boise",
  summary:
    "Kootenai Townhomes is a completed community of 17 townhomes at 2294 W Kootenai St in Boise.",
  body: [
    "Kootenai Townhomes is a completed community of 17 townhomes at 2294 W Kootenai St in Boise.",
  ],
  bullets: ["17 townhomes", "2294 W Kootenai St, Boise", "Completed"],
  image: {
    src: "/images/kootenai-01.jpg",
    alt: "Kootenai Townhomes at 2294 W Kootenai St in Boise.",
  },
  extraImage: {
    src: "/images/kootenai-02.jpg",
    alt: "Rear lot at Kootenai Townhomes in Boise.",
  },
  href: "/projects#kootenai-townhomes",
};

export const k2Apartments: FeaturedProject = {
  id: "k2-apartments",
  name: "K2 Apartments",
  location: "2219 W Kootenai St, Boise",
  kicker: "Completed · 2219 W Kootenai St, Boise",
  headline: "Market-rate apartments near Boise State",
  summary:
    "K2 Apartments is a completed market-rate multifamily community at 2219 W Kootenai St in Boise, near Boise State University.",
  body: [
    "K2 Apartments is a completed market-rate multifamily community at 2219 W Kootenai St in Boise, near Boise State University and aimed at that market.",
  ],
  bullets: ["Market-rate multifamily", "2219 W Kootenai St, Boise", "Completed"],
  image: {
    src: "/images/k2-07.jpg",
    alt: "Aerial photograph of K2 Apartments at 2219 W Kootenai St in Boise.",
  },
  extraImage: {
    src: "/images/k2-08.jpg",
    alt: "Dusk photograph of K2 Apartments in Boise.",
  },
  href: "/projects#k2-apartments",
};

export const deweyStreet: FeaturedProject = {
  id: "dewey-street",
  name: "Dewey Street Residences",
  location: "Boise",
  kicker: "Completed · Boise",
  headline: "A completed Boise community",
  summary: "Dewey Street Residences is a completed Boise community. Photos coming soon.",
  body: ["Photos coming soon."],
  bullets: ["Boise", "Completed"],
  href: "/projects#dewey-street",
  photosPending: true,
};

export const currentProjects = [seventhAndFranklinPhase2, seventhAndFranklinPhase3] as const;

export const completedProjects = [
  seventhAndFranklin,
  midtownHeights,
  kootenaiTownhomes,
  k2Apartments,
  rvr410,
  midRvr,
  deweyStreet,
] as const;

export const featuredProjects = [...currentProjects, ...completedProjects] as const;

export const atlantaCommunities = [
  "1463 LaFrance",
  "Skyhill",
  "Metropolitan at Phipps",
] as const;

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
