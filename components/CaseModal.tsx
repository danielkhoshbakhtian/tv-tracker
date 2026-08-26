"use client";

import { X, BookmarkPlus, Star, CheckCircle2, Circle, Check, ChevronLeft } from "lucide-react";
import { useState } from "react";
import Toast from "./Toast";

export interface Episode {
  id: number;
  title: string;
  watched: boolean;
}

export interface Season {
  seasonNum: number;
  episodes: Episode[];
}

interface CaseModalProps {
  title: string;
  poster?: string;
  synopsis?: string;
  genres?: string[];
  year?: string;
  rating?: string;
  seasons?: Season[];
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseModal({ 
  title, 
  poster, 
  synopsis = "No synopsis available.", 
  genres = ["Drama"], 
  year = "2024", 
  rating = "TV-MA",
  seasons: initialSeasons = [],
  isOpen, 
  onClose 
}: CaseModalProps) {
  
  const [seasons, setSeasons] = useState<Season[]>(
    initialSeasons.length > 0 ? initialSeasons : [{ seasonNum: 1, episodes: [{id: 1, title: "Feature Presentation", watched: false}] }]
  );

  const [activeLogSeason, setActiveLogSeason] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  if (!isOpen) return null;

  const toggleEpisode = (seasonNum: number, epId: number) => {
    setSeasons(prev => prev.map(s => {
      if (s.seasonNum === seasonNum) {
        return { ...s, episodes: s.episodes.map(ep => ep.id === epId ? { ...ep, watched: !ep.watched } : ep) };
      }
      return s;
    }));
    triggerToast("Episode Logged");
  };

  const logEntireSeason = (e: React.MouseEvent, seasonNum: number) => {
    e.stopPropagation(); 
    setSeasons(prev => prev.map(s => {
      if (s.seasonNum === seasonNum) {
        return { ...s, episodes: s.episodes.map(ep => ({ ...ep, watched: true })) };
      }
      return s;
    }));
    triggerToast(`Season ${seasonNum} Completed`);
  };

  const triggerToast = (msg: string) => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
    setToastMessage(msg);
    setShowToast(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#001A6E]/90 backdrop-blur-md p-4 perspective-1000">
        <div className="w-full max-w-5xl bg-black border-4 border-black rounded-xl shadow-[20px_20px_0_rgba(0,0,0,0.8)] flex flex-col sm:flex-row h-[85vh] sm:h-[600px] animate-slide-up relative transform-style-3d">
          
          <button onClick={onClose} className="absolute top-4 right-4 z-50 bg-black/80 p-2 rounded-full text-white hover:bg-[#FFCC00] hover:text-black border-2 border-transparent hover:border-black transition-colors cursor-pointer">
            <X size={20} strokeWidth={3} />
          </button>

          {/* LEFT SIDE */}
          <div className="w-full sm:w-1/2 flex flex-col bg-gray-900 text-white border-r-[6px] border-black relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-20"></div>

            <div className="relative h-48 sm:h-64 shrink-0">
              {poster ? (
                /* Clean image tag, no failing bypass attributes */
                <img src={poster} alt={title} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center font-black text-gray-600">NO ART</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
              
              <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-6 pr-6">
                <h2 className="font-black text-2xl sm:text-4xl uppercase leading-none tracking-tight text-white mb-1 shadow-black drop-shadow-md truncate">
                  {title}
                </h2>
                <p className="text-[10px] sm:text-xs font-black tracking-widest text-gray-300 uppercase shadow-black drop-shadow-md">
                  {seasons.length} Season{seasons.length !== 1 ? 's' : ''} • {year} • {rating}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 flex flex-col flex-1 relative z-10 justify-between">
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-400 leading-relaxed mb-3 line-clamp-3 sm:line-clamp-4">
                  {synopsis}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {genres.map(tag => (
                    <span key={tag} className="bg-gray-800 border border-gray-600 text-gray-300 text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mt-auto">
                <button className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-gray-600 p-2 sm:p-3 font-black uppercase text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                  <BookmarkPlus size={16} /> Watchlist
                </button>
                <button className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-[#FFCC00] text-[#FFCC00] p-2 sm:p-3 font-black uppercase text-xs sm:text-sm hover:bg-[#FFCC00] hover:text-black transition-colors">
                  <CheckCircle2 size={16} /> Rented
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full sm:w-1/2 bg-gray-900 relative flex flex-col">
            {activeLogSeason === null ? (
              <div className="flex-1 overflow-x-auto snap-x snap-mandatory flex items-center hide-scrollbar relative">
                {seasons.map((season) => (
                  <div key={season.seasonNum} className="min-w-full h-full flex flex-col items-center justify-center snap-center p-4">
                    <h3 className="text-gray-400 font-black uppercase tracking-widest mb-6 sm:mb-8 text-xs sm:text-sm">
                      Swipe to Browse Discs
                    </h3>
                    
                    <div 
                      onClick={() => setActiveLogSeason(season.seasonNum)}
                      className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[10px] sm:border-[12px] border-gray-800 bg-gradient-to-tr from-gray-300 via-gray-100 to-gray-400 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center relative overflow-hidden group cursor-pointer transition-transform hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,rgba(255,255,255,0.6)_25%,transparent_50%,rgba(255,255,255,0.6)_75%,transparent_100%)] opacity-40 pointer-events-none mix-blend-overlay rotate-45"></div>
                        <div className="absolute top-6 sm:top-8 text-[9px] sm:text-[10px] font-black uppercase text-gray-700 tracking-widest bg-white/60 px-3 py-1 rounded-full border border-gray-400 backdrop-blur-sm shadow-sm">
                          Season {season.seasonNum}
                        </div>
                        <button 
                          onClick={(e) => logEntireSeason(e, season.seasonNum)}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[4px] sm:border-[6px] border-gray-400 bg-gray-900 z-10 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] flex items-center justify-center text-gray-600 hover:text-[#39FF14] hover:border-gray-300 transition-colors group/btn relative"
                        >
                          <Check size={20} className="sm:w-6 sm:h-6" strokeWidth={4} />
                        </button>
                        <div className="absolute bottom-6 sm:bottom-8 text-[8px] sm:text-[9px] font-black uppercase text-gray-500 tracking-widest">
                          Disc {season.seasonNum}
                        </div>
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 pointer-events-none">
                  {seasons.map((s) => (
                    <div key={s.seasonNum} className="w-2 h-2 rounded-full bg-gray-600 shadow-sm"></div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 bg-gray-100 flex flex-col relative animate-fade-in shadow-inner overflow-hidden">
                <button 
                  onClick={() => setActiveLogSeason(null)}
                  className="bg-black text-white p-3 flex items-center gap-2 font-black uppercase text-xs hover:text-[#FFCC00] transition-colors shrink-0"
                >
                  <ChevronLeft size={16} /> Back to Discs
                </button>
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto hide-scrollbar">
                  <div className="bg-white border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.2)] flex flex-col">
                    <div className="bg-[#FFCC00] border-b-2 border-black p-3 text-center">
                      <h3 className="font-black text-black uppercase tracking-widest text-base sm:text-lg">
                        Episode Log
                      </h3>
                    </div>
                    <div className="p-2 bg-gray-50 border-b-2 border-black text-center text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      Season {activeLogSeason}
                    </div>
                    <div className="flex flex-col">
                      {seasons.find(s => s.seasonNum === activeLogSeason)?.episodes.map((ep) => (
                        <div 
                          key={ep.id}
                          onClick={() => toggleEpisode(activeLogSeason, ep.id)}
                          className="flex items-center gap-3 p-3 sm:p-4 border-b-2 border-black last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors group"
                        >
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 border-2 flex items-center justify-center flex-shrink-0 transition-colors ${ep.watched ? 'border-black bg-black' : 'border-gray-400 bg-white group-hover:border-black'}`}>
                            {ep.watched && <Check size={14} className="sm:w-4 sm:h-4 text-white" strokeWidth={4} />}
                          </div>
                          <span className={`font-black text-xs sm:text-sm uppercase tracking-wide truncate transition-colors ${ep.watched ? 'text-gray-400 line-through' : 'text-black'}`}>
                            Ep {ep.id % 100}: {ep.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toast message={toastMessage} isVisible={showToast} onUndo={() => setShowToast(false)} onClose={() => setShowToast(false)} />
    </>
  );
}