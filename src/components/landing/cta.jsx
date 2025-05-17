"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export function Cta() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-12 shadow-lg">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5),transparent)]" />
          <div className="absolute size-96 -top-40 -right-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Create Your Logo?</h2>
              <p className="text-white/80 text-lg mb-6">
                Join thousands of businesses who trust LogoMint for their branding needs. Get started today and transform your brand identity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Start Designing Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-32 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="size-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}