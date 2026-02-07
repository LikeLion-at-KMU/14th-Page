import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--bg)] border-t border-[var(--g6)]/10 py-[28px] md:py-[50px] mt-[60px] md:mt-[100px]">
      <div className="mx-auto px-[20px] md:px-[156px] flex flex-col">
        {/* [상단 그룹] 정보 및 네비게이션 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          <div className="flex flex-col gap-1 md:gap-4">
            <h2 className="text-[var(--text-strong)] text-[1.125rem] md:text-[1.375rem] font-semibold">
              국민대학교 멋쟁이사자처럼
            </h2>
            <p className="text-[var(--text-subtle)] text-[0.75rem] md:text-[0.875rem] font-medium">
              서울특별시 성북구 정릉로 77 복지관 237호
            </p>
          </div>

          {/* 오른쪽: Nav 및 지원 버튼 */}
          <div className="hidden md:flex items-center gap-[40px]">
            <nav className="flex items-center gap-[60px] text-[var(--g2)] text-[0.875rem] font-semibold">
              <Link href="/" className="hover:text-[var(--text-strong)]">
                소개
              </Link>
              <Link href="/recruit" className="hover:text-[var(--text-strong)]">
                모집 안내
              </Link>
              <Link href="/staff" className="hover:text-[var(--text-strong)]">
                운영진
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfU5Z8FDiC5vUmG8qXwrz6ZPm-B5CeCcBXx_MspYp04zNnn_w/viewform"
                className="bg-[var(--mssa-orange)] text-[var(--g1)] h-[36px] md:h-[41px] rounded-full px-4 md:px-5 text-[12px] md:text-[14px] font-bold flex items-center justify-center whitespace-nowrap shadow-lg shadow-orange-500/20"
              >
                14기 지원하기
              </Link>
            </nav>
          </div>
        </div>

        {/* [하단 그룹] Copyright 및 소셜 아이콘*/}

        {/* 모바일에서는 flex-col로 세로 정렬, PC(md)에서는 flex-row로 양끝 정렬 및 바닥 맞춤 */}
        <div className="mt-[12px] md:mt-[44px] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
          {/* 왼쪽: Copyright */}
          <p className="text-[var(--g6)] text-[0.625rem] md:text-[0.75rem] font-medium ">
            Copyright© 2026 All rights reserved by LikeLion KMU
          </p>

          {/* 오른쪽: 소셜 아이콘 */}
          {/* 모바일에서 글자와 아이콘 사이의 간격은 gap-6으로 유지했습니다. */}
          <div className="flex items-center gap-3 md:gap-8">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

{
  /* 소셜 아이콘 컴포넌트 */
}
function SocialIcons() {
  return (
    <>
      <Link
        href="https://www.instagram.com/likelion_kmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/footer/instagram.png"
          alt="Instagram"
          width={28} // 기존 사이즈 24 유지
          height={28}
          className="block w-[18px] h-[18px] md:w-[28px] md:h-[28px]"
        />
      </Link>
      <Link
        href="https://github.com/likelion-kookmin/14th_assignment"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/footer/github.png"
          alt="Github"
          width={28}
          height={28}
          className="block w-[18px] h-[18px] md:w-[28px] md:h-[28px]"
        />
      </Link>
    </>
  );
}
