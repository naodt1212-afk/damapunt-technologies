import { Reveal } from "@/components/shared/Reveal";
import {
  RefreshCcw, Layers, Cpu, MessagesSquare, Search, Code2, Network, Heart,
} from "lucide-react";
import { type ReactNode } from "react";

const items: Array<{ icon: ReactNode; t: string; d: string }> = [
  { icon: <RefreshCcw size={20} />, t: "Unlimited Revisions", d: "We iterate until it's right — no nickel-and-diming." },
  { icon: <Layers size={20} />, t: "Premium UI/UX", d: "Design systems thought through to the last pixel." },
  { icon: <Cpu size={20} />, t: "Modern Technologies", d: "Battle-tested stacks, type-safe, observability built in." },
  { icon: <MessagesSquare size={20} />, t: "Fast Communication", d: "Direct line to senior engineers — no account managers." },
  { icon: <Search size={20} />, t: "SEO Optimized", d: "Structured data, sitemaps, performance, and semantics." },
  { icon: <Code2 size={20} />, t: "Clean Code", d: "Readable, tested, and ready for the next engineer." },
  { icon: <Network size={20} />, t: "Scalable Architecture", d: "Designed to grow with you — not be rebuilt." },
  { icon: <Heart size={20} />, t: "Long-Term Support", d: "We stay with the products we ship." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Damapunt</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            <span className="text-gradient">Eight reasons clients</span>{" "}
            <span className="text-gradient-green">choose us — and stay.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-white/[0.06] bg-surface p-6 transition-colors hover:border-primary/30">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-glow ring-1 ring-primary/20">
                  {it.icon}
                </div>
                <h3 className="mt-5 font-display text-lg">{it.t}</h3>
                <p className="mt-1.5 text-sm text-silver/70 leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
