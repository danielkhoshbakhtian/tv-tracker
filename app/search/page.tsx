'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchTMDB = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setIsSearching(true);
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      }
    };

    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}`, options);
      const data = await res.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("TMDB Search Error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const addShowToDatabase = async (show: any) => {
    const { data: showData, error: showError } = await supabase
      .from('shows')
      .upsert({
        api_id: show.id,
        title: show.name,
        poster_url: show.poster_path ? `https://image.tmdb.org/t/p/w500${show.poster_path}` : null,
      }, { onConflict: 'api_id' })
      .select()
      .single();

    if (showError || !showData) {
      alert("Failed to add show.");
      return;
    }

    const { error: progressError } = await supabase
      .from('user_progress')
      .insert({
        show_id: showData.id,
        shelf: 'currently_watching',
        current_season: 1,
        episodes_watched: 0,
        total_episodes: 10 
      });

    if (progressError) {
      alert("This show is already in your library!");
    } else {
      alert(`Added ${show.name} to your Currently Watching shelf!`);
    }
  };

  return (
    <div className="pt-8 pb-24 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-white mb-4">Search</h1>
        <form onSubmit={searchTMDB} className="relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search TMDB for a show..." 
            className="w-full bg-gray-900 border border-fuchsia-500/50 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          />
          <button type="submit" className="absolute right-2 top-2 bg-cyan-500 text-gray-900 font-bold px-4 py-1 rounded-lg active:scale-95 transition-transform">
            {isSearching ? '...' : 'Go'}
          </button>
        </form>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {results.map((show) => (
          <div key={show.id} className="bg-gray-900/60 border border-cyan-500/20 rounded-xl overflow-hidden flex flex-col">
            {show.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} className="w-full aspect-[2/3] object-cover" />
            ) : (
              <div className="w-full aspect-[2/3] bg-gray-800 flex items-center justify-center text-gray-500">No Image</div>
            )}
            <div className="p-3 flex-grow flex flex-col justify-between">
              <h3 className="font-bold text-sm text-gray-100 mb-2 truncate">{show.name}</h3>
              <button 
                onClick={() => addShowToDatabase(show)}
                className="w-full bg-gray-800 hover:bg-fuchsia-600 active:scale-95 text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-transparent text-xs font-bold py-2 rounded transition-all"
              >
                + Add Show
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}