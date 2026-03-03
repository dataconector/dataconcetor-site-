import { motion } from "framer-motion";
import { Network, Share2, Shield, Zap, Globe, Cpu } from "lucide-react";

const infoCards = [
    {
        title: "Distributed Compute",
        desc: "Harness the power of global GPU clusters with zero configuration or overhead.",
        icon: "/global con.png",
        position: "left-top"
    },
    {
        title: "Real-time Synch",
        desc: "Sub-millisecond data synchronization between edge nodes and core infrastructure.",
        icon: "/global con (2).png",
        position: "left-bottom"
    },
    {
        title: "Global Resilience",
        desc: "Multi-region failover and automatic routing ensure 99.99% uptime for AI workloads.",
        icon: "/global con (3).png",
        position: "right-top"
    },
    {
        title: "Enterprise Shield",
        desc: "Military-grade encryption and isolated VPCs for maximum security and compliance.",
        icon: "/global con (4).png",
        position: "right-bottom"
    }
];

const EcosystemSection = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-background">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Header Content */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Network className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">Global connectivity</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground"
                    >
                        One Unified <span className="text-muted-foreground/40">AI Network</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                    >
                        We bridge the gap between fragmented data sources and compute clusters,
                        creating a seamless ecosystem for industrial-scale intelligence.
                    </motion.p>
                </div>

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-8 max-w-7xl mx-auto">

                    {/* Left Column - 2 Cards */}
                    <div className="space-y-8 order-2 lg:order-1">
                        {infoCards.filter(c => c.position.startsWith('left')).map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="glass-strong rounded-[2rem] p-8 text-center lg:text-right border border-white/10 hover:border-accent/60 hover:shadow-[0_0_20px_hsla(var(--accent),0.4)] transition-all duration-500 group relative overflow-hidden bg-card/5"
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-[2rem]"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)',
                                        backgroundSize: '200% 2px',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 0%', '200% 0%', '200% 100%', '0% 100%', '0% 0%'],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                                <div className="flex flex-col lg:items-end items-center relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                                        <img src={card.icon} alt={card.title} className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">{card.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground transition-colors">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Column - Interactive Hub */}
                    <div className="order-1 lg:order-2 flex justify-center relative">
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Central Logo Disk - Expanded to cover 2nd inner circle */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="absolute inset-0 m-auto w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-accent/30 via-purple-500/10 to-cyan-500/30 flex items-center justify-center shadow-[0_0_80px_rgba(168,85,247,0.3)] z-20 border border-white/10 p-1.5"
                            >
                                <div className="w-full h-full rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden bg-black/40 relative group">
                                    <img
                                        src="/global con img.png"
                                        alt="AI Neural Core"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    {/* Inner Glow Overlay matching image color code */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-cyan-400/20 pointer-events-none" />

                                    {/* Digital scan line effect */}
                                    <motion.div
                                        className="absolute inset-x-0 h-[2px] bg-accent/40 blur-sm"
                                        animate={{ top: ['0%', '100%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </motion.div>

                            {/* Orbiting Rings & Nodes */}
                            <div className="absolute inset-0">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute inset-0 border border-white/5 rounded-full"
                                        style={{ margin: `${i * 15}%` }}
                                    />
                                ))}
                            </div>

                            {/* Floating Partner Nodes */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 15 + i * 5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute inset-0 pointer-events-none"
                                    style={{ rotate: `${i * 90}deg` }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass border border-accent/30 flex items-center justify-center glow-shadow-sm bg-background/80 backdrop-blur-md pointer-events-auto hover:border-accent transition-colors cursor-pointer">
                                        <Network className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - 2 Cards */}
                    <div className="space-y-8 order-3">
                        {infoCards.filter(c => c.position.startsWith('right')).map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="glass-strong rounded-[2rem] p-8 text-center lg:text-left border border-white/10 hover:border-accent/60 hover:shadow-[0_0_20px_hsla(var(--accent),0.4)] transition-all duration-500 group relative overflow-hidden bg-card/5"
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-[2rem]"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)',
                                        backgroundSize: '200% 2px',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 0%', '200% 0%', '200% 100%', '0% 100%', '0% 0%'],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                                <div className="flex flex-col lg:items-start items-center relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                                        <img src={card.icon} alt={card.title} className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">{card.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground transition-colors">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;

