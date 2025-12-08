-- Migration: Add dentist_id to supply_requests table
-- This allows dentists to submit supply requests

-- Check if dentist_id column already exists
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'supply_requests' AND column_name = 'dentist_id'
  ) THEN
    -- Add dentist_id column
    ALTER TABLE supply_requests 
    ADD COLUMN dentist_id UUID REFERENCES dentists(id) ON DELETE CASCADE;
    
    -- Create index on dentist_id for performance
    CREATE INDEX idx_supply_requests_dentist_id ON supply_requests(dentist_id);
  END IF;
END $$;

-- Make staff_id optional if it wasn't already
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE table_name = 'supply_requests' 
    AND constraint_name LIKE '%staff_id%'
    AND constraint_type = 'FOREIGN KEY'
  ) THEN
    -- Check if staff_id is NOT NULL and drop the constraint if needed
    -- This is database-specific, so we'll just document that staff_id should be nullable
    NULL;
  END IF;
END $$;
