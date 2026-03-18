"use client";

import { FileText, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "@/components/ui/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../assets/logo.png";


export function Navbar() {
  const{theme}=useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            AI Smart Notes
          </span>
        </div>


        
        <div className=" items-center gap-3 md:flex">
           <div className="flex items-center gap-3">
          <ModeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
           
          </UserButton>
        </div>
          
        </div>

       
       
      </div>

     
    </nav>
  );
}
