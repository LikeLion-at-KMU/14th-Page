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

  const filteredMembers =
    filter === "common"
      ? STAFF
      : STAFF.filter((m) => m.part === PART_MAP[filter]);

  return (
    <main className="h-screen overflow-y-auto  px-4 md:px-[70px] md:py-[40px]  py-[108px] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="mx-auto max-w-6xl mt-14">
        {/* 헤더 섹션 */}
        <div className="mb-[24px] md:mb-[32px] text-center">
          <h1 className="text-[var(--text-strong)] text-[20px] md:text-[36px] font-bold leading-[100%] md:leading-tight">
            14기 운영진 소개
          </h1>
          <p className="text-[var(--g3)] mt-[8px] md:mt-[24px] text-[12px] md:text-[16px] font-medium leading-[183%]">
            멋사를 이끌어갈 운영진들
          </p>
        </div>

        {/* 필터 스위치: 리팩토링 */}
        <div className="mb-[30px] flex justify-center">
          <PartSwitch
            value={filter}
            onChange={setFilter}
            scopeId="staff-filter"
          />
        </div>
        {/* 운영진 그리드 */}
        <div className="grid grid-cols-2 gap-[8px] md:gap-[12px] md:grid-cols-3 lg:grid-cols-4  max-w-[1000px] mx-auto">
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
