import Link from "next/link";
import SectionLayout from "@/components/common/SectionLayout";

function TrackCard({ roleEn, roleKo, imageSrc }) {
  return (
    <div className="track-card w-[320px]">
      <div className="track-card-inner relative h-[412px] w-full">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            draggable={false}
            className="absolute left-1/2 top-[48px] h-[214px] w-[226px] -translate-x-1/2 object-cover"
          />
        ) : null}

        <div className="absolute left-[36px] right-[36px] top-[294px] flex flex-col gap-2">
          <p className="text-[20px] font-medium leading-[24px] text-primary">{roleEn}</p>
          <p className="text-[32px] font-semibold leading-[38px] text-text-strong">{roleKo}</p>
        </div>
      </div>
    </div>
  );
}


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
