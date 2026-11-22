import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[780px] lg:pt-44"
      id="home"
    >
      <div aria-hidden="true" className="hero-grid" />
      <div className="page-shell relative">
        <div>
          <p className="eyebrow">{profile.role}</p>
          <h1
            className="mt-5 max-w-4xl text-[clamp(4rem,9vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-ink"
            id="hero-heading"
          >
            {profile.name}
          </h1>
          <p className="mt-7 text-base font-semibold text-graphite sm:text-lg">
            {profile.location} · Western University
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button button-primary" href="#projects">
              Projects
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
