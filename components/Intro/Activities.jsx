"use client"

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

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
        <ActivityRow
          month="5월"
          title="아이디어톤"
          desc={<>전국 멋쟁이사자처럼 대학이 모두 참여하는 14기 첫 연합 행사입니다. 1차 예선(학교별 심사), 2차 예선<br/>(학교 그룹별 심사), 3차 본선 총 세 단계로 진행됩니다.</>}
          note="*14기 필수 참여 행사로, 불참 시 수료증 발급 불가합니다."
          imageSrc="/activities/idea.png"
        />

        <ActivityRow
          month="여름방학"
          title="중앙해커톤"
          desc="전국 멋쟁이사자처럼 대학이 모두 참여하는 여름방학 최대 규모의 해커톤입니다. 기획부터 디자인, 개발, 배포까지 서비스를 직접 만들어 볼 수 있는 기회입니다."
          note="*14기 필수 참여 행사로, 불참 시 수료증 발급 불가합니다."
          imageSrc="/activities/central.png"
        />

        <ActivityRow
          month="11월"
          title="4호선톤"
          desc="대규모 지역 연합 해커톤입니다. 다른 학교의 학생들과 함께 팀을 이루어 해커톤을 진행합니다. 작년에는 역대 최대 규모로, 9개 대학이 함께했습니다."
          note="*13기 기준 설명으로, 14기에는 세부 사항이 달라질 수 있습니다."
          imageSrc="/activities/line4.png"
        />

        <ActivityRow
          month="12월"
          title="교내해커톤"
          desc="마지막 공식 행사이자 수료를 위한 필수 해커톤입니다. 제한된 시간 동안 협업과 문제 해결 능력을 집중적으로 경험할 수 있는 행사입니다."
          note="*14기 필수 참여 행사로, 불참 시 수료증 발급 불가합니다."
          imageSrc="/activities/school.png"
        />
      </motion.div>
    </SectionLayout>
  );
}
