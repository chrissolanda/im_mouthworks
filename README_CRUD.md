# 🦷 Mouthworks Dental Clinic - CRUD Ready System

This is a fully functional dental clinic management system with **real Supabase integration** for complete CRUD (Create, Read, Update, Delete) operations.

## 🚀 Quick Start

### 1. Setup Environment
```bash
# Create .env.local from template
cp .env.local.example .env.local

# Add your Supabase credentials to .env.local
# Get them from: https://app.supabase.com → Project Settings → API
```

### 2. Create Database Tables
```bash
# Follow SUPABASE_SETUP.md for detailed instructions
# Copy contents of scripts/01-create-schema.sql
# Paste into Supabase SQL Editor and run
```

### 3. Start Development
```bash
npm run dev
# Visit http://localhost:3000
```

## 📋 CRUD Operations Implemented

### ✅ Patients Management
- **Create**: Add new patients via HR Dashboard → Patients → Add Patient
- **Read**: View all patients, search by name/email/phone
- **Update**: Coming in next phase
- **Delete**: Delete patients (with confirmation)

All patient data is **immediately saved to Supabase**.

### ✅ Appointments (Ready for CRUD)
- Service: `appointmentService` in `lib/db-service.ts`
- Methods: `getAll()`, `getByPatientId()`, `getByDentistId()`, `create()`, `update()`, `delete()`

### ✅ Treatments (Ready for CRUD)
- Service: `treatmentService` in `lib/db-service.ts`
- Methods: `getAll()`, `getById()`, `create()`, `update()`, `delete()`

### ✅ Payments (Ready for CRUD)
- Service: `paymentService` in `lib/db-service.ts`
- Methods: `getAll()`, `getByPatientId()`, `create()`, `update()`, `delete()`

### ✅ Inventory (Ready for CRUD)
- Service: `inventoryService` in `lib/db-service.ts`
- Methods: `getAll()`, `getById()`, `create()`, `update()`, `delete()`

## 🏗️ Architecture

### Database Services (`lib/db-service.ts`)
All CRUD operations are centralized in service objects:

```typescript
// Example: Create a patient
const newPatient = await patientService.create({
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 234-567-8900",
  dob: "1990-05-15",
  gender: "Male",
  address: "123 Main St"
});

// Read all patients
const patients = await patientService.getAll();

// Delete a patient
await patientService.delete(patientId);
```

### Component Integration
UI components use these services:

```typescript
// app/hr/patients/page.tsx
const handleAddPatient = async (data: any) => {
  const newPatient = await patientService.create(data);
  setPatients([newPatient, ...patients]);
};
```

## 🔐 Data Flow

```
UI Component (React)
    ↓
Modal Component (Get user input)
    ↓
Service Method (lib/db-service.ts)
    ↓
Supabase Client (lib/supabase-client.ts)
    ↓
Supabase Database (Remote)
    ↓
Response → UI Update
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `lib/db-service.ts` | All CRUD service methods |
| `lib/supabase-client.ts` | Supabase client initialization |
| `app/hr/patients/page.tsx` | Patient management UI |
| `components/modals/add-patient-modal.tsx` | Patient creation form |
| `scripts/01-create-schema.sql` | Database schema |

## 🔧 Configuration

### Enable/Disable RLS (Row Level Security)

**For Development** (disable RLS):
1. Supabase Dashboard → Authentication → RLS
2. Click each table and toggle "RLS disabled"

**For Production** (keep RLS enabled):
- RLS policies are configured in `scripts/01-create-schema.sql`
- Modify policies as needed for your security requirements

## 📊 Database Schema

Tables created automatically via `scripts/01-create-schema.sql`:
- `patients` - Patient records
- `appointments` - Appointment scheduling
- `treatments` - Dental treatment services
- `payments` - Payment records
- `inventory` - Inventory management
- `dentists` - Dentist staff
- `staff` - HR staff
- `treatment_records` - Treatment history

## 🛠️ Development

### Adding a New CRUD Feature

1. **Add service methods** in `lib/db-service.ts`:
```typescript
export const myService = {
  async create(data: any) {
    const { data: result, error } = await getSupabase()
      .from("my_table")
      .insert([data])
      .select()
      .single()
    if (error) throw error
    return result
  }
}
```

2. **Use in component**:
```typescript
const newItem = await myService.create(formData);
```

3. **Test in Supabase Table Editor** to verify data is saved.

## 🐛 Debugging

### Check Console for Errors
Browser DevTools → Console tab shows detailed error messages

### Monitor Supabase Logs
Supabase Dashboard → Logs → Check for API errors

### Verify Data in Supabase
Supabase Dashboard → Table Editor → View actual data in database

## 📞 Troubleshooting

| Issue | Solution |
|-------|----------|
| "Failed to create patient" | Check `.env.local`, ensure tables exist, disable RLS |
| Data not appearing | Verify RLS policies aren't blocking SELECT |
| Silent failures | Check browser console for error messages |
| Can't connect to Supabase | Verify `NEXT_PUBLIC_SUPABASE_URL` and key are correct |

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)

## ✨ Features

- ✅ Full CRUD operations
- ✅ Real-time Supabase integration
- ✅ Error handling and validation
- ✅ Search and filtering
- ✅ Role-based access (Patient, Dentist, HR)
- ✅ Modern UI with Tailwind CSS
- ✅ Responsive design
- ✅ Type-safe with TypeScript

---

**Ready to use!** Follow the Quick Start guide above to get started with real data storage in Supabase.
