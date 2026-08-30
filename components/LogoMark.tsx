import { photos } from "@/lib/photos";

/** Raw RGBA PNG — never next/image, which flattens alpha to an opaque palette. */
export function LogoMark({
  className,
  width,
  height,
  priority,
}: {
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photos.logo.src}
      alt={photos.logo.alt}
      width={width}
      height={height}
      className={className}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}
