import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

type Project = {
  title: string;
  category: string;
  desc: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Dire Dawa Ras Hotel",
    category: "Hotel Website",
    desc: "Refined marketing site for a heritage hotel in Dire Dawa with bookings, rooms, and dining.",
    url: "https://www.diredawarashotel.com/",
  },
  {
    title: "Engebeyay",
    category: "E-commerce Platform",
    desc: "Multi-vendor e-commerce platform with discovery, cart, and order flows.",
    url: "https://engebeyay.com/",
  },
  {
    title: "My Chicken Addis",
    category: "Poultry Management Platform",
    desc: "Operational platform for tracking flocks, feed, eggs, and yield at scale.",
    url: "https://mychickenaddis.base44.app/",
  },
  {
    title: "Dagim Coffee",
    category: "Coffee Website",
    desc: "Storytelling website for a specialty Ethiopian coffee brand.",
    url: "https://dagimcoffee.netlify.app/",
  },
  {
    title: "Ethio Teftef",
    category: "Link in Bio Platform",
    desc: "Beautiful link-in-bio platform tailored for Ethiopian creators.",
    url: "https://ethioteftef.base44.app/",
  },
  {
    title: "Zegora Agency",
    category: "Digital Marketing Agency Website",
    desc: "A premium digital marketing agency website designed with a modern user experience, responsive layouts, elegant branding, and high-performance web technologies that help businesses establish a strong online presence.",
    url: "https://zegoraagency.com/",
  },
];

function shotUrl(target: string) {
  const clean = target.replace(/^https?:\/\//, "");
  return `https://image.thum.io/get/width/1400/crop/900/noanimate/https://${clean}`;
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Selected Work</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02]">
                <span className="text-gradient">Shipped products,</span>{" "}
                <span className="text-gradient-green">live in the world.</span>
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-silver/70 lg:block">
              Real screenshots, real URLs. Click any card to visit the live site.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.url} delay={i * 0.06}>
              <motion.a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="group relative block overflow-hidden rounded-3xl border border-white/[0.06] bg-surface shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={shotUrl(p.url)}
                    alt={`${p.title} live screenshot`}
                    loading="lazy"
                    className="h-full w-full scale-100 object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-silver">
                    {p.category}
                  </div>
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm text-silver/70">{p.desc}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-silver transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary-glow">
                    Visit <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
