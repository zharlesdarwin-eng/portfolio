"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "Hallo",
  "Guten Tag",
  "Hej",
  "Zeno Hirschfeld"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    // Rapid cycle through greetings
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, index === 0 ? 1000 : 150);
      return () => clearTimeout(timeout);
    } else {
      const exitTimeout = setTimeout(() => {
        setLoadingComplete(true);
      }, 800);
      return () => clearTimeout(exitTimeout);
    }
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curveVariants: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!loadingComplete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.2 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141516] text-white"
        >
          {dimension.width > 0 && (
            <>
              <div className="z-10 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <h1 className="text-3xl md:text-5xl font-light tracking-tight font-sans">
                  {words[index]}
                </h1>
              </div>

              {/* Curved SVG bottom for the signature fluid curtain lift */}
              <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#141516]">
                <motion.path
                  variants={curveVariants}
                  initial="initial"
                  exit="exit"
                />
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
