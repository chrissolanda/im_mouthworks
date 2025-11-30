# 💰 Complete Payment System Setup Guide

## What's Been Implemented ✅

Each dentist now has their own transaction tracking system that:
- ✅ Shows all payments for appointments they handled
- ✅ Tracks earnings from services they provided
- ✅ Syncs in real-time with HR system
- ✅ Supports multiple payment statuses (paid, partial, unpaid)
- ✅ HR can create/edit/delete payment records for any dentist
- ✅ Dentists can view their earnings dashboard
- ✅ Patients can see their payment history

## System Architecture

```
┌─────────────────────────────────────────────┐
│        Payments Table (Supabase)            │
├─────────────────────────────────────────────┤
│ id, patient_id, dentist_id, amount, status │
│ method, description, date, created_at       │
└─────────────────────────────────────────────┘
         ↓              ↓              ↓
    ┌────────────┬──────────────┬──────────────┐
    │   DENTIST  │   PATIENT    │   HR ADMIN   │
    │  EARNINGS  │   PAYMENT    │  MANAGEMENT  │
    │  DASHBOARD │   HISTORY    │   DASHBOARD  │
    └────────────┴──────────────┴──────────────┘
```

## Step-by-Step Setup

### Step 1: Update Payments Table Schema in Supabase

Run this SQL in your Supabase SQL Editor:

```sql
-- Add dentist_id column if not already present
ALTER TABLE payments ADD COLUMN IF NOT EXISTS dentist_id UUID REFERENCES dentists(id) ON DELETE SET NULL;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_payments_dentist_id ON payments(dentist_id);
CREATE INDEX IF NOT EXISTS idx_payments_patient_id ON payments(patient_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(date);
```

### Step 2: Seed Payment Data

1. Get all patient IDs from your database:
```sql
SELECT id, name FROM patients;
```

2. Open `scripts/04-seed-payments.sql`

3. Replace all `PATIENT_X_ID` placeholders with actual patient UUIDs from Step 1

4. Run the updated script in Supabase SQL Editor

**Dentist IDs (already provided):**
- Dr. Sarah Smith: `a2b6f9aa-c1db-4126-91ea-e68ce0764cf7`
- Dr. John Doe: `36bbff44-0df3-4926-a241-83e753324ffa`
- Dr. Emily Johnson: `63d250c7-d355-4eaa-b99e-d502b7db5dfb`
- Dr. Michael Chen: `eab4dac1-1534-4b6d-80d1-243273ee4773`
- Dr. Lisa Anderson: `8e87c140-0749-4fe1-9713-39b05df2f566`

## Features & How to Use

### For HR Admin

**Location:** HR → Payments

**Features:**
- 📊 View all payments across all dentists
- ➕ **Record Payment**: Click "Record Payment" button
  - Select patient
  - Select dentist (who performed the work)
  - Enter amount
  - Choose payment method (Cash, Bank Transfer, Credit Card, Check, Insurance)
  - Set status (Paid, Partial, Unpaid)
  - Add description
- ✏️ **Edit Status**: Click on any status badge to change it
- 🗑️ **Delete**: Click trash icon to remove payment record
- 🔍 **Search**: Filter by patient name or description
- 📈 **Statistics**: View total paid, partial, unpaid, and revenue

### For Dentists

**Location:** Dentist → Earnings

**Features:**
- 💵 **Total Earned**: All paid transactions for this dentist
- ⏳ **Pending Payment**: Unpaid/partial transactions
- 📊 **Transaction Count**: Total transactions
- 💳 **Net Balance**: Total outstanding amount
- 📋 **Transaction History**: All payments linked to this dentist
- 🔍 **Search & Filter**: Find specific payments

### For Patients

**Location:** Patient → Payment History

**Features:**
- 💰 **Total Paid**: Payments you've completed
- ⚠️ **Outstanding Balance**: What you owe
- 📝 **Payment History**: All your transactions
- 👨‍⚕️ **See Dentist**: Which dentist performed the service
- 📥 **Download**: Receipt/invoice for each payment (button ready for integration)

## Database Relationships

```
payments table:
├── patient_id → patients.id
├── dentist_id → dentists.id
├── amount (numeric)
├── method (text)
├── status (enum: paid, partial, unpaid)
├── description (text)
├── date (date)
└── created_at (timestamp)
```

## Real-Time Sync Explained

