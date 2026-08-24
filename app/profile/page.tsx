"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LogOut, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import DVDCase from "@/components/DVDCase";

export default function ProfileCounter() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>("Loading...");

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      // FIX: Tell TypeScript to use a fallback if email is undefined
      if (user) setEmail(user.email ?? "Unknown Email");
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-store-dark flex flex-col pb-24">
      <header className="pt-12 pb-6 px-6 flex justify-between items-start sticky top-0 bg-store-dark z-10">
        <h1 className="text-3xl font-black italic text-store-blue drop-shadow-md bg-white inline-block px-2 transform -skew-x-6">
          THE COUNTER
        </h1>
        <button onClick={handleSignOut} className="text-zinc-500 hover:text-white transition-colors">
          <LogOut size={24} />
        </button>
      </header>

      <div className="px-4 space-y-10 overflow-y-auto">
        
        {/* The Membership Card */}
        <section className="bg-gradient-to-br from-zinc-200 to-zinc-400 rounded-xl p-6 shadow-xl relative overflow-hidden text-black border-2 border-white">
          <div className="absolute top-4 right-4 w-12 h-4 bg-zinc-800 rounded-full opacity-20"></div> {/* Punch hole */}
          <p className="font-black text-2xl tracking-tighter italic text-store-blue mb-1">SHOWCASE</p>
          <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 mb-6">Official Member</p>
          
          <div className="font-mono text-sm border-b border-zinc-400 pb-2 mb-2">
            ID: {email}
          </div>
          <div className="flex justify-between items-end mt-4">
            <div className="font-mono">
              <p className="text-xs text-zinc-600 uppercase">Member Since</p>
              <p className="font-bold">2026</p>
            </div>
            {/* Fake Barcode */}
            <div className="flex gap-[2px] h-8 opacity-70">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`bg-black ${Math.random() > 0.5 ? 'w-1' : 'w-[2px]'}`}></div>
              ))}
            </div>
          </div>
        </section>

        {/* Hall of Fame */}
        <section>
          <div className="flex items-center gap-2 mb-4 px-2 text-store-yellow">
            <Award size={20} />
            <h2 className="text-sm font-bold uppercase tracking-widest">Hall of Fame</h2>
          </div>
          <div className="grid grid-cols-3 gap-3 px-2">
            <div className="bg-zinc-800 rounded-lg aspect-[2/3] border-2 border-dashed border-zinc-600 flex items-center justify-center text-zinc-600 cursor-pointer hover:border-store-yellow hover:text-store-yellow transition-colors">
              + Add
            </div>
            <div className="bg-zinc-800 rounded-lg aspect-[2/3] border-2 border-dashed border-zinc-600 flex items-center justify-center text-zinc-600 cursor-pointer hover:border-store-yellow hover:text-store-yellow transition-colors">
              + Add
            </div>
            <div className="bg-zinc-800 rounded-lg aspect-[2/3] border-2 border-dashed border-zinc-600 flex items-center justify-center text-zinc-600 cursor-pointer hover:border-store-yellow hover:text-store-yellow transition-colors">
              + Add
            </div>
          </div>
        </section>

        {/* Dropped / Paused Area */}
        <div className="grid grid-cols-2 gap-4 px-2">
          <section className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
             <h2 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Extended Rentals (Paused)</h2>
             <div className="flex justify-center opacity-70 scale-90 origin-top">
                <DVDCase title="The Wire" sticker="overdue" />
             </div>
          </section>

          <section className="bg-zinc-900/50 rounded-xl p-4 border-2 border-zinc-700 border-dashed relative">
             <h2 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Returned Early (Dropped)</h2>
             <div className="flex justify-center opacity-50 scale-90 origin-top transform rotate-6">
                <DVDCase title="Invasion" />
             </div>
          </section>
        </div>

      </div>
    </main>
  );
}