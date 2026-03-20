export type RestaurantConfig = {
  name: string;
  urdu?: string;
  phone: string;
  whatsapp?: string;
  address: string;
  hours: string;
  rating: string;
  reviews: string;
  priceRange?: string;
  services: string[];
  instagram?: string;
  website: string;
};

export const RESTAURANT_CONFIGS: RestaurantConfig[] = [
  {
    name: "Cafe Hawaii",
    phone: "+92 309 1358888",
    whatsapp: "923091358888",
    address: "Block 4 Gulshan-e-Iqbal, Karachi",
    hours: "Opens 12 PM — Closes 12 AM",
    rating: "4.4",
    reviews: "805",
    priceRange: "Rs 2,000–3,000",
    services: ["Dine-in", "Takeout"],
    instagram: "",
    website: "cafehawaii.vercel.app"
  },
  {
    name: "Usmania Restaurant",
    urdu: "عثمانیہ ریستوران",
    phone: "+92 21 34982525",
    whatsapp: "922134982525",
    address: "Block 13A Main University Rd, Gulshan-e-Iqbal, Karachi",
    hours: "Open 24 Hours",
    rating: "3.9",
    reviews: "5,226",
    priceRange: "$$",
    services: ["Dine-in", "Takeout", "Delivery"],
    instagram: "",
    website: "usmaniarestaurant.vercel.app"
  },
  {
    name: "Mailma Restaurant",
    phone: "+92 300 0059557",
    address: "Block 7, Gulshan-e-Iqbal, Karachi",
    hours: "Opens — Closes 1 AM",
    rating: "3.8",
    reviews: "1,586",
    services: ["Dine-in", "Takeout", "Delivery"],
    instagram: "instagram.com/mailma",
    website: "mailmarestaurant.vercel.app"
  },
  {
    name: "Noorani Restaurant",
    urdu: "نورانی ریستوران",
    phone: "+92 21 34827322",
    whatsapp: "922134827322",
    address: "Suleman Plaza, Shop 6-8, Rashid Minhas Rd, Block 10, Gulshan-e-Iqbal, Karachi",
    hours: "Opens — Closes 11:30 PM",
    rating: "4.0",
    reviews: "1,820",
    priceRange: "Rs 1,000–2,000",
    services: ["Dine-in", "Takeout", "Delivery"],
    website: "nooranirestaurant.vercel.app"
  },
  {
    name: "Bolan Sajji House",
    urdu: "بولان سجی ہاؤس",
    phone: "+92 313 9990008",
    whatsapp: "923139990008",
    address: "Shop 13 & 14, Main University Rd, Block 13A, Gulshan-e-Iqbal, Karachi",
    hours: "Opens 3 PM",
    rating: "4.0",
    reviews: "5,721",
    services: ["Dine-in", "Takeout", "Delivery"],
    website: "bolansajji.vercel.app"
  },
  {
    name: "Hot n Roll",
    phone: "+92 324 9213769",
    whatsapp: "923249213769",
    address: "Maisam Plaza, Block 2, Gulshan-e-Iqbal, Karachi",
    hours: "Open 24 Hours",
    rating: "4.1",
    reviews: "117",
    priceRange: "Rs 500–1,000",
    services: ["Dine-in", "Drive-through", "Delivery"],
    instagram: "instagram.com/hot_n_roll_gulshan_e_iqbal",
    website: "hotnroll.vercel.app"
  }
];
