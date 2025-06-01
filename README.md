## 📘 CodeVault: Code Snippet Vault

- 🚧 Project is under development

## Overview

CodeVault is a full-stack application, allowing users to store, search, and manage code snippets. It is designed to scale beyond basic CRUD functionality, with planned AI-powered tagging and search.

## Tech Stack

🔹 Frontend
- Next.js with App Router and TypeScript
- Tailwind CSS for styling
- Dark mode via CSS variables

🔹 Backend
- FastAPI (Python)
- Modular route structure
- Environment variable support with python-dotenv

🔹 Database
- PostgreSQL
- SQLAlchemy ORM
- .env securely stores database credentials

🔹 Dev Tools
- GitHub Desktop for version control
- VS Code as primary editor

## Folder Structure

### Root Directory: `codevault/`
```
codevault/
├── backend/            # FastAPI backend
├── frontend/           # Next.js frontend (Tailwind + TypeScript)
├── .gitignore          # Git exclusions (includes .env, node_modules, venv)
└── README.md           # Project overview and instructions
```

### `backend/`
```
backend/
├── __pycache__/            # Python bytecode cache (Git-ignored)
├── routes/
│   └── snippets.py         # API route for GET /snippets
├── venv/                   # Python virtual environment (Git-ignored)
├── .env                    # 🔐 DB credentials (Git-ignored)
├── db.py                   # SQLAlchemy engine + session maker
├── init_db.py              # Initializes DB schema
├── main.py                 # FastAPI app instance and router config
├── models.py               # Snippet model
└── SQLData.sql             # (Optional) SQL backup or script
```

### `frontend/`
```
frontend/
├── .next/                  # Next.js build output (Git-ignored)
├── node_modules/           # Node dependencies (Git-ignored)
├── public/                 # Static assets like favicon.ico
├── src/
│   ├── app/
│   │   ├── favicon.ico     # Site icon
│   │   ├── globals.css     # Tailwind base + dark mode theme
│   │   ├── layout.tsx      # App layout and global CSS loader
│   │   └── page.tsx        # Home page with Tailwind UI test
│   └── components/         # UI components (to be developed)
├── .gitignore              # Ignores build, node_modules, etc.
├── eslint.config.js        # ESLint config
├── next.config.ts          # Next.js project config
├── next-env.d.ts           # TypeScript environment support (Git-ignored)
├── package.json            # Node dependencies + scripts
├── package-lock.json       # Locked versions of npm packages
├── postcss.config.mjs      # PostCSS plugin loader
├── README.md               # (Optional frontend-specific readme)
├── tailwind.config.ts      # Tailwind content + custom theme config
└── tsconfig.json           # TypeScript configuration
```
## Setup Instructions (Local Dev)

- 🔧 Backend
```
cd backend
python -m venv venv
source venv/bin/activate # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload
```
```
- 🔧 Frontend
cd frontend
npm install
npm run dev
```

## 📌 Status

- ✅ Project scaffolded
- ✅ FastAPI connected to PostgreSQL
- ✅ Tailwind + Next.js functional
- ✅ `.env` loaded with password-encoded DB URL
- ⏳ Front <-> Backend integration coming soon


This structure reflects a clean full stack setup with proper seperation of backend, frontend, and configuration layers.
