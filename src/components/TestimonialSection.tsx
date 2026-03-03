import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Mail, Calendar, Layout, Share2, Database, Play, Cloud, Slack, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "CTO, ApexCommerce Group",
    quote: "Our data synchronization delays dropped by 92%. We moved from hourly batch updates to real-time consistency across 40+ enterprise systems.",
    color: "bg-purple-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    avatar: "/testimonial.png"
  },
  {
    name: "Priya Natarajan",
    role: "Head of Data Engineering, FinSphere Tech",
    quote: "We reduced processing errors by 88% within the first quarter. Manual reconciliation that took days now completes in minutes.",
    color: "bg-cyan-500",
    glow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    avatar: "/testimonial (2).png"
  },
  {
    name: "Daniel Brooks",
    role: "VP of Technology, CloudBridge",
    quote: "Integration timelines accelerated by 75% after deploying DCSyncAI X.1. Complex enterprise connections now launch in under two weeks.",
    color: "bg-indigo-500",
    glow: "shadow-[0_0_15px_rgba(99,102,241,0.4)]",
    avatar: "/testimonial (3).png"
  },
  {
    name: "Laura Kim",
    role: "Chief Data Officer, RetailNova",
    quote: "Operational reporting latency decreased from hours to seconds. Over 30 disconnected tools now run through one unified intelligent pipeline.",
    color: "bg-blue-500",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]",
    avatar: "/testimonial (4).png"
  },
  {
    name: "Andreas Müller",
    role: "Director of Infrastructure, LogiChain Global",
    quote: "We now process over 120M synchronized data events daily without performance degradation or infrastructure strain.",
    color: "bg-violet-500",
    glow: "shadow-[0_0_15px_rgba(139,92,246,0.4)]",
    avatar: "/testimonial (5).png"
  },
  {
    name: "James O'Connor",
    role: "Founder & CEO, SyncWave Analytics",
    quote: "Full observability across mission-critical workflows transformed our operations. Data inconsistencies dropped by 90% in just three months.",
    color: "bg-emerald-500",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    avatar: "/testimonial (6).png"
  }
];

const sourceIcons = [
  { icon: Mail, color: "text-accent" },
  { icon: Calendar, color: "text-accent" },
  { icon: Database, color: "text-accent" },
];

const targetIcons = [
  { icon: Layout, color: "text-accent" },
  { icon: Share2, color: "text-accent" },
  { icon: Slack, color: "text-accent" },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-background" ref={ref}>
      {/* Intense Cyan Background Glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Experiences from  <span className="text-gradient">Enterprise AI Teams</span>
          </motion.h2>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 max-w-[1400px] mx-auto">

          {/* LEFT: Converging Sources */}
          <div className="relative flex items-center gap-8 h-[600px]">
            <div className="flex flex-col gap-12">
              {sourceIcons.map((item, i) => (
                <motion.div key={i} className="flex items-center gap-4 relative group">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <Play className="w-2.5 h-2.5 text-accent fill-accent translate-x-1" />
                  <svg className="absolute left-14 top-1/2 w-24 h-[180px] -translate-y-1/2 pointer-events-none overflow-visible hidden lg:block" viewBox="0 0 100 100">
                    <path
                      d={i === 0 ? "M 0 50 C 50 50, 50 150, 100 150" : i === 2 ? "M 0 50 C 50 50, 50 -50, 100 -50" : "M 0 50 L 100 50"}
                      stroke="hsl(var(--accent)/0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
            <div className="relative w-14 h-14 rounded-full bg-slate-900 border border-accent/30 flex items-center justify-center z-20 shadow-[0_0_30px_hsla(var(--accent),0.3)]">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* CENTER: Main Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex-shrink-0 w-full max-w-5xl px-4 z-10"
          >
            <div className="bg-card/30 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-2 shadow-2xl relative">
              <div className="bg-black/60 rounded-[2.8rem] p-8 h-[620px] flex flex-col relative overflow-hidden">

                {/* Top Pill Area */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl max-w-3xl">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 tracking-wide text-center leading-relaxed">
                      Engineering teams at the world's most demanding enterprises rely on <span className="text-accent">DCSyncAI X.1</span> to unify, automate, and optimize their mission-critical AI data pipelines.
                    </span>
                  </div>
                </div>

                {/* Grid of Testimonial Square Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1 relative z-10 overflow-y-auto custom-scrollbar pr-1">
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="bg-white/5 border border-white/5 p-5 rounded-[1.8rem] flex flex-col justify-between group transition-all"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-1.5 h-1.5 rounded-full ${t.color} ${t.glow}`} />
                          <Quote className="w-3 h-3 text-white/20 group-hover:text-accent/40 transition-colors" />
                        </div>
                        <p className="text-[13px] text-slate-300 leading-relaxed font-medium line-clamp-3">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                        <img src={t.avatar} className="w-8 h-8 rounded-full border border-slate-900" alt="avatar" />
                        <div className="overflow-hidden">
                          <p className="text-[11px] font-bold text-foreground truncate">{t.name}</p>
                          <p className="text-[9px] text-muted-foreground truncate uppercase tracking-tighter">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              </div>

              {/* Central Bottom Engine HUB */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative flex items-center justify-center"
                >
                  <div className="absolute inset-0 w-28 h-28 rounded-full border border-accent/20 animate-ping-slow" />
                  <div className="w-20 h-20 rounded-full bg-[#0f172a] border-2 border-accent/30 flex items-center justify-center shadow-[0_0_40px_hsla(var(--accent),0.3)]">
                    <Database className="w-10 h-10 text-accent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Converging Outputs */}
          <div className="relative flex items-center gap-8 h-[600px]">
            <div className="relative w-14 h-14 rounded-full bg-slate-900 border border-accent/30 flex items-center justify-center z-20 shadow-[0_0_30px_hsla(var(--accent),0.3)]">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <Share2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col gap-12">
              {targetIcons.map((item, i) => (
                <motion.div key={i} className="flex items-center gap-4 relative group">
                  <Play className="w-2.5 h-2.5 text-accent fill-accent rotate-180 -translate-x-1" />
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <svg className="absolute right-14 top-1/2 w-24 h-[180px] -translate-y-1/2 pointer-events-none overflow-visible hidden lg:block" viewBox="0 0 100 100">
                    <path
                      d={i === 0 ? "M 100 50 C 50 50, 50 150, 0 150" : i === 2 ? "M 100 50 C 50 50, 50 -50, 0 -50" : "M 100 50 L 0 50"}
                      stroke="hsl(var(--accent)/0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
