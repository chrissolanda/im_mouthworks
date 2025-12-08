# Supply Request Migration Guide

## Migration: Add Dentist Supply Requests Support

This migration adds support for dentists to submit supply requests directly to HR/Admin.

### What Changed

1. **Database Schema** (`scripts/06-add-dentist-supply-requests.sql`):
   - Adds `dentist_id` column to `supply_requests` table
   - Creates relationship between supply requests and dentists
   - Makes `staff_id` optional to support both staff and dentist requests

2. **Database Service** (`lib/db-service.ts`):
   - Updated to safely handle dentist relationship
   - Gracefully fetches dentist info separately if needed
   - Works with or without the schema change applied

3. **UI Components**:
   - Dentist Dashboard: Added "Supply Requests" section with ability to create requests
   - HR Inventory: Shows both staff and dentist as requesters
   - Modal: `DentistSupplyRequestModal` for creating new requests

### How to Apply Migration

Run this SQL in your Supabase SQL Editor:

```sql
-- Run the migration script
-- Go to Supabase Dashboard > SQL Editor > New Query
-- Paste the contents of scripts/06-add-dentist-supply-requests.sql
-- Click Execute
```

Or use the provided migration file:
- Path: `scripts/06-add-dentist-supply-requests.sql`

### How Dentist Supply Requests Work

1. **Dentist** opens their dashboard
2. **Dentist** clicks "Request Supply" button in Supply Requests section
3. **Dentist** selects item and quantity from modal
4. **Request** is submitted to database with `dentist_id`
5. **HR** sees request in Inventory Management page
6. **HR** can approve or reject request
7. **Dentist** sees status update on their dashboard

### Backwards Compatibility

The code includes fallback mechanisms:
- If `dentist_id` column doesn't exist yet, requests still work
- Fetches dentist info separately to avoid relationship errors
- Works with both staff and dentist requests seamlessly

### Error Handling

If you see relationship errors:
1. Check that migration script has been run
2. Clear Supabase schema cache (usually automatic after a few minutes)
3. Refresh your browser application

The application will continue to work even if the migration hasn't been fully applied yet, thanks to the fallback logic in the database service.
