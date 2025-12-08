"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { patientService, dentistService } from "@/lib/db-service"

interface RecordPaymentModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

interface Patient {
  id: string
  name: string
}

interface Dentist {
  id: string
  name: string
}

export default function RecordPaymentModal({ onClose, onSubmit }: RecordPaymentModalProps) {
  const [formData, setFormData] = useState({
    patient_id: "",
    dentist_id: "",
    amount: "",
    method: "Cash",
    status: "paid",
    description: "",
  })
  const [patients, setPatients] = useState<Patient[]>([])
  const [dentists, setDentists] = useState<Dentist[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [patientsData, dentistsData] = await Promise.all([patientService.getAll(), dentistService.getAll()])
      setPatients(patientsData || [])
      setDentists(dentistsData || [])
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.patient_id && formData.amount && formData.description && formData.dentist_id) {
      onSubmit({
        patient_id: formData.patient_id,
        dentist_id: formData.dentist_id,
        amount: Number.parseFloat(formData.amount),
        method: formData.method,
        status: formData.status,
        description: formData.description,
        date: new Date().toISOString().split("T")[0],
      })
      setFormData({ patient_id: "", dentist_id: "", amount: "", method: "Cash", status: "paid", description: "" })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">Record Payment</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Patient *</label>
            {loading ? (
              <div className="text-sm text-muted-foreground">Loading...</div>
            ) : (
              <select
                name="patient_id"
                value={formData.patient_id}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                required
              >
                <option value="">Select patient...</option>
                {patients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Dentist *</label>
            {loading ? (
              <div className="text-sm text-muted-foreground">Loading...</div>
            ) : (
              <select
                name="dentist_id"
                value={formData.dentist_id}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                required
              >
                <option value="">Select dentist...</option>
                {dentists.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Amount (₱) *</label>
            <Input
              name="amount"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="0.00"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Payment Method</label>
            <select
              name="method"
              value={formData.method}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option>Cash</option>
              <option>Bank Transfer</option>
              <option>Credit Card</option>
              <option>Check</option>
              <option>Insurance</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="paid">Paid</option>
              <option value="partial">Partial</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="e.g., Cleaning - Dec 5, 2024"
              className="w-full p-2 border border-border rounded-lg text-sm resize-none bg-background text-foreground"
              rows={2}
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={loading}
            >
              Record Payment
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
