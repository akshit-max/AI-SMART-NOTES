import { z } from "zod";

export const commonString = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""));

/* ---------- FORM ---------- */

export const noteFormSchema = z.object({
  title: commonString,
  content: commonString,
});

export type NoteFormValues = z.infer<typeof noteFormSchema>;

export const notesFormSchema = z.object({
  notes: z.array(noteFormSchema),
});

export type NotesFormValues = z.infer<typeof notesFormSchema>;

/* ---------- DATABASE ---------- */

export const noteSchema = noteFormSchema.extend({
  id: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type NoteValues = z.infer<typeof noteSchema>;

export const notesSchema = z.object({
  notes: z.array(noteSchema),
});

export type NotesValues = z.infer<typeof notesSchema>;
