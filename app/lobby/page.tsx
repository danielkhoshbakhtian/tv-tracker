"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import DVDCase from "@/components/DVDCase";

export default function DiscoveryLobby() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen flex flex-col pb-24 bg-[#FFCC00]">
      {/* Blue Header to tie it back to the rest of the app */}
      <header className="pt-12 pb-8 px-6 bg-[#001A6E] sticky top-0 z-20 border-b-8 border-black">
        <h1 className="text-5xl font-black italic tracking-tighter text-[#FFCC00] mb-6">
          LOBBY
        </h1>

        <div className="relative flex items-center">
          <div className="absolute left-4">
            <Search className="text-black" size={24} strokeWidth={4} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH TITLES..."
            className="w-full bg-white border-4 border-black text-black rounded-none py-4 pl-14 pr-4 font-black uppercase tracking-widest placeholder:text-gray-400 focus:outline-none focus:bg-gray-100 shadow-[6px_6px_0_rgba(0,0,0,1)] transition-colors"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-6 mt-8 space-y-12">
        
        {/* Section 1: Trending Now */}
        <div>
          <h2 className="text-[#001A6E] font-black uppercase tracking-widest mb-4 border-b-4 border-black pb-1 inline-block">
            Trending Now
          </h2>
          <div className="flex flex-wrap gap-4 justify-start">
            <DVDCase title="Shōgun" />
            <DVDCase title="The Boys" />
            <DVDCase title="House of the Dragon" />
          </div>
        </div>

        {/* Section 2: New Releases */}
        <div>
          <h2 className="text-[#001A6E] font-black uppercase tracking-widest mb-4 border-b-4 border-black pb-1 inline-block">
            New Releases
          </h2>
          <div className="flex flex-wrap gap-4 justify-start">
            <DVDCase title="Silo" />
            <DVDCase title="Dark Matter" />
            <DVDCase title="Presumed Innocent" />
          </div>
        </div>

      </div>
    </main>
  );
}