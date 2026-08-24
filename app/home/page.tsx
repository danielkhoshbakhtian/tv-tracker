"use client";

import DVDCase from "@/components/DVDCase";

export default function HomeAisles() {
  return (
    <main className="min-h-screen bg-store-dark flex flex-col">
      <header className="pt-12 pb-6 px-6 bg-gradient-to-b from-black via-black/80 to-transparent sticky top-0 z-10">
        <h1 className="text-4xl font-black italic tracking-tighter text-store-yellow drop-shadow-[0_0_12px_rgba(255,204,0,0.5)]">
          SHOWCASE
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-24 space-y-10 px-4 mt-2">
        
        {/* Shelf: Staff Picks */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Staff Picks</h2>
          <div className="w-full h-60 bg-gradient-to-b from-[#3e2723] to-[#1f1311] rounded-xl shadow-[inset_0_12px_24px_rgba(0,0,0,0.9)] border-t-[10px] border-[#160d0b] flex items-end pb-3 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar relative">
            <DVDCase title="The Sopranos" isStaffPick={true} />
            <DVDCase title="Ted Lasso" isStaffPick={true} sticker="rewatch" />
          </div>
          <div className="w-[98%] mx-auto h-3 bg-[#2a1a17] rounded-b-xl border-t border-white/5 shadow-xl"></div>
        </section>

        {/* Shelf: Checked Out */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Checked Out</h2>
          <div className="w-full h-60 bg-gradient-to-b from-[#3e2723] to-[#1f1311] rounded-xl shadow-[inset_0_12px_24px_rgba(0,0,0,0.9)] border-t-[10px] border-[#160d0b] flex items-end pb-3 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar relative">
             <DVDCase title="Severance" />
             <DVDCase title="Dune: Prophecy" sticker="overdue" />
             <DVDCase title="Loki" sticker="rewatch" />
          </div>
          <div className="w-[98%] mx-auto h-3 bg-[#2a1a17] rounded-b-xl border-t border-white/5 shadow-xl"></div>
        </section>

        {/* Shelf: Reserved */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Reserved</h2>
          <div className="w-full h-60 bg-gradient-to-b from-[#3e2723] to-[#1f1311] rounded-xl shadow-[inset_0_12px_24px_rgba(0,0,0,0.9)] border-t-[10px] border-[#160d0b] flex items-end pb-3 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar relative">
             <DVDCase title="The Bear" />
             <DVDCase title="Fallout" />
          </div>
          <div className="w-[98%] mx-auto h-3 bg-[#2a1a17] rounded-b-xl border-t border-white/5 shadow-xl"></div>
        </section>

        {/* Shelf: Watchlist (The Backlog) */}
        <section className="relative">
          <div className="flex justify-between items-end mb-2 px-2">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Watchlist</h2>
            <p className="text-[10px] font-bold text-zinc-600 uppercase">Sort: A-Z</p>
          </div>
          <div className="w-full h-60 bg-gradient-to-b from-[#3e2723] to-[#1f1311] rounded-xl shadow-[inset_0_12px_24px_rgba(0,0,0,0.9)] border-t-[10px] border-[#160d0b] flex items-end pb-3 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar relative">
             <DVDCase title="Dark Matter" />
             <DVDCase title="Silo" />
             <DVDCase title="From" />
             <DVDCase title="Shrinking" />
          </div>
          <div className="w-[98%] mx-auto h-3 bg-[#2a1a17] rounded-b-xl border-t border-white/5 shadow-xl"></div>
        </section>

      </div>
    </main>
  );
}