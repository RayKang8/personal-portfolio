import Image from "next/image";
import Link from "next/link";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "AI / LLM Integration",
];

const highlights = [
  "Built as a full-stack platform for managing and interacting with 3D/XR assets",
  "Combines modern frontend workflows, backend systems, and AI-assisted interactions",
  "Designed to make complex model management feel cleaner, faster, and more intuitive",
];

const features = [
  "Upload and manage 3D models through a modern web interface",
  "View model assets and related project data in a structured dashboard",
  "Support account-based workflows and authenticated user access",
  "AI-assisted interaction layer for smarter product experience",
  "Organized UI for handling models, uploads, and platform activity",
  "Built as a scalable product-style engineering project rather than a simple demo",
];

export default function NimbusProjectPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.10),transparent_24%)]" />
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
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Case Study
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
              Nimbus Labs
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A full-stack platform for managing 3D and XR assets through a
              modern web interface, combining scalable product architecture,
              immersive workflows, and AI-assisted interactions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://nimbus.collin.town"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/UWO-ECE-Software-Engineering/NIMBUS-Labs"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <Image
                src="/projects/nimbus/dashboard.png"
                alt="Nimbus Labs dashboard"
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
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold">What it is</h2>

            <p className="mt-5 leading-8 text-white/70">
              Nimbus Labs is a product-style platform designed around managing,
              organizing, and interacting with 3D model assets in a more modern
              and structured way. Instead of treating model handling as a clunky
              utility workflow, the platform aims to make it feel like a polished
              software product with a clean user experience and scalable backend.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              The project reflects the kind of engineering work I enjoy most:
              full-stack systems, practical product design, and building software
              that connects frontend usability with stronger backend architecture
              and intelligent features.
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

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
                Role
              </p>
              <p className="mt-4 leading-8 text-white/70">
                Full-stack development, platform UI implementation, product
                architecture, and feature work across model workflows and system design.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
            Why It Stands Out
          </p>

          <h2 className="mt-4 text-3xl font-bold">Built like a real software product</h2>

          <p className="mt-5 max-w-4xl leading-8 text-white/70">
            Nimbus Labs goes beyond a basic class demo by focusing on product
            structure, scalable engineering, and a more advanced workflow around
            XR and 3D assets. It combines modern frontend development, backend
            systems, data handling, and AI-assisted ideas in a way that feels
            closer to a real platform than a one-off prototype.
          </p>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
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
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
              Platform Flow
            </p>

            <h2 className="mt-4 text-3xl font-bold">How the system works</h2>

            <div className="mt-6 space-y-5 text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Users access the platform through authenticated account-based workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Uploaded models and related project assets are organized through a structured dashboard.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Model details, asset management, and platform actions are surfaced through a modern UI.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  AI-assisted functionality helps make the product feel more intelligent and interactive.
                </p>
              </div>
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
            <ScreenshotCard
              src="/projects/nimbus/dashboard.png"
              alt="Nimbus Labs dashboard"
              title="Dashboard"
            />
            <ScreenshotCard
              src="/projects/nimbus/account.png"
              alt="Nimbus Labs account page"
              title="Account"
            />
            <ScreenshotCard
              src="/projects/nimbus/upload.png"
              alt="Nimbus Labs upload flow"
              title="Upload Flow"
            />
            <ScreenshotCard
              src="/projects/nimbus/model.png"
              alt="Nimbus Labs model page"
              title="Model View"
            />
            <ScreenshotCard
              src="/projects/nimbus/newmodel.png"
              alt="Nimbus Labs new model workflow"
              title="New Model"
            />
            <ScreenshotCard
              src="/projects/nimbus/otp.png"
              alt="Nimbus Labs authentication screen"
              title="Authentication"
            />
            <ScreenshotCard
              src="/projects/nimbus/llm.png"
              alt="Nimbus Labs AI interaction interface"
              title="AI / LLM Interface"
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