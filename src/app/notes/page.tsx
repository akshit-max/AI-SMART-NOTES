// "use client";

// import { useEffect, useState } from "react";
// import { NotesHeader } from "./notes-header";
// import { NotesForm } from "./notes-form";
// import { NotesAssistant } from "./notes-assistant";
// import { NotesValues } from "@/lib/validation/notes";
// import { Navbar } from "../navbar/page";

// export default function NotesPage() {
//   const [notesData, setNotesData] = useState<NotesValues>({
//     notes: [],
//   });

//   useEffect(() => {
//     async function loadNotes() {
//       const res = await fetch("/api/notes");
//       const data = await res.json();

//       setNotesData({ notes: data });
//     }

//     loadNotes();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <main className="mx-auto max-w-7xl p-6 space-y-6">
//         <NotesHeader />

//         <NotesForm notesData={notesData} setNotesData={setNotesData} />

//         <NotesAssistant notes={notesData.notes} />
//       </main>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { NotesHeader } from "./notes-header";
import { NotesForm } from "./notes-form";
import { NotesAssistant } from "./notes-assistant";
import { NotesValues } from "@/lib/validation/notes";
import { Navbar } from "../navbar/page";

export default function NotesPage() {
  const [notesData, setNotesData] = useState<NotesValues>({
    notes: [],
  });

  useEffect(() => {
    async function loadNotes() {
      const res = await fetch("/api/notes");
      const data = await res.json();
      setNotesData({ notes: data });
    }
    loadNotes();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* 🔥 PROPER GRADIENT (matches your screenshot) */}
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_20%_30%,#fde68a_0%,transparent_40%),radial-gradient(circle_at_80%_20%,#f9a8d4_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#c4b5fd_0%,transparent_40%),linear-gradient(to_br,#ffffff,#fff7ed,#faf5ff)]"
      />

      <Navbar />

      {/* 🔥 Layout spacing fix */}
      <main className="mx-auto max-w-7xl px-6 py-12 space-y-10">

        {/* Header */}
        <NotesHeader count={notesData.notes.length} />

        {/* Notes Grid */}
        <div className="mt-4">
          <NotesForm
            notesData={notesData}
            setNotesData={setNotesData}
          />
        </div>

      </main>

      {/* 🔥 Assistant floating properly */}
      <NotesAssistant notes={notesData.notes} />
    </div>
  );
}