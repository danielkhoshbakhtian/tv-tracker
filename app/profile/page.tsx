"use client";

import { LogOut, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import DVDCase from "@/components/DVDCase";

export default function ProfileCounter() {
  const router = useRouter();
  const prototypeEmail = "vip.member@showcase.app";

  return (
    <main className="min-h-screen bg-[#001A6E] flex flex-col pb-24">
      <header className="pt-12 pb-6 px-6 bg-[#001A6E] sticky top-0 z-20 border-b-8 border-[#FFCC00] flex justify-between items-start">
        <h1 className="text-5xl font-black italic tracking-tighter text-[#FFCC00]">
          COUNTER
        </h1>
        <button 
          onClick={() => router.push("/")}
          className="bg-[#FFCC00] text-[#001A6E] p-2 rounded border-2 border-black hover:bg-white transition-colors cursor-pointer"
        >
          <LogOut size={24} strokeWidth={3} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto space-y-8 px-4 mt-8">
        
        {/* Membership Card */}
        <section className="bg-white border-4 border-black rounded-xl p-6 shadow-[8px_8px_0_rgba(0,0,0,0.5)] relative mx-2">
          <div className="absolute top-4 right-4 w-16 h-3 bg-gray-200 rounded-full border-2 border-gray-300 shadow-inner"></div> 
          <h2 className="text-4xl font-black italic text-[#001A6E] tracking-tighter mb-1">SHOWCASE</h2>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-8">Gold Member Card</p>
          <div className="border-t-4 border-black pt-4 mb-4">
            <p className="font-mono text-sm font-bold text-black">{prototypeEmail}</p>
          </div>
          <div className="flex justify-between items-end mt-4">
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Member Since</p>
              <p className="font-black text-black text-lg">1999</p>
            </div>
            <div className="flex gap-1 h-12 opacity-80">
              {[...Array(14)].map((_, i) => (
                <div key={i} className={`bg-black ${i % 3 === 0 ? 'w-2' : 'w-1'}`}></div>
              ))}
            </div>
          </div>
        </section>

        {/* Hall of Fame */}
        <section className="mx-2">
          <div className="flex items-center gap-2 mb-4 text-[#FFCC00]">
            <Award size={24} strokeWidth={3} />
            <h2 className="text-sm font-black uppercase tracking-widest">Hall of Fame</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-900 rounded-xl aspect-[2/3] border-4 border-dashed border-black flex items-center justify-center text-black font-black hover:bg-[#FFCC00] transition-colors cursor-pointer">
              + ADD
            </div>
            <div className="bg-blue-900 rounded-xl aspect-[2/3] border-4 border-dashed border-black flex items-center justify-center text-black font-black hover:bg-[#FFCC00] transition-colors cursor-pointer">
              + ADD
            </div>
            <div className="bg-blue-900 rounded-xl aspect-[2/3] border-4 border-dashed border-black flex items-center justify-center text-black font-black hover:bg-[#FFCC00] transition-colors cursor-pointer">
              + ADD
            </div>
          </div>
        </section>

        {/* Dropped / Paused Area */}
        <div className="grid grid-cols-2 gap-4 mx-2">
          <section className="bg-blue-900 rounded-xl p-4 border-4 border-black shadow-inner">
             <h2 className="text-[10px] font-black text-[#FFCC00] uppercase tracking-widest mb-4">Extended Rentals (Paused)</h2>
             <div className="flex justify-center opacity-80 scale-90 origin-top">
                <DVDCase title="The Wire" />
             </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-4 border-4 border-black shadow-inner relative overflow-hidden">
             <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
             <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 relative z-20">Returned Early (Dropped)</h2>
             <div className="flex justify-center opacity-50 scale-90 origin-top transform rotate-6 relative z-0">
                <DVDCase title="Invasion" />
             </div>
          </section>
        </div>

      </div>
    </main>
  );
}