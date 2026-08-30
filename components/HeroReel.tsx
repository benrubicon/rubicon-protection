"use client";

import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

const slides = [
  photos.epWalk,
  photos.nightPatrol,
  photos.suitedPost,
  photos.cameraInstall,
  photos.teslaRear,
] as const;

export function HeroReel() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-line bg-background">
      <div className="hero-reel" aria-hidden>
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`hero-slide hero-slide-${index} object-cover`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20">
        <LogoMark
          width={160}
          height={160}
          priority
          className="mb-6 h-24 w-24 object-contain sm:h-32 sm:w-32"
        />
        <p className="kicker">{site.tagline}</p>
        <h1 className="display mt-4 max-w-4xl text-4xl font-semibold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
          Executive Protection and Security Guards
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Rubicon Protection staffs commercial sites, venues, and close-protection
          details with people who already know the work: law enforcement,
          military, and private-sector professionals. Armed and unarmed coverage.
          Executive protection teams that can operate worldwide.
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
    </section>
  );
}
