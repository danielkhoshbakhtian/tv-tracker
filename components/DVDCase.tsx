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
      // Double Tap!
      triggerHaptic();
      alert(`Logged next episode of ${title}! (Undo window starts now)`);
    } else {
      // Single Tap opens the case
      setTimeout(() => {
        if (Date.now() - now >= DOUBLE_PRESS_DELAY) {
          setIsModalOpen(true);
        }
      }, DOUBLE_PRESS_DELAY);
    }
    setLastTap(now);
  };

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  return (
    <>
      <div 
        onClick={handleInteraction}
        className="relative w-32 h-48 shrink-0 rounded bg-zinc-800 border-l-4 border-zinc-950 shadow-[6px_0_15px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between p-2 overflow-hidden transform transition-transform active:scale-95 group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none group-hover:from-white/20 transition-all"></div>

        {isStaffPick && (
          <div className="absolute top-2 right-2 text-store-yellow drop-shadow-md">
            <Star fill="currentColor" size={20} />
          </div>
        )}

        <h3 className="font-black text-white text-lg leading-tight mt-4 break-words relative z-10 drop-shadow-md">
          {title}
        </h3>

        {sticker === "rewatch" && (
          <div className="absolute bottom-2 right-[-10px] bg-store-neon text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 transform -rotate-12 shadow-md">
            Rewatch
          </div>
        )}
        {sticker === "overdue" && (
          <div className="absolute bottom-2 left-[-10px] bg-yellow-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 transform rotate-12 shadow-md">
            Overdue
          </div>
        )}
      </div>

      {/* The Pop-up Modal */}
      <CaseModal 
        title={title} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}