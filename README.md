# Rubicon Protection

Marketing site for [Rubicon Protection](https://rubiconprotection.com/) — executive protection, event security, and security guards. Arizona based, worldwide reach.

This repository is a greenfield Next.js rebuild. **Do not point `rubiconprotection.com` DNS at this project until a cutover is explicitly approved.** The live GoDaddy site stays in production until then.

## Preview

Attempted public Vercel Hobby preview (separate project named `rubicon-protection`, not valor-care-finder):

- https://rubicon-protection-valor-senior-care.vercel.app
- https://rubicon-protection-9i7l86ef1-valor-senior-care.vercel.app

Those URLs currently redirect to Vercel Authentication (SSO). A public unauthenticated preview was not possible from this environment for two reasons:

1. The Vercel GitHub app on the Valor Senior Care Hobby team cannot see `benrubicon/rubicon-protection` (`repo_not_found`), so a git-linked project with automatic PR previews could not be created. Grant the Vercel GitHub app access to this repository, then import it as project `rubicon-protection`.
2. The file-based Hobby preview that was created is behind Vercel Authentication. Disabling that protection via API returned project-not-found from this environment (Hobby teams often cannot turn Standard Protection off). In the Vercel dashboard: **rubicon-protection → Settings → Deployment Protection → disable Vercel Authentication** if the plan allows it.

**DNS:** do not point `rubiconprotection.com` at this project until a cutover is explicitly approved.

## Local run

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Path | Notes |
| --- | --- |
| `/` | Home |
| `/executive-protection` | Close protection, travel, intelligence, assessments |
| `/event-security` | Screening, selective staffing, scale |
| `/security-guards` | Armed/unarmed posts, property protection, workplace violence |
| `/contact` | Quote form |
| `/contact-us-1` | Permanent redirect to `/contact` (old GoDaddy URL) |

## Contact form

The quote form does **not** send mail from the server. There is no paid mail API or reCAPTCHA. Submit opens a `mailto:` message to `info@rubiconprotection.com` on the visitor’s device, prefilled with name, email, phone, company, service needed, and message.

Click-to-call: `833-217-1117` (`tel:+18332171117`).

## Brand rules used in this build

- Palette: black, white, charcoal only
- Footer on every page: AZ DPS Security Guard Company #1732763 and Private Investigator #1732762
- No careers/hiring CTA on the homepage
- No invented staff bios, street addresses, extra licenses, client logos, testimonials, or awards
- COVID-19 / mask-policy copy from the old guards page is not included
- Logo: circular roaring lion mark (`public/logo-lion.png` / `public/icon.png`), used in header, footer, and favicon
- Work, fleet, officer, and EP photographs live in `public/rubicon-brand-photos/` and are rendered with `next/image` on Home, Security Guards, and Executive Protection. AllSaints and Ashley Furniture are named only as locations visible in those photos. No sidewalk/outreach photo is used.

## Stack

Next.js App Router, Tailwind CSS, `next/image`.
