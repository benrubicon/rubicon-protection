/** Real brand files in public/rubicon-brand-photos/. Generic alts only — no client names. */
export const photos = {
  logo: {
    src: "/rubicon-brand-photos/logo-lion.png",
    width: 946,
    height: 946,
    alt: "Rubicon Protection Security roaring lion mark",
  },
  officer: {
    src: "/rubicon-brand-photos/officer-portrait-polo.jpeg",
    width: 469,
    height: 682,
    alt: "Security officer in a black branded polo, black cap, and khaki trousers",
  },
  cameraInstall: {
    src: "/rubicon-brand-photos/photo-camera-install-allsaints.jpg",
    width: 832,
    height: 1248,
    alt: "Officer installing a ceiling camera in a retail store",
  },
  nightPatrol: {
    src: "/rubicon-brand-photos/photo-night-patrol-ashley.jpg",
    width: 848,
    height: 987,
    alt: "Night warehouse patrol",
  },
  suitedPost: {
    src: "/rubicon-brand-photos/photo-allsaints-suited-post.jpg",
    width: 1168,
    height: 784,
    alt: "Suited officer on post inside a retail store",
  },
  epWalk: {
    src: "/rubicon-brand-photos/photo-ep-walk-escalade.jpg",
    width: 784,
    height: 1168,
    alt: "Executive protection team with a black SUV",
  },
  epExit: {
    src: "/rubicon-brand-photos/photo-ep-suv-exit.jpg",
    width: 784,
    height: 1168,
    alt: "Principal stepping out of a black SUV with two suited protection agents",
  },
  teslaRear: {
    src: "/rubicon-brand-photos/fleet-tesla-y-rear.png",
    width: 837,
    height: 595,
    alt: "Marked SECURITY patrol vehicle, rear view",
  },
  ioniqFront: {
    src: "/rubicon-brand-photos/fleet-ioniq5-front.png",
    width: 953,
    height: 675,
    alt: "Marked SECURITY patrol vehicle, front view",
  },
  teslaSide: {
    src: "/rubicon-brand-photos/fleet-tesla-y-side.png",
    width: 1256,
    height: 614,
    alt: "Marked SECURITY patrol vehicle, side view",
  },
} as const;

/** Licensed stock in public/stock/. Generic industry photography — never a client name. */

export const stock = {
  constructionWork: {
    src: "/stock/construction-work.jpg",
    width: 1800,
    height: 1200,
    alt: "Aerial view of an urban construction site with workers in safety gear on a concrete deck",
  },
  constructionSite: {
    src: "/stock/construction-site.jpg",
    width: 1800,
    height: 1200,
    alt: "Close view of wet concrete being finished on a construction jobsite",
  },
  officeTowers: {
    src: "/stock/office-towers.jpg",
    width: 1800,
    height: 1200,
    alt: "Looking up at glass office towers in a dense downtown",
  },
  officeInterior: {
    src: "/stock/office-interior.jpg",
    width: 1800,
    height: 1202,
    alt: "Modern office corridor with glass-walled rooms and a break area",
  },
  parkingGarage: {
    src: "/stock/parking-garage.jpg",
    width: 1800,
    height: 1205,
    alt: "Interior of an underground parking garage with pillars, lighting, and parked cars",
  },
  parkingDeck: {
    src: "/stock/parking-deck.jpg",
    width: 1800,
    height: 1200,
    alt: "Overhead view of a rooftop parking deck with numbered stalls and vehicles",
  },
  warehouseInterior: {
    src: "/stock/warehouse-interior.jpg",
    width: 1800,
    height: 1200,
    alt: "Interior of a large warehouse with racking, boxes, and yellow storage bins",
  },
  healthcareHospital: {
    src: "/stock/healthcare-hospital.jpg",
    width: 1800,
    height: 1225,
    alt: "Hospital reception lobby with a curved desk and clinical signage",
  },
  healthcareClinic: {
    src: "/stock/healthcare-clinic.jpg",
    width: 1800,
    height: 1173,
    alt: "Clinician speaking with a patient in an exam room",
  },
  casinoFloor: {
    src: "/stock/casino-floor.jpg",
    width: 1800,
    height: 1200,
    alt: "Casino floor with rows of slot machines under chandeliers",
  },
  casinoTable: {
    src: "/stock/casino-lights.jpg",
    width: 1800,
    height: 1131,
    alt: "Cards and chips on a casino gaming table",
  },
  governmentCourthouse: {
    src: "/stock/government-building.jpg",
    width: 1800,
    height: 1440,
    alt: "White neoclassical courthouse facade with columns and a pediment",
  },
  governmentCivic: {
    src: "/stock/government-capitol.jpg",
    width: 1800,
    height: 2706,
    alt: "Civic building with columns, a clock dome, and front steps",
  },
  concertStage: {
    src: "/stock/concert-stage.jpg",
    width: 1800,
    height: 1200,
    alt: "Night concert with a dense crowd facing a brightly lit outdoor stage",
  },
  concertCrowd: {
    src: "/stock/concert-crowd.jpg",
    width: 1800,
    height: 1200,
    alt: "Concert audience with hands raised toward stage lights",
  },
  europeCity: {
    src: "/stock/europe-street.jpg",
    width: 1800,
    height: 2730,
    alt: "Historic European canal and stone bridge in a city setting",
  },
  ukLondon: {
    src: "/stock/uk-london.jpg",
    width: 1800,
    height: 1200,
    alt: "Aerial view of London including Tower Bridge and the Thames",
  },
  africaCity: {
    src: "/stock/africa-city.jpg",
    width: 1800,
    height: 1350,
    alt: "High-angle view of a large African city skyline and roadway",
  },
} as const;

export type PhotoMeta = {
  src: string;
  width: number;
  height: number;
  alt: string;
};
