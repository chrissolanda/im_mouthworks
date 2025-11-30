"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"
import { appointmentService } from "@/lib/db-service"
import ScheduleAppointmentModal from "@/components/modals/schedule-appointment-modal"

interface Appointment {
  id: string
  patient_id: string
  dentist_id?: string
  date: string
  time: string
  service?: string
  status: "pending" | "confirmed" | "completed" | "cancelled" | "rejected"
  notes?: string
  patients?: { name: string }
  dentists?: { name: string }
}

export default function HRAppointments() {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    loadAppointments()
  }, [])

  const loadAppointments = async () => {
    try {
      setLoading(true)
      const data = await appointmentService.getAll()
      setAppointments(data || [])
    } catch (error) {
      console.error("[v0] Error loading appointments:", error)
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

  const handleScheduleAppointment = async (data: any) => {
    try {
      const newAppointment = await appointmentService.create(data)
      setAppointments([newAppointment, ...appointments])
      setShowScheduleModal(false)
    } catch (error) {
      console.error("[v0] Error scheduling appointment:", error)
    }
  }

  const handleDeleteAppointment = async (id: string) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      try {
        await appointmentService.delete(id)
        setAppointments(appointments.filter((a) => a.id !== id))
      } catch (error) {
        console.error("[v0] Error deleting appointment:", error)
      }
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const updated = await appointmentService.changeStatus(id, newStatus)
      setAppointments(appointments.map((a) => (a.id === id ? updated : a)))
    } catch (error) {
      console.error("[v0] Error updating appointment status:", error)
    }
  }

  const filteredAppointments = filter === "all" ? appointments : appointments.filter((a) => a.status === filter)

  const statusGroups = {
    pending: filteredAppointments.filter((a) => a.status === "pending"),
    confirmed: filteredAppointments.filter((a) => a.status === "confirmed"),
    completed: filteredAppointments.filter((a) => a.status === "completed"),
  }

  return (
    <MainLayout navItems={navItems} title="Appointment Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Schedule Appointments</h2>
            <p className="text-muted-foreground">Create and manage all clinic appointments</p>
          </div>
          <Button
            onClick={() => setShowScheduleModal(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Plus className="w-4 h-4" />
            New Appointment
          </Button>
        </div>

        {/* Status Filters */}
        <div className="flex gap-2">
          {["all", "pending", "confirmed", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === status ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
              {status !== "all" && ` (${statusGroups[status as keyof typeof statusGroups]?.length || 0})`}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center text-muted-foreground">Loading appointments...</div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filter === "all" ? (
              <>
                {statusGroups.pending.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-yellow-600" />
                        Pending Approval ({statusGroups.pending.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {statusGroups.pending.map((apt) => (
                          <AppointmentCard
                            key={apt.id}
                            appointment={apt}
                            onStatusChange={handleStatusChange}
                            onDelete={handleDeleteAppointment}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {statusGroups.confirmed.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Confirmed ({statusGroups.confirmed.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {statusGroups.confirmed.map((apt) => (
                          <AppointmentCard
                            key={apt.id}
                            appointment={apt}
                            onStatusChange={handleStatusChange}
                            onDelete={handleDeleteAppointment}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {statusGroups.completed.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Completed ({statusGroups.completed.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {statusGroups.completed.map((apt) => (
                          <AppointmentCard
                            key={apt.id}
                            appointment={apt}
                            onStatusChange={handleStatusChange}
                            onDelete={handleDeleteAppointment}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {filteredAppointments.map((apt) => (
                      <AppointmentCard
                        key={apt.id}
                        appointment={apt}
                        onStatusChange={handleStatusChange}
                        onDelete={handleDeleteAppointment}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>

      {showScheduleModal && (
        <ScheduleAppointmentModal onClose={() => setShowScheduleModal(false)} onSubmit={handleScheduleAppointment} />
      )}
    </MainLayout>
  )
}

function AppointmentCard({ appointment, onStatusChange, onDelete }: any) {
  return (
    <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <p className="font-semibold text-foreground">{appointment.patients?.name || "Unknown Patient"}</p>
          <p className="text-sm text-muted-foreground">
            {appointment.service || "General Visit"} with {appointment.dentists?.name || "Unassigned"}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            appointment.status === "confirmed"
              ? "bg-green-100 text-green-700"
              : appointment.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-700"
          }`}
        >
          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {appointment.date} at {appointment.time}
        </div>
        <div className="flex gap-2">
          {appointment.status === "pending" && (
            <>
              <Button
                size="sm"
                onClick={() => onStatusChange(appointment.id, "confirmed")}
                className="bg-green-600 hover:bg-green-700 text-white text-xs"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                Confirm
              </Button>
              <Button
                size="sm"
                onClick={() => onStatusChange(appointment.id, "cancelled")}
                variant="outline"
                className="text-xs"
              >
                <XCircle className="w-3 h-3 mr-1" />
                Reject
              </Button>
            </>
          )}
          <Button
            size="sm"
            variant="outline"
            className="text-xs text-destructive hover:bg-destructive/10 bg-transparent"
            onClick={() => onDelete(appointment.id)}
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
