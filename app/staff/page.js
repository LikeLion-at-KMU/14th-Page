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
    <main className="h-screen overflow-y-auto snap-y snap-proximity px-4 md:px-[70px] py-[60px] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="mx-auto max-w-6xl mt-12">
        {/* 헤더 섹션 */}
        <div className="mb-13 text-center">
          <h1 className="t-strong text-4xl font-bold md:text-5xl">
            14기 운영진 소개
          </h1>
          <p className="t-muted mt-4 text-lg">멋사를 이끌어갈 운영진들</p>
        </div>

        {/* 필터 버튼 */}
        <div className="mb-[40px] flex items-center bg-[var(--g7)] rounded-full w-fit mx-auto bordershadow-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all
       ${
         filter === cat
           ? "bg-[var(--mssa-orange)] text-[var(--g1)] shadow-md"
           : "text-[var(--g4)] hover:text-[var(--g1)]"
       }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 운영진 그리드 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:px-[150px]">
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
