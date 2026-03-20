'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const categories = ["All", "Appetizers", "Main Course", "Grills", "Beverages", "Desserts", "Deals"];

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  // Appetizers
  { id:"2", name:"Garlic Bread", price:"Rs 180", category:"Appetizers", description:"Toasted baguette slices with garlic butter, herbs and melted mozzarella.", image:"https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&h=400&fit=crop" },
  { id:"3", name:"Loaded Nachos", price:"Rs 420", category:"Appetizers", description:"Crispy tortilla chips topped with melted cheese, jalapenos, sour cream and salsa.", image:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&h=400&fit=crop", badge:"Bestseller" },
  { id:"4", name:"Onion Rings", price:"Rs 220", category:"Appetizers", description:"Golden fried onion rings with a crispy coating, served with garlic mayo.", image:"https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&h=400&fit=crop" },
  // Main Course
  { id:"5", name:"Grilled Chicken", price:"Rs 680", category:"Main Course", description:"Juicy marinated chicken breast grilled to perfection with mashed potatoes and vegetables.", image:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=400&fit=crop" },
  { id:"6", name:"Beef Steak", price:"Rs 1,200", category:"Main Course", description:"Premium beef cut cooked to your liking, served with mushroom pepper sauce and fries.", image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop", badge:"Premium" },
  { id:"7", name:"Pasta Alfredo", price:"Rs 520", category:"Main Course", description:"Fettuccine pasta in a rich and creamy parmesan sauce with grilled chicken strips.", image:"https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&h=400&fit=crop" },
  { id:"8", name:"Club Burger", price:"Rs 480", category:"Main Course", description:"Double beef patty with cheddar cheese, lettuce, tomato, and our secret sauce.", image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop", badge:"Bestseller" },
  // Grills
  { id:"9", name:"Mixed Grill Platter", price:"Rs 1,800", category:"Grills", description:"An assortment of chicken tikka, seekh kebabs, shish tawook and naan.", image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=687&auto=format&fit=crop", badge:"For 2-3" },
  { id:"10", name:"Seekh Kebab", price:"Rs 580", category:"Grills", description:"Spiced minced beef skewers grilled over charcoal to perfection.", image:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=400&fit=crop" },
  { id:"11", name:"Chicken Tikka", price:"Rs 650", category:"Grills", description:"Bone-in chicken pieces marinated in yogurt and traditional spices, charcoal grilled.", image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=687&auto=format&fit=crop", badge:"Bestseller" },
  { id:"12", name:"Shish Tawook", price:"Rs 720", category:"Grills", description:"Middle Eastern style marinated chicken cubes grilled on skewers with garlic sauce.", image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop" },
  // Beverages
  { id:"13", name:"Fresh Juices", price:"Rs 180", category:"Beverages", description:"Freshly squeezed seasonal fruit juices — mango, orange, watermelon and more.", image:"https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&h=400&fit=crop" },
  { id:"14", name:"Milkshakes", price:"Rs 280", category:"Beverages", description:"Thick and creamy shakes in vanilla, chocolate, strawberry and Oreo.", image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop", badge:"Popular" },
  { id:"15", name:"Cold Coffee", price:"Rs 220", category:"Beverages", description:"Chilled blended coffee with vanilla ice cream and whipped cream.", image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop" },
  { id:"16", name:"Mojito", price:"Rs 260", category:"Beverages", description:"Refreshing mint and lime mocktail with sparkling water — available in multiple flavors.", image:"https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop" },
  // Desserts
  { id:"17", name:"Chocolate Lava Cake", price:"Rs 320", category:"Desserts", description:"Warm rich chocolate cake with a gooey molten center, served with vanilla ice cream.", image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop", badge:"Must Try" },
  { id:"18", name:"Tiramisu", price:"Rs 380", category:"Desserts", description:"Classic Italian coffee-flavored dessert layered with mascarpone and dusted with cocoa.", image:"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop" },
  { id:"19", name:"Cheesecake", price:"Rs 350", category:"Desserts", description:"Rich and creamy New York style cheesecake with a buttery graham cracker crust.", image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop" },
  { id:"20", name:"Brownie", price:"Rs 280", category:"Desserts", description:"Fudgy warm chocolate brownie served with a scoop of vanilla ice cream.", image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop" },
  // Deals
  { id:"21", name:"Student Deal", price:"Rs 599", category:"Deals", description:"1 Club Burger, Crispy Fries, and a Drink of your choice.", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop", badge:"Save Rs 160" },
  { id:"22", name:"Family Deal", price:"Rs 2,499", category:"Deals", description:"Mixed Grill Platter, 4 Naans, 1.5L Drink, and 2 Desserts.", image:"https://plus.unsplash.com/premium_photo-1672498213874-6532cb5703b2?q=80&w=1470&auto=format&fit=crop", badge:"For 4-5" },
  { id:"23", name:"Couple Deal", price:"Rs 1,299", category:"Deals", description:"2 Pasta bowls, 2 Cold Drinks, and 1 Dessert to share.", image:"https://images.unsplash.com/photo-1519408824990-bacd0dddb23b?q=80&w=1470&auto=format&fit=crop", badge:"Perfect Date" },
  { id:"24", name:"Birthday Package", price:"Rs 3,999", category:"Deals", description:"Reserved table setup, exclusive family platter, customized cake, and decoration.", image:"https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?q=80&w=1470&auto=format&fit=crop", badge:"Special" },
];

export const initialMenuItems = menuItems; // Export for backward compatibility with admin panel

const badgeColors: Record<string, string> = {
  "Spicy": "bg-red-500/90",
  "Bestseller": "bg-[#D4AF37]/90",
  "Premium": "bg-purple-500/90",
  "For 2-3": "bg-blue-500/90",
  "For 4-5": "bg-blue-500/90",
  "Must Try": "bg-green-500/90",
  "Save Rs 160": "bg-green-600/90",
  "Perfect Date": "bg-pink-500/90",
  "Special": "bg-[#D4AF37]/90",
  "Popular": "bg-orange-500/90",
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 cursor-pointer backdrop-blur-xl"
      style={{ 
        boxShadow: hovered 
          ? '0 25px 50px -12px rgba(212,175,55,0.25), 0 0 40px rgba(212,175,55,0.15)' 
          : '0 4px 20px rgba(0,0,0,0.4)' 
      }}
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>
        
        {/* Animated overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: hovered ? "200%" : "-100%", opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + (index % 4) * 0.08, duration: 0.3 }}
        >
          {item.badge && (
            <span className={`absolute top-3 left-3 ${badgeColors[item.badge] || 'bg-[#D4AF37]/90'} text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-lg animate-pulse`}>
              {item.badge}
            </span>
          )}
        </motion.div>

        {/* Price badge */}
        <motion.div 
          className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-[#D4AF37]/60 rounded-xl px-3 py-1.5 shadow-xl"
          animate={{ scale: hovered ? 1.1 : 1, borderColor: hovered ? 'rgba(212,175,55,1)' : 'rgba(212,175,55,0.6)' }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-[#D4AF37] font-bold text-sm tracking-wide">{item.price}</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 z-10 relative bg-gradient-to-b from-[#111] via-[#111] to-[#0a0a0a]">
        {/* Category with animated line */}
        <div className="flex items-center gap-3 mb-2">
          <motion.div 
            className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (index % 4) * 0.08, duration: 0.4 }}
          />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/80 font-semibold">
            {item.category}
          </span>
        </div>

        <motion.h3 
          className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300"
          animate={{ x: hovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.name}
        </motion.h3>

        <motion.p 
          className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4"
          animate={{ opacity: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {item.description}
        </motion.p>

        {/* Order button */}
        <motion.a
          href={`https://wa.me/923118135074?text=Hi! I want to order ${item.name} (${item.price})`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(37,211,102,0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-bold transition-all overflow-hidden relative"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
          <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="relative z-10 font-semibold">Order Now</span>
        </motion.a>
      </div>

      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37]" />
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(212,175,55,0.2)]" />
      </motion.div>
      
      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/0 rounded-tl-2xl"
        animate={{ borderColor: hovered ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0)' }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/0 rounded-tr-2xl"
        animate={{ borderColor: hovered ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0)' }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/0 rounded-bl-2xl"
        animate={{ borderColor: hovered ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0)' }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/0 rounded-br-2xl"
        animate={{ borderColor: hovered ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0)' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const saved = localStorage.getItem('stoveclub_menu');
    if (saved) {
      setItems(JSON.parse(saved));
    } else {
      setItems(initialMenuItems);
      localStorage.setItem('stoveclub_menu', JSON.stringify(initialMenuItems));
    }
  }, []);

  useEffect(() => {
    if (items.length > 0 || localStorage.getItem('stoveclub_menu')) {
      setIsLoaded(true);
    }
  }, [items]);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)' }}>
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
      </div>

      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/60 font-semibold mb-4 block">
            Culinary Excellence
          </span>
          <h1 className="font-playfair text-6xl md:text-7xl font-bold text-[#D4AF37] mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            Our Menu
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#D4AF37]/30" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]/30" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Carefully crafted late-night cravings, served from{' '}
            <span className="text-[#D4AF37] border-b border-[#D4AF37]/30">6:00 PM to 4:30 AM</span> — because great food has no bedtime.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                  : "bg-[#050505] text-gray-400 border border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Count */}
        <motion.p
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 text-sm mb-8 font-sans"
        >
          Showing <span className="text-[#D4AF37] font-semibold">{filteredItems.length}</span> items
          {activeCategory !== "All" && <span> in <span className="text-white">{activeCategory}</span></span>}
        </motion.p>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24 p-12 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#111] to-[#0a0a0a] shadow-[0_0_30px_rgba(212,175,55,0.05)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
            Can&apos;t decide? <span className="text-[#D4AF37]">We can help!</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Chat with us on WhatsApp and we&apos;ll suggest the perfect meal for you. Our team is available from 6:00 PM to 4:30 AM to assist!
          </p>
          <a
            href="https://wa.me/923118135074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold py-4 px-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact on WhatsApp for Help
          </a>
        </motion.div>
      </div>
    </div>
  );
}
