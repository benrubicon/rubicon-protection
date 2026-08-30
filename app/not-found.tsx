import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="kicker">404</p>
      <h1 className="display mt-3 text-4xl font-semibold uppercase">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        That URL is not on this site. Use the navigation for Home, Executive
        Protection, Event Security, Security Guards, or Contact.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black"
      >
        Back to Home
      </Link>
    </section>
  );
}
