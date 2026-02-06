import Link from "next/link";
import SectionLayout from "@/components/common/SectionLayout";
import TrackCard from '../common/TrackCard';


export default function Tracks() {
  return (
    <SectionLayout
      title="트랙 소개"
      description={<>세 개의 트랙으로 나누어 <span className="text-primary">트랙별 세션, 스터디</span>를 진행합니다.<br />자세한 내용은 모집 안내에서 확인할 수 있습니다.</>}
    >
      <div className="flex w-full items-center justify-center gap-8">
        <TrackCard
          roleEn="Front-end Developer"
          roleKo="프론트엔드"
          imageSrc="/track/front.png"
        />
        <TrackCard
          roleEn="Back-end Developer"
          roleKo="백엔드"
          imageSrc="/track/back.png"
        />
        <TrackCard
          roleEn="PM & Designer"
          roleKo="기획 & 디자인"
          imageSrc="/track/pm.png"
        />
      </div>

      <Link
        href="/recruit"
        className="inline-flex h-[97px] w-[391px] items-center justify-center rounded-ui bg-text px-[48px] py-[32px] text-[28px] font-semibold leading-[33px] text-[var(--g7)]"
      >
        세션 커리큘럼 보러 가기 →
      </Link>
    </SectionLayout>
  );
}
