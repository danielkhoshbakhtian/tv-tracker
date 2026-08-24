"use client";

import { useState } from "react";
import { X, Star, BookmarkPlus, BookmarkCheck, Rewind, PlaySquare, Trash2, PauseCircle, CheckCircle2 } from "lucide-react";

interface CaseModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseModal({ title, isOpen, onClose }: CaseModalProps) {
  const [inWatchlist, setInWatchlist] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [isStaffPick, setIsStaffPick] = useState(false);

  // Mock data for multiple seasons
  const seasons = [1, 2, 3]; 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-zinc-900 border-4 border-black rounded-xl shadow-2xl overflow-hidden flex flex-col h-[80vh] sm:h-[600px] animate-slide-up relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-store-yellow hover:text-black transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex-1 flex bg-zinc-800 relative">
          {/* Middle Spine Crease */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-r from-black/60 to-black/30 z-10 shadow-[inset_0_0_10px_rgba(0,0,0,1)] pointer-events-none"></div>

          {/* LEFT SIDE: The Paper Insert */}
          <div className="w-1/2 p-6 flex flex-col justify-between bg-white text-black shadow-inner z-0">
            <div>
              <h2 className="font-black text-2xl uppercase leading-none tracking-tight border-b-4 border-black pb-2 mb-4">
                {title}
              </h2>
              <p className="text-xs font-bold text-zinc-500 mb-6">ACTION / DRAMA / SCIFI</p>

              <div className="space-y-3">
                <button 
                  onClick={() => setInWatchlist(!inWatchlist)}
                  className={`w-full flex items-center gap-3 border-2 border-black p-3 font-bold text-sm transition-colors ${inWatchlist ? 'bg-store-neon text-black' : 'bg-zinc-100 hover:bg-store-blue hover:text-white'}`}
                >
                  {inWatchlist ? <BookmarkCheck size={18} /> : <BookmarkPlus size={18} />} 
                  {inWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
                </button>

                <button 
                  onClick={() => setIsReserved(!isReserved)}
                  className={`w-full flex items-center gap-3 border-2 border-black p-3 font-bold text-sm transition-colors ${isReserved ? 'bg-store-yellow text-black' : 'bg-zinc-100 hover:bg-store-yellow'}`}
                >
                  {isReserved ? <CheckCircle2 size={18} /> : <PlaySquare size={18} />}
                  {isReserved ? 'Copy Reserved!' : 'Reserve Copy'}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 bg-black text-white p-3 font-bold text-sm hover:bg-store-neon hover:text-black transition-colors">
                 Log Whole Show
              </button>
              <button 
                onClick={() => setIsStaffPick(!isStaffPick)}
                className={`w-full flex items-center justify-center gap-2 border-2 border-dashed p-3 font-black uppercase text-xs transition-colors ${isStaffPick ? 'border-store-yellow bg-store-yellow text-black' : 'border-zinc-400 text-zinc-400 hover:border-store-yellow hover:text-store-yellow'}`}
              >
                <Star size={16} fill={isStaffPick ? "currentColor" : "none"} /> 
                Mark as Staff Pick
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Swipeable Season Discs */}
          <div className="w-1/2 bg-zinc-900 relative overflow-hidden flex flex-col">
            {/* Scrollable Container */}
            <div className="flex-1 overflow-x-auto snap-x snap-mandatory flex items-center hide-scrollbar">
              {seasons.map((seasonNum) => (
                <div key={seasonNum} className="min-w-full h-full flex items-center justify-center snap-center p-4">
                  {/* The Disc */}
                  <div className="w-36 h-36 rounded-full border-8 border-zinc-700 bg-gradient-to-tr from-zinc-400 to-zinc-200 shadow-2xl flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer">
                      <div className="w-8 h-8 rounded-full border-4 border-zinc-400 bg-zinc-900 z-10 shadow-inner"></div>
                      <div className="absolute top-4 text-[8px] font-black uppercase text-zinc-600 tracking-widest">
                        Season {seasonNum}
                      </div>
                      
                      {/* Rewind Sticker */}
                      <div className="absolute bottom-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Rewinding Season ${seasonNum}`);
                          }}
                          className="bg-store-neon text-black text-[10px] font-black px-2 py-1 rounded flex items-center gap-1 shadow-md hover:scale-110 active:scale-95 transition-transform"
                        >
                          <Rewind size={12} /> REWIND
                        </button>
                      </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Swipe Indicator Dots */}
            <div className="h-6 flex justify-center items-center gap-1 pb-2">
              {seasons.map((s) => (
                <div key={s} className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BIN */}
        <div className="bg-black p-4 flex gap-4 border-t-2 border-zinc-800">
          <button className="flex-1 flex justify-center items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase">
             <PauseCircle size={16} /> Pause Rental
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-xs font-bold uppercase">
             <Trash2 size={16} /> Drop in Bin
          </button>
        </div>

      </div>
    </div>
  );
}