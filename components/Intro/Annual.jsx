"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const schedule = [
  {
    period: "1학기",
    items: ["OT", "MT", "중앙 아이디어톤(필수)", "정기 세션"],
  },
  {
    period: "여름방학",
    items: ["중앙 해커톤(필수)"],
  },
  {
    period: "2학기",
    items: ["연합 해커톤(택 1)", "기업 해커톤(택 1)", "교내 해커톤", "멋사인의 밤"],
  },
];

function PeriodHeader({ label }) {
  return (
    <div className="flex items-center justify-center rounded-lg md:rounded-[8px] bg-[#FF6000] px-[10px] py-2 md:px-4 md:py-4">
      <span className="text-[10px] md:text-[20px] font-semibold leading-[150%] text-[#E9EBED] text-center">
        {label}
      </span>
    </div>
  );
}

function ScheduleItem({ label }) {
  return (
    <div className="flex items-center justify-center rounded-[4px] md:rounded-[8px] bg-[#E9EBED] px-[10px] py-2 md:px-4 md:py-4">
      <span className="text-[10px] md:text-[16px] font-medium leading-[150%] text-[#26282B] text-center">
        {label}
      </span>
    </div>
  );
}

function PeriodColumn({ period, items }) {
  return (
    <motion.div
      variants={columnVariants}
      className="flex w-[108px] md:w-[208px] flex-col gap-2 md:gap-4"
    >
      <PeriodHeader label={period} />
      <div className="flex flex-col gap-1 md:gap-3">
        {items.map((item) => (
          <ScheduleItem key={item} label={item} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Annual() {
  return (
    <SectionLayout
      title="연간 일정"
      description="멋쟁이사자처럼 14기의 한 해 활동 흐름을 보여주는 연간 일정입니다."
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
        className="flex flex-row items-start gap-[10px] md:gap-7"
      >
        {schedule.map((col) => (
          <PeriodColumn key={col.period} period={col.period} items={col.items} />
        ))}
      </motion.div>
    </SectionLayout>
  );
}
