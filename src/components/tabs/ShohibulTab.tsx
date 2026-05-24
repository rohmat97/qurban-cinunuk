import React from "react";
import { Plus, Trash2 } from "lucide-react";

interface ShohibulTabProps {
  shohibulList: string[];
  newShohibul: string;
  setNewShohibul: (v: string) => void;
  shohibulTextarea: string;
  setShohibulTextarea: (v: string) => void;
  showBulkShohibul: boolean;
  setShowBulkShohibul: (v: boolean) => void;
  addShohibul: () => void;
  removeShohibul: (idx: number) => void;
  handleBulkShohibul: () => void;
  clearShohibul: () => void;
  resetShohibulDefault: () => void;
}

export default function ShohibulTab({
  shohibulList,
  newShohibul,
  setNewShohibul,
  shohibulTextarea,
  setShohibulTextarea,
  showBulkShohibul,
  setShowBulkShohibul,
  addShohibul,
  removeShohibul,
  handleBulkShohibul,
  clearShohibul,
  resetShohibulDefault
}: ShohibulTabProps) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Daftar Shohibul ({shohibulList.length})
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setShowBulkShohibul(!showBulkShohibul)}
            className="text-[10px] text-emerald-400 hover:text-emerald-300 font-bold bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900 cursor-pointer"
          >
            {showBulkShohibul ? "Kembali" : "Tambah Banyak"}
          </button>
          <button
            onClick={resetShohibulDefault}
            className="text-[10px] text-slate-400 hover:text-slate-200 font-semibold cursor-pointer"
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
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 font-bold rounded cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={handleBulkShohibul}
              className="px-3 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 font-bold text-white rounded shadow cursor-pointer"
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
              className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors cursor-pointer"
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
                    className="p-1 text-slate-500 hover:text-rose-400 hover:bg-rose-950/20 rounded opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
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
              className="w-full text-center text-[10px] text-rose-400 hover:text-rose-300 font-bold py-2 bg-rose-950/10 hover:bg-rose-950/20 border border-rose-900/30 rounded-lg cursor-pointer"
            >
              Hapus Semua
            </button>
          )}
        </div>
      )}
    </div>
  );
}
