import React from "react";
import Image from "next/image"; // 1. next/image 임포트

export default function ProfileCard({ member }) {
  return (
    /* 1. aspect-[300/520] 제거: 내용에 맞게 짧아지도록 설정 */
    <div className=" h-[430px] snap-start snap-always scroll-mt-[200px] bg-[var(--surface)] group flex flex-col  overflow-hidden transition-all hover:-translate-y-1 rounded-[var(--r-card)] border border-[var(--g6)]/10 shadow-sm">
      {/* 2. 이미지: 정사각형을 유지하되 가로 폭이 좁아지면 세로도 같이 짧아짐 */}
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--g7)]">
        <Image
          src={`/STAFF/${member.name}.png`}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-[top] grayscale-[15%] transition-all group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      {/* 3. 텍스트 영역: p-5에서 p-[16px]로 줄임 */}
      <div className="flex flex-col py-[28px] px-[24px]">
        <span className="text-[12px] font-bold text-[var(--primary)] mb-[8px]">
          {member.role}
        </span>

        {/* 4. 이름/학과 간격: mb-5에서 mb-[12px]로 축소 */}
        <div className="flex flex-col gap-[8px] mb-[16px]">
          <h3 className="text-[var(--text-strong)] text-[20px] font-bold leading-tight">
            {member.name}
          </h3>
          <span className="text-[var(--text-muted)] text-[13px] font-medium">
            {member.dept}
          </span>
        </div>

        <div className="rounded-[12px] rounded-tl-none bg-[var(--g7)] border border-[var(--g6)]/50 p-[10px]">
          <p className="text-[var(--g3)] text-[13px] font-medium leading-[1.4] whitespace-pre-line line-clamp-2">
            {member.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
