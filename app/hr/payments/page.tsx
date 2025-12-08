"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  Trash2,
  Search,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { paymentService, patientService } from "@/lib/db-service"
import { formatCurrency } from "@/lib/utils"
import RecordPaymentModal from "@/components/modals/record-payment-modal"

interface EditingPaymentId {
  id: string | null
  field: string | null
}

interface Payment {
  id: string
  patient_id: string
  dentist_id?: string
  amount: number
  method: string
  status: "paid" | "partial" | "unpaid"
  date?: string
  description?: string
  patients?: { name: string; email: string }
  dentists?: { name: string }
}

export default function HRPayments() {
  const { user } = useAuth()
  const [payments, setPayments] = useState<Payment[]>([])
  const [patients, setPatients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showRecordModal, setShowRecordModal] = useState(false)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editField, setEditField] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [paymentsData, patientsData] = await Promise.all([paymentService.getAll(), patientService.getAll()])
      setPayments(paymentsData || [])
      setPatients(patientsData || [])
    } catch (error) {
      console.error("[v0] Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }

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

  const handleRecordPayment = async (data: any) => {
    try {
      const newPayment = await paymentService.create(data)
      setPayments([newPayment, ...payments])
      setShowRecordModal(false)
    } catch (error) {
      console.error("[v0] Error recording payment:", error)
      alert("Error recording payment: " + (error instanceof Error ? error.message : "Unknown error"))
    }
  }

  const handleDeletePayment = async (id: string) => {
    if (confirm("Are you sure you want to delete this payment record?")) {
      try {
        await paymentService.delete(id)
        setPayments(payments.filter((p) => p.id !== id))
      } catch (error) {
        console.error("[v0] Error deleting payment:", error)
        alert("Error deleting payment: " + (error instanceof Error ? error.message : "Unknown error"))
      }
    }
  }

  const handleEditPayment = async (id: string, field: string, value: any) => {
    try {
      const updatedPayment = await paymentService.update(id, { [field]: value })
      setPayments(payments.map((p) => (p.id === id ? updatedPayment : p)))
      setEditingId(null)
      setEditField(null)
      setEditValue("")
    } catch (error) {
      console.error("[v0] Error updating payment:", error)
      alert("Error updating payment: " + (error instanceof Error ? error.message : "Unknown error"))
    }
  }

  const filteredPayments = payments.filter((p) => {
    const matchesFilter = filter === "all" || p.status === filter
    const patient = patients.find((pt) => pt.id === p.patient_id)
    const matchesSearch =
      patient?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const totalPaid = payments.filter((p) => p.status === "paid").reduce((sum, p) => sum + p.amount, 0)
  const totalPartial = payments.filter((p) => p.status === "partial").reduce((sum, p) => sum + p.amount, 0)
  const totalUnpaid = payments.filter((p) => p.status === "unpaid").reduce((sum, p) => sum + p.amount, 0)

  const paymentStats = {
    paid: payments.filter((p) => p.status === "paid").length,
    partial: payments.filter((p) => p.status === "partial").length,
    unpaid: payments.filter((p) => p.status === "unpaid").length,
  }

  return (
    <MainLayout navItems={navItems} title="Payment Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Payment Tracking</h2>
            <p className="text-muted-foreground">Record and manage patient payments</p>
          </div>
          <Button
            onClick={() => setShowRecordModal(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Plus className="w-4 h-4" />
            Record Payment
          </Button>
        </div>

        {/* Payment Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{formatCurrency(totalPaid)}</div>
              <p className="text-xs text-muted-foreground mt-1">{paymentStats.paid} payments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Partial Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{formatCurrency(totalPartial)}</div>
              <p className="text-xs text-muted-foreground mt-1">{paymentStats.partial} payments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Unpaid Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">{formatCurrency(totalUnpaid)}</div>
              <p className="text-xs text-muted-foreground mt-1">{paymentStats.unpaid} unpaid</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{formatCurrency(totalPaid + totalPartial)}</div>
              <p className="text-xs text-muted-foreground mt-1">Received so far</p>
            </CardContent>
          </Card>
        </div>

        {/* Search & Filter */}
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by patient name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border"
              />
            </div>

            <div className="flex gap-2">
              {["all", "paid", "partial", "unpaid"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    filter === status
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Records</CardTitle>
            <CardDescription>{filteredPayments.length} payment(s) found</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Patient</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Dentist</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Method</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-muted-foreground">
                        No payments found
                      </td>
                    </tr>
                  ) : (
                    filteredPayments.map((payment) => {
                      const patient = patients.find((p) => p.id === payment.patient_id)
                      return (
                        <tr key={payment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {payment.date ? new Date(payment.date).toLocaleDateString() : "-"}
                          </td>
                          <td className="py-3 px-4 text-sm font-medium text-foreground">
                            {patient?.name || "Unknown"}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{payment.dentists?.name || "-"}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{payment.description || "-"}</td>
                          <td className="py-3 px-4 text-sm font-semibold text-foreground">
                            {formatCurrency(payment.amount)}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{payment.method || "-"}</td>
                          <td className="py-3 px-4">
                            {editingId === payment.id && editField === "status" ? (
                              <select
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onBlur={() => handleEditPayment(payment.id, "status", editValue)}
                                className="px-2 py-1 border border-border rounded text-xs bg-background text-foreground"
                                autoFocus
                              >
                                <option value="paid">Paid</option>
                                <option value="partial">Partial</option>
                                <option value="unpaid">Unpaid</option>
                              </select>
                            ) : (
                              <button
                                onClick={() => {
                                  setEditingId(payment.id)
                                  setEditField("status")
                                  setEditValue(payment.status)
                                }}
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity ${
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
                              </button>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => handleDeletePayment(payment.id)}
                              className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                              title="Delete payment"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {loading ? (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-muted-foreground">Loading payments...</div>
          </CardContent>
        </Card>
      ) : (
        <>
          {showRecordModal && (
            <RecordPaymentModal onClose={() => setShowRecordModal(false)} onSubmit={handleRecordPayment} />
          )}
        </>
      )}
    </MainLayout>
  )
}
