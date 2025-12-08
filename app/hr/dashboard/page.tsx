"use client"

import { useEffect, useState } from "react"
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
  Plus,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { patientService, appointmentService, paymentService, inventoryService } from "@/lib/db-service"
import { formatCurrency } from "@/lib/utils"

export default function HRDashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalPatients: 0,
    todayAppointments: 0,
    pendingPayments: 0,
    lowStockItems: 0,
  })
  const [todayAppointments, setTodayAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [patients, appointments, payments, inventory] = await Promise.all([
          patientService.getAll().catch(() => []),
          appointmentService.getAll().catch(() => []),
          paymentService.getAll().catch(() => []),
          inventoryService.getAll().catch(() => []),
        ])

        const today = new Date().toISOString().split("T")[0]
        const todayAppts = (appointments || []).filter((a: any) => a.date === today)
        const pendingPaymentsAmount = (payments || [])
          .filter((p: any) => p.status !== "paid")
          .reduce((sum: number, p: any) => sum + (p.amount || 0), 0)
        const lowStockCount = (inventory || []).filter((i: any) => i.status === "low" || i.status === "critical").length

        setStats({
          totalPatients: patients?.length || 0,
          todayAppointments: todayAppts?.length || 0,
          pendingPayments: pendingPaymentsAmount || 0,
          lowStockItems: lowStockCount || 0,
        })
        setTodayAppointments((todayAppts || []).slice(0, 4))
      } catch (error) {
        console.error("[v0] Error loading dashboard:", error instanceof Error ? error.message : error)
        setStats({
          totalPatients: 0,
          todayAppointments: 0,
          pendingPayments: 0,
          lowStockItems: 0,
        })
        setTodayAppointments([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

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

  return (
    <MainLayout navItems={navItems} title="HR/Admin Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}</h1>
          <p className="opacity-90">Manage clinic operations and schedule appointments</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.totalPatients}</div>
              <p className="text-xs text-muted-foreground mt-1">Active patients</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.todayAppointments}</div>
              <p className="text-xs text-muted-foreground mt-1">Scheduled today</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">{formatCurrency(stats.pendingPayments)}</div>
              <p className="text-xs text-muted-foreground mt-1">Unpaid invoices</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{stats.lowStockItems}</div>
              <p className="text-xs text-muted-foreground mt-1">Need restocking</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hr/appointments" className="block">
            <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">New Appointment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Schedule appointment with dentist</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/hr/patients" className="block">
            <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">New Patient</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Register new patient in system</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/hr/payments" className="block">
            <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Record Payment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Log patient payment</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
            <CardDescription>All appointments scheduled for today</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4 text-muted-foreground">Loading...</div>
            ) : todayAppointments.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground">No appointments today</div>
            ) : (
              <div className="space-y-3">
                {todayAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div>
                        <p className="font-medium text-foreground">{apt.patients?.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {apt.time} - {apt.service}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{apt.dentists?.name || "TBD"}</span>
                      {apt.status === "confirmed" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-yellow-600" />
                      )}
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
