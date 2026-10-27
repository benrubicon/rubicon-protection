"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroMedia() {
  const reducedMotion = useSyncExternalStore(
    subscribe,
    prefersReducedMotion,
    () => true,
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = true;
    const play = video.play();
    if (play) {
      play.catch(() => {
        /* Autoplay can be blocked; the poster stays visible. */
      });
    }
  }, [reducedMotion]);

  return (
    <div className="hero-media absolute inset-0" aria-hidden>
      <Image
        src="/video/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {reducedMotion ? null : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
