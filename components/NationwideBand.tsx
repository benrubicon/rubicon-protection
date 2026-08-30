import { nationwide } from "@/lib/site";

export function NationwideBand({
  title = nationwide.title,
  body = nationwide.body,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-b border-line bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="kicker">{nationwide.kicker}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl font-semibold uppercase sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">{body}</p>
      </div>
    </section>
  );
}
