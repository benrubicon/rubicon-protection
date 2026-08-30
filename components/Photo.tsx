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
    </figure>
  );
}
