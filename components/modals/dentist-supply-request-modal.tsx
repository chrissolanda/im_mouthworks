"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { inventoryService, supplyRequestService } from "@/lib/db-service"

interface DentistSupplyRequestModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
  dentistId: string
}

interface InventoryItem {
  id: string
  name: string
  quantity: number
  min_quantity: number
  category?: string
  supplier?: string
  status: "ok" | "low" | "critical"
}

export default function DentistSupplyRequestModal({
  onClose,
  onSubmit,
  dentistId,
}: DentistSupplyRequestModalProps) {
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    inventory_id: "",
    quantity: "",
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadInventory()
  }, [])

  const loadInventory = async () => {
    try {
      setLoading(true)
      const data = await inventoryService.getAll()
      setInventory(data || [])
    } catch (error) {
      console.error("[v0] Error loading inventory:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.inventory_id && formData.quantity) {
      try {
        setSubmitting(true)
        const requestData = {
          item_id: formData.inventory_id,
          dentist_id: dentistId,
          quantity: Number.parseInt(formData.quantity),
          status: "pending",
        }
        console.log("[v0] Submitting supply request:", requestData)
        const result = await supplyRequestService.create(requestData)
        console.log("[v0] Supply request created:", result)
        onSubmit(result)
        setFormData({ inventory_id: "", quantity: "" })
        onClose()
      } catch (error: any) {
        console.error("[v0] Error submitting supply request:", error)
        console.error("[v0] Error details:", error?.message || error?.details || JSON.stringify(error))
        alert(`Failed to submit request: ${error?.message || "Unknown error"}`)
      } finally {
        setSubmitting(false)
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">Request Supply</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Select Item</label>
            <select
              name="inventory_id"
              value={formData.inventory_id}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              required
              disabled={loading}
            >
              <option value="">
                {loading ? "Loading inventory..." : "Choose an item"}
              </option>
              {inventory.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} (Current: {item.quantity}, Min: {item.min_quantity})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Quantity Needed</label>
            <Input
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="0"
              className="border-border"
              required
              min="1"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={submitting || loading}
            >
              {submitting ? "Submitting..." : "Request"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
