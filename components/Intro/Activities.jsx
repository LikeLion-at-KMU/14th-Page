"use client"

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";
import { activities } from "@/constants/activities";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function ActivityRow({ month, title, desc, note, imageSrc, imgPos = "50% 50%", imgScale = 1 }) {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -5 }} // 호버 시 아주 살짝 위로 들림
      className="relative h-[312px] w-[812px] group" // group 클래스 추가 (이미지 제어용)
    >
      {/* left image */}
      <div className="absolute left-0 top-0 h-[312px] w-[300px] overflow-hidden rounded-l-[28px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          draggable={false}
          className="h-full w-full object-cover"
          style={{
            objectPosition: imgPos,
            transform: `scale(${imgScale})`,
            transformOrigin: "center",
          }}
        />
      </div>

      {/* right content */}
      <div className="surface-light absolute left-[300px] top-0 flex h-[312px] w-[512px] items-center justify-center rounded-r-[28px]">
        <div className="flex w-[416px] flex-col gap-4">
          <div className="flex flex-col items-start gap-3 whitespace-normal break-keep">
            <p className="text-[20px] font-semibold leading-[24px] tracking-[-0.02em] text-primary">{month}</p>
            <p className="text-[28px] font-bold leading-[33px] text-text-strong">{title}</p>
            <p className="text-[20px] leading-[28px] tracking-[-0.02em] text-text">{desc}</p>
          </div>
          {note ? (
            <p className="text-[16px] leading-[19px] tracking-[-0.02em] text-text-muted">{note}</p>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default function Activities() {
  return (
    <SectionLayout
      title="주요 활동"
      description={<>한 해 동안 다양한 활동을 하며 <span className="text-primary">협업 경험</span>을 쌓을 수 있습니다.</>}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2 // 자식 요소들이 0.2초 간격으로 등장
            }
          }
        }}
        className="flex w-[812px] flex-col gap-5"
      >
        {activities.map((item) => (
          <ActivityRow key={item.title} {...item} />
        ))}
      </motion.div>
    </SectionLayout>
  );
}
