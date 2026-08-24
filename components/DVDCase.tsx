"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface DVDCaseProps {
  title: string;
  isStaffPick?: boolean;
  sticker?: "rewatch" | "overdue" | null;
}

export default function DVDCase({ title, isStaffPick = false, sticker = null }: DVDCaseProps) {
  const [lastTap, setLastTap] = useState(0);

  const handleInteraction = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      // Double Tap Detected! Log the episode.
      triggerHaptic();
      alert(`Logged next episode of ${title}! (Undo window starts now)`);
    } else {
      // Single Tap (Wait to see if it becomes a double tap, otherwise open case)
      setTimeout(() => {
        if (Date.now() - now >= DOUBLE_PRESS_DELAY) {
          // Open Case Logic will go here (expanding to full screen)
          alert(`Opening DVD Case for ${title}`);
        }
      }, DOUBLE_PRESS_DELAY);
    }
    setLastTap(now);
  };

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50); // That satisfying physical 'thud'
    }
  };

  return (
    <div 
      onClick={handleInteraction}
      className="relative w-32 h-48 shrink-0 rounded bg-zinc-800 border-l-4 border-zinc-950 shadow-[4px_0_10px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col justify-between p-2 overflow-hidden transform transition-transform active:scale-95"
    >
      {/* Fake Case Shine/Glare */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

      {/* Staff Pick Toggle Visual */}
      {isStaffPick && (
        <div className="absolute top-2 right-2 text-store-yellow drop-shadow-md">
          <Star fill="currentColor" size={20} />
        </div>
      )}

      {/* Show Title */}
      <h3 className="font-black text-white text-lg leading-tight mt-4 break-words relative z-10">
        {title}
      </h3>

      {/* Dynamic Stickers */}
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
  );
}