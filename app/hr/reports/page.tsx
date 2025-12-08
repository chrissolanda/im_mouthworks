"use client"

import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Bluetooth as Tooth,
  CreditCard,
  Package,
  BarChart3,
  Settings,
  Download,
  TrendingUp,
} from "lucide-react"
import { mockAppointments, mockPayments } from "@/components/data/mock-data"
import { formatCurrency } from "@/lib/utils"

export default function HRReports() {
  const { user } = useAuth()

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

  const appointmentStats = {
    total: mockAppointments.length,
    completed: mockAppointments.filter((a) => a.status === "completed").length,
    pending: mockAppointments.filter((a) => a.status === "pending").length,
    confirmed: mockAppointments.filter((a) => a.status === "confirmed").length,
  }

  const paymentStats = {
    totalRevenue: mockPayments.filter((p) => p.status === "paid").reduce((sum, p) => sum + p.amount, 0),
    totalPending: mockPayments.filter((p) => p.status === "unpaid").reduce((sum, p) => sum + p.amount, 0),
    totalPartial: mockPayments.filter((p) => p.status === "partial").reduce((sum, p) => sum + p.amount, 0),
  }

  const treatmentCounts = mockAppointments.reduce(
    (acc, apt) => {
      const count = acc[apt.service] || 0
      return { ...acc, [apt.service]: count + 1 }
    },
    {} as Record<string, number>,
  )

  return (
    <MainLayout navItems={navItems} title="Reports & Analytics">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Clinic Reports</h2>
          <p className="text-muted-foreground">View analytics and performance metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{formatCurrency(paymentStats.totalRevenue)}</div>
              <p className="text-xs text-muted-foreground mt-1">Payments received</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{appointmentStats.total}</div>
              <p className="text-xs text-muted-foreground mt-1">{appointmentStats.completed} completed</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{formatCurrency(paymentStats.totalPending)}</div>
              <p className="text-xs text-muted-foreground mt-1">Outstanding balance</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {appointmentStats.total > 0
                  ? Math.round((appointmentStats.completed / appointmentStats.total) * 100)
                  : 0}
                %
              </div>
              <p className="text-xs text-muted-foreground mt-1">Of all appointments</p>
            </CardContent>
          </Card>
        </div>

        {/* Appointment Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Appointment Status Distribution</CardTitle>
            <CardDescription>Breakdown of all appointments by status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              {
                label: "Completed",
                value: appointmentStats.completed,
                color: "bg-green-100",
                textColor: "text-green-700",
              },
              {
                label: "Confirmed",
                value: appointmentStats.confirmed,
                color: "bg-blue-100",
                textColor: "text-blue-700",
              },
              {
                label: "Pending",
                value: appointmentStats.pending,
                color: "bg-yellow-100",
                textColor: "text-yellow-700",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <span className="font-medium text-foreground">{item.label}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${(item.value / appointmentStats.total) * 100}%` }}
                    />
                  </div>
                  <span className={`text-sm font-semibold ${item.textColor}`}>{item.value}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Popular Treatments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Most Popular Treatments
            </CardTitle>
            <CardDescription>Treatment performed most frequently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(treatmentCounts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([treatment, count]) => (
                <div
                  key={treatment}
                  className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{treatment}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(count / Math.max(...Object.values(treatmentCounts))) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-6 text-right">{count}</span>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>Export Reports</CardTitle>
            <CardDescription>Download detailed reports in various formats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { label: "Monthly Summary", type: "PDF" },
                { label: "Revenue Report", type: "CSV" },
                { label: "Appointment Report", type: "Excel" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="p-4 border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-between group"
                >
                  <div className="text-left">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
