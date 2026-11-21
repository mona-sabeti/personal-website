import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./icons";

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
              href={profile.linkedIn}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn <ArrowUpRightIcon className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
