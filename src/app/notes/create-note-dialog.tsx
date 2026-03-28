"use client";

import { useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CreateNoteDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  async function createNote(formData: FormData) {
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
      }),
    });

    setOpen(false);
    location.reload();
  }

  return (
    <>
      {/* Trigger */}
      <div onClick={() => setOpen(true)}>{children}</div>

      <Dialog open={open} onOpenChange={setOpen}>
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
              Create Note
            </DialogTitle>
          </DialogHeader>

          <form action={createNote} className="space-y-5 mt-4">

            {/* Title */}
            <div className="space-y-1">
              <label className="text-sm text-gray-500 dark:text-gray-400">
                Title
              </label>
              <Input
                name="title"
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
                name="content"
                rows={5}
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
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="rounded-xl dark:border-white/10 dark:text-gray-300"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="
                rounded-xl
                bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
                text-white shadow-md hover:shadow-xl
                "
              >
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}