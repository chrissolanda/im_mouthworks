"use client"

import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, Bluetooth as Tooth, BarChart3, CheckCircle, XCircle, DollarSign } from "lucide-react"
import { useState, useEffect } from "react"
import { appointmentService } from "@/lib/db-service"

interface Appointment {
  id: string
  patient_id: string
  dentist_id: string
  date: string
  time: string
  status: string
  treatment_id?: string
  notes?: string
  patients?: {
    name: string
    email: string
  }
  dentists?: {
    name: string
  }
}

export default function DentistDashboard() {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [processingId, setProcessingId] = useState<string | null>(null)

  useEffect(() => {
    loadData()
  }, [user?.id])

  const loadData = async () => {
    loadAppointments()
  }

  const loadAppointments = async () => {
    if (!user?.id) return
    try {
      setLoading(true)
      const data = await appointmentService.getByDentistId(user.id)
      setAppointments(data || [])
    } catch (error) {
      console.error("[v0] Error loading appointments:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleApproveAppointment = async (appointmentId: string) => {
    setProcessingId(appointmentId)
    try {
      await appointmentService.changeStatus(appointmentId, "confirmed")
      setAppointments((prev) => prev.map((apt) => (apt.id === appointmentId ? { ...apt, status: "confirmed" } : apt)))
    } catch (error) {
      console.error("[v0] Error approving appointment:", error)
      alert("Failed to approve appointment")
    } finally {
      setProcessingId(null)
    }
  }

  const handleRejectAppointment = async (appointmentId: string) => {
    setProcessingId(appointmentId)
    try {
      await appointmentService.changeStatus(appointmentId, "rejected")
      setAppointments((prev) => prev.map((apt) => (apt.id === appointmentId ? { ...apt, status: "rejected" } : apt)))
    } catch (error) {
      console.error("[v0] Error rejecting appointment:", error)
      alert("Failed to reject appointment")
    } finally {
      setProcessingId(null)
    }
  }



  const pendingAppointments = appointments.filter((apt) => apt.status === "pending")
  const approvedAppointments = appointments.filter((apt) => apt.status === "confirmed")
  const todayAppointments = approvedAppointments.filter((apt) => {
    const today = new Date().toISOString().split("T")[0]
    return apt.date === today
  })

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dentist/dashboard" },
    { label: "My Schedule", icon: <Calendar className="w-5 h-5" />, href: "/dentist/schedule" },
    { label: "Treatments", icon: <Tooth className="w-5 h-5" />, href: "/dentist/treatments" },
    { label: "Earnings", icon: <DollarSign className="w-5 h-5" />, href: "/dentist/earnings" },
    { label: "Reports", icon: <BarChart3 className="w-5 h-5" />, href: "/dentist/reports" },
  ]

  return (
    <MainLayout navItems={navItems} title="Dentist Schedule">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2">Welcome, Dr. {user?.name}</h1>
          <p className="opacity-90">Manage your appointments and patient treatments</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{todayAppointments.length}</div>
              <p className="text-xs text-muted-foreground mt-1">All confirmed</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{pendingAppointments.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting action</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{approvedAppointments.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Total appointments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {appointments.filter((apt) => apt.status === "completed").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Pending Approvals */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Appointment Approvals</CardTitle>
            <CardDescription>Appointments awaiting your decision</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading appointments...</div>
            ) : pendingAppointments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No pending appointments</div>
            ) : (
              <div className="space-y-3">
                {pendingAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {apt.patients?.name ? apt.patients.name.charAt(0) : "?"}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{apt.patients?.name || "Unknown Patient"}</p>
                        <p className="text-sm text-muted-foreground">
                          {apt.date} at {apt.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleApproveAppointment(apt.id)}
                        disabled={processingId === apt.id}
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {processingId === apt.id ? "..." : "Accept"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-destructive text-destructive hover:bg-destructive/10 bg-transparent"
                        onClick={() => handleRejectAppointment(apt.id)}
                        disabled={processingId === apt.id}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        {processingId === apt.id ? "..." : "Reject"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your confirmed appointments for today</CardDescription>
          </CardHeader>
          <CardContent>
            {todayAppointments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No appointments today</div>
            ) : (
              <div className="space-y-3">
                {todayAppointments.map((apt) => (
                  <div key={apt.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{apt.patients?.name || "Unknown Patient"}</p>
                        <p className="text-sm text-muted-foreground">{apt.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Confirmed</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </MainLayout>
  )
}
