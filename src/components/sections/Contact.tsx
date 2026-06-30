import { Reveal } from "@/components/shared/Reveal";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { useState } from "react";
import { Mail, Phone, Send, Loader2, Check } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import { Socials } from "@/components/sections/Socials";

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setState("loading");
    const fd = new FormData(e.currentTarget);
    try {
      await submitContact({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setState("done");
      e.currentTarget.reset();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not send. Try Telegram instead.");
      setState("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02]">
            <span className="text-gradient">Let's build something</span>{" "}
            <span className="text-gradient-green">extraordinary.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/[0.06] bg-surface p-7 shadow-[var(--shadow-card)] sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" label="Your name" placeholder="Jane Doe" />
                <Field name="email" type="email" label="Email" placeholder="[email protected]" />
              </div>
              <div className="mt-5">
                <Field
                  name="message"
                  label="Tell us about your project"
                  placeholder="What are you building? What's the goal? Any timeline?"
                  textarea
                />
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <MagneticButton onClick={() => {}}>
                  <button type="submit" disabled={state === "loading"} className="inline-flex items-center gap-2">
                    {state === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending…
                      </>
                    ) : state === "done" ? (
                      <>
                        <Check size={16} /> Message sent
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send Message
                      </>
                    )}
                  </button>
                </MagneticButton>
                {state === "error" && (
                  <span className="text-xs text-destructive">{err}</span>
                )}
                {state === "done" && (
                  <span className="text-xs text-primary-glow">
                    We'll be in touch within 24 hours.
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <a
                href="mailto:naodt1212@gmail.com"
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-surface px-6 py-5 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</p>
                    <p className="mt-0.5 text-foreground">naodt1212@gmail.com</p>
                  </div>
                </div>
                <span className="text-xs text-silver/60">→</span>
              </a>
              <a
                href="tel:+251983118903"
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-surface px-6 py-5 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</p>
                    <p className="mt-0.5 text-foreground">+251 98 311 8903</p>
                  </div>
                </div>
                <span className="text-xs text-silver/60">→</span>
              </a>

              <div className="rounded-2xl border border-white/[0.06] bg-surface p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Social</p>
                <div className="mt-4">
                  <Socials />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                <iframe
                  title="Damapunt Technologies — Addis Ababa"
                  className="h-56 w-full opacity-90"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=38.71%2C8.95%2C38.83%2C9.06&layer=mapnik&marker=9.005401%2C38.763611"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text", textarea = false,
}: {
  name: string; label: string; placeholder: string; type?: string; textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required
          placeholder={placeholder}
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-white/8 bg-background/60 px-4 py-3 text-foreground placeholder:text-silver/40 outline-none transition-colors focus:border-primary/50"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="mt-2 w-full rounded-xl border border-white/8 bg-background/60 px-4 py-3 text-foreground placeholder:text-silver/40 outline-none transition-colors focus:border-primary/50"
        />
      )}
    </label>
  );
}
