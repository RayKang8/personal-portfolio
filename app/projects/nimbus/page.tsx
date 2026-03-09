import Link from "next/link";

const techStack = ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS"];

const highlights = [
  "Built for immersive 3D and AR/VR model workflows",
  "Focused on modern frontend architecture and usability",
  "Designed with scalable backend structure in mind",
];

export default function NimbusProjectPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-30 mb-14">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              Ray Kang
            </Link>

            <Link
              href="/#projects"
              className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-[1.03]"
            >
              Back to Projects
            </Link>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Case Study</p>
            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">Nimbus Labs</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              AR/VR model management platform designed for immersive viewing workflows,
              interactive 3D experiences, and polished product usability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                GitHub
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-fuchsia-500/20 text-center text-white/50">
              Project Screenshot / Preview
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-sm leading-7 text-white/75">{item}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Overview</p>
            <h2 className="mt-4 text-3xl font-bold">What it is</h2>
            <p className="mt-5 leading-8 text-white/70">
              Nimbus Labs is a product-focused platform built around managing and interacting
              with 3D assets in a cleaner, more intuitive way. The goal was to create an
              experience that feels modern and visually polished while supporting more advanced
              workflows behind the scenes.
            </p>
            <p className="mt-5 leading-8 text-white/70">
              This project reflects the kind of work I enjoy most: combining strong UI,
              product thinking, and scalable application structure into something that feels
              both technically sound and impressive to use.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Tech Stack</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Role</p>
              <p className="mt-4 leading-8 text-white/70">
                Full-stack development, UI direction, product structure, and implementation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}