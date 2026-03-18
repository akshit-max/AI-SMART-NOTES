"use client";

import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { NoteValues } from "@/lib/validation/notes";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function NotesAssistant({ notes }: { notes: NoteValues[] }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!input.trim()) return;

    setLoading(true);
    setMessages((m) => [...m, { role: "user", content: input }]);

    const res = await fetch("/api/ai/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: input,
        notes,
      }),
    });

    const data = await res.json();

    setMessages((m) => [
      ...m,
      { role: "assistant", content: data.answer },
    ]);

    setInput("");
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 rounded-xl border bg-background shadow-lg">
      <div className="flex items-center gap-2 p-3 border-b">
        <Bot className="h-5 w-5" />
        <span className="font-semibold">Notes AI</span>
      </div>

      <div className="p-3 space-y-2 max-h-64 overflow-auto">
        {messages.map((m, i) => (
          <p
            key={i}
            className={`text-sm ${
              m.role === "assistant" ? "text-muted-foreground" : "font-medium"
            }`}
          >
            {m.content}
          </p>
        ))}

        {loading && <p className="text-sm italic">Thinking…</p>}
      </div>

      <div className="flex gap-2 p-3 border-t">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your notes…"
          onKeyDown={(e) => e.key === "Enter" && askAI()}
        />
        <Button onClick={askAI} disabled={loading}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
