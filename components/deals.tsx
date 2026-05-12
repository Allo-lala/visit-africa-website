"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const deals = [
  {
    id: 1,
    title: "Luxury Egypt Escape",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    duration: "8 Days",
    originalPrice: 3499,
    discountedPrice: 2274,
    discount: 35,
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    title: "Zanzibar Beach Retreat",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    duration: "7 Days",
    originalPrice: 2899,
    discountedPrice: 1999,
    discount: 31,
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    title: "Kenya Safari Experience",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    duration: "10 Days",
    originalPrice: 4599,
    discountedPrice: 3219,
    discount: 30,
    endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: 4,
    title: "South Africa Wine & Safari",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    duration: "12 Days",
    originalPrice: 5299,
    discountedPrice: 3709,
    discount: 30,
    endDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 5,
    title: "Morocco Desert Adventure",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    duration: "9 Days",
    originalPrice: 3199,
    discountedPrice: 2239,
    discount: 30,
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
];

function CountdownTimer({ endDate }: { endDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center gap-1 text-xs font-[Inter,sans-serif]">
      <Clock className="w-3 h-3" />
      <span>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  );
}

export function Deals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-5 h-5 text-[#c9503f]" />
              <span className="text-[#c9503f] font-medium font-[Inter,sans-serif] text-sm uppercase tracking-wider">
                Limited Time
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a472a]">
              Pop-Up Sale
            </h2>
            <p className="text-[#1a472a]/70 mt-2 font-[Inter,sans-serif]">
              Flash deals on Africa&apos;s top trips
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-[#1a472a]/20 hover:bg-[#1a472a] hover:text-white hover:border-[#1a472a] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-[#1a472a]/20 hover:bg-[#1a472a] hover:text-white hover:border-[#1a472a] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[340px] snap-start"
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#c9503f] text-white px-3 py-1.5 rounded-full text-sm font-bold font-[Inter,sans-serif] shadow-lg animate-pulse">
                      Save {deal.discount}%
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                      <CountdownTimer endDate={deal.endDate} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold text-[#1a472a] mb-2">
                    {deal.title}
                  </h3>
                  <p className="text-[#1a472a]/60 text-sm mb-4 font-[Inter,sans-serif]">
                    {deal.duration}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[#1a472a]/50 line-through text-sm font-[Inter,sans-serif]">
                        ${deal.originalPrice.toLocaleString()}
                      </span>
                      <div className="text-2xl font-bold text-[#1a472a] font-[Inter,sans-serif]">
                        ${deal.discountedPrice.toLocaleString()}
                      </div>
                      <span className="text-xs text-[#1a472a]/60 font-[Inter,sans-serif]">
                        per person
                      </span>
                    </div>
                    <Button className="bg-[#1a472a] hover:bg-[#2a5a3a] text-white px-5 py-2 rounded-lg font-[Inter,sans-serif]">
                      View Trip
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
