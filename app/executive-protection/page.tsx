import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IndustryVideo } from "@/components/IndustryVideo";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Executive Protection",
  description:
    "Close-protection details of any size covering home, business, vehicles, family, and travel. Worldwide insurance, threat monitoring, and assessments.",
};

export default function ExecutiveProtectionPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10 lg:py-10">
          <div>
            <p className="kicker">Close protection</p>
            <h1 className="display mt-3 text-3xl font-semibold uppercase leading-[0.95] sm:text-5xl">
              Executive Protection
            </h1>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Rubicon fields protection details of any size so coverage matches a
              busy schedule—not the other way around. We safeguard home, business,
              vehicles, family, and travel. The work is quiet, planned, and built
              for principals who need experienced professionals, not a show.
            </p>
          </div>
          <Photo
            {...photos.epWalk}
            priority
            crop="hero"
            focus="object-[50%_78%]"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </section>

      <IndustryVideo slug="executive-protection" dir="services" />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <article>
            <h2 className="display text-3xl font-semibold uppercase">
              Protection details
            </h2>
            <p className="mt-4 leading-7 text-muted">
              A detail can be a single agent for a short movement or a larger team
              covering overlapping locations. We size the package to the lifestyle
              and the workday: residences, offices, vehicles, family members, and
              the routes between them. Rubicon has the experience to assist at any
              level—advance work, static posts, and traveling coverage.
            </p>
          </article>
          <article className="panel p-6">
            <h2 className="display text-2xl font-semibold uppercase">Travel</h2>
            <p className="mt-3 leading-7 text-muted">
              We assist with travel planning and logistics and can participate in
              every phase of a trip: itinerary review, ground movement, venue
              arrivals, and overnight security. Our insurance covers operations
              worldwide, so destination is not a hard stop. Executive protection
              professionals are able to work globally when the principal needs
              continuity away from home.
            </p>
          </article>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <Photo
            {...photos.epExit}
            crop="inline"
              focus="object-[50%_35%]"
              sizes="(min-width: 1024px) 42vw, 100vw"
          />
          <div>
            <p className="kicker">Movements</p>
            <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
              Arrivals and departures
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Vehicle work is part of the detail: holding doors, scanning the
              approach, and keeping the principal moving. Coverage is sized to the
              schedule, with no display for show.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Intelligence</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Threats are watched before they arrive at the door
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            We use software that monitors threats on social media in real time.
            Analysts can apply keywords and geo-fenced search locations, then warn
            protection teams of potential threats so the detail can adjust routes,
            posture, or staffing before a problem becomes a scene.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase">
            Threat assessments
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            Whether you want to see where current security is lacking, or you have
            no program yet and need an industry view of what should be in place, a
            comprehensive threat assessment is a sound starting point. We look at
            life, business, and properties to identify vulnerabilities and
            potential risks, then make recommendations to mitigate them—people,
            procedures, and physical security together.
          </p>
        </div>
      </section>

      <CtaBand
        title="Request an executive protection quote"
        body="Describe the principal, travel, residences, and the level of coverage you need."
      />
    </>
  );
}
