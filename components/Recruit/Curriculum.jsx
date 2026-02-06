"use client";

import { useMemo, useState } from "react";
import SectionLayout from "@/components/common/SectionLayout";
import { CURRICULUM } from "@/constants/curriculums";
import PartSwitch from "../common/PartSwitch";

export default function Curriculum() {
  const [part, setPart] = useState("common");

  const rows = useMemo(() => {
    return CURRICULUM[part] ?? [];
  }, [part]);

  return (
    <SectionLayout
      title="트랙별 세션 커리큘럼"
      description={
        <>
          개발, 디자인 역량을 키우기 위한 세션을 진행합니다. <br />
          기본적으로 <span className="text-primary">프론트엔드는 수요일, 백엔드는 목요일, 기획/디자인은 월요일</span>에 진행됩니다.
          <br />자세한 일정은 추후 공지 예정입니다.
        </>
      }
      id="curriculum"
      className="scroll-mt-[140px] md:scroll-mt-[80px]"
    >
      {/* 데스크톱 */}
      <div className="hidden md:flex w-[580px] flex-col items-center gap-6">
        <PartSwitch value={part} onChange={setPart} />

        <div className="flex w-[580px] flex-col items-start gap-3">
          {rows.map((r) => (
            <div
              key={`${part}-${r.round}-${r.title}`}
              className="flex h-[69px] w-[580px] items-center rounded-[12px] bg-[var(--g8)] px-[32px] py-[16px]"
            >
              <div className="flex w-full items-center gap-6">
                <p className="shrink-0 text-[20px] font-medium leading-[183%] text-[var(--g5)]">
                  {r.round}
                </p>
                <p className="text-[20px] font-bold leading-[183%] text-[var(--g2)]">
                  {r.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {part === "common" ? (
          <p className="w-[580px] text-center text-[16px] font-normal leading-[183%] text-[var(--g5)]">
            기획/디자인 파트는 1~4, 8회차만 필수 참여입니다.
          </p>
        ) : null}
      </div>

      {/* 모바일: 320x42 per row */}
      <div className="flex md:hidden w-[320px] flex-col items-center gap-4">
        <PartSwitch value={part} onChange={setPart} />

        <div className="flex w-[320px] flex-col items-start gap-1.5">
          {rows.map((r) => (
            <div
              key={`${part}-${r.round}-${r.title}-mobile`}
              className="flex h-[42px] w-[320px] items-center rounded-[6px] bg-[var(--g8)] px-4 py-2.5"
            >
              <div className="flex w-full items-center gap-3">
                <p className="shrink-0 text-[12px] font-medium leading-[183%] text-[var(--g5)]">
                  {r.round}
                </p>
                <p className="text-[12px] font-bold leading-[183%] text-[var(--g2)]">
                  {r.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {part === "common" ? (
          <p className="w-[320px] text-center text-[10px] font-normal leading-[183%] text-[var(--g5)]">
            기획/디자인 파트는 1~4, 8회차만 필수 참여입니다.
          </p>
        ) : null}
      </div>
    </SectionLayout>
  );
}
