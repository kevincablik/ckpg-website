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

import midrvrWeb01 from "../assets/images/midrvr-web-01.jpg";
import midrvrWeb02 from "../assets/images/midrvr-web-02.jpg";
import midrvrWeb03 from "../assets/images/midrvr-web-03.jpg";
import midrvrWeb04 from "../assets/images/midrvr-web-04.jpg";
import midrvrWeb05 from "../assets/images/midrvr-web-05.jpg";
import midrvrWeb06 from "../assets/images/midrvr-web-06.jpg";
import midrvrWeb07 from "../assets/images/midrvr-web-07.jpg";
import midrvrWeb08 from "../assets/images/midrvr-web-08.jpg";
import midrvrWeb09 from "../assets/images/midrvr-web-09.jpg";
import midrvrWeb10 from "../assets/images/midrvr-web-10.jpg";

import rvr410Dusk from "../assets/images/410-rvr-dusk.jpg";
import rvr410Living from "../assets/images/410-rvr-living.jpg";
import rvr410Aerial from "../assets/images/410-rvr-aerial.jpg";
import rvr410Bedroom from "../assets/images/410-rvr-bedroom.jpg";
import rvr410Terrace from "../assets/images/410-rvr-terrace.jpg";
import rvr410TerraceRender from "../assets/images/410-rvr-terrace-render.jpg";
import rvr410Bath from "../assets/images/410-rvr-bath.jpg";
import rvr410Interior from "../assets/images/410-rvr-interior.jpg";

import midtownHeightsTerrace from "../assets/images/midtown-heights-01.jpg";
import midtownHeightsLounge from "../assets/images/midtown-heights-02.jpg";

import kootenai01 from "../assets/images/kootenai-01.jpg";
import kootenai02 from "../assets/images/kootenai-02.jpg";
import kootenai03 from "../assets/images/kootenai-03.jpg";
import kootenai04 from "../assets/images/kootenai-04.jpg";
import kootenai05 from "../assets/images/kootenai-05.jpg";
import kootenai06 from "../assets/images/kootenai-06.jpg";
import kootenai07 from "../assets/images/kootenai-07.jpg";
import kootenai08 from "../assets/images/kootenai-08.jpg";

import k2Exterior from "../assets/images/k2-01.jpg";
import k2Massing from "../assets/images/k2-02.jpg";
import k2Living from "../assets/images/k2-03.jpg";
import k2Kitchen from "../assets/images/k2-04.jpg";
import k2Interior from "../assets/images/k2-05.jpg";
import k2Windows from "../assets/images/k2-06.jpg";

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
    src: midrvrWeb01,
    alt: "Twilight photograph of MID RVR townhomes at 317 N River Street in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb02,
    alt: "Twilight aerial of MID RVR at 317 N River Street in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb03,
    alt: "Twilight street elevation of MID RVR in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb04,
    alt: "Twilight aerial of MID RVR townhomes and rooftop decks in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb05,
    alt: "Living room at MID RVR Unit 9 in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb06,
    alt: "Living room looking toward the mountains at MID RVR Unit 9 in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb07,
    alt: "Living room, kitchen, and stair at MID RVR Unit 9 in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb08,
    alt: "Bedroom at MID RVR Unit 9 in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb09,
    alt: "Living and kitchen detail at MID RVR Unit 9 in Hailey",
    caption: "MID RVR",
  },
  {
    src: midrvrWeb10,
    alt: "Bedroom at MID RVR Unit 9 in Hailey",
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

export const midtownHeightsGallery: GalleryImage[] = [
  {
    src: midtownHeightsTerrace,
    alt: "Rooftop terrace at Midtown Heights, 1709 S Federal Way in Boise",
    caption: "Midtown Heights",
  },
  {
    src: midtownHeightsLounge,
    alt: "Rooftop lounge at Midtown Heights in Boise",
    caption: "Midtown Heights",
  },
];

export const kootenaiGallery: GalleryImage[] = [
  {
    src: kootenai01,
    alt: "Kootenai Townhomes at 2294 W Kootenai St in Boise",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai02,
    alt: "Rear lot at Kootenai Townhomes in Boise",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai03,
    alt: "Site pad at Kootenai Townhomes in Boise",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai04,
    alt: "Kootenai Townhomes construction site in Boise",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai05,
    alt: "Street edge at Kootenai Townhomes in Boise",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai06,
    alt: "Kootenai Townhomes site looking toward downtown Boise",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai07,
    alt: "Kootenai Townhomes site and neighboring houses in Boise",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai08,
    alt: "Kootenai Townhomes construction looking toward adjacent buildings in Boise",
    caption: "Kootenai Townhomes",
  },
];

export const k2Gallery: GalleryImage[] = [
  {
    src: k2Exterior,
    alt: "Exterior rendering of K2 Apartments at 2219 W Kootenai St in Boise",
    caption: "K2 Apartments",
  },
  {
    src: k2Massing,
    alt: "Exterior massing of K2 Apartments in Boise",
    caption: "K2 Apartments",
  },
  {
    src: k2Living,
    alt: "Interior at K2 Apartments in Boise",
    caption: "K2 Apartments",
  },
  {
    src: k2Kitchen,
    alt: "Kitchen at K2 Apartments in Boise",
    caption: "K2 Apartments",
  },
  {
    src: k2Interior,
    alt: "Living area at K2 Apartments in Boise",
    caption: "K2 Apartments",
  },
  {
    src: k2Windows,
    alt: "Windows at K2 Apartments in Boise",
    caption: "K2 Apartments",
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
  { ...midtownHeightsGallery[0], href: "/projects#midtown-heights" },
  { ...midtownHeightsGallery[1], href: "/projects#midtown-heights" },
  { ...kootenaiGallery[0], href: "/projects#kootenai-townhomes" },
  { ...kootenaiGallery[1], href: "/projects#kootenai-townhomes" },
  { ...k2Gallery[0], href: "/projects#k2-apartments" },
  { ...k2Gallery[3], href: "/projects#k2-apartments" },
];

export const homeFeaturedThumbs = {
  seventh: seventhFranklinGallery.slice(2, 6),
  mid: [midRvrGallery[0], midRvrGallery[1], midRvrGallery[4], midRvrGallery[5]],
  rvr410: [rvr410Gallery[1], rvr410Gallery[2], rvr410Gallery[3], rvr410Gallery[4]],
};
