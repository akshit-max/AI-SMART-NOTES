"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateNoteDialog } from "./create-note-dialog";

export function NotesHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">My Notes</h1>

      <CreateNoteDialog>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="mr-2 h-4 w-4" />
          Create Note
        </Button>
      </CreateNoteDialog>
    </div>
  );
}
