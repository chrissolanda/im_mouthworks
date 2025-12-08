"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { treatmentService, dentistService } from "@/lib/db-service"
import { formatCurrency } from "@/lib/utils"

interface BookAppointmentModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function BookAppointmentModal({ onClose, onSubmit }: BookAppointmentModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: "",
    dentist_id: "",
    date: "",
    time: "",
    notes: "",
  })
  const [treatments, setTreatments] = useState<any[]>([])
  const [dentists, setDentists] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [treatmentsData, dentistsData] = await Promise.all([
          treatmentService.getAll().catch(() => []),
          dentistService.getAll().catch(() => []),
        ])
        setTreatments(treatmentsData || [])
        setDentists(dentistsData || [])
      } catch (error) {
        console.error("[v0] Error loading booking data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }))
    setStep(2)
  }

  const handleDentistSelect = (dentistId: string) => {
    setFormData((prev) => ({ ...prev, dentist_id: dentistId }))
    setStep(3)
  }

  const handleDateSelect = (date: string) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }))
    setStep(5)
  }

  const handleSubmit = () => {
    if (formData.service && formData.dentist_id && formData.date && formData.time) {
      onSubmit(formData)
    }
  }

  // Mock available slots - can be replaced with Supabase query
  const availableSlots = [
    { date: "2024-12-08", slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"] },
    { date: "2024-12-09", slots: ["10:00", "11:30", "13:00", "14:30", "16:00"] },
    { date: "2024-12-10", slots: ["09:30", "11:00", "13:30", "15:00"] },
    { date: "2024-12-11", slots: ["09:00", "10:30", "14:00", "16:30"] },
  ]

  const selectedDateSlots = availableSlots.find((s) => s.date === formData.date)?.slots || []
  const selectedDentist = dentists.find((d) => d.id === formData.dentist_id)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Book Appointment</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground mb-3">Select Service</h3>
              {loading ? (
                <div className="text-center py-4 text-muted-foreground">Loading...</div>
              ) : (
                treatments.map((treatment) => (
                  <button
                    key={treatment.id}
                    onClick={() => handleServiceSelect(treatment.name)}
                    className="w-full p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
                  >
                    <p className="font-medium text-foreground">{treatment.name}</p>
                    <p className="text-xs text-muted-foreground">{formatCurrency(treatment.price)}</p>
                  </button>
                ))
              )}
            </div>
          )}

          {/* Step 2: Select Dentist */}
          {step === 2 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground mb-3">Select Doctor</h3>
              {dentists.length === 0 ? (
                <div className="text-center py-4 text-muted-foreground">No doctors available</div>
              ) : (
                dentists.map((dentist) => (
                  <button
                    key={dentist.id}
                    onClick={() => handleDentistSelect(dentist.id)}
                    className="w-full p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
                  >
                    <p className="font-medium text-foreground">Dr. {dentist.name}</p>
                    <p className="text-xs text-muted-foreground">{dentist.specialization}</p>
                  </button>
                ))
              )}
            </div>
          )}

          {/* Step 3: Select Date */}
          {step === 3 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground mb-3">Select Date</h3>
              <div className="space-y-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.date}
                    onClick={() => handleDateSelect(slot.date)}
                    className={`w-full p-3 border rounded-lg transition-colors text-left ${
                      formData.date === slot.date
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <p className="font-medium text-foreground">
                      {new Date(slot.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">{slot.slots.length} slots available</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Select Time */}
          {step === 4 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground mb-3">Select Time</h3>
              <div className="grid grid-cols-3 gap-2">
                {selectedDateSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-2 border rounded-lg transition-colors text-sm font-medium ${
                      formData.time === time
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary text-foreground"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Notes and Confirmation */}
          {step === 5 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground mb-3">Review Booking</h3>
              <div className="bg-muted/50 p-3 rounded-lg space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Service</p>
                  <p className="font-medium text-foreground">{formData.service}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Doctor</p>
                  <p className="font-medium text-foreground">Dr. {selectedDentist?.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Date & Time</p>
                  <p className="font-medium text-foreground">
                    {new Date(formData.date).toLocaleDateString()} at {formData.time}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Add Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any special requests or notes..."
                  className="w-full p-2 border border-border rounded-lg text-sm resize-none"
                  rows={3}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex gap-2">
          {step > 1 && (
            <Button onClick={() => setStep(step - 1)} variant="outline" className="flex-1">
              Back
            </Button>
          )}
          {step < 5 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={
                (step === 1 && !formData.service) ||
                (step === 2 && !formData.dentist_id) ||
                (step === 3 && !formData.date) ||
                (step === 4 && !formData.time)
              }
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Confirm Booking
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
