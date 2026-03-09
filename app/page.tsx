"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Nimbus Labs",
    description:
      "AR/VR model management platform with immersive viewing workflows, modern frontend architecture, and AI-assisted interactions.",
    stack: ["Next.js", "TypeScript", "Supabase", "Prisma"],
    accent: "from-cyan-400/20 to-blue-500/20",
  },
  {
    title: "Family Feud Web App",
    description:
      "Interactive game platform with custom boards, real-time gameplay feel, and a playful experience designed for live events.",
    stack: ["Next.js", "React", "Supabase", "Tailwind"],
    accent: "from-orange-400/20 to-red-500/20",
  },
  {
    title: "Spotify Recommender",
    description:
      "Machine learning project focused on playlist discovery using similarity-based recommendations and data-driven personalization.",
    stack: ["Python", "KNN", "Pandas", "Scikit-learn"],
    accent: "from-emerald-400/20 to-lime-500/20",
  },
];

const highlights = [
  { label: "Projects Built", value: "10+" },
  { label: "Tech Stack", value: "Full-Stack" },
  { label: "Focus", value: "UI + Systems" },
  { label: "Based In", value: "Canada" },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "C++",
  "Supabase",
  "Tailwind CSS",
  "AWS",
  "UI/UX",
  "Machine Learning",
  "GitHub",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white selection:bg-cyan-300/30 selection:text-white">
      <BackgroundEffects />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="sticky top-4 z-30"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">
                Ray Kang
              </p>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#resume" className="transition hover:text-white">
                Resume
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>

            <Link
              href="#contact"
              className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-[1.03]"
            >
              Let’s Talk
            </Link>
          </div>
        </motion.header>

        <section className="relative flex flex-1 items-center py-16 lg:py-24">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.12)]"
              >
                <motion.span
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-2 w-2 rounded-full bg-cyan-300"
                />
                Software Engineering Student • Builder • Creative Developer
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
              >
                I build
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  polished digital experiences
                </span>
                that people remember.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
              >
                I’m Ray, a software engineering student creating full-stack apps,
                interactive web experiences, and technical projects that blend clean
                engineering with standout design.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(255,255,255,0.18)]"
                >
                  View My Work
                  <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 hover:shadow-[0_12px_35px_rgba(255,255,255,0.08)]"
                >
                  See Resume
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.18)]"
                  >
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="mt-1 text-sm text-white/60">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 0.8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-fuchsia-500/20 blur-3xl" />
                <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%)] opacity-70 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                      portfolio.tsx
                    </span>
                  </div>

                  <div className="grid gap-4">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                        Current Focus
                      </p>
                      <h2 className="mt-3 text-2xl font-bold">Full-stack products with strong UI</h2>
                      <p className="mt-3 text-sm leading-7 text-white/65">
                        Building projects that feel modern, fast, and thoughtfully designed —
                        from frontend polish to backend structure.
                      </p>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <GlassCard
                        title="Frontend"
                        text="Responsive interfaces, animations, and polished layouts that feel premium."
                      />
                      <GlassCard
                        title="Backend"
                        text="Scalable app logic, auth, databases, APIs, and cloud deployment workflows."
                      />
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-semibold text-white/90">Stack I use</p>
                        <p className="text-xs text-white/45">Always learning</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.45 + index * 0.03 }}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-10 lg:py-16"
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20">
                <Image
                  src="/me.JPG"
                  alt="Photo of Ray Kang"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">About Me</p>
                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Developer, builder, and creative problem solver.</h2>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Who I Am</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Building with both technical depth and creative instinct.
              </h2>
              <p className="mt-6 leading-8">
                I’m a software engineering student who enjoys building experiences that go
                beyond just working — I want them to feel sharp, intentional, and memorable.
                My work spans full-stack web apps, machine learning projects, interactive
                tools, and club and event experiences where design matters just as much as code.
              </p>
              <p className="mt-5 leading-8">
                I like combining clean engineering, modern UI, and ambitious ideas to create
                work that feels polished both technically and visually.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-10 lg:py-16"
        >
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Featured Projects</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected work</h2>
            </div>
            <a href="#contact" className="text-sm text-white/60 transition hover:text-white">
              Let’s build something →
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-150 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%)]" />
                <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:scale-125" />
                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/55">
                    <span>Case Study</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="resume"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-10 lg:py-16"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-8 backdrop-blur-xl lg:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.22)]">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Resume</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Want the full picture?</h2>
                <p className="mt-4 max-w-2xl leading-8 text-white/70">
                  Explore my experience, technical projects, leadership roles, and the work
                  I’ve done across software, design, and student initiatives.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="/resume.pdf"
                  className="rounded-2xl bg-white px-6 py-4 text-center text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(255,255,255,0.18)]"
                >
                  View Resume
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-10 lg:py-16"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Contact</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let’s connect.</h2>
              <p className="mt-4 max-w-xl leading-8 text-white/70">
                Whether it’s for internships, collaborations, freelance work, or just a cool
                conversation about building things, I’d love to hear from you.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              <div className="space-y-5 text-sm text-white/75">
                <ContactRow label="Email" value="raykang2004@gmail.com" href="mailto:raykang2004@gmail.com" />
                <ContactRow label="GitHub" value="github.com/RayKang8" href="https://github.com/RayKang8" />
                <ContactRow label="LinkedIn" value="linkedin.com/in/ray-kang-aa8b38214" href="https://www.linkedin.com/in/ray-kang-aa8b38214/" />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

function GlassCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-7 text-white/65">{text}</p>
    </motion.div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition duration-150 hover:-translate-y-0.5 hover:bg-black/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.24)]">
      <p className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
      <p className="mt-2 text-base text-white">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return content;
}

function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_24%)]" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 14, 0], y: [0, 24, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(5,8,22,0.55)_100%)]" />
    </>
  );
}
