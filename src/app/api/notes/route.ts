// app/api/notes/route.ts (GET + POST)

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json([], { status: 401 });

  const notes = await prisma.note.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(notes);
}



export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({}, { status: 401 });

  const data = await req.json();

  const note = await prisma.note.create({
    data: {
      userId,
      title: data.title,
      content: data.content,
    },
  });





  return NextResponse.json(note);
}
