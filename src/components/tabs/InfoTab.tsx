import React from "react";
import { Sliders } from "lucide-react";

interface InfoTabProps {
  eventTitle: string;
  setEventTitle: (v: string) => void;
  eventSub: string;
  setEventSub: (v: string) => void;
  eventDate: string;
  setEventDate: (v: string) => void;
  eventTime: string;
  setEventTime: (v: string) => void;
  eventLoc: string;
  setEventLoc: (v: string) => void;
  shohibulTitle: string;
  setShohibulTitle: (v: string) => void;
  footerText: string;
  setFooterText: (v: string) => void;
  numberPrefix: string;
  setNumberPrefix: (v: string) => void;
  numberStart: number;
  setNumberStart: (v: number) => void;
  numberPad: number;
  setNumberPad: (v: number) => void;
}

export default function InfoTab({
  eventTitle,
  setEventTitle,
  eventSub,
  setEventSub,
  eventDate,
  setEventDate,
  eventTime,
  setEventTime,
  eventLoc,
  setEventLoc,
  shohibulTitle,
  setShohibulTitle,
  footerText,
  setFooterText,
  numberPrefix,
  setNumberPrefix,
  numberStart,
  setNumberStart,
  numberPad,
  setNumberPad
}: InfoTabProps) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Judul Kupon</label>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
          placeholder="Kupon Daging Qurban"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sub-judul / Tahun</label>
        <input
          type="text"
          value={eventSub}
          onChange={(e) => setEventSub(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
          placeholder="Eid Al-Adha 1447 H / 2026 M"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">📅 Tanggal</label>
          <input
            type="text"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            placeholder="📅 Mei 2026"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">🕒 Waktu</label>
          <input
            type="text"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            placeholder="🕒 08.00 - Selesai"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">📍 Lokasi Pengambilan</label>
        <input
          type="text"
          value={eventLoc}
          onChange={(e) => setEventLoc(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
          placeholder="📍 Area Keluarga"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Header Box Shohibul</label>
        <input
          type="text"
          value={shohibulTitle}
          onChange={(e) => setShohibulTitle(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
          placeholder="Shohibul Kurban..."
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Catatan Kaki (Footer)</label>
        <textarea
          value={footerText}
          onChange={(e) => setFooterText(e.target.value)}
          rows={2}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 resize-none"
          placeholder="*Harap membawa kupon ini..."
        />
      </div>

      <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Sliders className="w-3.5 h-3.5 text-emerald-400" />
          Format Penomoran
        </h4>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-[10px] text-slate-400 font-bold mb-1">Prefix</label>
            <input
              type="text"
              value={numberPrefix}
              onChange={(e) => setNumberPrefix(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded py-1 px-2 text-xs text-slate-200 text-center"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 font-bold mb-1">Mulai</label>
            <input
              type="number"
              value={numberStart}
              onChange={(e) => setNumberStart(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-slate-900 border border-slate-700 rounded py-1 px-2 text-xs text-slate-200 text-center"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 font-bold mb-1">Digit</label>
            <input
              type="number"
              value={numberPad}
              onChange={(e) => setNumberPad(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-slate-900 border border-slate-700 rounded py-1 px-2 text-xs text-slate-200 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
