import { ROGUENADO_VIDEOS } from '@/data/videos';
import VideoCard from '@/components/VideoCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 pb-20 font-sans dark:bg-black">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 px-8 text-center shadow-inner">
        <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter italic uppercase">
          RogueNado
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
          The ultimate vault for Disney-style AI Animation. Learn the prompts, watch the trailers, and join the storm.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://www.youtube.com/@RogueNado?sub_confirmation=1" 
            target="_blank"
            className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-zinc-100 transition-all shadow-xl hover:scale-105"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* Video Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12 border-b border-zinc-200 pb-4">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Latest Creations</h2>
          <span className="text-zinc-500 font-medium">{ROGUENADO_VIDEOS.length} Videos</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ROGUENADO_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-center py-10 border-t border-zinc-200 mt-10">
        <p className="text-zinc-400 text-sm">© 2026 RogueNado AI Hub • Built with Next.js</p>
      </footer>
    </main>
  );
}