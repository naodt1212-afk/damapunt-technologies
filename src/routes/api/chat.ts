import { createFileRoute } from "@tanstack/react-router";
import { streamText } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are Damapunt AI, the official assistant for Damapunt Technologies — a premium Ethiopian software development company that builds world-class digital products for businesses worldwide.

Tone: professional, warm, confident, concise. Sound like a senior consultant from a top engineering studio (think Linear, Stripe, Vercel). Never robotic.

You can help with:
- Damapunt Technologies as a company, our story, and what makes us different
- Services: Website Development, Web Applications, Enterprise Software, AI Solutions, ERP Systems, UI/UX Design, Mobile Apps, Cloud Solutions, Brand Identity, Maintenance & Support
- Pricing inquiries (qualitative ranges; always recommend starting a discovery call for a precise quote)
- Portfolio & past work (Dire Dawa Ras Hotel, Engebeyay, My Chicken Addis, Dagim Coffee, Ethio Teftef, Lead Frontman AI)
- Our process: Discovery → Research → Design → Development → Testing → Deployment → Support
- Tech stack: React, Next.js, Laravel, Node.js, Flutter, Python, Docker, Firebase, Supabase, AWS, MongoDB, PostgreSQL, OpenAI
- How to start a project, expected timelines, digital transformation
- Software engineering, programming concepts, UI/UX, AI/ML, ERP systems, modern web

Leadership:
- Founder & CEO: Naod Teferi
- Strategic Partner: Natnael

If asked to start a project, point users to the contact form on this page or to Telegram @Frontmanx12. Keep replies tight (2–5 short paragraphs or a small bulleted list). Use markdown sparingly.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { messages?: Array<{ role: string; content: string }> };
          const messages = body.messages ?? [];
          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

          const gateway = createLovableAiGatewayProvider(key);
          const result = streamText({
            model: gateway("google/gemini-3-flash-preview"),
            system: SYSTEM_PROMPT,
            messages: messages.map((m) => ({
              role: m.role as "user" | "assistant",
              content: m.content,
            })),
          });

          return result.toTextStreamResponse();
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Unknown error";
          return new Response(JSON.stringify({ error: msg }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }
      },
    },
  },
});
