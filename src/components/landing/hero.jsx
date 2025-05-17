"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 md:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-50 dark:to-purple-950/20 -z-10" />
      
      {/* Animated circles */}
      <div className="absolute -top-24 -left-24 size-96 rounded-full bg-purple-200/20 blur-3xl dark:bg-purple-900/20 -z-10" />
      <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-pink-200/20 blur-3xl dark:bg-pink-900/20 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Create Stunning Logos with
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"> AI Magic</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
              Transform your brand identity with our AI-powered logo generator. Create unique, professional logos in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center max-w-md mx-auto lg:mx-0">
              <Input placeholder="Enter your brand name" className="w-full" />
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
                Generate Logo
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="size-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <div className={`size-full bg-gradient-to-br ${i % 2 === 0 ? 'from-purple-400 to-pink-400' : 'from-pink-400 to-purple-400'}`} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Trusted by <span className="font-medium text-foreground">10,000+</span> brands</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto lg:mr-0 max-w-md w-full aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
            <div className="relative size-full rounded-2xl overflow-hidden border shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-48 rounded-full bg-white dark:bg-black/80 shadow-lg flex items-center justify-center">
                  <svg className="size-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" className="fill-purple-600" />
                    <path d="M2 17L12 22L22 17" className="stroke-pink-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" className="stroke-purple-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">L</div>
                  <div className="text-lg font-bold">LogoMint</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}