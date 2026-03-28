
// "use client";

// import logo from "@/assets/logo.png";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      
//       <main className="max-w-4xl mx-auto text-center space-y-8">
        
//         {/* Logo */}
//         <motion.div
//           className="mb-8"
//           initial={{ opacity: 0, scale: 0.8, y: -20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Image
//             src={logo}
//             alt="Smart Notes Logo"
//             width={120}
//             height={120}
//             className="mx-auto"
//             priority
//           />
//         </motion.div>

//         {/* Title */}
//         <motion.h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           Smart Notes
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           A simple note-taking app with AI chatbot integration. Ask the chatbot
//           anything about your notes to retrieve and summarize that information.
//         </motion.p>

//         {/* CTA Button */}
//         <motion.div
//           className="pt-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button asChild size="lg" className="text-lg px-8 py-3">
//               <Link href="/notes">Get Started</Link>
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Built with */}
//         <motion.div
//           className="pt-8 text-sm text-muted-foreground"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           <p>Built with Nextjs and RAG</p>
//         </motion.div>
//       </main>
//     </div>
//   );
// }


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