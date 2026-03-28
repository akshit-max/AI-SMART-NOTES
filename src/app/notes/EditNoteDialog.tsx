"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NoteValues } from "@/lib/validation/notes";

export function EditNoteDialog({
  note,
  onClose,
  onSave,
}: {
  note: NoteValues;
  onClose: () => void;
  onSave: (note: NoteValues) => void;
}) {
  const [title, setTitle] = useState(note.title || "");
  const [content, setContent] = useState(note.content || "");
  const [loading, setLoading] = useState(false);

  async function updateNote() {
    if (!note.id) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/notes/${note.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error("Failed to update");

      const updated = await res.json();

      onSave(updated);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="
        rounded-2xl p-6
        bg-white/90 dark:bg-[#0f172a]/95
        backdrop-blur-xl
        border border-black/5 dark:border-white/10
        shadow-2xl
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Edit Note
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-4">

          {/* Title */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title..."
              className="
              rounded-xl
              bg-white dark:bg-white/5
              border border-gray-200 dark:border-white/10
              text-gray-900 dark:text-white
              focus:ring-2 focus:ring-orange-400
              "
            />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Content
            </label>
            <Textarea
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note..."
              className="
              rounded-xl
              bg-white dark:bg-white/5
              border border-gray-200 dark:border-white/10
              text-gray-900 dark:text-white
              focus:ring-2 focus:ring-orange-400
              "
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-xl dark:border-white/10 dark:text-gray-300"
            >
              Cancel
            </Button>

            <Button
              onClick={updateNote}
              disabled={loading}
              className="
              rounded-xl
              bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
              text-white shadow-md hover:shadow-xl
              "
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}