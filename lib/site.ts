export const site = {
  name: "Rubicon Protection",
  legalName: "Rubicon Protection",
  tagline: "Arizona Based Worldwide Reach",
  phoneDisplay: "833-217-1117",
  phoneTel: "+18332171117",
  email: "info@rubiconprotection.com",
  licenses: {
    guard: "AZ DPS Security Guard Company #1732763",
    investigator: "AZ DPS Private Investigator #1732762",
  },
} as const;

export const nationwide = {
  kicker: "National commercial accounts",
  title: "One call. We staff the posts.",
  body: "Nationwide coverage for major companies. Instead of each store or location figuring out who to hire, the company calls Rubicon once and Rubicon finds appropriate coverage. One contract, many sites—we staff the posts.",
} as const;

export const serviceNav = [
  { href: "/executive-protection", label: "Executive Protection" },
  { href: "/event-security", label: "Event Security" },
  { href: "/security-guards", label: "Security Guards" },
  { href: "/national-accounts", label: "National Accounts" },
] as const;

export const services = [
  {
    href: "/executive-protection",
    title: "Executive Protection",
    summary:
      "Close-protection details of any size for home, business, vehicles, family, and travel—able to operate worldwide.",
  },
  {
    href: "/event-security",
    title: "Event Security",
    summary:
      "Screening, staffing, and venue control from 100-person weddings to 18,000-person amphitheaters. Selective hiring, not a body shop.",
  },
  {
    href: "/security-guards",
    title: "Security Guards",
    summary:
      "Uniformed armed and unarmed officers for businesses and government: checkpoints, secure areas, and workplace-violence support.",
  },
  {
    href: "/national-accounts",
    title: "National Accounts",
    summary:
      "One call from the company. Rubicon finds appropriate coverage and staffs posts across stores and locations.",
  },
] as const;

export const serviceOptions = [
  "Executive Protection",
  "Event Security",
  "Security Guards",
  "National Accounts",
  "Other",
] as const;
