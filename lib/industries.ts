import { photos, stock, STOCK_CAPTION, type PhotoMeta } from "@/lib/photos";

export type IndustryPhoto = PhotoMeta & { caption: string };

export type Industry = {
  slug: string;
  href: string;
  title: string;
  kicker: string;
  summary: string;
  metaDescription: string;
  lede: string;
  paragraphs: string[];
  points: { title: string; body: string }[];
  photos: IndustryPhoto[];
};

export const industries: Industry[] = [
  {
    slug: "construction",
    href: "/industries/construction",
    title: "Construction",
    kicker: "Jobsite coverage",
    summary:
      "Gate control, after-hours presence, and material protection while a site is live—and after crews leave.",
    metaDescription:
      "Construction site security: access control, after-hours posts, and perimeter coverage. Call Rubicon Protection at 833-217-1117.",
    lede: "A construction site is open by design: trades, deliveries, inspectors, and equipment moving through the same gate. Coverage has to know who belongs on the pad and who does not.",
    paragraphs: [
      "Rubicon staffs construction posts the same way we staff other commercial sites: with people who can run a gate, check credentials, and stay on the property after hours. The day shift is about access. The night shift is about the site itself—copper, tools, vehicles, and the openings a fence does not actually close.",
      "Tell us the address, the hours, whether the post is armed or unarmed, and how deliveries are supposed to move. We size standing coverage, roaming checks, or a mix. We do not invent a program that only works on a finished building.",
    ],
    points: [
      {
        title: "Access",
        body: "Gate and pedestrian control, visitor logs, and contractor credential checks so the pad stays a worksite, not a shortcut.",
      },
      {
        title: "After hours",
        body: "When crews leave, the site still needs a body who will walk the fence, check connex boxes, and call out what changed.",
      },
      {
        title: "Materials",
        body: "Tools, copper, and equipment walk off quiet jobs. A post at the right hours is cheaper than explaining a missing load.",
      },
    ],
    photos: [
      { ...stock.constructionWork, caption: STOCK_CAPTION },
      { ...stock.constructionSite, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "office-buildings",
    href: "/industries/office-buildings",
    title: "Office buildings",
    kicker: "Lobbies and floors",
    summary:
      "Reception control, after-hours floors, and visitor handling for offices that cannot run on an unlocked door.",
    metaDescription:
      "Office building security: lobby control, after-hours coverage, and visitor verification. Rubicon Protection, 833-217-1117.",
    lede: "An office building fails at the lobby first. If anyone can walk to a floor, the rest of the program is theater.",
    paragraphs: [
      "Rubicon provides uniformed officers for office entrances, secure floors, and after-hours coverage. Officers check credentials, run visitor processes, and keep unauthorized people out of the spaces you actually need protected—the same work described on our security-guards line, sized to a commercial tower or campus.",
      "After 6 p.m. the building changes. Cleaning crews, late employees, and people who should not be there all look similar from a desk that is already empty. We staff that window on purpose.",
    ],
    points: [
      {
        title: "Lobby",
        body: "A professional presence at reception: badges, visitors, and the judgment to stop a walk-up without turning it into a scene.",
      },
      {
        title: "Floors",
        body: "Secure floors, server rooms, and executive suites get their own rules. Officers enforce those rules, they do not invent them.",
      },
      {
        title: "Overnight",
        body: "Roaming checks of doors, stairwells, and lots when the tenant floors go dark.",
      },
    ],
    photos: [
      { ...stock.officeTowers, caption: STOCK_CAPTION },
      { ...stock.officeInterior, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "parking-garages",
    href: "/industries/parking-garages",
    title: "Parking garages",
    kicker: "Decks and lots",
    summary:
      "Patrol and standing coverage for garages and lots: stairwells, pay points, and the hours when the deck is empty.",
    metaDescription:
      "Parking garage security: patrols, stairwells, and after-hours coverage. Rubicon Protection, 833-217-1117.",
    lede: "A garage is a building with cars in it: poor sightlines, stair towers, pay machines, and long hours with nobody watching the ramps.",
    paragraphs: [
      "Rubicon covers parking structures with standing posts, mobile checks, or both. The work is concrete and unglamorous: walk the levels, check stairwells, watch the entrance, and be visible enough that a break-in is not the easy option.",
      "If the garage sits under an office, a hospital, a casino, or a retail center, we staff it as part of that site—not as a separate mystery contract. One call still applies when the same company owns decks in more than one city.",
    ],
    points: [
      {
        title: "Patrol",
        body: "Level-by-level walks, vehicle checks of the obvious hiding spots, and a log of what was found.",
      },
      {
        title: "Stairwells",
        body: "The places cameras miss and patrons avoid. Officers actually go there.",
      },
      {
        title: "After hours",
        body: "When the last event lets out—or when the office is empty—the garage still needs a post.",
      },
    ],
    photos: [
      { ...stock.parkingGarage, caption: STOCK_CAPTION },
      { ...stock.parkingDeck, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "retail",
    href: "/industries/retail",
    title: "Retail and shopping",
    kicker: "Stores and centers",
    summary:
      "Uniformed and suited coverage for retail floors, including multi-location programs staffed from one call.",
    metaDescription:
      "Retail security for stores and shopping sites. One call for many locations. Rubicon Protection, 833-217-1117.",
    lede: "Retail needs people who can stand a floor without turning customers into a problem—and still stop the person who came to steal or disrupt.",
    paragraphs: [
      "Officers wear a professional uniform. Coverage can be armed or unarmed based on the site, the threat, and what the client is authorized to request. Suited posts are available when the floor calls for a quieter presence.",
      "Major companies with many stores do not need each location to hunt for a local guard company. They call Rubicon once. We find appropriate coverage and staff the posts. See National Accounts for how that contract works.",
    ],
    points: [
      {
        title: "Floor presence",
        body: "Opening, closing, and the hours in between. Officers who can talk to a customer and still watch the door.",
      },
      {
        title: "Many locations",
        body: "One contract, many sites. The company does not run a hiring process in every city.",
      },
      {
        title: "Technical work",
        body: "Where a site needs cameras or related work on the floor, we treat it as part of protecting the store—not as a separate theater.",
      },
    ],
    photos: [
      {
        ...photos.suitedPost,
        caption: "Suited post inside AllSaints.",
      },
      {
        ...photos.cameraInstall,
        caption: "Camera install at AllSaints.",
      },
    ],
  },
  {
    slug: "warehouses",
    href: "/industries/warehouses",
    title: "Warehouses and industrial",
    kicker: "Docks and yards",
    summary:
      "Overnight patrol, dock control, and yard coverage for warehouses and industrial sites.",
    metaDescription:
      "Warehouse and industrial security: docks, yards, and overnight patrol. Rubicon Protection, 833-217-1117.",
    lede: "A warehouse is doors, docks, and a lot of dark after the last truck leaves. Coverage has to walk it, not sit in a break room.",
    paragraphs: [
      "Rubicon staffs industrial posts for businesses that need uniformed officers on the property: vehicle and pedestrian checkpoints, after-hours coverage, and mobile checks of doors, gates, and lots.",
      "Night work is the point for many of these sites. Officers check what actually moved—not what the previous shift hoped was locked.",
    ],
    points: [
      {
        title: "Docks",
        body: "Who is on the pad, which doors are open, and whether a trailer that should have left is still sitting there.",
      },
      {
        title: "Yards",
        body: "Fence lines, lighting, and the corners a camera does not cover well at 2 a.m.",
      },
      {
        title: "Property",
        body: "Unauthorized camping and loitering on private industrial property is handled firmly and without turning people into a photo opportunity.",
      },
    ],
    photos: [
      {
        ...photos.nightPatrol,
        caption: "Night patrol at Ashley Furniture Warehouse.",
      },
      { ...stock.warehouseInterior, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "healthcare",
    href: "/industries/healthcare",
    title: "Healthcare and clinical",
    kicker: "Clinics and campuses",
    summary:
      "Calm, professional posts for clinics, campuses, and medical buildings: visitors, parking, and after-hours floors.",
    metaDescription:
      "Healthcare and clinical security: visitor control, parking, and after-hours posts. Rubicon Protection, 833-217-1117.",
    lede: "Clinical sites need officers who can keep a lobby orderly without turning a waiting room into a checkpoint fight.",
    paragraphs: [
      "Rubicon staffs healthcare and clinical buildings with uniformed officers who can run an entrance, verify who belongs on a floor, and stay overnight when the clinic is closed. The work is visitor control, parking, and the hours when a building is quiet and still full of equipment.",
      "We do not pretend a security post replaces clinical staff. We cover the property, the doors, and the people who should not be in a restricted corridor.",
    ],
    points: [
      {
        title: "Entrances",
        body: "Who comes in, who is walking a patient, and who is using the building as a shortcut.",
      },
      {
        title: "Parking",
        body: "Lots and garages attached to clinics get the same attention as the lobby—especially after dark.",
      },
      {
        title: "After hours",
        body: "Closed clinics are still targets. A post that actually walks the floors matters more than a sign on the door.",
      },
    ],
    photos: [
      { ...stock.healthcareHospital, caption: STOCK_CAPTION },
      { ...stock.healthcareClinic, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "casinos",
    href: "/industries/casinos",
    title: "Casinos and tribal",
    kicker: "Gaming floors",
    summary:
      "Floor, parking, and event coverage for casino and tribal properties—same selective staffing we use on concert nights.",
    metaDescription:
      "Casino and tribal security: floors, parking, and events. Rubicon Protection, 833-217-1117.",
    lede: "Casino work is public, crowded, and unforgiving of a weak door. Screening thousands of people is a skill. So is standing a floor without becoming part of the show.",
    paragraphs: [
      "Rubicon provides security for tribal casinos and related properties. The same teams that screen concert crowds work casino doors: bags, credentials, prohibited items, and the judgment to keep the night moving.",
      "Coverage can include the floor, parking, and event nights on the property. We staff the posts you specify. We do not invent a program named after a property we do not have on a contract.",
    ],
    points: [
      {
        title: "Doors",
        body: "Fast screening without turning the line into a fight. Years on music-venue and casino doors.",
      },
      {
        title: "Floor",
        body: "A visible, professional presence that supports the property’s own rules—not a freelancer making new ones.",
      },
      {
        title: "Events",
        body: "When the casino hosts a show or a convention, event security is the same service line: plan, staff, run.",
      },
    ],
    photos: [
      { ...stock.casinoFloor, caption: STOCK_CAPTION },
      { ...stock.casinoTable, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "government",
    href: "/industries/government",
    title: "Government",
    kicker: "Civic sites",
    summary:
      "Uniformed officers for government entities: checkpoints, credential checks, and secure areas of buildings.",
    metaDescription:
      "Government facility security: checkpoints, credentials, and secure areas. Licensed in Arizona. Rubicon Protection, 833-217-1117.",
    lede: "Government sites need officers who can run a checkpoint and keep unauthorized people out of the rooms that actually matter.",
    paragraphs: [
      "Rubicon provides uniformed security guards, armed and unarmed, for government entities as well as businesses. Officers run checkpoints, office entrances, and secure areas of buildings. They check credentials and keep unauthorized people out.",
      "We are licensed in Arizona as a security guard company and as private investigators. Coverage is scoped to the site you describe—not a brochure list of agencies we do not name.",
    ],
    points: [
      {
        title: "Checkpoints",
        body: "Vehicle and pedestrian control that matches the building’s rules, not a generic airport script.",
      },
      {
        title: "Credentials",
        body: "Visitor verification and access to secure floors, rooms, and storage.",
      },
      {
        title: "Hours",
        body: "Day posts, after-hours, or a mix. Tell us which doors stay live when the offices empty.",
      },
    ],
    photos: [
      { ...stock.governmentCourthouse, caption: STOCK_CAPTION },
      { ...stock.governmentCivic, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "concerts-venues",
    href: "/industries/concerts-venues",
    title: "Concerts and large venues",
    kicker: "Doors and crowds",
    summary:
      "Screening and floor coverage for concerts, graduations, and conventions—from 100-person dates to 18,000-person amphitheaters.",
    metaDescription:
      "Concert and large-venue security: screening, floor, and run-of-show staffing since 2016. Rubicon Protection, 833-217-1117.",
    lede: "A successful night starts at the checkpoint. If the line becomes a fight, the rest of the show is already behind.",
    paragraphs: [
      "Rubicon has been screening thousands of people every year at major music venues and casinos. Moving patrons through a checkpoint quickly is a skill that is not easily learned. With years on those doors, we have it down: bags, credentials, prohibited items, and the judgment to keep the night moving.",
      "We have been staffing and securing concerts for major artists since 2016. We are not a staffing agency hiring anyone who will show up. The interview process is selective. Event Security is the service line; this page is the industry view of the same work.",
    ],
    points: [
      {
        title: "Scale",
        body: "18,000 at an open-air amphitheater or 100 at a wedding. We plan the venue you have.",
      },
      {
        title: "People",
        body: "Fewer bodies who actually work beats a crowd of last-minute hires.",
      },
      {
        title: "Run of show",
        body: "Plan the posts, staff the gates and floor, run the night, keep the client informed.",
      },
    ],
    photos: [
      { ...stock.concertStage, caption: STOCK_CAPTION },
      { ...stock.concertCrowd, caption: STOCK_CAPTION },
    ],
  },
  {
    slug: "international",
    href: "/industries/international",
    title: "International",
    kicker: "Europe, the UK, and Africa",
    summary:
      "A large network of subcontractors that can handle security in Europe, the UK, and Africa—without inventing partner names.",
    metaDescription:
      "International security coverage in Europe, the UK, and Africa through Rubicon’s subcontractor network. 833-217-1117.",
    lede: "Rubicon has a large network of subcontractors that can handle security in Europe, the UK, and Africa.",
    paragraphs: [
      "When a principal, a tour, or a commercial program leaves the United States, coverage still has to stand up. We do not publish a roster of partner companies. We do staff through a network large enough to work those regions.",
      "Executive protection details can operate worldwide, with insurance that covers those operations. International site work is scoped the same way as a domestic post: tell us the cities, the dates, and what has to be covered. We find appropriate coverage. We do not invent client names or dollar amounts to make the map look busier.",
    ],
    points: [
      {
        title: "Europe",
        body: "Subcontractor coverage for security work across European cities and venues.",
      },
      {
        title: "The UK",
        body: "The same network, scoped to the itinerary—not a storefront we do not operate.",
      },
      {
        title: "Africa",
        body: "Security handled through the network when the work is on the continent.",
      },
    ],
    photos: [
      { ...stock.europeCity, caption: STOCK_CAPTION },
      { ...stock.ukLondon, caption: STOCK_CAPTION },
      { ...stock.africaCity, caption: STOCK_CAPTION },
    ],
  },
];

export function getIndustry(slug: string): Industry {
  const found = industries.find((item) => item.slug === slug);
  if (!found) {
    throw new Error(`Unknown industry: ${slug}`);
  }
  return found;
}
