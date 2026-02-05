import SectionLayout from "@/components/common/SectionLayout";
import { faqs } from "@/constants/faqs";
import Link from 'next/link';

function FAQItem({ q, a }) {
  return (
    <div className="w-[780px] rounded-[24px] bg-[var(--g8)] px-[48px] py-[32px]">
      <div className="flex flex-col gap-3">
        <p className="text-[24px] font-semibold leading-[183%] text-text">
          <span className="text-primary mr-1">Q.</span> {q}
        </p>
        <p className="text-[20px] font-normal leading-[160%] text-[var(--g4)] break-keep">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {

  return (
    <SectionLayout
      title="자주 묻는 질문"
      description={
        <>
          이외에도 궁금한 점이 있으시면 언제든 <Link href="https://www.instagram.com/likelion_kmu" target="_blank" className="text-primary">인스타그램(@likelion_kmu)</Link>으로<br />문의 주시면 빠르게 답변 드리겠습니다.
        </>
      }
    >
      <div className="flex w-[780px] flex-col gap-5">
        {faqs.map((item) => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </SectionLayout>
  );
}
