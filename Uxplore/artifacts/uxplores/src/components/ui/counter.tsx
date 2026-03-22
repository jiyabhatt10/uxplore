import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: CounterProps) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    if (isNaN(numericPart)) {
      setDisplayed(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numericPart);
            setDisplayed(current + suffix);
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplayed(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
