"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard, Calendar, User, CreditCard, Download, AlertCircle, CheckCircle, DollarSign } from "lucide-react"
import { paymentService } from "@/lib/db-service"

interface Payment {
  id: string
  patient_id: string
  dentist_id?: string
  amount: number
  method: string
  status: "paid" | "partial" | "unpaid"
  date?: string
  description?: string
  dentists?: { name: string }
}

export default function PatientPayments() {
  const { user } = useAuth()
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState({ totalBalance: 0, totalPaid: 0, total: 0 })

  useEffect(() => {
    if (user?.id) {
      loadPayments()
    }
  }, [user?.id])

  const loadPayments = async () => {
    try {
      setLoading(true)
      const data = await paymentService.getByPatientId(user?.id || "")
      const balanceData = await paymentService.getPatientBalance(user?.id || "")
      setPayments(data || [])
      setBalance(balanceData || { totalBalance: 0, totalPaid: 0, total: 0 })
    } catch (error) {
      console.error("[v0] Error loading payments:", error instanceof Error ? error.message : error)
      setPayments([])
      setBalance({ totalBalance: 0, totalPaid: 0, total: 0 })
    } finally {
      setLoading(false)
    }
  }

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/patient/dashboard" },
    { label: "My Appointments", icon: <Calendar className="w-5 h-5" />, href: "/patient/appointments" },
    { label: "My Profile", icon: <User className="w-5 h-5" />, href: "/patient/profile" },
    { label: "Payment History", icon: <CreditCard className="w-5 h-5" />, href: "/patient/payments" },
  ]

  return (
    <MainLayout navItems={navItems} title="Payment History">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Payment History</h2>
          <p className="text-muted-foreground">View your payments and outstanding balance</p>
        </div>

        {/* Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow border-l-4 border-l-green-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Total Paid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">${balance.totalPaid.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">All payments received</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-l-4 border-l-destructive">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-destructive" />
                Outstanding Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">${balance.totalBalance.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">Pending payment</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{payments.length}</div>
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
            {loading ? (
              <div className="text-center text-muted-foreground py-8">Loading payment history...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Dentist</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Method</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-muted-foreground">
                          No payment history
                        </td>
                      </tr>
                    ) : (
                      payments.map((payment) => (
                        <tr key={payment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-sm text-foreground">
                            {payment.date ? new Date(payment.date).toLocaleDateString() : "-"}
                          </td>
                          <td className="py-3 px-4 text-sm text-foreground">{payment.description || "-"}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{payment.dentists?.name || "-"}</td>
                          <td className="py-3 px-4 text-sm font-semibold text-foreground">
                            ${payment.amount.toFixed(2)}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{payment.method || "-"}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                                payment.status === "paid"
                                  ? "bg-green-100 text-green-700"
                                  : payment.status === "partial"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
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
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
