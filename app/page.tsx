import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <p className="kicker">{site.tagline}</p>
            <h1 className="display mt-4 max-w-3xl text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl">
              Executive Protection and Security Guards
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Rubicon Protection staffs commercial sites, venues, and close-protection
              details with people who already know the work: law enforcement,
              military, and private-sector professionals. Armed and unarmed
              coverage. Executive protection teams that can operate worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black hover:bg-zinc-200"
              >
                Get a Quote
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center border border-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="border border-line bg-charcoal p-8">
              <Image
                src="/logo-lion.png"
                alt="Circular Rubicon Protection Security roaring lion mark"
                width={320}
                height={320}
                priority
                className="h-auto w-56 sm:w-72 lg:w-80"
              />
            </div>
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
