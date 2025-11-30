"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, User, CreditCard, CalendarIcon, Clock, Trash2, Edit } from "lucide-react"
import { appointmentService } from "@/lib/db-service"

export default function PatientAppointments() {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        if (!user?.id) {
          setLoading(false)
          return
        }
        const data = await appointmentService.getByPatientId(user.id)
        setAppointments(data || [])
      } catch (error) {
        console.error("[v0] Error loading appointments:", error instanceof Error ? error.message : error)
        setAppointments([])
      } finally {
        setLoading(false)
      }
    }

    loadAppointments()
  }, [user?.id])

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/patient/dashboard" },
    { label: "My Appointments", icon: <Calendar className="w-5 h-5" />, href: "/patient/appointments" },
    { label: "My Profile", icon: <User className="w-5 h-5" />, href: "/patient/profile" },
    { label: "Payment History", icon: <CreditCard className="w-5 h-5" />, href: "/patient/payments" },
  ]

  const handleCancelAppointment = async (id: string) => {
    try {
      await appointmentService.delete(id)
      setAppointments(appointments.filter((a) => a.id !== id))
    } catch (error) {
      console.error("[v0] Error cancelling appointment:", error)
    }
  }

  const upcomingAppointments = appointments.filter((a) => a.status === "confirmed" && a.status !== "completed")
  const completedAppointments = appointments.filter((a) => a.status === "completed")

  return (
    <MainLayout navItems={navItems} title="My Appointments">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">My Appointments</h2>
          <p className="text-muted-foreground">View appointments scheduled by HR and approved by your dentist</p>
        </div>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>Your scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading...</div>
            ) : upcomingAppointments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No approved appointments yet. HR will schedule appointments that will appear here once your dentist approves them.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{apt.service}</h3>
                        <p className="text-sm text-muted-foreground">with {apt.dentists?.name || "Pending"}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          apt.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : apt.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(apt.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {apt.time}
                      </div>
                    </div>
                    {apt.notes && <p className="text-sm text-muted-foreground mb-3">Note: {apt.notes}</p>}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        <Edit className="w-3 h-3 mr-1" />
                        Reschedule
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-destructive hover:bg-destructive/10 bg-transparent"
                        onClick={() => handleCancelAppointment(apt.id)}
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Completed Appointments */}
        {completedAppointments.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Completed Appointments</CardTitle>
              <CardDescription>Your past dental visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {completedAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="p-4 border border-border rounded-lg opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{apt.service}</h3>
                        <p className="text-sm text-muted-foreground">with {apt.dentists?.name}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(apt.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {apt.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}
