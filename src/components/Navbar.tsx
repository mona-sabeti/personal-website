import Link from "next/link";
import { navigation, profile } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite/15 bg-mist/190 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="page-shell flex h-18 items-center justify-between"
      >
        <Link
          className="rounded-sm text-sm font-extrabold tracking-[0.16em] text-ink outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4"
          href="/"
        >
          {profile.shortName}
          <span className="text-graphite">.</span>
          <span className="sr-only">{profile.name}, home</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-small button-primary" href="#contact">
            Let&apos;s talk
          </Link>
        </div>

        <details className="nav-menu relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-graphite/30 bg-mist px-4 py-2 text-sm font-bold text-ink outline-none focus-visible:ring-2 focus-visible:ring-ink">
            <span>Menu</span>
            <span aria-hidden="true" className="menu-lines">
              <span />
              <span />
            </span>
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-2xl border border-graphite/20 bg-mist p-2 shadow-2xl shadow-ink/15">
            {navigation.map((item) => (
              <Link
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-graphite hover:bg-powder/50 hover:text-ink"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-1 block rounded-xl bg-ink px-4 py-3 text-sm font-bold text-mist"
              href="#contact"
            >
              Let&apos;s talk
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
