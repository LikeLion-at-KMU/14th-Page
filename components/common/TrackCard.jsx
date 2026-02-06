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

export default function TrackCard({
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

  // 1) card size
  const cardSizeClass = variant === "wide" ? "w-[734px]" : "w-[320px]";
  const innerSizeClass = variant === "wide" ? "h-[285px]" : "h-[412px]";

  // 2) image positioning
  const imgClass =
    variant === "wide"
      ? "absolute left-[134px] top-[142px] h-[171px] w-[180px] object-cover -translate-1/2"
      : "absolute left-1/2 top-[48px] h-[214px] w-[226px] -translate-x-1/2 object-cover";


  // 3) content positioning
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
