"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Bluetooth as Tooth,
  CreditCard,
  Package,
  BarChart3,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
} from "lucide-react"
import { patientService } from "@/lib/db-service"
import { authService } from "@/lib/auth-service"
import AddPatientModal from "@/components/modals/add-patient-modal"
import ViewPatientModal from "@/components/modals/view-patient-modal"
import EditPatientModal from "@/components/modals/edit-patient-modal"

interface Patient {
  id: string
  name: string
  email: string
  phone?: string
  dob?: string
  gender?: string
  created_at?: string
}

export default function HRPatients() {
  const { user } = useAuth()
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    loadPatients()
  }, [])

  const loadPatients = async () => {
    try {
      setLoading(true)
      const data = await patientService.getAll()
      setPatients(data || [])
    } catch (error) {
      console.error("[v0] Error loading patients:", error)
    } finally {
      setLoading(false)
    }
  }

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/hr/dashboard" },
    { label: "Patients", icon: <Users className="w-5 h-5" />, href: "/hr/patients" },
    { label: "Appointments", icon: <Calendar className="w-5 h-5" />, href: "/hr/appointments" },
    { label: "Treatments", icon: <Tooth className="w-5 h-5" />, href: "/hr/treatments" },
    { label: "Payments", icon: <CreditCard className="w-5 h-5" />, href: "/hr/payments" },
    { label: "Inventory", icon: <Package className="w-5 h-5" />, href: "/hr/inventory" },
    { label: "Reports", icon: <BarChart3 className="w-5 h-5" />, href: "/hr/reports" },
    { label: "Settings", icon: <Settings className="w-5 h-5" />, href: "/hr/settings" },
  ]

  const handleAddPatient = async (data: any) => {
    try {
      // Check for duplicate patient name
      const existingPatient = await patientService.getByName(data.name)
      if (existingPatient) {
        throw new Error(`Patient with name '${data.name}' already exists. Please use a different name.`)
      }

      const newPatient = await patientService.create(data)
      if (newPatient) {
        setPatients([newPatient, ...patients])
        setShowAddModal(false)
      }
    } catch (error) {
      console.error("[v0] Error adding patient:", error)
      alert(`Error adding patient: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  const handleDeletePatient = async (id: string) => {
    if (confirm("Are you sure you want to delete this patient?")) {
      try {
        await patientService.delete(id)
        setPatients(patients.filter((p) => p.id !== id))
      } catch (error) {
        console.error("[v0] Error deleting patient:", error)
      }
    }
  }

  const handleViewPatient = (patient: Patient) => {
    setSelectedPatient(patient)
    setShowViewModal(true)
  }

  const handleEditPatient = (patient: Patient) => {
    setSelectedPatient(patient)
    setShowEditModal(true)
  }

  const handleEditSubmit = async (submitData: any) => {
    try {
      if (submitData.type === "profile") {
        // Update patient profile
        await patientService.update(selectedPatient!.id, submitData.data)
        
        // Update the patient in the list
        setPatients(
          patients.map((p) => (p.id === selectedPatient!.id ? { ...p, ...submitData.data } : p))
        )
      } else if (submitData.type === "password") {
        // Update password
        await authService.updatePassword(submitData.data.email, submitData.data.newPassword)
      }
    } catch (error) {
      console.error("[v0] Error updating patient:", error)
      throw error
    }
  }

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.phone && p.phone.includes(searchTerm)),
  )

  return (
    <MainLayout navItems={navItems} title="Patient Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Manage Patients</h2>
            <p className="text-muted-foreground">Add, edit, and manage patient records</p>
          </div>
          <Button
            onClick={() => setShowAddModal(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Patient
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Patients Table */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Records</CardTitle>
            <CardDescription>{filteredPatients.length} patient(s) found</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="py-8 text-center text-muted-foreground">Loading patients...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">DOB</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Gender</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Joined</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-muted-foreground">
                          No patients found
                        </td>
                      </tr>
                    ) : (
                      filteredPatients.map((patient) => (
                        <tr key={patient.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-sm font-medium text-foreground">{patient.name}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{patient.email}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{patient.phone || "-"}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{patient.dob || "-"}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{patient.gender || "-"}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {patient.created_at ? new Date(patient.created_at).toLocaleDateString() : "-"}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleViewPatient(patient)}
                                className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleEditPatient(patient)}
                                className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeletePatient(patient.id)}
                                className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {showAddModal && <AddPatientModal onClose={() => setShowAddModal(false)} onSubmit={handleAddPatient} />}

      {showViewModal && selectedPatient && (
        <ViewPatientModal patient={selectedPatient} onClose={() => setShowViewModal(false)} />
      )}

      {showEditModal && selectedPatient && (
        <EditPatientModal patient={selectedPatient} onClose={() => setShowEditModal(false)} onSubmit={handleEditSubmit} />
      )}
    </MainLayout>
  )
}
