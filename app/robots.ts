import type { MetadataRoute } from "next";

const allowSite = {
  allow: "/",
  disallow: "/api/",
} as const;

// Named groups repeat Disallow: /api/ because a specific user-agent
// group replaces the * group instead of merging with it.
const crawlers = [
  "Googlebot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "GrokBot",
  "xAI-SearchBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allowSite },
      ...crawlers.map((userAgent) => ({ userAgent, ...allowSite })),
    ],
    sitemap: "https://www.rubiconprotection.com/sitemap.xml",
  };
}
