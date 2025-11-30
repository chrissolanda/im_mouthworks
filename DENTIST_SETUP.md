# 🦷 How to Add Dentists to Supabase

## Option 1: Use the SQL Script (Easiest)

1. Go to your Supabase project: https://app.supabase.com
2. Click **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy and paste the entire contents from `scripts/02-seed-dentists.sql`
5. Click **Run** (or press Ctrl+Enter)

This will add 5 dentists to your database:
- Dr. Sarah Smith (General Dentistry)
- Dr. John Doe (Orthodontics)
- Dr. Emily Johnson (Periodontics)
- Dr. Michael Chen (Prosthodontics)
- Dr. Lisa Anderson (Endodontics)

## Option 2: Add Manually

1. Go to Supabase → **Table Editor** (left sidebar)
2. Click the **dentists** table
3. Click **Insert Row**
4. Fill in:
   - name: (dentist name)
   - email: (dentist email)
   - phone: (optional)
   - specialization: (optional)
5. Click **Save**

## After Adding Dentists

Once you've added dentists to the database:

1. Go back to your app at http://localhost:3000
2. Navigate to **HR → Appointments**
3. Click **Schedule Appointment**
4. The **Dentist (Optional)** dropdown will now show your real dentists from the database
5. You can schedule appointments and assign them to real dentists (or leave as Unassigned)

Done! ✅ No more hardcoded dentist names!
