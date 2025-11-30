# 🦷 Dentist Account Setup Guide

## Step 1: Create Dentist Auth Users in Supabase

1. Go to your Supabase project: https://app.supabase.com
2. Click **Authentication** (left sidebar)
3. Click **Users**
4. Click **Add user** and create each dentist account:

### Dentist Accounts to Create:
```
Email: sarah.smith@dental.com
Password: dentist123
Specialization: General Dentistry

Email: john.doe@dental.com
Password: dentist123
Specialization: Orthodontics

Email: emily.johnson@dental.com
Password: dentist123
Specialization: Periodontics

Email: michael.chen@dental.com
Password: dentist123
Specialization: Prosthodontics

Email: lisa.anderson@dental.com
Password: dentist123
Specialization: Endodontics
```

## Step 2: Get User IDs and Link to Dentist Records

After creating each user in Supabase Auth:

1. Go to **Authentication → Users**
2. Click on each user to view their details
3. Copy the **User ID** (UUID format)
4. Go to **SQL Editor**
5. Run these UPDATE statements (replace with actual user IDs from Supabase):

```sql
UPDATE dentists SET user_id = '<SARAH_USER_ID>' WHERE email = 'sarah.smith@dental.com';
UPDATE dentists SET user_id = '<JOHN_USER_ID>' WHERE email = 'john.doe@dental.com';
UPDATE dentists SET user_id = '<EMILY_USER_ID>' WHERE email = 'emily.johnson@dental.com';
UPDATE dentists SET user_id = '<MICHAEL_USER_ID>' WHERE email = 'michael.chen@dental.com';
UPDATE dentists SET user_id = '<LISA_USER_ID>' WHERE email = 'lisa.anderson@dental.com';
```

## Step 3: Test Dentist Login

1. Go to http://localhost:3000
2. You should see all 5 dentist emails in the demo credentials list
3. Click on any dentist email (or manually enter email + password: dentist123)
4. Login and navigate to **My Schedule**
5. You should see appointments assigned to that dentist

## Features Enabled for Dentists:

✅ **Dashboard** - View stats and upcoming appointments
✅ **My Schedule** - View, approve, reject, and complete appointments
✅ **Treatments** - View and record treatments for completed appointments
✅ **Reports** - View performance metrics and appointment history

## How It Works:

1. **HR Creates Appointment** → Selects patient + dentist
2. **Appointment Status** → "pending" (needs dentist approval)
3. **Dentist Login** → Sees appointment in "My Schedule"
4. **Dentist Approves** → Appointment → "confirmed"
5. **Dentist Completes** → Appointment → "completed"
6. **Everything Syncs** → Changes reflect immediately across all users

## Data Sync:

All changes made by dentists are automatically saved to Supabase:
- Approving appointments → Updates database in real-time
- Rejecting appointments → Updates database with rejection reason
- Completing appointments → Marks appointment as completed
- Recording treatments → Saves treatment records linked to appointments

## Default Demo Password:

All dentist accounts default to: **dentist123**

(You can change passwords in Supabase Auth settings)
