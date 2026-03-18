import "dotenv/config";
import { QdrantClient } from "@qdrant/js-client-rest";

async function testQdrant() {
  const client = new QdrantClient({
    url: process.env.QDRANT_URL!,
    apiKey: process.env.QDRANT_API_KEY!,
  });

  const collections = await client.getCollections();
  console.log("✅ Qdrant connected");
  console.log(collections);
}

testQdrant().catch(console.error);
