const PANEL_PRESET = {
  tall: { left: 30, top: 90, width: 240, height: 240, radius: 24 },
  wide: { left: 30, top: 85, width: 180, height: 180, radius: 24 },
};

function toVarStyle(panel) {
  return {
    "--img-panel-left": `${panel.left}px`,
    "--img-panel-top": `${panel.top}px`,
    "--img-panel-w": `${panel.width}px`,
    "--img-panel-h": `${panel.height}px`,
    "--img-panel-r": `${panel.radius}px`,
  };
}

/* 데스크톱 트랙카드 */
function TrackCardDesktop({
  variant = "tall",
  roleEn,
  roleKo,
  desc,
  imageSrc,
  className = "",
  panelOverride,
}) {
  const basePanel = PANEL_PRESET[variant] || PANEL_PRESET.tall;
  const panel = { ...basePanel, ...(panelOverride || {}) };
  const panelStyle = toVarStyle(panel);

  const cardSizeClass = variant === "wide" ? "w-[734px]" : "w-[320px]";
  const innerSizeClass = variant === "wide" ? "h-[285px]" : "h-[412px]";

  const imgClass =
    variant === "wide"
      ? "absolute left-[134px] top-[142px] h-[171px] w-[180px] object-cover -translate-1/2"
      : "absolute left-1/2 top-[48px] h-[214px] w-[226px] -translate-x-1/2 object-cover";

  const contentPosClass =
    variant === "wide"
      ? "left-[268px] right-[36px] top-[48px] gap-3"
      : "left-[36px] right-[36px] top-[294px] gap-2";

  const roleKoClass =
    variant === "wide"
      ? "text-[28px] font-semibold leading-[33px]"
      : "text-[32px] font-semibold leading-[38px]";

  const rootClass = `track-card track-card--imgpanel ${cardSizeClass} ${className}`.trim();
  const innerClass = `track-card-inner relative w-full ${innerSizeClass}`.trim();
  const contentClass = `track-card-content absolute flex flex-col ${contentPosClass}`.trim();

  return (
    <div className={rootClass} style={panelStyle}>
      <div className={innerClass}>
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt="" draggable={false} className={imgClass} />
        ) : null}

        <div className={contentClass}>
          <p className="text-[20px] font-medium leading-[24px] text-primary">{roleEn}</p>
          <p className={`text-text-strong ${roleKoClass}`.trim()}>{roleKo}</p>
          {variant === "wide" && desc ? (
            <p className="mt-3 text-[20px] leading-[160%] text-text-muted break-keep">{desc}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* 모바일 트랙카드 */
function TrackCardMobile({
  variant = "tall",
  roleEn,
  roleKo,
  desc,
  imageSrc,
  className = "",
}) {
  // wide: 336x134 (Figma 모바일 스펙)
  if (variant === "wide") {
    return (
      <div 
        className={`track-card track-card--imgpanel w-[336px] ${className}`.trim()}
        style={{
          "--img-grad-x": "12.5%",
          "--img-grad-y": "27%",
          "--img-grad-size-x": "14.5%",
          "--img-grad-size-y": "14.5%",
        }}  
      >
        <div className="track-card-inner flex h-[134px] w-full items-center px-4 py-5 gap-4">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt=""
              draggable={false}
              className="h-[80px] w-[84px] object-cover shrink-0"
            />
          ) : null}

          <div className="track-card-content flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-medium leading-[12px] text-primary">{roleEn}</p>
              <p className="text-[12px] font-semibold leading-[14px] text-text-strong">{roleKo}</p>
            </div>
            {desc ? (
              <p className="text-[10px] leading-[160%] text-text-muted break-keep">{desc}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  // tall variant (기본)
  return (
    <div className={`track-card track-card--imgpanel w-[105px] ${className}`.trim()}>
      <div className="track-card-inner relative h-[170px] w-full">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt=""
            draggable={false}
            className="absolute left-1/2 top-[20px] h-[88px] w-[93px] -translate-x-1/2 object-cover"
          />
        ) : null}

        <div className="track-card-content absolute left-[12px] right-[12px] top-[121px] flex flex-col gap-1">
          <p className="text-[8px] font-medium leading-[10px] text-primary">{roleEn}</p>
          <p className="text-[13px] font-semibold leading-[16px] text-text-strong">{roleKo}</p>
        </div>
      </div>
    </div>
  );
}

export default function TrackCard(props) {
  return (
    <>
      <div className="hidden md:block">
        <TrackCardDesktop {...props} />
      </div>
      <div className="block md:hidden">
        <TrackCardMobile {...props} />
      </div>
    </>
  );
}
