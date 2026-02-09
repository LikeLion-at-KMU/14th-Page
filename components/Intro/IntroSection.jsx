"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gradientTextStyle = (gradient) => ({
  fontFamily: "'Gotham', sans-serif",
  backgroundImage: gradient,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  width: "fit-content",
});

export default function IntroSection() {
  const sectionRef = useRef(null);
  const hasScrolled = useRef(false);

  const scrollToHero = useCallback(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      if (hasScrolled.current) return;

      // 아래로 스크롤할 때만
      if (e.deltaY > 0) {
        hasScrolled.current = true;
        scrollToHero();
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (hasScrolled.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      // 위로 스와이프 (= 아래로 스크롤)
      if (touchStartY - touchEndY > 50) {
        hasScrolled.current = true;
        scrollToHero();
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: true });
    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      section.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollToHero]);

  // 인트로로 다시 스크롤하면 리셋
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasScrolled.current = false;
        }
      },
      { threshold: 0.9 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="intro-section"
      ref={sectionRef}
      className="relative h-screen h-dvh w-full overflow-hidden bg-[var(--bg)]"
    >
      {/* ── Background gradient ellipses ── */}

      {/* Ellipse 137 — top-left giant circle */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "135.9vw",
          height: "135.9vw",
          left: "-50.26vw",
          top: "-122.36vw",
          background:
            "linear-gradient(168.37deg, #FF3C00 79.16%, #FF6000 84.71%, #FF7522 85.97%, #FFAB14 90.64%, #FFCC00 91.52%)",
          boxShadow: "0px 4px 62.3px 9px #FF6000",
        }}
      />

      {/* Ellipse 138 — bottom-right giant circle */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "145.36vw",
          height: "113.78vw",
          left: "45.47vw",
          top: "75.31%",
          background:
            "linear-gradient(168.37deg, #FF3C00 79.16%, #FF6000 84.71%, #FF7522 85.97%, #FFAB14 90.64%, #FFAA00 91.52%)",
          boxShadow: "0px 4px 62.3px 9px #FF6000",
          transform: "rotate(171.67deg)",
        }}
      />

      {/* Ellipse 139 — moved inside text container below */}

      {/* Right fade overlay */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full"
        style={{
          width: "30.83vw",
          background:
            "linear-gradient(270deg, #121212 0%, rgba(18, 18, 18, 0) 100%)",
        }}
      />

      {/* ── Content layer ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-5 md:px-[156px]"
      >
        <div className="relative flex w-full max-w-[1128px] flex-col gap-2 md:gap-4 whitespace-nowrap">
          {/* Ellipse 139 — centre blur glow (anchored to text) */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0"
            style={{
              width: "62.28vw",
              height: "12.96vw",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255, 95, 0, 0.12) 53.37%, rgba(255, 204, 0, 0.12) 100%)",
              filter: "blur(44.45px)",
              transform: "translate(-50%, -50%) rotate(-18.53deg)",
            }}
          />
          {/* Subtitle — LIKELION at KOOKMIN UNIVERSITY */}
          <motion.p
            variants={itemVariants}
            className="text-[12px] md:text-[24px] font-semibold tracking-tight text-[var(--g15)]"
          >
            LIKELION at KOOKMIN UNIVERSITY
          </motion.p>

          {/* POSSIBILITY */}
          <motion.h1
            variants={itemVariants}
            className="text-[48px] md:text-[100px] font-bold leading-none"
            style={gradientTextStyle(
              "linear-gradient(270deg, #F8F8F9 1%, #FFC16A 34.62%, #FF6000 100%)"
            )}
          >
            POSSIBILITY
          </motion.h1>

          {/* TO REALITY */}
          <motion.h1
            variants={itemVariants}
            className="self-end text-[48px] md:text-[100px] font-bold leading-none"
            style={gradientTextStyle(
              "linear-gradient(128.66deg, #F8F8F9 4.88%, #FFC16A 31.27%, #FF6000 68.71%)"
            )}
          >
            TO REALITY
          </motion.h1>

          {/* Subtitle — 14TH RECRUITMENT */}
          <motion.p
            variants={itemVariants}
            className="self-end text-[12px] md:text-[24px] font-semibold tracking-tight text-[var(--g15)]"
          >
            14TH RECRUITMENT
          </motion.p>
        </div>

        {/* CTA button */}
        <motion.a
          variants={itemVariants}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfU5Z8FDiC5vUmG8qXwrz6ZPm-B5CeCcBXx_MspYp04zNnn_w/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-12 inline-flex items-center justify-center rounded-full px-8 py-4 md:px-11 md:py-8 text-[14px] md:text-[32px] font-semibold text-[var(--g1)] transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
          style={{
            background: "rgba(255, 96, 0, 0.1)",
            boxShadow: "inset 3px 4px 29.3px rgba(255, 96, 0, 0.65)",
          }}
        >
          지금 국민대 아기사자 지원하기
        </motion.a>

        {/* Scroll indicator */}
        <motion.button
          variants={itemVariants}
          onClick={scrollToHero}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-2 text-[var(--g5)] cursor-pointer transition-colors hover:text-[var(--g1)]"
          aria-label="아래로 스크롤"
        >
          <motion.div className="animate-bounce flex flex-col -space-y-3 md:-space-y-4">
            <ChevronDown className="h-5 w-5 md:h-8 md:w-8" />
            <ChevronDown className="h-5 w-5 md:h-8 md:w-8" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
