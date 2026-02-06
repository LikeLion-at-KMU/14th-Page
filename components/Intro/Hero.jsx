import SectionLayout from "@/components/common/SectionLayout";

export default function Hero({ children }) {
  return (
    <div className="flex w-full flex-col items-center pt-[140px] md:pt-[88px]">
      <SectionLayout
        image={
          <>
            {/* 모바일: 50x50 로고 */}
            <img
              src="/LikeLion_Logo.svg"
              alt="멋사대학 로고"
              className="block md:hidden w-[50px] h-[50px]"
              draggable={false}
            />
            {/* 데스크톱: 207x52 로고 */}
            <img
              src="/LikeLion_Logo.svg"
              alt="멋사대학 로고"
              className="hidden md:block"
              width={207}
              height={52}
              draggable={false}
            />
          </>
        }
        title="멋쟁이사자처럼 at 국민대"
        description={
          <>
            멋쟁이사자처럼 대학은 <span className="text-primary">전국 최대 규모 IT 개발/창업 동아리</span>로,
            <br />
            웹 서비스 기획·디자인·개발을 통해 아이디어를 실제 서비스로 구현하며
            <br />
            협업 경험을 쌓는 동아리입니다.
          </>
        }
      >
        {children}
      </SectionLayout>
    </div>
  );
}
