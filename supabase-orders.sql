create table public.orders (
  id uuid primary key default gen_random_uuid(),
  product_id text not null,
  product_name text not null,
  quantity integer not null check (quantity between 1 and 3),
  unit_price_idr integer not null check (unit_price_idr > 0),
  total_price_idr integer not null check (total_price_idr > 0),
  customer_name text not null,
  email text not null,
  phone text not null,
  fulfillment text not null check (fulfillment in ('delivery', 'pickup')),
  address text,
  notes text,
  status text not null default 'new' check (status in ('new', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.orders enable row level security;

create index orders_created_at_idx on public.orders (created_at desc);
