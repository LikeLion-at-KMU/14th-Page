"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";
import styles from "./BottomCTA.module.css";
import { APPLY_OPEN, APPLY_URL } from "@/constants/apply";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BottomCTA() {
  return (
    <div className="relative">
      {/* Viewport-wide gradient container */}
      <div className="pointer-events-none absolute inset-0 left-1/2 w-screen -translate-x-1/2">
        <div
          className={`${styles.pulse} absolute -left-17.5 top-7.5 h-42.5 w-42.5 rounded-full md:-left-100 md:-top-17.5 md:h-179.5 md:w-179.5`}
          style={{
            background:
              "radial-gradient(62.99% 62.99% at 50% 50%, rgba(255,96,0,0.24) 16.83%, rgba(154,44,84,0.24) 70.67%, rgba(115,115,115,0.24) 100%)",
            filter: "blur(60px)",
            animationDuration: "4s",
          }}
        />
        <div
          className={`${styles.pulse} absolute bottom-0 left-12.5 h-29.25 w-29.25 rounded-full md:-bottom-57.5 md:left-0 md:h-123.25 md:w-123.25`}
          style={{
            background:
              "radial-gradient(62.99% 62.99% at 50% 50%, rgba(215,167,34,0.12) 16.83%, rgba(253,98,98,0.12) 70.67%, rgba(18,18,18,0.12) 100%)",
            filter: "blur(80px)",
            animationDuration: "5s",
            animationDelay: "0.5s",
          }}
        />
        <div
          className={`${styles.pulse} absolute -bottom-5 -right-25 h-46.75 w-46.75 rounded-full md:-bottom-60 md:-right-150 md:h-198 md:w-198`}
          style={{
            background:
              "radial-gradient(82.45% 82.45% at 44.07% 45.2%, rgba(255,96,0,0.12) 0%, rgba(163,83,255,0.12) 53%, rgba(18,18,18,0.12) 100%)",
            filter: "blur(60px)",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
      </div>

      <SectionLayout className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col items-center gap-8 md:gap-13"
        >
          <motion.h2
            variants={itemVariants}
            className="text-center text-[16px] md:text-[44px] font-semibold leading-[150%] text-[#F4F5F7]"
          >
            멋쟁이사자처럼 at 국민대가
            <br />
            성공으로 도약할 여러분을
            <br />
            기다리고 있어요!
          </motion.h2>

          {APPLY_OPEN ? (
            <motion.a
              variants={itemVariants}
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[50px] md:rounded-[100px] bg-[#FF6000] px-5 py-4 md:px-12 md:py-10 text-center text-[14px] md:text-[36px] font-bold leading-4.25 md:leading-10.75 text-[#F8F8F9] whitespace-nowrap transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
              style={{
                boxShadow:
                  "0px 0px 2.2px rgba(255,255,255,0.09), 0px 0px 22.8px #FF6000, inset -1px 0px 6.8px rgba(255,255,255,0.25)",
              }}
            >
              지금 14기 아기사자 지원하기
            </motion.a>
          ) : (
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center justify-center rounded-[50px] md:rounded-[100px] bg-(--g7) px-5 py-4 md:px-12 md:py-10 text-center text-[14px] md:text-[36px] font-bold leading-4.25 md:leading-10.75 text-(--g5) whitespace-nowrap cursor-not-allowed"
            >
              지금 14기 아기사자 지원하기
            </motion.span>
          )}
        </motion.div>
      </SectionLayout>
    </div>
  );
}
