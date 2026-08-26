"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Library, Search, UserSquare } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#001A6E] border-t-4 border-[#FFCC00] pb-6 pt-3 px-6 z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center max-w-md mx-auto">
        
        {/* Aisles */}
        <Link href="/home" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/home' ? 'text-white scale-110' : 'text-[#FFCC00]/60 hover:text-[#FFCC00]'}`}>
          <Library size={28} strokeWidth={pathname === '/home' ? 3 : 2} />
          <span className="text-[10px] font-black uppercase tracking-wider">Aisles</span>
        </Link>

        {/* Lobby */}
        <Link href="/lobby" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/lobby' ? 'text-white scale-110' : 'text-[#FFCC00]/60 hover:text-[#FFCC00]'}`}>
          <Search size={28} strokeWidth={pathname === '/lobby' ? 3 : 2} />
          <span className="text-[10px] font-black uppercase tracking-wider">Lobby</span>
        </Link>

        {/* Counter */}
        <Link href="/profile" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/profile' ? 'text-white scale-110' : 'text-[#FFCC00]/60 hover:text-[#FFCC00]'}`}>
          <UserSquare size={28} strokeWidth={pathname === '/profile' ? 3 : 2} />
          <span className="text-[10px] font-black uppercase tracking-wider">Counter</span>
        </Link>

      </div>
    </nav>
  );
}