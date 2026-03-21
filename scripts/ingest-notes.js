import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { QdrantVectorStore } from "@langchain/qdrant";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const prisma = new PrismaClient();

async function ingestNotes() {
  console.log("🔄 Fetching notes from Prisma...");

  // 🔒 LIMIT 1: max notes
  // const notes = await prisma.note.findMany({
  //   take: 50, // 🔒 FREE TIER SAFETY
  //   select: {
  //     id: true,
  //     title: true,
  //     content: true,
  //     userId: true,
  //   },
  // });

  const notes = await prisma.note.findMany({
  where: {
    isEmbedded: false,
  },
  take: 50,
});


  if (!notes.length) {
    console.log("⚠️ No notes found");
    return;
  }

  // 🔒 Embeddings (cheap + fast)
  const embeddings = new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HF_API_KEY,
    // apiKey: process.env.HF_API_KEY!,
    model: "sentence-transformers/all-MiniLM-L6-v2",
  });

  // 🔒 LIMIT 2: chunking
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 250, // 🔒 small
    chunkOverlap: 40, // 🔒 minimal
  });

  const documents = [];

  for (const note of notes) {
    const text = `
This is a personal note created by the user.

Note Title:
${note.title}

Note Content:
${note.content}
`;

    const chunks = await splitter.createDocuments([text]);

    // 🔒 LIMIT 3: max chunks per note
    const limitedChunks = chunks.slice(0, 5);

    for (const chunk of limitedChunks) {
      documents.push({
        pageContent: chunk.pageContent,
        metadata: {
          // noteId: note.id,
          // userId: note.userId,
          noteId: note.id,
          userId: note.userId,
          title: note.title,
          type: "note",
        },
      });
    }
  }

  console.log(`📦 Embedding ${documents.length} chunks`);

  // await QdrantVectorStore.fromDocuments(documents, embeddings, {
  //   url: process.env.QDRANT_URL!,
  //   apiKey: process.env.QDRANT_API_KEY!,
  //   collectionName: "notes-rag",
  // });

  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    embeddings,
    {
      url: process.env.QDRANT_URL,
      apiKey: process.env.QDRANT_API_KEY,
      // url: process.env.QDRANT_URL!,
      // apiKey: process.env.QDRANT_API_KEY!,
      collectionName: "notes-rag",
    },
  );

  

  await vectorStore.addDocuments(documents);







  await prisma.note.updateMany({
  where: {
    id: { in: notes.map(n => n.id) },
  },
  data: {
    isEmbedded: true,
  },
});



  console.log("✅ Prisma notes embedded into Qdrant (SAFE MODE)");
}

ingestNotes()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
