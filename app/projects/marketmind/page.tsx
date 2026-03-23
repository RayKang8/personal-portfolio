import Image from "next/image";
import Link from "next/link";

const techStack = [
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Python",
  "FastAPI",
  "AI APIs",
];

const highlights = [
  "Built a full-stack financial analysis platform combining AI insights with market data",
  "Engineered a custom backend architecture using Express, PostgreSQL, and Prisma",
  "Integrated a conversational AI interface for natural-language stock analysis and portfolio insights",
];

const features = [
  "Search and analyze stocks using AI-generated insights",
  "Create and manage personalized investment watchlists",
  "Track portfolio performance and financial metrics",
  "Ask natural-language questions about stocks and market trends",
  "Store AI-generated financial insights for later reference",
  "Built with a custom backend architecture designed for scalability and extensibility",
];

export default function MarketMindProjectPage() {
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
              MarketMind
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              An AI-powered investment intelligence platform designed to help
              users analyze stocks, track portfolios, and generate insights
              through natural language interaction. MarketMind combines
              financial data with modern backend architecture and AI services
              to create a powerful research tool for investors.
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
                src="/projects/marketmind/dashboard.png"
                alt="MarketMind dashboard"
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
            <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
              Why I Built It
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Learning backend engineering through a real system
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              MarketMind started as a project to explore how AI can enhance
              financial research. I wanted to build a platform where users could
              analyze stocks and market trends using natural language instead of
              traditional financial dashboards.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              Instead of relying on backend platforms or managed services, I
              built the backend architecture from scratch using Node.js,
              Express, PostgreSQL, and Prisma. This allowed me to gain deeper
              experience designing APIs, authentication systems, database
              schemas, and integrating AI services into a full-stack
              application.
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
                Designed and implemented the full-stack architecture including
                frontend dashboards, backend APIs, database design, and AI
                service integration.
              </p>
            </div>
          </div>
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
                  Users create an account and authenticate using JWT-based
                  authentication.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  The frontend communicates with a custom Express API handling
                  portfolios, watchlists, and stock queries.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Financial data and context are sent to an AI service that
                  generates structured insights.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Results are returned to the frontend and displayed in a
                  conversational analysis interface.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Users can save insights, track stocks, and monitor portfolio
                  performance over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
              Gallery
            </p>
            <h2 className="mt-4 text-3xl font-bold">Project screenshots</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ScreenshotCard
              src="/projects/marketmind/dashboard.png"
              alt="MarketMind dashboard"
              title="Dashboard"
            />
            <ScreenshotCard
              src="/projects/marketmind/chat.png"
              alt="MarketMind AI chat"
              title="AI Analysis Interface"
            />
            <ScreenshotCard
              src="/projects/marketmind/watchlist.png"
              alt="MarketMind watchlist"
              title="Watchlists"
            />
            <ScreenshotCard
              src="/projects/marketmind/portfolio.png"
              alt="MarketMind portfolio"
              title="Portfolio Analytics"
            />
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
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
        <Image src={src} alt={alt} fill className="object-contain p-4" />
      </div>
      <p className="mt-4 text-sm font-medium text-white/80">{title}</p>
    </div>
  );
}