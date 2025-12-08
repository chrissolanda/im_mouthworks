"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, AlertCircle } from "lucide-react"
import { treatmentService } from "@/lib/db-service"
import { formatCurrency } from "@/lib/utils"

interface PatientBookAppointmentModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function PatientBookAppointmentModal({ onClose, onSubmit }: PatientBookAppointmentModalProps) {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    notes: "",
  })
  const [treatments, setTreatments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadTreatments = async () => {
      try {
        const data = await treatmentService.getAll().catch(() => [])
        setTreatments(data || [])
      } catch (err) {
        console.error("[v0] Error loading treatments:", err)
        setError("Failed to load available services")
      } finally {
        setLoading(false)
      }
    }

    loadTreatments()
  }, [])

  const handleSubmit = () => {
    if (!formData.service || !formData.date || !formData.time) {
      setError("Please fill in all required fields")
      return
    }

    onSubmit({
      service: formData.service,
      date: formData.date,
      time: formData.time,
      notes: formData.notes,
      status: "pending",
    })
  }

  // Mock available dates and slots - can be enhanced later
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() + i)
      dates.push(date.toISOString().split("T")[0])
    }
    return dates
  }

  const availableDates = generateAvailableDates()
  const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Book an Appointment</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg flex gap-2">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Service Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Service <span className="text-destructive">*</span>
            </label>
            {loading ? (
              <div className="text-center py-4 text-muted-foreground text-sm">Loading services...</div>
            ) : treatments.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground text-sm">No services available</div>
            ) : (
              <select
                value={formData.service}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, service: e.target.value }))
                  setError("")
                }}
                className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service...</option>
                {treatments.map((treatment) => (
                  <option key={treatment.id} value={treatment.name}>
                      {treatment.name} {treatment.price ? `- ${formatCurrency(treatment.price)}` : ""}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Preferred Date <span className="text-destructive">*</span>
            </label>
            <select
              value={formData.date}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, date: e.target.value }))
                setError("")
              }}
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a date...</option>
              {availableDates.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Preferred Time <span className="text-destructive">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, time }))
                    setError("")
                  }}
                  className={`p-2 border rounded-lg transition-colors text-sm font-medium ${
                    formData.time === time
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary text-foreground hover:bg-muted"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">Additional Notes (Optional)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
              placeholder="Any special requests or concerns..."
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            />
          </div>

          {/* Summary */}
          {formData.service && formData.date && formData.time && (
            <div className="bg-muted/50 p-3 rounded-lg space-y-2 text-sm">
              <p className="text-muted-foreground">Booking Summary:</p>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">Service:</span> {formData.service}
                </p>
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(formData.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {formData.time}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex gap-2">
          <Button onClick={onClose} variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!formData.service || !formData.date || !formData.time}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  )
}
