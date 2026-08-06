import { projects } from "@/data/portfolio";
import { ArrowUpRightIcon, CodeIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="section-space bg-ink text-mist"
      id="projects"
    >
      <div className="page-shell">
        <div>
          <SectionHeading
            eyebrow="03 / Featured projects"
            id="projects-heading"
            title="Featured projects"
          />
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => {
            const content = (
              <>
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-full border border-mist/20 bg-mist/10 text-powder">
                    <CodeIcon />
                  </div>
                  <span className="text-xs font-extrabold text-silver">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-14 text-xs font-bold uppercase tracking-[0.16em] text-powder">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-powder">
                  {project.description}
                </p>
                <ul
                  aria-label={`Technologies used for ${project.title}`}
                  className="mt-8 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      className="rounded-full border border-mist/20 px-3 py-1.5 text-xs font-semibold text-mist"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {project.href ? (
                  <span className="mt-8 flex items-center gap-2 text-sm font-bold text-mist">
                    View project <ArrowUpRightIcon />
                  </span>
                ) : null}
              </>
            );

            return project.href ? (
              <a
                className="project-card group focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-powder"
                href={project.href}
                key={project.title}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <article className="project-card" key={project.title}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
