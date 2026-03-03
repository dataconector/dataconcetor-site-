import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        id: "01",
        title: "DATA INGESTION",
        desc: "Multi-source connectors unify enterprise data for seamless integration.",
        icon: "/architecture.png",
        position: "top"
    },
    {
        id: "02",
        title: "PREPROCESSING",
        desc: "GPU-accelerated ETL pipelines transform and validate data at high speed.",
        icon: "/architecture (2).png",
        position: "bottom"
    },
    {
        id: "03",
        title: "MODEL TRAINING",
        desc: "Distributed compute infrastructure enables training of AI models at massive scale.",
        icon: "/architecture (3).png",
        position: "top"
    },
    {
        id: "04",
        title: "INFERENCE",
        desc: "Sub-millisecond latency delivers real-time predictions and actionable insights.",
        icon: "/architecture (4).png",
        position: "bottom"
    },
    {
        id: "05",
        title: "DEPLOYMENT",
        desc: "Automated edge and cloud distribution ensures planetary-scale delivery and synchronization.",
        icon: "/architecture (5).png",
        position: "top"
    }
];

const HowItWorksSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="relative py-32 overflow-hidden bg-background" id="how-it-works" ref={ref}>
            <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial-glow rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                        Architecture
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
                        Intelligent <span className="text-gradient">Data Pipeline</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        End-to-end orchestration from ingestion to deployment, powered by DCSyncAI X.1, ensuring real-time AI-driven synchronization and planetary-scale throughput.

                    </p>
                </motion.div>

                {/* Timeline - Desktop (lg+) */}
                <div className="relative max-w-7xl mx-auto h-[600px] hidden lg:block">
                    {/* Central Baseline */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 -translate-y-1/2 overflow-visible">
                        {/* Glow Layer (Blurry behind) */}
                        <div className="absolute inset-0 bg-accent/20 blur-md" />

                        {/* Running Glow Pulse */}
                        <div className="absolute inset-0 h-full overflow-hidden">
                            <motion.div
                                className="absolute inset-y-0 w-80 bg-gradient-to-r from-transparent via-accent to-transparent"
                                animate={{ left: ['-20%', '120%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Hot White Center */}
                            <motion.div
                                className="absolute inset-y-0 w-40 bg-white/60 blur-sm"
                                animate={{ left: ['-20%', '120%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 h-full relative">
                        {steps.map((step, i) => (
                            <div key={step.id} className="relative h-full flex items-center justify-center">
                                {/* Connection Dot on Line */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent z-30 shadow-[0_0_20px_hsl(var(--accent))] border-2 border-white/50"
                                />

                                {/* Vertical Connection Line */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={isInView ? { height: 180 } : {}}
                                    transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                                    className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-white/30 ${step.position === 'top' ? 'bottom-1/2' : 'top-1/2'
                                        }`}
                                >
                                    {/* Vertical Pulse Overlay */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <motion.div
                                            className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_15px_hsl(var(--accent)/0.5)]"
                                            animate={{
                                                top: step.position === 'top' ? ['100%', '-100%'] : ['-100%', '100%']
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 + i * 0.1 }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Content Box */}
                                <motion.div
                                    initial={{ opacity: 0, y: step.position === 'top' ? -20 : 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                                    className={`absolute left-1/2 flex flex-col items-start group ${step.position === 'top'
                                        ? 'bottom-[calc(50%+25px)]'
                                        : 'top-[calc(50%+25px)]'
                                        }`}
                                >
                                    <div className={`flex flex-col items-start gap-6 ${step.position === 'bottom' ? 'flex-col-reverse' : ''}`}>
                                        {/* Icon and Number Row */}
                                        <div className="flex items-center gap-3 group relative -translate-x-1/2">
                                            <span className="text-xl font-heading font-bold text-foreground/40 group-hover:text-accent transition-colors absolute -left-12">
                                                {step.id}
                                            </span>
                                            <div className="relative">
                                                <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center text-white glow-shadow shadow-[0_0_25px_hsl(var(--accent)/0.4)] group-hover:glow-shadow transition-all duration-500 relative z-10 overflow-hidden border border-white/20 p-4">
                                                    <img src={step.icon} alt={step.title} className="w-full h-full object-contain relative z-20 brightness-0 invert" />
                                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <div className="absolute inset-0 rounded-2xl border border-accent/30 scale-125 opacity-20 group-hover:opacity-100 transition-all duration-700 animate-spin-slow" />
                                            </div>
                                        </div>

                                        {/* Text content */}
                                        <div className="text-left space-y-2 max-w-[220px] pl-10">
                                            <h3 className="font-heading text-lg font-bold text-foreground tracking-[0.15em] uppercase group-hover:text-accent transition-colors leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline - Tablet & Mobile (Vertical - Icons on LEFT, Text on RIGHT) */}
                <div className="relative max-w-2xl mx-auto lg:hidden pt-8">
                    {/* Central Vertical Line (Positioned on the Left edge) */}
                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/20 overflow-visible shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        {/* Vertical Ambient Glow */}
                        <div className="absolute inset-0 bg-accent/20 blur-md" />

                        {/* Animated Scan Pulse */}
                        <div className="absolute inset-0 h-full overflow-hidden">
                            <motion.div
                                className="absolute inset-x-0 h-64 bg-gradient-to-b from-transparent via-accent to-transparent"
                                animate={{ top: ['-20%', '120%'] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-x-0 h-32 bg-white/40 blur-sm"
                                animate={{ top: ['-20%', '120%'] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                    <div className="space-y-20 relative px-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.6 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative flex items-center justify-start w-full pl-20"
                            >
                                {/* Icon Wrapper - On the LEFT of the content */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center text-white glow-shadow shadow-[0_0_20px_hsl(var(--accent)/0.5)] border border-accent/40 group transition-transform hover:scale-110 duration-500 p-3">
                                        <img src={step.icon} alt={step.title} className="w-full h-full object-contain brightness-0 invert" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background text-xs font-bold font-heading border-2 border-white shadow-xl">
                                            {step.id}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Box - Guaranteed on the RIGHT of the icon */}
                                <div className="w-full text-left">
                                    <div className="bg-card/30 backdrop-blur-md border border-white/10 p-6 rounded-3xl hov-scale-sm glow-border group relative overflow-hidden transition-all duration-500 hover:border-accent/30">
                                        <h3 className="font-heading text-xl font-bold text-foreground mb-2 uppercase tracking-wider group-hover:text-accent transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
