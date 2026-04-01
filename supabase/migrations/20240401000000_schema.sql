-- Run this entire script in your Supabase SQL Editor to create tables and seed mock data

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Units Table
CREATE TABLE public.units (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  numeric_id int UNIQUE,
  size text NOT NULL,
  price numeric NOT NULL,
  status text NOT NULL,
  type text NOT NULL,
  floor text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Units
INSERT INTO public.units (numeric_id, size, price, status, type, floor) VALUES
  (1, '5x5', 50, 'Available', 'Climate Controlled', '1st'),
  (2, '5x10', 85, 'Available', 'Standard', '1st'),
  (3, '10x10', 140, 'Occupied', 'Climate Controlled', '2nd'),
  (4, '10x15', 180, 'Available', 'Standard', '1st'),
  (5, '10x20', 220, 'Available', 'Drive-up', '1st'),
  (6, '5x5', 45, 'Maintenance', 'Standard', '2nd');

-- 2. Auctions Table
CREATE TABLE public.auctions (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  numeric_id int UNIQUE,
  unit_number text NOT NULL,
  size text NOT NULL,
  current_bid numeric NOT NULL,
  ends_in text NOT NULL,
  image text NOT NULL,
  description text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Auctions
INSERT INTO public.auctions (numeric_id, unit_number, size, current_bid, ends_in, image, description) VALUES
  (101, 'B-204', '10x10', 150, '2h 15m', 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80', 'Abandoned unit containing furniture, boxes, and electronics.'),
  (102, 'A-105', '5x10', 80, '45m', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', 'Small unit with tools and garden equipment.'),
  (103, 'C-312', '10x20', 450, '1d 4h', 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', 'Large unit packed with office supplies and furniture.');

-- 3. Delinquent Accounts Table
CREATE TABLE public.delinquent_accounts (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  numeric_id int UNIQUE,
  name text NOT NULL,
  unit text NOT NULL,
  amount_due numeric NOT NULL,
  days_overdue int NOT NULL,
  status text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Delinquent Accounts
INSERT INTO public.delinquent_accounts (numeric_id, name, unit, amount_due, days_overdue, status) VALUES
  (1, 'John Doe', 'A-101', 450, 45, 'Pending Auction'),
  (2, 'Jane Smith', 'B-205', 120, 15, 'Late'),
  (3, 'Bob Johnson', 'C-304', 890, 90, 'Auction Scheduled');

-- 4. Payments Table (for recording transactions)
CREATE TABLE public.payments (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  unit_number text NOT NULL,
  amount numeric NOT NULL,
  status text DEFAULT 'completed' NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Optional: To test pulling without RLS blocking you right away, allow public read/write.
-- WARNING: In a production app, do not disable RLS. Create appropriate policies.
ALTER TABLE public.units DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.auctions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.delinquent_accounts DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments DISABLE ROW LEVEL SECURITY;
