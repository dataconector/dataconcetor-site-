import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, BarChart3, Shield, Layers, Globe, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const specs = [
  { label: "Peak Performance", value: "4.2 PFLOPS", sub: "FP8 Tensor Core" },
  { label: "Memory", value: "640 GB", sub: "HBM3e unified" },
  { label: "Interconnect", value: "1.8 TB/s", sub: "NeuralLink mesh" },
  { label: "Power Efficiency", value: "3.1x", sub: "vs. previous gen" },
];

const features = [
  {
    icon: Cpu,
    title: "Next-Gen Tensor Cores",
    desc: "Custom silicon designed for transformer workloads. 8x throughput on attention layers with dynamic precision scaling from FP64 to FP4.",
  },
  {
    icon: Zap,
    title: "NeuralLink Interconnect",
    desc: "Proprietary chip-to-chip communication fabric with 1.8 TB/s bandwidth. Zero-copy data sharing across 256 accelerators.",
  },
  {
    icon: Layers,
    title: "Unified Memory Architecture",
    desc: "640 GB HBM3e with coherent access across all compute units. No more memory bottlenecks on 1T+ parameter models.",
  },
  {
    icon: Shield,
    title: "Hardware Security Module",
    desc: "On-die encryption engine for model weights and inference data. FIPS 140-3 Level 3 certified secure enclave.",
  },
  {
    icon: Globe,
    title: "Cloud-Native Design",
    desc: "SR-IOV virtualization, live migration support, and PCIe Gen6 connectivity. Built for hyperscale data centers.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Power Management",
    desc: "Dynamic frequency and voltage scaling per-core. 3.1x performance-per-watt improvement over previous generation.",
  },
];

const benchmarks = [
  { model: "GPT-4 class (1.8T)", metric: "Tokens/sec", value: "12,400", improvement: "+340%" },
  { model: "Stable Diffusion XL", metric: "Images/sec", value: "847", improvement: "+280%" },
  { model: "LLaMA 3 70B", metric: "Tokens/sec", value: "38,200", improvement: "+410%" },
  { model: "Whisper Large v3", metric: "Hours/min", value: "94", improvement: "+190%" },
];

const DCSyncAIPage = () => {
  const specsRef = useRef(null);
  const featuresRef = useRef(null);
  const benchRef = useRef(null);
  const specsInView = useInView(specsRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benchInView = useInView(benchRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-noise">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-glow rounded-full blur-3xl opacity-40" />
        <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/8 blur-[100px] animate-float" />
        <div className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-accent/8 blur-[80px] animate-float-slow" />

        {/* Concentric rings background */}
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 hidden lg:block">
          <div className="relative w-[400px] h-[400px]">
            {[1, 2, 3, 4, 5].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-accent/10"
                style={{
                  inset: `${ring * 10}%`,
                  animation: `pulse-glow ${4 + ring}s ease-in-out infinite`,
                  animationDelay: `${ring * 0.4}s`,
                }}
              />
            ))}
            <div className="absolute inset-[40%] rounded-full bg-gradient-accent glow-shadow flex items-center justify-center">
              <Cpu className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm font-body text-muted-foreground">New Product Launch</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
              <span className="text-gradient-bright">DCSyncAI X.1</span>
              <br />
              <span className="text-foreground">Accelerator Core</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-4 leading-relaxed">
              The world's most advanced AI accelerator. Purpose-built for trillion-parameter models
              with unprecedented throughput and efficiency.
            </p>

            <p className="text-sm text-accent font-heading font-medium mb-10">
              4.2 PFLOPS · 640 GB HBM3e · 1.8 TB/s Interconnect
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3.5 rounded-lg font-heading font-medium text-sm bg-gradient-accent text-primary-foreground glow-shadow transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2">
                Request Access <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 rounded-lg font-heading font-medium text-sm glass glow-border text-foreground transition-all duration-300 hover:bg-card/60">
                Technical Specs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="relative py-24 overflow-hidden bg-noise" ref={specsRef}>
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {specs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={specsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center glow-border"
              >
                <p className="text-xs text-muted-foreground mb-2">{s.label}</p>
                <p className="font-heading text-3xl font-semibold text-foreground mb-1">{s.value}</p>
                <p className="text-xs text-accent">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-32 overflow-hidden" ref={featuresRef}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              Engineered Without Compromise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every transistor optimized for the demands of next-generation AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-6 glow-border glow-border-hover transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 glow-shadow-sm group-hover:glow-shadow transition-all duration-500">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="relative py-32 overflow-hidden bg-noise" ref={benchRef}>
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial-glow rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benchInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              Benchmark Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Independent benchmarks vs. previous generation accelerators.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto glass-strong rounded-2xl overflow-hidden glow-border">
            <div className="grid grid-cols-4 gap-4 p-5 border-b border-border/30">
              <span className="text-xs font-heading font-semibold text-muted-foreground">Model</span>
              <span className="text-xs font-heading font-semibold text-muted-foreground">Metric</span>
              <span className="text-xs font-heading font-semibold text-muted-foreground">DCSyncAI X.1</span>
              <span className="text-xs font-heading font-semibold text-muted-foreground">Improvement</span>
            </div>
            {benchmarks.map((b, i) => (
              <motion.div
                key={b.model}
                initial={{ opacity: 0, x: -20 }}
                animate={benchInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="grid grid-cols-4 gap-4 p-5 border-b border-border/20 last:border-0 hover:bg-card/30 transition-colors"
              >
                <span className="text-sm text-foreground font-medium">{b.model}</span>
                <span className="text-sm text-muted-foreground">{b.metric}</span>
                <span className="text-sm text-foreground font-heading font-semibold">{b.value}</span>
                <span className="text-sm text-accent font-heading font-semibold">{b.improvement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-80" />
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-50" />
        <div className="absolute top-10 left-[10%] w-64 h-64 border border-accent/10 rounded-full" />
        <div className="absolute bottom-10 right-[15%] w-48 h-48 border border-accent/10 rounded-full" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 text-primary-foreground">
              Be First in Line
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
              DCSyncAI X.1 is shipping Q3 2026. Reserve your allocation today.
            </p>
            <button className="px-10 py-4 rounded-xl font-heading font-medium bg-foreground text-background glow-shadow transition-all duration-300 hover:scale-[1.03] text-base inline-flex items-center gap-2">
              Reserve Now <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DCSyncAIPage;
