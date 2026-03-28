"use client";

import { useState } from "react";
import { NoteItem } from "./note-item";
import { EditNoteDialog } from "./EditNoteDialog";
import { NotesValues, NoteValues } from "@/lib/validation/notes";

export function NotesForm({
  notesData,
  setNotesData,
}: {
  notesData: NotesValues;
  setNotesData: (v: NotesValues) => void;
}) {
  const [selectedNote, setSelectedNote] = useState<NoteValues | null>(null);

  // ✅ DELETE
  function handleDelete(id: string) {
    setNotesData({
      notes: notesData.notes.filter((n) => n.id !== id),
    });
  }

  // ✅ UPDATE
  function handleUpdate(updatedNote: NoteValues) {
    setNotesData({
      notes: notesData.notes.map((n) =>
        n.id === updatedNote.id ? updatedNote : n
      ),
    });
  }

  return (
    <>
      {/* 🔥 Grid (improved spacing like screenshot) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {notesData.notes.length === 0 && (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-500 text-lg">
              No notes yet. Create your first note 🚀
            </p>
          </div>
        )}

        {notesData.notes.map((note: NoteValues) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={handleDelete}
            onUpdate={(note: NoteValues) => setSelectedNote(note)}
          />
        ))}
      </div>

      {/* Edit Dialog */}
      {selectedNote && (
        <EditNoteDialog
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
}