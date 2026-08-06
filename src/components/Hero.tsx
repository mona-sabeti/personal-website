import Link from "next/link";
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
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          <div>
            <p className="eyebrow">{profile.role}</p>
            <h1
              className="mt-5 max-w-4xl text-[clamp(4rem,9vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-ink"
              id="hero-heading"
            >
              {profile.name}
            </h1>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-primary" href="#projects">
                Projects
                <ArrowUpRightIcon />
              </Link>
              <Link className="button button-secondary" href="#contact">
                Contact
                <ArrowUpRightIcon />
              </Link>
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <div aria-hidden="true" className="portrait-mark">
              <span className="text-[5.5rem] font-extrabold tracking-[-0.08em] text-accent">
                {profile.shortName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
