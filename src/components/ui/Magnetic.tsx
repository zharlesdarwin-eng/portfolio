"use client";

import React, { useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactNode;
  strength?: number; // Distance multiplier
  textStrength?: number; // Inner content multiplier for 3D parallax feel
  className?: string;
  onClick?: () => void;
}

export default function Magnetic({
  children,
  strength = 0.35,
  textStrength = 0.15,
  className = "",
  onClick,
}: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Animate outer container
    gsap.to(containerRef.current, {
      x: middleX * strength,
      y: middleY * strength,
      duration: 1,
      ease: "power3.out",
    });

    // Animate inner content independently for depth
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        x: middleX * textStrength,
        y: middleY * textStrength,
        duration: 1,
        ease: "power3.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    if (innerRef.current) {
      gsap.to(innerRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block transition-transform ${className}`}
    >
      <div ref={innerRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
