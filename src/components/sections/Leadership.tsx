import { Reveal } from "@/components/shared/Reveal";
import naodAsset from "@/assets/naod.png.asset.json";
import natnaelAsset from "@/assets/semir.png.asset.json";
import semirAsset from "@/assets/natnael.png.asset.json";
import { motion } from "motion/react";
import { Github, Instagram, Linkedin, Send, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const TELEGRAM_DRAFT = encodeURIComponent("Hi Damapunt Technologies, I need a website.");

const TikTokIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8.5a6.5 6.5 0 0 1-5-2.4V16a5 5 0 1 1-5-5" />
    <path d="M16 3v3" />
  </svg>
);

type Social = { label: string; href: string; icon: ReactNode };

const socialsFor = (handle: string): Social[] => [
  { label: "Telegram", href: `https://t.me/${handle}?text=${TELEGRAM_DRAFT}`, icon: <Send size={16} /> },
  { label: "TikTok", href: `https://www.tiktok.com/@${handle}`, icon: TikTokIcon },
  { label: "Instagram", href: `https://instagram.com/${handle}`, icon: <Instagram size={16} /> },
  { label: "GitHub", href: `https://github.com/${handle}`, icon: <Github size={16} /> },
  { label: "LinkedIn", href: `https://www.linkedin.com/in/${handle}`, icon: <Linkedin size={16} /> },
];

function SocialRow({ handle }: { handle: string }) {
  const socials = socialsFor(handle);
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {socials.map((s) => (
        <li key={s.label}>
          <motion.a
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${s.label} — @${handle}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.02] text-silver transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-glow"
          >
            {s.icon}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

function PersonCard({
  role,
  title,
  name,
  bio,
  img,
  handle,
}: {
  role: string;
  title: string;
  name: string;
  bio: string;
  img: string;
  handle?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-surface p-2 shadow-[var(--shadow-card)]"
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
      <div className="flex flex-1 flex-col px-5 py-6">
        <p className="text-xs uppercase tracking-[0.22em] text-primary-glow">{title}</p>
        <h3 className="mt-2 font-display text-3xl leading-tight">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-silver/75">{bio}</p>
        {handle && <SocialRow handle={handle} />}
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <PersonCard
              role="Founder & CEO"
              title="FOUNDER & CEO"
              name="Naod Teferi"
              bio="Naod Teferi is the Founder and CEO of Damapunt Technologies. Passionate about software engineering, UI/UX design, and digital innovation, he leads the company with a focus on building high-quality websites, enterprise software, AI-powered solutions, and scalable digital products. His vision is to create technology that empowers businesses, delivers measurable value, and showcases world-class software engineering from Ethiopia to clients around the globe."
              img={naodAsset.url}
              handle="Frontmanx12"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PersonCard
              role="Strategic Partner"
              title="CO-FOUNDER & BUSINESS PARTNER"
              name="Natnael Gorems"
              bio="Natnael is a strategic partner at Damapunt Technologies, contributing to business development, collaboration, and long-term growth. Together with the team, he helps strengthen client relationships and supports the company's mission of delivering innovative digital solutions with professionalism and reliability."
              img={natnaelAsset.url}
              handle="Frontmanx12"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <PersonCard
              role="Creative Partner"
              title={"\u00A0CREATIVE DIRECTOR"}
              name="Semir"
              bio="Semir is the Creative Partner at Damapunt Technologies, specializing in professional video editing, motion graphics, branding, and visual design. He transforms ideas into compelling visual experiences that strengthen brand identity, enhance storytelling, and deliver engaging content across digital platforms. His creativity and attention to detail help businesses communicate with impact through high-quality design and cinematic visuals."
              img={semirAsset.url}
              handle="Frontmanx12"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
