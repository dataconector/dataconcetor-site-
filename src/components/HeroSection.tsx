import { motion } from "framer-motion";
import { Shield, Zap, ArrowRight, MousePointer2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hd-section relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-radial-glow opacity-30 pointer-events-none" />

      {/* ── SVG BACKGROUND: halo ring + sinusoidal wave curves ── */}
      <svg
        className="hd-bg-svg"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="lineGlowOuter" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="14" result="blur" />
          </filter>

          <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="ringGlowOuter" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="18" result="blur" />
          </filter>
        </defs>

        {/* ═══ HALF-CIRCLE ARC (dome above heading) ═══ */}
        <path
          d="M 445 295 A 275 275 0 0 0 995 295"
          fill="none"
          stroke="hsla(244,80%,73%,0.28)"
          strokeWidth="10"
          filter="url(#ringGlowOuter)"
        />
        <path
          d="M 445 295 A 275 275 0 0 0 995 295"
          fill="none"
          stroke="hsla(244,80%,73%,0.70)"
          strokeWidth="1.5"
          filter="url(#ringGlow)"
        />

        {/* ═══ LEFT S-CURVE WAVE ═══ */}
        <path
          d="M 0 310 C  90 370, 190 220, 290 295 C 360 345, 400 310, 445 295"
          fill="none"
          stroke="hsla(244,80%,73%,0.24)"
          strokeWidth="10"
          filter="url(#lineGlowOuter)"
        />
        <path
          d="M 0 310 C  90 370, 190 220, 290 295 C 360 345, 400 310, 445 295"
          fill="none"
          stroke="hsla(244,80%,73%,0.65)"
          strokeWidth="1.4"
          filter="url(#lineGlow)"
        />

        {/* ═══ RIGHT S-CURVE WAVE (mirror) ═══ */}
        <path
          d="M 1440 310 C 1350 370, 1250 220, 1150 295 C 1080 345, 1040 310,  995 295"
          fill="none"
          stroke="hsla(244,80%,73%,0.24)"
          strokeWidth="10"
          filter="url(#lineGlowOuter)"
        />
        <path
          d="M 1440 310 C 1350 370, 1250 220, 1150 295 C 1080 345, 1040 310,  995 295"
          fill="none"
          stroke="hsla(244,80%,73%,0.65)"
          strokeWidth="1.4"
          filter="url(#lineGlow)"
        />
      </svg>

      {/* ── CONTENT ── */}
      <div className="hd-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8 backdrop-blur-md"
        >
          <Zap className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-accent">v4.0 Alpha Available</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="hd-heading !leading-[1.1]"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          Instant Data Synchronization 
 <br />
          <span className="text-gradient">with DCSyncAI X.1</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hd-sub text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          Synchronize and unify your enterprise data pipelines with GPU-powered AI, zero silos, zero delays, all at planetary-scale speed.

        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <a href="#demo" className="hd-btn !mb-0 px-4 py-1.5 text-sm flex items-center gap-2 shadow-2xl shadow-accent/20">
            Start Deploying
          </a>
          <a href="#features" className="px-6 py-2.5 rounded-full font-heading font-semibold glass border border-white/10 text-foreground transition-all hover:bg-white/5 text-sm flex items-center gap-2">
            View Ecosystem <MousePointer2 className="w-4 h-4" />
          </a>
        </motion.div>

        {/* ── Feature cards ── */}
        <motion.div
          className="hd-cards"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: "easeOut" }}
        >
          {/* Card 1 */}
          <div className="hd-card group glass-strong !bg-card/5 hover:!bg-card/10 transition-all duration-500">
            <div className="hd-card-watermark scale-125 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700">
              <img src="/hero icon.png" alt="" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="hd-card-icon bg-gradient-accent glow-shadow-sm group-hover:glow-shadow transition-all flex items-center justify-center p-1.5">
              <img src="/hero icon.png" alt="Secure & Transparent" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <h3 className="hd-card-title group-hover:text-accent transition-colors">Secure &amp; Transparent</h3>
            <p className="hd-card-desc text-muted-foreground/80 leading-relaxed mb-6">
              Your assets are safeguarded with audited AI pipelines, advanced
              encryption, and complete transparency.
            </p>
            <a href="#features" className="hd-card-link flex items-center gap-2 font-bold text-accent">
              Explore Protocol <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="hd-card group glass-strong !bg-card/5 hover:!bg-card/10 transition-all duration-500">
            <div className="hd-card-watermark scale-125 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700">
              <img src="/hero icon (2).png" alt="" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="hd-card-icon bg-gradient-accent glow-shadow-sm group-hover:glow-shadow transition-all flex items-center justify-center p-1.5">
              <img src="/hero icon (2).png" alt="10× Faster Inference" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <h3 className="hd-card-title group-hover:text-accent transition-colors">10× Faster Inference</h3>
            <p className="hd-card-desc text-muted-foreground/80 leading-relaxed mb-6">
              Maximize throughput with GPU-accelerated model inference —
              flexible, reliable, and purpose-built for scale.
            </p>
            <a href="#features" className="hd-card-link flex items-center gap-2 font-bold text-accent">
              View Benchmarks <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom blend into next section */}
      <div className="hd-fade-bottom" />
    </section>
  );
};

export default HeroSection;

