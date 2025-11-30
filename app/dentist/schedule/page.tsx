"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  Bluetooth as Tooth,
  BarChart3,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { mockAppointments } from "@/components/data/mock-data"
import AppointmentApprovalModal from "@/components/modals/appointment-approval-modal"

export default function DentistSchedule() {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState(mockAppointments)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showApprovalModal, setShowApprovalModal] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null)

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dentist/dashboard" },
    { label: "My Schedule", icon: <Calendar className="w-5 h-5" />, href: "/dentist/schedule" },
    { label: "Treatments", icon: <Tooth className="w-5 h-5" />, href: "/dentist/treatments" },
    { label: "Reports", icon: <BarChart3 className="w-5 h-5" />, href: "/dentist/reports" },
  ]

  const handleApproveAppointment = (id: string) => {
    setAppointments(appointments.map((a) => (a.id === id ? { ...a, status: "confirmed" } : a)))
  }

  const handleRejectAppointment = (id: string, reason: string) => {
    setAppointments(appointments.map((a) => (a.id === id ? { ...a, status: "rejected", notes: reason } : a)))
  }

  const handleCompleteAppointment = (id: string) => {
    setAppointments(appointments.map((a) => (a.id === id ? { ...a, status: "completed" } : a)))
  }

  const handleViewDetails = (appointment: any) => {
    setSelectedAppointment(appointment)
    setShowApprovalModal(true)
  }

  // Get appointments for the dentist
  const dentistAppointments = appointments.filter((a) => a.doctorId === user?.id || a.doctorId === "2")

  // Group appointments by date
  const getDateAppointments = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0]
    return dentistAppointments.filter((a) => a.date === dateStr)
  }

  const todayAppointments = getDateAppointments(selectedDate)
  const pendingAppointments = dentistAppointments.filter((a) => a.status === "pending")
  const confirmedAppointments = dentistAppointments.filter((a) => a.status === "confirmed")

  const previousDay = () => {
    setSelectedDate(new Date(selectedDate.getTime() - 86400000))
  }

  const nextDay = () => {
    setSelectedDate(new Date(selectedDate.getTime() + 86400000))
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
  }

  return (
    <MainLayout navItems={navItems} title="My Schedule">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Your Dental Schedule</h2>
          <p className="text-muted-foreground">View, approve, and manage your appointments</p>
        </div>

        {/* Date Navigation */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div>
              <CardTitle>Daily Schedule</CardTitle>
              <CardDescription>{formatDate(selectedDate)}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={previousDay} className="p-2 hover:bg-muted rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedDate(new Date())}
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm font-medium"
              >
                Today
              </button>
              <button onClick={nextDay} className="p-2 hover:bg-muted rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            {todayAppointments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No appointments scheduled for this date</p>
              </div>
            ) : (
              <div className="space-y-3">
                {todayAppointments.map((apt) => (
                  <div key={apt.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{apt.patientName}</p>
                        <p className="text-sm text-muted-foreground">{apt.service}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          apt.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : apt.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : apt.status === "completed"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-red-100 text-red-700"
                        }`}
                      >
                        {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {apt.time}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs bg-transparent"
                          onClick={() => handleViewDetails(apt)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Details
                        </Button>
                        {apt.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApproveAppointment(apt.id)}
                              className="bg-green-600 hover:bg-green-700 text-white text-xs"
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleViewDetails(apt)}
                              variant="outline"
                              className="text-xs text-destructive hover:bg-destructive/10"
                            >
                              <XCircle className="w-3 h-3 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                        {apt.status === "confirmed" && (
                          <Button
                            size="sm"
                            onClick={() => handleCompleteAppointment(apt.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        {pendingAppointments.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                Pending Approvals ({pendingAppointments.length})
              </CardTitle>
              <CardDescription>Appointments awaiting your decision</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingAppointments.map((apt) => (
                  <div key={apt.id} className="p-4 border border-yellow-200 bg-yellow-50/50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-foreground">{apt.patientName}</p>
                        <p className="text-sm text-muted-foreground">{apt.service}</p>
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {apt.date} at {apt.time}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleApproveAppointment(apt.id)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        onClick={() => handleViewDetails(apt)}
                        variant="outline"
                        className="flex-1 text-destructive hover:bg-destructive/10"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{pendingAppointments.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting your action</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Confirmed Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {todayAppointments.filter((a) => a.status === "confirmed").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Scheduled for today</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{dentistAppointments.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Total appointments</p>
            </CardContent>
          </Card>
        </div>

        {/* Confirmed Appointments */}
        {confirmedAppointments.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Confirmed Appointments ({confirmedAppointments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {confirmedAppointments.slice(0, 5).map((apt) => (
                  <div
                    key={apt.id}
                    className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-foreground">{apt.patientName}</p>
                      <p className="text-sm text-muted-foreground">
                        {apt.date} at {apt.time} - {apt.service}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleCompleteAppointment(apt.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Complete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {showApprovalModal && selectedAppointment && (
        <AppointmentApprovalModal
          appointment={selectedAppointment}
          onClose={() => setShowApprovalModal(false)}
          onApprove={() => {
            handleApproveAppointment(selectedAppointment.id)
            setShowApprovalModal(false)
          }}
          onReject={(reason) => {
            handleRejectAppointment(selectedAppointment.id, reason)
            setShowApprovalModal(false)
          }}
        />
      )}
    </MainLayout>
  )
}
