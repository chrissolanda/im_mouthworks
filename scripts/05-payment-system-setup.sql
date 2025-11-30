-- Payment System Setup - Run This First
-- This file prepares your Supabase database for the new payment system

-- Step 1: Ensure dentist_id column exists in payments table
ALTER TABLE payments 
ADD COLUMN IF NOT EXISTS dentist_id UUID REFERENCES dentists(id) ON DELETE SET NULL;

-- Step 2: Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_payments_dentist_id ON payments(dentist_id);
CREATE INDEX IF NOT EXISTS idx_payments_patient_id ON payments(patient_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(date DESC);

-- Step 3: Verify your patients table has data
-- Run this to see patient IDs for the seed script:
-- SELECT id, name FROM patients;

-- Step 4: After getting patient IDs, update scripts/04-seed-payments.sql
-- Replace all PATIENT_X_ID placeholders with actual UUIDs

-- Step 5: Run scripts/04-seed-payments.sql with the updated patient IDs

-- DENTIST IDs (for reference in seed script):
-- Dr. Sarah Smith: a2b6f9aa-c1db-4126-91ea-e68ce0764cf7
-- Dr. John Doe: 36bbff44-0df3-4926-a241-83e753324ffa
-- Dr. Emily Johnson: 63d250c7-d355-4eaa-b99e-d502b7db5dfb
-- Dr. Michael Chen: eab4dac1-1534-4b6d-80d1-243273ee4773
-- Dr. Lisa Anderson: 8e87c140-0749-4fe1-9713-39b05df2f566

-- Verify setup was successful:
-- SELECT COUNT(*) as payment_count, 
--        COUNT(DISTINCT dentist_id) as dentist_count
-- FROM payments
-- WHERE dentist_id IS NOT NULL;
