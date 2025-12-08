"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import MainLayout from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Plus,
  Edit,
  Trash2,
  Search,
  Tag,
} from "lucide-react"
import { treatmentService } from "@/lib/db-service"
import { formatCurrency } from "@/lib/utils"
import AddTreatmentServiceModal from "@/components/modals/add-treatment-service-modal"

interface Treatment {
  id: string
  name: string
  category: string
  price?: number
  description?: string
}

export default function HRTreatments() {
  const { user } = useAuth()
  const [treatments, setTreatments] = useState<Treatment[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingTreatment, setEditingTreatment] = useState<Treatment | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    loadTreatments()
  }, [])

  const loadTreatments = async () => {
    try {
      setLoading(true)
      const data = await treatmentService.getAll()
      setTreatments(data || [])
    } catch (error) {
      console.error("[v0] Error loading treatments:", error)
    } finally {
      setLoading(false)
    }
  }

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

  const handleAddTreatment = async (data: any) => {
    try {
      if (editingTreatment) {
        const updated = await treatmentService.update(editingTreatment.id, data)
        setTreatments(treatments.map((t) => (t.id === editingTreatment.id ? updated : t)))
        setEditingTreatment(null)
      } else {
        const newTreatment = await treatmentService.create(data)
        setTreatments([newTreatment, ...treatments])
      }
      setShowAddModal(false)
    } catch (error) {
      console.error("[v0] Error saving treatment:", error)
    }
  }

  const handleDeleteTreatment = async (id: string) => {
    if (confirm("Are you sure you want to delete this treatment?")) {
      try {
        await treatmentService.delete(id)
        setTreatments(treatments.filter((t) => t.id !== id))
      } catch (error) {
        console.error("[v0] Error deleting treatment:", error)
      }
    }
  }

  const handleEditTreatment = (treatment: Treatment) => {
    setEditingTreatment(treatment)
    setShowAddModal(true)
  }

  const filteredTreatments = treatments.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = [...new Set(treatments.map((t) => t.category))]

  return (
    <MainLayout navItems={navItems} title="Treatment Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Manage Treatments & Services</h2>
            <p className="text-muted-foreground">Add, edit, and manage dental services offered at the clinic</p>
          </div>
          <Button
            onClick={() => {
              setEditingTreatment(null)
              setShowAddModal(true)
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Treatment
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by service name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => {
                if (category === "All") setSearchTerm("")
                else setSearchTerm(category)
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                (category === "All" && !searchTerm) || searchTerm === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTreatments.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No treatments found</p>
            </div>
          ) : (
            filteredTreatments.map((treatment) => (
              <Card key={treatment.id} className="hover:shadow-md transition-shadow hover:border-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{treatment.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {treatment.category}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditTreatment(treatment)}
                        className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteTreatment(treatment.id)}
                        className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{treatment.description || "No description"}</p>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-foreground">Price</span>
                    <span className="font-bold text-lg text-primary">{formatCurrency(treatment.price)}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{treatments.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Services available</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Price</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold text-primary">{formatCurrency(
                  treatments.length > 0
                    ? treatments.reduce((sum, t) => sum + (t.price || 0), 0) / treatments.length
                    : 0,
                )}</div>
              <p className="text-xs text-muted-foreground mt-1">Per service</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{categories.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Service categories</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {showAddModal && (
        <AddTreatmentServiceModal
          treatment={editingTreatment}
          onClose={() => {
            setShowAddModal(false)
            setEditingTreatment(null)
          }}
          onSubmit={handleAddTreatment}
        />
      )}
    </MainLayout>
  )
}
