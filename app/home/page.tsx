"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import DVDCase from "@/components/DVDCase";

export default function HomeAisles() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/"); // Kick them back to front door if not logged in
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  if (loading) {
    return <div className="min-h-screen bg-store-dark flex items-center justify-center text-store-yellow font-bold">Walking to the Aisles...</div>;
  }

  return (
    <main className="min-h-screen bg-store-dark flex flex-col">
      <header className="pt-12 pb-6 px-6 bg-gradient-to-b from-black to-transparent sticky top-0 z-10">
        <h1 className="text-3xl font-black italic text-store-yellow drop-shadow-md">
          MY AISLES
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-24 space-y-8 px-4">
        
        {/* Shelf: Staff Picks (Tonight's Priority) */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Staff Picks</h2>
          <div className="w-full h-56 bg-store-wood rounded-xl shadow-inner border-t-8 border-zinc-900 flex items-center px-4 gap-4 overflow-x-auto snap-x hide-scrollbar">
            
            {/* Dummy Cases */}
            <DVDCase title="The Sopranos" isStaffPick={true} />
            <DVDCase title="Ted Lasso" isStaffPick={true} sticker="rewatch" />

          </div>
          <div className="absolute bottom-0 w-full h-2 bg-black/20 rounded-b-xl pointer-events-none"></div>
        </section>

        {/* Shelf: Checked Out (Currently Watching) */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Checked Out</h2>
          <div className="w-full h-56 bg-store-wood rounded-xl shadow-inner border-t-8 border-zinc-900 flex items-center px-4 gap-4 overflow-x-auto snap-x hide-scrollbar">
             
             {/* Dummy Cases */}
             <DVDCase title="Severance" />
             <DVDCase title="Dune: Prophecy" sticker="overdue" />
             <DVDCase title="Loki" sticker="rewatch" />

          </div>
          <div className="absolute bottom-0 w-full h-2 bg-black/20 rounded-b-xl pointer-events-none"></div>
        </section>

        {/* Shelf: Reserved (Start Soon) */}
        <section className="relative">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">Reserved</h2>
          <div className="w-full h-56 bg-store-wood rounded-xl shadow-inner border-t-8 border-zinc-900 flex items-center px-4 gap-4 overflow-x-auto snap-x hide-scrollbar">
             
             <DVDCase title="The Bear" />
             <DVDCase title="Fallout" />

          </div>
          <div className="absolute bottom-0 w-full h-2 bg-black/20 rounded-b-xl pointer-events-none"></div>
        </section>

      </div>
    </main>
  );
}