"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100">

      {/* Soft radial highlight (matches screenshot feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,168,212,0.4),transparent_40%),radial-gradient(circle_at_20%_30%,rgba(253,230,138,0.4),transparent_40%)]" />

      <main className="text-center max-w-4xl mx-auto relative z-10">

        {/* 🔥 Premium Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
          bg-white/70 backdrop-blur-md border border-white/40 
          shadow-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-gray-600">
            AI-Powered Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900"
        >
          Notes that
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            think with you
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your ideas into intelligent insights. Smart Notes uses AI to help you
          organize, analyze, and discover connections in your thoughts.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center"
        >
          <Link href="/notes">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 20px 60px rgba(249,115,22,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl 
              bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 
              text-white font-semibold text-lg shadow-xl"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

      </main>
    </div>
  );
}