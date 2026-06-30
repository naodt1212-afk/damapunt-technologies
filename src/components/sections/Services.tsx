import { Reveal } from "@/components/shared/Reveal";
import {
  Globe, AppWindow, Building2, BrainCircuit, Database,
  Palette, Smartphone, Cloud, Sparkles, LifeBuoy,
} from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode } from "react";

const services: Array<{ icon: ReactNode; title: string; desc: string; span?: string }> = [
  { icon: <Globe size={22} />, title: "Website Development", desc: "Cinematic marketing sites that convert and load fast.", span: "lg:col-span-2" },
  { icon: <AppWindow size={22} />, title: "Web Applications", desc: "SaaS, dashboards, and complex product surfaces." },
  { icon: <Building2 size={22} />, title: "Enterprise Software", desc: "Mission-critical systems built for scale and audit." },
  { icon: <BrainCircuit size={22} />, title: "AI Solutions", desc: "LLM agents, automation, and intelligent workflows." },
  { icon: <Database size={22} />, title: "ERP Systems", desc: "Inventory, finance, HR — unified and modern.", span: "lg:col-span-2" },
  { icon: <Palette size={22} />, title: "UI/UX Design", desc: "Design systems and product flows that feel inevitable." },
  { icon: <Smartphone size={22} />, title: "Mobile Apps", desc: "Native and Flutter apps with premium polish." },
  { icon: <Cloud size={22} />, title: "Cloud Solutions", desc: "AWS, serverless, and resilient infrastructure." },
  { icon: <Sparkles size={22} />, title: "Brand Identity", desc: "Logos, systems, and brand voice for tech-first companies." },
  { icon: <LifeBuoy size={22} />, title: "Maintenance & Support", desc: "Long-term partnership, monitoring, evolution." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Services</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02]">
                <span className="text-gradient">Everything required to ship</span>
                <br />
                <span className="text-gradient-green">world-class software.</span>
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-silver/70 lg:block">
              Ten disciplines, one studio. We staff every project end-to-end so quality compounds.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} className={s.span}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-surface p-7 transition-colors hover:border-primary/30"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(closest-side, rgba(15,138,95,0.5), transparent)" }}
                />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20">
                    {s.icon}
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver/70">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
