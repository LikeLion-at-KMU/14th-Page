"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { key: "common", label: "공통", w: 83, wMobile: 53 },
  { key: "front", label: "프론트엔드", w: 135, wMobile: 84 },
  { key: "back", label: "백엔드", w: 100, wMobile: 64 },
  { key: "design", label: "기획/디자인", w: 142, wMobile: 89 },
];

export default function PartSwitch({ value, onChange, scopeId }) {
  return (
    <>
      {/* 데스크톱: 460x52 */}
      <div
        className="hidden md:flex h-[52px] w-[460px] items-center rounded-[26px] bg-[var(--g7)]"
        role="tablist"
        aria-label="커리큘럼 파트 필터"
      >
        {ITEMS.map((item) => {
          const active = value === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              className="relative flex h-full items-center justify-center rounded-[26px] px-[24px] outline-none"
              style={{ width: `${item.w}px` }}
              role="tab"
              aria-selected={active}
            >
              {active ? (
                <motion.span
                  layoutId={`${scopeId}-active-pill-desktop`}
                  className="absolute inset-0 rounded-[26px] bg-primary"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.8,
                  }}
                />
              ) : null}
              <span
                className={`relative text-[20px] leading-[180%] text-center whitespace-nowrap ${
                  active
                    ? "font-bold text-[var(--g1)]"
                    : "font-semibold text-[var(--g5)]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 모바일: 290x30 */}
      <div
        className="flex md:hidden h-[30px] w-[290px] items-center rounded-[20px] bg-[var(--g7)]"
        role="tablist"
        aria-label="커리큘럼 파트 필터"
      >
        {ITEMS.map((item) => {
          const active = value === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              className="relative flex h-full items-center justify-center rounded-[20px] px-4 outline-none"
              style={{ width: `${item.wMobile}px` }}
              role="tab"
              aria-selected={active}
            >
              {active ? (
                <motion.span
                  layoutId={`${scopeId}-active-pill-mobile`}
                  className="absolute inset-0 rounded-[20px] bg-primary"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.8,
                  }}
                />
              ) : null}
              <span
                className={`relative text-[12px] leading-[180%] text-center whitespace-nowrap ${
                  active
                    ? "font-bold text-[var(--g1)]"
                    : "font-semibold text-[var(--g5)]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
