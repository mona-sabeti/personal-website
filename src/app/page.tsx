export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-500">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I&apos;m Mona.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m a software engineering graduate with experience in
            cybersecurity, automation, data analytics and full-stack
            development.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              // href="#projects"
              className="rounded-lg bg-slate-900 px-5 py-3 font-medium text-white"
            >
              View my projects
            </a>

            <a
              // href="/resume.pdf"
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium"
            >
              View résumé
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
