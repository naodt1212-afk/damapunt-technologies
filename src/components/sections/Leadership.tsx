import { Reveal } from "@/components/shared/Reveal";
import founder from "@/assets/portrait-hero.jpg";
import partner from "@/assets/portrait-partner.jpg";
import { motion } from "motion/react";

function PersonCard({
  role,
  title,
  name,
  bio,
  img,
}: {
  role: string;
  title: string;
  name: string;
  bio: string;
  img: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-surface p-2 shadow-[var(--shadow-card)]"
    >
      <div className="relative overflow-hidden rounded-[1.25rem]">
        <img
          src={img}
          alt={`Portrait of ${name}`}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-silver">
          {role}
        </div>
      </div>
      <div className="px-5 py-6">
        <p className="text-xs uppercase tracking-[0.22em] text-primary-glow">{title}</p>
        <h3 className="mt-2 font-display text-3xl leading-tight">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-silver/75">{bio}</p>
      </div>
    </motion.div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Leadership</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            <span className="text-gradient">The people</span>{" "}
            <span className="text-gradient-green">behind the work.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <PersonCard
              role="Founder & CEO"
              title="Meet Our Founder & CEO"
              name="Naod Teferi"
              bio="Naod Teferi is the Founder and CEO of Damapunt Technologies. Passionate about software engineering, UI/UX design, and digital innovation, he leads the company with a focus on building high-quality websites, enterprise software, AI-powered solutions, and scalable digital products. His vision is to create technology that empowers businesses, delivers measurable value, and showcases world-class software engineering from Ethiopia to clients around the globe."
              img={founder}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PersonCard
              role="Strategic Partner"
              title="Strategic Partner"
              name="Natnael"
              bio="Natnael is a strategic partner at Damapunt Technologies, contributing to business development, collaboration, and long-term growth. Together with the team, he helps strengthen client relationships and supports the company's mission of delivering innovative digital solutions with professionalism and reliability."
              img={partner}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
