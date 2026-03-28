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