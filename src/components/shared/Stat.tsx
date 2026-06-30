import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

export function Stat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, value, mv]);

  return (
    <div className="flex flex-col">
      <span className="flex items-baseline gap-0.5 font-display text-4xl text-foreground sm:text-5xl">
        <motion.span ref={ref}>{rounded}</motion.span>
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
    </div>
  );
}
