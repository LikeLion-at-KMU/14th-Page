import React from "react";
import Image from "next/image"; // 1. next/image 임포트

export default function ProfileCard({ member }) {
  return (
    <div className="card-base group flex flex-col overflow-hidden transition-all hover:-translate-y-1  ">
      <div className="relative aspect-square w-full overflow-hidden bg-g7">
        {/*next/image 활용 */}
        <Image
          src={`/STAFF/${member.name}.png`}
          alt={`${member.name} 운영진 프로필`}
          fill // 부모 요소(aspect-square)를 가득 채움
          /* sizes: 그리드 레이아웃에 맞춰 대략적인 이미지 크기 */
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover grayscale-[20%] transition-all group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col p-6">
        <span className="text-xs font-bold text-primary mb-4">
          {member.role}
        </span>

        <div className="flex flex-col gap-1 mb-4">
          <h3 className="t-strong text-xl font-bold leading-tight">
            {member.name}
          </h3>
          <span className="t-muted text-sm font-medium">{member.dept}</span>
        </div>

        {/* 한줄 소개 박스 */}
        <div className="rounded-xl rounded-tl-none bg-[var(--g7)] border border-[var(--g6)]/60 p-4">
          <p className="text-[var(--g3)]  text-sm font-medium leading-relaxed whitespace-pre-line">
            {member.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
