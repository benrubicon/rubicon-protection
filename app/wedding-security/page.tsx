import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { IndustryVideo } from "@/components/IndustryVideo";

export const metadata: Metadata = {
  title: "Wedding Security",
  description:
    "Wedding security: guest list management, alcohol service security, and suited or uniformed officers staffed to your venue's rules. Rubicon Protection, 833-217-1117.",
};

const services = [
  {
    t: "Guest list and check-in",
    d: "Officers at the entrance check guests against your list, keep uninvited people out, and handle crashers calmly and quietly so the couple and their families never have to.",
  },
  {
    t: "Alcohol service",
    d: "Many venues require security whenever alcohol is served. Officers in uniform or suits cover the bar and entrances, watch for ID and intoxication issues, de-escalate calmly, work with the venue and bartenders, and help guests leave safely at the end of the night.",
  },
  {
    t: "Venue requirements",
    d: "Many venues require licensed security before they will book the event. Have your planner or venue send their security requirements and we will staff to them.",
  },
] as const;

const coverage = [
  "Parking and arrivals",
  "A presence at the gift and cake tables",
  "Parking lot checks after dark",
  "Working with planners, caterers, and venue staff",
];

const steps = [
  {
    n: "01",
    t: "Plan",
    d: "Walk the venue, get the guest list and the venue's rules, and set posts for entrances, the bar, and parking.",
  },
  {
    n: "02",
    t: "Staff",
    d: "Put selected officers, in uniform or suits, on the right posts: check-in, bar, floor, and lot.",
  },
  {
    n: "03",
    t: "Run",
    d: "Keep the entrance smooth and the night calm, stay in touch with the planner and venue, and see guests out safely.",
  },
] as const;

export default function WeddingSecurityPage() {
  return (
    <>
      <IndustryVideo slug="wedding-security" dir="services" />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
          <p className="kicker">Weddings and receptions</p>
          <h1 className="display mt-3 max-w-4xl text-3xl font-semibold uppercase leading-[0.95] sm:text-5xl">
            Wedding Security
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            We do a lot of weddings. Rubicon staffs wedding security from
            100-guest receptions up: the guest list at the door, the bar when
            alcohol is served, and whatever security your venue requires. A
            quiet presence that keeps the day running without getting in the
            way of it. Our officers can work in suits, not just uniforms, so
            security blends into the wedding party&apos;s dress code.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Larger events:{" "}
            <Link className="text-white underline" href="/event-security">
              Event Security
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3">
          {services.map((s) => (
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
              Around the day
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Good wedding security does not spoil the day. Our officers stay
              calm, keep a low profile, and work alongside your planner,
              caterer, and venue staff.
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-6">
              {coverage.map((item) => (
                <li key={item} className="border-l border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl font-semibold uppercase">
              VIP guests
            </h2>
            <p className="mt-4 leading-7 text-muted">
              If a guest needs close protection, Rubicon can add an executive
              protection detail to the same event, coordinated with the rest of
              the security team.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              See{" "}
              <Link className="text-white underline" href="/executive-protection">
                Executive Protection
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase">
            How we run a wedding
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
        title="Planning a wedding?"
        body="Send us the date, the venue, the guest count, whether alcohol is served, and the venue's security requirements. We will staff to them."
      />
    </>
  );
}
