"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";
import styles from "./BottomCTA.module.css";

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
          className={`${styles.pulse} absolute left-[-70px] top-[30px] h-[170px] w-[170px] rounded-full md:left-[-400px] md:-top-[70px] md:h-[718px] md:w-[718px]`}
          style={{
            background:
              "radial-gradient(62.99% 62.99% at 50% 50%, rgba(255,96,0,0.24) 16.83%, rgba(154,44,84,0.24) 70.67%, rgba(115,115,115,0.24) 100%)",
            filter: "blur(60px)",
            animationDuration: "4s",
          }}
        />
        <div
          className={`${styles.pulse} absolute bottom-[0px] left-[50px] h-[117px] w-[117px] rounded-full md:bottom-[-230px] md:left-[0px] md:h-[493px] md:w-[493px]`}
          style={{
            background:
              "radial-gradient(62.99% 62.99% at 50% 50%, rgba(215,167,34,0.12) 16.83%, rgba(253,98,98,0.12) 70.67%, rgba(18,18,18,0.12) 100%)",
            filter: "blur(80px)",
            animationDuration: "5s",
            animationDelay: "0.5s",
          }}
        />
        <div
          className={`${styles.pulse} absolute bottom-[-20px] right-[-100px] h-[187px] w-[187px] rounded-full md:bottom-[-240px] md:right-[-600px] md:h-[792px] md:w-[792px]`}
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
          className="flex flex-col items-center gap-8 md:gap-[52px]"
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

          <motion.a
            variants={itemVariants}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfU5Z8FDiC5vUmG8qXwrz6ZPm-B5CeCcBXx_MspYp04zNnn_w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[50px] md:rounded-[100px] bg-[#FF6000] px-5 py-4 md:px-12 md:py-10 text-center text-[14px] md:text-[36px] font-bold leading-[17px] md:leading-[43px] text-[#F8F8F9] whitespace-nowrap transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
            style={{
              boxShadow:
                "0px 0px 2.2px rgba(255,255,255,0.09), 0px 0px 22.8px #FF6000, inset -1px 0px 6.8px rgba(255,255,255,0.25)",
            }}
          >
            지금 14기 아기사자 지원하기
          </motion.a>
        </motion.div>
      </SectionLayout>
    </div>
  );
}
