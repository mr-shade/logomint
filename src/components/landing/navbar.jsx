"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <svg className="size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" className="fill-purple-600" />
              <path d="M2 17L12 22L22 17" className="stroke-pink-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" className="stroke-purple-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xl font-bold">LogoMint</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">Log in</Button>
          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">Get Started</Button>
        </div>
      </div>
    </header>
  );
}