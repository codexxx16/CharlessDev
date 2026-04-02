create table blog_views (
  slug text primary key,
  count integer not null default 0
);

create table blog_likes (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  user_identifier text not null,
  created_at timestamptz default now(),
  unique(slug, user_identifier)
);

create table guestbook_messages (
  id uuid primary key default gen_random_uuid(),
  body text not null,
  user_id text not null default 'anonymous',
  user_name text not null default 'Anonymous',
  user_image text,
  created_at timestamptz default now()
);

create table comments (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  author_name text not null,
  content text not null,
  created_at timestamptz default now()
);
