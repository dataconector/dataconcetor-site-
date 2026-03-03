import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Cpu, ArrowUpRight, Gauge, Globe, Activity } from "lucide-react";

const stats = [
    { label: "Throughput", value: "1.2M", unit: "Ops/sec", icon: Zap, color: "text-amber-400" },
    { label: "Latency", value: "0.8", unit: "ms", icon: Gauge, color: "text-emerald-400" },
    { label: "Utilization", value: "98.4", unit: "%", icon: Cpu, color: "text-accent" },
];

const PerformanceSection = () => {
    return (
        <section className="relative py-32 bg-noise overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial-glow rounded-full blur-[120px] opacity-20" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6"
                    >
                        <BarChart3 className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">Performance Metrics</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight"
                    >
                        Engineered for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 animate-gradient">Extreme Speed</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl font-medium"
                    >
                        Experience lightning-fast model execution with our proprietary CUDA kernels
                        and hardware-level optimizations optimized for sub-millisecond throughput.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {/* Main Card - Extreme Speed Color Code */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] glass-strong border border-white/20 p-10 min-h-[420px] bg-black/40"
                    >
                        {/* Background Image with High-Energy Color Code */}
                        <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden">
                            <img
                                src="/perfom img.png"
                                alt="High Speed Data Stream"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[3s]"
                            />
                            {/* Color Code Overlays: Indigo, Purple, Rose */}
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
                            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] border border-white/20">
                                        <img src="/performnc metric.png" alt="Hardware Acceleration" className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-foreground tracking-tight">Hardware Acceleration</h3>
                                </div>
                                <p className="text-slate-300 max-w-md text-xl leading-relaxed font-medium">
                                    Leverage the full power of H100 and A100 clusters with zero overhead.
                                    Our scheduler ensures your models run at peak hardware capability.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="p-6 rounded-3xl glass-strong border border-white/10 flex-1 min-w-[150px] group-hover:border-indigo-500/50 transition-all bg-black/30 backdrop-blur-xl">
                                        <p className="text-[11px] text-indigo-300 uppercase font-extrabold tracking-[0.2em] mb-3">{stat.label}</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-4xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent`}>{stat.value}</span>
                                            <span className="text-sm text-slate-400 font-bold">{stat.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Side Card 1 - Security */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-[2.5rem] glass-strong border border-white/10 p-8 flex flex-col justify-between hover:border-accent/30 transition-all group bg-card/10 relative overflow-hidden"
                    >
                        {/* Background Image for Security */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 transition-opacity duration-700 pointer-events-none">
                            <img
                                src="/perfom img (2).png"
                                alt="Security Core"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </div>

                        <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 glow-shadow-sm group-hover:glow-shadow transition-all">
                            <img src="/performnc metric (2).png" alt="Enterprise Grade" className="w-10 h-10" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-foreground mb-3">Enterprise Grade</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                SOC 2 Type II certified infrastructure with end-to-end encryption.
                                Your data and models never leave your private environment.
                            </p>
                        </div>
                        <button className="relative z-10 mt-8 flex items-center gap-2 text-accent text-sm font-bold group/btn">
                            Security Protocol <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Bottom Card 1 - Scale */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[2.5rem] glass-strong border border-white/10 p-8 hover:border-accent/30 transition-all group overflow-hidden relative bg-card/10"
                    >
                        {/* Background Image for Scale */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 transition-opacity duration-1000 pointer-events-none">
                            <img
                                src="/perfom img (3).png"
                                alt="Global Scale"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-transparent" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                                <img src="/performnc metric (3).png" alt="Instant Scale" className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">Instant Scale</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Go from 1 to 1000 nodes in under 45 seconds with our global VPC orchestrator.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Card 2 - Efficiency */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 rounded-[2.5rem] glass-strong border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between group bg-card/10 hover:border-accent/30 transition-all relative overflow-hidden"
                    >
                        {/* Background Image for Efficiency */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 transition-opacity duration-1000 pointer-events-none">
                            <img
                                src="/perfom img (4).png"
                                alt="Efficiency"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
                        </div>

                        <div className="flex-1 mb-8 md:mb-0 relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                                    <img src="/performnc metric (4).png" alt="Efficiency Tracking" className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Efficiency Tracking</h3>
                            </div>
                            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                                Monitor every watt and every FLOP across your entire cluster in real-time.
                                Optimize for cost, performance, or carbon footprint.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 h-32 relative overflow-hidden rounded-2xl bg-black/40 border border-white/5 p-6 inner-shadow z-10">
                            {/* Fake Real-time Sparkline */}
                            <div className="flex items-end gap-1.5 h-full">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [`${30 + Math.random() * 60}%`, `${30 + Math.random() * 60}%`] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                                        className="flex-1 bg-gradient-to-t from-accent/20 to-accent/60 rounded-t-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceSection;

