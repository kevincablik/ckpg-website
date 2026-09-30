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

import midrvr01 from "../assets/images/midrvr-01.jpg";
import midrvr02 from "../assets/images/midrvr-02.jpg";
import midrvr03 from "../assets/images/midrvr-03.jpg";
import midrvr04 from "../assets/images/midrvr-04.jpg";
import midrvr05 from "../assets/images/midrvr-05.jpg";
import midrvr06 from "../assets/images/midrvr-06.jpg";
import midrvr07 from "../assets/images/midrvr-07.jpg";
import midrvr08 from "../assets/images/midrvr-08.jpg";
import midrvr09 from "../assets/images/midrvr-09.jpg";
import midrvr10 from "../assets/images/midrvr-10.jpg";

import rvr410Exterior from "../assets/images/410-rvr-photo-02.jpg";
import rvr410Aerial from "../assets/images/410-rvr-photo-01.jpg";
import rvr410Living from "../assets/images/410-rvr-photo-04.jpg";
import rvr410Bedroom from "../assets/images/410-rvr-photo-03.jpg";

import midtownHeightsRoof1 from "../assets/images/midtown-heights-roof-1.jpg";
import midtownHeightsRoof2 from "../assets/images/midtown-heights-roof-2.jpg";

import kootenai01 from "../assets/images/kootenai-01.jpg";
import kootenai02 from "../assets/images/kootenai-02.jpg";
import kootenai03 from "../assets/images/kootenai-03.jpg";
import kootenai04 from "../assets/images/kootenai-04.jpg";
import kootenai05 from "../assets/images/kootenai-05.jpg";
import kootenai06 from "../assets/images/kootenai-06.jpg";
import kootenai07 from "../assets/images/kootenai-07.jpg";
import kootenai08 from "../assets/images/kootenai-08.jpg";

import k2Dusk from "../assets/images/k2-08.jpg";
import k2Aerial from "../assets/images/k2-07.jpg";

export type GalleryImage = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  href?: string;
};

