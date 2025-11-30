-- Seed payments data with dentist associations
-- Run this after seeding dentists and patients

-- NOTE: Replace patient_id and dentist_id with actual UUIDs from your database
-- Get patient IDs: SELECT id, name FROM patients;
-- Get dentist IDs: SELECT id, name FROM dentists;

-- Example payments (update IDs to match your actual data):
-- All dentist payments combined into single INSERT statement
INSERT INTO payments (patient_id, dentist_id, amount, method, status, description, date) VALUES
  -- Dr. Sarah Smith payments (General Dentistry)
  ('PATIENT_1_ID', 'a2b6f9aa-c1db-4126-91ea-e68ce0764cf7', 150.00, 'Cash', 'paid', 'Cleaning - Nov 20, 2024', '2024-11-20'),
  ('PATIENT_1_ID', 'a2b6f9aa-c1db-4126-91ea-e68ce0764cf7', 500.00, 'Credit Card', 'paid', 'Root Canal Treatment - Nov 25, 2024', '2024-11-25'),
  ('PATIENT_1_ID', 'a2b6f9aa-c1db-4126-91ea-e68ce0764cf7', 200.00, 'Bank Transfer', 'partial', 'Filling - Dec 1, 2024', '2024-12-01'),
  ('PATIENT_2_ID', 'a2b6f9aa-c1db-4126-91ea-e68ce0764cf7', 100.00, 'Cash', 'paid', 'Consultation - Nov 18, 2024', '2024-11-18'),
  -- Dr. John Doe payments (Orthodontics)
  ('PATIENT_3_ID', '36bbff44-0df3-4926-a241-83e753324ffa', 2000.00, 'Bank Transfer', 'paid', 'Braces Installation - Nov 15, 2024', '2024-11-15'),
  ('PATIENT_3_ID', '36bbff44-0df3-4926-a241-83e753324ffa', 500.00, 'Credit Card', 'paid', 'Braces Adjustment - Nov 29, 2024', '2024-11-29'),
  ('PATIENT_4_ID', '36bbff44-0df3-4926-a241-83e753324ffa', 1500.00, 'Bank Transfer', 'unpaid', 'Orthodontic Treatment Plan - Dec 1, 2024', '2024-12-01'),
  -- Dr. Emily Johnson payments (Periodontics)
  ('PATIENT_5_ID', '63d250c7-d355-4eaa-b99e-d502b7db5dfb', 300.00, 'Cash', 'paid', 'Deep Cleaning - Nov 10, 2024', '2024-11-10'),
  ('PATIENT_5_ID', '63d250c7-d355-4eaa-b99e-d502b7db5dfb', 200.00, 'Credit Card', 'partial', 'Gum Disease Treatment - Nov 24, 2024', '2024-11-24'),
  ('PATIENT_6_ID', '63d250c7-d355-4eaa-b99e-d502b7db5dfb', 250.00, 'Bank Transfer', 'paid', 'Periodontal Checkup - Dec 2, 2024', '2024-12-02'),
  -- Dr. Michael Chen payments (Prosthodontics)
  ('PATIENT_7_ID', 'eab4dac1-1534-4b6d-80d1-243273ee4773', 3000.00, 'Bank Transfer', 'paid', 'Crown Installation - Nov 5, 2024', '2024-11-05'),
  ('PATIENT_7_ID', 'eab4dac1-1534-4b6d-80d1-243273ee4773', 1000.00, 'Credit Card', 'paid', 'Bridge Work - Nov 22, 2024', '2024-11-22'),
  ('PATIENT_8_ID', 'eab4dac1-1534-4b6d-80d1-243273ee4773', 2500.00, 'Bank Transfer', 'unpaid', 'Implant Procedure - Dec 1, 2024', '2024-12-01'),
  -- Dr. Lisa Anderson payments (Endodontics)
  ('PATIENT_9_ID', '8e87c140-0749-4fe1-9713-39b05df2f566', 600.00, 'Cash', 'paid', 'Root Canal Therapy - Nov 8, 2024', '2024-11-08'),
  ('PATIENT_9_ID', '8e87c140-0749-4fe1-9713-39b05df2f566', 300.00, 'Credit Card', 'paid', 'Endodontic Follow-up - Nov 30, 2024', '2024-11-30'),
  ('PATIENT_10_ID', '8e87c140-0749-4fe1-9713-39b05df2f566', 800.00, 'Bank Transfer', 'partial', 'Root Canal Retreatment - Dec 2, 2024', '2024-12-02');

-- HOW TO USE THIS SCRIPT:
-- 1. Get patient IDs:
--    SELECT id, name FROM patients;
--    Replace PATIENT_1_ID, PATIENT_2_ID, etc. with actual UUIDs
--
-- 2. Get dentist IDs (already provided):
--    Dr. Sarah Smith: a2b6f9aa-c1db-4126-91ea-e68ce0764cf7
--    Dr. John Doe: 36bbff44-0df3-4926-a241-83e753324ffa
--    Dr. Emily Johnson: 63d250c7-d355-4eaa-b99e-d502b7db5dfb
--    Dr. Michael Chen: eab4dac1-1534-4b6d-80d1-243273ee4773
--    Dr. Lisa Anderson: 8e87c140-0749-4fe1-9713-39b05df2f566
--
-- 3. Replace PATIENT_X_ID placeholders with actual UUIDs
-- 4. Run in Supabase SQL Editor
