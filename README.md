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

<img width="1919" height="912" alt="Screenshot 2026-04-05 234823" src="https://github.com/user-attachments/assets/35d4ba0d-31c2-4e6c-9d23-208546b37561" />

---

### 🔐 Authentication

<img width="1919" height="908" alt="Screenshot 2026-04-05 234852" src="https://github.com/user-attachments/assets/b924ff95-a150-4e7c-affb-cb4361449229" />

---

### 📊 Dashboard

<img width="1919" height="909" alt="Screenshot 2026-04-05 234926" src="https://github.com/user-attachments/assets/49056fa8-ffd0-4b15-b5f6-39fc5736a29e" />

---

### 🤖 AI Chatbot
<img width="1919" height="914" alt="Screenshot 2026-03-28 213340" src="https://github.com/user-attachments/assets/1e06175a-3b8a-4b1d-9fe2-65f3cd18c087" />

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
