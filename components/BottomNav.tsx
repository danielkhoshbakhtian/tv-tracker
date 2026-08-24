"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Library, Search, UserSquare } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-store-blue border-t-4 border-store-yellow pb-safe pt-2 px-6 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center max-w-md mx-auto mb-4">
        
        {/* The Aisles (Home) */}
        <Link href="/home" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/home' ? 'text-white drop-shadow-md' : 'text-store-yellow/60 hover:text-store-yellow'}`}>
          <Library size={28} strokeWidth={pathname === '/home' ? 3 : 2} />
          <span className="text-[10px] font-black uppercase tracking-wider">Aisles</span>
        </Link>

        {/* The Lobby (Discovery) */}
        <Link href="/lobby" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/lobby' ? 'text-white drop-shadow-md' : 'text-store-yellow/60 hover:text-store-yellow'}`}>
          <Search size={28} strokeWidth={pathname === '/lobby' ? 3 : 2} />
          <span className="text-[10px] font-black uppercase tracking-wider">Lobby</span>
        </Link>

        {/* The Counter (Profile) */}
        <Link href="/profile" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/profile' ? 'text-white drop-shadow-md' : 'text-store-yellow/60 hover:text-store-yellow'}`}>
          <UserSquare size={28} strokeWidth={pathname === '/profile' ? 3 : 2} />
          <span className="text-[10px] font-black uppercase tracking-wider">Counter</span>
        </Link>

      </div>
    </nav>
  );
}