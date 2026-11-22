import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink py-4 text-powder">
      <div className="page-shell">
        <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}.
          </p>
          <div className="flex gap-5">
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-mist"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon className="size-3.5" /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-mist"
              href={profile.linkedIn}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="size-3.5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
