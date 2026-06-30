import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Send, X, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What services do you offer?",
  "How do I start a project?",
  "Show me your tech stack",
  "Estimated timeline for a SaaS?",
];

export function DamapuntAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, streaming]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I'm having trouble responding right now. Please try again — or reach us on Telegram @Frontmanx12.",
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Damapunt AI"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] ring-1 ring-primary-glow/40 sm:bottom-8 sm:right-8"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
        {open ? <X size={20} /> : <Sparkles size={20} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[640px] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl glass-strong shadow-[var(--shadow-elevated)] sm:right-8 sm:w-[420px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <span className="font-display text-lg text-primary-glow">D</span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base leading-none">Damapunt AI</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-silver/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Online
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-silver/60 hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            {/* Transcript */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-silver/85">
                    Hi — I'm <span className="text-primary-glow">Damapunt AI</span>. Ask me about our
                    services, process, portfolio, or how to start a project.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-silver/85 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-glow"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                  {m.role === "user" ? (
                    <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                      {m.content}
                    </div>
                  ) : (
                    <div className="max-w-full whitespace-pre-wrap text-sm leading-relaxed text-silver">
                      {m.content || (
                        <span className="inline-flex items-center gap-1 text-silver/60">
                          <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-white/8 p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-white/8 bg-background/60 p-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  rows={1}
                  placeholder="Ask Damapunt AI anything…"
                  className="flex-1 resize-none bg-transparent px-2 py-2 text-sm text-foreground placeholder:text-silver/40 outline-none"
                />
                <button
                  type="submit"
                  disabled={streaming || !input.trim()}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground transition-all hover:bg-primary-glow disabled:opacity-40"
                  aria-label="Send"
                >
                  <Send size={15} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 1.2, repeat: Infinity, delay }}
      className="inline-block h-1.5 w-1.5 rounded-full bg-current"
    />
  );
}
