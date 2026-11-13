"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    const cursor = cursorRef.current;
    if (!cursor || isTouchDevice) return;

    // Use GSAP quickTo for ultra-smooth 60fps tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);

    // Event delegation for contextual cursor morphing
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const projectItem = target.closest("[data-cursor-project]");
      const clickable = target.closest("a, button, [role='button'], input, textarea, select, .magnetic-wrap");

      if (projectItem) {
        setCursorVariant("view");
        setCursorText("View");
      } else if (clickable) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      style={{ opacity: isVisible ? 1 : 0 }}
      className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        cursorVariant === "view"
          ? "w-20 h-20 bg-[#455ce9] text-white text-xs font-semibold tracking-wider shadow-xl"
          : cursorVariant === "hover"
          ? "w-16 h-16 bg-neutral-900/10 backdrop-blur-xs border border-neutral-900/20"
          : "w-3.5 h-3.5 bg-[#1c1d20]"
      }`}
    >
      {cursorVariant === "view" && <span>{cursorText}</span>}
    </div>
  );
}
