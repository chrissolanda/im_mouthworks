# Supabase Setup & Configuration Guide

## ✅ Prerequisites
1. Create a Supabase account at https://supabase.com
2. Create a new project
3. Get your API credentials from Project Settings → API

## 🔧 Step 1: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your Supabase credentials in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## 📊 Step 2: Create Database Tables

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the entire contents of `scripts/01-create-schema.sql`
5. Click **Run**

This will create all necessary tables with proper indexes and RLS policies.

## 🔐 Step 3: Disable or Configure RLS (Row Level Security)

For development, you can temporarily disable RLS to test:

1. Go to **Authentication → RLS**
2. For each table (patients, appointments, payments, etc.):
   - Click the table
   - Toggle **RLS disabled** (for development only)

**For production**: Keep RLS enabled and configure proper policies in `scripts/01-create-schema.sql`

## 🧪 Step 4: Test the Connection

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Try adding a patient via HR Dashboard → Patients → Add Patient

3. Check Supabase dashboard → **Table Editor** to verify data was saved

## 📝 Features Implemented

✅ **Patient Management**
- Create new patients
- View patient list
- Delete patients
- Search patients
- All data saved to Supabase

✅ **Appointments** (Coming soon with full integration)

✅ **Payments** (Coming soon with full integration)

✅ **Inventory** (Coming soon with full integration)

## 🐛 Troubleshooting

### "Failed to create patient" Error
- **Check**: Do the Supabase tables exist? (Run `scripts/01-create-schema.sql`)
- **Check**: Is RLS enabled and blocking access? (Disable for development)
- **Check**: Are `.env.local` variables set correctly?

### "Database service can only be used in client-side code"
- This is expected if you try to use db-service in server components
- Move database calls to client components or API routes

### No data appears after adding patient
- Check browser console for errors
- Check Supabase **Table Editor** to see if data was inserted
- Verify RLS policies aren't blocking SELECT queries

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
