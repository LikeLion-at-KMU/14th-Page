function Img({ src, aspect, dim }) {
  return (
    <div className={`relative overflow-hidden rounded-[5px] md:rounded-[16px] ${aspect}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        style={{ opacity: dim ? 0.25 : 1 }}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />
    </div>
  );
}

export default function GalleryStrip() {
  return (
    <div className="mx-auto flex w-full max-w-[488px] md:max-w-[1440px] items-center justify-center gap-3 md:gap-10 px-0 md:px-4">
      {/* 모바일: 138x78, 데스크톱: flex-1 */}
      <div className="w-[138px] md:w-auto md:flex-1 shrink-0 md:shrink">
        <Img src="/gallery/Img1.png" aspect="aspect-[138/78] md:aspect-[427/240]" dim/>
      </div>

      {/* 모바일: 184x103, 데스크톱: flex-[1.33] */}
      <div className="w-[184px] md:w-auto md:flex-[1.33] shrink-0 md:shrink">
        <Img src="/gallery/Img1.png" aspect="aspect-[184/103] md:aspect-[569/320]" />
      </div>

      {/* 모바일: 138x78, 데스크톱: flex-1 */}
      <div className="w-[138px] md:w-auto md:flex-1 shrink-0 md:shrink">
        <Img src="/gallery/Img1.png" aspect="aspect-[138/78] md:aspect-[427/240]" dim/>
      </div>
    </div>
  );
}
