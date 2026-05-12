"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    location: "New York, USA",
    trip: "Kenya Safari Experience",
    rating: 5,
    review:
      "Our safari experience in Kenya was unforgettable. Visit Africa handled everything perfectly. From the moment we landed, every detail was taken care of. The guides were incredibly knowledgeable and the accommodations exceeded our expectations.",
    date: "March 2026",
    verified: true,
  },
  {
    id: 2,
    name: "James Thompson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    location: "London, UK",
    trip: "Morocco Desert Adventure",
    rating: 5,
    review:
      "An incredible journey through Morocco. The desert camp under the stars was magical. Our guide made us feel like family and introduced us to authentic Moroccan culture. Highly recommend!",
    date: "February 2026",
    verified: true,
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    location: "Sydney, Australia",
    trip: "South Africa Wine & Safari",
    rating: 5,
    review:
      "The perfect combination of adventure and relaxation. Cape Town is stunning, and the wine country exceeded all expectations. The safari portion was the cherry on top of an amazing trip.",
    date: "January 2026",
    verified: true,
  },
  {
    id: 4,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    location: "Toronto, Canada",
    trip: "Rwanda Gorilla Trekking",
    rating: 5,
    review:
      "Coming face to face with mountain gorillas was a life-changing experience. The organization and attention to detail from Visit Africa made this dream trip come true. Worth every penny.",
    date: "April 2026",
    verified: true,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    location: "Berlin, Germany",
    trip: "Zanzibar Beach Retreat",
    rating: 5,
    review:
      "Paradise found! The beaches are incredible, the people are warm, and the cultural experiences were authentic. Visit Africa picked the perfect accommodations with stunning ocean views.",
    date: "March 2026",
    verified: true,
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420;
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
          className="text-center mb-12"
        >
          {/* Trustpilot-style rating */}
          <div className="inline-flex flex-col items-center mb-6">
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="w-10 h-10 bg-[#00b67a] flex items-center justify-center"
                >
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#1a472a] font-[Inter,sans-serif]">
                Excellent
              </span>
              <span className="text-[#1a472a]/60 font-[Inter,sans-serif]">
                4.9 out of 5
              </span>
            </div>
            <p className="text-sm text-[#1a472a]/60 mt-1 font-[Inter,sans-serif]">
              Based on 12,847 reviews
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a472a] mb-4">
            Travelers Love Us
          </h2>
          <p className="text-[#1a472a]/70 max-w-2xl mx-auto font-[Inter,sans-serif]">
            Read what our happy travelers have to say about their African
            adventures with Visit Africa.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[380px] max-w-[380px] snap-start"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#d4a853] fill-[#d4a853]"
                        />
                      ))}
                    </div>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-[#00b67a] text-sm font-[Inter,sans-serif]">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[#1a472a]/80 font-[Inter,sans-serif] leading-relaxed flex-grow mb-4">
                    &ldquo;{review.review}&rdquo;
                  </p>

                  <div className="border-t border-[#1a472a]/10 pt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-[#1a472a] font-[Inter,sans-serif]">
                          {review.name}
                        </div>
                        <div className="text-sm text-[#1a472a]/60 font-[Inter,sans-serif]">
                          {review.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-[#1a472a]/70 font-[Inter,sans-serif]">
                      <span className="text-[#d4a853] font-medium">
                        {review.trip}
                      </span>{" "}
                      • {review.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
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
        </div>
      </div>
    </section>
  );
}
