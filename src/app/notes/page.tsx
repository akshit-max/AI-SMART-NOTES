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
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl p-6 space-y-6">
        <NotesHeader />

        <NotesForm notesData={notesData} setNotesData={setNotesData} />

        <NotesAssistant notes={notesData.notes} />
      </main>
    </>
  );
}
