import { leadership } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Leadership() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="section-space"
      id="leadership"
    >
      <div className="page-shell">
        <SectionHeading
          eyebrow="04 / Leadership"
          id="leadership-heading"
          title="Leadership"
        />
        <article className="mt-14 grid gap-5 rounded-[1.5rem] border border-graphite/15 bg-mist/60 p-6 sm:grid-cols-[1fr_1.4fr] sm:gap-10 sm:p-8 lg:grid-cols-[0.55fr_0.8fr_1.6fr]">
          <p className="text-xs font-bold uppercase tracking-wider text-graphite">
            {leadership.period}
          </p>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-ink">
              {leadership.role}
            </h3>
            <p className="mt-1 text-sm font-semibold text-graphite">
              {leadership.organization}
            </p>
          </div>
          <p className="leading-7 text-graphite">{leadership.description}</p>
        </article>
      </div>
    </section>
  );
}
