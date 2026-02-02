import React from "react";
import Image from "next/image"; // 1. next/image 임포트

export default function ProfileCard({ member }) {
  return (
    <div className=" h-[317px] md:h-[430px] snap-start snap-always scroll-mt-[200px] bg-[var(--surface)] group flex flex-col  overflow-hidden transition-all hover:-translate-y-1 rounded-[var(--r-card)] border border-[var(--g6)]/10 shadow-sm">
      <div className="relative w-full h-[157px] md:h-[230px] flex-shrink-0 overflow-hidden bg-[var(--g7)]">
        <Image
          src={`/STAFF/${member.name}.png`}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-[top] grayscale-[15%] transition-all group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col py-[18px] px-[16px] md:py-[24px] md:px-[20px]">
        <span className="text-[10px] md:text-[12px] font-bold text-[var(--primary)] mb-[12px]">
          {member.role}
        </span>

        {/*  이름/학과 간격 축소 */}
        <div className="flex flex-col gap-[6px] md:gap-[8px] mb-[12px] md:mb-[16px]">
          <h3 className="text-[var(--text-strong)]text-[13px] md:text-[20px] font-bold leading-tight">
            {member.name}
          </h3>
          <span className="text-[var(--text-muted)] text-[10px] md:text-[12px] font-medium">
            {member.dept}
          </span>
        </div>

        <div className="rounded-[6px] md:rounded-[8px] rounded-tl-none bg-[var(--g7)] border border-[var(--g6)]/50 p-[8px] md:p-[10px]">
          <p className="text-[var(--g3)] text-[10px] md:text-[13px] font-medium leading-[1.4] whitespace-pre-line line-clamp-2">
            {member.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
