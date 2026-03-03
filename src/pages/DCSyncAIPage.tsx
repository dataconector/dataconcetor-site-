import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, BarChart3, Shield, Layers, Globe, ArrowRight, Database, Cpu, Gauge, Lock, Workflow, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const capabilities = [
  { label: "Data Ingestion", value: "10 Billion", sub: "records/second" },
  { label: "Processing Latency", value: "<100ms", sub: "end-to-end" },
  { label: "Data Unification", value: "500+", sub: "data sources" },
  { label: "Uptime SLA", value: "99.99%", sub: "enterprise-grade" },
];

const features = [
  {
    icon: Database,
    title: "Intelligent Data Pipeline",
    desc: "Powered by NVIDIA RAPIDS, GPU-accelerated ETL processes for high-speed data transformation and real-time ingestion from 500+ enterprise data sources.",
  },
  {
    icon: Zap,
    title: "Smart Data Sync Engine",
    desc: "Automatic detection and synchronization of data changes across your entire infrastructure. Zero silos, zero delays.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Inference",
    desc: "Built on NVIDIA Triton Inference Server with TensorRT optimization. Delivers 10x faster model inference for intelligent data routing.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Real-time monitoring with NVIDIA Morpheus. Hardware-grade encryption for data at rest and in transit. FIPS 140-3 compliant.",
  },
  {
    icon: Layers,
    title: "Unified Architecture",
    desc: "Single control plane for all your data workflows. Model versioning, rollbacks, and A/B testing built-in.",
  },
  {
    icon: Gauge,
    title: "Auto-Scaling Intelligence",
    desc: "Predictive resource allocation. The system automatically scales to handle 10 billion records per second without bottlenecks.",
  },
];

const benchmarks = [
  { scenario: "Large Data Warehouse Sync", metric: "Records/sec", value: "10B+", improvement: "+340% vs legacy" },
  { scenario: "Multi-Source Unification", metric: "Sources unified", value: "500+", improvement: "Real-time sync" },
  { scenario: "Inference Pipeline", metric: "Latency", value: "<100ms", improvement: "10x faster than CPU" },
  { scenario: "Security Scanning", metric: "Throughput", value: "200K events/s", improvement: "Real-time detection" },
];

const useCases = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Instantly synchronize data from multiple data warehouses, data lakes, and streaming sources. Drive decisions with sub-100ms latency insights.",
    industry: "Financial Services",
  },
  {
    icon: Globe,
    title: "Global Data Unification",
    desc: "Break down silos across geographically distributed data centers. Maintain consistency while processing petabytes at scale.",
    industry: "Enterprise Platforms",
  },
  {
    icon: Lock,
    title: "Secure Data Operations",
    desc: "Monitor and route sensitive data through encrypted pipelines. Real-time threat detection with NVIDIA Morpheus-powered security.",
    industry: "Healthcare & Finance",
  },
  {
    icon: Sparkles,
    title: "ML Model Serving",
    desc: "Deploy, version, and scale ML models across production clusters. Dynamic batching and auto-scaling for optimal resource utilization.",
    industry: "AI/ML Teams",
  },
];

