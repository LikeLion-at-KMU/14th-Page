import SectionLayout from "../common/SectionLayout";
import { notices } from '../../constants/notices';

function NoticeItem({icon, title, desc}){
  return(
    <div className=" flex flex-col w-[322px] h-[269px] gap-4 bg-[var(--g15)] rounded-[24px] px-8 py-9">
      <div className="flex flex-col gap-2">
        <img src={icon} alt="" className="w-12 h-12 object-cover" draggable={false} />
        <p className="font-bold text-[24px] leading-[29px] tar text-[var(--g7)] tracking-[-0.02em]">{title}</p>
      </div>
      <div className="text-[16px] leading-[140%] text-[var(--g6)] tracking-[-0.02em]">{desc}</div>
    </div>
  );
};


export function Notice(){
  return(
    <SectionLayout
      title = "지원 전 필독 사항"
      description = {<>안 읽으시면 기디 파트장님이 찾아가서 혼내줍니다.</>}
    >
      <div className="grid grid-cols-2 gap-5">
        {notices.map((notice) => (
          <NoticeItem key={notice.title} {...notice} />
        ))}
      </div>
      
    </SectionLayout>
  )
}