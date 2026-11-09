import { site } from "@/lib/site";

export const siteUrl = "https://www.rubiconprotection.com";

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/logo-lion.png`,
  image: `${siteUrl}/logo-lion.png`,
  telephone: site.phoneTel,
  email: site.email,
  slogan: site.tagline,
  description:
    "Rubicon Protection is an Arizona based security company providing executive protection, event security, and armed or unarmed security guards for commercial and government clients, with nationwide one-call coverage and worldwide reach.",
  areaServed: [
    { "@type": "State", name: "Arizona" },
    { "@type": "Country", name: "United States" },
    "Worldwide executive protection",
  ],
  knowsAbout: [
    "Executive protection",
    "Event security",
    "Wedding security",
    "Data center penetration testing",
    "Physical security penetration testing",
    "Armed security guards",
    "Unarmed security guards",
    "Construction site security",
    "Retail security",
    "Healthcare security",
    "Government security",
  ],
  hasCredential: [
    site.licenses.guard,
    site.licenses.investigator,
    site.licenses.washington,
  ].map((name) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security services",
    itemListElement: [
      ["Executive Protection", "/executive-protection"],
      ["Event Security", "/event-security"],
      ["Wedding Security", "/wedding-security"],
      ["Security Guards", "/security-guards"],
      [
        "Data Center Penetration Testing",
        "/data-center-penetration-testing",
      ],
      ["National Accounts", "/national-accounts"],
    ].map(([name, path]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, url: `${siteUrl}${path}` },
    })),
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: site.phoneTel,
    email: site.email,
    availableLanguage: "English",
  },
};
