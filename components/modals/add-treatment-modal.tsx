"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { mockPatients } from "@/components/data/mock-data"

interface AddTreatmentModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function AddTreatmentModal({ onClose, onSubmit }: AddTreatmentModalProps) {
  const [formData, setFormData] = useState({
    patientId: "",
    patientName: "",
    appointmentId: "",
    treatment: "",
    description: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePatientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const patientId = e.target.value
    const patient = mockPatients.find((p) => p.id === patientId)
    setFormData((prev) => ({
      ...prev,
      patientId,
      patientName: patient?.name || "",
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.patientId && formData.treatment && formData.description) {
      onSubmit(formData)
      setFormData({ patientId: "", patientName: "", appointmentId: "", treatment: "", description: "", notes: "" })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">Record Treatment</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Patient</label>
            <select
              name="patientId"
              value={formData.patientId}
              onChange={handlePatientChange}
              className="w-full px-3 py-2 border border-border rounded-lg"
              required
            >
              <option value="">Select patient...</option>
              {mockPatients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Treatment Type</label>
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg"
              required
            >
              <option value="">Select treatment...</option>
              <option>Cleaning</option>
              <option>Filling</option>
              <option>Extraction</option>
              <option>Root Canal</option>
              <option>Whitening</option>
              <option>Check-up</option>
              <option>Scaling</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Detailed treatment description..."
              className="w-full p-2 border border-border rounded-lg text-sm resize-none"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Additional notes or recommendations..."
              className="w-full p-2 border border-border rounded-lg text-sm resize-none"
              rows={2}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Save Treatment
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
