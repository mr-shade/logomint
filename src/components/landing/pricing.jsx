"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl border ${plan.featured ? 'border-primary shadow-lg relative' : ''} overflow-hidden`}
            >
              {plan.featured && (
                <div className="absolute top-0 inset-x-0">
                  <Badge variant="default" className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-none rounded-b-md mx-auto">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold">${plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className={`w-full ${plan.featured ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90' : ''}`}
                    variant={plan.featured ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
                
                <div className="mt-8 space-y-4 flex-grow">
                  <p className="font-medium">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="size-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Need a custom solution for your enterprise?</p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free",
    featured: false,
    features: [
      "5 AI-generated logos",
      "Basic customization",
      "Standard quality exports",
      "Commercial license",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "19",
    description: "Ideal for growing businesses",
    buttonText: "Get Started",
    featured: true,
    features: [
      "Unlimited AI-generated logos",
      "Advanced customization",
      "High-resolution exports",
      "Commercial license",
      "Priority support",
      "Brand guidelines PDF",
      "Social media kit"
    ]
  },
  {
    name: "Business",
    price: "49",
    description: "For teams and larger organizations",
    buttonText: "Get Started",
    featured: false,
    features: [
      "Everything in Pro",
      "Multiple brand profiles",
      "Team collaboration",
      "API access",
      "Dedicated account manager",
      "Custom font integration",
      "White-label exports"
    ]
  }
];