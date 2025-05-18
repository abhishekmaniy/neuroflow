
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
    <section id="pricing" className="neuro-section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Simple Pricing
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-neuro-primary to-neuro-blue rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include core NeuroFlow features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.highlight 
                  ? "shadow-lg border-2 border-neuro-primary dark:border-neuro-primary" 
                  : "border border-gray-100 dark:border-gray-700 shadow-md"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-neuro-primary text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className={`p-8 bg-white dark:bg-gray-800 h-full flex flex-col ${plan.highlight ? "pt-12" : ""}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                <ul className="mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-3">
                      <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full ${
                    plan.highlight ? "bg-neuro-primary hover:bg-neuro-secondary text-white" : ""
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
