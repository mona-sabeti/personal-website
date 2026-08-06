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
          eyebrow="02 / Experience"
          id="experience-heading"
          title="Experience"
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
                <p className="leading-7 text-graphite">{item.summary}</p>
                <ul
                  aria-label={`Skills used at ${item.company}`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {item.skills.map((skill, skillIndex) => (
                    <li className="tag" key={`${skill}-${skillIndex}`}>
                      {skill}
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
