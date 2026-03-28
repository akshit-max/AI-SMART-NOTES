🧠 AI Smart Notes (RAG-Powered Knowledge Assistant)

🌐 Live Demo: (Add your deployed link)
🎥 Demo Video: (Add your demo video link)

A full-stack AI-powered note-taking application that enables users to store personal knowledge and interact with it using natural language queries via a Retrieval-Augmented Generation (RAG) pipeline.

This project focuses on real-world AI system design, combining vector databases, semantic search, and LLMs to simulate a personal AI memory system.

📸 Screenshots

(Add your UI screenshots here — Notes UI, Chat UI, Create Note, etc.)

🚀 Core Features
📝 Create, update, and delete notes
🧠 AI-powered question answering on personal notes
🔍 Semantic search using vector embeddings
⚡ Redis caching for faster responses
🔐 User-specific data isolation (Clerk authentication)
📦 Vector storage with metadata filtering (Qdrant)
💬 Chat interface for querying notes
🧩 Real-time sync between database and vector store
🧠 System Architecture

This application follows a RAG-based architecture:

User creates a note
Note is converted into embeddings (Hugging Face)
Embeddings stored in Qdrant (vector DB)
User asks a question
Relevant notes retrieved via semantic similarity
Context passed to LLM (Groq)
AI generates answer strictly from user data
🔄 Data Flow
User Input → Next.js API → RAG Backend → Qdrant Search → LLM (Groq) → Response
🛠 Tech Stack
Frontend
Next.js (App Router)
TypeScript
Tailwind CSS
Clerk Authentication
Backend
Node.js + Express
Hugging Face (Embeddings)
Groq API (LLM)
Database & Infra
PostgreSQL (Prisma ORM)
Qdrant (Vector Database)
Redis (Caching)
🤖 Why This Architecture?

This project uses RAG instead of direct LLM calls because:

Prevents hallucination (answers only from user data)
Enables personalized AI memory
Scales efficiently with vector search
Separates knowledge storage from reasoning
⚙️ Key Engineering Decisions
Vector embeddings instead of keyword search
Metadata-based filtering (userId, noteId)
Redis caching to reduce LLM calls
Strict prompt design to avoid hallucination
Separate CRUD + AI pipelines
Direct Qdrant client for reliable delete/update operations
🔐 Security & Data Integrity
All notes scoped to authenticated users
Server-side validation for all requests
No API keys exposed to frontend
Payload filtering ensures user isolation
Safe handling of vector metadata
📈 Scalability Considerations
Stateless backend (horizontal scaling ready)
Redis caching reduces repeated AI calls
Vector DB optimized for semantic search
Metadata indexing for fast filtering
Modular architecture (frontend ↔ backend separation)
🧩 Production Improvements (Next Steps)

If scaled further:

Streaming AI responses
Multi-note summarization
Query rewriting for better retrieval
Rate limiting for AI endpoints
Background jobs for heavy processing
Analytics + usage tracking
Multi-user collaboration
⚠️ Current Limitations
Strict RAG (no inference beyond context)
Limited query understanding (no rewriting yet)
No conversation memory (single-turn Q&A)
UI can be further enhanced
🧪 Example Queries
What project am I working on?
What are my skills?
What is my goal?
What is my daily routine?
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/ai-smart-notes.git
cd ai-smart-notes
2️⃣ Install Dependencies
npm install
3️⃣ Environment Variables
Frontend (.env.local)
RAG_API_URL=http://localhost:3001
Backend (.env)
HF_API_KEY=your_huggingface_key
GROQ_API_KEY=your_groq_key
QDRANT_URL=your_qdrant_url
QDRANT_API_KEY=your_qdrant_key
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
4️⃣ Run Backend
node server.js
5️⃣ Run Frontend
npm run dev
🧠 Key Highlights
Built a complete RAG system from scratch
Implemented vector search with metadata filtering
Solved real-world Qdrant indexing & deletion issues
Designed a user-isolated AI knowledge system
Integrated multiple AI services (HF + Groq)
📌 Purpose of This Project

This project demonstrates:

AI system design (RAG architecture)
Full-stack engineering
Vector database integration
Production-level debugging & problem solving

It reflects real-world AI product development, not just API usage.

👨‍💻 Author

Akshit Bhandula
Full-Stack Developer | AI Systems | RAG Enthusiast

🔗 GitHub: https://github.com/akshit-max

🔗 LinkedIn: https://linkedin.com/in/akshit-bhandula-568772318

📧 Email: akshitbhandula@gmail.com
