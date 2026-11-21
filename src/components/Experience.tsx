import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="section-space"
      id="experience"
    >
      <div className="page-shell">
        <SectionHeading
          eyebrow="02 / Professional experience"
          id="experience-heading"
          title="Professional experience"
        />

        <div className="mt-14 grid gap-4">
          {experience.map((item, index) => (
            <article
              className="grid gap-5 rounded-[1.5rem] border border-graphite/15 bg-mist/60 p-6 transition hover:border-graphite/30 hover:bg-powder/30 sm:grid-cols-[1fr_1.4fr] sm:gap-10 sm:p-8 lg:grid-cols-[0.55fr_0.8fr_1.6fr]"
              key={`${item.company}-${index}`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-graphite">
                {item.period}
              </p>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-semibold text-graphite">{item.company}</p>
              </div>
              <div>
                <ul className="space-y-3 leading-7 text-graphite">
                  {item.highlights.map((highlight) => (
                    <li className="flex gap-3" key={highlight}>
                      <span
                        aria-hidden="true"
                        className="mt-3 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
