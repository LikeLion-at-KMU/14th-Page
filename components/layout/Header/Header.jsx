import HeaderNav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg h-[88px] w-full">
      {/* 1440 기준 컨테이너 */}
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 md:px-[156px]">
        <Link href="/" className="flex items-center">
          <img
            src="KMU_Logo.png"
            alt="LIKELION KMU"
            width={80}
            height={80}
          />
        </Link>

        <div className="flex items-center gap-[60px]">
          <HeaderNav />
          <Link
            href="https://example.com/apply"
            className="button-base h-[41px] rounded-btn px-5 text-[14px] leading-[17px]"
          >
            14기 지원하기
          </Link>
        </div>
      </div>
    </header>
  );
}
