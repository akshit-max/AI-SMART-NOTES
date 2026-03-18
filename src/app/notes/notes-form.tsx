"use client";

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NotesValues,
  NotesFormValues,
  notesFormSchema,
} from "@/lib/validation/notes";
import { NoteItem } from "./note-item";

export function NotesForm({
  notesData,
  setNotesData,
}: {
  notesData: NotesValues;
  setNotesData: (v: NotesValues) => void;
}) {
  function handleDelete(id: string) {
    setNotesData({
      notes: notesData.notes.filter((n) => n.id !== id),
    });
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notesData.notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}