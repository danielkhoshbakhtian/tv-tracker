"use client";

import DVDCase from "@/components/DVDCase";

export default function HomeAisles() {
  return (
    <main className="min-h-screen bg-store-blue flex flex-col">
      <header className="pt-12 pb-6 px-6 bg-store-blue sticky top-0 z-20 border-b-[6px] border-store-yellow shadow-xl">
        <h1 className="text-5xl font-black italic tracking-tighter text-store-yellow drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          SHOWCASE
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-32 space-y-12 px-4 mt-8">
        
        {/* Shelf: Staff Picks */}
        <section className="relative">
          {/* Yellow Ticket Label */}
          <div className="bg-store-yellow text-store-blue font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-t-4 border-l-4 border-r-4 border-black relative z-10">
             Staff Picks
          </div>
          
          {/* Blue/Yellow Steel Shelf */}
          <div className="w-full h-[220px] bg-blue-900/50 rounded-xl border-4 border-black flex items-end pb-4 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar shadow-inner relative z-0 mt-[-4px]">
            <DVDCase title="The Sopranos" isStaffPick={true} />
            <DVDCase title="Ted Lasso" isStaffPick={true} sticker="rewatch" />
          </div>
          {/* Bold Yellow Lip */}
          <div className="w-[98%] mx-auto h-6 bg-store-yellow border-b-4 border-l-4 border-r-4 border-black rounded-b-xl shadow-[0_8px_0_rgba(0,0,0,0.2)] -mt-1 relative z-10"></div>
        </section>

        {/* Shelf: Checked Out */}
        <section className="relative">
          <div className="bg-store-yellow text-store-blue font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-t-4 border-l-4 border-r-4 border-black relative z-10">
             Checked Out
          </div>
          <div className="w-full h-[220px] bg-blue-900/50 rounded-xl border-4 border-black flex items-end pb-4 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar shadow-inner relative z-0 mt-[-4px]">
             <DVDCase title="Severance" />
             <DVDCase title="Dune: Prophecy" sticker="overdue" />
             <DVDCase title="Loki" sticker="rewatch" />
          </div>
          <div className="w-[98%] mx-auto h-6 bg-store-yellow border-b-4 border-l-4 border-r-4 border-black rounded-b-xl shadow-[0_8px_0_rgba(0,0,0,0.2)] -mt-1 relative z-10"></div>
        </section>

        {/* Shelf: Reserved */}
        <section className="relative">
          <div className="bg-store-yellow text-store-blue font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-t-4 border-l-4 border-r-4 border-black relative z-10">
             Reserved
          </div>
          <div className="w-full h-[220px] bg-blue-900/50 rounded-xl border-4 border-black flex items-end pb-4 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar shadow-inner relative z-0 mt-[-4px]">
             <DVDCase title="The Bear" />
             <DVDCase title="Fallout" />
          </div>
          <div className="w-[98%] mx-auto h-6 bg-store-yellow border-b-4 border-l-4 border-r-4 border-black rounded-b-xl shadow-[0_8px_0_rgba(0,0,0,0.2)] -mt-1 relative z-10"></div>
        </section>

        {/* Shelf: Watchlist */}
        <section className="relative">
          <div className="flex justify-between items-end relative z-10 ml-4 pr-4">
            <div className="bg-store-yellow text-store-blue font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg border-t-4 border-l-4 border-r-4 border-black">
               Watchlist
            </div>
            <p className="text-[10px] font-black text-white uppercase bg-black px-2 py-1 mb-1 rounded-sm border-2 border-white/20">Sort: A-Z</p>
          </div>
          <div className="w-full h-[220px] bg-blue-900/50 rounded-xl border-4 border-black flex items-end pb-4 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar shadow-inner relative z-0 mt-[-4px]">
             <DVDCase title="Dark Matter" />
             <DVDCase title="Silo" />
             <DVDCase title="From" />
             <DVDCase title="Shrinking" />
          </div>
          <div className="w-[98%] mx-auto h-6 bg-store-yellow border-b-4 border-l-4 border-r-4 border-black rounded-b-xl shadow-[0_8px_0_rgba(0,0,0,0.2)] -mt-1 relative z-10"></div>
        </section>

      </div>
    </main>
  );
}