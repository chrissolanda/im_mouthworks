"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Bluetooth as Tooth,
  CreditCard,
  Package,
  BarChart3,
  Settings,
  Save,
  Bell,
  Lock,
  Palette,
  Globe,
} from "lucide-react"

export default function HRSettings() {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    clinicName: "Mouthworks Dental Clinic",
    clinicEmail: "info@mouthworks.com",
    clinicPhone: "+1 (555) 123-4567",
    clinicAddress: "123 Dental Street, City, State 12345",
    businessHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    appointmentReminder: true,
    paymentReminder: true,
    lowStockAlert: true,
    emailNotifications: true,
    smsNotifications: false,
  })

  const [isSaving, setIsSaving] = useState(false)

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, href: "/hr/dashboard" },
    { label: "Patients", icon: <Users className="w-5 h-5" />, href: "/hr/patients" },
    { label: "Appointments", icon: <Calendar className="w-5 h-5" />, href: "/hr/appointments" },
    { label: "Treatments", icon: <Tooth className="w-5 h-5" />, href: "/hr/treatments" },
    { label: "Payments", icon: <CreditCard className="w-5 h-5" />, href: "/hr/payments" },
    { label: "Inventory", icon: <Package className="w-5 h-5" />, href: "/hr/inventory" },
    { label: "Reports", icon: <BarChart3 className="w-5 h-5" />, href: "/hr/reports" },
    { label: "Settings", icon: <Settings className="w-5 h-5" />, href: "/hr/settings" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleToggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      alert("Settings saved successfully!")
    }, 1000)
  }

  return (
    <MainLayout navItems={navItems} title="System Settings">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Clinic Settings</h2>
          <p className="text-muted-foreground">Configure clinic information and system preferences</p>
        </div>

        {/* Clinic Information */}
        <Card>
          <CardHeader className="bg-primary/5 border-b pb-4">
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Clinic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Clinic Name</label>
                <Input
                  name="clinicName"
                  value={settings.clinicName}
                  onChange={handleInputChange}
                  className="border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  name="clinicEmail"
                  type="email"
                  value={settings.clinicEmail}
                  onChange={handleInputChange}
                  className="border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input
                  name="clinicPhone"
                  value={settings.clinicPhone}
                  onChange={handleInputChange}
                  className="border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Business Hours</label>
                <Input
                  name="businessHours"
                  value={settings.businessHours}
                  onChange={handleInputChange}
                  className="border-border"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Address</label>
              <Input
                name="clinicAddress"
                value={settings.clinicAddress}
                onChange={handleInputChange}
                className="border-border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader className="bg-primary/5 border-b pb-4">
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {[
              {
                key: "appointmentReminder",
                label: "Appointment Reminders",
                description: "Send reminders before appointments",
              },
              {
                key: "paymentReminder",
                label: "Payment Reminders",
                description: "Remind patients about outstanding payments",
              },
              { key: "lowStockAlert", label: "Low Stock Alerts", description: "Alert when inventory is running low" },
              { key: "emailNotifications", label: "Email Notifications", description: "Receive email notifications" },
              { key: "smsNotifications", label: "SMS Notifications", description: "Receive SMS notifications" },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <button
                  onClick={() => handleToggle(item.key)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    settings[item.key as keyof typeof settings] ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      settings[item.key as keyof typeof settings] ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader className="bg-primary/5 border-b pb-4">
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Security & Access
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Lock className="w-4 h-4 mr-2" />
              Change Admin Password
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Users className="w-4 h-4 mr-2" />
              Manage User Roles & Permissions
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Palette className="w-4 h-4 mr-2" />
              View Audit Logs
            </Button>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Saving..." : "Save Settings"}
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
