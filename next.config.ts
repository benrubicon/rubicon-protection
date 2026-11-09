import type { NextConfig } from "next";

/**
 * Permanent redirects for retired GoDaddy/WordPress URLs.
 * Destination paths are current App Router routes (no trailing slash).
 * Apex→www is handled by Vercel and is expected; these rules run on www.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  // Contact / quote forms
  { source: "/contact-us-1", destination: "/contact" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/request-service", destination: "/contact" },
  { source: "/requesting-service-form", destination: "/contact" },
  { source: "/request-a-quote", destination: "/contact" },
  { source: "/get-a-quote", destination: "/contact" },
  { source: "/quote", destination: "/contact" },
  { source: "/get-started", destination: "/contact" },
  { source: "/applicant", destination: "/contact" },
  { source: "/career-opportunities", destination: "/contact" },
  { source: "/subcontractor-dd-form", destination: "/contact" },

  // Home aliases
  { source: "/home", destination: "/" },
  { source: "/home-2", destination: "/" },
  { source: "/index.html", destination: "/" },
  { source: "/index.php", destination: "/" },

  // About / company
  { source: "/about-us", destination: "/" },
  { source: "/about", destination: "/" },
  { source: "/why-choose-us", destination: "/" },
  { source: "/where-we-operate", destination: "/national-accounts" },
  { source: "/services", destination: "/" },
  { source: "/our-services", destination: "/" },
  { source: "/team", destination: "/" },
  { source: "/privacy-policy", destination: "/" },
  { source: "/privacy", destination: "/" },
  { source: "/terms", destination: "/" },

  // Executive protection / bodyguards
  { source: "/bodyguards", destination: "/executive-protection" },
  { source: "/bodyguards/:path+", destination: "/executive-protection" },
  { source: "/arizona-bodyguard", destination: "/executive-protection" },
  { source: "/tucson-bodyguard", destination: "/executive-protection" },
  { source: "/executive-protection-1", destination: "/executive-protection" },
  { source: "/executive-protection/:path+", destination: "/executive-protection" },
  { source: "/personal-protection-k9s", destination: "/executive-protection" },
  { source: "/armed-escorts", destination: "/executive-protection" },
  { source: "/protection", destination: "/executive-protection" },
  { source: "/bodyguard", destination: "/executive-protection" },

  // Event security
  { source: "/event-security-services", destination: "/event-security" },
  { source: "/event-security-1", destination: "/event-security" },
  { source: "/event-security/:path+", destination: "/event-security" },

  // Security guards
  { source: "/security-guards-1", destination: "/security-guards" },
  { source: "/security-guards/:path+", destination: "/security-guards" },
  { source: "/security-company", destination: "/security-guards" },
  { source: "/security-companies", destination: "/security-guards" },
  { source: "/security-companies-in-arizona", destination: "/security-guards" },
  { source: "/security", destination: "/security-guards" },
  { source: "/guards", destination: "/security-guards" },
  { source: "/off-duty-police", destination: "/security-guards" },
  { source: "/site-surveillance", destination: "/security-guards" },

  // Training / articles (no dedicated pages on new site)
  { source: "/active-shooter-training", destination: "/security-guards" },
  { source: "/firearms-training", destination: "/security-guards" },
  { source: "/self-defense-training", destination: "/security-guards" },
  { source: "/training-programs", destination: "/security-guards" },
  { source: "/workplace-violence", destination: "/security-guards" },
  { source: "/workplace-violence/:path+", destination: "/security-guards" },
  { source: "/articles", destination: "/" },
  { source: "/articles/:path+", destination: "/" },
  { source: "/blog", destination: "/" },
  { source: "/news", destination: "/" },
  { source: "/theft/:path+", destination: "/" },

  // State / location pages → national coverage
  { source: "/arizona", destination: "/national-accounts" },
  { source: "/washington", destination: "/national-accounts" },
  { source: "/oregon", destination: "/national-accounts" },
  { source: "/florida", destination: "/national-accounts" },
  { source: "/texas", destination: "/national-accounts" },
  { source: "/new-mexico", destination: "/national-accounts" },
  { source: "/locations", destination: "/national-accounts" },
  { source: "/national-accounts-1", destination: "/national-accounts" },

  // Retired shop / account
  { source: "/shop", destination: "/" },
  { source: "/cart", destination: "/" },
  { source: "/my-account", destination: "/" },
  { source: "/careers", destination: "/contact" },
  { source: "/jobs", destination: "/contact" },
  { source: "/faq", destination: "/contact" },
  { source: "/testimonials", destination: "/" },
  { source: "/reviews", destination: "/" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    const rules: { source: string; destination: string; permanent: boolean }[] =
      [];
    for (const { source, destination } of legacyRedirects) {
      rules.push({ source, destination, permanent: true });
      // Collapse trailing-slash → destination in one hop (avoids
      // trailingSlash:false strip then legacy redirect = 2 hops).
      if (!source.includes(":") && !source.endsWith("/")) {
        rules.push({
          source: `${source}/`,
          destination,
          permanent: true,
        });
      }
    }
    return rules;
  },
};

export default nextConfig;
