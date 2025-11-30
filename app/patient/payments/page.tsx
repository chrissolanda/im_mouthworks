"use client"

import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard, Calendar, User, CreditCard, Download, AlertCircle, CheckCircle } from "lucide-react"
import { mockPayments } from "@/components/data/mock-data"

export default function PatientPayments() {
  const { user } = useAuth()
  const [payments] = [mockPayments.filter((p) => p.patientId === user?.id)]

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/patient/dashboard" },
    { label: "My Appointments", icon: <Calendar className="w-5 h-5" />, href: "/patient/appointments" },
    { label: "My Profile", icon: <User className="w-5 h-5" />, href: "/patient/profile" },
    { label: "Payment History", icon: <CreditCard className="w-5 h-5" />, href: "/patient/payments" },
  ]

  const totalPaid = mockPayments
    .filter((p) => p.patientId === user?.id && p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0)
  const totalUnpaid = mockPayments
    .filter((p) => p.patientId === user?.id && p.status === "unpaid")
    .reduce((sum, p) => sum + p.amount, 0)

  return (
    <MainLayout navItems={navItems} title="Payment History">
      <div className="space-y-6">
        {/* Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">${totalPaid.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">All payments received</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">${totalUnpaid.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">Pending payment</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {mockPayments.filter((p) => p.patientId === user?.id).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Payments & invoices</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>All your payments and invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Method</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPayments
                    .filter((p) => p.patientId === user?.id)
                    .map((payment) => (
                      <tr key={payment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 text-sm text-foreground">{payment.date}</td>
                        <td className="py-3 px-4 text-sm text-foreground">{payment.description}</td>
                        <td className="py-3 px-4 text-sm font-semibold text-foreground">
                          ${payment.amount.toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{payment.method}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                              payment.status === "paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            }`}
                          >
                            {payment.status === "paid" ? (
                              <CheckCircle className="w-3 h-3" />
                            ) : (
                              <AlertCircle className="w-3 h-3" />
                            )}
                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-primary hover:text-primary/80 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
