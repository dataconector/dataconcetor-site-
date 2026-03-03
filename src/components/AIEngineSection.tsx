import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Binary, Workflow } from "lucide-react";

const features = [
  {
    title: "Transformer Optimization",
    desc: "Custom CUDA kernels for 3x inference speedup on transformer architectures.",
    icon: "/neural engine.png",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Dynamic Batching",
    desc: "Intelligent request batching that maximizes GPU utilization across workloads.",
    icon: "/neural engine 2.png",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Model Versioning",
    desc: "Git-like versioning for models with instant rollback and A/B deployment.",
    icon: "/neural engine 3.png",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Auto-Scaling",
    desc: "Predictive scaling that provisions GPU clusters before demand spikes.",
    icon: "/neural engine 4.png",
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

const AIEngineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-background" ref={ref}>
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px]" />
      <div className="absolute inset-0 grid-overlay opacity-[0.03]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left - Heading Area */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Binary className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">NeuralCore Engine</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground leading-[1.05]">
                NEURAL ,
                <br />
                <span className="text-gradient">INFERENCE ENGINE</span> <br />
                Powered by DCSyncAI X.1
              </h2>

              <p className="text-xl text-muted-foreground max-w-md leading-relaxed mb-10">
                Purpose-built runtime optimized for production AI workloads at planetary scale.
                Experience efficiency like never before.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Workflow, text: "Automated model conversion" },
                  { icon: Binary, text: "Direct hardware memory access" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <item.icon className="w-3.5 h-3.5" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center - Connecting Lines (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1 relative h-full min-h-[600px]">
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 600" fill="none" preserveAspectRatio="none">
              <g>
                <motion.path
                  d={`M -50 300 L 0 300`}
                  stroke="hsl(var(--accent) / 0.25)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.5 }}
                />
                {/* Node dot Central */}
                <motion.circle
                  cx="0"
                  cy="300"
                  r="4"
                  fill="hsl(var(--accent))"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="shadow-[0_0_10px_hsl(var(--accent))]"
                />
              </g>

              {[
                { y: 120, index: 0 },
                { y: 260, index: 1 },
                { y: 400, index: 2 },
                { y: 540, index: 3 }
              ].map((item, i) => (
                <g key={i}>
                  {/* Path from left (heading) to center to right (boxes) */}
                  <motion.path
                    d={`M 0 300 L 30 300 L 50 ${item.y} L 100 ${item.y}`}
                    stroke="hsl(var(--accent) / 0.25)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                  />

                  {/* Arrow head */}
                  <motion.path
                    d={`M 95 ${item.y - 3} L 100 ${item.y} L 95 ${item.y + 3}`}
                    stroke="hsl(var(--accent) / 0.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + i * 0.15 }}
                  />

                  {/* Node dots */}
                  <motion.circle
                    cx="30"
                    cy="300"
                    r="3"
                    fill="hsl(var(--accent) / 0.6)"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.15 }}
                  />

                  <motion.circle
                    cx="50"
                    cy={item.y}
                    r="4"
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="shadow-[0_0_10px_hsl(var(--accent))]"
                  />

                  <motion.circle
                    cx="100"
                    cy={item.y}
                    r="3"
                    fill="hsl(var(--accent) / 0.6)"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.15 }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Right - Features Cards */}
          <div className="lg:col-span-6 space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="group relative"
              >
                <div className="glass-strong rounded-[2.5rem] p-8 glow-border glow-border-hover transition-all duration-500 hover:-translate-y-2 flex gap-8 items-start bg-card/10 relative overflow-hidden">
                  {/* Decorative Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity blur-2xl`} />

                  {/* Icon */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center glow-shadow-sm group-hover:glow-shadow transition-all duration-500 overflow-hidden">
                      <img src={f.icon} alt={f.title} className="w-12 h-12 object-contain" />
                    </div>
                  </div>

                  <div className="flex-1 z-10">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {f.desc}
                    </p>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEngineSection;


