"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thousands of businesses trust LogoMint to create their brand identity. Here's what they have to say.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`size-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-muted'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    text: "LogoMint helped us create a professional logo in minutes. The AI understood exactly what we needed for our tech startup.",
    name: "Sarah Johnson",
    company: "TechFlow Inc.",
    rating: 5
  },
  {
    text: "I was skeptical about AI-generated logos, but LogoMint exceeded my expectations. Our new brand identity looks amazing!",
    name: "Michael Chen",
    company: "Greenleaf Cafe",
    rating: 5
  },
  {
    text: "As a small business owner, I needed an affordable branding solution. LogoMint delivered a premium logo without the premium price.",
    name: "Jessica Williams",
    company: "Coastal Designs",
    rating: 4
  },
  {
    text: "The variety of options LogoMint generated was impressive. We found our perfect match after just a few iterations.",
    name: "David Rodriguez",
    company: "Spark Fitness",
    rating: 5
  },
  {
    text: "LogoMint saved us thousands in design costs. The export options made it easy to use our logo across all platforms.",
    name: "Emma Thompson",
    company: "Bright Marketing",
    rating: 4
  }
];

const stats = [
  { value: "10K+", label: "Businesses" },
  { value: "50K+", label: "Logos Created" },
  { value: "99%", label: "Satisfaction" },
  { value: "24/7", label: "Support" }
];