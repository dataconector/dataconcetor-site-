import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 overflow-hidden bg-background" ref={ref}>
      {/* Background glow using site color code */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none opacity-30" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1000px] mx-auto bg-black rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl h-auto md:h-[420px]"
        >
          {/* Background Image with Overlay */}
          <div className="relative w-full h-[400px] md:h-full overflow-hidden">
            <img src="/CTA background.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Take Control of Your Data Pipelines
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate-300 text-lg max-w-2xl mb-8"
              >
                Power your business with DCSyncAI X.1 and experience frictionless data operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110 transition-all">
                  Enable Sync
                </button>
                <Link to="/dcsyncai" className="px-8 py-3 rounded-full border border-white/30 text-white font-heading font-semibold hover:bg-white/10 transition-all">
                  Explore Features
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
