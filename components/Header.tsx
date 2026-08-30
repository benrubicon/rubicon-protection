"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { industries } from "@/lib/industries";
import { photos } from "@/lib/photos";
import { serviceNav, site } from "@/lib/site";

function Menu({
  label,
  href,
  items,
  pathname,
  onNavigate,
}: {
  label: string;
  href?: string;
  items: readonly { href: string; label: string }[];
  pathname: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = items.some((item) => pathname.startsWith(item.href));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 text-sm tracking-wide ${
          active ? "text-white" : "text-muted hover:text-white"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <span aria-hidden className="text-[0.65rem]">
          ▾
        </span>
      </button>
      {open ? (
        <ul className="absolute left-0 top-full z-50 min-w-56 border border-line bg-background py-2 shadow-lg">
          {href ? (
            <li>
              <Link
                href={href}
                className="block px-4 py-2 text-sm text-white hover:bg-charcoal"
                onClick={onNavigate}
              >
                All {label.toLowerCase()}
              </Link>
            </li>
          ) : null}
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-2 text-sm hover:bg-charcoal ${
                  pathname === item.href ? "text-white" : "text-muted hover:text-white"
                }`}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const industryItems = industries.map((item) => ({
    href: item.href,
    label: item.title,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 sm:gap-4"
          onClick={() => setOpen(false)}
        >
          <Image
            src={photos.logo.src}
            alt={photos.logo.alt}
            width={128}
            height={128}
            priority
            className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24 lg:h-28 lg:w-28"
          />
          <span className="min-w-0">
            <span className="display block text-sm font-semibold uppercase tracking-[0.18em] sm:text-base">
              Rubicon Protection
            </span>
            <span className="hidden text-xs tracking-wide text-muted sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label="Primary"
        >
          <Link
            href="/"
            className={`text-sm tracking-wide ${
              pathname === "/" ? "text-white" : "text-muted hover:text-white"
            }`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Menu label="Services" items={serviceNav} pathname={pathname} />
          <Menu
            label="Industries"
            href="/industries"
            items={industryItems}
            pathname={pathname}
          />
          <Link
            href="/contact"
            className={`text-sm tracking-wide ${
              pathname.startsWith("/contact")
                ? "text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-sm font-semibold text-white sm:inline"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black hover:bg-zinc-200 sm:px-4 sm:text-sm"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="max-h-[70vh] overflow-y-auto border-t border-line bg-charcoal px-4 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="block py-1 text-base text-white"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="pt-2">
              <p className="kicker">Services</p>
            </li>
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-base text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <p className="kicker">Industries</p>
            </li>
            <li>
              <Link
                href="/industries"
                className="block py-1 text-base text-white"
                onClick={() => setOpen(false)}
              >
                All industries
              </Link>
            </li>
            {industryItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-base text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block py-1 text-base text-white"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="block py-1 text-white">
                Call {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
