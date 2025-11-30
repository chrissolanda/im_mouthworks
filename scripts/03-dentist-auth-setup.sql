-- Link dentists to auth users (dentist user IDs must match their dentist record IDs)
-- These are the dentist emails and their corresponding IDs from the dentists table

-- Dr. Sarah Smith - a2b6f9aa-c1db-4126-91ea-e68ce0764cf7
-- Dr. John Doe - 36bbff44-0df3-4926-a241-83e753324ffa
-- Dr. Emily Johnson - 63d250c7-d355-4eaa-b99e-d502b7db5dfb
-- Dr. Michael Chen - eab4dac1-1534-4b6d-80d1-243273ee4773
-- Dr. Lisa Anderson - 8e87c140-0749-4fe1-9713-39b05df2f566

-- IMPORTANT: You need to manually create these users in Supabase Auth:
-- 1. Go to Supabase → Authentication → Users
-- 2. Click "Add user" and create these accounts:
--    - Email: sarah.smith@dental.com, Password: dentist123
--    - Email: john.doe@dental.com, Password: dentist123
--    - Email: emily.johnson@dental.com, Password: dentist123
--    - Email: michael.chen@dental.com, Password: dentist123
--    - Email: lisa.anderson@dental.com, Password: dentist123

-- After creating auth users, note their user IDs from Supabase
-- Then run UPDATE statements to link them:

-- UPDATE dentists SET user_id = '<USER_ID_FROM_SUPABASE>' WHERE email = 'sarah.smith@dental.com';
-- UPDATE dentists SET user_id = '<USER_ID_FROM_SUPABASE>' WHERE email = 'john.doe@dental.com';
-- UPDATE dentists SET user_id = '<USER_ID_FROM_SUPABASE>' WHERE email = 'emily.johnson@dental.com';
-- UPDATE dentists SET user_id = '<USER_ID_FROM_SUPABASE>' WHERE email = 'michael.chen@dental.com';
-- UPDATE dentists SET user_id = '<USER_ID_FROM_SUPABASE>' WHERE email = 'lisa.anderson@dental.com';
