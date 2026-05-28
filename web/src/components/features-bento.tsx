export function FeaturesBento() {
  const features = [
    {
      title: "Contextual awareness",
      copy: "Our AI does not just transcribe; it understands the history of the account before the call even connects, allowing for immediate, relevant responses without the typical robotic delay.",
      colSpan: "col-span-1 md:col-span-2",
      visual: (
        <div className="absolute inset-0 right-0 top-0 overflow-hidden rounded-[inherit] mix-blend-overlay">
          <div className="absolute right-[-10%] top-[-20%] h-[140%] w-3/4 bg-[radial-gradient(ellipse_at_center,rgba(124,232,255,0.15),transparent_60%)] blur-2xl" />
          <svg className="absolute bottom-4 right-4 h-32 w-48 stroke-[rgba(124,232,255,0.2)]" fill="none" viewBox="0 0 200 120">
            <path strokeWidth="1.5" d="M0 60 Q 50 10 100 60 T 200 60" />
            <path strokeWidth="1" strokeDasharray="4 4" d="M0 80 Q 50 30 100 80 T 200 80" />
            <path strokeWidth="0.5" strokeDasharray="2 6" d="M0 100 Q 50 50 100 100 T 200 100" />
          </svg>
        </div>
      ),
    },
    {
      title: "Zero-latency voice",
      copy: "Built on an edge-network infrastructure, response times are practically indistinguishable from interacting with a human operator.",
      colSpan: "col-span-1",
      visual: (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] mix-blend-overlay">
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full border border-[rgba(243,181,111,0.2)] bg-[radial-gradient(circle_at_center,rgba(243,181,111,0.1),transparent_70%)]" />
          <div className="absolute -left-4 bottom-6 h-32 w-32 rounded-full border border-[rgba(243,181,111,0.15)]" />
        </div>
      ),
    },
    {
      title: "Smart handoffs",
      copy: "When a conversation needs human intervention, the system smoothly transitions the call along with a live summary of the dialogue so the agent is immediately up to speed.",
      colSpan: "col-span-1",
      visual: (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] mix-blend-overlay">
          <div className="absolute -right-12 -top-12 h-48 w-48 bg-[radial-gradient(circle_at_center,rgba(255,141,115,0.12),transparent_60%)] blur-2xl" />
        </div>
      ),
    },
    {
      title: "Granular emotion detection",
      copy: "The system reads sentiment through tone and pacing. If a customer sounds frustrated, the bot automatically softens its language or expedites routing.",
      colSpan: "col-span-1 md:col-span-2",
      visual: (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] mix-blend-overlay">
          <div className="absolute bottom-[-10%] right-[-10%] h-[120%] w-[120%] bg-[linear-gradient(45deg,transparent,rgba(124,232,255,0.08),transparent)]" />
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl md:mb-20">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--color-night)] sm:text-5xl lg:text-6xl">
            More than just automated routing.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[color:rgba(7,17,32,0.68)]">
            A reliable call experience is built on speed and empathy. We engineered the platform to minimize friction and elevate the quality of every conversation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2rem] border border-[color:rgba(7,17,32,0.06)] bg-[color:rgba(255,255,255,0.5)] p-8 shadow-[0_12px_40px_rgba(14,27,48,0.04)] sm:p-10 ${feature.colSpan}`}
            >
              {feature.visual}
              <div className="relative z-10 w-full max-w-lg transition-transform duration-500 hover:-translate-y-1">
                <div className="mb-6 h-12 w-12 rounded-2xl border border-[color:rgba(7,17,32,0.08)] bg-white/80 shadow-sm backdrop-blur-xl" />
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[color:var(--color-night)]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:rgba(7,17,32,0.66)] sm:text-base">
                  {feature.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
