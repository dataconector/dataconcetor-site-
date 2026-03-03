import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Globe, BarChart3, Layers, Rocket } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Multi-GPU Orchestration",
      desc: "Seamlessly distribute workloads across heterogeneous GPU clusters with intelligent scheduling.",
      icon: "/performance icon.png",
      className: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Real-time Inference",
      desc: "Sub-millisecond response times with optimized CUDA kernels.",
      icon: "/performance icon (2).png",
      className: "md:col-span-1 lg:col-span-2"
    },
    {
      title: "Enterprise Security",
      desc: "SOC 2 Type II certified. End-to-end encryption and RBAC.",
      icon: "/performance icon (3).png",
      className: "md:col-span-1"
    },
    {
      title: "Global Edge Network",
      desc: "Deploy models to 200+ locations. Automatic geo-routing for lowest latency.",
      icon: "/performance icon (4).png",
      className: "md:col-span-2"
    },
    {
      title: "Advanced Analytics",
      desc: "Deep performance insights with custom dashboards and anomaly detection.",
      icon: "/performance icon (5).png",
      className: "md:col-span-1"
    },
    {
      title: "Model Registry",
      desc: "Version and manage models with automated lifecycle governance.",
      icon: "/performance icon (6).png",
      className: "md:col-span-1"
    },
    {
      title: "Instant Deployment",
      desc: "One-click deployment pipeline for LLMs and vision models.",
      icon: "/performance icon (7).png",
      className: "md:col-span-1"
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-[0.03]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Powerful <span className="text-gradient">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to deploy and scale AI models in production
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 glass-strong p-8 hover:border-accent/40 transition-all duration-500 bg-card/10 ${f.className}`}
            >
              {/* Subtle background glow */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img src={f.icon} alt={f.title} className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {f.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors">
                  {f.desc}
                </p>
              </div>

              {/* Corner pulse */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