const DCSyncAIPage = () => {
  const capabilitiesRef = useRef(null);
  const featuresRef = useRef(null);
  const benchRef = useRef(null);
  const useCasesRef = useRef(null);
  const capabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benchInView = useInView(benchRef, { once: true, margin: "-100px" });
  const useCasesInView = useInView(useCasesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-noise">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-glow rounded-full blur-3xl opacity-40" />
        <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/8 blur-[100px] animate-float" />
        <div className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-accent/8 blur-[80px] animate-float-slow" />

        {/* AI 3D Visualization on Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-1/2 pointer-events-none">
          <svg
            className="w-full h-full max-w-3xl"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <style>
                {`
                  @keyframes float-orbits {
                    0%, 100% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                  @keyframes float-orbits-reverse {
                    0% { transform: rotate(360deg); }
                    100% { transform: rotate(0deg); }
                  }
                  @keyframes pulse-intense {
                    0%, 100% { opacity: 0.4; r: 6px; }
                    50% { opacity: 1; r: 10px; }
                  }
                  @keyframes glow-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                  }
                  @keyframes data-particle {
                    0% { opacity: 0; offset-distance: 0%; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { opacity: 0; offset-distance: 100%; }
                  }
                  @keyframes float-up {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-80px) translateX(20px); opacity: 0; }
                  }
                  @keyframes shimmer {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                  }
                  .orbit-1 { animation: float-orbits 20s linear infinite; }
                  .orbit-2 { animation: float-orbits-reverse 25s linear infinite; }
                  .orbit-3 { animation: float-orbits 30s linear infinite; }
                  .pulse-node { animation: pulse-intense 2s ease-in-out infinite; }
                  .glow-anim { animation: glow-pulse 3s ease-in-out infinite; }
                  .particle-flow { animation: data-particle 3s ease-in infinite; }
                  .particle-flow-2 { animation: data-particle 3.5s ease-in infinite 0.5s; }
                  .particle-flow-3 { animation: data-particle 3s ease-in infinite 1s; }
                  .float-particle { animation: float-up 4s ease-out infinite; }
                  .shimmer-line { animation: shimmer 2.5s ease-in-out infinite; }
                `}
              </style>
              
              <filter id="glow-intense">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="glow-heavy">
                <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="shadow-effect">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
              </filter>

              <radialGradient id="core-gradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" style={{stopColor: '#00ffff', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#0088ff', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#004aff', stopOpacity: 0.2}} />
              </radialGradient>

              <radialGradient id="node-gradient-active">
                <stop offset="0%" style={{stopColor: '#ff00ff', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#0088ff', stopOpacity: 0.3}} />
              </radialGradient>

              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#ff00ff', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#0088ff', stopOpacity: 0}} />
              </linearGradient>

              <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#00ffff', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: '#ff00ff', stopOpacity: 0.6}} />
              </linearGradient>
            </defs>

            {/* Background glow orb */}
            <circle cx="300" cy="300" r="180" fill="#0088ff" opacity="0.05" filter="url(#glow-heavy)"/>
            <circle cx="300" cy="300" r="220" fill="#00ffff" opacity="0.02" filter="url(#glow-heavy)"/>

            {/* Outer Ring Grid */}
            <g opacity="0.15" className="shimmer-line">
              <circle cx="300" cy="300" r="200" fill="none" stroke="#00ffff" strokeWidth="0.5"/>
              <circle cx="300" cy="300" r="145" fill="none" stroke="#00ffff" strokeWidth="0.5"/>
              <path d="M 300 100 L 300 500 M 100 300 L 500 300" stroke="#00ffff" strokeWidth="0.5"/>
              <line x1="190" y1="110" x2="410" y2="490" stroke="#00ffff" strokeWidth="0.5"/>
              <line x1="110" y1="190" x2="490" y2="410" stroke="#00ffff" strokeWidth="0.5"/>
            </g>

            {/* First Orbit - 3 Nodes */}
            <g className="orbit-1">
              <circle cx="300" cy="300" r="100" fill="none" stroke="#00ffff" strokeWidth="0.5" opacity="0.3"/>
              
              {/* Node 1 - Top */}
              <g>
                <circle cx="300" cy="200" r="20" fill="url(#node-gradient-active)" filter="url(#glow-intense)" opacity="0.85"/>
                <circle cx="300" cy="200" r="20" fill="none" stroke="#ff00ff" strokeWidth="2" className="pulse-node"/>
                <circle cx="300" cy="200" r="28" fill="none" stroke="#ff00ff" opacity="0.2" className="glow-anim"/>
              </g>

              {/* Node 2 - Bottom Right */}
              <g>
                <circle cx="386" cy="360" r="20" fill="url(#node-gradient-active)" filter="url(#glow-intense)" opacity="0.85"/>
                <circle cx="386" cy="360" r="20" fill="none" stroke="#00d4ff" strokeWidth="2" className="pulse-node"/>
                <circle cx="386" cy="360" r="28" fill="none" stroke="#00d4ff" opacity="0.2" className="glow-anim"/>
              </g>

              {/* Node 3 - Bottom Left */}
              <g>
                <circle cx="214" cy="360" r="20" fill="url(#node-gradient-active)" filter="url(#glow-intense)" opacity="0.85"/>
                <circle cx="214" cy="360" r="20" fill="none" stroke="#00ffff" strokeWidth="2" className="pulse-node"/>
                <circle cx="214" cy="360" r="28" fill="none" stroke="#00ffff" opacity="0.2" className="glow-anim"/>
              </g>
            </g>

            {/* Second Orbit - 4 Nodes */}
            <g className="orbit-2">
              <circle cx="300" cy="300" r="150" fill="none" stroke="#0088ff" strokeWidth="0.5" opacity="0.25"/>
              
              {/* Node 1 */}
              <g>
                <circle cx="300" cy="150" r="16" fill="#0088ff" filter="url(#glow-intense)" opacity="0.75"/>
                <circle cx="300" cy="150" r="16" fill="none" stroke="#00d4ff" strokeWidth="1.5" className="pulse-node"/>
              </g>

              {/* Node 2 */}
              <g>
                <circle cx="450" cy="300" r="16" fill="#0088ff" filter="url(#glow-intense)" opacity="0.75"/>
                <circle cx="450" cy="300" r="16" fill="none" stroke="#00ffff" strokeWidth="1.5" className="pulse-node"/>
              </g>

              {/* Node 3 */}
              <g>
                <circle cx="300" cy="450" r="16" fill="#0088ff" filter="url(#glow-intense)" opacity="0.75"/>
                <circle cx="300" cy="450" r="16" fill="none" stroke="#ff00ff" strokeWidth="1.5" className="pulse-node"/>
              </g>

              {/* Node 4 */}
              <g>
                <circle cx="150" cy="300" r="16" fill="#0088ff" filter="url(#glow-intense)" opacity="0.75"/>
                <circle cx="150" cy="300" r="16" fill="none" stroke="#00d4ff" strokeWidth="1.5" className="pulse-node"/>
              </g>
            </g>

            {/* Third Orbit - 6 Nodes */}
            <g className="orbit-3">
              <circle cx="300" cy="300" r="240" fill="none" stroke="#ff00ff" strokeWidth="0.5" opacity="0.15"/>
              
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 300 + 240 * Math.cos(rad);
                const y = 300 + 240 * Math.sin(rad);
                return (
                  <g key={angle}>
                    <circle cx={x} cy={y} r="12" fill="#ff00ff" opacity="0.6" filter="url(#glow-intense)"/>
                    <circle cx={x} cy={y} r="12" fill="none" stroke="#00ffff" strokeWidth="1" className="pulse-node"/>
                  </g>
                );
              })}
            </g>

            {/* Central Core - Large Pulsing Sphere */}
            <g>
              <circle cx="300" cy="300" r="45" fill="url(#core-gradient)" filter="url(#glow-heavy)" opacity="0.9"/>
              <circle cx="300" cy="300" r="45" fill="none" stroke="#00ffff" strokeWidth="2.5" opacity="0.7"/>
              <circle cx="300" cy="300" r="45" fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.4" className="pulse-node"/>
              
              {/* Inner detail circles */}
              <circle cx="300" cy="300" r="30" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.4" className="shimmer-line"/>
              <circle cx="300" cy="300" r="15" fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.5" className="shimmer-line"/>
            </g>

            {/* Connection Lines - Main Branches */}
            <g opacity="0.5" className="shimmer-line">
              <path d="M 300 255 L 300 200" stroke="#ff00ff" strokeWidth="1.5" strokeDasharray="3,3"/>
              <path d="M 350 330 L 386 360" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="3,3"/>
              <path d="M 250 330 L 214 360" stroke="#00ffff" strokeWidth="1.5" strokeDasharray="3,3"/>
            </g>

            {/* Secondary Connection Lines */}
            <g opacity="0.3" className="shimmer-line">
              <path d="M 300 260 L 300 150" stroke="#0088ff" strokeWidth="1"/>
              <path d="M 330 300 L 450 300" stroke="#00d4ff" strokeWidth="1"/>
              <path d="M 300 330 L 300 450" stroke="#ff00ff" strokeWidth="1"/>
              <path d="M 270 300 L 150 300" stroke="#00ffff" strokeWidth="1"/>
            </g>

            {/* Data Flow Particles - Multiple Paths */}
            {[
              { x1: 300, y1: 255, x2: 300, y2: 200, color: '#ff00ff', duration: '3s' },
              { x1: 350, y1: 330, x2: 386, y2: 360, color: '#00d4ff', duration: '3.2s' },
              { x1: 250, y1: 330, x2: 214, y2: 360, color: '#00ffff', duration: '3.5s' },
              { x1: 300, y1: 260, x2: 300, y2: 150, color: '#0088ff', duration: '3.3s' },
              { x1: 330, y1: 300, x2: 450, y2: 300, color: '#ff00ff', duration: '3.7s' },
              { x1: 300, y1: 330, x2: 300, y2: 450, color: '#00d4ff', duration: '3.4s' },
            ].map((path, idx) => (
              <g key={`particle-${idx}`}>
                <circle r="4" fill={path.color} opacity="0.8" filter="url(#glow-intense)">
                  <animateMotion dur={path.duration} repeatCount="indefinite" path={`M ${path.x1} ${path.y1} L ${path.x2} ${path.y2}`}/>
                </circle>
              </g>
            ))}

            {/* Rising Energy Particles */}
            {[0, 120, 240].map((offset) => (
              <g key={`energy-${offset}`} className="float-particle" style={{transformOrigin: '300px 300px', filter: 'url(#glow-intense)'}}>
                <circle cx={300 + Math.cos((offset * Math.PI) / 180) * 30} cy={300 + Math.sin((offset * Math.PI) / 180) * 30} r="3" fill="#00ffff"/>
              </g>
            ))}

            {/* Decorative Polygons */}
            <g opacity="0.15" className="shimmer-line">
              <polygon points="300,200 386,360 214,360" fill="none" stroke="#00ffff" strokeWidth="0.5"/>
              <polygon points="300,150 450,300 300,450 150,300" fill="none" stroke="#ff00ff" strokeWidth="0.5"/>
            </g>

            {/* Label */}
            <text x="300" y="570" textAnchor="middle" fontSize="13" fontWeight="600" fill="#00ffff" opacity="0.7" fontFamily="Arial, sans-serif">
              Neural Data Sync Layer
            </text>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm font-body text-muted-foreground">Enterprise Data Platform</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
              <span className="text-gradient-bright">DCSyncAI X.1</span>
              <br />
              <span className="text-foreground">Smart Data Sync Engine</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              Synchronize and unify your enterprise data pipelines with GPU-powered AI. Zero silos, zero delays. Instantly connect 500+ data sources with <span className="text-accent font-semibold">10 billion records per second</span>.
            </p>

            <p className="text-sm text-accent font-heading font-medium mb-10">
              &lt;100ms Latency · 99.99% Uptime · Enterprise Security
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://app.dataconector.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg font-heading font-medium text-sm bg-gradient-accent text-primary-foreground glow-shadow transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2">
                Launch Dashboard <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/#features" className="px-8 py-3.5 rounded-lg font-heading font-medium text-sm glass glow-border text-foreground transition-all duration-300 hover:bg-card/60 inline-flex items-center gap-2">
                View Architecture <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-24 overflow-hidden bg-noise" ref={capabilitiesRef}>
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Made for Scale
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade capabilities that grow with your data infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center glow-border"
              >
                <p className="text-xs text-muted-foreground mb-3">{c.label}</p>
                <p className="font-heading text-3xl font-semibold text-foreground mb-1">{c.value}</p>
                <p className="text-xs text-accent font-medium">{c.sub}</p>
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
              Real-world performance metrics that speak for themselves.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto glass-strong rounded-2xl overflow-hidden glow-border">
            <div className="grid grid-cols-4 gap-4 p-5 border-b border-border/30">
              <span className="text-xs font-heading font-semibold text-muted-foreground">Scenario</span>
              <span className="text-xs font-heading font-semibold text-muted-foreground">Metric</span>
              <span className="text-xs font-heading font-semibold text-muted-foreground">DCSyncAI X.1</span>
              <span className="text-xs font-heading font-semibold text-muted-foreground">Improvement</span>
            </div>
            {benchmarks.map((b, i) => (
              <motion.div
                key={b.scenario}
                initial={{ opacity: 0, x: -20 }}
                animate={benchInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="grid grid-cols-4 gap-4 p-5 border-b border-border/20 last:border-0 hover:bg-card/30 transition-colors"
              >
                <span className="text-sm text-foreground font-medium">{b.scenario}</span>
                <span className="text-sm text-muted-foreground">{b.metric}</span>
                <span className="text-sm text-foreground font-heading font-semibold">{b.value}</span>
                <span className="text-sm text-accent font-heading font-semibold">{b.improvement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-32 overflow-hidden" ref={useCasesRef}>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              Built for Enterprise Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From real-time analytics to global data unification, see how DCSyncAI X.1 powers mission-critical workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-8 glow-border hover:glow-border-hover transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center glow-shadow-sm group-hover:glow-shadow transition-all duration-500">
                    <useCase.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-xs font-semibold text-accent">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{useCase.desc}</p>
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
            <a href="https://app.dataconector.com/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-xl font-heading font-medium bg-foreground text-background glow-shadow transition-all duration-300 hover:scale-[1.03] text-base inline-flex items-center gap-2">
              Reserve Now <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DCSyncAIPage;
