import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { QuoteForm } from "@/components/QuoteForm";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a Rubicon Protection quote for executive protection, event security, or security guards. Call 833-217-1117 or email info@rubiconprotection.com.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div>
        <p className="kicker">Contact</p>
        <h1 className="display mt-3 text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl">
          Get a Quote
        </h1>
        <p className="mt-5 leading-7 text-muted">
          Tell us what you need covered. A name-and-email form is not enough for
          a real security quote, so this path asks for the service line, a phone
          number, and the details of the job.
        </p>
        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <p className="kicker">Call</p>
            <a
              className="mt-1 block text-xl font-semibold text-white hover:underline"
              href={`tel:${site.phoneTel}`}
            >
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            <p className="kicker">Email</p>
            <a
              className="mt-1 block text-lg text-white hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </li>
        </ul>
        <p className="mt-8 text-sm leading-6 text-muted">
          {site.licenses.guard}. {site.licenses.investigator}.
        </p>
        <Photo
          {...photos.officer}
          className="mt-10"
          sizes="(min-width: 1024px) 38vw, 100vw"
        />
        <Photo
          {...photos.suitedPost}
          className="mt-6"
          sizes="(min-width: 1024px) 38vw, 100vw"
        />
      </div>
      <QuoteForm />
    </section>
  );
}
