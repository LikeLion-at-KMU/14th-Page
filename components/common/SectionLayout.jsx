export default function SectionLayout({ title, description, image, children, className = "" }) {
  return (
    <section className={`flex w-full flex-col items-center py-12 md:py-[100px] px-5 md:px-0 ${className}`}>
      <div className="flex flex-col items-center gap-2 md:gap-6 text-center">
        {image && <div className="mb-1">{image}</div>}
        <h2 className="text-[20px] md:text-[40px] font-bold leading-[24px] md:leading-[48px] text-text-strong">
          {title}
        </h2>
        {description && (
          <div className="text-[10px] md:text-[20px] font-medium leading-[183%] text-text-muted">
            {description}
          </div>
        )}
      </div>

      <div className="mt-8 md:mt-[52px] flex w-full flex-col items-center gap-8 md:gap-[52px]">
        {children}
      </div>
    </section>
  );
}
