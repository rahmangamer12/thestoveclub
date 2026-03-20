import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CursorGlow from '@/components/CursorGlow';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'The Stove Club | Late Night Restaurant Gulshan-e-Iqbal Karachi',
  description: 'Best late night dining in Gulshan-e-Iqbal Karachi. Open 6PM to 4:30AM. Dine-in, Takeout and Delivery. 4.3 stars on Google with 2414 reviews.',
  keywords: 'restaurant karachi, gulshan iqbal restaurant, late night dining karachi, stove club'
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
