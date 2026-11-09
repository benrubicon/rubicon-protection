import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { IndustryVideo } from "@/components/IndustryVideo";
import { Photo } from "@/components/Photo";
import { stock } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Data Center Penetration Testing",
  description:
    "Physical security penetration testing for data centers. Rubicon has tested dozens of facilities over 5 years—hire the team that does the work. 833-217-1117.",
};

const scope = [
  {
    t: "Perimeter and access",
    d: "The engagement covers the facility perimeter, vehicle and pedestrian gates, badge and access-control systems, and how far an unauthorized person can move once they are past the first door.",
  },
  {
    t: "Tailgating and social engineering",
    d: "We test how staff, contractors, and visitors respond to tailgating, pretexting, and other social-engineering attempts aimed at getting past badge readers and reception without force.",
  },
  {
    t: "Guard post response",
    d: "We observe how posts detect, challenge, and escalate an intrusion attempt, then document what worked and what did not so the site can tighten the response.",
  },
] as const;

const deliverables = [
  "Written findings with clear severity",
  "Remediation recommendations the site can act on",
  "Coverage of badge systems, doors, and visitor processes",
  "A debrief with the people who run the facility",
];

const steps = [
  {
    n: "01",
    t: "Scope",
    d: "Agree on the facility, the rules of engagement, and what systems and posts are in play before anyone arrives on site.",
  },
  {
    n: "02",
    t: "Test",
    d: "Rubicon's own team runs the physical penetration test against the agreed perimeter, access controls, and social-engineering paths.",
  },
  {
    n: "03",
    t: "Report",
    d: "Deliver written findings and remediation recommendations, then walk the results with the facility team.",
  },
] as const;

export default function DataCenterPenetrationTestingPage() {
  return (
    <>
      <IndustryVideo slug="data-center-penetration-testing" dir="services" />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
          <p className="kicker">Physical security testing</p>
          <h1 className="display mt-3 max-w-4xl text-3xl font-semibold uppercase leading-[0.95] sm:text-5xl">
            Data Center Penetration Testing
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Rubicon has been doing physical security penetration testing of data
            centers for 5 years and has tested dozens of facilities. We are a
            licensed security company whose own team does the work—so why not
            hire the people doing the testing directly, instead of a firm that
            resells or subcontracts it.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Standing guard coverage:{" "}
            <Link className="text-white underline" href="/security-guards">
              Security Guards
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Photo
              {...stock.officeTowers}
              priority
              crop="inline"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Photo
              {...stock.warehouseInterior}
              crop="inline"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3">
          {scope.map((s) => (
            <article key={s.t} className="panel p-6">
              <h2 className="display text-2xl font-semibold uppercase">{s.t}</h2>
              <p className="mt-3 leading-7 text-muted">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl font-semibold uppercase">
              What you get
            </h2>
            <p className="mt-4 leading-7 text-muted">
              The point of the engagement is a clear picture of how the facility
              holds up under a controlled physical intrusion attempt, and a
              written path to fix what failed.
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-6">
              {deliverables.map((item) => (
                <li key={item} className="border-l border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl font-semibold uppercase">
              Hire the team doing the work
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Many firms sell data center penetration testing and then hand the
              job to someone else. Rubicon&apos;s team does the testing itself.
              You deal with the people on the ground, not a middleman.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Need ongoing posts after the test? See{" "}
              <Link className="text-white underline" href="/security-guards">
                Security Guards
              </Link>{" "}
              or{" "}
              <Link className="text-white underline" href="/national-accounts">
                National Accounts
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase">
            How an engagement runs
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="panel p-5">
                <p className="kicker">{step.n}</p>
                <h3 className="display mt-2 text-2xl font-semibold uppercase">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Need a data center penetration test?"
        body="Tell us the facility type, the rules of engagement, and the window you want tested. Rubicon's team will run it and deliver written findings."
      />
    </>
  );
}
