"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, User, CreditCard, CalendarIcon, Clock, Trash2, Edit, Plus, CheckCircle } from "lucide-react"
import { appointmentService, patientService } from "@/lib/db-service"
import PatientBookAppointmentModal from "@/components/modals/patient-book-appointment-modal"

export default function PatientAppointments() {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<any[]>([])
  const [patientId, setPatientId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [showBookModal, setShowBookModal] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!user?.id) {
          setLoading(false)
          return
        }
        
        // First, fetch the patient record to get the patient ID
        const patientData = await patientService.getByEmail(user.email)
        if (patientData?.id) {
          setPatientId(patientData.id)
          const data = await appointmentService.getByPatientId(patientData.id)
          setAppointments(data || [])
        } else {
          console.warn("[v0] Patient record not found for user:", user.email)
          setAppointments([])
        }
      } catch (error) {
        console.error("[v0] Error loading appointments:", error instanceof Error ? error.message : error)
        setAppointments([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [user?.id, user?.email])

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/patient/dashboard" },
    { label: "My Appointments", icon: <Calendar className="w-5 h-5" />, href: "/patient/appointments" },
    { label: "My Profile", icon: <User className="w-5 h-5" />, href: "/patient/profile" },
    { label: "Payment History", icon: <CreditCard className="w-5 h-5" />, href: "/patient/payments" },
  ]

  const handleBookAppointment = async (data: any) => {
    try {
      if (!patientId) {
        alert("Error: Patient record not found. Please contact HR.")
        return
      }
      const newAppointment = await appointmentService.create({
        patient_id: patientId,
        service: data.service,
        date: data.date,
        time: data.time,
        notes: data.notes,
        status: "pending",
      })
      setAppointments([newAppointment, ...appointments])
      setShowBookModal(false)
      setBookingSuccess(true)
      setTimeout(() => setBookingSuccess(false), 5000)
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : JSON.stringify(error)
      console.error("[v0] Error booking appointment:", errorMsg)
      alert(`Error: ${errorMsg}`)
    }
  }

  const handleCancelAppointment = async (id: string) => {
    try {
      await appointmentService.delete(id)
      setAppointments(appointments.filter((a) => a.id !== id))
    } catch (error) {
      console.error("[v0] Error cancelling appointment:", error)
    }
  }

  const pendingBookings = appointments.filter((a) => a.status === "pending")
  const upcomingAppointments = appointments.filter((a) => a.status === "confirmed" && a.status !== "completed")
  const completedAppointments = appointments.filter((a) => a.status === "completed")

  return (
    <MainLayout navItems={navItems} title="My Appointments">
      <div className="space-y-6">
        {/* Header with Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">My Appointments</h2>
            <p className="text-muted-foreground">Book new appointments and view your scheduled visits</p>
          </div>
          <Button
            onClick={() => setShowBookModal(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Plus className="w-4 h-4" />
            Book Appointment
          </Button>
        </div>

        {/* Success Message */}
        {bookingSuccess && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex gap-2 items-start">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">Booking Accepted!</p>
              <p className="text-sm text-green-800">Your appointment request has been submitted. HR will review and assign a dentist, then send it for approval.</p>
            </div>
          </div>
        )}

        {/* Pending Bookings */}
        {pendingBookings.length > 0 && (
          <Card className="border-yellow-200 bg-yellow-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                Pending Review ({pendingBookings.length})
              </CardTitle>
              <CardDescription className="text-yellow-800">
                Your booking requests are being reviewed by HR and a dentist will be assigned
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingBookings.map((apt) => (
                  <div key={apt.id} className="p-4 border border-yellow-300 rounded-lg bg-white">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{apt.service}</h3>
                        <p className="text-sm text-muted-foreground">Awaiting HR assignment and dentist approval</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                        Pending
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs text-destructive hover:bg-destructive/10 bg-transparent"
                      onClick={() => handleCancelAppointment(apt.id)}
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Cancel Request
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

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

      {showBookModal && (
        <PatientBookAppointmentModal
          onClose={() => setShowBookModal(false)}
          onSubmit={handleBookAppointment}
        />
      )}
    </MainLayout>
  )
}
