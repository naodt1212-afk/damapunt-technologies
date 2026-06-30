import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Stat } from "@/components/shared/Stat";
import portrait from "@/assets/portrait-hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.92]);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.35]" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(15,138,95,0.35), transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y, scale }} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-silver/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Damapunt Technologies · Ethiopia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.98] tracking-tight"
          >
            <span className="text-gradient block">Building Premium</span>
            <span className="block">
              Digital <em className="not-italic text-gradient-green">Products.</em>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-silver/80 sm:text-lg"
          >
            Damapunt Technologies designs and develops websites, enterprise software, AI solutions,
            SaaS platforms, mobile applications, and digital experiences that help ambitious businesses
            grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact">
              Start Your Project <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="#projects" variant="ghost">
              View Portfolio
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/5 pt-10 sm:grid-cols-4"
          >
            <Stat value={5} suffix="+" label="Years Experience" />
            <Stat value={40} suffix="+" label="Projects Completed" />
            <Stat value={30} suffix="+" label="Happy Clients" />
            <Stat value={24} suffix="/7" label="Support Availability" />
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-80"
            style={{ background: "radial-gradient(closest-side, rgba(15,138,95,0.35), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-[var(--shadow-elevated)]">
            <img
              src={portrait}
              alt="Naod Teferi, Founder & CEO of Damapunt Technologies"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
            {/* color grade overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />

            {/* Floating UI chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Live
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl glass px-4 py-3"
            >
              <div>
                <p className="font-display text-base leading-none">Naod Teferi</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-silver/70">
                  Founder & CEO
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] text-primary-glow">
                <Sparkles size={12} /> Engineering
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
