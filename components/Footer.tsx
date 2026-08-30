import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-lion.png"
              alt="Rubicon Protection Security lion logo"
              width={56}
              height={56}
              className="h-14 w-14"
            />
            <div>
              <p className="display text-sm font-semibold uppercase tracking-[0.16em]">
                Rubicon Protection
              </p>
              <p className="mt-1 text-sm text-muted">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Executive protection, event security, and uniformed guards for
            commercial clients. Arizona based. Worldwide reach.
          </p>
        </div>

        <div>
          <p className="kicker">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="text-white hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="text-white hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li>
              <Link className="text-white hover:underline" href="/contact">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="text-white hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs leading-5 text-muted sm:px-6 sm:text-sm">
          <p>
            {site.licenses.guard}
            <span className="mx-2 text-line" aria-hidden>
              |
            </span>
            {site.licenses.investigator}
          </p>
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
