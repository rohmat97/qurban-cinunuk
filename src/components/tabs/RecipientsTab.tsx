import React from "react";
import { FileText, Plus, Trash2 } from "lucide-react";

interface RecipientsTabProps {
  recipientMode: "blank" | "prefilled";
  setRecipientMode: (v: "blank" | "prefilled") => void;
  blankCount: number;
  setBlankCount: (v: number) => void;
  recipients: string[];
  newRecipient: string;
  setNewRecipient: (v: string) => void;
  searchRecipient: string;
  setSearchRecipient: (v: string) => void;
  showBulkRecipients: boolean;
  setShowBulkRecipients: (v: boolean) => void;
  recipientsTextarea: string;
  setRecipientsTextarea: (v: string) => void;
  addRecipient: () => void;
  removeRecipient: (idx: number) => void;
  handleBulkRecipients: () => void;
  openBulkRecipients: () => void;
  clearRecipients: () => void;
  totalPages: number;
}

export default function RecipientsTab({
  recipientMode,
  setRecipientMode,
  blankCount,
  setBlankCount,
  recipients,
  newRecipient,
  setNewRecipient,
  searchRecipient,
  setSearchRecipient,
  showBulkRecipients,
  setShowBulkRecipients,
  recipientsTextarea,
  setRecipientsTextarea,
  addRecipient,
  removeRecipient,
  handleBulkRecipients,
  openBulkRecipients,
  clearRecipients,
  totalPages
}: RecipientsTabProps) {
  // Local filtered list for search functionality
  const filteredRecipients = recipients
    .map((name, originalIndex) => ({ name, originalIndex }))
    .filter((item) =>
      item.name.toLowerCase().includes(searchRecipient.toLowerCase())
    );

  return (
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
                  className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center justify-center cursor-pointer"
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
                    className="absolute right-2.5 top-2.5 text-[10px] text-slate-500 hover:text-slate-300 font-bold cursor-pointer"
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
  );
}
