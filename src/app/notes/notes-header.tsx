// "use client";

// import { Plus } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CreateNoteDialog } from "./create-note-dialog";

// export function NotesHeader() {
//   return (
//     <div className="flex items-center justify-between">
//       <h1 className="text-2xl font-semibold">My Notes</h1>

//       <CreateNoteDialog>
//         <Button className="bg-orange-500 hover:bg-orange-600">
//           <Plus className="mr-2 h-4 w-4" />
//           Create Note
//         </Button>
//       </CreateNoteDialog>
//     </div>
//   );
// }
"use client";

import { Plus } from "lucide-react";
import { CreateNoteDialog } from "./create-note-dialog";

export function NotesHeader({ count }: { count: number }) {
  return (
    <div className="flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-4xl md:text-4xl font-bold 
        text-gray-900 dark:text-white tracking-tight">
          My Notes
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2 text-md">
          {count} {count === 1 ? "note" : "notes"}
        </p>
      </div>

      {/* Right Section */}
      <CreateNoteDialog>
        <button
          className="
          flex items-center gap-2 px-6 py-3 rounded-xl
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
          text-white font-semibold

          shadow-md dark:shadow-lg
          hover:scale-105 hover:shadow-xl

          transition-all duration-200
          "
        >
          <Plus className="w-5 h-5" />
          Create Note
        </button>
      </CreateNoteDialog>
    </div>
  );
}