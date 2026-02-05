"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { key: "common", label: "공통", w: 83 },
  { key: "front", label: "프론트엔드", w: 135 },
  { key: "back", label: "백엔드", w: 100 },
  { key: "design", label: "기획/디자인", w: 142 },
];

export default function PartSwitch({ value, onChange }) {
  return (
    <div
      className="flex h-[52px] w-[460px] items-center rounded-[26px] bg-[var(--g7)]"
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
            {/* 활성 pill: shared layout (layoutId) */}
            {active ? (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 rounded-[26px] bg-primary"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  mass: 0.8,
                }}
              />
            ) : null}

            {/* 텍스트는 pill 위로 */}
            <span
              className={`relative text-[20px] leading-[180%] text-center ${
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
  );
}
