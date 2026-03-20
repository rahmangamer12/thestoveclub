'use client';

import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#D4AF37]/20 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Gold Reflection / Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Desc */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#D4AF37] tracking-wider mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
              THE STOVE CLUB
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed text-sm">
              The premier destination for late-night dining in the heart of Gulshan-e-Iqbal, Karachi. Serving exceptional food from 6:00 PM to 4:30 AM every day.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/thestoveclub" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(253,29,29,0.5)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaInstagram size={18} />
              </a>
              <a href="https://wa.me/923118135074" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#25D366] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-white tracking-widest uppercase mb-6 text-sm flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" /> Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" /> Our Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" /> Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-sans font-semibold text-white tracking-widest uppercase mb-6 text-sm flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
              Contact Info
            </h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li className="flex items-start group hover:text-gray-200 transition-colors">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Shop 16, Time Square, Block 6,<br />Gulshan-e-Iqbal, Karachi 75300,<br />Pakistan</span>
              </li>
              <li className="flex items-center group hover:text-gray-200 transition-colors">
                <FaPhoneAlt className="text-[#D4AF37] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+923118135074" className="hover:text-[#D4AF37] transition-colors">+92 311 8135074</a>
              </li>
              <li className="flex items-center group hover:text-gray-200 transition-colors">
                <FaClock className="text-[#D4AF37] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Mon - Sun: 6:00 PM to 4:30 AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <p className="mt-4 md:mt-0">&copy; 2026 The Stove Club. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop} 
            className="my-4 lg:absolute lg:left-1/2 lg:-mt-10 lg:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] text-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1 z-20 bg-[#111]"
            title="Back to top"
          >
            <FaArrowUp />
          </button>

          <div className="mt-4 md:mt-0 space-x-4 flex items-center">
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Dine-in</span>
            <span className="text-[#D4AF37]">&bull;</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Takeout</span>
            <span className="text-[#D4AF37]">&bull;</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
