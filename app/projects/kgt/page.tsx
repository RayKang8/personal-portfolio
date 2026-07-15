import Link from "next/link";

const techStack = [
  "Shopify",
  "Liquid",
  "Shopify Flow",
  "JavaScript",
  "E-Commerce",
  "Product Catalog",
];

const highlights = [
  "Expanded the Shopify storefront from B2B-only to hybrid B2B/B2C as sole developer",
  "Built dual account flows, custom Liquid pricing logic, and automated Shopify Flow tagging",
  "Owned digital operations and product catalog; redesigned the platform for a new retail channel",
];

const features = [
  "Dual account flows separating wholesale (B2B) and retail (B2C) customer experiences",
  "Custom Liquid pricing logic showing the correct price tier per account type",
  "Automated customer tagging and segmentation through Shopify Flow",
  "Full ownership of the product catalog for a Canadian eyewear importer",
  "Complete storefront redesign to support a new direct-to-consumer retail channel",
  "Sole developer responsible for the platform's ongoing digital operations",
];

export default function KgtProjectPage() {
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
              KGT Eyewear
            </h1>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-100/60">
              Digital Operations & E-Commerce Manager, Toronto, ON, Sep 2022 to Present
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Canadian eyewear importer. I run their Shopify storefront as sole
              developer, redesigned from B2B-only wholesale into a hybrid
              B2B/B2C store.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://kgteyewear.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Visit Site
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-[2rem] border border-amber-100/20 bg-gradient-to-br from-stone-200/10 to-amber-100/5 p-4 backdrop-blur-xl">
            <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 p-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-100/60">
                B2B → Hybrid B2B/B2C
              </p>
              <h2 className="mt-4 text-3xl font-bold">KGT Eyewear</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                Shopify storefront redesign and full digital operations for a
                Canadian eyewear importer.
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
              What I Own
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Full digital operations for a Canadian importer
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              I own the storefront, product catalog, and digital operations end
              to end. Opening the B2B-only platform to retail buyers meant
              rethinking account flows, pricing, and checkout, without
              disrupting the existing wholesale business.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              Built dual account flows for correct pricing per customer type,
              custom Liquid pricing logic, and automated customer tagging via
              Shopify Flow.
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
                Sole developer: Shopify storefront, product catalog, digital
                operations, and the B2B-to-B2C platform redesign.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
            Why It Stands Out
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            E-commerce engineering tied directly to revenue
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-white/70">
            A production storefront for a real importer, not a demo. Every
            change I ship affects revenue directly, and I am the only
            developer on the platform.
          </p>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-200/80">
            Features
          </p>

          <h2 className="mt-4 text-3xl font-bold">Core functionality</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <p className="text-sm leading-7 text-white/75">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
