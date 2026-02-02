export default function SectionLayout({ title, description, image, children, className = "" }) {
  return (
    <section className={`flex w-full flex-col items-center py-[100px] ${className}`}>
      <div className="flex flex-col items-center gap-6 text-center">
        {image && <div className="mb-1">{image}</div>}
        <h2 className="text-[40px] font-bold leading-[48px] text-text-strong">
          {title}
        </h2>
        {description && (
          <p className="text-[20px] font-medium leading-[183%] text-text-muted">
            {description}
          </p>
        )}
      </div>

      <div className="mt-[52px] flex w-full flex-col items-center gap-[52px]">
        {children}
      </div>
    </section>
  );
}
