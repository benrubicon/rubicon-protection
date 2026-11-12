import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { IndustryVideo } from "@/components/IndustryVideo";

export const metadata: Metadata = {
  title: "Threat Monitoring",
  description:
    "Daily review of public online content about the people we protect, so the detail knows about a problem before it shows up in person. Public information only. 833-217-1117.",
};

const steps = [
  {
    n: "01",
    t: "Collect",
    d: "Every platform, the watchlist and the principal's comments.",
  },
  {
    n: "02",
    t: "Triage",
    d: "Read in context, assigned a tier.",
  },
  {
    n: "03",
    t: "Deep dive",
    d: "History, aliases, escalation.",
  },
  {
    n: "04",
    t: "Report",
    d: "Daily and event briefs with evidence.",
  },
  {
    n: "05",
    t: "Escalate",
    d: "Detail lead, client, law enforcement.",
  },
] as const;

const platforms = [
  "X",
  "Facebook",
  "Instagram",
  "Threads",
  "TikTok",
  "YouTube",
  "Bluesky",
  "Reddit",
  "Truth Social",
  "Gab",
  "Public Telegram channels",
  "Local TV, radio and newspapers",
  "Police and public-safety feeds",
  "Event listings and protest calendars",
] as const;

const tiers = [
  {
    t: "Threat",
    d: "Any violent or harm-wishing statement, even without a time or place; or a home, family or office mention with an address, photos or a call to go there. Immediate alert, law-enforcement packet, watchlist.",
  },
  {
    t: "Priority",
    d: "Any mention of the principal's home, spouse, children, family or offices. Immediate alert, listed first.",
  },
  {
    t: "Watch",
    d: "Hostile but not threatening: harassment, fixation, sightings, protest or \"show up\" calls. Next report, tracked over time.",
  },
  {
    t: "Noise",
    d: "Political criticism, ordinary insults, support, and same-name or off-target posts. Counted only, never alerted.",
  },
] as const;

const cadence = [
  {
    t: "Twice-daily scans",
    d: "Morning and evening, each picking up exactly where the last ended. A morning brief goes to the principal's team: threat level, today's events, new items, watchlist status.",
  },
  {
    t: "Pre-event scans",
    d: "About two hours before each appearance: venue, town, listings and protest calls. The detail lead gets a one-page event security PDF.",
  },
  {
    t: "Immediate alerts",
    d: "Threats and priority mentions are escalated the moment they are found. Imminent danger goes straight to the detail lead, client and local police.",
  },
] as const;

const deepDive = [
  "Identity and alias linking from public sources",
  "Full post-history review",
  "Location clues from public profiles",
  "Escalation pattern and fixation",
  "Subject profile written for law enforcement",
] as const;

const watchlist = [
  "Every tracked account checked every scan",
  "Renames, aliases, suspensions logged",
  "Cross-platform handle and name checks",
  "Persons of interest on every event brief",
] as const;

const evidence = [
  "Screenshots at discovery: post, account and parent post",
  "Exact text, direct links, timestamps",
  "Hashed files, chain of custody",
  "Law-enforcement-ready packets",
] as const;

export default function ThreatMonitoringPage() {
  return (
    <>
      <IndustryVideo slug="threat-monitoring" dir="services" />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
          <p className="kicker">Protective intelligence</p>
          <h1 className="display mt-3 max-w-4xl text-3xl font-semibold uppercase leading-[0.95] sm:text-5xl">
            Threat Monitoring
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Daily review of public online content about the people we protect, so
            the detail knows about a problem before it shows up in person. Public
            information only; we never post, reply or engage.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Online threat monitoring: $1,000/month. Platforms, protected
            interests and distribution are set with you at onboarding.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            For close protection on the ground, see{" "}
            <Link className="text-white underline" href="/executive-protection">
              Executive Protection
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase">
            How the program works
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl font-semibold uppercase">
              What we watch
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm leading-6">
              {platforms.map((item) => (
                <li key={item} className="border-l border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted">
              Including every reply and comment on the principal&apos;s own posts.
              Logged-in platforms are reviewed through read-only research
              accounts.
            </p>
          </div>
          <div>
            <h2 className="display text-3xl font-semibold uppercase">
              How we triage
            </h2>
            <ul className="mt-6 space-y-4">
              {tiers.map((tier) => (
                <li key={tier.t} className="panel p-5">
                  <h3 className="display text-xl font-semibold uppercase">
                    {tier.t}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{tier.d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted">
              Coded references get a plain-language &quot;Context / Meaning&quot;
              note. Each brief carries a threat level: Low, Guarded, Elevated or
              High.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3">
          {cadence.map((item) => (
            <article key={item.t} className="panel p-6">
              <h2 className="display text-2xl font-semibold uppercase">
                {item.t}
              </h2>
              <p className="mt-3 leading-7 text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
          <div>
            <h2 className="display text-2xl font-semibold uppercase">
              Account deep dives
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-6">
              {deepDive.map((item) => (
                <li key={item} className="border-l border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-2xl font-semibold uppercase">
              Watchlist
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-6">
              {watchlist.map((item) => (
                <li key={item} className="border-l border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-2xl font-semibold uppercase">
              Evidence and escalation
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-6">
              {evidence.map((item) => (
                <li key={item} className="border-l border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need threat monitoring?"
        body="Platforms, protected interests and distribution are set with you at onboarding. Tell us who needs coverage and we will scope the program."
      />
    </>
  );
}
