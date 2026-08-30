# Rubicon Protection

Marketing site for [Rubicon Protection](https://rubiconprotection.com/) — executive protection, event security, and security guards. Arizona based, worldwide reach.

This repository is a greenfield Next.js rebuild. **Do not point `rubiconprotection.com` DNS at this project until a cutover is explicitly approved.** The live GoDaddy site stays in production until then.

## Preview

Git-linked Hobby project: `rubicon-protection-ixjs` (separate from valor-care-finder). PR 1 preview:

- https://rubicon-protection-ixjs-git-cursor-mar-b92c86-valor-senior-care.vercel.app

**DNS:** do not point `rubiconprotection.com` at this project until a cutover is explicitly approved. Do not merge this branch to `main` until a cutover is approved.

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
- Logo: circular roaring lion mark with a transparent background. Header and footer use `/rubicon-brand-photos/logo-lion.png`. Favicon: `public/logo-lion.png` / `public/icon.png`.
- Work, fleet, officer, and EP photographs live in `public/rubicon-brand-photos/` and are rendered with `next/image` on every page. Fleet cutouts sit on dark asphalt. AllSaints and Ashley Furniture are named only as locations visible in those photos. No sidewalk/outreach photo is used.
- National commercial accounts: one call, Rubicon finds coverage and staffs the posts. Copy is on Home and Security Guards, with a short mention on Event Security. No invented dollar amounts or extra named clients.
- Home hero is a Ken Burns reel of real brand photos. Arizona-based / worldwide EP copy is unchanged.

## Stack

Next.js App Router, Tailwind CSS, `next/image`.
