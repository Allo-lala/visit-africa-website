"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80", // Safari
  "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80", // Cape Town
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80", // Zanzibar
  "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80", // Victoria Falls
  "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1920&q=80", // Morocco
];

const destinations = [
  "Cape Town, South Africa",
  "Zanzibar, Tanzania",
  "Serengeti, Tanzania",
  "Marrakech, Morocco",
  "Kigali, Rwanda",
  "Cairo, Egypt",
  "Victoria Falls, Zimbabwe",
  "Namibia",
  "Kampala, Uganda",
  "Maun, Botswana",
];

const departureCities = [
  "New York, USA",
  "London, UK",
  "Paris, France",
  "Dubai, UAE",
  "Sydney, Australia",
  "Toronto, Canada",
  "Frankfurt, Germany",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [departureCity, setDepartureCity] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredDepartures = departureCities.filter((city) =>
    city.toLowerCase().includes(departureCity.toLowerCase())
  );

  const filteredDestinations = destinations.filter((dest) =>
    dest.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
            Discover Africa Beyond
            <br />
            <span className="text-[#d4a853]">the Ordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-[Inter,sans-serif] font-light text-pretty">
            Curated luxury journeys, safaris, beach escapes, and cultural
            adventures across Africa.
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Departure City */}
              <div className="relative">
                <label className="block text-xs font-medium text-[#1a472a] mb-2 uppercase tracking-wider font-[Inter,sans-serif]">
                  From
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/60" />
                  <input
                    type="text"
                    placeholder="Departure city"
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    onFocus={() => setShowDepartureDropdown(true)}
                    onBlur={() =>
                      setTimeout(() => setShowDepartureDropdown(false), 200)
                    }
                    className="w-full pl-10 pr-4 py-3 border border-[#1a472a]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a472a]/30 bg-[#faf8f5] text-[#1a472a] font-[Inter,sans-serif] transition-all"
                  />
                  <AnimatePresence>
                    {showDepartureDropdown && filteredDepartures.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#1a472a]/10 overflow-hidden z-50"
                      >
                        {filteredDepartures.map((city) => (
                          <button
                            key={city}
                            onClick={() => {
                              setDepartureCity(city);
                              setShowDepartureDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-[#1a472a]/5 text-[#1a472a] font-[Inter,sans-serif] transition-colors"
                          >
                            {city}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Destination */}
              <div className="relative">
                <label className="block text-xs font-medium text-[#1a472a] mb-2 uppercase tracking-wider font-[Inter,sans-serif]">
                  To
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/60" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    onFocus={() => setShowDestinationDropdown(true)}
                    onBlur={() =>
                      setTimeout(() => setShowDestinationDropdown(false), 200)
                    }
                    className="w-full pl-10 pr-4 py-3 border border-[#1a472a]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a472a]/30 bg-[#faf8f5] text-[#1a472a] font-[Inter,sans-serif] transition-all"
                  />
                  <AnimatePresence>
                    {showDestinationDropdown &&
                      filteredDestinations.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#1a472a]/10 overflow-hidden z-50"
                        >
                          {filteredDestinations.map((dest) => (
                            <button
                              key={dest}
                              onClick={() => {
                                setDestination(dest);
                                setShowDestinationDropdown(false);
                              }}
                              className="w-full px-4 py-3 text-left hover:bg-[#1a472a]/5 text-[#1a472a] font-[Inter,sans-serif] transition-colors"
                            >
                              {dest}
                            </button>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Departure Date */}
              <div>
                <label className="block text-xs font-medium text-[#1a472a] mb-2 uppercase tracking-wider font-[Inter,sans-serif]">
                  When
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/60" />
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-[#1a472a]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a472a]/30 bg-[#faf8f5] text-[#1a472a] font-[Inter,sans-serif] transition-all"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-xs font-medium text-[#1a472a] mb-2 uppercase tracking-wider font-[Inter,sans-serif]">
                  Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/60" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full pl-10 pr-10 py-3 border border-[#1a472a]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a472a]/30 bg-[#faf8f5] text-[#1a472a] font-[Inter,sans-serif] appearance-none transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Traveler" : "Travelers"}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/60 pointer-events-none" />
                </div>
              </div>
            </div>

            <Button className="w-full md:w-auto md:px-12 py-6 bg-[#1a472a] hover:bg-[#2a5a3a] text-white text-lg font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-[Inter,sans-serif]">
              <Search className="w-5 h-5 mr-2" />
              Search Trips
            </Button>
          </div>
        </motion.div>

        {/* Image Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-[#d4a853] w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
