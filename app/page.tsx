import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HeroReel } from "@/components/HeroReel";
import { NationwideBand } from "@/components/NationwideBand";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroReel />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">On the job</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Real work, real posts
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-7">
            These photographs are from Rubicon posts—not stock. Captions name the
            locations only because they are visible in the frame.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Photo
              {...photos.cameraInstall}
              caption="Camera install at AllSaints."
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Photo
              {...photos.nightPatrol}
              caption="Night patrol at Ashley Furniture Warehouse."
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Service specialties</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Built for commercial clients
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-7">
            We provide security for large events and concerts, tribal casinos, and
            businesses of every kind. Executive protection covers celebrities,
            top-tier athletes, and high-net-worth individuals. The resume is the
            people: trained, experienced, and ready to assist a client who cannot
            afford a weak post.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Large events and concerts",
              "Tribal casinos",
              "Businesses of all kinds",
              "Celebrity, athlete, and HNW protection",
            ].map((item) => (
              <li
                key={item}
                className="border border-line bg-charcoal px-4 py-5 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Services</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Three lines of coverage
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex flex-col border border-line bg-charcoal p-6 hover:border-white"
              >
                <span className="kicker">0{index + 1}</span>
                <h3 className="display mt-3 text-2xl font-semibold uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {service.summary}
                </p>
                <span className="mt-6 text-sm font-semibold uppercase tracking-[0.14em]">
                  View service
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NationwideBand />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Fleet</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Marked patrol vehicles
          </h2>
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

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Why Rubicon</p>
          <h2 className="display mt-3 max-w-3xl text-3xl font-semibold uppercase sm:text-4xl">
            We hire people with the experience the post actually requires
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="text-muted leading-7">
              Rubicon is the right choice for hard security problems because we
              hire for law enforcement, military, and private-sector experience
              with global reach. That mix matters when a concert gate, a casino
              floor, a warehouse dock, or a traveling principal cannot be covered
              by whoever happens to be available that night.
            </p>
            <ul className="space-y-4 text-sm leading-6">
              <li className="border-l-2 border-white pl-4">
                Armed and unarmed uniformed guards for businesses and government
                sites.
              </li>
              <li className="border-l-2 border-white pl-4">
                Executive protection professionals able to work worldwide, with
                insurance that covers those operations.
              </li>
              <li className="border-l-2 border-white pl-4">
                Event teams selected through a real interview process—not a
                staffing agency sending anyone who will show up.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
