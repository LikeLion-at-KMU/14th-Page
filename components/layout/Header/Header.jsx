"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderNav from "./Nav";
import Link from "next/link";
import { APPLY_OPEN, APPLY_URL } from "@/constants/apply";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    if (!isHome) return;

    const intro = document.getElementById("intro-section");
    if (!intro) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(intro);
    return () => observer.unobserve(intro);
  }, [isHome]);

  const transparent = isHome && introVisible;

  return (
    /* h-auto md:h-[88px]: 모바일에서는 내용에 따라 늘어나게, 데스크탑은 88px 고정 */
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-auto md:h-[88px] w-full py-4 md:py-0 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-[var(--bg)] border-b border-[var(--g6)]/10"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] flex-col md:flex-row items-center justify-between px-[27px] md:px-[156px] gap-4 md:gap-0">
        {/* 로고: 모바일 중앙 정렬 / md: 왼쪽 정렬 */}
        <Link href="/" className="flex items-center" draggable={false}>
          <img
            src="KMU_Logo.png"
            alt="LIKELION KMU"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            draggable={false}
          />
        </Link>

        {/* 네비게이션 & 지원하기: 모바일 가로 배열 / gap 축소 */}
        <div className="flex items-center gap-[48px] md:gap-[60px]">
          <HeaderNav />
          {APPLY_OPEN ? (
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--mssa-orange) text-(--g1) h-9 md:h-11 rounded-full px-4 md:px-6 text-[12px] md:text-[18px] font-bold flex items-center justify-center whitespace-nowrap shadow-lg shadow-orange-500/20"
            >
              지원하기
            </Link>
          ) : (
            <span className="bg-(--g7) text-(--g5) h-9 md:h-11 rounded-full px-4 md:px-6 text-[12px] md:text-[18px] font-bold flex items-center justify-center whitespace-nowrap cursor-not-allowed">
              지원하기
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
