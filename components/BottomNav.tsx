"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Library, Search, UserSquare } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  // We don't want to show the navigation bar on the login screen
  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-store-dark/95 backdrop-blur-md border-t-2 border-zinc-800 pb-safe pt-2 px-6 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto mb-4">
        
        {/* The Wooden Aisles (Home) */}
        <Link href="/home" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/home' ? 'text-store-yellow' : 'text-zinc-500 hover:text-zinc-300'}`}>
          <Library size={28} strokeWidth={pathname === '/home' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Aisles</span>
        </Link>

        {/* The Neon Lobby (Discovery) */}
        <Link href="/lobby" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/lobby' ? 'text-store-neon' : 'text-zinc-500 hover:text-zinc-300'}`}>
          <Search size={28} strokeWidth={pathname === '/lobby' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Lobby</span>
        </Link>

        {/* The Front Counter (Profile) */}
        <Link href="/profile" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/profile' ? 'text-store-blue' : 'text-zinc-500 hover:text-zinc-300'}`}>
          <UserSquare size={28} strokeWidth={pathname === '/profile' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Counter</span>
        </Link>

      </div>
    </nav>
  );
}