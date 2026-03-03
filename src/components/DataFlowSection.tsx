import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cpu, BrainCircuit, Activity, Cloud } from "lucide-react";

const nodes = [
  { label: "Data Ingestion", desc: "Multi-source connectors", icon: Database },
  { label: "Preprocessing", desc: "GPU-accelerated ETL", icon: Cpu },
  { label: "Model Training", desc: "Distributed compute", icon: BrainCircuit },
  { label: "Inference", desc: "Sub-ms latency", icon: Activity },
  { label: "Deployment", desc: "Edge & cloud delivery", icon: Cloud },
];

const DataFlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-noise" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial-glow rounded-full blur-[120px] opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Architecture
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Intelligent <span className="text-gradient">Data Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end orchestration from ingestion to deployment,
            optimized for throughput at every stage.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                <div className="glass-strong rounded-[2rem] p-8 text-center glow-border glow-border-hover transition-all duration-500 hover:-translate-y-2 relative overflow-hidden bg-card/20">
                  {/* Subtle Background Icon */}
                  <node.icon className="absolute -right-2 -bottom-2 w-16 h-16 text-accent/5 pointer-events-none" />

                  {/* Node Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent mx-auto mb-6 flex items-center justify-center glow-shadow-sm group-hover:glow-shadow transition-all duration-500">
                    <node.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {node.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {node.desc}
                  </p>
                </div>

                {/* Connector arrow (hidden on mobile) */}
                {i < nodes.length - 1 && (
                  <div className="absolute top-1/2 -right-3 w-6 h-[2px] bg-accent/20 hidden md:block -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 24, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent glow-shadow-sm"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlowSection;

