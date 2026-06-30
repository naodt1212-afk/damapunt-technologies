
# Damapunt Technologies — Cinematic Portfolio

A single-page, dark, luxurious site at `/` (with optional supporting routes) styled like Apple / Linear / Vercel / Stripe. Built on the existing TanStack Start + Tailwind v4 stack. Includes a real AI assistant powered by Lovable Cloud + Lovable AI.

## 1. Foundation & design system

- Update `src/styles.css` tokens to the Damapunt palette:
  - `--background` `#0B0B0B`, `--surface` `#141414`, `--foreground` `#FFFFFF`, `--muted-foreground` `#D8D8D8`, `--primary` `#0F8A5F` (brand green), plus subtle green glow + glass tokens.
  - Gradient + shadow tokens: `--gradient-hero`, `--gradient-card`, `--shadow-glow`, `--shadow-elevated`.
- Add font stack via `<link>` in `__root.tsx` (no remote `@import`): display = **Instrument Serif** for accents, primary = **Geist** / **Inter Tight** for UI, mono = **JetBrains Mono**. Map in `@theme`.
- Global: dark only, smooth scroll, custom cursor glow, noise overlay, selection styling.
- Install `motion` (Motion for React) for reveals, parallax, magnetic buttons.

## 2. Hero (right-side portrait)

- Left: kicker "Damapunt Technologies", H1 "Building Premium Digital Products.", subhead from brief, two CTAs ("Start Your Project" → contact, "View Portfolio" → projects), animated stat row (Years Experience, Projects Completed, Happy Clients, 24/7 Support) with count-up on view.
- Right: user's uploaded portrait (awaiting re-upload) rendered inside a cinematic frame — soft radial glow, glass card, floating UI chips (no text inside the image, no flag). Use `lovable-assets` once the file lands; until then a placeholder asset with the same frame so layout doesn't shift.
- Background: layered gradients + subtle grid + green spotlight.

## 3. Sections (single-page, anchored)

All sections are components in `src/components/sections/`, composed by `src/routes/index.tsx`:

1. **Services** — 10 premium cards with icon, title, one-line value prop, hover tilt + green border glow. Bento-grid layout (mix of sizes).
2. **Projects** — 6 cards using **thum.io** live screenshots (`https://image.thum.io/get/width/1200/crop/800/https://...`), with title, category, short copy, "Visit Website" external link. Hover: scale + parallax shine.
3. **About** — Editorial split layout with large serif headline + copy from brief + 3 supporting metrics.
4. **Founder & CEO** — Naod Teferi portrait card (uses uploaded portrait again, smaller crop) + bio.
5. **Strategic Partner** — Natnael card, elegant placeholder portrait (initials monogram on dark glass — no fake photo).
6. **Tech Stack** — Marquee of 13 technologies with logos (lucide/simple-icons).
7. **Process** — Horizontal interactive timeline (7 steps) with scroll-snapped progress.
8. **Why Choose Us** — 8 minimalist feature rows.
9. **Contact** — Large headline, contact form (name/email/message → stored in Cloud), email/phone/Telegram, social cluster, embedded map iframe (OpenStreetMap of Addis Ababa).
10. **Footer** — minimal, nav, socials, © Damapunt Technologies.

## 4. Social links

Floating + footer cluster. All link to `@Frontmanx12`:
- Telegram: `https://t.me/Frontmanx12?text=Hi%20Damapunt%20Technologies%2C%20I%20need%20a%20website.` (prefilled draft)
- TikTok: `https://www.tiktok.com/@Frontmanx12`
- Instagram: `https://instagram.com/Frontmanx12`
- GitHub: `https://github.com/Frontmanx12`
- LinkedIn: `https://www.linkedin.com/in/Frontmanx12`
- Email: `mailto:` (ask user for address during build; default placeholder noted)

Magnetic hover + green underline animation.

## 5. Damapunt AI assistant (real AI)

- Enable **Lovable Cloud** + provision `LOVABLE_API_KEY`.
- Server route `src/routes/api/chat.ts` using AI SDK + `createLovableAiGatewayProvider` → `google/gemini-3-flash-preview`. System prompt scopes the assistant to Damapunt services, pricing inquiries (qualitative), portfolio, process, tech topics, FAQs; professional + friendly tone.
- Persistent floating button (bottom-right, every page) with green glow.
- Glass panel popup with smooth scale/fade open, AI Elements (`conversation`, `message`, `prompt-input`, `shimmer`) for transcript, streaming typing animation, no persistence (single session, in-memory) per spec — no thread list.
- Branded as "Damapunt AI" with custom monogram avatar (not Sparkles).

## 6. Contact form storage

- Cloud table `contact_messages` (id, name, email, message, created_at) with RLS: insert open to anon, select restricted to service role. Server function `submitContact` validates with Zod and inserts via server publishable client.

## 7. Animations & polish

- Motion for React: section reveal-on-scroll, parallax on hero portrait + project cards, magnetic CTA buttons, marquee tech stack, count-up stats, cursor glow follower.
- GPU-friendly transforms only; `prefers-reduced-motion` respected.
- Responsive: bento collapses to single column on mobile, hero stacks portrait below copy on `<lg`, sticky AI button avoids footer overlap.

## 8. SEO & metadata

- `__root.tsx` head: base OG/twitter defaults.
- `index.tsx` head: title "Damapunt Technologies — Premium Software Engineering from Ethiopia", description, og:image (hero portrait once available), canonical.
- `public/llms.txt` + `public/robots.txt`.
- Semantic landmarks, alt text, lazy-loaded screenshots.

## Technical details

```text
src/
  routes/
    __root.tsx              (font links, global head)
    index.tsx               (composes all sections)
    api/chat.ts             (AI SDK streaming endpoint)
  components/
    sections/
      Hero.tsx Services.tsx Projects.tsx About.tsx
      Founder.tsx Partner.tsx TechStack.tsx Process.tsx
      WhyUs.tsx Contact.tsx Footer.tsx
    ai/
      DamapuntAI.tsx        (floating button + glass panel)
    shared/
      MagneticButton.tsx Reveal.tsx Marquee.tsx CursorGlow.tsx
      Stat.tsx GlassCard.tsx
  lib/
    ai-gateway.server.ts    (Lovable AI provider helper)
    contact.functions.ts    (submitContact server fn)
  styles.css                (updated tokens)
```

Packages to add: `motion`, `@ai-sdk/react`, `ai`, `@ai-sdk/openai-compatible`, `zod`, AI Elements (`conversation message prompt-input shimmer`), `@fontsource-variable/geist`, `@fontsource/instrument-serif`, `@fontsource/jetbrains-mono`.

## Open items I'll handle during build

- Portrait: I'll wait for your re-upload; if it isn't there when I start, I'll wire a placeholder slot at the exact dimensions so swapping in the real image is one file change.
- Contact email address & phone number — I'll use placeholders ([email protected], +251 — TBD) you can replace.

Approve and I'll build it.
