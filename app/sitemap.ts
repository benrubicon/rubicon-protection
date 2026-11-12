import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { siteUrl } from "@/lib/seo";

/** Last meaningful content change per path, from git history (America/Phoenix). */
const lastModified: Record<string, string> = {
  "": "2026-11-11T19:30:43-07:00",
  "/executive-protection": "2026-11-11T19:30:43-07:00",
  "/event-security": "2026-11-03T13:15:57-07:00",
  "/wedding-security": "2026-11-03T13:40:27-07:00",
  "/security-guards": "2026-11-09T07:03:29-07:00",
  "/data-center-penetration-testing": "2026-11-09T07:03:29-07:00",
  "/threat-monitoring": "2026-11-11T19:30:43-07:00",
  "/national-accounts": "2026-10-30T08:11:37-07:00",
  "/gpo": "2026-11-12T09:20:00-07:00",
  "/industries": "2026-10-30T08:11:37-07:00",
  "/industries/construction": "2026-10-28T07:31:35-07:00",
  "/industries/office-buildings": "2026-10-28T07:31:35-07:00",
  "/industries/parking-garages": "2026-10-28T07:31:35-07:00",
  "/industries/retail": "2026-10-28T07:31:35-07:00",
  "/industries/warehouses": "2026-10-28T07:31:35-07:00",
  "/industries/healthcare": "2026-10-28T07:31:35-07:00",
  "/industries/casinos": "2026-10-28T07:31:35-07:00",
  "/industries/government": "2026-10-28T07:31:35-07:00",
  "/industries/concerts-venues": "2026-10-28T07:31:35-07:00",
  "/industries/international": "2026-10-28T07:31:35-07:00",
  "/rentals": "2026-10-30T11:05:08-07:00",
  "/contact": "2026-10-30T11:12:28-07:00",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/executive-protection",
    "/event-security",
    "/wedding-security",
    "/security-guards",
    "/data-center-penetration-testing",
    "/threat-monitoring",
    "/national-accounts",
    "/gpo",
    "/industries",
    ...industries.map((i) => i.href),
    "/rentals",
    "/contact",
  ];
  return paths.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified: lastModified[p] ?? "2026-11-12T06:35:00-07:00",
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
