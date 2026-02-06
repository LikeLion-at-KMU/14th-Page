"use client";

import { useState } from "react";
import ProfileCard from "@/components/Staff/ProfileCard";
import { STAFF } from "@/constants/staff";

export default function Staff() {
  const [filter, setFilter] = useState("전체");
  const categories = ["전체", "프론트엔드", "백엔드", "기획/디자인"];

  const filteredMembers =
    filter === "전체" ? STAFF : STAFF.filter((m) => m.part === filter);

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

        {/* 필터 버튼 */}
        <div className="mb-[30px] flex items-center bg-[var(--g7)] rounded-full w-fit mx-auto  gap-[16px] md:gap-0 bordershadow-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full font-semibold transition-all whitespace-nowrap 
        text-[12px] py-[4px] px-[16px]
        md:text-base md:py-[8px] md:px-[24px]
       ${
         filter === cat
           ? "bg-[var(--mssa-orange)] text-[var(--g1)] shadow-md"
           : "text-[var(--g5)] hover:text-[var(--g1)]"
       }`}
            >
              {cat}
            </button>
          ))}
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
