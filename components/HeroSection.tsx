'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const textRevealVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function HeroSection() {
  const particles = useMemo(() => {
    const lcg = (() => {
      let state = 12345;
      return () => {
        state = (state * 1103515245 + 12345) & 0x7fffffff;
        return state / 0x7fffffff;
      };
    })();
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: lcg() * 1400,
      y: lcg() * 800,
      duration: 5 + lcg() * 5,
      delay: lcg() * 5,
      yOffset: lcg() * 500 + 200,
    }));
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        
        {/* Animated Gold Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-30 shadow-[0_0_8px_#D4AF37]"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [particle.y, particle.y - particle.yOffset],
                opacity: [0.3, 0.8, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm md:text-md mb-4 font-semibold font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Welcome to
        </motion.p>
        
        <div className="overflow-hidden mb-6">
          <motion.h1 
            variants={textRevealVariants}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight drop-shadow-2xl"
          >
            THE STOVE <span className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">CLUB</span>
          </motion.h1>
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-gray-200 text-lg md:text-xl md:text-2xl mb-2 font-inter max-w-2xl font-light drop-shadow-lg"
        >
          Late Night Dining in the Heart of Gulshan-e-Iqbal
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 text-sm md:text-base mb-10 font-inter max-w-xl drop-shadow-lg"
        >
          Open 6:00 PM to 4:30 AM &bull; Dine-in, Takeout and Delivery
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link 
            href="/menu" 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#eac85d] text-black hover:text-black font-bold rounded-lg shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm text-center"
          >
            <span className="text-black hover:text-black">View Our Menu</span>
          </Link>
          <a 
            href="https://wa.me/923118135074" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white hover:text-white font-bold rounded-lg shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm text-center flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-white hover:text-white">Order on WhatsApp</span>
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1 hover:border-[#D4AF37] transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
          <div className="w-1.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_5px_#D4AF37]" />
        </div>
      </motion.div>
    </div>
  );
}
