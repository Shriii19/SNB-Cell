import { HeroScene } from "@/components/hero-scene";
import { TrustStrip } from "@/components/trust-strip";
import { FeaturesBento } from "@/components/features-bento";
import { CtaFooter } from "@/components/cta-footer";

const heroTags = [
  "Real-time latency",
  "Edge network deployment",
  "High availability",
];

const featureCards = [
  {
    title: "Enterprise-grade infrastructure",
    copy: "Built on a resilient edge network to ensure zero-latency interactions and 99.99% uptime globally.",
  },
  {
    title: "Precision engineering",
    copy: "Clean architecture and strictly typed APIs provide a robust foundation for scaling your applications.",
  },
  {
    title: "Developer first",
    copy: "Comprehensive documentation, deterministic behavior, and powerful debugging tools at your fingertips.",
  },
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-hidden text-[var(--foreground)] bg-[white]">
      <section className="relative isolate min-h-screen px-6 pb-18 pt-6 sm:px-8 lg:px-12">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 max-w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10">
          <div className="grid flex-1 items-center gap-16 py-8 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.02fr_0.98fr] lg:py-10">
            <div className="max-w-2xl relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                System Operational
              </div>

              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                The infrastructure for modern applications
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                Engineer your next breakthrough with our high-performance, edge-optimized toolkit. Designed strictly for developers who demand control, speed, and precision.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#hero-scene"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
                >
                  Start Building
                </a>
                <a
                  href="#hero-notes"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
                >
                  Read Documentation
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-50 border border-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                id="hero-notes"
                className="mt-12 grid gap-6 sm:grid-cols-3"
              >
                {featureCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 h-8 w-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-sm bg-blue-500" />
                    </div>
                    <h2 className="font-display text-base font-semibold tracking-tight text-gray-900">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {card.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div id="hero-scene" className="relative lg:h-[800px] flex items-center justify-center">
              <HeroScene />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <FeaturesBento />
      <CtaFooter />
    </main>
  );
}
