
function Stat({label, value, suffix}) {
  const hasPlus = value.includes("+");
  const mainValue = hasPlus ? value.slice(0, -1) : value;
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="text-[24px] font-semibold leading-[140%] text-[var(--g3)]">{label}</div>
      <div className="flex items-end gap-1">
        <span className="text-[64px] font-bold leading-[140%] tracking-[-0.02em] text-primary">{mainValue}</span>
        {hasPlus && (
          <span className="text-[64px] font-bold leading-[140%] tracking-[-0.02em] text-text-subtle">+</span>
        )}
        <span className={`pb-[16px] text-[36px] font-bold leading-[140%] tracking-[-0.02em] text-text-subtle`}>
            {suffix}
        </span>
      </div>
    </div>
  )
};


export default function StatsCard() {
  return(
    <div className="relative mx-auto w-full max-w-[1128px] rounded-card bg-surface">
      <div className="flex items-center justify-center gap-[92px] py-[68px]">
        <Stat label="시작된 지" value="13" suffix="년" />
        <Stat label="참여 대학" value="80+" />
        <Stat label="멋대 출신 학생 수" value="14,000+" />
        <Stat label="누적 완성 서비스" value="1,800+"/>
      </div>
    </div>
  )
}