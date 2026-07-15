import Link from "next/link";

const techStack = [
  "React Native",
  "Expo",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "PL/pgSQL",
  "RevenueCat",
  "EAS",
];

const highlights = [
  "Founded and built a Christian devotional accountability app solo, live on the iOS App Store with 100+ daily active users",
  "Designed the PostgreSQL schema with row-level security and wrote PL/pgSQL functions to handle cross-timezone streak logic",
  "Shipped 10+ production releases using EAS and managed the full App Store and Google Play submission and compliance pipeline",
];

const features = [
  "Daily devotional accountability with streak tracking across timezones",
  "Row-level security policies enforcing per-user data access at the database layer",
  "PL/pgSQL functions handling streak resets, timezone edge cases, and daily rollovers",
  "Subscription management and paywalls powered by RevenueCat",
  "Continuous production releases shipped through Expo Application Services (EAS)",
  "Android launch currently in progress alongside the live iOS release",
];

export default function YokeProjectPage() {
  return (
    <main className="min-h-screen bg-[#0c0b09] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,245,244,0.10),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(253,230,138,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(214,211,209,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-30 mb-14">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80"
            >
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

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-200/80">
              Case Study
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
              Yoke: Faith Together
            </h1>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-100/60">
              Founder & Solo Developer — Toronto, ON — Jan 2025 – Present
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Yoke is a Christian devotional accountability app I founded and built
              solo, from product idea to production. It helps users stay consistent
              with daily devotionals through accountability and streak tracking, and
              is currently live on the iOS App Store with 100+ daily active users,
              with an Android launch in progress.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://yokefaith.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Visit Site
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-[2rem] border border-amber-100/20 bg-gradient-to-br from-amber-100/10 to-stone-200/5 p-4 backdrop-blur-xl">
            <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 p-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-100/60">
                Live on the App Store
              </p>
              <h2 className="mt-4 text-3xl font-bold">Yoke</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                Faith Together — daily devotional accountability, built solo with
                React Native, Expo, and Supabase.
              </p>
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
            <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
              Why I Built It
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Turning a personal need into a live product
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              I wanted a simple way to stay consistent with daily devotionals and
              build accountability with others, so I built Yoke as a solo founder,
              owning everything from product design to backend architecture to App
              Store compliance.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              The hardest engineering problem was streak logic that stays correct
              across timezones. I designed the PostgreSQL schema with row-level
              security and wrote PL/pgSQL functions to handle daily rollovers and
              streak resets reliably regardless of where a user is in the world.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
              Tech Stack
            </p>

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
              <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
                Role
              </p>
              <p className="mt-4 leading-8 text-white/70">
                Founder and solo developer across product, mobile app, database
                design, and the full App Store and Google Play submission and
                compliance pipeline.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
            Why It Stands Out
          </p>

          <h2 className="mt-4 text-3xl font-bold">Solo, shipped, and live</h2>

          <p className="mt-5 max-w-4xl leading-8 text-white/70">
            Yoke isn&apos;t a side project sitting in a repo — it&apos;s a real product
            live on the App Store with a growing daily active user base. I own the
            full lifecycle: product, mobile engineering, database and backend
            design, subscriptions, and the ongoing App Store and Google Play
            release process.
          </p>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
              Features
            </p>

            <h2 className="mt-4 text-3xl font-bold">Core functionality</h2>

            <div className="mt-6 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-white/75">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
              Platform Flow
            </p>

            <h2 className="mt-4 text-3xl font-bold">How the system works</h2>

            <div className="mt-6 space-y-5 text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Users sign up and are provisioned a row-level-secured profile in
                  Supabase Postgres.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Daily devotional completions are recorded and evaluated by
                  PL/pgSQL functions that account for each user&apos;s timezone.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Streaks update in real time, rewarding consistency and
                  accountability.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  RevenueCat manages subscription state and paywalls across
                  platforms.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  New builds ship through EAS, with releases pushed through App
                  Store and Google Play review.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
