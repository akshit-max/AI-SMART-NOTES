# 🧠 AI Smart Notes
### RAG-Powered Knowledge Assistant

🌐 **Live Demo:** https://mind-stack-ai.vercel.app/ 

🎥 **Demo Video:** _Add Link_

---

## 📌 Overview

AI Smart Notes is a full-stack AI application that lets users store personal knowledge and query it using natural language.

Built using a **Retrieval-Augmented Generation (RAG)** pipeline, it combines vector search and LLMs to simulate a personal AI memory system.

---


## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](https://github.com/user-attachments/assets/2e904842-90d0-4554-8564-1739ed1f8bef)

### 🔐 Authentication
![Authentication](https://github.com/user-attachments/assets/68aee5e2-bfd6-4f08-bc05-c2711d5a3daf)

### 📊 Dashboard
![Dashboard](https://github.com/user-attachments/assets/ca569529-e34a-4e9e-ae62-27895aa72dfb)

### 🤖 AI Chatbot
![AI Chatbot](https://github.com/user-attachments/assets/ed8b5f1d-c105-4a28-84fb-806d83a23c9a)
---


## 🚀 Features

- 📝 Create, update, delete notes  
- 🧠 AI-powered Q&A on personal notes  
- 🔍 Semantic search using embeddings  
- ⚡ Redis caching for faster responses  
- 🔐 Authentication with Clerk  
- 📦 Vector storage with metadata filtering (Qdrant)  
- 💬 Chat interface for querying notes  
- 🔄 Real-time sync between DB and vector store  

---

## 🧠 Architecture (RAG Flow)

```
User creates note
        ↓
Embeddings (Hugging Face)
        ↓
Stored in Qdrant
        ↓
User query
        ↓
Semantic retrieval
        ↓
Context → LLM (Groq)
        ↓
Final Answer
```

---

## 🔄 Data Flow

```
Client → Next.js API → Backend → Qdrant → LLM → Response
```

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Clerk

### Backend
- Node.js
- Express
- Hugging Face (Embeddings)
- Groq API (LLM)

### Database & Infra
- PostgreSQL (Prisma)
- Qdrant (Vector DB)
- Redis (Caching)

---

## 🤖 Why RAG?

- Prevents hallucination  
- Uses only user data  
- Enables personalized AI  
- Scales efficiently  

---

## ⚙️ Key Decisions

- Vector search over keyword search  
- Metadata filtering (`userId`, `noteId`)  
- Redis caching for performance  
- Strict prompts for accuracy  
- Separate CRUD and AI pipelines  

---

## 🔐 Security

- User-scoped data  
- Server-side validation  
- No API key exposure  
- Metadata-based isolation  

---

## 📈 Scalability

- Stateless backend  
- Redis reduces LLM calls  
- Optimized vector search  
- Modular architecture  

---

## 🧩 Future Improvements

- Streaming responses  
- Multi-note summarization  
- Query rewriting  
- Conversation memory  
- Rate limiting  
- Analytics  

---

## ⚠️ Limitations

- Strict RAG (no extra inference)  
- No conversation memory  
- Limited query understanding  
- Basic UI  

---

## 🧪 Example Queries

- What project am I working on?  
- What are my skills?  
- What is my goal?  

---

## ⚙️ Setup

### 1. Clone

```bash
git clone https://github.com/your-username/ai-smart-notes.git
cd ai-smart-notes
```

### 2. Install

```bash
npm install
```

### 3. Environment Variables

#### Frontend (.env.local)
```
RAG_API_URL=http://localhost:3001
```

#### Backend (.env)
```
HF_API_KEY=
GROQ_API_KEY=
QDRANT_URL=
QDRANT_API_KEY=
REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=
```

### 4. Run Backend

```bash
node server.js
```

### 5. Run Frontend

```bash
npm run dev
```

---

## 🧠 Highlights

- Built complete RAG pipeline  
- Semantic search with filtering  
- Solved Qdrant indexing issues  
- Multi-AI integration (HF + Groq)  
- Production-style architecture  

---

## 🎯 Purpose

- AI system design (RAG)  
- Full-stack engineering  
- Vector database integration  
- Real-world problem solving  

---

## 👨‍💻 Author

**Akshit Bhandula**  
Full-Stack Developer | AI Systems  

🔗 GitHub: https://github.com/akshit-max  
🔗 LinkedIn: https://linkedin.com/in/akshit-bhandula-568772318  
📧 akshitbhandula@gmail.com
