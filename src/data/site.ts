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
  { value: "mid-rvr", label: "MID RVR" },
  { value: "other", label: "Other" },
] as const;

export type NavHref = (typeof nav)[number]["href"];
