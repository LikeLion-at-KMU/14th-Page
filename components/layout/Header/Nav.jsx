"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  const linkClass = (path) => {
    const isActive = pathname === path;
    return [
      "text-[14px] leading-[17px]",
      isActive
        ? "font-bold text-text-strong"
        : "font-semibold text-text-muted hover:text-text-strong",
    ];
  };

  return (
    /* gap-[15px] md:gap-[60px]: 모바일에서 공간 확보 */
    <nav className="flex items-center gap-[48px] md:gap-[60px] whitespace-nowrap">
      <Link href="/" className={linkClass("/")}>
        소개
      </Link>
      <Link href="/recruit" className={linkClass("/recruit")}>
        모집 안내
      </Link>
      <Link href="/staff" className={linkClass("/staff")}>
        운영진
      </Link>
    </nav>
  );
}
