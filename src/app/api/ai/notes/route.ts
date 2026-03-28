import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { query } = await req.json();

  if (!query || typeof query !== "string") {
    return NextResponse.json(
      { error: "Query is required" },
      { status: 400 }
    );
  }

  // 🔁 Forward ONLY the question to RAG
  // const ragResponse = await fetch(process.env.RAG_API_URL!, {
  const ragResponse = await fetch(`${process.env.RAG_API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: query, // ✅ MUST be "question"
      userId,
    }),
  });

  if (!ragResponse.ok) {
    return NextResponse.json(
      { error: "RAG backend failed" },
      { status: 500 }
    );
  }

  const data = await ragResponse.json();

  return NextResponse.json({
    answer: data.answer,
    source: data.source,
  });
}
