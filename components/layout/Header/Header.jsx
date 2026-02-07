import HeaderNav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    /* h-auto md:h-[88px]: 모바일에서는 내용에 따라 늘어나게, 데스크탑은 88px 고정 */
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--g6)]/10 h-auto md:h-[88px] w-full py-4 md:py-0">
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
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfU5Z8FDiC5vUmG8qXwrz6ZPm-B5CeCcBXx_MspYp04zNnn_w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--mssa-orange)] text-[var(--g1)] h-[36px] md:h-[41px] rounded-full px-4 md:px-5 text-[12px] md:text-[14px] font-bold flex items-center justify-center whitespace-nowrap shadow-lg shadow-orange-500/20"
          >
            지원하기
          </Link>
        </div>
      </div>
    </header>
  );
}
