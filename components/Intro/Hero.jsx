
export default function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center w-full max-w-[744px] h-[309px] gap-9 text-center">
      <img src="/LikeLion_Logo.svg" alt="멋사대학 로고" width={207} height={252}/>
      <h1 className="text-[44px] font-bold leading-[53px] text-text-strong ">
        멋쟁이사자처럼 at 국민대
      </h1>

      <p className="text-[24px] font-medium leading-[183%] text-text ">
        멋쟁이사자처럼 대학은 <span className="text-primary">전국 최대 규모 IT 개발/창업 동아리</span>로, <br/>
        웹 서비스 기획·디자인·개발을 통해 아이디어를 실제 서비스로 구현하며 <br />
        협업 경험을 쌓는 동아리입니다.
      </p>
    </div>
  )
}