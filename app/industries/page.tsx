import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Rubicon Protection coverage by industry: construction, offices, parking, retail, warehouses, healthcare, casinos, government, concerts, and international.",
};

export default function IndustriesIndexPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="kicker">Where we work</p>
          <h1 className="display mt-3 max-w-4xl text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl">
            Industries
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Commercial coverage by site type. Each page is a real offering—not a
            placeholder. Brand photographs are labeled as Rubicon posts. Stock
            photographs are labeled as generic industry photography.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const hero = industry.photos[0];
              return (
                <li key={industry.href}>
                  <Link
                    href={industry.href}
                    className="flex h-full flex-col border border-line bg-charcoal hover:border-white"
                  >
                    <figure className="relative aspect-[16/10] overflow-hidden border-b border-line bg-charcoal">
                      <Image
                        src={hero.src}
                        alt={hero.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="kicker">{industry.kicker}</p>
                      <h2 className="display mt-2 text-2xl font-semibold uppercase">
                        {industry.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                        {industry.summary}
                      </p>
                      <span className="mt-4 text-sm font-semibold uppercase tracking-[0.14em]">
                        View industry
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Need coverage on a site type we listed?"
        body="Tell us the industry, the city, and whether this is one location or a national program."
      />
    </>
  );
}
