'use client';

import { motion } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa';

interface MenuCardProps {
  name: string;
  price: string;
  description?: string;
  image?: string;
  index: number;
}

export default function MenuCard({ name, price, description, image, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-lg group hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col justify-between h-full relative overflow-hidden"
    >
      <div className="absolute inset-0 w-[200%] -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
      <div className="flex-grow flex flex-col relative z-10">
        {image && (
          <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative flex-shrink-0 bg-[#050505]">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out" />
             
             {/* Price Badge */}
             <div className="absolute bottom-3 right-3 bg-gradient-to-r from-[#D4AF37] to-[#eac85d] px-4 py-1.5 rounded bg-opacity-90 shadow-lg shadow-black/50 transform group-hover:scale-105 transition-transform duration-300">
                <span className="font-sans font-bold text-black text-sm tracking-widest whitespace-nowrap">
                  {price}
                </span>
             </div>
          </div>
        )}
        
        <div className="flex justify-between items-start mb-3 border-b border-white/5 pb-3 group-hover:border-[#D4AF37]/30 transition-colors">
          <div className="flex items-center gap-3 w-full">
            <FaUtensils className="text-[#D4AF37]/70 hidden sm:block flex-shrink-0" size={16} />
            <h4 className="font-playfair text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors pr-2 break-words">
              {name}
            </h4>
          </div>
          {/* Price displayed inline when no image, otherwise hide to avoid duplication since it's on the badge */}
          {!image && (
            <span className="font-sans font-semibold text-[#D4AF37] whitespace-nowrap ml-4">
              {price}
            </span>
          )}
        </div>
        
        {description && (
          <p className="font-sans text-sm text-gray-400 leading-relaxed overflow-y-auto mt-2">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
