import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Zap, Rocket, Building2, Crown } from "lucide-react";

const plans = [
  {
    number: "/01",
    tag: "Best for Startups",
    name: "CORE SYNC",
    icon: "/price.png",
    desc: "Get GPU-accelerated AI inference running fast with a focused budget.",
    cta: "Get Started",
    ctaLink: "https://buy.stripe.com/test_eVq9AT4NC7aYe379Vu4ZG0n",
    features: [
      "Up to 10 AI models deployed",
      "2 GPU nodes (NVIDIA T4)",
      "5M inference requests / month",
      "Standard monitoring & logs",
      "Delivery within 5 business days",
    ],
    price: "$49",
    period: "/mo",
    featured: false,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    number: "/02",
    tag: "Popular Choice",
    name: "PIPELINE PRO",
    icon: "/price (2).png",
    desc: "Full-stack GPU infrastructure for growing teams with production workloads.",
    cta: "Upgrade Now",
    ctaLink: "https://buy.stripe.com/test_8x2aEX6VK7aYaQVc3C4ZG0o",
    features: [
      "Unlimited AI model deployments",
      "16 GPU nodes (A100 / H100)",
      "Unlimited inference requests",
      "Real-time analytics & alerting",
      "Priority 24/7 support",
      "Custom pipeline integrations",
    ],
    price: "$99",
    period: "/mo",
    featured: true,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    number: "/03",
    tag: "For Scale",
    name: "ENTERPRISE",
    icon: "/price (3).png",
    desc: "Fully custom GPU cluster design tailored for your organization.",
    cta: "Contact Sales",
    ctaLink: "/contact",
    features: [
      "On-premise & air-gapped",
      "Custom GPU configurations",
      "Dedicated infrastructure team",
      "Enterprise SSO / SAML",
      "Priority SLA & compliance",
      "Dedicated account manager",
    ],
    price: "Custom",
    period: "",
    featured: false,
    color: "from-amber-500/20 to-orange-500/20"
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-noise" ref={ref}>
      <div className="absolute inset-0 grid-overlay opacity-[0.05]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Crown className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Pricing Plans</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Select Your <span className="text-gradient">Performance Tier</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Scalable plans designed to power your AI evolution from prototype to production.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group flex flex-col glass-strong rounded-[2.5rem] p-10 border transition-all duration-500 hover:-translate-y-2 ${plan.featured ? 'border-accent/40 bg-accent/5 ring-1 ring-accent/20' : 'border-white/10 hover:border-accent/30'
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20">
                  Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center text-white glow-shadow-sm group-hover:glow-shadow transition-all`}>
                  <img src={plan.icon} alt={plan.name} className="w-10 h-10" />
                </div>
                <span className="font-mono text-sm text-muted-foreground/50">{plan.number}</span>
              </div>

              <div className="mb-8">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{plan.tag}</span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{plan.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-heading font-bold transition-all duration-300 ${plan.featured
                  ? 'bg-accent text-accent-foreground glow-shadow hover:brightness-110 hov-scale-sm'
                  : 'glass border border-white/10 text-foreground hover:bg-white/5'
                  }`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

