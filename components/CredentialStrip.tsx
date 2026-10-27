import { site } from "@/lib/site";

const items = [
  site.licenses.guard,
  site.licenses.investigator,
  "Nationwide one-call coverage",
] as const;

export function CredentialStrip({ className = "" }: { className?: string }) {
  return (
    <section
      className={`credential-strip no-reveal border-b border-line ${className}`}
      aria-label="Licenses and coverage"
    >
      <ul className="mx-auto grid max-w-6xl sm:grid-cols-3">
        {items.map((item) => (
          <li
            key={item}
            className="credential-item border-b border-line px-4 py-4 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
