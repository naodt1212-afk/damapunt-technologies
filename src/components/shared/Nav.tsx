import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], ["rgba(11,11,11,0)", "rgba(11,11,11,0.75)"]);
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur as unknown as string }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/0 transition-colors"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
            <span className="font-display text-xl text-primary-glow">D</span>
          </span>
          <span className="font-display text-lg tracking-tight">Damapunt</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-silver/80 transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-glow hover:shadow-[var(--shadow-glow)] md:inline-flex"
        >
          Start Project
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div
        className={cn(
          "overflow-hidden border-t border-white/5 bg-background/95 backdrop-blur-xl transition-all md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-silver hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
