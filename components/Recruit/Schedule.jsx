import { timeline } from "@/constants/timeline";
import SectionLayout from "../common/SectionLayout";

/** 데스크톱 수평선(원본 스타일) */
function TimelineLineDesktop({ lineTop = 23 }) {
  return (
    <div
      className="absolute left-0 w-full"
      style={{
        top: `${lineTop}px`,
        height: "2px",
        background: "var(--primary)",
        opacity: 0.45,
        filter: "blur(0.35px)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    />
  );
}

/** 모바일 수평선(데스크톱 느낌 유지 + 얇게) */
function TimelineLineMobile() {
  return (
    <div
    className="absolute left-0 w-[330px]"
    style={{
      // row top(12px) + dot의 중앙(대략 5px) - 라인 두께 보정(0.5px)
      top: "21.5px",
      height: "1px",
      background: "var(--primary)",
      opacity: 0.45,
      filter: "blur(0.35px)",
      maskImage:
        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    }}
  />
  );
}

/** 데스크톱 텍스트 */
function TimelineStepDesktopText({ title, date }) {
  return (
    <div className="flex w-[130px] flex-col items-center whitespace-nowrap">
      <p className="text-[24px] font-medium leading-[180%] text-center text-[var(--g2)] tracking-[-0.02em]">
        {title}
      </p>
      <p className="text-[20px] font-medium leading-[180%] text-center text-[var(--g5)]">
        {date}
      </p>
    </div>
  );
}

/** 모바일 텍스트(Figma: gap 2, 폰트 12/10) */
function TimelineStepMobileText({ title, date, widthClass = "w-[65px]" }) {
  return (
    <div className={`flex flex-col items-center whitespace-nowrap ${widthClass}`.trim()}>
      <p className="text-[12px] font-medium leading-[180%] text-center text-[var(--g2)] tracking-[-0.02em]">
        {title}
      </p>
      <p className="text-[10px] font-medium leading-[180%] text-center text-[var(--g5)]">
        {date}
      </p>
    </div>
  );
}

/** dot 이미지 공통 (임의 div dot 금지) */
function DotImage({isMobile = false}) {
  return (
    <img
      src={isMobile ? `/schedule/scheduleDotMobile.png` : `/schedule/scheduleDot.png`}
      alt=""
      aria-hidden="true"
      draggable={false}
      className="pointer-events-none select-none"
      style={{
        transformOrigin: "center",
      }}
    />
  );
}

/** 데스크톱: dot + 텍스트를 하나의 flex-col로 묶음(기존 구조 복원) */
function TimelineItemDesktop({ title, date }) {
  return (
    <div className="flex flex-col items-center">
      <DotImage />
      <TimelineStepDesktopText title={title} date={date} />
    </div>
  );
}

/**
 * 모바일: dot + 텍스트를 하나의 flex-col로 묶음(Figma: gap 12, 높이 64)
 * - dot은 이미지 사용 + scale로 10px 맞추기
 */
function TimelineItemMobile({ title, date, widthClass }) {
  return (
    <div className="flex h-[64px] flex-col items-center">
      <DotImage isMobile={true} />
      <TimelineStepMobileText title={title} date={date} widthClass={widthClass} />
    </div>
  );
}

export default function Schedule() {
  // width 기준
  const DESKTOP_W = 820;
  const MOBILE_W = 330;

  // 데스크톱 padding (기존)
  const desktopPaddingX = 65;
  const lineTop = 23;

  const DOT_BASE_PX = 20; 
  const dotScaleMobile = 10 / DOT_BASE_PX;

  const mobileWidthClasses = ["w-[65px]", "w-[69px]", "w-[66px]", "w-[69px]"];

  return (
    <SectionLayout
      title="14기 아기사자 모집 일정"
      description={
        <>
          새로운 도약을 시작할 14기 아기사자를 기다립니다. <br />
          모집 절차와 일정을 반드시 확인해주세요.
        </>
      }
      className="mt-[140px] md:mt-[88px]"
    >
      {/* 데스크톱 */}
      <div className="hidden md:flex w-[820px] flex-col items-center">
        <div className="relative w-full">
          {/* 수평선 */}
          <TimelineLineDesktop lineTop={lineTop} />

          {/* dot + 텍스트(기존처럼 묶어서 렌더) */}
          <div className="flex w-full items-start justify-between px-[65px]">
            {timeline.map((step) => (
              <TimelineItemDesktop key={step.title} {...step} />
            ))}
          </div>
        </div>

        <div className="mt-13 text-[16px] text-[var(--g5)] leading-[180%] text-center">
          최종 합격자 대상 전체 OT는 3월 9일(월)에 진행될 예정입니다.
        </div>
      </div>

      {/* 모바일 (Figma: 330x76, 내부 row: 317x64, gap 16) */}
      <div className="relative md:hidden w-[330px] h-[76px]">
        {/* 수평선(데스크톱 느낌 축소본) */}
        <TimelineLineMobile />

        {/* dot + 텍스트 묶음 (gap 16) */}
        <div className="absolute left-1/2 top-[12px] -translate-x-1/2 flex w-[317px] h-[64px] flex-row items-center gap-[16px]">
          {timeline.map((step, idx) => (
            <TimelineItemMobile
              key={step.title}
              {...step}
              dotScale={dotScaleMobile}
              widthClass={mobileWidthClasses[idx] || "w-[65px]"}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
