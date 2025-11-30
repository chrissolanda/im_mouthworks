"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { patientService, dentistService } from "@/lib/db-service"

interface ScheduleAppointmentModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

interface Patient {
  id: string
  name: string
  email: string
}

interface Dentist {
  id: string
  name: string
  email?: string
}

export default function ScheduleAppointmentModal({ onClose, onSubmit }: ScheduleAppointmentModalProps) {
  const [formData, setFormData] = useState({
    patient_id: "",
    patient_name: "",
    dentist_id: null as string | null,
    dentist_name: "",
    date: "",
    time: "",
    service: "Cleaning",
    notes: "",
  })
  const [patients, setPatients] = useState<Patient[]>([])
  const [dentists, setDentists] = useState<Dentist[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [patientsData, dentistsData] = await Promise.all([patientService.getAll(), dentistService.getAll()])
      setPatients(patientsData || [])
      setDentists(dentistsData || [])
    } catch (err) {
      setError("Failed to load patients and dentists")
      console.error("Error loading data:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePatientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const patientId = e.target.value
    const patient = patients.find((p) => p.id === patientId)
    setFormData((prev) => ({
      ...prev,
      patient_id: patientId,
      patient_name: patient?.name || "",
    }))
  }

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dentistId = e.target.value
    const dentist = dentists.find((d) => d.id === dentistId)
    setFormData((prev) => ({
      ...prev,
      dentist_id: dentistId === "" ? null : dentistId, // Convert empty string to null
      dentist_name: dentist?.name || "",
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.patient_id && formData.date && formData.time) {
      const submitData = {
        patient_id: formData.patient_id,
        dentist_id: formData.dentist_id, // Already null if unassigned
        date: formData.date,
        time: formData.time,
        service: formData.service,
        notes: formData.notes,
        status: "pending",
      }
      console.log("[v0] Submitting appointment data:", submitData, "dentist_id type:", typeof submitData.dentist_id, "dentist_id value:", submitData.dentist_id)
      onSubmit(submitData)
    }
  }

  // Generate available time slots
  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]

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

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-destructive/10 text-destructive text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Patient *</label>
            {loading ? (
              <div className="text-sm text-muted-foreground">Loading patients...</div>
            ) : (
              <select
                name="patient_id"
                value={formData.patient_id}
                onChange={handlePatientChange}
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
            <label className="text-sm font-medium text-foreground">Dentist (Optional)</label>
            <select
              name="dentist_id"
              value={formData.dentist_id || ""}
              onChange={handleDoctorChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="">Unassigned</option>
              {dentists.map((d) => (
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
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
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
            <label className="text-sm font-medium text-foreground">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Time *</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              required
            >
              <option value="">Select time...</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any special notes..."
              className="w-full p-2 border border-border rounded-lg text-sm resize-none bg-background text-foreground"
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" disabled={loading}>
              Schedule
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
