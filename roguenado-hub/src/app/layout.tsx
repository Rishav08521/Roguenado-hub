import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

// This metadata block fixes Google Verification and SEO
export const metadata = {
  title: 'RogueNado | AI Animation Studio',
  description: 'Disney-style AI Trailers & Realistic Cinema',
  verification: {
    google: 'Xp6jifYBYSC8byy9SGPukQzFkWpE6HjCeP-LcLAwliM',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b sticky top-0 z-50 shadow-sm">
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/logo.jpg" 
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
            <a href="https://www.youtube.com/@RogueNado" target="_blank" className="hover:text-blue-600 transition-colors">AI Prompts</a>
          </div>

          <div className="flex gap-4 items-center border-l pl-6 border-zinc-200">
            <a href="https://www.youtube.com/@RogueNado" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="h-5" />
            </a>
            <a href="https://www.instagram.com/anima_tion012" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="h-5" />
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
