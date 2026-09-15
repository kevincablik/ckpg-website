import type { ImageMetadata } from "astro";

import seventhFranklinExterior from "../assets/images/seventh-franklin-exterior.jpg";
import seventhFranklinDusk from "../assets/images/seventh-franklin-dusk.jpg";
import seventhFranklinLiving from "../assets/images/seventh-franklin-living-room.jpg";
import seventhFranklinRoof from "../assets/images/seventh-franklin-roof-deck.jpg";
import seventhFranklinTerrace from "../assets/images/seventh-franklin-terrace.jpg";
import seventhFranklinLivingModern from "../assets/images/seventh-franklin-living-modern.jpg";
import seventhFranklinKitchen from "../assets/images/seventh-franklin-kitchen.jpg";
import seventhFranklinBedroom from "../assets/images/seventh-franklin-bedroom.jpg";
import seventhFranklinBedroomHistoric from "../assets/images/seventh-franklin-bedroom-historic.jpg";
import seventhFranklinKitchenHistoric from "../assets/images/seventh-franklin-kitchen-historic.jpg";
import seventhFranklinBath from "../assets/images/seventh-franklin-bath.jpg";
import seventhFranklinTerraceLounge from "../assets/images/seventh-franklin-terrace-lounge.jpg";

import midrvrHero from "../assets/images/midrvr-hero.jpg";
import midrvrStreet from "../assets/images/midrvr-exterior-street.jpg";
import midrvrElevation from "../assets/images/midrvr-elevation.jpg";
import midrvrRoof from "../assets/images/midrvr-roof-deck.jpg";
import midrvrDusk from "../assets/images/midrvr-dusk.jpg";
import midrvrLiving from "../assets/images/midrvr-living.jpg";
import midrvrDining from "../assets/images/midrvr-dining.jpg";
import midrvrKitchen from "../assets/images/midrvr-kitchen.jpg";
import midrvrBedroom from "../assets/images/midrvr-bedroom.jpg";
import midrvrLivingPhoto from "../assets/images/midrvr-living-photo.jpg";

import rvr410Dusk from "../assets/images/410-rvr-dusk.jpg";
import rvr410Entry from "../assets/images/410-rvr-entry.jpg";
import rvr410Terrace from "../assets/images/410-rvr-terrace.jpg";
import rvr410Roofs from "../assets/images/410-rvr-roofs.jpg";

export type GalleryImage = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  href?: string;
};

export const seventhFranklinGallery: GalleryImage[] = [
  {
    src: seventhFranklinExterior,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinDusk,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinLiving,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinRoof,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinTerrace,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinLivingModern,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinKitchen,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinBedroomHistoric,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinKitchenHistoric,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinBedroom,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinTerraceLounge,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
  {
    src: seventhFranklinBath,
    alt: "seventh&franklin, Downtown Boise",
    caption: "seventh&franklin",
  },
];

export const midRvrGallery: GalleryImage[] = [
  {
    src: midrvrHero,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrStreet,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrElevation,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrRoof,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrDusk,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrLiving,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrDining,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrKitchen,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrLivingPhoto,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrBedroom,
    alt: "MID RVR, Hailey",
    caption: "MID RVR",
  },
];

export const rvr410Gallery: GalleryImage[] = [
  {
    src: rvr410Dusk,
    alt: "410 RVR, Hailey",
    caption: "410 RVR",
  },
  {
    src: rvr410Entry,
    alt: "410 RVR, Hailey",
    caption: "410 RVR",
  },
  {
    src: rvr410Terrace,
    alt: "410 RVR, Hailey",
    caption: "410 RVR",
  },
  {
    src: rvr410Roofs,
    alt: "410 RVR, Hailey",
    caption: "410 RVR",
  },
];

export const homeHero = seventhFranklinGallery[0];
export const homeBleed = seventhFranklinGallery[4];

export const homeStrip: GalleryImage[] = [
  { ...seventhFranklinGallery[2], href: "/projects#seventh-and-franklin" },
  { ...seventhFranklinGallery[3], href: "/projects#seventh-and-franklin" },
  { ...seventhFranklinGallery[4], href: "/projects#seventh-and-franklin" },
  { ...midRvrGallery[1], href: "/projects#mid-rvr" },
  { ...midRvrGallery[3], href: "/projects#mid-rvr" },
  { ...midRvrGallery[4], href: "/projects#mid-rvr" },
  { ...rvr410Gallery[0], href: "/projects#410-rvr" },
  { ...rvr410Gallery[1], href: "/projects#410-rvr" },
  { ...seventhFranklinGallery[5], href: "/projects#seventh-and-franklin" },
  { ...seventhFranklinGallery[6], href: "/projects#seventh-and-franklin" },
];

export const homeFeaturedThumbs = {
  seventh: seventhFranklinGallery.slice(2, 6),
  mid: [midRvrGallery[1], midRvrGallery[2], midRvrGallery[3], midRvrGallery[5]],
  rvr410: rvr410Gallery.slice(1),
};
