import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="section-space bg-powder/45"
      id="skills"
    >
      <div className="page-shell">
        <SectionHeading
          eyebrow="05 / Technical skills"
          id="skills-heading"
          title="Technical skills"
        />
        <div className="mt-12 border-t border-graphite/25 sm:mt-16">
          {skillGroups.map((group, index) => (
            <div
              className="grid gap-5 border-b border-graphite/25 py-8 sm:py-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12"
              key={group.title}
            >
              <div className="flex items-start gap-3">
                <span className="text-xs font-extrabold text-graphite">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-ink">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-8 gap-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <li
                    className="text-base font-medium text-graphite"
                    key={`${group.title}-${skill}-${skillIndex}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
