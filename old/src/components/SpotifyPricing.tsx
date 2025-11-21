import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "FREE",
    price: "$0",
    period: "/month",
    features: [
      "Basic portfolio",
      "10 text blasts/month",
      "Basic analytics",
      "Community access"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "CREATOR",
    price: "$19",
    period: "/month", 
    features: [
      "Professional portfolio",
      "Unlimited text blasts",
      "Advanced analytics",
      "Priority support",
      "Collaboration tools",
      "Custom branding"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "PRO",
    price: "$49",
    period: "/month",
    features: [
      "Everything in Creator",
      "White-label solutions",
      "API access",
      "Dedicated manager",
      "Custom integrations",
      "Advanced reporting"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function SpotifyPricing() {
  return (
    <section className="bg-black py-32 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 text-white mb-4">Choose your plan</h2>
          <p className="text-body-large text-purple-200">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative spotify-card h-full ${
                plan.popular 
                  ? 'border-2 border-purple-500 bg-purple-500/5 transform -translate-y-4 shadow-[0_24px_64px_rgba(139,75,255,0.3)]' 
                  : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-tiny font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Plan name */}
                <div className="text-tiny font-bold tracking-widest text-purple-400 uppercase">
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-body text-purple-200 ml-1">{plan.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-body text-purple-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}