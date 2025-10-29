import React from 'react';
import { Coins, Crown, Star, Zap } from 'lucide-react';

const items = [
  {
    icon: Coins,
    title: 'Cosmetics-Only Store',
    desc: 'Skins, emotes, trails. Zero pay-to-win. Rotating features and limited editions boost engagement.'
  },
  {
    icon: Crown,
    title: 'Season Pass',
    desc: 'Fair, rewarding, and progression-rich with free and premium tracks. Weekly quests keep retention high.'
  },
  {
    icon: Zap,
    title: 'Boosters',
    desc: 'Optional time-savers for busy players. Balanced to preserve skillful play while respecting time.'
  },
  {
    icon: Star,
    title: 'Ad-Free Upgrade',
    desc: 'Try before you buy with tasteful interstitials. One-time purchase removes ads and adds bonuses.'
  }
];

const MonetizationShowcase = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Monetization Built-In</h2>
          <p className="mt-3 text-white/70">Ethical, player-first systems tuned for scale across app stores.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 to-cyan-500/20 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Designed for virality and LTV</h3>
              <p className="mt-3 text-white/70">
                Core loops, FTUE, and rewards are crafted to maximize day-1 fun and long-term depth. Live-ops ready with events, cosmetics drops, and seasonal resets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-black/50 p-4 text-center">
                <div className="text-3xl font-bold">D1 45%</div>
                <div className="mt-1 text-xs text-white/60">Retention target</div>
              </div>
              <div className="rounded-xl bg-black/50 p-4 text-center">
                <div className="text-3xl font-bold">$1.80</div>
                <div className="mt-1 text-xs text-white/60">ARPDAU target</div>
              </div>
              <div className="rounded-xl bg-black/50 p-4 text-center">
                <div className="text-3xl font-bold"><span className="text-green-400">↑</span> Viral</div>
                <div className="mt-1 text-xs text-white/60">Share rate</div>
              </div>
              <div className="rounded-xl bg-black/50 p-4 text-center">
                <div className="text-3xl font-bold">Live</div>
                <div className="mt-1 text-xs text-white/60">A/B systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetizationShowcase;
