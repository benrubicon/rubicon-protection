import Link from "next/link";
import { HeroMedia } from "@/components/HeroMedia";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero relative isolate overflow-hidden border-b border-line bg-black">
      <HeroMedia />
      <div className="hero-shade absolute inset-0" aria-hidden />
      <div className="hero-copy relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <p className="kicker">{site.tagline}</p>
        <h1 className="display mt-4 max-w-5xl text-5xl font-bold uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
          One Call. Every Post Covered.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg sm:leading-8">
          Rubicon Protection is the prime contractor for security work across
          the country. One contract, one point of contact, and we staff every
          post in every city with vetted armed and unarmed officers, event
          teams, and executive protection details.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn">
            Get a Quote
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn btn-line">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
