import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Security Guards",
  description:
    "Uniformed armed and unarmed guards for businesses and government. Checkpoints, property protection, and workplace-violence support.",
};

export default function SecurityGuardsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="kicker">Uniformed posts</p>
            <h1 className="display mt-3 text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl">
              Security Guards
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Rubicon provides uniformed security guards, armed and unarmed, for
              businesses and government entities. Officers run checkpoints, office
              entrances, and secure areas of buildings. They check credentials and
              keep unauthorized people out of the spaces you actually need
              protected.
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase">
            What a post can cover
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Lobby and office-entrance control",
              "Vehicle and pedestrian checkpoints",
              "Secure floors, rooms, and storage areas",
              "Credential and visitor verification",
              "After-hours and overnight coverage",
              "Mobile checks of doors, gates, and lots",
            ].map((item) => (
              <li key={item} className="border border-line bg-charcoal px-4 py-4 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <article>
            <h2 className="display text-3xl font-semibold uppercase">
              Property protection
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Rubicon works with businesses and local law enforcement to reduce
              the effect of unauthorized camping and loitering on private
              property. The approach is firm and compassionate: protect the rights
              of owners and their customers, keep the site usable, and handle
              people as people—not as a photo opportunity. We do not use
              exploitative images of that work.
            </p>
          </article>
          <article>
            <h2 className="display text-3xl font-semibold uppercase">
              Workplace violence
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Rubicon has experience helping prevent workplace-violence incidents.
              That includes full-time details on sites that need a standing
              presence, and officers who can assist during employee terminations
              when a calm, professional security presence is part of a safer
              process.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="max-w-3xl leading-7 text-muted">
            Officers wear a professional uniform. Coverage can be armed or unarmed
            based on the site, the threat, and what the client is authorized to
            request. If you need a quote, tell us the location type, hours, and
            whether the post is standing, roaming, or a mix.
          </p>
        </div>
      </section>

      <CtaBand
        title="Staff a guard post"
        body="Share the site, hours, armed or unarmed, and whether you need a standing detail or termination support."
      />
    </>
  );
}
