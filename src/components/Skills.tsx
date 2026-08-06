import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="section-space bg-powder/45"
      id="skills"
    >
      <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="04 / Skills"
          id="skills-heading"
          title="Skills"
        />
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={group.title}>
              <div className="flex items-center gap-3 border-b border-graphite/20 pb-4">
                <span className="text-xs font-extrabold text-graphite">
                  0{index + 1}
                </span>
                <h3 className="font-bold text-ink">{group.title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <li
                    className="flex items-center gap-3 text-sm font-medium text-graphite"
                    key={`${group.title}-${skill}-${skillIndex}`}
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-ink/60"
                    />
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
