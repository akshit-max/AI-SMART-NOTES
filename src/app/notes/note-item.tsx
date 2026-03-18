"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NoteValues } from "@/lib/validation/notes";

export function NoteItem({
  note,
  onDelete,
}: {
  note: NoteValues;
  onDelete: (id: string) => void;
}) {
  async function deleteNote() {
    if (!note.id) return;

    await fetch(`/api/notes/${note.id}`, {
      method: "DELETE",
    });

    onDelete(note.id); // ✅ update UI immediately
  }

  return (
    <div className="rounded-lg border p-4 space-y-2">
      <h3 className="font-semibold">{note.title}</h3>
      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
        {note.content}
      </p>

      <Button variant="destructive" size="sm" onClick={deleteNote}>
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </div>
  );
}
