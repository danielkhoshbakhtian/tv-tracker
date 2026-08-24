"use client";

import { useState } from "react";
import { Ticket, UserPlus } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function FrontDoor() {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert(error.message);
      // Once logged in, middleware or a router.push will take them to the /home dashboard
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) alert(error.message);
      else alert("Application accepted! Check your email to laminate your card.");
    }
    setLoading(false);
  };

  // If no choice is made yet, show the two big counter options
  if (isLogin === null) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-store-dark">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black italic tracking-tighter text-store-yellow drop-shadow-[0_0_10px_rgba(255,204,0,0.5)]">
            SHOWCASE
          </h1>
          <p className="text-store-blue font-bold mt-2 uppercase tracking-widest bg-store-yellow inline-block px-2 transform -skew-x-12">
            Video Rental
          </p>
        </div>

        <div className="w-full max-w-md space-y-4">
          <button 
            onClick={() => setIsLogin(true)}
            className="w-full flex items-center justify-center gap-3 bg-store-blue text-white py-5 rounded-xl font-bold text-xl border-4 border-store-blue hover:bg-transparent hover:text-store-blue transition-all"
          >
            <Ticket size={28} />
            Returning Member
          </button>
          
          <button 
            onClick={() => setIsLogin(false)}
            className="w-full flex items-center justify-center gap-3 bg-store-yellow text-store-blue py-5 rounded-xl font-bold text-xl border-4 border-store-yellow hover:bg-transparent hover:text-store-yellow transition-all"
          >
            <UserPlus size={28} />
            Fill out an Application
          </button>
        </div>
      </main>
    );
  }

  // The Form View (Slides up after picking an option)
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-store-dark">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 shadow-2xl relative overflow-hidden">
        {/* Decorative Tape Stripe */}
        <div className={`absolute top-0 left-0 w-full h-2 ${isLogin ? 'bg-store-blue' : 'bg-store-yellow'}`}></div>
        
        <h2 className="text-3xl font-bold mb-6 text-white">
          {isLogin ? "Scan Membership Card" : "New Application"}
        </h2>
        
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-store-yellow focus:ring-1 focus:ring-store-yellow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-store-yellow focus:ring-1 focus:ring-store-yellow"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-lg mt-4 transition-colors ${
              isLogin 
                ? 'bg-store-blue text-white hover:bg-blue-800' 
                : 'bg-store-yellow text-store-blue hover:bg-yellow-500'
            }`}
          >
            {loading ? "Processing..." : (isLogin ? "Log In" : "Submit Application")}
          </button>
        </form>

        <button 
          onClick={() => setIsLogin(null)}
          className="mt-6 text-zinc-500 hover:text-zinc-300 text-sm font-medium w-full text-center"
        >
          ← Back to Front Counter
        </button>
      </div>
    </main>
  );
}