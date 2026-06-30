import { Reveal } from "@/components/shared/Reveal";
import { motion } from "motion/react";

const steps = [
  { n: "01", t: "Discovery", d: "Understand goals, constraints, and what success looks like." },
  { n: "02", t: "Research", d: "Audit users, competitors, and the underlying problem space." },
  { n: "03", t: "Design", d: "Systems, flows, and interfaces engineered around clarity." },
  { n: "04", t: "Development", d: "Modern stack, type-safe, tested, and reviewed every step." },
  { n: "05", t: "Testing", d: "QA, accessibility, performance — held to a high bar." },
  { n: "06", t: "Deployment", d: "Resilient CI/CD, monitoring, and observability from day one." },
  { n: "07", t: "Support", d: "Ongoing iteration, evolution, and partnership." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Process</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            <span className="text-gradient">A clear path</span>{" "}
            <span className="text-gradient-green">from idea to launch.</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-7">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl border border-white/[0.06] bg-surface p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-mono tracking-tight text-primary-glow ring-1 ring-primary/20">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-silver/70">{s.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
