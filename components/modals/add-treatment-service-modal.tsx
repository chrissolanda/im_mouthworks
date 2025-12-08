"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface AddTreatmentServiceModalProps {
  treatment?: any
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function AddTreatmentServiceModal({ treatment, onClose, onSubmit }: AddTreatmentServiceModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Cleaning",
    price: "",
    description: "",
  })

  useEffect(() => {
    if (treatment) {
      setFormData({
        name: treatment.name,
        category: treatment.category,
        price: String(treatment.price),
        description: treatment.description,
      })
    }
  }, [treatment])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.price && formData.description) {
      onSubmit({
        ...formData,
        price: Number.parseFloat(formData.price),
      })
      setFormData({ name: "", category: "Cleaning", price: "", description: "" })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">{treatment ? "Edit Treatment" : "Add New Treatment"}</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Treatment Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Professional Cleaning"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg"
            >
              <option>Cleaning</option>
              <option>Extraction</option>
              <option>Restoration</option>
              <option>Endodontics</option>
              <option>Orthodontics</option>
              <option>Cosmetic</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Price (₱)</label>
            <Input
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="0.00"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Detailed treatment description..."
              className="w-full p-2 border border-border rounded-lg text-sm resize-none"
              rows={3}
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              {treatment ? "Update" : "Add"} Treatment
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
