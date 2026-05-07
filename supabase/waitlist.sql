create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text unique not null,
  source text default 'landing',
  created_at timestamp with time zone default now()
);
