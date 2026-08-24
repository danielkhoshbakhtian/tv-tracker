"use client";

import { useState } from "react";
import { Search, Shuffle } from "lucide-react";
import DVDCase from "@/components/DVDCase";

export default function DiscoveryLobby() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen store-brick flex flex-col pb-24">
      <header className="pt-12 pb-6 px-6 bg-gradient-to-b from-black via-black/90 to-transparent sticky top-0 z-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-black italic text-store-neon drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">
            THE LOBBY
          </h1>
          <button className="bg-zinc-900 border-2 border-zinc-700 rounded-lg p-2 text-zinc-400 hover:text-store-neon hover:border-store-neon hover:shadow-[0_0_10px_rgba(57,255,20,0.4)] transition-all flex items-center gap-2">
            <Shuffle size={20} />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-store-neon drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a show..."
            className="w-full bg-black/80 border-2 border-zinc-700 text-white rounded-xl py-4 pl-12 pr-4 font-bold focus:outline-none focus:border-store-neon focus:ring-1 focus:ring-store-neon focus:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all placeholder:text-zinc-600 backdrop-blur-sm"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto space-y-12 px-4 mt-6">
        
        {/* Wire Rack: Trending This Week */}
        <section>
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-3 h-3 rounded-full bg-store-neon shadow-[0_0_10px_rgba(57,255,20,1)] animate-pulse"></div>
            <h2 className="text-sm font-black text-zinc-200 uppercase tracking-widest drop-shadow-md">Trending This Week</h2>
          </div>
          {/* Metallic Wire Cage UI */}
          <div className="w-full h-[230px] bg-zinc-900/60 rounded-xl border-4 border-zinc-600 flex items-end pb-4 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar backdrop-blur-md shadow-[inset_0_0_50px_rgba(0,0,0,0.9),0_10px_20px_rgba(0,0,0,0.5)] relative z-10">
            {/* Fake vertical wire bars in the background */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.03)_40px,rgba(255,255,255,0.03)_42px)] pointer-events-none"></div>
            <DVDCase title="Shōgun" />
            <DVDCase title="The Boys" />
            <DVDCase title="House of the Dragon" />
          </div>
          <div className="w-[95%] mx-auto h-3 bg-zinc-500 rounded-b-xl shadow-xl z-0 border-b-2 border-zinc-800 -mt-1"></div>
        </section>

        {/* Wire Rack: New Releases */}
        <section>
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-3 h-3 rounded-full bg-store-blue shadow-[0_0_10px_rgba(0,26,110,1)]"></div>
            <h2 className="text-sm font-black text-zinc-200 uppercase tracking-widest drop-shadow-md">New Releases</h2>
          </div>
          <div className="w-full h-[230px] bg-zinc-900/60 rounded-xl border-4 border-zinc-600 flex items-end pb-4 px-4 gap-4 overflow-x-auto snap-x hide-scrollbar backdrop-blur-md shadow-[inset_0_0_50px_rgba(0,0,0,0.9),0_10px_20px_rgba(0,0,0,0.5)] relative z-10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.03)_40px,rgba(255,255,255,0.03)_42px)] pointer-events-none"></div>
            <DVDCase title="Silo" />
            <DVDCase title="Dark Matter" />
            <DVDCase title="Presumed Innocent" />
          </div>
          <div className="w-[95%] mx-auto h-3 bg-zinc-500 rounded-b-xl shadow-xl z-0 border-b-2 border-zinc-800 -mt-1"></div>
        </section>

      </div>
    </main>
  );
}