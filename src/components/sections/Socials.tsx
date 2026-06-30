import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode } from "react";

const TELEGRAM_DRAFT = encodeURIComponent("Hi Damapunt Technologies, I need a website.");

const TikTokIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8.5a6.5 6.5 0 0 1-5-2.4V16a5 5 0 1 1-5-5" />
    <path d="M16 3v3" />
  </svg>
);

const socials: Array<{ label: string; href: string; icon: ReactNode }> = [
  { label: "Telegram", href: `https://t.me/Frontmanx12?text=${TELEGRAM_DRAFT}`, icon: <Send size={18} /> },
  { label: "TikTok", href: "https://www.tiktok.com/@Frontmanx12", icon: TikTokIcon },
  { label: "Instagram", href: "https://instagram.com/Frontmanx12", icon: <Instagram size={18} /> },
  { label: "GitHub", href: "https://github.com/Frontmanx12", icon: <Github size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/Frontmanx12", icon: <Linkedin size={18} /> },
  { label: "Email", href: "mailto:naodt1212@gmail.com", icon: <Mail size={18} /> },
];

export function Socials() {
  return (
    <ul className="flex flex-wrap gap-2">
      {socials.map((s) => (
        <li key={s.label}>
          <motion.a
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.label}
            className="group inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-4 py-2.5 text-sm text-silver transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-glow"
          >
            <span className="text-current">{s.icon}</span>
            <span>{s.label}</span>
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
