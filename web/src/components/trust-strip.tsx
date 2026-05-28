export function TrustStrip() {
  const metrics = [
    { label: "Active Connections", value: "10M+" },
    { label: "Uptime SLA", value: "99.99%" },
    { label: "Setup Time", value: "< 2 mins" },
    { label: "Customer Satisfaction", value: "4.9/5" },
  ];

  return (
    <section className="relative w-full border-t border-[color:rgba(7,17,32,0.08)] bg-[color:rgba(255,255,255,0.4)] py-16 backdrop-blur-2xl sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--color-night)] sm:text-4xl">
              Trusted by teams building the next generation of voice.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:rgba(7,17,32,0.68)]">
              Whether you are scaling a startup or operating an enterprise call center, our orbital infrastructure gives you the clarity and reliability you need to make human connections.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-2 rounded-2xl border border-[color:rgba(7,17,32,0.06)] bg-white/60 p-6 shadow-[0_8px_30px_rgba(14,27,48,0.04)]"
              >
                <div className="font-display text-4xl font-bold tracking-tight text-[color:var(--color-night)] sm:text-5xl">
                  {metric.value}
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-[color:rgba(7,17,32,0.52)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
