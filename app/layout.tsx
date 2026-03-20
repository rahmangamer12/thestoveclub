import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CursorGlow from '@/components/CursorGlow';
import { restaurant } from '@/lib/current';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: `${restaurant.name} | Restaurant`,
  description: `Best dining at ${restaurant.name}. ${restaurant.hours}. ${restaurant.services.join(', ')}.`,
  keywords: `restaurant, ${restaurant.name.toLowerCase()}, dining`
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-[#0a0a0a] text-white font-sans antialiased min-h-screen flex flex-col relative`} suppressHydrationWarning>
        <CursorGlow />
        <Navbar />
        <main className="flex-grow z-10 relative">
          {children}
        </main>
        <div className="z-10 relative">
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
