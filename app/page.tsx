import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { CredentialStrip } from "@/components/CredentialStrip";
import { Hero } from "@/components/Hero";
import { NationwideBand } from "@/components/NationwideBand";
import { Photo } from "@/components/Photo";
import { industries } from "@/lib/industries";
import { photos } from "@/lib/photos";
import { services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialStrip />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Service specialties</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Built for commercial clients
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-7">
            We provide security for large events and concerts, tribal casinos, and
            businesses of every kind. Executive protection covers celebrities,
            top-tier athletes, and high-net-worth individuals. Our strength is our
            people: trained, experienced, and ready to support a client who
            cannot afford a weak post.
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
                className="panel px-4 py-5 text-sm font-medium"
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
            How we cover the work
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="panel flex flex-col p-6"
              >
                <span className="kicker">0{index + 1}</span>
                <h3 className="display mt-3 text-2xl font-semibold uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {service.summary}
                </p>
                <span className="link-more mt-6">View service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Industries</p>
          <h2 className="display mt-3 text-3xl font-semibold uppercase sm:text-4xl">
            Coverage by site type
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            From construction sites to international programs, each industry page
            explains how we staff that kind of work.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => {
              const hero = industry.photos[0];
              return (
                <li key={industry.href}>
                  <Link
                    href={industry.href}
                    className="panel flex h-full flex-col"
                  >
                    <figure className="relative max-sm:hidden aspect-[16/10] overflow-hidden border-b border-line">
                      <Image
                        src={hero.src}
                        alt={hero.alt}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <span className="display p-3 text-sm font-semibold uppercase">
                      {industry.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
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
              <li className="border-l border-accent pl-4">
                Armed and unarmed uniformed guards for businesses and government
                sites.
              </li>
              <li className="border-l border-accent pl-4">
                Executive protection professionals able to work worldwide, with
                insurance that covers those operations.
              </li>
              <li className="border-l border-accent pl-4">
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
