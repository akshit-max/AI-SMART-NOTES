// "use client";

// import { FileText, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import ModeToggle from "@/components/ui/ThemeToggle";
// import { UserButton } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// // import logo from "../assets/logo.png";


// export function Navbar() {
//   const{theme}=useTheme();

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
//             <FileText className="h-6 w-6 text-white" />
//           </div>
//           <span className="text-xl font-bold tracking-tight">
//             AI Smart Notes
//           </span>
//         </div>


        
//         <div className=" items-center gap-3 md:flex">
//            <div className="flex items-center gap-3">
//           <ModeToggle />
//           <UserButton
//             appearance={{
//               baseTheme: theme === "dark" ? dark : undefined,
//               elements: {
//                 avatarBox: {
//                   width: 35,
//                   height: 35,
//                 },
//               },
//             }}
//           >
           
//           </UserButton>
//         </div>
          
//         </div>

       
       
//       </div>

     
//     </nav>
//   );
// }
// "use client";

// import { Sparkles } from "lucide-react";
// import ModeToggle from "@/components/ui/ThemeToggle";
// import { UserButton, useUser } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";
// import { useTheme } from "next-themes";
// import Link from "next/link";

// export function Navbar() {
//   const { theme } = useTheme();
//   const { user } = useUser();

//   return (
//     <nav
//       className="sticky top-0 z-50 w-full 
//       border-b border-white/40 
//       bg-white/70 backdrop-blur-xl"
//     >
//       <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-6">

//         {/* 🔥 Logo → link to landing */}
//         <Link href="/" className="flex items-center gap-3">
//           <div
//             className="flex h-10 w-10 items-center justify-center rounded-xl 
//             bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-md"
//           >
//             <Sparkles className="h-5 w-5" />
//           </div>

//           <span className="text-lg font-semibold text-gray-900 tracking-tight">
//             Smart Notes
//           </span>
//         </Link>

//         {/* 🔥 Right Section */}
//         <div className="flex items-center gap-4">

          

//           <ModeToggle />

//           <UserButton
//             appearance={{
//               baseTheme: theme === "dark" ? dark : undefined,
//               elements: {
//                 avatarBox: {
//                   width: 36,
//                   height: 36,
//                 },
//               },
//             }}
//           />
//           {/* User name */}
//           {user && (
//             <span className="text-sm font-medium text-gray-700 hidden sm:block">
//               {user.firstName || "User"}
//             </span>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { Sparkles } from "lucide-react";
import ModeToggle from "@/components/ui/ThemeToggle";
import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Navbar() {
  const { theme } = useTheme();
  const { user } = useUser();

  return (
    <nav
      className="
      sticky top-0 z-50 w-full 
      border-b border-black/5 dark:border-white/10
      bg-white/70 dark:bg-[#0b1220]/80
      backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-6">

        {/* 🔥 Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="
            flex h-10 w-10 items-center justify-center rounded-xl 
            bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 
            text-white shadow-md
            "
          >
            <Sparkles className="h-5 w-5" />
          </div>

          <span className="text-lg font-semibold tracking-tight 
            text-gray-900 dark:text-white">
            Smart Notes
          </span>
        </Link>

        {/* 🔥 Right Section */}
        <div className="flex items-center gap-4">

          {/* User name */}
          {user && (
            <span className="text-sm font-medium 
              text-gray-700 dark:text-gray-300 hidden sm:block">
              {user.firstName || "User"}
            </span>
          )}

          <ModeToggle />

          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 36,
                  height: 36,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
}