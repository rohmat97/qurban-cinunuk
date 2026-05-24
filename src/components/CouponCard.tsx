import React from "react";

export interface CouponCardProps {
  couponId: number;
  number: string;
  recipientName?: string;
  eventTitle: string;
  eventSub: string;
  eventDate: string;
  eventTime: string;
  eventLoc: string;
  shohibulTitle: string;
  col1: string[];
  col2: string[];
  footerText: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  borderColor: string;
  borderStyle: "double" | "solid" | "dashed";
  bannerColor: string;
  bannerTextColor: string;
  accentGold: boolean;
}

export default function CouponCard({
  number,
  recipientName = "",
  eventTitle,
  eventSub,
  eventDate,
  eventTime,
  eventLoc,
  shohibulTitle,
  col1,
  col2,
  footerText,
  primaryColor,
  secondaryColor,
  textColor,
  borderColor,
  borderStyle,
  bannerColor,
  bannerTextColor,
  accentGold
}: CouponCardProps) {
  // Border thickness based on style
  const borderStyleCSS = {
    double: `6px double ${borderColor}`,
    solid: `3px solid ${borderColor}`,
    dashed: `3px dashed ${borderColor}`
  };

  const totalNames = col1.length + col2.length;
  // Calculate dynamic font size and vertical gap based on number of names to perfectly fill the space.
  // We lower the minimum cap from 11px to 8.5px to ensure larger lists (like 14 names) fit perfectly in 1 column without pushing the footer out!
  const dynamicFontSize = `${Math.max(8.5, Math.min(15, 14.2 - totalNames * 0.45))}px`;
  const dynamicGap = `${Math.max(1.5, Math.min(8, 9 - totalNames * 0.5))}px`;

  return (
    <div
      className="w-full h-full rounded-md shadow-sm relative overflow-hidden select-none flex flex-col justify-between qurban-card"
      style={{
        backgroundColor: secondaryColor,
        border: borderStyleCSS[borderStyle],
        padding: "16px",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        color: textColor
      }}
    >
      {/* Accent Gold Corners */}
      {accentGold && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-yellow-600/40 rounded-tl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-yellow-600/40 rounded-tr" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-yellow-600/40 rounded-bl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-yellow-600/40 rounded-br" />
        </>
      )}

      {/* HEADER SECTION */}
      <div className="text-center relative">
        <h3
          className="text-base font-extrabold uppercase tracking-wide m-0"
          style={{ color: primaryColor, fontSize: "16.5px" }}
        >
          {eventTitle}
        </h3>
        <p className="text-[11px] font-bold opacity-80 m-0 mt-0.5" style={{ color: "#444444" }}>
          {eventSub}
        </p>
      </div>

      {/* DECORATIVE SEPARATOR */}
      <div
        className="w-full my-1"
        style={{
          borderTop: `1px dashed ${primaryColor}`,
          opacity: 0.8
        }}
      />

      {/* RECIPIENT INFORMATION (DYNAMIC FILL OR BLANK DOTTED) */}
      <div className="space-y-1 py-0.5">
        {recipientName ? (
          /* Auto-filled Mode Display */
          <div className="space-y-0.5 bg-slate-500/5 p-2 rounded border border-slate-300/20">
            <div className="flex items-center text-[10.5px]">
              <span className="w-16 font-extrabold opacity-75">NO. KUPON</span>
              <span className="mx-1 font-bold">:</span>
              <span className="font-mono font-extrabold text-[12px]" style={{ color: primaryColor }}>
                {number}
              </span>
            </div>
            <div className="flex items-center text-[10.5px]">
              <span className="w-16 font-extrabold opacity-75">NAMA</span>
              <span className="mx-1 font-bold">:</span>
              <span className="font-extrabold text-[11.5px] uppercase truncate" style={{ color: primaryColor }}>
                {recipientName}
              </span>
            </div>
          </div>
        ) : (
          /* Blank Manual Mode Display */
          <>
            <div className="flex items-center text-[11px] font-bold">
              <span className="w-20 flex-shrink-0">NO. KUPON :</span>
              <div
                className="flex-1 font-mono text-[11.5px] font-bold text-center pl-2"
                style={{
                  borderBottom: "1.5px dotted #555555",
                  height: "15px",
                  color: primaryColor
                }}
              >
                {number}
              </div>
            </div>
            <div className="flex items-center text-[11px] font-bold">
              <span className="w-20 flex-shrink-0">NAMA :</span>
              <div
                className="flex-1"
                style={{
                  borderBottom: "1.5px dotted #555555",
                  height: "15px"
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* EVENT LOGISTICS META */}
      <div
        className="flex justify-between items-center py-1 px-2.5 rounded font-extrabold my-1 text-[9.5px]"
        style={{
          backgroundColor: `${primaryColor}15`,
          color: primaryColor
        }}
      >
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>{eventDate}</span>
        </div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>{eventTime}</span>
        </div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>{eventLoc}</span>
        </div>
      </div>

      {/* SHOHIBUL BOX */}
      <div className="flex-1 flex flex-col justify-start">
        <div
          className="text-[10px] font-extrabold text-center uppercase tracking-wide py-1 rounded-sm shadow-sm"
          style={{
            backgroundColor: bannerColor,
            color: bannerTextColor
          }}
        >
          {shohibulTitle}
        </div>

        {/* Shohibul list table 1 column */}
        <div
          className="mt-1 overflow-y-auto pr-1 flex-1 flex flex-col justify-start"
          style={{ gap: dynamicGap }}
        >
          {[...col1, ...col2].map((name, i) => (
            <div
              key={i}
              className="font-bold flex items-start gap-1.5 leading-tight text-slate-800"
              style={{ fontSize: dynamicFontSize }}
            >
              <span className="opacity-60 w-4 text-right flex-shrink-0">{i + 1}.</span>
              <span className="break-words whitespace-normal flex-1" title={name}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="text-[8.5px] text-center font-bold italic mt-1.5 pt-1 opacity-80"
        style={{
          borderTop: "1px solid #dddddd",
          color: "#444444"
        }}
      >
        {footerText}
      </div>
    </div>
  );
}
