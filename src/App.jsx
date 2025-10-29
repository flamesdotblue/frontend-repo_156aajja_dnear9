import React from 'react';
import Hero from './components/Hero';
import GameplayLoop from './components/GameplayLoop';
import MonetizationShowcase from './components/MonetizationShowcase';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <GameplayLoop />
      <MonetizationShowcase />
      <CTASection />
    </div>
  );
}

export default App;
