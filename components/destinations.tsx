"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    description: "From Cape Town to safari adventures",
    packages: 24,
  },
  {
    id: 2,
    name: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    description: "Witness the Great Migration",
    packages: 18,
  },
  {
    id: 3,
    name: "Tanzania",
    image: "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?w=800&q=80",
    description: "Serengeti and Zanzibar beaches",
    packages: 21,
  },
  {
    id: 4,
    name: "Morocco",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    description: "Ancient medinas and desert camps",
    packages: 15,
  },
  {
    id: 5,
    name: "Egypt",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    description: "Pyramids and Nile cruises",
    packages: 12,
  },
  {
    id: 6,
    name: "Rwanda",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    description: "Gorilla trekking adventures",
    packages: 8,
  },
  {
    id: 7,
    name: "Namibia",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    description: "Desert landscapes and wildlife",
    packages: 10,
  },
  {
    id: 8,
    name: "Botswana",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80",
    description: "Okavango Delta luxury safaris",
    packages: 9,
  },
];

export function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a472a] mb-4">
            Where To Next?
          </h2>
          <p className="text-[#1a472a]/70 max-w-2xl mx-auto font-[Inter,sans-serif]">
            Explore our handpicked destinations across the African continent,
            each offering unique experiences and unforgettable memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1 text-[#d4a853] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-[Inter,sans-serif]">
                      {destination.packages} packages
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-white/80 text-sm font-[Inter,sans-serif] mb-3">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2 text-white group-hover:text-[#d4a853] transition-colors">
                    <span className="text-sm font-medium font-[Inter,sans-serif]">
                      Explore
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white rounded-xl font-medium font-[Inter,sans-serif] transition-all duration-300">
            View All Destinations 
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
