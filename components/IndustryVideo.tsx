"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function IndustryVideo({ slug }: { slug: string }) {
  const reducedMotion = useSyncExternalStore(subscribe, prefersReducedMotion, () => true);
  const ref = useRef<HTMLVideoElement>(null);
  const base = `/video/industries/${slug}`;

  useEffect(() => {
    const video = ref.current;
    if (!video) {
      return;
    }
    video.muted = true;
    // Only decode video while it is on screen; this keeps phone scrolling smooth.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()?.catch(() => {
            /* Autoplay can be blocked; the poster stays visible. */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="photo-frame relative aspect-video overflow-hidden lg:aspect-[21/9]">
          {reducedMotion ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`${base}-poster.jpg`} alt="" className="h-full w-full object-cover" />
          ) : (
            <video
              ref={ref}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={`${base}-poster.jpg`}
              aria-hidden
            >
              <source src={`${base}.webm`} type="video/webm" />
              <source src={`${base}.mp4`} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
