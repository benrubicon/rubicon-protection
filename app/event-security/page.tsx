import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { stock } from "@/lib/photos";
import { nationwide } from "@/lib/site";

export const metadata: Metadata = {
  title: "Event Security",
  description:
    "Concert, graduation, and convention screening. Selective event staffing since 2016, from 100-person weddings to 18,000-person amphitheaters.",
};

export default function EventSecurityPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="kicker">Venues and crowds</p>
          <h1 className="display mt-3 max-w-4xl text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl">
            Event Security
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            A successful event—concert, graduation, or convention—starts with
            proper screening and people who can run a checkpoint without turning
            the line into a fight. Rubicon plans, staffs, and runs events of any
            size.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Industry view:{" "}
            <Link className="text-white underline" href="/industries/concerts-venues">
              Concerts and large venues
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Photo
              {...stock.concertStage}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Photo
              {...stock.concertCrowd}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">
            {nationwide.kicker}. Companies with many locations can call Rubicon
            once for coverage instead of hiring locally at each site. One
            contract, many posts.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3">
          <article className="border border-line bg-charcoal p-6">
            <h2 className="display text-2xl font-semibold uppercase">Screening</h2>
            <p className="mt-3 leading-7 text-muted">
              Rubicon has been screening thousands of people every year at major
              music venues and casinos. Moving patrons through a checkpoint
              quickly is a skill that is not easily learned. With years on those
              doors, we have it down: bags, credentials, prohibited items, and
              the judgment to keep the night moving.
            </p>
          </article>
          <article className="border border-line bg-charcoal p-6">
            <h2 className="display text-2xl font-semibold uppercase">
              Good people
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Keeping a concert fun and orderly takes planning, personnel, and
              training. Rubicon has been staffing and securing concerts for major
              artists since 2016. We are not a staffing agency hiring anyone who
              will show up. The interview process is selective. Good people on
              the line means happier patrons, fewer crowd problems, and—often—the
              ability to staff with fewer bodies because the crew actually works.
            </p>
          </article>
          <article className="border border-line bg-charcoal p-6">
            <h2 className="display text-2xl font-semibold uppercase">
              Large or small
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Whether it is 18,000 people at an open-air amphitheater or 100 at a
              wedding, we have secured events, concerts, and conventions across
              that range. Rubicon will help plan, staff, and run the venue you
              have—not a template that only fits arena nights.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase">
            How we work a date
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Plan",
                d: "Walk the site, set posts, screening lanes, and emergency routes before doors.",
              },
              {
                n: "02",
                t: "Staff",
                d: "Put selected people on the right jobs: gates, floor, backstage, and parking.",
              },
              {
                n: "03",
                t: "Run",
                d: "Keep the checkpoint fast, the floor orderly, and the client informed.",
              },
            ].map((step) => (
              <li key={step.n} className="border border-line p-5">
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
        title="Need event coverage?"
        body="Give us the venue, expected attendance, and whether you need screening, floor, or a full run-of-show crew."
      />
    </>
  );
}
