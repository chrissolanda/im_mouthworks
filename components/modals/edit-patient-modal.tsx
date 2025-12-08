"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Eye, EyeOff } from "lucide-react"

interface EditPatientModalProps {
  patient: any
  onClose: () => void
  onSubmit: (data: any) => Promise<void>
}

export default function EditPatientModal({ patient, onClose, onSubmit }: EditPatientModalProps) {
  const [formData, setFormData] = useState({
    name: patient.name || "",
    email: patient.email || "",
    phone: patient.phone || "",
    dob: patient.dob || "",
    gender: patient.gender || "",
    address: patient.address || "",
  })

  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile")

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      // Validate required fields
      if (!formData.name || !formData.email) {
        throw new Error("Name and email are required")
      }

      await onSubmit({
        type: "profile",
        data: formData,
      })

      setSuccess("Profile updated successfully")
      setTimeout(onClose, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      // Validate passwords
      if (!passwordData.newPassword) {
        throw new Error("Please enter a new password")
      }

      if (passwordData.newPassword.length < 6) {
        throw new Error("Password must be at least 6 characters")
      }

      if (passwordData.newPassword !== passwordData.confirmPassword) {
        throw new Error("Passwords do not match")
      }

      await onSubmit({
        type: "password",
        data: {
          email: patient.email,
          newPassword: passwordData.newPassword,
        },
      })

      setSuccess("Password updated successfully")
      setPasswordData({ newPassword: "", confirmPassword: "" })
      setTimeout(onClose, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">Edit Patient</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border px-6 pt-4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "profile" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "password" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Password
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Alert Messages */}
          {error && <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">{error}</div>}
          {success && <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-sm">{success}</div>}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <form onSubmit={handleSubmitProfile} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Patient name"
                    className="border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email address"
                    className="border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Phone number"
                    className="border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Date of Birth</label>
                  <Input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleFormChange}
                    className="border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    placeholder="Street address"
                    className="border-border"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={onClose} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" disabled={loading}>
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          )}

          {/* Password Tab */}
          {activeTab === "password" && (
            <form onSubmit={handleSubmitPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">New Password *</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter new password"
                    className="border-border pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Minimum 6 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Confirm Password *</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                    className="border-border pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-sm text-blue-700 dark:text-blue-400">
                <strong>Note:</strong> The patient will need to use the new password to log in after this change.
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={onClose} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" disabled={loading}>
                  {loading ? "Updating..." : "Update Password"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
