"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface AddInventoryItemModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function AddInventoryItemModal({ onClose, onSubmit }: AddInventoryItemModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    minQuantity: "",
    category: "Supplies",
    supplier: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.quantity && formData.minQuantity) {
      onSubmit({
        ...formData,
        quantity: Number.parseInt(formData.quantity),
        minQuantity: Number.parseInt(formData.minQuantity),
      })
      setFormData({ name: "", quantity: "", minQuantity: "", category: "Supplies", supplier: "" })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">Add Inventory Item</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Item Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Latex Gloves"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Quantity</label>
            <Input
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="0"
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Minimum Level</label>
            <Input
              name="minQuantity"
              type="number"
              value={formData.minQuantity}
              onChange={handleInputChange}
              placeholder="0"
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
              <option>Supplies</option>
              <option>Medication</option>
              <option>Orthodontic</option>
              <option>Material</option>
              <option>Equipment</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Supplier</label>
            <Input
              name="supplier"
              value={formData.supplier}
              onChange={handleInputChange}
              placeholder="Supplier name"
              className="border-border"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Add Item
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
