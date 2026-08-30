import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import type { Industry } from "@/lib/industries";
import { industries } from "@/lib/industries";
import Link from "next/link";

export function IndustryPage({ industry }: { industry: Industry }) {
  const [hero, ...rest] = industry.photos;
  const related = industries.filter((item) => item.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="kicker">{industry.kicker}</p>
            <h1 className="display mt-3 text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl">
              {industry.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{industry.lede}</p>
          </div>
          <Photo
            {...hero}
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {industry.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {industry.points.map((point) => (
              <li key={point.title} className="border border-line bg-charcoal p-5">
                <h2 className="display text-2xl font-semibold uppercase">
                  {point.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className={`grid gap-6 ${rest.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {rest.map((photo) => (
              <Photo
                key={photo.src}
                {...photo}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Other industries</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border border-line px-4 py-3 text-sm hover:border-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Cover ${industry.title.toLowerCase()}`}
        body="Tell us the site, the hours, and whether you need a standing post, a roaming check, or a full event crew."
      />
    </>
  );
}
