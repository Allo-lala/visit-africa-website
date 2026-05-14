"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Menu,
  X,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth-modal";

const navLinks = [
  {
    name: "Destinations",
    href: "#destinations",
    hasDropdown: true,
  },
  {
    name: "Trip Styles",
    href: "#trips",
    hasDropdown: true,
  },
  {
    name: "Deals",
    href: "#deals",
    hasDropdown: false,
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Left Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1 font-medium font-[Inter,sans-serif] transition-colors ${
                    isScrolled
                      ? "text-[#1a472a] hover:text-[#d4a853]"
                      : "text-white hover:text-[#d4a853]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>

            {/* Logo - Center */}
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isScrolled ? "bg-[#1a472a]" : "bg-[#d4a853]"
                }`}
              >
                <MapPin
                  className={`w-6 h-6 ${
                    isScrolled ? "text-[#d4a853]" : "text-[#1a472a]"
                  }`}
                />
              </div>
              <span
                className={`text-2xl font-serif font-bold transition-colors ${
                  isScrolled ? "text-[#1a472a]" : "text-white"
                }`}
              >
                Visit Africa
              </span>
            </div>

            {/* Right Nav Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? "hover:bg-[#1a472a]/10 text-[#1a472a]"
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Search"
              >
              </button>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className={`flex items-center gap-2 font-medium font-[Inter,sans-serif] transition-colors ${
                  isScrolled
                    ? "text-[#1a472a] hover:text-[#d4a853]"
                    : "text-white hover:text-[#d4a853]"
                }`}
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
              <Button className="bg-[#d4a853] hover:bg-[#c49743] text-[#1a472a] font-medium font-[Inter,sans-serif] px-6 py-2 rounded-full">
                Plan Your Trip
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-[#1a472a] hover:bg-[#1a472a]/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-[#1a472a]/10"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between py-3 border-b border-[#1a472a]/10 text-[#1a472a] font-medium font-[Inter,sans-serif]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAuthModalOpen(true);
                    }}
                    className="flex items-center gap-2 py-3 text-[#1a472a] font-medium font-[Inter,sans-serif]"
                  >
                    <User className="w-5 h-5" />
                    Login
                  </button>
                  <Button className="w-full bg-[#d4a853] hover:bg-[#c49743] text-[#1a472a] font-medium font-[Inter,sans-serif] py-3 rounded-xl mt-2">
                    Plan Your Trip
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
