import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
  className?: string;
};

export function Photo({
  src,
  alt,
  width,
  height,
  caption,
  priority,
  fit = "cover",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: PhotoProps) {
  return (
    <figure
      className={`overflow-hidden border border-line bg-charcoal ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`h-auto w-full ${
          fit === "contain" ? "object-contain" : "object-cover"
        }`}
      />
      {caption ? (
        <figcaption className="border-t border-line bg-charcoal px-4 py-3 text-sm leading-6 text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
