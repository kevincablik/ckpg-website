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

import seventhFranklinPhase201 from "../assets/images/seventh-franklin-phase2-01.jpg";
import seventhFranklinPhase202 from "../assets/images/seventh-franklin-phase2-02.jpg";
import seventhFranklinPhase203 from "../assets/images/seventh-franklin-phase2-03.jpg";

import seventhFranklinPhase301 from "../assets/images/seventh-franklin-phase3-01.jpg";
import seventhFranklinPhase302 from "../assets/images/seventh-franklin-phase3-02.jpg";
import seventhFranklinPhase303 from "../assets/images/seventh-franklin-phase3-03.jpg";
import seventhFranklinPhase304 from "../assets/images/seventh-franklin-phase3-04.jpg";
import seventhFranklinPhase305 from "../assets/images/seventh-franklin-phase3-05.jpg";
import seventhFranklinPhase306 from "../assets/images/seventh-franklin-phase3-06.jpg";
import seventhFranklinPhase307 from "../assets/images/seventh-franklin-phase3-07.jpg";

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
import rvr410Living from "../assets/images/410-rvr-living.jpg";
import rvr410Aerial from "../assets/images/410-rvr-aerial.jpg";
import rvr410Bedroom from "../assets/images/410-rvr-bedroom.jpg";
import rvr410Terrace from "../assets/images/410-rvr-terrace.jpg";
import rvr410TerraceRender from "../assets/images/410-rvr-terrace-render.jpg";
import rvr410Bath from "../assets/images/410-rvr-bath.jpg";
import rvr410Interior from "../assets/images/410-rvr-interior.jpg";

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

export const seventhFranklinPhase2Gallery: GalleryImage[] = [
  {
    src: seventhFranklinPhase201,
    alt: "Exterior of seventh&franklin Phase 2 in Downtown Boise",
    caption: "seventh&franklin Phase 2",
  },
  {
    src: seventhFranklinPhase202,
    alt: "Street elevation of seventh&franklin Phase 2 in Downtown Boise",
    caption: "seventh&franklin Phase 2",
  },
  {
    src: seventhFranklinPhase203,
    alt: "Rooftop terrace at seventh&franklin Phase 2 in Downtown Boise",
    caption: "seventh&franklin Phase 2",
  },
];

export const seventhFranklinPhase3Gallery: GalleryImage[] = [
  {
    src: seventhFranklinPhase301,
    alt: "Aerial rendering of seventh&franklin Phase 3 at 711 W Franklin in Downtown Boise",
    caption: "seventh&franklin Phase 3",
  },
  {
    src: seventhFranklinPhase302,
    alt: "Street rendering of seventh&franklin Phase 3 at 711 W Franklin in Downtown Boise",
    caption: "seventh&franklin Phase 3",
  },
  {
    src: seventhFranklinPhase303,
    alt: "Bar lounge at seventh&franklin Phase 3",
    caption: "seventh&franklin Phase 3",
  },
  {
    src: seventhFranklinPhase304,
    alt: "Kitchen at seventh&franklin Phase 3",
    caption: "seventh&franklin Phase 3",
  },
  {
    src: seventhFranklinPhase305,
    alt: "Living room at seventh&franklin Phase 3",
    caption: "seventh&franklin Phase 3",
  },
  {
    src: seventhFranklinPhase306,
    alt: "Bathroom at seventh&franklin Phase 3",
    caption: "seventh&franklin Phase 3",
  },
  {
    src: seventhFranklinPhase307,
    alt: "Roof deck at seventh&franklin Phase 3",
    caption: "seventh&franklin Phase 3",
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
    alt: "Dusk rendering of the 410 RVR townhomes at 410 N River Street in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410Living,
    alt: "Living room at 410 RVR in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410Aerial,
    alt: "Aerial rendering of 410 RVR in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410Bedroom,
    alt: "Bedroom at 410 RVR in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410Terrace,
    alt: "Rooftop terrace at 410 RVR in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410TerraceRender,
    alt: "Rooftop terrace rendering of 410 RVR in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410Bath,
    alt: "Bathroom at 410 RVR in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410Interior,
    alt: "Interior rendering of 410 RVR in Hailey.",
    caption: "410 RVR",
  },
];

export const homeHero = seventhFranklinGallery[0];
export const homeBleed = seventhFranklinGallery[4];

export const homeStrip: GalleryImage[] = [
  { ...seventhFranklinPhase2Gallery[0], href: "/projects#seventh-and-franklin-phase-2" },
  { ...seventhFranklinPhase2Gallery[1], href: "/projects#seventh-and-franklin-phase-2" },
  { ...seventhFranklinPhase3Gallery[0], href: "/projects#seventh-and-franklin-phase-3" },
  { ...seventhFranklinPhase3Gallery[1], href: "/projects#seventh-and-franklin-phase-3" },
  { ...seventhFranklinGallery[2], href: "/projects#seventh-and-franklin" },
  { ...seventhFranklinGallery[3], href: "/projects#seventh-and-franklin" },
  { ...midRvrGallery[1], href: "/projects#mid-rvr" },
  { ...midRvrGallery[3], href: "/projects#mid-rvr" },
  { ...rvr410Gallery[0], href: "/projects#410-rvr" },
  { ...rvr410Gallery[4], href: "/projects#410-rvr" },
];

export const homeFeaturedThumbs = {
  seventh: seventhFranklinGallery.slice(2, 6),
  mid: [midRvrGallery[1], midRvrGallery[2], midRvrGallery[3], midRvrGallery[5]],
  rvr410: [rvr410Gallery[1], rvr410Gallery[2], rvr410Gallery[3], rvr410Gallery[4]],
};
