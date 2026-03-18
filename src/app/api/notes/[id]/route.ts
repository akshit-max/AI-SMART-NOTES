import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


/* ======================= PATCH ======================= */

export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({}, { status: 401 });
  }

  const { id } = await ctx.params;
  const data = await req.json();

  // 🔒 Verify ownership
  const note = await prisma.note.findFirst({
    where: { id, userId },
  });

  if (!note) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }


  // ✏️ update note
  const updated = await prisma.note.update({
    where: { id },
    data: {
      title: data.title,
      content: data.content,
    },
  });



  return NextResponse.json(updated);
}

/* ======================= DELETE ======================= */

export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({}, { status: 401 });
  }

  const { id } = await ctx.params;

  // 🔒 Verify ownership
  const note = await prisma.note.findFirst({
    where: { id, userId },
  });

  if (!note) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }



  // 🗑 delete DB record
  await prisma.note.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
