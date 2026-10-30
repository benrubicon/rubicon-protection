import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
  className?: string;
  /** Fixed-crop frame so tall photos take less space. */
  crop?: "hero" | "inline";
  /** Tailwind object-position class used with crop. */
  focus?: string;
};

export function Photo({
  src,
  alt,
  width,
  height,
  priority,
  fit = "cover",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  crop,
  focus = "object-top",
}: PhotoProps) {
  const cropFrame =
    crop === "hero"
      ? "aspect-[16/9] sm:aspect-[16/10] lg:aspect-[4/3] lg:max-h-[320px] lg:justify-self-end lg:w-full"
      : crop === "inline"
        ? "aspect-[16/9] lg:max-h-[300px]"
        : "";
  return (
    <figure
      className={`photo-frame max-sm:hidden ${cropFrame} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`w-full ${crop ? `h-full object-cover ${focus}` : "h-auto"} ${
          !crop && fit === "contain" ? "object-contain" : !crop ? "object-cover" : ""
        }`}
      />
    </figure>
  );
}
