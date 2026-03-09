export default function NimbusProject() {
    return (
      <main className="min-h-screen bg-[#050816] text-white px-8 py-20">
        <div className="max-w-5xl mx-auto">
  
          <h1 className="text-5xl font-bold mb-6">
            Nimbus Labs
          </h1>
  
          <p className="text-white/70 mb-10">
            AR/VR model management platform designed to simplify viewing,
            organizing, and interacting with 3D models using modern web
            technologies and scalable backend infrastructure.
          </p>
  
          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/your-repo"
              className="bg-white text-black px-5 py-2 rounded-lg"
            >
              GitHub
            </a>
  
            <a
              href="#"
              className="border border-white/20 px-5 py-2 rounded-lg"
            >
              Live Demo
            </a>
          </div>
  
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Overview
            </h2>
  
            <p className="text-white/70">
              Nimbus Labs is an interactive platform designed for managing,
              visualizing, and interacting with 3D models in a collaborative
              environment.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Tech Stack
            </h2>
  
            <div className="flex flex-wrap gap-3">
              {["Next.js","TypeScript","Supabase","Prisma"].map((tech)=>(
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