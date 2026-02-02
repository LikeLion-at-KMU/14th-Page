function CTAButton({href, label}){
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex h-[177px] w-[704px]
        items-center justify-center
        rounded-[117px]
        bg-primary
        px-[80px] py-[60px]
        text-center
        text-[48px] font-bold leading-[57px]
        text-on-primary
        whitespace-nowrap
        transition
        hover:opacity-90
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4
      "
    >
      {label}
    </a>
  );
}

export default function BottomCTA(){
  return (
    <section className="flex w-full flex-col items-center py-[100px]">
      <div className="flex flex-col items-center gap-[157px]">
        <h2 className="text-center text-[48px] font-bold text-text-strong">멋쟁이사자처럼 at 국민대가<br />성공으로 도약할 여러분을<br />기다리고 있어요!</h2>
        <CTAButton href="https://example.com/apply" label="지금 14기 아기사자 지원하기"/>
      </div>
    </section>
  )
}
