"use client";

import { useState } from "react";
import ProfileCard from "@/components/staff/ProfileCard";
import { STAFF } from "@/constants/staff";

export default function Staff() {
  const [filter, setFilter] = useState("전체");
  const categories = ["전체", "기획/디자인", "백엔드", "프론트엔드"];

  const filteredMembers =
    filter === "전체" ? STAFF : STAFF.filter((m) => m.part === filter);

  return (
    <main className="h-screen overflow-y-auto snap-y snap-proximity px-4 md:px-[70px] py-[40px] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="mx-auto max-w-6xl mt-11">
        {/* 헤더 섹션 */}
        <div className="mb-10 text-center">
          <h1 className="text-[var(--text-strong)] text-[28px] md:text-[36px] font-bold leading-tight">
            14기 운영진 소개
          </h1>
          <p className=" text-[var(--g3)] mt-[12px] text-[16px]">
            멋사를 이끌어갈 운영진들
          </p>
        </div>

        {/* 필터 버튼 */}
        <div className="mb-[30px] flex items-center bg-[var(--g7)] rounded-full w-fit mx-auto bordershadow-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-7 py-[11px] rounded-full text-sm font-semibold transition-all
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
        <div className="grid grid-cols-2 gap-[16px] md:grid-cols-3 lg:grid-cols-4 xl:gap-[24px] max-w-[1000px] mx-auto">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="snap-start snap-always scroll-mt-[700px]"
            >
              <ProfileCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
