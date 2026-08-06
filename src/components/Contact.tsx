import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="section-space bg-powder text-ink"
      id="contact"
    >
      <div className="page-shell">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/65">
          06 / Contact
        </p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <h2
              className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              id="contact-heading"
            >
              Contact
            </h2>
          </div>
          <div className="lg:flex lg:justify-end">
            <a
              className="inline-flex w-full items-center justify-between gap-8 rounded-full bg-accent px-7 py-5 font-bold text-mist shadow-lg shadow-ink/10 transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-powder sm:w-auto"
              href={`mailto:${profile.email}`}
            >
              <span className="flex items-center gap-3">
                <MailIcon />
                Email me
              </span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
