import React from 'react';
import { Rocket, Trophy, Shield } from 'lucide-react';

const steps = [
  {
    icon: Rocket,
    title: 'Jump In Fast',
    desc: '60-second runs with instant restarts. Perfect for on-the-go sessions that stack into hours of fun.'
  },
  {
    icon: Trophy,
    title: 'Climb Ranks',
    desc: 'Daily, weekly, and seasonal leaderboards with dynamic challenges and community events.'
  },
  {
    icon: Shield,
    title: 'Unlock Power',
    desc: 'Collect heroes and perks that meaningfully upgrade your build without breaking the balance.'
  }
];

const GameplayLoop = () => {
  return (
    <section id="play" className="relative bg-gradient-to-b from-black to-gray-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Core Gameplay Loop</h2>
          <p className="mt-3 text-white/70">Easy to learn, hard to put down — tuned for viral shareability.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/10 to-cyan-500/10 p-6">
            <div className="rounded-xl bg-black/60 p-4 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Quick Match</span>
                <span className="text-xs text-white/50">00:56</span>
              </div>
              <div className="mt-4 h-40 w-full rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20" />
              <button className="mt-4 w-full rounded-lg bg-fuchsia-600 py-3 font-semibold text-white hover:bg-fuchsia-500">Start Run</button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Snackable sessions, shareable wins</h3>
            <p className="mt-3 text-white/70">
              Each run generates highlight-worthy moments that are easy to clip and share. Social-first design encourages friendly competition and drives organic growth.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
              <li>One-tap controls and generous aim assist</li>
              <li>Session rewards that feel great every time</li>
              <li>Seasonal metas to keep the game fresh</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplayLoop;
