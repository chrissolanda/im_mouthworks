"use client"

import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, Bluetooth as Tooth, BarChart3, CheckCircle, XCircle } from "lucide-react"

export default function DentistDashboard() {
  const { user } = useAuth()

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dentist/dashboard" },
    { label: "My Schedule", icon: <Calendar className="w-5 h-5" />, href: "/dentist/schedule" },
    { label: "Treatments", icon: <Tooth className="w-5 h-5" />, href: "/dentist/treatments" },
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
              <div className="text-3xl font-bold text-primary">4</div>
              <p className="text-xs text-muted-foreground mt-1">All confirmed</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">2</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting action</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">18</div>
              <p className="text-xs text-muted-foreground mt-1">Total appointments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">3</div>
              <p className="text-xs text-muted-foreground mt-1">6 remaining</p>
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
            <div className="space-y-3">
              {[
                { patient: "Robert Brown", date: "Dec 8, 2024", time: "10:00 AM", service: "Extraction" },
                { patient: "Sarah Wilson", date: "Dec 12, 2024", time: "2:30 PM", service: "Root Canal" },
              ].map((apt, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{apt.patient.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{apt.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {apt.date} at {apt.time} - {apt.service}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-destructive text-destructive hover:bg-destructive/10 bg-transparent"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your confirmed appointments for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { patient: "Alice Smith", time: "10:30 AM", service: "Cleaning", status: "completed" },
                { patient: "Bob Jones", time: "11:00 AM", service: "Check-up", status: "in-progress" },
                { patient: "Carol Davis", time: "1:00 PM", service: "Filling", status: "upcoming" },
                { patient: "David Miller", time: "2:30 PM", service: "Cleaning", status: "upcoming" },
              ].map((apt, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{apt.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {apt.time} - {apt.service}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {apt.status === "completed" && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Completed</span>
                    )}
                    {apt.status === "in-progress" && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">In Progress</span>
                    )}
                    {apt.status === "upcoming" && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Upcoming</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
