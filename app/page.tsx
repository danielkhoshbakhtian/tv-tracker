export default function Home() {
  return (
    <div className="p-4 pt-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">
          TRACKER
        </h1>
      </header>

      {/* Priority Queue (Feature 11) */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-fuchsia-400 mb-3 tracking-widest uppercase">Tonight's Priority</h2>
        <div className="bg-gray-900/80 border border-fuchsia-500/30 rounded-2xl p-5 shadow-[0_0_20px_rgba(217,70,239,0.1)]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl text-white mb-1">Severance</h3>
              <p className="text-cyan-300 text-sm font-medium">S2: 3/10 • "The You You Are"</p>
            </div>
            <button className="bg-gradient-to-br from-fuchsia-600 to-fuchsia-700 active:scale-95 text-white font-bold py-3 px-5 rounded-xl transition-transform">
              ✓ Log
            </button>
          </div>
        </div>
      </section>

      {/* Smart Up Next Queue (Feature 1) */}
      <section>
        <h2 className="text-sm font-bold text-cyan-400 mb-3 tracking-widest uppercase">Up Next</h2>
        <div className="space-y-4">
          
          {/* Show Card 1 */}
          <div className="bg-gray-900/50 border border-cyan-500/20 rounded-2xl p-4 flex justify-between items-center active:bg-gray-800 transition-colors">
            <div>
              <h3 className="font-bold text-lg text-gray-100">The Last of Us</h3>
              <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 mb-1">
                <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <p className="text-gray-400 text-xs mt-1">S2: 1/10 Episodes</p>
            </div>
          </div>

          {/* Show Card 2 */}
          <div className="bg-gray-900/50 border border-cyan-500/20 rounded-2xl p-4 flex justify-between items-center active:bg-gray-800 transition-colors">
            <div>
              <h3 className="font-bold text-lg text-gray-100">Silo</h3>
              <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 mb-1">
                <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-gray-400 text-xs mt-1">S1: 8/10 Episodes</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}