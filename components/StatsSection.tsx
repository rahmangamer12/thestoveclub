'use client';

import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaMoneyBillWave } from 'react-icons/fa';
import { restaurant } from '@/lib/current';

export default function StatsSection() {
  const stats = [
    {
      icon: <FaStar className="text-[#D4AF37] text-3xl mb-3" />,
      title: `${restaurant.rating} Star Rating`,
      desc: "Exceptional dining experience"
    },
    {
      icon: <FaGoogle className="text-white text-3xl mb-3" />,
      title: `${restaurant.reviews}+ Reviews`,
      desc: "Trusted by our community"
    },
    ...(restaurant.priceRange ? [{
      icon: <FaMoneyBillWave className="text-[#10B981] text-3xl mb-3" />,
      title: restaurant.priceRange,
      desc: "Average cost per person"
    }] : [])
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-[#111111] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center p-6 bg-[#0a0a0a] rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors group">
              <div className="group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-400 font-sans text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
