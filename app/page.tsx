import React from 'react';

// A reusable component to draw horizontal scrolling rows of show cards
const ShelfRow = ({ title, showProgressBar = false }: { title: string, showProgressBar?: boolean }) => {
  // Creating an array of 5 empty slots to hold our placeholder cards
  const placeholderCards = Array.from({ length: 5 });

  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold text-cyan-400 mb-3 tracking-widest uppercase pl-4">{title}</h2>
      
      {/* Horizontal scrolling container */}
      <div className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory hide-scrollbar">
        
        {placeholderCards.map((_, index) => (
          <div key={index} className="flex-none w-[130px] snap-start">
            
            {/* Empty Poster Card */}
            <div className="w-full aspect-[2/3] bg-gray-900/60 border border-cyan-500/20 rounded-xl mb-2 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.05)]">
              <span className="text-gray-700 font-bold text-2xl">?</span>
            </div>
            
            {/* Dummy Title Text */}
            <div className="h-3 w-3/4 bg-gray-800 rounded animate-pulse mb-1"></div>
            
            {/* Optional Progress Bar for Up Next / Watching rows */}
            {showProgressBar && (
              <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2">
                <div 
                  className="bg-cyan-400 h-1.5 rounded-full" 
                  style={{ width: `${Math.floor(Math.random() * 60) + 20}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="pt-8 pb-12 overflow-x-hidden">
      
      {/* Header */}
      <header className="px-4 mb-8">
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">
          TRACKER
        </h1>
      </header>

      {/* Tonight's Priority (Feature 11) - Large Featured Card */}
      <section className="px-4 mb-10">
        <h2 className="text-sm font-bold text-fuchsia-400 mb-3 tracking-widest uppercase">Tonight's Priority</h2>
        
        <div className="bg-gray-900/80 border border-fuchsia-500/30 rounded-2xl aspect-video relative overflow-hidden flex flex-col justify-end p-5 shadow-[0_0_20px_rgba(217,70,239,0.15)]">
          {/* Fake backdrop image gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-[#050511]/60 to-transparent z-0"></div>
          
          <div className="relative z-10 flex justify-between items-end">
            <div className="w-2/3">
              <div className="h-6 w-3/4 bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-800 rounded animate-pulse"></div>
            </div>
            <button className="bg-gradient-to-br from-fuchsia-600 to-fuchsia-700 text-white font-bold py-2 px-5 rounded-xl shadow-lg active:scale-95 transition-transform">
              ✓ Log
            </button>
          </div>
        </div>
      </section>

      {/* Smart Up Next Queue (Feature 1) */}
      <ShelfRow title="Up Next" showProgressBar={true} />

      {/* Custom Shelves (Feature 9) */}
      <ShelfRow title="Currently Watching" showProgressBar={true} />
      <ShelfRow title="Watchlist" />
      <ShelfRow title="Waiting on New Season" />

    </div>
  );
}