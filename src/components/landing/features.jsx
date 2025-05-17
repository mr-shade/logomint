"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Features() {
  return (
    <section id="features" className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Logo Creation</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with professional design principles to create logos that stand out.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 relative">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered Design Process</h3>
                <p className="text-muted-foreground mb-6">
                  Our advanced AI analyzes thousands of professional logos to understand what makes a great design, then applies these principles to create your unique brand identity.
                </p>
                <ul className="space-y-3">
                  {["Intelligent color selection", "Typography matching", "Industry-specific designs", "Unlimited variations"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="size-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-xs">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="aspect-square rounded-lg bg-white dark:bg-black/80 shadow p-2 flex items-center justify-center">
                        <div className={`size-12 rounded-full bg-gradient-to-br ${i % 2 === 0 ? 'from-purple-400 to-pink-400' : 'from-pink-400 to-purple-400'} flex items-center justify-center text-white font-bold`}>
                          L
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
    title: 'AI Logo Generator',
    description: 'Enter your brand name and let our AI create unique logo designs tailored to your industry and style preferences.'
  },
  {
    icon: <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    title: 'Smart Color Palette',
    description: 'Our AI generates perfect color combinations that match your brand personality and industry standards.'
  },
  {
    icon: <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: 'Multiple Export Formats',
    description: 'Download your logo in multiple formats including PNG, SVG, and PDF for all your branding needs.'
  },
  {
    icon: <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    title: 'Unlimited Revisions',
    description: 'Not satisfied with the results? Generate as many variations as you need until you find the perfect logo.'
  },
  {
    icon: <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Instant Generation',
    description: 'Get professional logo designs in seconds, not days. Save time and money on your branding journey.'
  },
  {
    icon: <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: 'Commercial License',
    description: 'All logos come with a full commercial license, giving you complete ownership of your brand identity.'
  }
];