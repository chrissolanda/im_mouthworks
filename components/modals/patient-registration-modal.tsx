"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface PatientRegistrationModalProps {
  onSubmit: (name: string, phone?: string) => Promise<void>
  userEmail: string
}

export default function PatientRegistrationModal({ onSubmit, userEmail }: PatientRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!formData.name.trim()) {
      setError("Please enter your name")
      return
    }

    try {
      setLoading(true)
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
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Welcome to Mouthworks!</h2>
          <p className="text-sm text-muted-foreground mt-1">Complete your profile to get started</p>
        </div>

        {/* Error Message */}
        {error && <div className="p-4 bg-destructive/10 text-destructive text-sm">{error}</div>}

        {/* Form */}
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
              {loading ? "Saving..." : "Complete Profile"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
