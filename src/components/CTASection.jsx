import React from 'react';
import { Apple, PlaySquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold sm:text-4xl">Ready to launch across app stores</h3>
            <p className="mt-3 text-white/70">Join early and lock in founder rewards. Play on web today — mobile builds coming soon.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-black shadow hover:scale-[1.01]">
                <Apple className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight">Download on the</div>
                  <div className="-mt-0.5 text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-black shadow hover:scale-[1.01]">
                <PlaySquare className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight">Get it on</div>
                  <div className="-mt-0.5 text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/10 to-cyan-500/10 p-6">
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                placeholder="Enter your email for beta access"
                className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
              <button type="submit" className="rounded-xl bg-fuchsia-600 px-6 py-3 font-semibold text-white hover:bg-fuchsia-500">
                Notify Me
              </button>
            </form>
            <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-white/60">
          © {new Date().getFullYear()} HyperArcade — All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default CTASection;
