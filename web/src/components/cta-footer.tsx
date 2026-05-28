export function CtaFooter() {
  return (
    <footer className="relative isolate mt-20 overflow-hidden bg-[color:var(--color-night-soft)] pt-24 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,232,255,0.08),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(124,232,255,0.3)] to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-aqua)] shadow-[0_0_0_4px_rgba(124,232,255,0.15)]" />
            Ready for liftoff
          </div>
          
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start building your orbital concierge today.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[color:rgba(255,255,255,0.66)]">
            Deploy an intelligent, context-aware voice assistant in minutes. No complex routing trees, no robotic delays—just natural, flowing conversations.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[color:var(--color-night)] transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
            >
              Get Started for Free
            </a>
            <a
              href="#"
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[color:rgba(255,255,255,0.15)] bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:w-auto"
            >
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 py-10 sm:flex-row sm:py-12">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] text-[color:var(--color-night)]">
              SNB
            </span>
            Call
          </div>
          <p className="text-sm font-medium text-[color:rgba(255,255,255,0.4)]">
            © {new Date().getFullYear()} SNB Call Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-[color:rgba(255,255,255,0.4)]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
