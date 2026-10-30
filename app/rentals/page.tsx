import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { IndustryVideo } from "@/components/IndustryVideo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jet & Yacht Rentals",
  description:
    "Private jet charter, yacht charter, helicopters, chauffeured ground transport and luxury vehicle rentals through our partner Advent Jets, with Rubicon security available on request. 833-217-1117.",
};

const offerings = [
  {
    t: "Private jet charter",
    d: "Access to thousands of aircraft worldwide, quoted in real time, with short-notice departures available.",
  },
  {
    t: "Yacht charter and lease",
    d: "Luxury yachts available for charter or lease in destinations such as the Caribbean, the Bahamas, Greece, Italy and the Maldives.",
  },
  {
    t: "Helicopters",
    d: "Helicopter service and tours, arranged alongside your flights and ground travel.",
  },
  {
    t: "Chauffeured ground transport",
    d: "Black car, SUV, limousine and van service in cities worldwide, arranged door to destination.",
  },
  {
    t: "Luxury vehicle rentals",
    d: "Exotic and luxury cars and SUVs for the days you are on the ground.",
  },
  {
    t: "Concierge and memberships",
    d: "Private islands and villas, VIP events, and a 24/7 concierge for travel and lifestyle requests.",
  },
];

export default function RentalsPage() {
  return (
    <>
      <IndustryVideo slug="rentals" dir="services" />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
          <p className="kicker">With our partner Advent Jets</p>
          <h1 className="display mt-3 text-3xl font-semibold uppercase leading-[0.95] sm:text-5xl">
            Jet and yacht rentals
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Rubicon Protection is a partner of Advent Jets, a Scottsdale-based
            luxury travel and concierge company. Tell us where you are going and
            we will arrange the aircraft, the yacht or the vehicle, and put
            Rubicon protection on the trip if you want it.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn">
              Request a Rental Quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn btn-line">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
            What you can rent
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item) => (
              <li key={item.t} className="panel p-5">
                <h3 className="display text-2xl font-semibold uppercase">{item.t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
              Travel with protection
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Flying a principal, a family or a delegation? Rubicon can provide
              executive protection from the car at the hangar to the hotel or the
              dock, and arrange armored vehicles when the trip calls for them.
              One conversation covers the trip and the security.
            </p>
          </div>
          <div>
            <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
              How it works
            </h2>
            <ol className="mt-4 space-y-3 leading-7 text-muted">
              <li>1. Send the route or destination, dates and group size.</li>
              <li>2. We work with Advent Jets to quote the aircraft, yacht or vehicles.</li>
              <li>3. Add a Rubicon protection detail if you want one.</li>
              <li>4. We stay on the line from booking until you are home.</li>
            </ol>
            <p className="mt-6 text-sm leading-7 text-muted">
              Related:{" "}
              <Link className="text-white underline" href="/executive-protection">
                Executive Protection
              </Link>
              {" and "}
              <Link className="text-white underline" href="/industries/international">
                International
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Plan the trip"
        body="Route, dates, group size, and whether you want security on board. We will come back with a quote."
      />
    </>
  );
}
