"use client";

import DVDCase from "@/components/DVDCase";

export default function HomeAisles() {
  const theBoysSeasons = [
    { seasonNum: 1, episodes: [{id: 101, title: "The Name of the Game", watched: true}, {id: 102, title: "Cherry", watched: true}, {id: 103, title: "Get Some", watched: true}, {id: 104, title: "The Female of the Species", watched: true}] },
    { seasonNum: 2, episodes: [{id: 201, title: "The Big Ride", watched: true}, {id: 202, title: "Proper Preparation", watched: true}] },
    { seasonNum: 3, episodes: [{id: 301, title: "Payback", watched: true}, {id: 302, title: "The Only Man in the Sky", watched: true}] },
    { seasonNum: 4, episodes: [{id: 401, title: "Department of Dirty Tricks", watched: false}, {id: 402, title: "Life Among the Septics", watched: false}, {id: 403, title: "We'll Keep the Red Flag Flying Here", watched: false}] },
  ];

  const severanceSeasons = [
    { seasonNum: 1, episodes: [{id: 101, title: "Good News About Hell", watched: true}, {id: 102, title: "Half Loop", watched: true}, {id: 103, title: "In Perpetuity", watched: false}] },
    { seasonNum: 2, episodes: [{id: 201, title: "The Next Loop", watched: false}] }
  ];

  const tedLassoSeasons = [
    { seasonNum: 1, episodes: [{id: 101, title: "Pilot", watched: true}, {id: 102, title: "Biscuits", watched: true}] },
    { seasonNum: 2, episodes: [{id: 201, title: "Goodbye Earl", watched: true}] },
    { seasonNum: 3, episodes: [{id: 301, title: "Smells Like Mean Spirit", watched: true}] },
    { seasonNum: 4, episodes: [{id: 401, title: "A Fresh Kickoff", watched: false}] },
  ];

  const paddingtonSeasons = [
    { seasonNum: 1, episodes: [{id: 1, title: "Paddington (Feature Film)", watched: true}] }
  ];

  const shogunSeasons = [
    { seasonNum: 1, episodes: [{id: 101, title: "Anjin", watched: false}, {id: 102, title: "Servants of Two Masters", watched: false}, {id: 103, title: "Tomorrow is Tomorrow", watched: false}, {id: 104, title: "The Eightfold Fence", watched: false}] }
  ];

  return (
    <main className="min-h-screen flex flex-col pb-24 bg-[#001A6E]">
      <header className="pt-12 pb-6 px-6 bg-[#001A6E] sticky top-0 z-50 border-b-8 border-[#FFCC00] shadow-2xl">
        <h1 className="text-5xl font-black italic tracking-tighter text-[#FFCC00]">
          SHOWCASE
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto space-y-10 px-4 mt-8 relative z-10">
        
        {/* Shelf 1: Staff Picks */}
        <section>
          <h2 className="bg-[#FFCC00] text-[#001A6E] font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-2 border-b-0 border-black">
            Staff Picks
          </h2>
          <div className="w-full min-h-[260px] bg-blue-900 border-2 border-black rounded-xl p-4 flex items-end gap-4 overflow-x-auto hide-scrollbar shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]">
            <DVDCase 
              title="Ted Lasso" 
              poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/5ywFJMh31h51OIt0o3E3Z4mPzU7.jpg"
              synopsis="American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team."
              genres={["Comedy", "Sports"]}
              year="2020" rating="TV-MA"
              seasons={tedLassoSeasons}
              stickers={["Rewatch"]}
            />
            <DVDCase 
              title="Paddington" 
              poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/vXNq4rYIqV4hM5Z3QatK19Oa48z.jpg"
              synopsis="A young Peruvian bear travels to London in search of a home. Finding himself lost and alone at Paddington Station, he meets the kindly Brown family."
              genres={["Family", "Comedy"]}
              year="2014" rating="PG"
              seasons={paddingtonSeasons}
              stickers={["Staff Pick"]}
            />
          </div>
        </section>

        {/* Shelf 2: Currently Watching */}
        <section>
          <h2 className="bg-[#FFCC00] text-[#001A6E] font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-2 border-b-0 border-black">
            Currently Watching
          </h2>
          <div className="w-full min-h-[260px] bg-blue-900 border-2 border-black rounded-xl p-4 flex items-end gap-4 overflow-x-auto hide-scrollbar shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]">
             <DVDCase 
               title="The Boys" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/7Ns6tOqsNWkns3y5tPmt0v10n1D.jpg"
               synopsis="A group of vigilantes known informally as 'The Boys' set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty."
               genres={["Action", "Sci-Fi", "Dark Comedy"]}
               year="2019" rating="TV-MA"
               seasons={theBoysSeasons}
               stickers={["New Ep"]}
             />
             <DVDCase 
               title="Severance" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg"
               synopsis="Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives."
               genres={["Drama", "Mystery", "Sci-Fi"]}
               year="2022" rating="TV-MA"
               seasons={severanceSeasons}
             />
             <DVDCase 
               title="Shōgun" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1W1X1cRVJa.jpg"
               synopsis="In Japan in the year 1600, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him."
               genres={["Drama", "War", "Politics"]}
               year="2024" rating="TV-MA"
               seasons={shogunSeasons}
             />
          </div>
        </section>

        {/* Shelf 3: Start Soon */}
        <section>
          <h2 className="bg-[#FFCC00] text-[#001A6E] font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-2 border-b-0 border-black">
            Start Soon
          </h2>
          <div className="w-full min-h-[260px] bg-blue-900 border-2 border-black rounded-xl p-4 flex items-end gap-4 overflow-x-auto hide-scrollbar shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]">
             <DVDCase 
               title="Dark Matter" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/y6RjHq88WJ35jVz7bF85p8WqS4a.jpg"
               synopsis="Jason Dessen is abducted into an alternate version of his life. To get back to his true family, he embarks on a harrowing journey to save them from the most terrifying foe imaginable: himself."
               genres={["Sci-Fi", "Thriller"]}
               year="2024" rating="TV-MA"
               stickers={["Overdue"]} 
             />
             <DVDCase 
               title="Silo" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/sXbFmJ4P7GvU8G7kU85w3uA327O.jpg"
               synopsis="In a ruined and toxic future, thousands live in a giant silo deep underground. After its sheriff breaks a cardinal rule and residents die mysteriously, engineer Juliette starts to uncover shocking secrets."
               genres={["Sci-Fi", "Mystery"]}
               year="2023" rating="TV-MA"
             />
          </div>
        </section>

        {/* Shelf 4: Waiting on New Season */}
        <section>
          <h2 className="bg-[#FFCC00] text-[#001A6E] font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-2 border-b-0 border-black">
            Waiting on New Season
          </h2>
          <div className="w-full min-h-[260px] bg-blue-900 border-2 border-black rounded-xl p-4 flex items-end gap-4 overflow-x-auto hide-scrollbar shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]">
             <DVDCase 
               title="House of the Dragon" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/7QVsGidWM3L275B10Bq55zE6GfJ.jpg"
               synopsis="An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen."
               genres={["Fantasy", "Drama"]}
               year="2022" rating="TV-MA"
             />
             <DVDCase 
               title="Peacemaker" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/hE3LRZAY84fG19a18pz8Ph4HIxd.jpg"
               synopsis="The continuing story of Peacemaker – a compellingly vainglorious man who believes in peace at any cost, no matter how many people he has to kill to get it."
               genres={["Action", "Comedy"]}
               year="2022" rating="TV-MA"
             />
          </div>
        </section>

        {/* Shelf 5: Watchlist */}
        <section>
          <h2 className="bg-[#FFCC00] text-[#001A6E] font-black uppercase tracking-widest px-4 py-2 text-xs inline-block rounded-t-lg ml-4 border-2 border-b-0 border-black">
            Watchlist
          </h2>
          <div className="w-full min-h-[260px] bg-blue-900 border-2 border-black rounded-xl p-4 flex items-end gap-4 overflow-x-auto hide-scrollbar shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]">
             <DVDCase 
               title="Presumed Innocent" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/geDqj0vX3HlM18A9zX3O0YdO9lP.jpg"
               synopsis="A horrific murder upends the Chicago Prosecuting Attorney's office when one of its own is suspected of the crime."
               genres={["Mystery", "Crime", "Drama"]}
               year="2024" rating="TV-MA"
             />
             <DVDCase 
               title="Fallout" 
               poster="https://wsrv.nl/?url=https://image.tmdb.org/t/p/w500/kSgU9a30GkI5B8hFm3i7MbsiNAn.jpg"
               synopsis="In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants, and bandits."
               genres={["Sci-Fi", "Action", "Adventure"]}
               year="2024" rating="TV-MA"
             />
          </div>
        </section>

      </div>
    </main>
  );
}