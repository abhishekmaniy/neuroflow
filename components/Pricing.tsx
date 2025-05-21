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
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-gradient-to-tr from-blue-200 via-white to-blue-400 opacity-40 blur-2xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 via-white to-blue-300 opacity-20 blur-2xl rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block text-blue-900 dark:text-white">
            Simple Pricing
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></span>
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include core NeuroFlow features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.highlight
                  ? "shadow-2xl border-2 border-blue-500 dark:border-blue-400 bg-gradient-to-br from-blue-500 to-blue-700"
                  : "border border-blue-100 dark:border-blue-900 bg-white/80 dark:bg-blue-950/70 shadow-xl"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-1 text-sm font-medium z-10 shadow">
                  Most Popular
                </div>
              )}
              <div className={`p-8 h-full flex flex-col ${plan.highlight ? "pt-12" : ""}`}>
                <h3 className={`text-xl font-bold mb-2 text-center ${plan.highlight ? "text-white" : "text-blue-900 dark:text-white"}`}>{plan.name}</h3>
                <div className="mb-4 text-center">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-blue-900 dark:text-white"}`}>{plan.price}</span>
                  {plan.period && <span className={`ml-1 ${plan.highlight ? "text-blue-200" : "text-blue-500 dark:text-blue-300"}`}>{plan.period}</span>}
                </div>
                <p className={`mb-6 text-center ${plan.highlight ? "text-blue-100" : "text-blue-700 dark:text-blue-200"}`}>{plan.description}</p>
                <ul className="mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-3">
                      <Check size={18} className={`mr-2 flex-shrink-0 ${plan.highlight ? "text-white" : "text-blue-500 dark:text-blue-300"}`} />
                      <span className={`${plan.highlight ? "text-blue-100" : "text-blue-900 dark:text-blue-100"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 text-white shadow-lg hover:scale-105"
                      : "border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30"
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