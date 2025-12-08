"use client"

import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard, Calendar, Bluetooth as Tooth, BarChart3, Download, DollarSign } from "lucide-react"
import { mockAppointments } from "@/components/data/mock-data"

export default function DentistReports() {
  const { user } = useAuth()

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dentist/dashboard" },
    { label: "My Schedule", icon: <Calendar className="w-5 h-5" />, href: "/dentist/schedule" },
    { label: "Treatments", icon: <Tooth className="w-5 h-5" />, href: "/dentist/treatments" },
    { label: "Earnings", icon: <DollarSign className="w-5 h-5" />, href: "/dentist/earnings" },
    { label: "Reports", icon: <BarChart3 className="w-5 h-5" />, href: "/dentist/reports" },
  ]

  const dentistAppointments = mockAppointments.filter((a) => a.doctorId === user?.id || a.doctorId === "2")
  const completedAppointments = dentistAppointments.filter((a) => a.status === "completed")

  const treatmentCounts = dentistAppointments.reduce(
    (acc, apt) => {
      const count = acc[apt.service] || 0
      return { ...acc, [apt.service]: count + 1 }
    },
    {} as Record<string, number>,
  )

  const appointmentsByService = dentistAppointments.reduce(
    (acc, apt) => {
      const count = acc[apt.service] || 0
      return { ...acc, [apt.service]: count + 1 }
    },
    {} as Record<string, number>,
  )

  const completedCount = completedAppointments.length
  const totalAppointments = dentistAppointments.length
  const completionRate = totalAppointments > 0 ? Math.round((completedCount / totalAppointments) * 100) : 0

  return (
    <MainLayout navItems={navItems} title="Reports">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">My Reports</h2>
          <p className="text-muted-foreground">View statistics and performance reports</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{totalAppointments}</div>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{completedCount}</div>
              <p className="text-xs text-muted-foreground mt-1">{completionRate}% completion rate</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">
                {dentistAppointments.filter((a) => a.status === "pending").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Confirmed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {dentistAppointments.filter((a) => a.status === "confirmed").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Ready to perform</p>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Distribution */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Treatment Distribution</CardTitle>
                <CardDescription>Breakdown of treatments performed</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(treatmentCounts)
                .sort((a, b) => b[1] - a[1])
                .map(([service, count]) => (
                  <div key={service} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{service}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(count / totalAppointments) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-foreground w-8 text-right">{count}</span>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
            <CardDescription>Appointments by month (last 6 months)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {["November", "October", "September", "August", "July", "June"].map((month, i) => (
                <div key={month} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <p className="font-medium text-foreground">{month} 2024</p>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: `${60 - i * 5}%` }} />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-8 text-right">{6 - i}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Download Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Export Reports</CardTitle>
            <CardDescription>Download detailed reports in different formats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="p-3 border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">PDF Report</span>
              </button>
              <button className="p-3 border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">CSV Export</span>
              </button>
              <button className="p-3 border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Excel Sheet</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
