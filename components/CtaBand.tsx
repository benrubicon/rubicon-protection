import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to staff a post, a venue, or a detail?",
  body = "Tell us the site, the dates, and the risk. We will put experienced people on it.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-band border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="display text-3xl font-semibold uppercase sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-muted">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn">
            Get a Quote
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn btn-line">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
