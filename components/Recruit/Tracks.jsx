"use client";

import { motion } from "framer-motion";
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
      title="모집 트랙 안내"
      description={<>프론트엔드, 백엔드, 기획/디자인 총 3가지 트랙 중 <br className="block md:hidden"/>하나를 선택해 지원할 수 있습니다.<br />트랙별 인재상은 인스타그램 카드뉴스를 확인해 주세요.</>}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col w-full items-center justify-center gap-8"
      >
        <motion.div variants={itemVariants}>
          <TrackCard
            variant="wide"
            roleEn="Front-end Developer"
            roleKo="프론트엔드"
            imageSrc="/track/front.png"
            desc={<>디자인을 코드로 구현하여 실제 웹 화면을 만듭니다.<br />서버 API와 연동하고 사용자 인터랙션을 개발하여 서비스가 원활히 동작하게 합니다.</>}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TrackCard
            variant="wide"
            roleEn="Back-end Developer"
            roleKo="백엔드"
            imageSrc="/track/back.png"
            desc={<>서버와 데이터를 관리하고 핵심 로직을 처리합니다.<br />안정적인 시스템 구동을 위해 효율적인 API를 설계합니다.</>}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TrackCard
            variant="wide"
            roleEn="PM & Designer"
            roleKo="기획 & 디자인"
            imageSrc="/track/pm.png"
            desc={<>서비스 기획과 UX/UI 디자인을 담당합니다.<br />사용자 경험을 최우선으로 서비스의 구조를 기획하고, 아이디어를 시각화합니다.</>}
          />
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
}
