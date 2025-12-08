"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LayoutDashboard, Calendar, Bluetooth as Tooth, BarChart3, Plus, Edit, Trash2, Search, DollarSign } from "lucide-react"
import AddTreatmentModal from "@/components/modals/add-treatment-modal"

interface PatientTreatment {
  id: string
  patientId: string
  patientName: string
  appointmentId: string
  date: string
  treatment: string
  description: string
  notes: string
}

export default function DentistTreatments() {
  const { user } = useAuth()
  const [treatments, setTreatments] = useState<PatientTreatment[]>([
    {
      id: "1",
      patientId: "1",
      patientName: "John Patient",
      appointmentId: "1",
      date: "2024-11-10",
      treatment: "Cleaning",
      description: "Professional dental cleaning and plaque removal",
      notes: "Patient cooperated well. Recommend regular cleaning every 6 months.",
    },
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dentist/dashboard" },
    { label: "My Schedule", icon: <Calendar className="w-5 h-5" />, href: "/dentist/schedule" },
    { label: "Treatments", icon: <Tooth className="w-5 h-5" />, href: "/dentist/treatments" },
    { label: "Earnings", icon: <DollarSign className="w-5 h-5" />, href: "/dentist/earnings" },
    { label: "Reports", icon: <BarChart3 className="w-5 h-5" />, href: "/dentist/reports" },
  ]

  const handleAddTreatment = (data: any) => {
    const newTreatment: PatientTreatment = {
      id: String(treatments.length + 1),
      ...data,
      date: new Date().toISOString().split("T")[0],
    }
    setTreatments([...treatments, newTreatment])
    setShowAddModal(false)
  }

  const handleDeleteTreatment = (id: string) => {
    if (confirm("Are you sure you want to delete this treatment record?")) {
      setTreatments(treatments.filter((t) => t.id !== id))
    }
  }

  const filteredTreatments = treatments.filter(
    (t) =>
      t.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.treatment.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <MainLayout navItems={navItems} title="Treatment Records">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Treatment Records</h2>
            <p className="text-muted-foreground">Record and manage patient treatments</p>
          </div>
          <Button
            onClick={() => setShowAddModal(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Treatment
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by patient name or treatment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Treatment Records */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Treatments</CardTitle>
            <CardDescription>{filteredTreatments.length} treatment record(s)</CardDescription>
          </CardHeader>
          <CardContent>
            {filteredTreatments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No treatment records found</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{treatment.treatment}</h3>
                        <p className="text-sm text-muted-foreground">Patient: {treatment.patientName}</p>
                        <p className="text-sm text-muted-foreground">Date: {treatment.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteTreatment(treatment.id)}
                          className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Description</p>
                        <p className="text-sm text-foreground">{treatment.description}</p>
                      </div>
                      {treatment.notes && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Notes</p>
                          <p className="text-sm text-foreground">{treatment.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {showAddModal && <AddTreatmentModal onClose={() => setShowAddModal(false)} onSubmit={handleAddTreatment} />}
    </MainLayout>
  )
}
