"use client";

import { useState } from "react";
import { Search, Shuffle } from "lucide-react";
import DVDCase from "@/components/DVDCase";

export default function DiscoveryLobby() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col pb-24">
      {/* Neon Header & Search */}
      <header className="pt-12 pb-6 px-6 bg-gradient-to-b from-black to-zinc-950 sticky top-0 z-10 border-b border-zinc-900">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black italic text-store-neon drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">
            THE LOBBY
          </h1>
          {/* Random Rental Drop Slot */}
          <button className="bg-zinc-800 border-2 border-zinc-600 rounded-lg p-2 text-zinc-400 hover:text-store-neon hover:border-store-neon transition-colors shadow-inner flex items-center gap-2">
            <Shuffle size={20} />
          </button>
        </div>

        {/* Chunky Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-store-neon" size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a show..."
            className="w-full bg-zinc-900 border-2 border-zinc-800 text-white rounded-xl py-4 pl-10 pr-4 font-bold focus:outline-none focus:border-store-neon focus:ring-1 focus:ring-store-neon transition-all placeholder:text-zinc-600"
          />
        </div>
      </header>

      {/* Wire Display Racks */}
      <div className="flex-1 overflow-y-auto space-y-10 px-4 mt-6">
        
        {/* Wire Rack: Trending This Week */}
        <section>
          <div className="flex items-center gap-2 mb-2 px-2">
            <div className="w-2 h-2 rounded-full bg-store-neon animate-pulse"></div>
            <h2 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Trending This Week</h2>
          </div>
          <div className="w-full h-56 bg-zinc-900/50 rounded-lg border-2 border-zinc-800 flex items-center px-4 gap-4 overflow-x-auto snap-x hide-scrollbar backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            <DVDCase title="Shōgun" />
            <DVDCase title="The Boys" />
            <DVDCase title="House of the Dragon" />
          </div>
          {/* Wire rack base detail */}
          <div className="w-[95%] mx-auto h-2 border-b-2 border-l-2 border-r-2 border-zinc-700 rounded-b-md opacity-50"></div>
        </section>

        {/* Wire Rack: New Releases */}
        <section>
          <div className="flex items-center gap-2 mb-2 px-2">
            <div className="w-2 h-2 rounded-full bg-store-blue"></div>
            <h2 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">New Releases</h2>
          </div>
          <div className="w-full h-56 bg-zinc-900/50 rounded-lg border-2 border-zinc-800 flex items-center px-4 gap-4 overflow-x-auto snap-x hide-scrollbar backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            <DVDCase title="Silo" />
            <DVDCase title="Dark Matter" />
            <DVDCase title="Presumed Innocent" />
          </div>
          <div className="w-[95%] mx-auto h-2 border-b-2 border-l-2 border-r-2 border-zinc-700 rounded-b-md opacity-50"></div>
        </section>

      </div>
    </main>
  );
}