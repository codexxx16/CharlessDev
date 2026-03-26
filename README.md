# CharlessDev

> Personal portfolio, blog, and dashboard of Charless Netumbare — Full Stack Developer & AI Engineer from Masvingo, Zimbabwe.

**Live:** [charlessdev.vercel.app](https://charlessdev.vercel.app)

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org/) 15 (App Router) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Database | [Supabase](https://supabase.com) (PostgreSQL) |
| Content | [MDX](https://mdxjs.com/) via Content Collections |
| API | [oRPC](https://orpc.unnoq.com/) |
| Deployment | [Vercel](https://vercel.com) |
| Analytics | [Umami](https://github.com/umami-software/umami) |

## Features

- **Blog** — MDX-powered blog with syntax highlighting (Shiki), reading time, views, and likes
- **Projects** — Showcase of production projects with tech stack details
- **Dashboard** — Live stats including GitHub activity, coding hours, and content metrics
- **Guestbook** — Anonymous visitor messages stored in Supabase
- **Uses** — Hardware and software setup
- **Globe widget** — Interactive 3D globe centered on Zimbabwe
- **Dark/Light mode** — System-aware theme switching
- **Command palette** — `Cmd/Ctrl + K` for quick navigation

## Supabase Setup

Create the following tables in your Supabase project:

```sql
-- Blog views
create table blog_views (
  slug text primary key,
  count integer not null default 0
);

-- Blog likes
create table blog_likes (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  user_identifier text not null,
  created_at timestamptz default now(),
  unique(slug, user_identifier)
);

-- Guestbook messages
create table guestbook_messages (
  id uuid primary key default gen_random_uuid(),
  body text not null,
  user_id text not null default 'anonymous',
  user_name text not null default 'Anonymous',
  user_image text,
  created_at timestamptz default now()
);
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/codexxx16/CharlessDev.git
cd CharlessDev

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials

# Run development server
bun dev
```

## Environment Variables

See [`.env.example`](.env.example) for all required and optional variables.

## Credits

This site is built on a fork of [nelsonlai.dev](https://github.com/nelsonlaidev/nelsonlai.dev) by Nelson Lai. Significant modifications include:

- Full identity replacement (Charless Netumbare / CharlessDev)
- Supabase backend replacing Drizzle + Better Auth + Redis
- English-only i18n (removed multi-language support)
- New blog posts, projects, and personal content
- Globe coordinates updated to Zimbabwe (Harare: -17.8252, 31.0335)
- Removed Docker, admin panel, and OAuth authentication

## License

MIT
