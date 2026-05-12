"use client";

import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReferralBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a472a]/95 via-[#1a472a]/85 to-[#1a472a]/70" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-[#d4a853]/20 border border-[#d4a853]/30 text-[#d4a853] px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-[Inter,sans-serif] text-sm font-medium">
              Referral Program
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Give $100 to a Friend
          </h2>

          <p className="text-xl text-white/90 mb-8 font-[Inter,sans-serif] leading-relaxed">
            And get{" "}
            <span className="text-[#d4a853] font-semibold">$100 off</span> your
            next African adventure. Share the magic of Africa with someone
            special.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#d4a853] hover:bg-[#c49743] text-[#1a472a] px-8 py-6 text-lg font-semibold rounded-xl font-[Inter,sans-serif] transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Referring
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-[Inter,sans-serif] transition-all duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4a853] font-[Inter,sans-serif]">
                $2.5M+
              </div>
              <div className="text-white/70 text-sm font-[Inter,sans-serif]">
                Given to friends
              </div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4a853] font-[Inter,sans-serif]">
                15K+
              </div>
              <div className="text-white/70 text-sm font-[Inter,sans-serif]">
                Happy referrers
              </div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="text-center hidden sm:block">
              <div className="text-3xl font-bold text-[#d4a853] font-[Inter,sans-serif]">
                98%
              </div>
              <div className="text-white/70 text-sm font-[Inter,sans-serif]">
                Would refer again
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-[#d4a853] hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 right-40 w-32 h-32 rounded-full border border-[#d4a853] hidden lg:block"
      />
    </section>
  );
}
