"use client";

import { useEffect, useState } from "react";
import { Undo2 } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onUndo: () => void;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onUndo, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onClose(), 4000); // 4 second undo window
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-[60] w-[90%] max-w-sm bg-black border-4 border-[#FFCC00] p-3 shadow-[8px_8px_0_rgba(0,0,0,0.8)] animate-slide-up flex items-center justify-between">
      <p className="text-white font-black uppercase text-xs tracking-widest leading-tight">
        {message}
      </p>
      <button 
        onClick={onUndo}
        className="bg-[#FFCC00] text-black px-3 py-1 font-black text-xs uppercase border-2 border-transparent hover:bg-white hover:border-black transition-all flex items-center gap-1"
      >
        <Undo2 size={14} strokeWidth={3} /> Undo
      </button>
    </div>
  );
}