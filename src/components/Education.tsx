import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section
      aria-labelledby="education-heading"
      className="section-space"
      id="education"
    >
      <div className="page-shell">
        <SectionHeading
          eyebrow="01 / Education"
          id="education-heading"
          title="Education"
        />
        <div className="mt-14 grid gap-5">
          {education.map((item) => (
            <article
              className="grid gap-6 rounded-[2rem] border border-graphite/15 bg-powder/45 p-7 shadow-sm shadow-ink/5 sm:grid-cols-[1fr_auto] sm:p-10"
              key={item.credential}
            >
              <div>
                <p className="text-sm font-bold text-graphite">
                  {item.institution}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {item.credential}
                </h3>
                <ul className="mt-5 max-w-3xl space-y-2 leading-7 text-graphite">
                  {item.details.map((detail) => (
                    <li className="flex gap-3" key={detail}>
                      <span
                        aria-hidden="true"
                        className="mt-3 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-graphite sm:text-right">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
