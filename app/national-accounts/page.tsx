import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { NationwideBand } from "@/components/NationwideBand";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { nationwide } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "National Accounts",
  description:
    "Nationwide coverage for major companies: one call, Rubicon finds appropriate coverage and staffs posts across stores and locations. 833-217-1117.",
};

export default function NationalAccountsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="kicker">{nationwide.kicker}</p>
            <h1 className="display mt-3 text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl">
              National Accounts
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{nationwide.body}</p>
          </div>
          <Photo
            {...photos.suitedPost}
            caption="Suited post inside AllSaints."
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </section>

      <NationwideBand showLink={false} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
            How a national program actually runs
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="leading-7 text-muted">
              A company with stores or facilities in many cities should not leave
              each manager to find a local guard company. That produces uneven
              posts, uneven people, and a stack of small contracts. The company
              calls Rubicon once. We find appropriate coverage for each site and
              staff the posts.
            </p>
            <p className="leading-7 text-muted">
              We do not publish a list of national clients or dollar amounts. The
              photographs on this page are Rubicon posts at locations visible in
              the frame. If you need a quote, tell us how many sites, what kind of
              post, and whether coverage is armed or unarmed.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "One call",
                d: "Corporate security or operations reaches Rubicon. Individual stores do not have to hunt.",
              },
              {
                t: "Many locations",
                d: "Retail floors, warehouses, offices, and related sites can sit on the same program.",
              },
              {
                t: "We staff the posts",
                d: "Appropriate people, for the hours you specify—not a body shop sending whoever is free.",
              },
            ].map((item) => (
              <li key={item.t} className="border border-line bg-charcoal p-5">
                <h3 className="display text-2xl font-semibold uppercase">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-7 text-muted">
            Related:{" "}
            <Link className="text-white underline" href="/industries/retail">
              Retail
            </Link>
            {", "}
            <Link className="text-white underline" href="/industries/warehouses">
              Warehouses
            </Link>
            {", and "}
            <Link className="text-white underline" href="/security-guards">
              Security Guards
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Photo
              {...photos.nightPatrol}
              caption="Night patrol at Ashley Furniture Warehouse."
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Photo
              {...photos.cameraInstall}
              caption="Camera install at AllSaints."
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk through a national program"
        body="How many locations, what kind of post, and whether you need standing coverage, roaming, or both."
      />
    </>
  );
}
