"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useState } from "react";

const signalBadges = ["Voice AI", "Warm handoff", "Orbit-ready UI"];

export function HeroScene() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const nextY = (event.clientY - bounds.top) / bounds.height - 0.5;

    setPointer({ x: nextX, y: nextY });
  };

  const resetPointer = () => setPointer({ x: 0, y: 0 });

  const layerStyle = (
    xStrength: number,
    yStrength = xStrength,
  ): CSSProperties => ({
    transform: `translate3d(${pointer.x * xStrength}px, ${pointer.y * yStrength}px, 0)`,
  });

  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      <div className="absolute -inset-6 rounded-[2.75rem] bg-[radial-gradient(circle_at_center,rgba(124,232,255,0.2),transparent_58%)] blur-3xl" />

      <div
        className="orbital-card relative isolate aspect-[11/12] overflow-hidden rounded-[2.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(8,17,30,0.98),rgba(8,17,30,0.94)_40%,rgba(17,37,67,0.96))] p-5 shadow-[0_45px_120px_rgba(5,10,20,0.42)] sm:p-7"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        role="img"
        aria-label="Interactive illustration of a floating call-assistant mascot in space"
      >
        <div className="starfield absolute inset-0 opacity-65" />
        <div
          className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,232,255,0.34),transparent_62%)] blur-3xl"
          style={layerStyle(-22)}
        />
        <div
          className="pointer-events-none absolute -left-14 bottom-6 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(243,181,111,0.18),transparent_64%)] blur-3xl"
          style={layerStyle(-18)}
        />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div className="glass-panel rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
              Interactive mascot
            </div>
            <div className="glass-panel rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Cursor reactive
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center pb-10 pt-6">
            <div
              className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(19,43,78,0.85),rgba(8,17,30,0)_68%)]"
              style={layerStyle(-12)}
            />
            <div
              className="animate-pulse-soft absolute left-[14%] top-[18%] h-4 w-4 rounded-full bg-[color:var(--color-aqua)] shadow-[0_0_0_10px_rgba(124,232,255,0.12)]"
              style={layerStyle(-8)}
            />
            <div
              className="animate-twinkle absolute right-[18%] top-[24%] h-3 w-3 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.08)]"
              style={layerStyle(-10)}
            />
            <div
              className="animate-float-delayed absolute left-[12%] bottom-[24%] h-18 w-18 rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[0_18px_35px_rgba(0,0,0,0.2)] backdrop-blur-md"
              style={layerStyle(-16)}
            >
              <div className="absolute inset-3 rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle,rgba(124,232,255,0.22),transparent_68%)]" />
            </div>

            <div
              className="absolute right-[6%] top-[26%] flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(8,17,30,0.56)] px-4 py-3 text-sm font-medium text-white/74 backdrop-blur-xl"
              style={layerStyle(-14)}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-aqua)] shadow-[0_0_0_8px_rgba(124,232,255,0.14)]" />
              Live greeting ready
            </div>

            <div className="relative h-[66%] w-[72%] max-w-[360px]" style={layerStyle(20, 16)}>
              <div className="animate-float-gentle absolute inset-x-[14%] top-[12%] h-[30%] rounded-full bg-[radial-gradient(circle,rgba(124,232,255,0.18),transparent_68%)] blur-2xl" />
              <div className="absolute left-[20%] top-[18%] h-[34%] w-[34%] rounded-full border border-white/10 bg-[linear-gradient(145deg,rgba(18,41,74,0.96),rgba(8,17,30,0.88))] shadow-[0_24px_60px_rgba(4,12,22,0.5)]" />
              <div className="absolute right-[14%] top-[16%] h-[16%] w-[16%] rounded-full border border-[rgba(124,232,255,0.5)] opacity-80" />
              <div className="absolute right-[9%] top-[11%] h-[26%] w-[26%] rounded-full border border-[rgba(124,232,255,0.22)]" />

              <div className="animate-float-gentle absolute left-1/2 top-[16%] h-[38%] w-[38%] -translate-x-1/2 rounded-full border border-white/12 bg-[linear-gradient(180deg,#fffaf1,#d2deec_62%,#9fb1c7)] shadow-[0_28px_60px_rgba(4,12,22,0.42)]">
                <div className="absolute inset-[12%] rounded-full border border-white/10 bg-[linear-gradient(180deg,#f5fbff,#b6d6ea_40%,#3d5b76_100%)] shadow-[inset_0_-18px_30px_rgba(12,32,51,0.24)]">
                  <div className="absolute inset-x-[18%] top-[24%] h-[38%] rounded-[999px] bg-[linear-gradient(180deg,rgba(5,13,24,0.96),rgba(40,84,122,0.84))] shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)]">
                    <div className="absolute inset-x-[8%] top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(124,232,255,0.66),transparent)]" />
                    <div className="animate-scan absolute inset-x-[12%] top-0 h-[24%] rounded-full bg-[linear-gradient(180deg,rgba(124,232,255,0.5),transparent)] blur-sm" />
                  </div>
                </div>
                <div className="absolute inset-x-[24%] bottom-[16%] h-3 rounded-full bg-[rgba(124,232,255,0.24)] blur-sm" />
              </div>

              <div className="animate-float-gentle absolute left-1/2 top-[52%] h-[24%] w-[28%] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#f1f7ff,#cddbf0_52%,#8fa6c0)] shadow-[0_24px_50px_rgba(4,12,22,0.28)]">
                <div className="absolute inset-x-[18%] top-[18%] h-[32%] rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(124,232,255,0.22))]" />
                <div className="absolute inset-x-[24%] top-[58%] h-[18%] rounded-full bg-[rgba(7,17,32,0.14)]" />
              </div>

              <div className="absolute left-[18%] top-[56%] h-[10%] w-[20%] -rotate-[28deg] rounded-full border border-white/10 bg-[linear-gradient(180deg,#e7eff9,#9eb2ca)] shadow-[0_18px_35px_rgba(4,12,22,0.18)]" />
              <div className="absolute right-[18%] top-[56%] h-[10%] w-[20%] rotate-[28deg] rounded-full border border-white/10 bg-[linear-gradient(180deg,#e7eff9,#9eb2ca)] shadow-[0_18px_35px_rgba(4,12,22,0.18)]" />
              <div className="absolute left-[34%] top-[72%] h-[16%] w-[10%] rounded-full border border-white/10 bg-[linear-gradient(180deg,#dbe6f3,#8ea4bd)] shadow-[0_16px_28px_rgba(4,12,22,0.18)]" />
              <div className="absolute right-[34%] top-[72%] h-[16%] w-[10%] rounded-full border border-white/10 bg-[linear-gradient(180deg,#dbe6f3,#8ea4bd)] shadow-[0_16px_28px_rgba(4,12,22,0.18)]" />

              <div className="animate-float-delayed absolute bottom-[18%] left-[4%] rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(8,17,30,0.54)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl">
                Friendly handoff
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="glass-panel shine relative overflow-hidden rounded-[1.8rem] border border-white/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
                    Orbital concierge
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Calm visuals, clear calls, soft motion.
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/68">
                  Ready
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:max-w-[12rem] sm:justify-end">
              {signalBadges.map((badge) => (
                <span
                  key={badge}
                  className="glass-panel rounded-full border border-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/66"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}