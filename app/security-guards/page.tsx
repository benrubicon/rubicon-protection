import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { NationwideBand } from "@/components/NationwideBand";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";

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
          <Photo
            {...photos.officer}
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
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

      <NationwideBand />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Retail presence</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Uniformed and suited coverage
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            Officers wear a professional uniform. Coverage can be armed or unarmed
            based on the site, the threat, and what the client is authorized to
            request.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Photo
              {...photos.suitedPost}
              caption="Suited post inside AllSaints."
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Photo
              {...photos.cameraInstall}
              caption="Technical work at AllSaints."
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <Photo
            {...photos.nightPatrol}
            caption="Night patrol at Ashley Furniture Warehouse."
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="grid gap-10">
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
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Fleet</p>
          <h2 className="display text-3xl font-semibold uppercase">
            Mobile patrol
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            If you need a quote, tell us the location type, hours, and whether the
            post is standing, roaming, or a mix.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Photo
              {...photos.teslaRear}
              fit="contain"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <Photo
              {...photos.ioniqFront}
              fit="contain"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <Photo
              {...photos.teslaSide}
              fit="contain"
              className="sm:col-span-2 lg:col-span-1"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Staff a guard post"
        body="Share the site, hours, armed or unarmed, and whether you need a standing detail or termination support."
      />
    </>
  );
}
