// import {SignUp } from "@clerk/nextjs"

// export default function Page(){
//     return <main className="flex h-screen items-center justify-center p-3"> 
//      <SignUp/>
//     </main>
// }

"use client";

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden
      bg-[radial-gradient(circle_at_20%_30%,#fde68a_0%,transparent_40%),radial-gradient(circle_at_80%_20%,#f9a8d4_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#c4b5fd_0%,transparent_40%),linear-gradient(to_br,#ffffff,#fff7ed,#faf5ff)]"
    >
      <SignUp
        appearance={{
          elements: {
            card: "bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8",

            headerTitle: "text-3xl font-bold text-gray-900",
            headerSubtitle: "text-gray-600",

            formFieldLabel: "text-gray-700",
            formFieldInput:
              "bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400",

            formButtonPrimary:
              "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl",

            footerActionText: "text-gray-600",
            footerActionLink: "text-orange-500 font-medium hover:underline",

            dividerText: "text-gray-400",
          },
        }}
      />
    </div>
  );
}