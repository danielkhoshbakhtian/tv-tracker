'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full bg-[#050511]/90 backdrop-blur-md border-t border-gray-800 pb-safe pt-2 px-6 flex justify-around items-center z-50">
      
      {/* Home Button */}
      <Link href="/" className="flex flex-col items-center p-2">
        <div className={`text-2xl mb-1 transition-colors ${pathname === '/' ? 'text-fuchsia-500' : 'text-gray-500'}`}>
          ⌂
        </div>
        <span className={`text-[10px] font-bold ${pathname === '/' ? 'text-fuchsia-500' : 'text-gray-500'}`}>
          TRACK
        </span>
      </Link>

      {/* Search Button */}
      <Link href="/search" className="flex flex-col items-center p-2">
        <div className={`text-2xl mb-1 transition-colors ${pathname === '/search' ? 'text-cyan-400' : 'text-gray-500'}`}>
          ⚲
        </div>
        <span className={`text-[10px] font-bold ${pathname === '/search' ? 'text-cyan-400' : 'text-gray-500'}`}>
          SEARCH
        </span>
      </Link>

    </nav>
  );
}