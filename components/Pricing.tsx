// src/components/Pricing.tsx
'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners and casual users",
    features: [
      "10 mind maps per month",
      "Basic AI generation",
      "PNG export",
      "Public sharing",
    ],
    highlight: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For professionals and advanced users",
    features: [
      "Unlimited mind maps",
      "Advanced AI generation",
      "All export formats",
      "Private sharing",
      "Collaboration",
      "Priority support",
    ],
    highlight: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
  },
  {
    name: "Team",
    price: "$29.99",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Advanced permissions",
      "Analytics",
      "Team templates",
      "24/7 support",
    ],
    highlight: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block text-slate-900 dark:text-white">
          Simple Pricing
          <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Choose the plan that fits your needs. All plans include core NeuroFlow features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
              plan.highlight
                ? "border-2 border-indigo-500 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
                : "border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/70"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className={`p-8 h-full flex flex-col ${plan.highlight ? "pt-12" : ""}`}>
              <h3 className={`text-xl font-bold mb-2 text-center ${plan.highlight ? "text-white" : "text-slate-900 dark:text-white"}`}>
                {plan.name}
              </h3>
              <div className="mb-4 text-center">
                <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {plan.price}
                </span>
                {plan.period && <span className={`ml-1 text-base ${plan.highlight ? "text-indigo-200" : "text-slate-500 dark:text-slate-300"}`}>{plan.period}</span>}
              </div>
              <p className={`mb-6 text-center text-sm ${plan.highlight ? "text-indigo-100" : "text-slate-700 dark:text-slate-300"}`}>{plan.description}</p>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={18} className={`mr-2 flex-shrink-0 ${plan.highlight ? "text-white" : "text-indigo-500 dark:text-indigo-400"}`} />
                    <span className={`${plan.highlight ? "text-indigo-100" : "text-slate-700 dark:text-slate-300"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.buttonVariant}
                className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${
                  plan.highlight
                    ? "bg-white text-indigo-600 shadow-md hover:bg-slate-100 hover:scale-[1.02]"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;