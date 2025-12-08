"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Copy, Check } from "lucide-react"
import { authService } from "@/lib/auth-service"

interface AddPatientModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function AddPatientModal({ onClose, onSubmit }: AddPatientModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    address: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [createAuthAccount, setCreateAuthAccount] = useState(true)
  const [generatedPassword, setGeneratedPassword] = useState<string | null>(null)
  const [passwordCopied, setPasswordCopied] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%"
    let password = ""
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields")
      return
    }
    setLoading(true)
    try {
      let password: string | null = null

      // If creating auth account, generate password and create Supabase Auth account
      if (createAuthAccount) {
        password = generatePassword()
        setGeneratedPassword(password)
        
        try {
          await authService.signUp(formData.email, password, formData.name, "patient")
        } catch (authErr) {
          const errMsg = authErr instanceof Error ? authErr.message : String(authErr)
          // If account already exists, that's okay - we'll just create the patient record
          if (!errMsg.toLowerCase().includes("already")) {
            throw authErr
          }
        }
      }

      // Create patient record
      await onSubmit(formData)
      
      // Clear form but keep password visible if created
      setFormData({ name: "", email: "", phone: "", dob: "", gender: "Male", address: "" })
      
      // Only close modal if no password was generated (or show password info)
      if (!password) {
        onClose()
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to add patient"
      setError(message)
      console.error("Add patient error:", err)
      setGeneratedPassword(null)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword)
      setPasswordCopied(true)
      setTimeout(() => setPasswordCopied(false), 2000)
    }
  }

  // If password was generated, show password info screen
  if (generatedPassword) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-lg shadow-2xl max-w-md w-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">Patient Account Created</h2>
            <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                ✓ Patient and login account created successfully
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <div className="p-3 bg-muted rounded-lg text-sm text-foreground font-mono">{formData.email}</div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Temporary Password</label>
              <div className="flex gap-2">
                <div className="flex-1 p-3 bg-muted rounded-lg text-sm text-foreground font-mono break-all">{generatedPassword}</div>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={copyToClipboard}
                  className="flex-shrink-0"
                >
                  {passwordCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-sm text-blue-700 dark:text-blue-400">
              <strong>Note:</strong> Share this password with the patient. They should change it on first login.
            </div>

            <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Done
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Add New Patient</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Full Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Phone</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 234-567-8900"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Date of Birth</label>
            <Input name="dob" type="date" value={formData.dob} onChange={handleInputChange} className="border-border" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Address</label>
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="123 Main St, City, State"
              className="border-border"
            />
          </div>

          <div className="flex items-center gap-2 py-2">
            <input
              type="checkbox"
              id="createAuth"
              checked={createAuthAccount}
              onChange={(e) => setCreateAuthAccount(e.target.checked)}
              className="rounded border-border"
            />
            <label htmlFor="createAuth" className="text-sm text-foreground cursor-pointer">
              Create login account (auto-generate password)
            </label>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              {loading ? "Adding..." : "Add Patient"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
