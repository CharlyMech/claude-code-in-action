# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code Style

Comments: only for genuinely complex logic. Omit elsewhere.

## Commands

```bash
npm run dev          # Dev server (Turbopack)
npm run build        # Production build
npm run lint         # ESLint
npm run test         # Vitest (watch mode)
npm run setup        # First-time setup: install + Prisma generate + migrate
npm run db:reset     # Reset SQLite database
```

Run single test file: `npx vitest src/components/chat/__tests__/ChatInterface.test.tsx`

## Architecture

**UIGen** — AI-powered React component generator with live preview. Users describe components in chat; Claude generates/edits code visible in real-time.

### Request flow

1. User message → `src/app/api/chat/route.ts` (streaming endpoint)
2. Route calls Claude via Vercel AI SDK with two tools: `str_replace_editor` and `file_manager`
3. Tool calls mutate `VirtualFileSystem` (in-memory, no disk writes)
4. Updated file system serialized → stored in Prisma `Project.data` (JSON string)
5. Frontend `FileSystemContext` reflects changes → `PreviewFrame` re-renders iframe

### Virtual File System (`src/lib/file-system.ts`)

Core data structure. Holds all generated files in memory. Serializable for DB storage. AI tools operate on this — never on the real filesystem.

### AI tools (`src/lib/tools/`)

- `str-replace.ts` — text replacement within existing files (like `str_replace_editor`)
- `file-manager.ts` — create/rename/delete files

System prompt in `src/lib/prompts/generation.tsx` defines tool usage rules and component conventions.

### State management

Two React contexts (no Redux/Zustand):
- `src/lib/contexts/file-system-context.tsx` — file tree, active file, VirtualFileSystem instance
- `src/lib/contexts/chat-context.tsx` — message history, streaming state, calls `/api/chat`

### Auth

JWT sessions via `src/lib/auth.ts` (Jose library). Passwords hashed with bcrypt. Anonymous users tracked via `src/lib/anon-work-tracker.ts` — work preserved on sign-up. Middleware at `src/middleware.ts` guards `/[projectId]` routes.

### Preview

`src/components/preview/PreviewFrame.tsx` renders an iframe. JSX transformed client-side via Babel Standalone (`src/lib/transform/jsx-transformer.ts`) — no server round-trip for preview.

### Database

SQLite via Prisma. Schema defined in `prisma/schema.prisma` — reference it for data structure. Two models: `User` and `Project`. `Project.data` stores serialized `VirtualFileSystem`. `Project.messages` stores chat history as JSON string.

## Environment

`.env` needs `ANTHROPIC_API_KEY`. If absent, app uses mock provider (no real generation).

## Tech stack

Next.js 15 App Router · React 19 · TypeScript strict · Tailwind v4 · shadcn/ui (new-york) · Monaco Editor · Vercel AI SDK · Prisma/SQLite · Vitest/jsdom

Path alias: `@/*` → `src/*`
