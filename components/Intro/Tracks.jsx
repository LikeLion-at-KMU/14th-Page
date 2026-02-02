import Link from "next/link";

function TrackCard({ roleEn, roleKo, imageSrc }) {
  return (
    <div className="relative overflow-hidden rounded-card bg-surface w-[320px]">
      <div className="relative aspect-[320/412] w-full">
        <div className="absolute inset-0 rounded-card bg-[radial-gradient(49.31%_45.79%_at_48.47%_38.48%,rgba(255,119,16,0.20)_4.08%,rgba(255,193,59,0.06)_51.44%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0 rounded-card bg-surface" />

        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt=""
            draggable={false}
            className="absolute left-1/2 top-[48px] w-[226px] h-[214px]  -translate-x-1/2 object-contain"
          />
        ) : null}

        <div className="absolute left-[36px] right-[36px] top-[294px] flex flex-col gap-2">
          <p className="text-[20px] font-medium leading-[24px] text-primary">
            {roleEn}
          </p>
          <p className="text-[32px] font-semibold leading-[43px] text-text-strong">
            {roleKo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Tracks() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto flex w-[1144px] flex-col items-center gap-[72px]">
        <div className="flex w-[563px] flex-col items-center gap-9 text-center">
          <h2 className="text-[44px] font-bold leading-[53px] text-text-strong">
            트랙 소개
          </h2>
          <p className="text-[24px] font-medium leading-[183%] text-text">
            세 개의 트랙으로 나누어 트랙별 세션, 스터디를 진행합니다.
            <br />
            자세한 내용은 모집 안내에서 확인할 수 있습니다.
          </p>
        </div>

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
          className="inline-flex h-[97px] w-[391px] items-center justify-center rounded-[24px] bg-text px-[48px] py-[32px] text-[28px] font-semibold leading-[33px] text-[var(--g7)]"
        >
          세션 커리큘럼 보러 가기 →
        </Link>
      </div>
    </section>
  );
}
