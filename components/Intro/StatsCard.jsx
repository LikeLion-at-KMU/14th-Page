import AnimatedCounter from "../common/AnimatedCounter";

function Stat({label, value, suffix}) {
  const hasPlus = value.includes("+");
  const numericValue = Number(value.replace(/[,+]/g, ""));
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="text-[20px] font-semibold leading-[140%] text-[var(--g3)]">{label}</div>
      <div className="relative h-[78px] tabular-nums">
        {/* 최종 값으로 너비 예약 (보이지 않음) */}
        <div className="invisible flex items-end justify-center gap-1" aria-hidden="true">
          <span className="text-[56px] font-bold leading-[140%] tracking-[-0.02em]">{value}</span>
          {suffix && (
            <span className="pb-[12px] text-[32px] font-bold leading-[140%] tracking-[-0.02em]">{suffix}</span>
          )}
        </div>
        {/* 실제 애니메이션 값 (absolute로 너비 변해도 레이아웃 안 흔들림) */}
        <div className="absolute inset-0 flex items-end justify-center gap-1">
          <span className="text-[56px] font-bold leading-[140%] tracking-[-0.02em] text-primary">
            <AnimatedCounter to={numericValue} />
          </span>
          {hasPlus && (
            <span className="text-[56px] font-bold leading-[140%] tracking-[-0.02em] text-text-subtle">+</span>
          )}
          {suffix && (
            <span className="pb-[12px] text-[32px] font-bold leading-[140%] tracking-[-0.02em] text-text-subtle">
              {suffix}
            </span>
          )}
        </div>
      </div>
    </div>
  )
};


export default function StatsCard() {
  return(
    <div className="w-full max-w-[912px] rounded-card bg-surface">
      <div className="flex items-center justify-center gap-[60px] py-[48px]">
        <Stat label="시작된 지" value="13" suffix="년" />
        <Stat label="참여 대학" value="80+" />
        <Stat label="멋대 출신 학생 수" value="14,000+" />
        <Stat label="누적 완성 서비스" value="1,800+"/>
      </div>
    </div>
  )
}
