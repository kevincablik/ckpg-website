export const site = {
  name: "CK Property Group",
  legalName: "CK Property Group, LLC",
  shortName: "CKPG",
  url: "https://ckpgdevelopment.com",
  email: "info@ckpgdevelopment.com",
  tagline: "Prime locations · Sophisticated design · Quality execution.",
  description:
    "CK Property Group develops thoughtfully designed, for-sale townhome communities in highly desirable urban locations. Founded by Anna & Kevin Cablik.",
  foundedYear: 2014,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const projectInterestOptions = [
  { value: "general", label: "General" },
  { value: "seventh-and-franklin", label: "seventh&franklin" },
  { value: "seventh-and-franklin-phase-2", label: "seventh&franklin Phase 2" },
  { value: "seventh-and-franklin-phase-3", label: "seventh&franklin Phase 3" },
  { value: "mid-rvr", label: "MID RVR" },
  { value: "410-rvr", label: "410 RVR" },
  { value: "midtown-heights", label: "Midtown Heights" },
  { value: "kootenai-townhomes", label: "Kootenai Townhomes" },
  { value: "other", label: "Other" },
] as const;

export type NavHref = (typeof nav)[number]["href"];
