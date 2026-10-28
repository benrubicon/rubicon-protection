import { CtaBand } from "@/components/CtaBand";
import { IndustryVideo } from "@/components/IndustryVideo";
import { Photo } from "@/components/Photo";
import type { Industry } from "@/lib/industries";
import { industries } from "@/lib/industries";
import Link from "next/link";

// Industries that have a video in public/video/industries. Add a slug when its clip is added.
const videoSlugs = [
  "construction",
  "office-buildings",
  "parking-garages",
  "retail",
  "warehouses",
  "healthcare",
  "casinos",
  "government",
  "concerts-venues",
  "international",
];

export function IndustryPage({ industry }: { industry: Industry }) {
  const [hero, ...rest] = industry.photos;
  const related = industries.filter((item) => item.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10 lg:py-10">
          <div>
            <p className="kicker">{industry.kicker}</p>
            <h1 className="display mt-3 text-3xl font-semibold uppercase leading-[0.95] sm:text-5xl">
              {industry.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">{industry.lede}</p>
          </div>
          <Photo
            {...hero}
            priority
            crop="hero"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </section>

      {videoSlugs.includes(industry.slug) && <IndustryVideo slug={industry.slug} />}

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
              <li key={point.title} className="panel p-5">
                <h2 className="display text-2xl font-semibold uppercase">
                  {point.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {rest.length > 0 && (
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className={`grid gap-6 ${rest.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {rest.map((photo) => (
              <Photo
                key={photo.src}
                {...photo}
                crop="inline"
              sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>
      )}

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Other industries</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="panel block px-4 py-3 text-sm"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Request coverage: ${industry.title}`}
        body="Tell us the site, the hours, and whether you need a standing post, a roaming check, or a full event crew."
      />
    </>
  );
}