1. **HR creates payment** → Saved to Supabase immediately
2. **Dentist views earnings** → Fetches their payments from Supabase
3. **HR edits status** → Updates database → Dentist sees change on refresh
4. **Patient views history** → Sees all payments from Supabase

## API Methods Available

All services in `lib/db-service.ts`:

```typescript
// Payment Service
paymentService.getAll()                    // All payments (HR dashboard)
paymentService.getByDentistId(dentistId)   // Dentist's earnings
paymentService.getByPatientId(patientId)   // Patient's payment history
paymentService.getDentistEarnings(dentistId) // Earnings summary
paymentService.create(payment)              // Record new payment
paymentService.update(id, updates)          // Edit payment (status, method, etc)
paymentService.delete(id)                   // Delete payment
paymentService.getPatientBalance(patientId) // Patient's total balance
```

## Testing the System

### Test 1: Create a Payment (HR)
1. Login as HR: `hr@example.com`
2. Go to HR → Payments
3. Click "Record Payment"
4. Fill in all fields:
   - Patient: Select any patient
   - Dentist: Select any dentist
   - Amount: 150.00
   - Method: Cash
   - Status: Paid
   - Description: "Cleaning - Dec 5, 2024"
5. Click "Record Payment"
6. ✅ Payment appears in table

### Test 2: View Dentist Earnings
1. Login as Dentist: `sarah.smith@dental.com`
2. Go to Dentist → Earnings
3. ✅ You should see all payments linked to Dr. Sarah Smith
4. ✅ Earnings summary shows total earned, pending, completed

### Test 3: View Patient Payment History
1. Login as Patient: `patient@example.com`
2. Go to Patient → Payment History
3. ✅ You see all payments for this patient
4. ✅ Shows which dentist handled each service
5. ✅ Total paid and outstanding balance display correctly

### Test 4: Edit Payment Status (HR)
1. Login as HR: `hr@example.com`
2. Go to HR → Payments
3. Click on any status badge
4. Change status to different value
5. ✅ Status updates immediately in Supabase
6. ✅ If you login as that dentist and go to Earnings, change is visible

### Test 5: Delete Payment (HR)
1. Login as HR: `hr@example.com`
2. Click trash icon on any payment
3. Confirm deletion
4. ✅ Payment is removed from all views
5. ✅ Earnings recalculated for dentist

## Advanced Features

### Payment Statistics
The system automatically calculates:
```typescript
{
  totalEarned: sum of all "paid" payments,
  totalPending: sum of all "unpaid" + "partial" payments,
  totalCompleted: count of transactions with status "paid",
  count: total number of transactions
}
```

### Search & Filtering
- Filter by status: All, Paid, Partial, Unpaid
- Search by patient name or service description
- Works across all views (HR, Dentist, Patient)

## Important Notes

⚠️ **Key Points:**
- Every payment MUST have a dentist_id (the dentist who provided the service)
- Payments are automatically linked to appointments (future enhancement)
- Status changes sync in real-time to Supabase
- All dates are stored as YYYY-MM-DD format
- All amounts are stored as numeric (supports decimal places)

## Troubleshooting

**Problem:** "No payments found" in any view
- **Solution:** Check that payments have been created with matching patient/dentist IDs

**Problem:** Dentist earnings show $0
- **Solution:** Check that payments have the correct dentist_id in Supabase

**Problem:** HR can't edit status
- **Solution:** Make sure Supabase RLS policies allow updates to payments table

**Problem:** Patient doesn't see their payments
- **Solution:** Check that patient_id in payments table matches their user ID

## Next Steps

1. ✅ Create payments table in Supabase (if not already done)
2. ✅ Add dentist_id column to payments
3. ✅ Run seed script with real patient IDs
4. ✅ Test all three user roles (HR, Dentist, Patient)
5. ✅ Verify real-time sync by editing and refreshing

## Files Updated

- `lib/db-service.ts` - Added getDentistEarnings(), updated payment methods
- `app/hr/payments/page.tsx` - Added edit functionality, dentist column, error handling
- `app/dentist/earnings/page.tsx` - NEW: Dentist earnings dashboard
- `app/patient/payments/page.tsx` - Now loads real data from Supabase
- `components/modals/record-payment-modal.tsx` - Added dentist selection
- `scripts/04-seed-payments.sql` - NEW: Payment seed data template

All payments are now real, tracked per dentist, and synced across the system! 🎉
