"use client";

import React, { useState, useMemo } from "react";
import {
  Printer,
  Plus,
  Trash2,
  Settings,
  Users,
  Calendar,
  MapPin,
  Clock,
  LayoutGrid,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sparkles,
  Check,
  FileText,
  FileSpreadsheet,
  Palette,
  Eye,
  Sliders,
  PrinterIcon,
  ChevronsUpDown,
  BookOpen
} from "lucide-react";

export default function QurbanCouponApp() {
  // Shohibul Qurban Family List State
  const [shohibulList, setShohibulList] = useState<string[]>([
    "Een Sumarni binti Umar",
    "Rizal Nugraha bin Dwi  Priyono dan Keluarga",
    "Itang Dahyar bin Umar dan Keluarga",
    "Kory Anggraeni binti Itang",
    "Citra Maulidiah binti Bakhtiar",
    "Acep Roni bin Umar dan Keluarga",
    "Khusnul Yusran Taufik bin Acep",
    "Yadi Rusmaryadi bin Ewen Ruswandi",
    "Ade Maryati binti Umar",
    "Rezki Novansyah bin Sonny",
    "Vani Marindani binti Yadi",
    "Revandra adhyasta alkhalifi bin rezki novansyah",
    "Rasheza kamila zahra binti rezki novansyah",
    "Rindu Mayangsari Binti Titing Sukarti"
  ]);

  const [newShohibul, setNewShohibul] = useState("");
  const [shohibulTextarea, setShohibulTextarea] = useState("");
  const [showBulkShohibul, setShowBulkShohibul] = useState(false);

  // Coupon Core Info State
  const [eventTitle, setEventTitle] = useState("Kupon Daging Qurban");
  const [eventSub, setEventSub] = useState("Eid Al-Adha 1447 H / 2026 M");
  const [eventDate, setEventDate] = useState("📅 Mei 2026");
  const [eventTime, setEventTime] = useState("🕒 08.00 WIB - Selesai");
  const [eventLoc, setEventLoc] = useState("📍 Area Keluarga");
  const [shohibulTitle, setShohibulTitle] = useState("Shohibul Kurban (Kel. Besar H. Umar Sumarya 2026)");
  const [footerText, setFooterText] = useState("*Harap membawa kupon ini saat pengambilan daging. Jazakumullah Khair.");

  // Generation Settings State
  const [recipientMode, setRecipientMode] = useState<"blank" | "prefilled">("prefilled");
  const [blankCount, setBlankCount] = useState(12); // Number of blank coupons (3 pages of 4)
  const [recipients, setRecipients] = useState<string[]>([
    "BI APON",
    "BI ISOH",
    "CEP BALAN",
    "MANG AOM",
    "PIAH",
    "BI WATI",
    "CEU ODAH",
    "YAYAH ETI DEDI",
    "YAYAH PA TETEN",
    "CEU ROHAYA",
    "BI ANI",
    "PA IDI",
    "BU AI TIRAI",
    "NYAI",
    "DEDE ASIH",
    "UA TITI",
    "LILIS",
    "EVA/WOWO",
    "ACID",
    "IWAN",
    "EDI",
    "NENG SARAH",
    "CEU EMI",
    "UJANG",
    "DADANG",
    "ENJAH",
    "NENG JAJA",
    "BU IIS",
    "CEU IDA",
    "IMAS",
    "BI ILAH",
    "AJA",
    "IDA C. EUNCAS",
    "MANG ENTANG",
    "CEU ENGKON",
    "U. DOMRET",
    "UMAN",
    "NENG NAI",
    "ETET",
    "C. ENCAS",
    "MANG AMANG",
    "BI YATI",
    "ERNA",
    "BI EKAS",
    "ENENG",
    "ENUNG",
    "DEN WAWAN",
    "BI ISUR",
    "MANG OSO",
    "ABO",
    "UUH",
    "BU IMAS",
    "BU MIMAH",
    "BU IRAH",
    "PA H IMIN",
    "MANG YOYO",
    "RD RUHIYAT",
    "NENG CICI",
    "AI CEU TATI",
    "TINI",
    "IKEU",
    "OPIK",
    "CEU. NEUNEU",
    "UPI",
    "NENG ADIS",
    "BU HJ. ENTIN",
    "BU UKUN",
    "NENG RANI",
    "BU HJ TATIK",
    "MANG ADANG",
    "CEU ETI ODAH",
    "KIKI",
    "PA IDO",
    "TINAH",
    "BI ERAS",
    "YULI",
    "NINING",
    "SARI",
    "ENTI",
    "MANG KOMAR",
    "ENTUT",
    "CEU RODIAH",
    "CEU YUYU",
    "IDA",
    "KIKI/ATE",
    "NANI",
    "TATANG",
    "BU NENENG",
    "PA DADANG",
    "PA H. IDEN",
    "YADI K. ODAN",
    "MANAH",
    "CEU ATIK",
    "CUCU",
    "UCU",
    "NENG DERA",
    "YANI (M. SENA)",
    "NENG PRIDA",
    "BI EULIS",
    "NENG WULAN",
    "BU ATIN",
    "CEU ENOH",
    "DEWI",
    "NENG KINOY",
    "MA ONOH",
    "BI TIA",
    "MA DIAH",
    "AGUS",
    "PA AYEH",
    "JANG JETO",
    "DIDI",
    "MA II",
    "NENG API",
    "RITA",
    "H. ONENG",
    "UJANG",
    "H. ENCANG",
    "H. ENCENG",
    "EWANG",
    "MANG ANAN",
    "BI EMBOT",
    "NENENG",
    "PA ENDING",
    "BI EUNEUNG",
    "IFAN",
    "MAS WIWIN",
    "H. ALI",
    "ENDA",
    "UCU BEAS",
    "BI AAH",
    "JOIS",
    "GEUGEU",
    "MANG AMAN",
    "YATI",
    "NYAI CEU UNA",
    "LINA/ASEP",
    "UJANG (B. EPON)",
    "ONOH",
    "IMAS/EDI",
    "BI AI",
    "EUIS YUYU",
    "TATANG GAS",
    "EPI",
    "BI ADE",
    "AMOH",
    "BI OKOM",
    "BI TUTI",
    "BI ADE",
    "CEU SUMARNI",
    "CEU IYU",
    "BI WATI",
    "LUKI",
    "MANG ENDANG",
    "NANDANG",
    "MA DAIS",
    "ASKA",
    "MANG ENANG",
    "NENG DIAS",
    "BU AI",
    "ENDI",
    "BI OYOH",
    "UJANG DAWEU",
    "ANAH",
    "AMI",
    "AGUS CEU ENDE",
    "ALIT",
    "BU TITIN",
    "P. UJANG / SARAH",
    "ACANG",
    "BU WIWIN",
    "OOM",
    "BI DADAH",
    "NANO",
    "ADE BI ATIK",
    "BU PIAH",
    "DANDAN",
    "FERI",
    "BI KEUIS",
    "UTE",
    "DEDI",
    "IMAS YANTI",
    "HERU",
    "DADI / EEN",
    "AGUS BOBI",
    "NANDANG PANOONGAN",
    "MANG NANA CISARADAN"
  ]);
  const [newRecipient, setNewRecipient] = useState("");
  const [searchRecipient, setSearchRecipient] = useState("");
  const [showBulkRecipients, setShowBulkRecipients] = useState(false);
  const [recipientsTextarea, setRecipientsTextarea] = useState("");
  const [numberPrefix, setNumberPrefix] = useState("Q-");
  const [numberStart, setNumberStart] = useState(1);
  const [numberPad, setNumberPad] = useState(3); // e.g. 001

  // Color Theme & Aesthetic Options
  const [primaryColor, setPrimaryColor] = useState("#2d5a27"); // traditional forest green
  const [secondaryColor, setSecondaryColor] = useState("#fdfbf7"); // warm cream card bg
  const [textColor, setTextColor] = useState("#111111");
  const [borderColor, setBorderColor] = useState("#2d5a27");
  const [borderStyle, setBorderStyle] = useState<"double" | "solid" | "dashed">("double");
  const [bannerColor, setBannerColor] = useState("#cbdcc8");
  const [bannerTextColor, setBannerTextColor] = useState("#2d5a27");
  const [accentGold, setAccentGold] = useState(true);

  // App Layout States
  const [zoom, setZoom] = useState(65); // Preview zoom percentage
  const [activeTab, setActiveTab] = useState<"content" | "recipients" | "shohibul" | "design">("content");
  const [previewSingleId, setPreviewSingleId] = useState<number | null>(null);

  // Preset Colors List
  const colorPresets = [
    {
      name: "Qurban Green (Classic)",
      primary: "#2d5a27",
      secondary: "#fdfbf7",
      border: "#2d5a27",
      banner: "#cbdcc8",
      bannerText: "#2d5a27"
    },
    {
      name: "Royal Emerald",
      primary: "#065f46",
      secondary: "#f0fdf4",
      border: "#065f46",
      banner: "#bbf7d0",
      bannerText: "#065f46"
    },
    {
      name: "Olive Gold",
      primary: "#854d0e",
      secondary: "#fefce8",
      border: "#854d0e",
      banner: "#fef08a",
      bannerText: "#854d0e"
    },
    {
      name: "Midnight Indigo",
      primary: "#1e3a8a",
      secondary: "#f0f9ff",
      border: "#1e3a8a",
      banner: "#bae6fd",
      bannerText: "#1e3a8a"
    },
    {
      name: "Elegant Charcoal",
      primary: "#1f2937",
      secondary: "#f9fafb",
      border: "#374151",
      banner: "#e5e7eb",
      bannerText: "#111827"
    }
  ];

  // Apply a color preset
  const applyPreset = (preset: typeof colorPresets[0]) => {
    setPrimaryColor(preset.primary);
    setSecondaryColor(preset.secondary);
    setBorderColor(preset.border);
    setBannerColor(preset.banner);
    setBannerTextColor(preset.bannerText);
  };

  // Helper to format coupon numbers
  const formatNumber = (num: number) => {
    const padded = String(num).padStart(numberPad, "0");
    return `${numberPrefix}${padded}`;
  };

  // Handle Shohibul List operations
  const addShohibul = () => {
    if (newShohibul.trim()) {
      setShohibulList([...shohibulList, newShohibul.trim()]);
      setNewShohibul("");
    }
  };

  const removeShohibul = (index: number) => {
    const newList = [...shohibulList];
    newList.splice(index, 1);
    setShohibulList(newList);
  };

  const handleBulkShohibul = () => {
    if (shohibulTextarea.trim()) {
      const names = shohibulTextarea
        .split(/[\n,]/)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);
      setShohibulList([...shohibulList, ...names]);
      setShohibulTextarea("");
      setShowBulkShohibul(false);
    }
  };

  const clearShohibul = () => {
    if (confirm("Apakah Anda yakin ingin menghapus semua nama Shohibul?")) {
      setShohibulList([]);
    }
  };

  // Reset Shohibul to the classic Umar Sumarya 2026 family list
  const resetShohibulDefault = () => {
    setShohibulList([
      "Een Sumarni binti Umar",
      "Rizal Nugraha bin Dwi  Priyono dan Keluarga",
      "Itang Dahyar bin Umar dan Keluarga",
      "Kory Anggraeni binti Itang",
      "Citra Maulidiah binti Bakhtiar",
      "Acep Roni bin Umar dan Keluarga",
      "Khusnul Yusran Taufik bin Acep",
      "Yadi Rusmaryadi bin Ewen Ruswandi",
      "Ade Maryati binti Umar",
      "Rezki Novansyah bin Sonny",
      "Vani Marindani binti Yadi",
      "Revandra adhyasta alkhalifi bin rezki novansyah",
      "Rasheza kamila zahra binti rezki novansyah",
      "Rindu Mayangsari Binti Titing Sukarti"
    ]);
  };

  // Recipients operations
  const addRecipient = () => {
    if (newRecipient.trim()) {
      setRecipients([...recipients, newRecipient.trim()]);
      setNewRecipient("");
    }
  };

  const removeRecipient = (index: number) => {
    const newList = [...recipients];
    newList.splice(index, 1);
    setRecipients(newList);
  };

  const handleBulkRecipients = () => {
    if (recipientsTextarea.trim()) {
      const names = recipientsTextarea
        .split(/[\n,]/)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);
      setRecipients(names);
      setRecipientsTextarea("");
      setShowBulkRecipients(false);
    }
  };

  const openBulkRecipients = () => {
    setRecipientsTextarea(recipients.join("\n"));
    setShowBulkRecipients(true);
  };

  const clearRecipients = () => {
    if (confirm("Apakah Anda yakin ingin menghapus semua nama Penerima?")) {
      setRecipients([]);
    }
  };

  // Search filtered recipients with original index tracking
  const filteredRecipients = useMemo(() => {
    if (!searchRecipient.trim()) {
      return recipients.map((name, index) => ({ name, originalIndex: index }));
    }
    const term = searchRecipient.toLowerCase();
    return recipients
      .map((name, index) => ({ name, originalIndex: index }))
      .filter((item) => item.name.toLowerCase().includes(term));
  }, [recipients, searchRecipient]);

  // Total coupons to generate
  const totalCoupons = useMemo(() => {
    if (recipientMode === "blank") {
      return blankCount;
    }
    return recipients.length;
  }, [recipientMode, blankCount, recipients]);

  // Divide into A4 sheets (4 coupons per sheet)
  const totalPages = Math.max(1, Math.ceil(totalCoupons / 4));

  // Dynamic splitting of shohibul list for 2-column layout in coupon
  const splitShohibul = useMemo(() => {
    const midpoint = Math.ceil(shohibulList.length / 2);
    const col1 = shohibulList.slice(0, midpoint);
    const col2 = shohibulList.slice(midpoint);
    return { col1, col2 };
  }, [shohibulList]);

  // Print function
  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans no-print-bg">
      {/* SIDEBAR / CONTROL PANEL */}
      <aside className="w-[420px] bg-slate-800 border-r border-slate-700 flex flex-col h-full z-20 shadow-2xl no-print">
        {/* Header banner */}
        <div className="p-6 bg-gradient-to-r from-emerald-800 to-green-700 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-600/30 rounded-xl border border-emerald-500/20">
              <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight tracking-wide text-white">Qurban Design Studio</h1>
              <p className="text-xs text-emerald-200">Kupon & Daging Qurban Vercel</p>
            </div>
          </div>
          <button
            onClick={triggerPrint}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs rounded-lg transition-all shadow-md active:scale-95"
          >
            <Printer className="w-4 h-4" />
            CETAK
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-700 bg-slate-850 px-2 pt-2">
          <button
            onClick={() => setActiveTab("content")}
            className={`flex-1 py-3 px-1 text-center font-semibold text-xs border-b-2 transition-all ${activeTab === "content"
              ? "border-emerald-500 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
          >
            <div className="flex flex-col items-center gap-1">
              <FileText className="w-4 h-4" />
              <span>Kupon Info</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("recipients")}
            className={`flex-1 py-3 px-1 text-center font-semibold text-xs border-b-2 transition-all ${activeTab === "recipients"
              ? "border-emerald-500 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Penerima</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("shohibul")}
            className={`flex-1 py-3 px-1 text-center font-semibold text-xs border-b-2 transition-all ${activeTab === "shohibul"
              ? "border-emerald-500 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
          >
            <div className="flex flex-col items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>Shohibul</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`flex-1 py-3 px-1 text-center font-semibold text-xs border-b-2 transition-all ${activeTab === "design"
              ? "border-emerald-500 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Palette className="w-4 h-4" />
              <span>Desain</span>
            </div>
          </button>
        </div>

        {/* Tab Contents - Scrollable */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* TAB 1: GENERAL INFO CONTENT */}
          {activeTab === "content" && (
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
          )}

          {/* TAB 2: RECIPIENTS MODE & INTERACTIVE TO-DO LIST */}
          {activeTab === "recipients" && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Metode Penerima</label>
                <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1.5 rounded-lg border border-slate-700">
                  <button
                    onClick={() => setRecipientMode("blank")}
                    className={`py-2 px-3 text-xs font-bold rounded-md transition-all ${recipientMode === "blank"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                      }`}
                  >
                    Kupon Kosong
                  </button>
                  <button
                    onClick={() => setRecipientMode("prefilled")}
                    className={`py-2 px-3 text-xs font-bold rounded-md transition-all ${recipientMode === "prefilled"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                      }`}
                  >
                    Isi Otomatis
                  </button>
                </div>
              </div>

              {recipientMode === "blank" ? (
                <div className="space-y-3 p-4 bg-slate-900 rounded-xl border border-slate-700/60">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Atur Jumlah Cetak
                  </h4>
                  <p className="text-xs text-slate-400">
                    Cetak kupon kosong dengan kolom Nama & No Kupon bertitik-titik untuk ditulis manual dengan pulpen.
                  </p>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Jumlah Kupon Kosong</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="4"
                        max="100"
                        step="4"
                        value={blankCount}
                        onChange={(e) => setBlankCount(parseInt(e.target.value))}
                        className="flex-1 accent-emerald-500"
                      />
                      <span className="font-mono text-emerald-400 text-sm font-bold bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                        {blankCount} pcs
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1.5 flex justify-between">
                      <span>Min: 4 (1 Lembar HVS)</span>
                      <span>Setara: {Math.ceil(blankCount / 4)} HVS</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Interactive Todo list header */}
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Daftar Penerima ({recipients.length})
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => showBulkRecipients ? setShowBulkRecipients(false) : openBulkRecipients()}
                        className="text-[10px] text-emerald-400 hover:text-emerald-300 font-bold bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900"
                      >
                        {showBulkRecipients ? "Batal" : "Tambah Banyak"}
                      </button>
                      {!showBulkRecipients && (
                        <button
                          onClick={clearRecipients}
                          className="text-[10px] text-rose-400 hover:text-rose-300 font-bold bg-rose-950/40 px-2 py-1 rounded border border-rose-900/30"
                        >
                          Hapus Semua
                        </button>
                      )}
                    </div>
                  </div>

                  {showBulkRecipients ? (
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-700/60 space-y-3">
                      <h5 className="text-xs font-bold text-slate-300">Impor Banyak Penerima</h5>
                      <p className="text-[11px] text-slate-500">
                        Masukkan nama penerima yang dipisahkan dengan koma atau baris baru.
                      </p>
                      <textarea
                        value={recipientsTextarea}
                        onChange={(e) => setRecipientsTextarea(e.target.value)}
                        rows={6}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 leading-normal font-mono"
                        placeholder="Contoh:&#10;Pak Ahmad&#10;Ibu Fatimah&#10;Pak Joko"
                      />
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => setShowBulkRecipients(false)}
                          className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 font-bold rounded"
                        >
                          Batal
                        </button>
                        <button
                          onClick={handleBulkRecipients}
                          className="px-3 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 font-bold text-white rounded shadow-md"
                        >
                          Simpan List
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {/* Quick Add Recipient Form */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newRecipient}
                          onChange={(e) => setNewRecipient(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && addRecipient()}
                          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg py-1.5 px-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          placeholder="Masukkan nama penerima baru..."
                        />
                        <button
                          onClick={addRecipient}
                          className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center justify-center"
                          title="Tambah Penerima"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Recipient Search Filter */}
                      <div className="relative">
                        <input
                          type="text"
                          value={searchRecipient}
                          onChange={(e) => setSearchRecipient(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg py-1.5 px-3 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-emerald-600"
                          placeholder="Cari nama penerima kurban..."
                        />
                        {searchRecipient && (
                          <button
                            onClick={() => setSearchRecipient("")}
                            className="absolute right-2.5 top-2.5 text-[10px] text-slate-500 hover:text-slate-300 font-bold"
                          >
                            Clear
                          </button>
                        )}
                      </div>

                      {/* Interactive todo list of current names */}
                      <div className="bg-slate-900 rounded-xl border border-slate-700/60 max-h-96 overflow-y-auto divide-y divide-slate-800/60">
                        {filteredRecipients.length === 0 ? (
                          <div className="p-6 text-center text-xs text-slate-500">
                            {searchRecipient ? "Nama tidak ditemukan." : "Belum ada nama penerima kurban."}
                          </div>
                        ) : (
                          filteredRecipients.map((item) => (
                            <div key={item.originalIndex} className="flex justify-between items-center p-2.5 hover:bg-slate-850/80 group transition-colors">
                              <span className="text-xs text-slate-300 font-medium truncate max-w-[280px]">
                                <span className="text-[10px] font-mono text-slate-500 mr-1.5">
                                  #{item.originalIndex + 1}
                                </span>
                                {item.name}
                              </span>
                              <button
                                onClick={() => removeRecipient(item.originalIndex)}
                                className="p-1 text-slate-500 hover:text-rose-400 hover:bg-rose-950/20 rounded opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all flex items-center justify-center cursor-pointer"
                                title={`Hapus ${item.name}`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))
                        )}
                      </div>

                      {/* Meta information summary */}
                      <div className="flex justify-between items-center text-[10.5px] text-slate-400 font-medium px-1 bg-slate-950/20 p-2 rounded-lg border border-slate-800/40">
                        <span>Total: <strong className="text-emerald-400">{recipients.length}</strong> orang</span>
                        <span>Total Kertas: <strong className="text-emerald-400">{totalPages}</strong> HVS A4</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SHOHIBUL LIST MANAGER */}
          {activeTab === "shohibul" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Daftar Shohibul ({shohibulList.length})
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowBulkShohibul(!showBulkShohibul)}
                    className="text-[10px] text-emerald-400 hover:text-emerald-300 font-bold bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900"
                  >
                    {showBulkShohibul ? "Kembali" : "Tambah Banyak"}
                  </button>
                  <button
                    onClick={resetShohibulDefault}
                    className="text-[10px] text-slate-400 hover:text-slate-200 font-semibold"
                    title="Kembalikan ke list default H. Umar Sumarya"
                  >
                    Reset Default
                  </button>
                </div>
              </div>

              {showBulkShohibul ? (
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700/60 space-y-3">
                  <h5 className="text-xs font-bold text-slate-300">Tambah Banyak Shohibul</h5>
                  <p className="text-[11px] text-slate-500">
                    Masukkan nama yang dipisahkan dengan koma atau baris baru.
                  </p>
                  <textarea
                    value={shohibulTextarea}
                    onChange={(e) => setShohibulTextarea(e.target.value)}
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none"
                    placeholder="Een Sumarni, Rizal Nugraha, Ade Maryati"
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setShowBulkShohibul(false)}
                      className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 font-bold rounded"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleBulkShohibul}
                      className="px-3 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 font-bold text-white rounded shadow"
                    >
                      Impor
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Quick Add */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newShohibul}
                      onChange={(e) => setNewShohibul(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addShohibul()}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg py-1.5 px-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none"
                      placeholder="Masukkan nama shohibul..."
                    />
                    <button
                      onClick={addShohibul}
                      className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* List of current names */}
                  <div className="bg-slate-900 rounded-xl border border-slate-700/60 max-h-72 overflow-y-auto divide-y divide-slate-800">
                    {shohibulList.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-500">
                        Belum ada nama shohibul. Tambahkan di atas!
                      </div>
                    ) : (
                      shohibulList.map((name, i) => (
                        <div key={i} className="flex justify-between items-center p-2.5 hover:bg-slate-800/50 group">
                          <span className="text-xs text-slate-300 font-medium">
                            {i + 1}. {name}
                          </span>
                          <button
                            onClick={() => removeShohibul(i)}
                            className="p-1 text-slate-500 hover:text-rose-400 hover:bg-rose-950/20 rounded opacity-0 group-hover:opacity-100 transition-all"
                            title="Hapus"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {shohibulList.length > 0 && (
                    <button
                      onClick={clearShohibul}
                      className="w-full text-center text-[10px] text-rose-400 hover:text-rose-300 font-bold py-2 bg-rose-950/10 hover:bg-rose-950/20 border border-rose-900/30 rounded-lg"
                    >
                      Hapus Semua
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: BEAUTIFUL DESIGNS & STYLES */}
          {activeTab === "design" && (
            <div className="space-y-5 animate-fadeIn">
              {/* Presets Grid */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Preset Tema</label>
                <div className="grid grid-cols-1 gap-2">
                  {colorPresets.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => applyPreset(preset)}
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-900 text-left transition-all"
                    >
                      <span className="text-xs text-slate-300 font-semibold">{preset.name}</span>
                      <div className="flex gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: preset.primary }} />
                        <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: preset.banner }} />
                        <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: preset.secondary }} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Colors Editor */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700/60 space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                  Kustomisasi Warna
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Tema Utama</label>
                    <div className="flex gap-1">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                      />
                      <input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded px-2 font-mono text-[10px] text-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Warna Bingkai</label>
                    <div className="flex gap-1">
                      <input
                        type="color"
                        value={borderColor}
                        onChange={(e) => setBorderColor(e.target.value)}
                        className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                      />
                      <input
                        type="text"
                        value={borderColor}
                        onChange={(e) => setBorderColor(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded px-2 font-mono text-[10px] text-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Warna Header Box</label>
                    <div className="flex gap-1">
                      <input
                        type="color"
                        value={bannerColor}
                        onChange={(e) => setBannerColor(e.target.value)}
                        className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                      />
                      <input
                        type="text"
                        value={bannerColor}
                        onChange={(e) => setBannerColor(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded px-2 font-mono text-[10px] text-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Kertas Kupon</label>
                    <div className="flex gap-1">
                      <input
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                      />
                      <input
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded px-2 font-mono text-[10px] text-slate-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Borders styles */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Gaya Bingkai</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["double", "solid", "dashed"].map((style) => (
                    <button
                      key={style}
                      onClick={() => setBorderStyle(style as any)}
                      className={`py-2 px-3 rounded-lg border font-bold capitalize transition-all ${borderStyle === style
                        ? "bg-emerald-600 border-emerald-500 text-white"
                        : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"
                        }`}
                    >
                      {style === "double" ? "Ganda (Klasik)" : style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra details */}
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-700/60">
                <div>
                  <span className="text-xs text-slate-300 font-bold">Variasi Aksen Emas</span>
                  <p className="text-[10px] text-slate-500">Gunakan ornamen emas bernuansa islami</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accentGold}
                    onChange={(e) => setAccentGold(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-850 border-t border-slate-700 flex flex-col gap-2 mt-auto">
          <button
            onClick={triggerPrint}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-950/40 hover:scale-[1.01] active:scale-95 transition-all text-sm"
          >
            <Printer className="w-5 h-5" />
            Cetak ke PDF / Printer A4
          </button>
          <div className="text-[10px] text-center text-slate-500">
            Pastikan skala printer diset ke <strong>100%</strong> dan margin <strong>"None"</strong> untuk hasil terbaik.
          </div>
        </div>
      </aside>

      {/* DYNAMIC REAL-TIME LIVE PREVIEW PANEL */}
      <main className="flex-1 flex flex-col h-full bg-slate-950 relative overflow-hidden">
        {/* Navigation Toolbar */}
        <header className="h-14 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md px-6 flex justify-between items-center z-10 no-print">
          <div className="flex items-center gap-3">
            <LayoutGrid className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm font-bold text-slate-200">
              Live Interactive Print Layout
            </h2>
            <span className="text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700 text-slate-400 font-semibold">
              {totalPages} Lembar HVS A4 ({totalCoupons} Kupon)
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* View selectors */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setPreviewSingleId(null)}
                className={`py-1 px-2.5 rounded text-xs font-bold transition-all ${previewSingleId === null
                  ? "bg-slate-850 text-emerald-400 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                Semua HVS A4
              </button>
              {totalCoupons > 0 && (
                <button
                  onClick={() => setPreviewSingleId(1)}
                  className={`py-1 px-2.5 rounded text-xs font-bold transition-all ${previewSingleId !== null
                    ? "bg-slate-850 text-emerald-400 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  Fokus 1 Kartu
                </button>
              )}
            </div>

            {/* Zoom slider */}
            <div className="flex items-center gap-2">
              <Minimize2 className="w-3.5 h-3.5 text-slate-500" />
              <input
                type="range"
                min="35"
                max="100"
                value={zoom}
                onChange={(e) => setZoom(parseInt(e.target.value))}
                className="w-24 accent-emerald-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <span className="text-xs font-bold font-mono text-slate-400 w-8">{zoom}%</span>
              <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
            </div>
          </div>
        </header>

        {/* Outer scrolling container */}
        <div className="flex-1 overflow-auto p-8 flex flex-col items-center justify-start gap-8 z-0 print-scroll-container">
          {previewSingleId !== null ? (
            /* Focus 1 Card View */
            <div className="flex flex-col items-center justify-center min-h-[80%]">
              <div className="text-xs text-slate-500 mb-3 text-center">
                ✨ Menampilkan fokus kartu pertama. Klik tab <strong>Kupon Info</strong> untuk mengedit teks secara instan.
              </div>
              <div
                className="shadow-2xl border border-slate-700/50 transition-all hover:scale-[1.02]"
                style={{
                  width: "100mm",
                  height: "140mm",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.05)"
                }}
              >
                <div className="w-full h-full">
                  <CouponCard
                    couponId={1}
                    number={formatNumber(numberStart)}
                    recipientName={recipientMode === "prefilled" ? recipients[0] || "" : ""}
                    eventTitle={eventTitle}
                    eventSub={eventSub}
                    eventDate={eventDate}
                    eventTime={eventTime}
                    eventLoc={eventLoc}
                    shohibulTitle={shohibulTitle}
                    col1={splitShohibul.col1}
                    col2={splitShohibul.col2}
                    footerText={footerText}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor}
                    borderColor={borderColor}
                    borderStyle={borderStyle}
                    bannerColor={bannerColor}
                    bannerTextColor={bannerTextColor}
                    accentGold={accentGold}
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Full Pages Preview */
            <div
              className="print-area flex flex-col items-center gap-12"
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: "top center",
                marginBottom: `calc(-297mm * ${(100 - zoom) / 100})` // Compensate scaling blank space
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIdx) => {
                const startIdx = pageIdx * 4;
                return (
                  <div
                    key={pageIdx}
                    className="hvs-page bg-white shadow-2xl relative select-none rounded-[1px] flex flex-wrap"
                    style={{
                      width: "210mm",
                      height: "297mm",
                      boxSizing: "border-box",
                      backgroundColor: "#ffffff",
                      overflow: "hidden"
                    }}
                  >
                    {/* A4 grid: exactly 4 coupon-cells */}
                    {Array.from({ length: 4 }).map((_, cellIdx) => {
                      const absoluteIdx = startIdx + cellIdx;
                      const hasCoupon = absoluteIdx < totalCoupons;
                      const couponNumber = formatNumber(numberStart + absoluteIdx);
                      const recipientName =
                        recipientMode === "prefilled" && absoluteIdx < recipients.length
                          ? recipients[absoluteIdx]
                          : "";

                      return (
                        <div
                          key={cellIdx}
                          className="coupon-cell relative"
                          style={{
                            width: "105mm",
                            height: "148.5mm",
                            boxSizing: "border-box",
                            padding: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          {hasCoupon ? (
                            <CouponCard
                              couponId={absoluteIdx + 1}
                              number={couponNumber}
                              recipientName={recipientName}
                              eventTitle={eventTitle}
                              eventSub={eventSub}
                              eventDate={eventDate}
                              eventTime={eventTime}
                              eventLoc={eventLoc}
                              shohibulTitle={shohibulTitle}
                              col1={splitShohibul.col1}
                              col2={splitShohibul.col2}
                              footerText={footerText}
                              primaryColor={primaryColor}
                              secondaryColor={secondaryColor}
                              textColor={textColor}
                              borderColor={borderColor}
                              borderStyle={borderStyle}
                              bannerColor={bannerColor}
                              bannerTextColor={bannerTextColor}
                              accentGold={accentGold}
                            />
                          ) : (
                            // Empty backup card with nice watermark for spacing and preview
                            <div className="w-[96%] h-[96%] rounded-lg border border-dashed border-slate-200 flex flex-col items-center justify-center bg-slate-50/50 p-4 text-slate-300">
                              <Sparkles className="w-8 h-8 opacity-40 mb-2" />
                              <span className="text-xs font-bold">Kupon Cadangan</span>
                              <span className="text-[10px] mt-1 opacity-70">
                                Baris HVS {pageIdx + 1}, Sel {cellIdx + 1}
                              </span>
                            </div>
                          )}

                          {/* Guidelines overlay for cut lines (visible on screen only, fine dashed in print) */}
                          <div className="absolute right-0 top-0 bottom-0 border-r border-dashed border-slate-300/40 hvs-guide-v no-print"></div>
                          <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-slate-300/40 hvs-guide-h no-print"></div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// STUNNING REUSABLE COUPON CARD COMPONENT
interface CouponCardProps {
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

function CouponCard({
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
  // Calculate dynamic font size and vertical gap based on number of names to perfectly fill the space
  const dynamicFontSize = `${Math.max(11, Math.min(16, 14.5 - totalNames * 0.5))}px`;
  const dynamicGap = `${Math.max(2, Math.min(8, 10 - totalNames * 0.55))}px`;

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
          <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-yellow-600/40 rounded-tl no-print" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-yellow-600/40 rounded-tr no-print" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-yellow-600/40 rounded-bl no-print" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-yellow-600/40 rounded-br no-print" />
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
        className="w-full my-2"
        style={{
          borderTop: `1px dashed ${primaryColor}`,
          opacity: 0.8
        }}
      />

      {/* RECIPIENT INFORMATION (DYNAMIC FILL OR BLANK DOTTED) */}
      <div className="space-y-1.5 py-1">
        {recipientName ? (
          /* Auto-filled Mode Display */
          <div className="space-y-1 bg-slate-500/5 p-2 rounded border border-slate-300/20">
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
        className="flex justify-between items-center py-1.5 px-2.5 rounded font-extrabold my-2 text-[10px]"
        style={{
          backgroundColor: `${primaryColor}15`, // 15% opacity tint of primary color
          color: primaryColor
        }}
      >
        <div className="flex items-center gap-1">
          <span>{eventDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>{eventTime}</span>
        </div>
        <div className="flex items-center gap-1">
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
          className="mt-1.5 overflow-y-auto pr-1 flex-1 flex flex-col justify-start"
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
        className="text-[8.5px] text-center font-bold italic mt-3 pt-2 opacity-80"
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