export const seventhFranklinGallery: GalleryImage[] = [
  {
    src: seventhFranklinExterior,
    alt: "Exterior rendering of Seventh & Franklin Phase 1 in Downtown Boise, with the historic brick residence beside a contemporary townhome addition.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinDusk,
    alt: "Dusk rendering of Seventh & Franklin Phase 1 in Downtown Boise, with illuminated interiors and rooftop terraces.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinLiving,
    alt: "Living room rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinRoof,
    alt: "Roof deck rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinTerrace,
    alt: "Terrace rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinLivingModern,
    alt: "Living area rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinKitchen,
    alt: "Kitchen rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinBedroomHistoric,
    alt: "Bedroom rendering in the historic residence at Seventh & Franklin Phase 1.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinKitchenHistoric,
    alt: "Kitchen rendering in the historic residence at Seventh & Franklin Phase 1.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinBedroom,
    alt: "Bedroom rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinTerraceLounge,
    alt: "Terrace lounge rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
  {
    src: seventhFranklinBath,
    alt: "Bathroom rendering at Seventh & Franklin Phase 1 in Downtown Boise.",
    caption: "Seventh & Franklin Phase 1",
  },
];

export const seventhFranklinPhase2Gallery: GalleryImage[] = [
  {
    src: seventhFranklinPhase201,
    alt: "Exterior rendering of Seventh & Franklin Phase 2, Building B, in Downtown Boise.",
    caption: "Seventh & Franklin Phase 2",
  },
  {
    src: seventhFranklinPhase202,
    alt: "Street elevation rendering of Seventh & Franklin Phase 2, Building B, in Downtown Boise.",
    caption: "Seventh & Franklin Phase 2",
  },
  {
    src: seventhFranklinPhase203,
    alt: "Rooftop terrace rendering at Seventh & Franklin Phase 2, Building B, in Downtown Boise.",
    caption: "Seventh & Franklin Phase 2",
  },
];

export const seventhFranklinPhase3Gallery: GalleryImage[] = [
  {
    src: seventhFranklinPhase301,
    alt: "Aerial rendering of Seventh & Franklin Phase 3 at 711 W Franklin in Downtown Boise.",
    caption: "Seventh & Franklin Phase 3",
  },
  {
    src: seventhFranklinPhase302,
    alt: "Street rendering of Seventh & Franklin Phase 3 at 711 W Franklin in Downtown Boise.",
    caption: "Seventh & Franklin Phase 3",
  },
  {
    src: seventhFranklinPhase303,
    alt: "Bar lounge rendering at Seventh & Franklin Phase 3.",
    caption: "Seventh & Franklin Phase 3",
  },
  {
    src: seventhFranklinPhase304,
    alt: "Kitchen rendering at Seventh & Franklin Phase 3.",
    caption: "Seventh & Franklin Phase 3",
  },
  {
    src: seventhFranklinPhase305,
    alt: "Living room rendering at Seventh & Franklin Phase 3.",
    caption: "Seventh & Franklin Phase 3",
  },
  {
    src: seventhFranklinPhase306,
    alt: "Bathroom rendering at Seventh & Franklin Phase 3.",
    caption: "Seventh & Franklin Phase 3",
  },
  {
    src: seventhFranklinPhase307,
    alt: "Roof deck rendering at Seventh & Franklin Phase 3.",
    caption: "Seventh & Franklin Phase 3",
  },
];

export const midtownHeightsGallery: GalleryImage[] = [
  {
    src: midtownHeightsRoof1,
    alt: "Rooftop terrace rendering at Midtown Heights, 1709 S Federal Way in Boise.",
    caption: "Midtown Heights",
  },
  {
    src: midtownHeightsRoof2,
    alt: "Rooftop lounge rendering at Midtown Heights in Boise.",
    caption: "Midtown Heights",
  },
];

export const kootenaiTownhomesGallery: GalleryImage[] = [
  {
    src: kootenai01,
    alt: "Dusk exterior of Kootenai Townhomes at 2294 W Kootenai Street in Boise.",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai02,
    alt: "Dusk view of Kootenai Townhomes with illuminated windows and a rooftop deck.",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai03,
    alt: "Kootenai Townhomes at dusk, with a rooftop deck overlooking the foothills.",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai04,
    alt: "Street view of Kootenai Townhomes at dusk, with the community sign in the foreground.",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai05,
    alt: "Close dusk view of a Kootenai Townhomes residence and garage.",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai06,
    alt: "Courtyard at Kootenai Townhomes with balconies and a rooftop deck.",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai07,
    alt: "Front walkway and stoops at Kootenai Townhomes.",
    caption: "Kootenai Townhomes",
  },
  {
    src: kootenai08,
    alt: "Entry court at Kootenai Townhomes with a garage and second-floor balcony.",
    caption: "Kootenai Townhomes",
  },
];

export const k2ApartmentsGallery: GalleryImage[] = [
  {
    src: k2Dusk,
    alt: "Dusk exterior of K2 Apartments at 2219 W Kootenai Street in Boise.",
    caption: "K2 Apartments",
  },
  {
    src: k2Aerial,
    alt: "Aerial view of K2 Apartments in Boise, beside a canal.",
    caption: "K2 Apartments",
  },
];

export const rvr410Gallery: GalleryImage[] = [
  {
    src: rvr410Exterior,
    alt: "410 RVR townhomes at 410 N River Street in Hailey, with balconies and mountain views.",
    caption: "410 RVR",
  },
  {
    src: rvr410Aerial,
    alt: "Aerial view of the 410 RVR townhomes along the street in Hailey.",
    caption: "410 RVR",
  },
  {
    src: rvr410Living,
    alt: "Living room at 410 RVR in Hailey, with mountain views beyond the windows.",
    caption: "410 RVR",
  },
  {
    src: rvr410Bedroom,
    alt: "Bedroom at 410 RVR in Hailey.",
    caption: "410 RVR",
  },
];

export const midRvrGallery: GalleryImage[] = [
  {
    src: midrvr02,
    alt: "Twilight view of MID RVR townhomes at the corner of River Street in Hailey, with mountains beyond.",
    caption: "MID RVR",
  },
  {
    src: midrvr01,
    alt: "Twilight street view of MID RVR townhomes in Hailey.",
    caption: "MID RVR",
  },
  {
    src: midrvr03,
    alt: "Dusk view of a MID RVR entrance and garage along River Street in Hailey.",
    caption: "MID RVR",
  },
  {
    src: midrvr04,
    alt: "Dusk view of a MID RVR doorway and balcony in Hailey.",
    caption: "MID RVR",
  },
  {
    src: midrvr05,
    alt: "Living room at MID RVR in Hailey, looking toward the mountains.",
    caption: "MID RVR",
  },
  {
    src: midrvr06,
    alt: "Living room and stair at MID RVR in Hailey.",
    caption: "MID RVR",
  },
  {
    src: midrvr07,
    alt: "Dining area at MID RVR in Hailey.",
    caption: "MID RVR",
  },
  {
    src: midrvr08,
    alt: "Bedroom at MID RVR in Hailey.",
    caption: "MID RVR",
  },
  {
    src: midrvr09,
    alt: "Kitchen at MID RVR in Hailey.",
    caption: "MID RVR",
  },
  {
    src: midrvr10,
    alt: "Bathroom at MID RVR in Hailey.",
    caption: "MID RVR",
  },
];

export const homeHero = seventhFranklinGallery[0];
export const homeBleed = seventhFranklinGallery[4];

export const homeStrip: GalleryImage[] = [
  { ...seventhFranklinPhase2Gallery[0], href: "/projects#seventh-and-franklin-phase-2" },
  { ...seventhFranklinPhase3Gallery[0], href: "/projects#seventh-and-franklin-phase-3" },
  { ...seventhFranklinGallery[0], href: "/projects#seventh-and-franklin" },
  { ...midtownHeightsGallery[0], href: "/projects#midtown-heights" },
  { ...midtownHeightsGallery[1], href: "/projects#midtown-heights" },
  { ...k2ApartmentsGallery[0], href: "/projects#k2-apartments" },
  { ...rvr410Gallery[0], href: "/projects#410-rvr" },
  { ...rvr410Gallery[1], href: "/projects#410-rvr" },
  { ...midRvrGallery[0], href: "/projects#mid-rvr" },
  { ...midRvrGallery[1], href: "/projects#mid-rvr" },
  { ...midRvrGallery[4], href: "/projects#mid-rvr" },
  { ...seventhFranklinGallery[3], href: "/projects#seventh-and-franklin" },
];
