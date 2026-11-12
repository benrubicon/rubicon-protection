import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { IndustryVideo } from "@/components/IndustryVideo";
import { Photo } from "@/components/Photo";
import { photos, stock } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Security for GPOs & Group Purchasing Organizations",
  description:
    "GPOs and their members make one call to Rubicon. We staff posts at one site or many across the US, Canada, the UK, Europe and parts of Africa. 833-217-1117.",
};

const coverage = [
  {
    t: "United States",
    d: "One call for a single site or a multi-location program.",
  },
  {
    t: "Canada",
    d: "The same one-call model, for one site or many.",
  },
  {
    t: "The UK, Europe, and parts of Africa",
    d: "Staffed through our subcontractor network. We do not publish a roster of partner companies.",
  },
] as const;

const offered = [
  {
    href: "/security-guards",
    t: "Armed and unarmed guards",
    d: "Uniformed officers for standing posts, checkpoints, and site coverage.",
  },
  {
    href: "/event-security",
    t: "Event security",
    d: "Screening, staffing, and venue control when a member organization holds an event.",
  },
  {
    href: "/executive-protection",
    t: "Executive protection",
    d: "Close-protection details for travel, home, and business.",
  },
  {
    href: "/threat-monitoring",
    t: "Threat monitoring",
    d: "Daily review of public online content about the people we protect.",
  },
] as const;

export default function GpoPage() {
  return (
    <>
      <IndustryVideo slug="gpo" dir="services" />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:px-6 lg:gap-10 lg:py-10">
          <div>
            <p className="kicker">Group purchasing organizations</p>
            <h1 className="display mt-3 text-3xl font-semibold uppercase leading-[0.95] sm:text-5xl">
              Security for GPOs & Group Purchasing Organizations
            </h1>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              GPOs and their member organizations make one call to Rubicon, and
              Rubicon staffs posts at one site or many sites across the US,
              Canada, the UK, Europe, and parts of Africa. One point of contact.
              Consistent service.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
            One call. Any location, or many.
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="leading-7 text-muted">
              A group purchasing organization and the members on its program
              should not have to find a different security company in every city.
              The GPO or a member organization calls Rubicon once. We staff the
              posts—whether that is a single site or many sites—and keep one
              point of contact so the program stays consistent.
            </p>
            <p className="leading-7 text-muted">
              If you need a quote, tell us how many sites, which countries, what
              kind of post, and whether coverage is armed or unarmed, an event,
              executive protection, or threat monitoring.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "One call",
                d: "The GPO or a member organization reaches Rubicon. Individual sites do not have to hunt for coverage.",
              },
              {
                t: "One site or many",
                d: "The same program can cover a single location or posts across multiple sites.",
              },
              {
                t: "One point of contact",
                d: "Consistent service across the locations on the program, with Rubicon as the single point of contact.",
              },
            ].map((item) => (
              <li key={item.t} className="panel p-5">
                <h3 className="display text-2xl font-semibold uppercase">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
            Where we cover the work
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            One-call coverage for GPO programs in the United States, Canada, the
            UK, Europe, and parts of Africa. Coverage in the UK, Europe, and
            parts of Africa is staffed through our subcontractor network. We do
            not publish a roster of partner companies.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {coverage.map((item) => (
              <li key={item.t} className="panel p-5">
                <h3 className="display text-2xl font-semibold uppercase">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-7 text-muted">
            Related:{" "}
            <Link className="text-white underline" href="/national-accounts">
              National Accounts
            </Link>
            {" and "}
            <Link
              className="text-white underline"
              href="/industries/international"
            >
              International
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
            Services on a GPO program
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            The same one-call model covers the security work member organizations
            typically need.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {offered.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="panel flex flex-col p-6"
              >
                <h3 className="display text-2xl font-semibold uppercase">
                  {item.t}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {item.d}
                </p>
                <span className="link-more mt-6">View service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line max-sm:hidden">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Photo
              {...photos.suitedPost}
              crop="inline"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <Photo
              {...stock.ukLondon}
              crop="inline"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <Photo
              {...stock.africaCity}
              crop="inline"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk through a GPO program"
        body="Tell us whether you need coverage at one site or many, and in which countries."
      />
    </>
  );
}
