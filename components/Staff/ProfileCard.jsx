import React from "react";
import Image from "next/image"; // 1. next/image 임포트

export default function ProfileCard({ member }) {
  return (
    <div className="h-full w-full min-h-[317px] md:min-h-[430px] bg-[var(--surface)] group flex flex-col  overflow-hidden transition-all hover:-translate-y-1 rounded-[var(--r-card)] border border-[var(--g6)]/10 shadow-sm">
      <div className="relative w-full h-[157px] md:h-[230px] flex-shrink-0 overflow-hidden bg-[var(--g7)]">
        <Image
          src={`/STAFF/${member.name}.png`}
          alt={member.name}
          draggable={false}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-[top] grayscale-[15%] transition-all group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 py-[18px] px-[16px] md:py-[24px] md:px-[20px]">
        <span className="text-[10px] md:text-[12px] font-bold text-[var(--primary)] mb-[8px]">
          {member.role}
        </span>

        <div className="flex flex-col gap-[6px] md:gap-[8px] mb-[12px] md:mb-[16px]">
          <h3 className="text-[var(--text-strong)] text-[13px] md:text-[16px] font-bold leading-tight">
            {member.name}
          </h3>
          <span className="text-[var(--text-muted)] text-[10px] md:text-[12px] font-medium">
            {member.dept}
          </span>
        </div>

        <div className="rounded-[0_6px_6px_6px] md:rounded-[0_8px_8px_8px] bg-[var(--g7)] border border-[var(--g6)] p-[8px] md:p-[10px]">
          <p className="text-[var(--g3)] text-[8px] md:text-[12px] font-medium leading-[1.4]  ">
            {member.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
