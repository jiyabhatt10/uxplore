import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      setIsHidden(false);

      const target = e.target as HTMLElement;
      const cursor = window.getComputedStyle(target).cursor;
      setIsPointer(cursor === "pointer" || target.tagName === "A" || target.tagName === "BUTTON");
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          opacity: isHidden ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      >
        <div
          style={{
            width: isPointer ? "10px" : "6px",
            height: isPointer ? "10px" : "6px",
            borderRadius: "50%",
            backgroundColor: isPointer ? "#1FA2FF" : "white",
            transition: "width 0.2s, height 0.2s, background-color 0.2s",
          }}
        />
      </div>

      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          opacity: isHidden ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      >
        <div
          style={{
            width: isPointer ? "50px" : "36px",
            height: isPointer ? "50px" : "36px",
            borderRadius: "50%",
            border: isPointer ? "1.5px solid #1FA2FF" : "1.5px solid rgba(255,255,255,0.4)",
            transition: "width 0.3s, height 0.3s, border-color 0.3s",
          }}
        />
      </div>
    </>
  );
}
