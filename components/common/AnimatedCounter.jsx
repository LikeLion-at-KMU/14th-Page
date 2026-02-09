"use client";

import { animate, useMotionValue, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ from = 0, to, duration = 1.5 }) {
  const count = useMotionValue(from);
  
  // 숫자를 보여줄 요소를 감지하기 위한 ref 생성
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}