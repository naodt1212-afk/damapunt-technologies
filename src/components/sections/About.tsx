import { Reveal } from "@/components/shared/Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
              <span className="text-gradient">A studio engineered</span>
              <br />
              <span className="text-gradient-green">for compounding quality.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-silver/85">
              <p>
                Damapunt Technologies builds software that combines clean design, modern engineering
                and scalable technology. We focus on solving real business problems through powerful
                digital products — delivering solutions that are fast, secure, and built for
                long-term growth.
              </p>
              <p className="text-silver/65">
                We work as a focused team — designers, engineers, and product thinkers — embedded
                deeply with each client. No hand-offs, no junior shuffling, no lost context.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
              {[
                { k: "100%", v: "On-time delivery" },
                { k: "0", v: "Outsourced code" },
                { k: "<24h", v: "Avg. response time" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-foreground">{s.k}</div>
                  <div className="mt-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
