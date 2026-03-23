import Image from "next/image";
import Link from "next/link";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "FastAPI",
  "Python",
  "JWT Authentication",
];

const highlights = [
  "Built an AI-powered financial intelligence platform for stock analysis and investment research",
  "Implemented a conversational AI assistant for asking natural language questions about markets",
  "Designed portfolio and watchlist systems to help users track and analyze investments",
];

const features = [
  "AI-powered stock analysis and explanations of market movements",
  "Natural language research assistant for financial questions",
  "Watchlist system for tracking stocks and opportunities",
  "Portfolio analysis tools for evaluating exposure and risk",
  "Automated market scanning to surface interesting stocks",
  "Full-stack architecture connecting frontend, backend APIs, and AI services",
];

export default function MarketMindPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_24%)]" />

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
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Case Study
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
              MarketMind
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              MarketMind is an AI-powered investment intelligence platform
              designed to help retail investors understand market movements,
              analyze companies, and discover investment opportunities.
              The system combines financial data analysis, portfolio
              intelligence tools, and a conversational AI research assistant
              to make market insights easier to access.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="https://marketmind-ashy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/RayKang8/marketmind"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>

            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">

              <Image
                src="/projects/marketmind/analysis.png"
                alt="MarketMind analysis dashboard"
                fill
                className="object-contain p-2"
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

            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold">What it is</h2>

            <p className="mt-5 leading-8 text-white/70">
              MarketMind is designed to help investors understand the stock
              market beyond simple price charts. Instead of focusing purely
              on predictions, the platform emphasizes explanation and analysis —
              helping users understand why stocks move and what risks or
              opportunities exist.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              The long-term vision for MarketMind is to build a
              “ChatGPT for investment research”, where users can explore
              financial markets, analyze companies, and evaluate portfolio
              exposure through natural-language conversations.
            </p>

          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
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

          </div>

        </section>

        <section className="mt-16">

          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
              Gallery
            </p>

            <h2 className="mt-4 text-3xl font-bold">Project screenshots</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            <ScreenshotCard src="/projects/marketmind/login.png" title="Login Page" />
            <ScreenshotCard src="/projects/marketmind/analysis.png" title="AI Analysis" />
            <ScreenshotCard src="/projects/marketmind/watchlist.png" title="Watchlist System" />
            <ScreenshotCard src="/projects/marketmind/nvda.png" title="Stock Research" />
            <ScreenshotCard src="/projects/marketmind/nontech.png" title="Market Insights" />

          </div>

        </section>

      </div>

    </main>
  );
}

function ScreenshotCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
        <Image src={src} alt={title} fill className="object-contain p-4" />
      </div>
      <p className="mt-4 text-sm font-medium text-white/80">{title}</p>
    </div>
  );
}