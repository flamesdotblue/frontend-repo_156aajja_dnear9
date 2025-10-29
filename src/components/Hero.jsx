import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm font-medium tracking-wide text-white/90">New • Interactive 3D Experience</span>
        </div>
        <h1 className="mt-6 font-extrabold tracking-tight text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          <span className="block text-4xl sm:text-6xl md:text-7xl">Play. Collect. Dominate.</span>
          <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-3xl text-transparent sm:text-5xl md:text-6xl">
            The next hit arcade roguelite
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          Dash through neon worlds, master quick micro-sessions, and climb global leaderboards. Designed to be irresistibly fun — and built to scale across web and app stores.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#play"
            className="group inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-600/30 transition hover:translate-y-[-1px] hover:bg-fuchsia-500"
          >
            <Play className="h-5 w-5" />
            <span className="font-semibold">Play in Browser</span>
          </a>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20">
            <Rocket className="h-5 w-5" />
            <span className="font-semibold">Watch Trailer</span>
          </button>
        </div>

        <div className="mt-10 flex items-center gap-6 text-white/70">
          <span className="text-sm">No sign-up needed</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-sm">Optimized for mobile & desktop</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
