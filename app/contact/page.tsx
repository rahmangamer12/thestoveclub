'use client';

import { motion } from 'framer-motion';
import ContactInfo from '@/components/ContactInfo';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-16"
      >
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#D4AF37] mb-6 tracking-wide">
          Find Us
        </h1>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-8"></div>
        <p className="text-gray-400 font-sans max-w-2xl mx-auto text-lg">
          We&apos;d love to host your next late-night dining experience. Reach out, order online, or drop by our location in Gulshan-e-Iqbal.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        {/* Contact Info Widget (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ContactInfo />
        </motion.div>

        {/* Google Maps Embed (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-xl overflow-hidden border border-white/5 h-[400px] lg:h-auto shadow-2xl relative group bg-[#111]"
        >
          {/* subtle gold overlay that fades out on hover */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
          
          <iframe 
            src="https://www.google.com/maps?q=THE+STOVE+CLUB+Gulshan-e-Iqbal+Karachi&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: "400px" }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:filter-none transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
