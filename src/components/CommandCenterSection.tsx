import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Shield, Terminal, LayoutDashboard, Settings, MoreVertical } from "lucide-react";

const CommandCenterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-noise" ref={ref}>
      <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial-glow rounded-full blur-[120px] opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Real-time Control</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            NEXUS <span className="text-gradient">Command Center</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Full observability across your entire AI infrastructure. Monitor, debug, and optimize
            thousands of models through a single revolutionary interface.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-3xl opacity-30" />

            <div className="relative glass-strong rounded-[2.5rem] p-1 md:p-2 glow-border inner-shadow bg-card/5 border border-white/10">
              <div className="bg-[#0a0a0c] rounded-[2rem] overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/5">
                  <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-accent" />
                      <span className="text-xs font-mono text-muted-foreground tracking-tight">nexus_core_cmd v4.2.0-stable</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">All systems operational</span>
                    </div>
                    <MoreVertical className="w-4 h-4 text-muted-foreground cursor-pointer" />
                  </div>
                </div>

                <div className="p-8">
                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Active Models", value: "247", change: "+12", trend: "up" },
                      { label: "Requests/sec", value: "84.7K", change: "+8.3%", trend: "up" },
                      { label: "Avg Latency", value: "0.4ms", change: "-15%", trend: "down" },
                      { label: "GPU Clusters", value: "32", change: "100%", trend: "stable" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-2xl bg-white/[0.03] p-5 border border-white/5 hover:border-accent/20 transition-all">
                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">{m.label}</p>
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-heading font-bold text-foreground">{m.value}</span>
                          <span className={`text-[10px] font-bold ${m.trend === 'down' ? 'text-emerald-400' : 'text-accent'}`}>{m.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Two-column dashboard */}
                  <div className="grid lg:grid-cols-12 gap-6">
                    {/* Chart Container */}
                    <div className="lg:col-span-8 rounded-2xl bg-white/[0.03] p-6 border border-white/5">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                          <LayoutDashboard className="w-4 h-4 text-accent" />
                          <span className="text-sm font-bold text-foreground">Inference Throughput</span>
                        </div>
                        <div className="flex gap-2">
                          {['1h', '6h', '24h'].map(t => (
                            <button key={t} className={`text-[10px] px-2.5 py-1 rounded-full border ${t === '24h' ? 'bg-accent/10 border-accent/20 text-accent' : 'border-white/10 text-muted-foreground'}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="h-48 flex items-end gap-1 px-2">
                        {Array.from({ length: 40 }).map((_, i) => {
                          const h = 40 + Math.sin(i * 0.4) * 30 + Math.random() * 20;
                          return (
                            <motion.div
                              key={i}
                              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/10 to-primary/60 group-hover:from-accent/20 group-hover:to-accent transition-all duration-300"
                              style={{ height: `${h}%` }}
                              initial={{ height: 0 }}
                              animate={isInView ? { height: `${h}%` } : {}}
                              transition={{ duration: 1, delay: i * 0.02 }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* GPU Status */}
                    <div className="lg:col-span-4 rounded-2xl bg-white/[0.03] p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-6">
                        <Settings className="w-4 h-4 text-accent" />
                        <span className="text-sm font-bold text-foreground">GPU Allocation</span>
                      </div>
                      <div className="space-y-5">
                        {[
                          { name: "H100-SXM", usage: 94, state: "Peak" },
                          { name: "A100-80GB", usage: 87, state: "Active" },
                          { name: "L40S-Vision", usage: 62, state: "Stable" },
                          { name: "T4-Edge", usage: 41, state: "Low" },
                        ].map((gpu) => (
                          <div key={gpu.name} className="space-y-2">
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-xs font-bold text-foreground">{gpu.name}</p>
                                <p className="text-[10px] text-muted-foreground">{gpu.state}</p>
                              </div>
                              <span className="text-xs font-mono text-accent">{gpu.usage}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-deep-accent to-primary"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${gpu.usage}%` } : {}}
                                transition={{ duration: 1.5, delay: 0.5 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommandCenterSection;
