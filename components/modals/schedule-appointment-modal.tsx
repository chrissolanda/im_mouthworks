"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { mockPatients, mockDentists, mockAvailableSlots } from "@/components/data/mock-data"

interface ScheduleAppointmentModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function ScheduleAppointmentModal({ onClose, onSubmit }: ScheduleAppointmentModalProps) {
  const [formData, setFormData] = useState({
    patientId: "",
    patientName: "",
    doctorId: "",
    doctorName: "",
    date: "",
    time: "",
    service: "Cleaning",
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

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const doctorId = e.target.value
    const doctor = mockDentists.find((d) => d.id === doctorId)
    setFormData((prev) => ({
      ...prev,
      doctorId,
      doctorName: doctor?.name || "",
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.patientId && formData.doctorId && formData.date && formData.time) {
      onSubmit({
        ...formData,
        status: "pending",
      })
    }
  }

  const selectedDateSlots = mockAvailableSlots.find((s) => s.date === formData.date)?.slots || []

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">Schedule Appointment</h2>
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
            <label className="text-sm font-medium text-foreground">Dentist</label>
            <select
              name="doctorId"
              value={formData.doctorId}
              onChange={handleDoctorChange}
              className="w-full px-3 py-2 border border-border rounded-lg"
              required
            >
              <option value="">Select dentist...</option>
              {mockDentists.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg"
            >
              <option>Cleaning</option>
              <option>Check-up</option>
              <option>Extraction</option>
              <option>Filling</option>
              <option>Root Canal</option>
              <option>Whitening</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Date</label>
            <select
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg"
              required
            >
              <option value="">Select date...</option>
              {mockAvailableSlots.map((slot) => (
                <option key={slot.date} value={slot.date}>
                  {new Date(slot.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </option>
              ))}
            </select>
          </div>

          {formData.date && selectedDateSlots.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg"
                required
              >
                <option value="">Select time...</option>
                {selectedDateSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any special notes..."
              className="w-full p-2 border border-border rounded-lg text-sm resize-none"
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
