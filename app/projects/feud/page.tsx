export default function FeudProject() {
    return (
      <main className="min-h-screen bg-[#050816] text-white px-8 py-20">
        <div className="max-w-5xl mx-auto">
  
          <h1 className="text-5xl font-bold mb-6">
            Family Feud Web App
          </h1>
  
          <p className="text-white/70 mb-10">
            Interactive game platform built for live events and group
            activities, allowing custom boards, answers, and scoring.
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
              This web application recreates the classic Family Feud
              experience with custom questions, score tracking,
              and real-time gameplay designed for live audiences.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Tech Stack
            </h2>
  
            <div className="flex flex-wrap gap-3">
              {["Next.js","React","Supabase","Tailwind"].map((tech)=>(
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