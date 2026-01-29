function Img({ src, aspect, dim }) {
  return (
    <div className={`relative overflow-hidden rounded-[16px] ${aspect}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={src} 
        alt="" 
        className="h-full w-full object-cover" 
        style={{ opacity: dim ? 0.25 : 1 }} 
        draggable={false} 
      />
      <div className="pointer-events-none  absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />
    </div>
  );
}

export default function GalleryStrip() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center gap-10 px-4">
      <div className="flex-1">
        <Img src="/gallery/Img1.png" aspect="aspect-[427/240]" dim/>
      </div>

      <div className="flex-[1.33]">
        <Img src="/gallery/Img1.png" aspect="aspect-[569/320]" />
      </div>

      <div className="flex-1">
        <Img src="/gallery/Img1.png" aspect="aspect-[427/240]" dim/>
      </div>
    </div>
  );
}
