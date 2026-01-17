import '@/app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'RogueNado | AI Animation Studio',
  description: 'Redefining Digital Storytelling through AI-Driven Animation. The ultimate vault for Disney-style AI Trailers.',
  verification: {
    google: 'Xp6jifYBYSC8byy9SGPukQzFkWpE6HjCeP-LcLAwliM',
  },
  // This section verifies your site for Google AdSense
  other: {
    'google-adsense-account': 'ca-pub-XXXXXXXXXXXXXXXX', // REPLACE WITH YOUR PUB-ID
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b sticky top-0 z-50 shadow-sm">
          <Link href="/" className="flex items-center gap-2 group">
            {/* IMPORTANT: Ensure "rogue.jpg" is inside your "public" folder. 
                Next.js looks in "public" automatically, so we use "/rogue.jpg"
            */}
            <Image 
              src="./rogue.jpg" 
              alt="RogueNado Logo" 
              width={40} 
              height={40} 
              className="rounded-full group-hover:rotate-12 transition-transform" 
            />
            <span className="font-black italic text-xl tracking-tighter uppercase text-zinc-800">RogueNado</span>
          </Link>
          
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest text-zinc-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/gallery" className="hover:text-blue-600 transition-colors">Gallery</Link>
            <a 
              href="https://www.youtube.com/@RogueNado" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              AI Prompts
            </a>
          </div>

          <div className="flex gap-4 items-center border-l pl-6 border-zinc-200">
            {/* YouTube Link */}
            <a href="https://www.youtube.com/@RogueNado" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="h-5" />
            </a>
            {/* Instagram Link */}
            <a href="https://www.instagram.com/anima_tion012" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="h-5" />
            </a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
