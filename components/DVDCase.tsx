"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import CaseModal from "./CaseModal";

interface DVDCaseProps {
  title: string;
  isStaffPick?: boolean;
  sticker?: "rewatch" | "overdue" | null;
}

export default function DVDCase({ title, isStaffPick = false, sticker = null }: DVDCaseProps) {
  const [lastTap, setLastTap] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInteraction = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(50);
      }
      alert(`Logged next episode of ${title}!`);
    } else {
      setTimeout(() => {
        if (Date.now() - now >= DOUBLE_PRESS_DELAY) {
          setIsModalOpen(true);
        }
      }, DOUBLE_PRESS_DELAY);
    }
    setLastTap(now);
  };

  return (
    <>
      <div 
        onClick={handleInteraction}
        className="relative w-32 h-[190px] shrink-0 bg-black rounded-sm border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.5)] cursor-pointer transform transition-transform active:scale-95 flex overflow-hidden"
      >
        {/* Black Plastic Spine */}
        <div className="w-3 h-full bg-zinc-900 border-r-2 border-black flex-shrink-0"></div>

        {/* White Paper Cover Insert */}
        <div className="flex-1 bg-white relative overflow-hidden flex flex-col p-2">
          
          {isStaffPick && (
            <div className="absolute top-2 right-2 text-store-blue">
              <Star fill="#FFCC00" stroke="black" strokeWidth={2} size={24} />
            </div>
          )}

          <h3 className="font-black text-black text-lg leading-tight mt-2 break-words relative z-10">
            {title}
          </h3>

          {/* Dynamic Stickers */}
          {sticker === "rewatch" && (
            <div className="absolute bottom-2 right-[-10px] bg-store-neon text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 transform -rotate-12 border-2 border-black shadow-sm">
              Rewatch
            </div>
          )}
          {sticker === "overdue" && (
            <div className="absolute bottom-2 left-[-10px] bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 transform rotate-12 border-2 border-black shadow-sm">
              Overdue
            </div>
          )}
        </div>
      </div>

      <CaseModal 
        title={title} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}