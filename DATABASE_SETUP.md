# Mouthworks Dental Clinic - Database Setup Guide

## Step 1: Create Tables in Supabase

1. Go to your Supabase project: https://app.supabase.com
2. Navigate to the SQL Editor
3. Create a new query and copy-paste the entire content from `scripts/01-create-schema.sql`
4. Click "Run" to execute all table creation scripts

## Step 2: Enable Authentication

1. In Supabase, go to Authentication → Providers
2. Enable Email authentication
3. Configure your email settings

## Step 3: Create Demo Users (Optional)

Run the following SQL in your Supabase SQL editor:

\`\`\`sql
-- Insert demo users (you'll need to use actual auth.users)
INSERT INTO auth_users (email, password_hash, name, role) VALUES
('patient@example.com', '$2a$10$...', 'John Patient', 'patient'),
('dentist@example.com', '$2a$10$...', 'Dr. Sarah Smith', 'dentist'),
('hr@example.com', '$2a$10$...', 'Admin HR', 'hr');
\`\`\`

## Step 4: Start Using the App

All data is now managed through:
- **Patient Portal**: Patients can book appointments and view their records
- **HR Dashboard**: HR staff can add patients, schedule appointments, manage payments
- **Dentist Dashboard**: Dentists can accept/reject appointments and record treatments

No manual data entry is needed - everything is added through the UI and synced to Supabase.
