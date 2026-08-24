"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function HomeAisles() {
  const [loading, setLoading] = useState(true);

  // We will fetch the user's shows here later
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-store-yellow font-bold">Loading Aisles...</div>;
  }

  return (
    <main className="min-h-screen bg-store-dark flex flex-col">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 bg-gradient-to-b from-black to-transparent sticky top-0 z-10">
        <h1 className="text-3xl font-black italic text-store-yellow drop-shadow-md">
          MY AISLES
        </h1>
      </header>

      {/* The Shelves */}
      <div className="flex-1 overflow-y-auto pb-24 space-y-8 px-4">
        
        {/* Shelf: Staff Picks (Tonight's Priority) */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Staff Picks</h2>
          <div className="w-full h-48 bg-store-wood rounded-xl shadow-inner border-t-8 border-zinc-900 flex items-center px-4 overflow-x-auto snap-x">
            {/* DVD Cases will go here */}
            <p className="text-zinc-600 font-bold italic opacity-50 mx-auto">No priorities set.</p>
          </div>
          {/* Wood grain highlight */}
          <div className="absolute bottom-0 w-full h-2 bg-black/20 rounded-b-xl"></div>
        </section>

        {/* Shelf: Checked Out (Currently Watching) */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Checked Out</h2>
          <div className="w-full h-48 bg-store-wood rounded-xl shadow-inner border-t-8 border-zinc-900 flex items-center px-4 overflow-x-auto snap-x">
             {/* DVD Cases will go here */}
             <div className="bg-zinc-800/80 px-4 py-2 rounded shadow-md mx-auto transform rotate-2">
                <p className="text-zinc-400 font-bold text-sm">"All caught up. Go browse the Aisles."</p>
             </div>
          </div>
          <div className="absolute bottom-0 w-full h-2 bg-black/20 rounded-b-xl"></div>
        </section>

        {/* Shelf: Reserved (Start Soon) */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Reserved</h2>
          <div className="w-full h-48 bg-store-wood rounded-xl shadow-inner border-t-8 border-zinc-900 flex items-center px-4 overflow-x-auto snap-x">
             <p className="text-zinc-600 font-bold italic opacity-50 mx-auto">Nothing reserved.</p>
          </div>
          <div className="absolute bottom-0 w-full h-2 bg-black/20 rounded-b-xl"></div>
        </section>

      </div>
    </main>
  );
}