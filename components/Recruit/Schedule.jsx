import { timeline } from "@/constants/timeline";
import SectionLayout from "../common/SectionLayout";

function TimelineStep({ title, date }) {
  return (
    <div className="flex w-[130px] flex-col items-center gap-1 whitespace-nowrap">
      <p className="text-[24px] font-medium leading-[180%] text-center text-[var(--g3)]">
        {title}
      </p>
      <p className="text-[20px] font-medium leading-[180%] text-center text-[var(--g5)]">
        {date}
      </p>
    </div>
  );
}

export default function Schedule() {
  return (
    <SectionLayout
      title="14기 아기사자 모집 일정"
      description={<>새로운 도약을 시작할 14기 아기사자를 기다립니다. <br />모집 절차와 일정을 반드시 확인해주세요.</>}
      className="mt-[88px]"
    >
      <div className="flex w-[820px] flex-col items-center">
        <div className="relative flex w-full items-start justify-between px-[65px]">
          {/* 수평선 */}
          <div
            className="absolute left-0 top-[23px] h-[2px] w-full bg-primary"
            style={{
              opacity: 0.45,
              filter: "blur(0.35px)",
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
            }}
          />
          {/* dot + 텍스트 */}
          {timeline.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <img
                src="/schedule/scheduleDot.png"
                alt=""
                className="pointer-events-none select-none"
                aria-hidden="true"
                draggable={false}
              />
              <TimelineStep {...step} />
            </div>
          ))}

        </div>
        <div className="mt-13 text-[16px] text-[var(--g5)] leading-[180%] text-center">
          최종 합격자 대상 전체 OT는 3월 9일(월) ~ 13일(금) 중 하루에 진행될 예정입니다.
        </div>
      </div>
    </SectionLayout>
  );
}