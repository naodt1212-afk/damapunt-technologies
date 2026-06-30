import { Socials } from "@/components/sections/Socials";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <span className="font-display text-xl text-primary-glow">D</span>
              </span>
              <span className="font-display text-lg">Damapunt Technologies</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-silver/65">
              Premium software engineering from Ethiopia — websites, enterprise software, AI, and
              digital products for ambitious teams.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-silver/85">
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
              <li><a href="#process" className="hover:text-foreground">Process</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
            <div className="mt-4">
              <Socials />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Damapunt Technologies. All rights reserved.</p>
          <p>Crafted with care in Addis Ababa.</p>
        </div>
      </div>
    </footer>
  );
}
