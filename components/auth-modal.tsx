"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type AuthView = "signin" | "signup" | "reset";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [view, setView] = useState<AuthView>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("[v0] Auth form submitted:", { email, password, name, view });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex"
          >
            {/* Left Side - Image */}
            <div className="hidden md:block w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                alt="African Safari"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a472a]/90 via-[#1a472a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Your African Adventure Awaits
                </h3>
                <p className="text-white/80 font-[Inter,sans-serif]">
                  Join thousands of travelers who have discovered the magic of
                  Africa with us.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#1a472a]/10 text-[#1a472a] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-[#1a472a] mb-2">
                  {view === "signin" && "Welcome Back"}
                  {view === "signup" && "Create Account"}
                  {view === "reset" && "Reset Password"}
                </h2>
                <p className="text-[#1a472a]/60 font-[Inter,sans-serif]">
                  {view === "signin" && "Sign in to access your trips and bookings"}
                  {view === "signup" && "Start planning your African adventure"}
                  {view === "reset" && "Enter your email to receive a reset link"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {view === "signup" && (
                  <div>
                    <label className="block text-sm font-medium text-[#1a472a] mb-1 font-[Inter,sans-serif]">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/40" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 border border-[#1a472a]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a472a]/30 bg-[#faf8f5] text-[#1a472a] font-[Inter,sans-serif]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#1a472a] mb-1 font-[Inter,sans-serif]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-[#1a472a]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a472a]/30 bg-[#faf8f5] text-[#1a472a] font-[Inter,sans-serif]"
                    />
                  </div>
                </div>

                {view !== "reset" && (
                  <div>
                    <label className="block text-sm font-medium text-[#1a472a] mb-1 font-[Inter,sans-serif]">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a472a]/40" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-12 py-3 border border-[#1a472a]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a472a]/30 bg-[#faf8f5] text-[#1a472a] font-[Inter,sans-serif]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a472a]/40 hover:text-[#1a472a]"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {view === "signin" && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-[#1a472a]/20 text-[#1a472a] focus:ring-[#1a472a]"
                      />
                      <span className="text-sm text-[#1a472a]/70 font-[Inter,sans-serif]">
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setView("reset")}
                      className="text-sm text-[#d4a853] hover:text-[#c49743] font-medium font-[Inter,sans-serif]"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#1a472a] hover:bg-[#2a5a3a] text-white py-3 rounded-xl font-medium font-[Inter,sans-serif] transition-all"
                >
                  {view === "signin" && "Sign In"}
                  {view === "signup" && "Create Account"}
                  {view === "reset" && "Send Reset Link"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              {view !== "reset" && (
                <>
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#1a472a]/10" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-[#1a472a]/50 font-[Inter,sans-serif]">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-3 py-3 border border-[#1a472a]/20 rounded-xl hover:bg-[#faf8f5] transition-colors font-[Inter,sans-serif]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-[#1a472a] font-medium">
                      Continue with Google
                    </span>
                  </button>
                </>
              )}

              <div className="mt-6 text-center">
                {view === "signin" && (
                  <p className="text-[#1a472a]/70 font-[Inter,sans-serif]">
                    Don&apos;t have an account?{" "}
                    <button
                      onClick={() => setView("signup")}
                      className="text-[#d4a853] hover:text-[#c49743] font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                )}
                {view === "signup" && (
                  <p className="text-[#1a472a]/70 font-[Inter,sans-serif]">
                    Already have an account?{" "}
                    <button
                      onClick={() => setView("signin")}
                      className="text-[#d4a853] hover:text-[#c49743] font-medium"
                    >
                      Sign in
                    </button>
                  </p>
                )}
                {view === "reset" && (
                  <button
                    onClick={() => setView("signin")}
                    className="text-[#d4a853] hover:text-[#c49743] font-medium font-[Inter,sans-serif]"
                  >
                    Back to sign in
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
