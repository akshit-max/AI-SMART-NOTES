// "use client";

// import { useState } from "react";
// import { Bot, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import type { NoteValues } from "@/lib/validation/notes";

// type Message = {
//   role: "user" | "assistant";
//   content: string;
// };

// export function NotesAssistant({ notes }: { notes: NoteValues[] }) {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function askAI() {
//     if (!input.trim()) return;

//     setLoading(true);
//     setMessages((m) => [...m, { role: "user", content: input }]);

//     const res = await fetch("/api/ai/notes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         query: input,
//         notes,
//       }),
//     });

//     const data = await res.json();

//     setMessages((m) => [
//       ...m,
//       { role: "assistant", content: data.answer },
//     ]);

//     setInput("");
//     setLoading(false);
//   }

//   return (
//     <div className="fixed bottom-6 right-6 w-80 rounded-xl border bg-background shadow-lg">
//       <div className="flex items-center gap-2 p-3 border-b">
//         <Bot className="h-5 w-5" />
//         <span className="font-semibold">Notes AI</span>
//       </div>

//       <div className="p-3 space-y-2 max-h-64 overflow-auto">
//         {messages.map((m, i) => (
//           <p
//             key={i}
//             className={`text-sm ${
//               m.role === "assistant" ? "text-muted-foreground" : "font-medium"
//             }`}
//           >
//             {m.content}
//           </p>
//         ))}

//         {loading && <p className="text-sm italic">Thinking…</p>}
//       </div>

//       <div className="flex gap-2 p-3 border-t">
//         <Input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask your notes…"
//           onKeyDown={(e) => e.key === "Enter" && askAI()}
//         />
//         <Button onClick={askAI} disabled={loading}>
//           <Send className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import type { NoteValues } from "@/lib/validation/notes";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function NotesAssistant({ notes }: { notes: NoteValues[] }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI assistant. Ask me anything about your notes.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function askAI() {
    if (!input.trim()) return;

    setLoading(true);

    const userMsg = input;
    setMessages((m) => [...m, { role: "user", content: userMsg }]);
    setInput("");

    const res = await fetch("/api/ai/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: userMsg,
        notes,
      }),
    });

    const data = await res.json();

    setMessages((m) => [
      ...m,
      { role: "assistant", content: data.answer },
    ]);

    setLoading(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full
        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
        text-white shadow-lg flex items-center justify-center
        hover:scale-105 transition"
      >
        <Sparkles className="w-5 h-5" />
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 w-80 rounded-2xl
          bg-white/90 dark:bg-[#0f172a]/95
          backdrop-blur-xl
          border border-black/5 dark:border-white/10
          shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  AI Assistant
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Always here to help
                </p>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Thinking...
              </p>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-black/5 dark:border-white/10 flex gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-lg
              bg-white dark:bg-white/5
              border border-gray-300 dark:border-white/10
              text-sm outline-none
              text-gray-900 dark:text-white
              focus:ring-2 focus:ring-orange-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === "Enter" && askAI()}
            />

            <button
              onClick={askAI}
              disabled={loading}
              className="p-2 rounded-lg
              bg-gradient-to-r from-orange-500 to-purple-600
              text-white"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
