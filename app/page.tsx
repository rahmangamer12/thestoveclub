'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import { FiArrowRight } from 'react-icons/fi';
import { restaurant } from '@/lib/current';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#0a0a0a]">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Experience the True Taste of <span className="text-[#D4AF37]">Late Night Dining</span>
            </h2>
            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-6">
              Welcome to {restaurant.name}, Karachi&apos;s most premium late-night restaurant. Located in the bustling heart of Gulshan-e-Iqbal, we pride ourselves on offering an exceptional culinary experience designed for night owls and food enthusiasts alike.
            </p>
            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-8">
              Whether you&apos;re craving a juicy steak, flavorful grills, or a comforting dessert after midnight, our extensive menu has something for everyone. Join us for dine-in, or enjoy our flavors from the comfort of your home with our prompt takeout and delivery services.
            </p>
            
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#eac85d] text-black hover:text-black font-bold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transition-all duration-300"
            >
              <span className="text-sm uppercase tracking-wider text-black hover:text-black">Discover Our Menu</span>
              <FiArrowRight className="w-5 h-5 text-black hover:text-black" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 group"
          >
            <div className="absolute inset-0 bg-[#D4AF37] opacity-20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Restaurant Ambiance" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
