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

/* 데스크톱 카드 */
function ActivityRowDesktop({ month, title, desc, note, imageSrc, imgPos = "50% 50%", imgScale = 1 }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="relative h-[312px] w-[812px] group hidden md:flex"
    >
      {/* left image */}
      <div className="h-[312px] w-[300px] overflow-hidden rounded-l-[28px] shrink-0">
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
      <div className="surface-light flex h-[312px] w-[512px] items-center justify-center rounded-r-[28px]">
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

/* 모바일 카드 */
function ActivityRowMobile({ month, title, mobileDesc, note, imageSrc, imgPos = "50% 50%", imgScale = 1 }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex w-[341px] h-[159px] md:hidden"
    >
      {/* left image */}
      <div className="w-[120px] h-[159px] overflow-hidden rounded-l-[12px] shrink-0">
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
      <div className="surface-light flex-1 flex items-center justify-center rounded-r-[12px] px-5">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col items-start gap-1.5 whitespace-normal break-keep">
            <p className="text-[10px] font-semibold leading-[12px] tracking-[-0.02em] text-primary">{month}</p>
            <p className="text-[14px] font-bold leading-[17px] text-text-strong">{title}</p>
            <p className="text-[10px] leading-[140%] tracking-[-0.02em] text-text">{mobileDesc}</p>
          </div>
          {note ? (
            <p className="text-[8px] leading-[10px] tracking-[-0.02em] text-text-muted whitespace-nowrap">{note}</p>
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
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="flex w-full md:w-[812px] flex-col items-center gap-3 md:gap-5"
      >
        {activities.map((item) => (
          <div key={item.title}>
            <ActivityRowDesktop {...item} />
            <ActivityRowMobile
              month={item.month}
              title={item.title}
              mobileDesc={item.mobileDesc || item.desc}
              note={item.note}
              imageSrc={item.imageSrc}
              imgPos={item.imgPos}
              imgScale={item.imgScale}
            />
          </div>
        ))}
      </motion.div>
    </SectionLayout>
  );
}
