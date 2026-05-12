"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-[#1a472a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Get Inspired for Your Next African Adventure
          </h2>
          <p className="text-white/80 mb-8 font-[Inter,sans-serif]">
            Receive exclusive deals, travel inspiration, and curated African
            experiences directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#d4a853] font-[Inter,sans-serif] backdrop-blur-sm"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubscribed}
              className={`px-8 py-4 rounded-xl font-medium font-[Inter,sans-serif] transition-all duration-300 ${
                isSubscribed
                  ? "bg-[#00b67a] text-white"
                  : "bg-[#d4a853] hover:bg-[#c49743] text-[#1a472a]"
              }`}
            >
              {isSubscribed ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          <p className="text-white/50 text-sm mt-4 font-[Inter,sans-serif]">
            Join 50,000+ travelers. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
