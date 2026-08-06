import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="section-space"
      id="about"
    >
      <div className="page-shell">
        <div className="grid gap-12 rounded-[2rem] bg-powder p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:p-16">
          <div>
            <SectionHeading
              eyebrow="01 / About"
              id="about-heading"
              title="About"
            />
          </div>
          <div>
            <div className="space-y-6 text-lg leading-8 text-ink/80 sm:text-xl sm:leading-9">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
