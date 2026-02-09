"use client";

import { useState } from "react";
import ProfileCard from "@/components/Staff/ProfileCard";
import { STAFF } from "@/constants/staff";
import PartSwitch from "@/components/common/PartSwitch";

const PART_MAP = {
  common: "전체",
  front: "프론트엔드",
  back: "백엔드",
  design: "기획/디자인",
};

export default function Staff() {
  const [filter, setFilter] = useState("common");

  const filteredMembers = STAFF.filter((m) =>
    filter === "common" ? true : m.part === PART_MAP[filter],
  ).sort((a, b) => {
    // 1. "전체(common)" 필터일 때 정렬 로직
    if (filter === "common") {
      // 대표 키워드가 포함된 사람을 최우선(-1)으로
      if (a.role.includes("대표")) return -1;
      if (b.role.includes("대표")) return 1;
      return 0;
    }

    // 2. 파트별 필터(프론트, 백, 디자인)일 때 정렬 로직
    // 파트장을 대표보다 앞에 세움.
    if (a.role.includes("파트장")) return -1;
    if (b.role.includes("파트장")) return 1;

    // 그다음 대표
    if (a.role.includes("대표")) return -1;
    if (b.role.includes("대표")) return 1;

    // 나머지는 원래 순서 유지
    return 0;
  });

  const STAFF_ITEMS = [
    { key: "common", label: "전체", w: 83, wMobile: 53 }, // 여기서만 "전체"
    { key: "front", label: "프론트엔드", w: 135, wMobile: 84 },
    { key: "back", label: "백엔드", w: 100, wMobile: 64 },
    { key: "design", label: "기획/디자인", w: 142, wMobile: 89 },
  ];

  return (
    <main className="  px-4 md:px-[70px] pt-[108px] pb-[36px] md:pt-[40px] md:pb-[100px] min-h-[850px] md:min-h-[1270px] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
      <div className="mx-auto max-w-6xl mt-14">
        {/* 헤더 섹션 */}
        <div className="mb-[24px] md:mb-[32px] text-center">
          <h1 className="text-[var(--text-strong)] text-[20px] md:text-[40px] font-bold leading-[100%] md:leading-tight">
            운영진 소개
          </h1>
          <p className="text-[var(--g3)] mt-[8px] md:mt-[24px] text-[10px] md:text-[20px] font-medium leading-[183%]">
            멋쟁이사자처럼 14기를 이끌고, 함께 성장해 나갈 운영진을 소개합니다.
          </p>
        </div>

        {/* 필터 스위치: 리팩토링 */}
        <div className="mb-[30px] flex justify-center">
          <PartSwitch
            value={filter}
            items={STAFF_ITEMS}
            onChange={setFilter}
            scopeId="staff-filter"
          />
        </div>
        {/* 운영진 그리드 */}
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-[12px]  md:gap-x-[12px] md:gap-y-[20px] md:grid-cols-3 lg:grid-cols-4  max-w-[1000px] mx-auto">
          {filteredMembers.map((member) => (
            <div key={member.id}>
              <ProfileCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
