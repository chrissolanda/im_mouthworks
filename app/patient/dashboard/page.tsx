"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, CreditCard, LayoutDashboard, User } from "lucide-react"
import Link from "next/link"
import { appointmentService, paymentService } from "@/lib/db-service"

export default function PatientDashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    upcomingCount: 0,
    outstandingBalance: 0,
    lastVisit: "",
  })
  const [recentAppointments, setRecentAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!user?.id) return

        const appointments = await appointmentService.getByPatientId(user.id)
        const payments = await paymentService.getByPatientId(user.id)

        // Calculate stats
        const upcoming = appointments.filter((a: any) => a.status !== "completed").length
        const outstandingBalance = payments
          .filter((p: any) => p.status !== "paid")
          .reduce((sum: number, p: any) => sum + (p.amount || 0), 0)

        const completed = appointments.filter((a: any) => a.status === "completed")
        const lastVisit = completed.length > 0 ? new Date(completed[0].date).toLocaleDateString() : "No visits yet"

        setStats({ upcomingCount: upcoming, outstandingBalance, lastVisit })
        setRecentAppointments(appointments.slice(0, 3))
      } catch (error) {
        console.error("[v0] Error loading dashboard:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [user?.id])

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/patient/dashboard" },
    { label: "My Appointments", icon: <Calendar className="w-5 h-5" />, href: "/patient/appointments" },
    { label: "My Profile", icon: <User className="w-5 h-5" />, href: "/patient/profile" },
    { label: "Payment History", icon: <CreditCard className="w-5 h-5" />, href: "/patient/payments" },
  ]

  return (
    <MainLayout navItems={navItems} title="Patient Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="opacity-90">Manage your dental appointments and health records</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.upcomingCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Scheduled appointments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">${stats.outstandingBalance.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">Pending payments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Last Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{stats.lastVisit}</div>
              <p className="text-xs text-muted-foreground mt-1">Most recent visit</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/patient/appointments" className="block">
            <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Book Appointment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Schedule your next dental visit</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/patient/payments" className="block">
            <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Payment Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">View and manage your payments</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
            <CardDescription>Your last 3 appointments</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4 text-muted-foreground">Loading...</div>
            ) : recentAppointments.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground">No appointments yet</div>
            ) : (
              <div className="space-y-4">
                {recentAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{apt.service}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(apt.date).toLocaleDateString()} at {apt.time}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{apt.dentists?.name || "TBD"}</p>
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
