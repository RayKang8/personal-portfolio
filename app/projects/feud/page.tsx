import Image from "next/image";
import Link from "next/link";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Authentication",
  "Vercel",
];

const highlights = [
  "Built as a live event game platform for the KCF end-of-year banquet",
  "Lets users create custom Family Feud boards instead of relying on slides or manual hosting",
  "Combines game creation, authentication, dashboard management, and live gameplay in one product",
];

const features = [
  "Create custom games with multiple questions and answers",
  "Reveal answers and point values during live gameplay",
  "User authentication with Supabase",
  "Personal dashboard for managing saved games",
  "Simple event-friendly interface for large group hosting",
  "Reusable game boards for future events or activities",
];

export default function FeudProjectPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.10),transparent_24%)]" />
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

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-orange-200/80">
              Case Study
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
              Family Feud Labs
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A full-stack Family Feud style game builder and live player designed
              for events, group activities, and interactive hosting. Built to make
              creating and running custom game boards fast, simple, and visually polished.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://family-feud-labs.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/RayKang8/family-feud.git"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src="/projects/feud/gamescreen.png"
                alt="Family Feud Labs live gameplay screen"
                fill
                className="object-contain p-6"
                priority
              />
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
            <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold">What it is</h2>

            <p className="mt-5 leading-8 text-white/70">
              Family Feud Labs is a web-based game builder and player that lets
              users create custom Family Feud style question boards and run them
              in a live game format. It was originally built for the KCF
              end-of-year banquet as an interactive group activity, but it can
              also be used for clubs, events, teams, or anyone who wants to host
              their own custom game.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              The main goal was to replace manual slides and clunky event prep
              with a cleaner platform where organizers can quickly build questions,
              manage games from a dashboard, and run the experience live on screen.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
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
              <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
                Role
              </p>
              <p className="mt-4 leading-8 text-white/70">
                Full-stack development, UI implementation, game flow design,
                database integration, authentication, and deployment.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
            Why I Built It
          </p>

          <h2 className="mt-4 text-3xl font-bold">Built for a real event use case</h2>

          <p className="mt-5 max-w-4xl leading-8 text-white/70">
            I built this project for the KCF end-of-year banquet where we wanted
            to host a Family Feud style game for a large group. Instead of
            manually preparing slides or revealing answers one by one, this app
            allowed organizers to build the board quickly, control answer reveals
            live during the event, and reuse games later. It also gave me the
            chance to build and deploy a real full-stack application using modern tools.
          </p>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
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
            <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold">From login to live gameplay</h2>

            <div className="mt-6 space-y-5 text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Users create an account or log in through Supabase authentication.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  From the dashboard, users can create and manage their own games.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Each game contains custom questions with answers and point values.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  During gameplay, answers are revealed one by one on a board optimized
                  for live display on screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
              Gallery
            </p>
            <h2 className="mt-4 text-3xl font-bold">Project screenshots</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ScreenshotCard
              src="/projects/feud/login.png"
              alt="Family Feud Labs login page"
              title="Login"
            />
            <ScreenshotCard
              src="/projects/feud/dashboard.png"
              alt="Family Feud Labs dashboard"
              title="Dashboard"
            />
            <ScreenshotCard
              src="/projects/feud/gamebuilder.png"
              alt="Family Feud Labs game builder"
              title="Game Builder"
            />
            <ScreenshotCard
              src="/projects/feud/examplegame.png"
              alt="Family Feud Labs example game"
              title="Example Game"
            />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-200/80">
            Future Improvements
          </p>

          <h2 className="mt-4 text-3xl font-bold">What I would add next</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Team score tracking",
              "More polished answer reveal animations",
              "Improved mobile layout",
              "Public sharing for game boards",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <p className="text-sm leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ScreenshotCard({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10">
      <Image src={src} alt={alt} fill className="object-contain p-4" />
      </div>
      <p className="mt-4 text-sm font-medium text-white/80">{title}</p>
    </div>
  );
}