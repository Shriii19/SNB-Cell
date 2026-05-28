import { HeroScene } from "@/components/hero-scene";
import { TrustStrip } from "@/components/trust-strip";
import { FeaturesBento } from "@/components/features-bento";
import { CtaFooter } from "@/components/cta-footer";

const heroTags = [
  "Context-rich call flows",
  "Soft cursor parallax",
  "Responsive premium layout",
];

const featureCards = [
  {
    title: "Voice-first clarity",
    copy: "A clean headline structure and strong contrast keep the story readable on every screen size.",
  },
  {
    title: "Memorable character system",
    copy: "The orbital concierge gives the site a face, making the experience feel warmer than a generic SaaS hero.",
  },
  {
    title: "Subtle motion polish",
    copy: "Depth, glow, and restrained movement add energy without turning the section into a gimmick.",
  },
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-hidden text-[var(--foreground)]">
      <section className="relative isolate min-h-screen px-6 pb-18 pt-6 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_top_left,rgba(124,232,255,0.3),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(243,181,111,0.26),transparent_24%),radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.28),transparent_44%)]" />
        <div className="pointer-events-none absolute left-[-8rem] top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,141,115,0.18),transparent_66%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10rem] right-[-4rem] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,232,255,0.2),transparent_62%)] blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10">
          <header className="flex items-center justify-between rounded-full border border-white/60 bg-white/72 px-5 py-3 shadow-[0_20px_80px_rgba(14,27,48,0.12)] backdrop-blur-xl">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--color-night)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-night)] text-[11px] text-white shadow-[0_10px_30px_rgba(7,17,32,0.22)]">
                SNB
              </span>
              Call
            </div>
            <div className="hidden rounded-full border border-[color:rgba(7,17,32,0.12)] bg-[color:rgba(255,255,255,0.82)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:rgba(7,17,32,0.72)] sm:block">
              Section 01 · Hero Concept
            </div>
          </header>

          <div className="grid flex-1 items-center gap-16 py-8 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.02fr_0.98fr] lg:py-10">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[color:rgba(7,17,32,0.08)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:rgba(7,17,32,0.62)] shadow-[0_18px_45px_rgba(14,27,48,0.08)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-aqua)] shadow-[0_0_0_6px_rgba(124,232,255,0.18)]" />
                Space-age call experience
              </div>

              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[color:var(--color-night)] sm:text-6xl lg:text-7xl">
                Launch conversations that feel warm, intelligent, and unmistakably human.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[color:rgba(7,17,32,0.72)] sm:text-lg">
                The first section sets the tone with a premium hero, cinematic atmosphere, and an orbital concierge character that brings personality to the interface without overwhelming the product story.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#hero-scene"
                  className="inline-flex h-13 items-center justify-center rounded-full bg-[color:var(--color-night)] px-7 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore the Hero
                </a>
                <a
                  href="#hero-notes"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-[color:rgba(7,17,32,0.12)] bg-white/76 px-7 text-sm font-semibold text-[color:var(--color-night)] shadow-[0_18px_40px_rgba(14,27,48,0.08)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View Design Notes
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:rgba(7,17,32,0.08)] bg-[color:rgba(255,255,255,0.66)] px-4 py-2 text-sm font-medium text-[color:rgba(7,17,32,0.68)] shadow-[0_10px_25px_rgba(14,27,48,0.06)] backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                id="hero-notes"
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {featureCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[1.6rem] border border-[color:rgba(7,17,32,0.08)] bg-[color:rgba(255,255,255,0.72)] p-5 shadow-[0_24px_60px_rgba(14,27,48,0.08)] backdrop-blur-xl"
                  >
                    <h2 className="font-display text-xl font-semibold tracking-[-0.04em] text-[color:var(--color-night)]">
                      {card.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[color:rgba(7,17,32,0.66)]">
                      {card.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div id="hero-scene" className="relative">
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
