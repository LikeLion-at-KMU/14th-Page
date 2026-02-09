"use client";

import { motion } from "framer-motion";
import SectionLayout from "../common/SectionLayout";
import { notices } from '../../constants/notices';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* 데스크톱 카드: 322x269 */
function NoticeItemDesktop({ icon, title, desc }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col w-[322px] h-[269px] gap-4 bg-[var(--g15)] rounded-[24px] px-8 py-9"
    >
      <div className="flex flex-col gap-2">
        <img src={icon} alt="" className="w-12 h-12 object-cover" draggable={false} />
        <p className="font-bold text-[24px] leading-[29px] text-[var(--g7)] tracking-[-0.02em]">{title}</p>
      </div>
      <div className="text-[16px] leading-[140%] text-[var(--g6)] tracking-[-0.02em] break-keep">{desc}</div>
    </motion.div>
  );
}

/* 모바일 카드: 161x146 */
function NoticeItemMobile({ icon, title, desc }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col w-[161px] h-[146px] gap-2 bg-[var(--g15)] rounded-[12px] px-4 py-5 justify-center"
    >
      <div className="flex flex-col gap-1">
        <img src={icon} alt="" className="w-6 h-6 object-cover" draggable={false} />
        <p className="font-bold text-[12px] leading-[14px] text-[var(--g7)] tracking-[-0.02em]">{title}</p>
      </div>
      <div className="text-[9px] leading-[140%] text-[var(--g6)] tracking-[-0.02em] break-keep">{desc}</div>
    </motion.div>
  );
}

export function Notice() {
  return (
    <SectionLayout
      title="지원 전 필독 사항"
      description={<>지원 전 반드시 확인해야 할 중요한 안내 사항입니다.</>}
    >
      {/* 데스크톱: 2x2 그리드 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="hidden md:grid grid-cols-2 gap-5"
      >
        {notices.map((notice) => (
          <NoticeItemDesktop key={notice.title} {...notice} />
        ))}
      </motion.div>

      {/* 모바일: 2x2 그리드 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid md:hidden grid-cols-2 gap-2"
      >
        {notices.map((notice) => (
          <NoticeItemMobile key={notice.title} {...notice} />
        ))}
      </motion.div>
    </SectionLayout>
  );
}
