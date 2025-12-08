"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Calendar, CheckCircle2 } from "lucide-react"

interface PatientRegistrationModalProps {
  onSubmit: (name: string, phone?: string) => Promise<void>
  userEmail: string
}

interface Appointment {
  id: string
  date: string
  time: string
  service: string
  status: string
  dentists?: { name: string }
}

export default function PatientRegistrationModal({ onSubmit, userEmail }: PatientRegistrationModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  
  const goToDashboard = () => {
    try {
      router.replace("/patient/dashboard")
    } catch (e) {
      try {
        window.location.href = "/patient/dashboard"
      } catch (err) {
        // no-op
      }
    }
    setTimeout(() => {
      if (typeof window !== "undefined" && window.location.pathname !== "/patient/dashboard") {
        window.location.href = "/patient/dashboard"
      }
    }, 500)
  }
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [existingAppointments, setExistingAppointments] = useState<Appointment[] | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setExistingAppointments(null)

    if (!formData.name.trim()) {
      setError("Please enter your name")
      return
    }

    try {
      setLoading(true)

      // Check if patient with this name already exists
      const { patientService, appointmentService } = await import("@/lib/db-service")
      const existingPatient = await patientService.getByName(formData.name)

      if (existingPatient) {
        // Patient exists - fetch their appointments
        const appointments = await appointmentService.getByPatientId(existingPatient.id)
        
        if (appointments && appointments.length > 0) {
          // Show existing appointments
          setExistingAppointments(appointments)
          setError(null)
          return
        } else {
          // Patient exists but no appointments - show error
          throw new Error(`Patient with name '${formData.name}' already exists. Please use a different name.`)
        }
      }

      // New patient - proceed with registration
      await onSubmit(formData.name, formData.phone)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to save profile"
      setError(errorMsg)
      console.error("[v0] Error in patient registration:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border sticky top-0 bg-card flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {existingAppointments ? "Your Appointments" : "Welcome to Mouthworks!"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {existingAppointments
                ? "Here are your scheduled appointments"
                : "Complete your profile to get started"}
            </p>
          </div>
          <div className="ml-4">
            <button aria-label="Close" onClick={goToDashboard} className="p-2 rounded-md hover:bg-muted/50">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-destructive/10 text-destructive text-sm border-b border-border">
            {error}
          </div>
        )}

        {/* Existing Appointments Display */}
        {existingAppointments && existingAppointments.length > 0 ? (
          <div className="p-6 space-y-4">
            {existingAppointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{apt.service}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      {new Date(apt.date).toLocaleDateString()} at {apt.time}
                    </p>
                    {apt.dentists && (
                      <p className="text-sm text-muted-foreground">
                        Dr. {apt.dentists.name}
                      </p>
                    )}
                    <p className="text-xs mt-2 px-2 py-1 bg-muted rounded-full inline-block">
                      {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={goToDashboard} className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              Go to Dashboard
            </Button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                value={userEmail}
                disabled
                className="w-full px-3 py-2 border border-border rounded-lg bg-muted text-foreground cursor-not-allowed"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 234-567-8900"
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {loading ? "Checking..." : "Complete Profile"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
