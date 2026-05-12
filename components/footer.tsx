"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Refund Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  destinations: [
    { name: "Safaris", href: "#" },
    { name: "Beaches", href: "#" },
    { name: "Luxury Tours", href: "#" },
    { name: "Cultural Experiences", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const paymentMethods = [
  { name: "Visa", color: "#1434CB" },
  { name: "Mastercard", color: "#EB001B" },
  { name: "Amex", color: "#006FCF" },
  { name: "PayPal", color: "#003087" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f2518] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#d4a853] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#1a472a]" />
              </div>
              <span className="text-2xl font-serif font-bold">
                Visit Africa
              </span>
            </div>
            <p className="text-white/70 mb-6 font-[Inter,sans-serif] leading-relaxed max-w-sm">
              Curated luxury journeys across Africa. We create unforgettable
              experiences that connect travelers with the heart of Africa.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70 font-[Inter,sans-serif]">
                <MapPin className="w-5 h-5 text-[#d4a853]" />
                <span>Cape Town, South Africa</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 font-[Inter,sans-serif]">
                <Phone className="w-5 h-5 text-[#d4a853]" />
                <span>+27 21 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 font-[Inter,sans-serif]">
                <Mail className="w-5 h-5 text-[#d4a853]" />
                <span>hello@visitafrica.com</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a853] hover:text-[#1a472a] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#d4a853] transition-colors font-[Inter,sans-serif]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-serif font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#d4a853] transition-colors font-[Inter,sans-serif]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-serif font-bold mb-4">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#d4a853] transition-colors font-[Inter,sans-serif]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-white/50 text-sm font-[Inter,sans-serif]">
                © 2026 Visit Africa. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-white/50 text-sm font-[Inter,sans-serif]">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent border-none focus:outline-none cursor-pointer">
                  <option value="en">English (US)</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-sm font-[Inter,sans-serif]">
                We accept:
              </span>
              <div className="flex gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold"
                    style={{ color: method.color }}
                  >
                    {method.name}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded text-sm">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-white/70 font-[Inter,sans-serif]">
                  Secure
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
