import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/executive-protection",
    "/event-security",
    "/security-guards",
    "/national-accounts",
    "/industries",
    ...industries.map((i) => i.href),
    "/rentals",
    "/contact",
  ];
  return paths.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
