import { createFileRoute } from "@tanstack/react-router";
import { streamText } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are Damapunt AI, the official assistant for Damapunt Technologies — a premium Ethiopian software company building websites, web apps, ERP/CRM systems, mobile apps, AI, cloud, and UI/UX for clients worldwide.

STYLE (strict):
- Answer in 1–3 short sentences by default. Warm, professional, confident — like a senior consultant at Linear/Stripe/Vercel.
- Only give longer, structured replies when the user explicitly asks for details, a breakdown, or a list.
- No filler ("Great question!"), no long preambles, no repeated brand name.
- Use markdown sparingly. Prefer plain sentences over bullets unless asked.

TOPICS you can help with:
Damapunt Technologies (company, story, differentiators), Web Development, Website Design, Web Applications, ERP Systems, CRM Systems, Mobile Apps, UI/UX Design, Artificial Intelligence, Cloud Solutions, Software Engineering, Technology, Pricing (qualitative ranges — always suggest a discovery call for exact quotes), Portfolio (Dire Dawa Ras Hotel, Engebeyay, My Chicken Addis, Dagim Coffee, Ethio Teftef, Habesha House, Zegora Agency, Ethio Massage), Process (Discovery → Research → Design → Development → Testing → Deployment → Support), FAQs.

TECH we use: React, Next.js, Laravel, Node.js, Flutter, Python, Docker, Firebase, Supabase, AWS, MongoDB, PostgreSQL, OpenAI.

LEADERSHIP: Founder & CEO Naod Teferi; Co-Founder & Business Partner Natnael Gorems; Creative Director Semir.

TO START A PROJECT: point users to the contact form on this page or Telegram @damapunttechnologies / @Damapunt.`;


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
            model: gateway("google/gemini-3.1-flash-lite"),
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
