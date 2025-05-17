import React from 'react';
import { Navbar, Hero, Features, Testimonials, Pricing, Cta, Footer } from '@/components/landing';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}
