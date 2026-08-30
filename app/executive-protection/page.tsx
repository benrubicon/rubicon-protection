import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Executive Protection",
  description:
    "Close-protection details of any size covering home, business, vehicles, family, and travel. Worldwide insurance, threat monitoring, and assessments.",
};

export default function ExecutiveProtectionPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="kicker">Close protection</p>
            <h1 className="display mt-3 text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl">
              Executive Protection
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Rubicon fields protection details of any size so coverage matches a
              busy schedule—not the other way around. We safeguard home, business,
              vehicles, family, and travel. The work is quiet, planned, and built
              for principals who need professionals, not theater.
            </p>
          </div>
          <div className="border border-line bg-charcoal p-10">
            <Image
              src="/logo-lion.png"
              alt="Rubicon Protection Security lion logo"
              width={280}
              height={280}
              className="mx-auto h-auto w-48 sm:w-64"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
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
          <article className="border border-line bg-charcoal p-6">
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
