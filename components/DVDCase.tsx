"use client";

import { useState, useRef } from "react";
import CaseModal, { Season } from "./CaseModal";
import Toast from "./Toast";

interface DVDCaseProps {
  title: string;
  poster?: string;
  synopsis?: string;
  genres?: string[];
  year?: string;
  rating?: string;
  stickers?: string[];
  seasons?: Season[];
}

export default function DVDCase({ 
  title, 
  poster, 
  synopsis,
  genres,
  year,
  rating,
  stickers = [], 
  seasons = [] 
}: DVDCaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInteraction = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
      setShowToast(true);
    } else {
      clickTimeout.current = setTimeout(() => {
        setIsModalOpen(true);
        clickTimeout.current = null;
      }, 300); 
    }
  };

  const getStickerStyle = (text: string) => {
    const base = "absolute z-30 font-black uppercase tracking-widest border-2 border-white shadow-[2px_2px_4px_rgba(0,0,0,0.5)] transform";
    if (text.toLowerCase() === "new ep") return `${base} top-2 right-2 bg-[#39FF14] text-black text-[9px] w-10 h-10 rounded-full flex items-center justify-center text-center leading-tight rotate-12`;
    if (text.toLowerCase() === "overdue") return `${base} bottom-4 left-[-4px] bg-red-600 text-white text-[10px] px-2 py-1 -rotate-6 border-l-0`;
    if (text.toLowerCase() === "rewatch") return `${base} top-3 left-3 bg-[#001A6E] text-[#FFCC00] text-[8px] px-2 py-0.5 rounded-full -rotate-12`;
    return `${base} top-2 right-2 bg-[#FFCC00] text-black text-[8px] px-2 py-1 rotate-3`;
  };

  return (
    <>
      <div 
        onClick={handleInteraction}
        className="w-40 h-60 shrink-0 bg-black border-[3px] border-black rounded shadow-[6px_6px_0_rgba(0,0,0,0.6)] flex overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform group relative"
      >
        <div className="w-4 bg-gradient-to-r from-gray-900 to-black border-r-2 border-black/80 flex-shrink-0 shadow-inner z-10"></div>
        <div className="flex-1 relative bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
          {poster ? (
            /* Clean image tag */
            <img src={poster} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <span className="text-gray-400 text-xs font-black rotate-[-45deg] tracking-widest opacity-50 z-0">POSTER</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-60 pointer-events-none z-10 mix-blend-overlay"></div>
        </div>
        {stickers.map((sticker, idx) => (
          <div key={idx} className={getStickerStyle(sticker)}>{sticker}</div>
        ))}
      </div>

      <CaseModal 
        title={title} 
        poster={poster}
        synopsis={synopsis}
        genres={genres}
        year={year}
        rating={rating}
        seasons={seasons}
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <Toast message={`Logged 1 EP of ${title}`} isVisible={showToast} onUndo={() => setShowToast(false)} onClose={() => setShowToast(false)} />
    </>
  );
}