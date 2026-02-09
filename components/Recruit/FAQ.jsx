"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";
import { faqs } from "@/constants/faqs";
import Link from 'next/link';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* 데스크톱 FAQ 아이템 */
function FAQItemDesktop({ q, a }) {
  return (
    <motion.div
      variants={itemVariants}
      className="w-[780px] rounded-[24px] bg-[var(--g8)] px-[48px] py-[32px]"
    >
      <div className="flex flex-col gap-3">
        <p className="text-[24px] font-semibold leading-[183%] text-text">
          <span className="text-primary mr-1">Q.</span> {q}
        </p>
        <p className="text-[20px] font-normal leading-[160%] text-[var(--g4)] break-keep">
          {a}
        </p>
      </div>
    </motion.div>
  );
}

/* 모바일 FAQ 아이템 */
function FAQItemMobile({ q, a }) {
  return (
    <motion.div
      variants={itemVariants}
      className="w-[335px] rounded-[12px] bg-[var(--g8)] px-5 py-4"
    >
      <div className="flex flex-col gap-2">
        <p className="text-[12px] font-semibold leading-[183%] text-text">
          <span className="text-primary mr-1">Q.</span> {q}
        </p>
        <p className="text-[10px] font-normal leading-[160%] text-[var(--g4)] break-keep">
          {a}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <SectionLayout
      title="자주 묻는 질문"
      description={
        <>
          이외에도 궁금한 점이 있으시면 언제든 <Link href="https://www.instagram.com/likelion_kmu" target="_blank" className="text-primary">인스타그램(@likelion_kmu)</Link>으로<br />문의 주시면 빠르게 답변 드리겠습니다.
        </>
      }
    >
      {/* 데스크톱 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="hidden md:flex w-[780px] flex-col gap-5"
      >
        {faqs.map((item) => (
          <FAQItemDesktop key={item.q} q={item.q} a={item.a} />
        ))}
      </motion.div>

      {/* 모바일 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex md:hidden w-[335px] flex-col gap-3"
      >
        {faqs.map((item) => (
          <FAQItemMobile key={item.q} q={item.q} a={item.a} />
        ))}
      </motion.div>
    </SectionLayout>
  );
}
