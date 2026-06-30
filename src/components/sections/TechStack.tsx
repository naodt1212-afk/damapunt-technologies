import { Reveal } from "@/components/shared/Reveal";

const stack = [
  "React", "Next.js", "Laravel", "Node.js", "Flutter", "Python", "Docker",
  "Firebase", "Supabase", "AWS", "MongoDB", "PostgreSQL", "OpenAI",
];

export function TechStack() {
  const row = [...stack, ...stack];
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Stack</p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)]">
                <span className="text-gradient">Modern tools.</span>{" "}
                <span className="text-gradient-green">Production-grade discipline.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-silver/70">
              We pick the right tool for each problem — never trendy for the sake of it.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-3 px-6">
          {row.map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/8 bg-surface/70 px-5 py-2.5 text-sm text-silver/90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
              {t}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
