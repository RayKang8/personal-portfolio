import Image from "next/image";
import Link from "next/link";

const techStack = [
  "React",
  "TypeScript",
  "Vite",
  "Bun",
  "Hono",
  "Gemini API",
  "TanStack AI",
  "WebXR",
  "WebGL",
];

const highlights = [
  "Senior software engineering capstone project that placed Top 5 in the university capstone competition",
  "Built a web-based 3D model platform for uploading, decomposing, and interacting with model components",
  "Integrated conversational AI using Gemini API via TanStack AI for natural-language interaction with models",
];

const features = [
  "Upload and manage 3D models through a browser-based interface",
  "Interact with models inside a real-time WebGL viewport",
  "Decompose models into components for more detailed inspection and manipulation",
  "Use a conversational AI assistant to query and interact with 3D model components",
  "Explore supported models in immersive XR / VR environments with WebXR",
  "Built with a modern full-stack architecture using React, TypeScript, Bun, and Hono",
];

export default function NimbusProjectPage() {
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
              Nimbus Labs
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Nimbus Labs is a senior software engineering capstone project developed
              over an 8-month team cycle. The platform enables real-time interaction
              with 3D models through AI-assisted querying and immersive XR
              visualization, combining modern web engineering with graphics and
              spatial computing workflows. The project placed Top 5 in the university
              capstone competition.
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
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <Image
                src="/projects/nimbus/group.png"
                alt="Nimbus Labs dashboard"
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
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold">What it is</h2>

            <p className="mt-5 leading-8 text-white/70">
              Nimbus Labs was developed as a senior software engineering capstone
              project focused on building a modern web platform for interacting with
              3D models. Users can upload models, view them in a live WebGL viewport,
              decompose them into components, and interact with them through both
              direct UI workflows and natural-language AI prompts.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              What makes the project especially interesting is how it combines
              frontend engineering, graphics workflows, AI integration, and XR support
              into one system. Instead of being just a viewer, Nimbus is built as
              a richer platform for interacting with 3D content on the web.
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
                Full-stack engineering across the web platform, 3D interaction workflows,
                AI integration, and immersive XR functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
            Why It Stands Out
          </p>

          <h2 className="mt-4 text-3xl font-bold">Where software engineering meets XR and AI</h2>

          <p className="mt-5 max-w-4xl leading-8 text-white/70">
            Nimbus Labs stands out because it is not just a standard CRUD web app.
            It works across real-time 3D rendering, conversational AI, and immersive XR.
            That makes it a much more technically layered project, requiring strong frontend
            implementation, thoughtful system design, and the ability to connect advanced technologies into one product.
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
                  Users upload or select a 3D model inside the platform.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Models are rendered inside a real-time WebGL viewport for direct interaction.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Components can be decomposed and manipulated for more detailed workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  A conversational AI interface allows users to query and interact with model data using natural language.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7">
                  Supported experiences can also extend into immersive VR exploration through WebXR.
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