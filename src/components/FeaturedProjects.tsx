import Image from "next/image";
import { projects } from "@/data/portfolio";
import { CodeIcon } from "./icons";
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
            eyebrow="03 / Project experience"
            id="projects-heading"
            title="Project experience"
          />
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="relative flex h-56 items-center justify-center gap-3 overflow-hidden rounded-2xl border border-mist/15 bg-ink/45 p-3 sm:h-64">
                  {project.images.length === 1 ? (
                    <Image
                      alt={project.images[0].alt}
                      className="object-contain"
                      fill
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      src={project.images[0].src}
                    />
                  ) : (
                    project.images.map((image) => (
                      <Image
                        alt={image.alt}
                        className="h-full w-auto rounded-lg object-contain shadow-lg shadow-ink/25"
                        height={image.height}
                        key={image.src}
                        src={image.src}
                        width={image.width}
                      />
                    ))
                  )}
                </div>
                <div className="flex items-start justify-between">
                  <div className="mt-8 flex size-12 items-center justify-center rounded-full border border-mist/20 bg-mist/10 text-powder">
                    <CodeIcon />
                  </div>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-powder">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <ul className="mt-4 space-y-3 leading-7 text-powder">
                  {project.highlights.map((highlight) => (
                    <li className="flex gap-3" key={highlight}>
                      <span
                        aria-hidden="true"
                        className="mt-3 size-1.5 shrink-0 rounded-full bg-silver"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  aria-label={`Technologies used for ${project.title}`}
                  className="mt-auto flex flex-wrap gap-2 pt-8"
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
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}
