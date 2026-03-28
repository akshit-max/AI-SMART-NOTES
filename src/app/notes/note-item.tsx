"use client";

import { Trash2, Pencil } from "lucide-react";
import { NoteValues } from "@/lib/validation/notes";

export function NoteItem({
  note,
  onDelete,
  onUpdate,
}: {
  note: NoteValues;
  onDelete: (id: string) => void;
  onUpdate: (note: NoteValues) => void;
}) {
  async function deleteNote() {
    if (!note.id) return;

    await fetch(`/api/notes/${note.id}`, {
      method: "DELETE",
    });

    onDelete(note.id);
  }

  return (
    <div className="group relative">

      {/* 🔥 Soft gradient (NO blur, NO glow) */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 
        group-hover:opacity-100 
        bg-gradient-to-br 
        from-orange-500/20 via-pink-500/15 to-purple-500/20
        dark:from-orange-500/10 dark:via-pink-500/10 dark:to-purple-500/10
        transition duration-300"
      />

      {/* 🔥 Card */}
      <div
        className="
        relative rounded-2xl p-5 
        bg-white/80 dark:bg-[#0f172a] 
        backdrop-blur-xl 
        border border-white/50 dark:border-white/10
        group-hover:border-pink-400/30 dark:group-hover:border-purple-400/30
        shadow-md hover:shadow-xl
        transition-all duration-300 hover:-translate-y-1
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
            {note.title}
          </h3>

          {/* Actions */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
            <button
              onClick={() => onUpdate(note)}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <Pencil className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            </button>

            <button
              onClick={deleteNote}
              className="p-1.5 rounded-md hover:bg-red-100 dark:hover:bg-red-500/20 transition"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 line-clamp-3 leading-relaxed">
          {note.content}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 text-xs text-gray-400 dark:text-gray-500">
          <span>
            {note.createdAt
              ? new Date(note.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </span>

          <span className="flex items-center gap-1 text-green-500 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Synced
          </span>
        </div>
      </div>
    </div>
  );
}