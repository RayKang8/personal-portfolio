export default function SpotifyProject() {
    return (
      <main className="min-h-screen bg-[#050816] text-white px-8 py-20">
        <div className="max-w-5xl mx-auto">
  
          <h1 className="text-5xl font-bold mb-6">
            Spotify Playlist Recommender
          </h1>
  
          <p className="text-white/70 mb-10">
            Machine learning project focused on recommending music
            using similarity-based algorithms and feature analysis.
          </p>
  
          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/your-repo"
              className="bg-white text-black px-5 py-2 rounded-lg"
            >
              GitHub
            </a>
          </div>
  
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Overview
            </h2>
  
            <p className="text-white/70">
              This project analyzes Spotify audio features and
              user listening patterns to generate personalized
              playlist recommendations.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Tech Stack
            </h2>
  
            <div className="flex flex-wrap gap-3">
              {["Python","KNN","Pandas","Scikit-learn"].map((tech)=>(
                <span
                  key={tech}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
  
        </div>
      </main>
    );
  }