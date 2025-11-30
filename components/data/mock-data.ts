// Mock data for demo purposes - replace with API calls
import {
  patientService,
  appointmentService,
  treatmentService,
  paymentService,
  inventoryService,
} from "@/lib/db-service"

// These exports remain for backward compatibility but now fetch from Supabase
export const getMockPatients = () => patientService.getAll()
export const getMockAppointments = () => appointmentService.getAll()
export const getMockTreatments = () => treatmentService.getAll()
export const getMockPayments = () => paymentService.getAll()
export const getMockInventory = () => inventoryService.getAll()

// Legacy exports for immediate use (demo purposes)
export const mockPatients = [
  {
    id: "1",
    name: "John Patient",
    email: "patient@example.com",
    phone: "+1 234-567-8900",
    dob: "1990-05-15",
    gender: "Male",
    address: "123 Main St, City, State 12345",
    createdAt: "2024-01-15",
  },
]

export const mockAppointments = [
  {
    id: "1",
    patientId: "1",
    patientName: "John Patient",
    doctorId: "2",
    doctorName: "Dr. Sarah",
    date: "2024-12-05",
    time: "14:00",
    service: "Cleaning",
    status: "confirmed",
    notes: "Regular cleaning",
  },
]

export const mockTreatments = [
  { id: "1", name: "Cleaning", category: "Cleaning", price: 75, description: "Professional dental cleaning" },
]

export const mockPayments = [
  {
    id: "1",
    patientId: "1",
    amount: 75,
    method: "Cash",
    status: "paid",
    date: "2024-11-10",
    description: "Cleaning - Nov 10, 2024",
  },
]

export const mockInventory = [
  {
    id: "1",
    name: "Gloves (Latex)",
    quantity: 200,
    minQuantity: 50,
    category: "Supplies",
    supplier: "DentalCo",
    status: "ok",
  },
]

export const mockDentists = [
  {
    id: "2",
    name: "Dr. Sarah",
    email: "dentist@example.com",
    phone: "+1 234-567-8901",
    specialization: "General Dentistry",
  },
]

export const mockServices = [
  { id: "1", name: "Cleaning", icon: "Sparkles" },
  { id: "2", name: "Check-up", icon: "Stethoscope" },
]

export const mockAvailableSlots = [
  { date: "2024-12-08", slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"] },
]

export const mockStaffRequests = [
  {
    id: "1",
    itemId: "2",
    itemName: "Anesthesia Vial",
    quantity: 20,
    requestedBy: "John",
    date: "2024-11-28",
    status: "pending",
  },
  {
    id: "2",
    itemId: "4",
    itemName: "Composite Resin",
    quantity: 30,
    requestedBy: "Sarah",
    date: "2024-11-27",
    status: "approved",
  },
]
