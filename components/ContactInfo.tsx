'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram } from 'react-icons/fa';

export default function ContactInfo() {
  const infoItems = [
    {
      icon: <FaMapMarkerAlt className="text-[#D4AF37] text-xl" />,
      title: "Address",
      content: "Shop 16, Time Square, Block 6, Gulshan-e-Iqbal, Karachi",
      isLink: false
    },
    {
      icon: <FaPhoneAlt className="text-[#D4AF37] text-xl" />,
      title: "Phone",
      content: "+92 311 8135074",
      href: "tel:+923118135074",
      isLink: true
    },
    {
      icon: <FaClock className="text-[#D4AF37] text-xl" />,
      title: "Hours",
      content: "6:00 PM to 4:30 AM — 7 days a week",
      isLink: false
    },
    {
      icon: <FaInstagram className="text-[#D4AF37] text-xl" />,
      title: "Instagram",
      content: "@thestoveclub",
      href: "https://instagram.com/thestoveclub",
      isLink: true
    }
  ];

  return (
    <div className="bg-[#111] p-8 md:p-10 rounded-xl border border-white/5 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-playfair text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Get in Touch
        </h2>
        
        <div className="space-y-8">
          {infoItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#0a0a0a] flex items-center justify-center border border-white/5 shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-gray-400 font-sans text-sm uppercase tracking-wider mb-1">
                  {item.title}
                </h4>
                {item.isLink ? (
                  <a href={item.href} target={item.title === 'Instagram' ? "_blank" : undefined} rel={item.title === 'Instagram' ? "noopener noreferrer" : undefined} className="text-white font-medium hover:text-[#D4AF37] transition-colors leading-relaxed">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-white font-medium leading-relaxed">
                    {item.content}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-3"
        >
          <span className="px-4 py-2 bg-[#0a0a0a] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded">
            Dine-in
          </span>
          <span className="px-4 py-2 bg-[#0a0a0a] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded">
            Takeout
          </span>
          <span className="px-4 py-2 bg-[#0a0a0a] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded">
            Delivery
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
