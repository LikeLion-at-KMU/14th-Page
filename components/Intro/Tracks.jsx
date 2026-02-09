"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLayout from "@/components/common/SectionLayout";
import TrackCard from '../common/TrackCard';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Tracks() {
  return (
    <SectionLayout
      title="트랙 소개"
      description={<>세 개의 트랙으로 나누어 <span className="text-primary">트랙별 세션, 스터디</span>를 진행합니다.<br />자세한 내용은 모집 안내에서 확인할 수 있습니다.</>}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex w-full items-center justify-center gap-2 md:gap-8"
      >
        <motion.div variants={itemVariants}>
          <TrackCard
            roleEn="Front-end Developer"
            roleKo="프론트엔드"
            imageSrc="/track/front.png"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TrackCard
            roleEn="Back-end Developer"
            roleKo="백엔드"
            imageSrc="/track/back.png"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TrackCard
            roleEn="PM & Designer"
            roleKo="기획 & 디자인"
            imageSrc="/track/pm.png"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={itemVariants}
      >
        <Link
          href="/recruit#curriculum"
          className="inline-flex h-[36px] md:h-[97px] w-[138px] md:w-[391px] items-center justify-center rounded-[8px] md:rounded-ui bg-text px-4 md:px-[48px] py-3 md:py-[32px] text-[10px] md:text-[28px] font-semibold leading-[12px] md:leading-[33px] text-[var(--g7)]"
        >
          세션 커리큘럼 보러 가기 →
        </Link>
      </motion.div>
    </SectionLayout>
  );
}
