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
  Trash2,
  Search,
  AlertCircle,
  TrendingDown,
} from "lucide-react"
import { inventoryService, supplyRequestService } from "@/lib/db-service"
import AddInventoryItemModal from "@/components/modals/add-inventory-item-modal"

interface InventoryItem {
  id: string
  name: string
  quantity: number
  min_quantity: number
  category?: string
  supplier?: string
  status: "ok" | "low" | "critical"
}

export default function HRInventory() {
  const { user } = useAuth()
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [staffRequests, setStaffRequests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [inventoryData, requestsData] = await Promise.all([
        inventoryService.getAll(),
        supplyRequestService.getAll(),
      ])
      setInventory(inventoryData || [])
      setStaffRequests(requestsData || [])
    } catch (error) {
      console.error("[v0] Error loading inventory:", error)
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

  const handleAddInventory = async (data: any) => {
    try {
      const newItem = await inventoryService.create(data)
      setInventory([newItem, ...inventory])
      setShowAddModal(false)
    } catch (error) {
      // Log detailed error information in a safe way
      const errMsg = error instanceof Error ? error.message : JSON.stringify(error)
      console.error("[v0] Error adding inventory:", errMsg)
    }
  }

  const handleDeleteItem = async (id: string) => {
    if (confirm("Are you sure?")) {
      try {
        await inventoryService.delete(id)
        setInventory(inventory.filter((i) => i.id !== id))
      } catch (error) {
        console.error("[v0] Error deleting inventory:", error)
      }
    }
  }

  const handleApproveRequest = async (id: string) => {
    try {
      const updated = await supplyRequestService.update(id, { status: "approved" })
      setStaffRequests(staffRequests.map((r) => (r.id === id ? updated : r)))
    } catch (error) {
      console.error("[v0] Error approving request:", error)
    }
  }

  const handleRejectRequest = async (id: string) => {
    try {
      const updated = await supplyRequestService.update(id, { status: "rejected" })
      setStaffRequests(staffRequests.map((r) => (r.id === id ? updated : r)))
    } catch (error) {
      console.error("[v0] Error rejecting request:", error)
    }
  }

  const filteredInventory = inventory.filter(
    (i) =>
      i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      i.category?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const lowStockItems = inventory.filter((i) => i.status !== "ok")

  return (
    <MainLayout navItems={navItems} title="Inventory Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Inventory Management</h2>
            <p className="text-muted-foreground">Track dental supplies and materials</p>
          </div>
          <Button
            onClick={() => setShowAddModal(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{inventory.length}</div>
              <p className="text-xs text-muted-foreground mt-1">In stock</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{lowStockItems.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Need attention</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Critical</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">
                {inventory.filter((i) => i.status === "critical").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Urgent restock</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {staffRequests.filter((r) => r.status === "pending").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Staff requests</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by item name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Inventory Table */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Inventory</CardTitle>
            <CardDescription>{filteredInventory.length} item(s)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Item Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Quantity</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Min Level</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Supplier</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInventory.map((item) => {
                    const itemPendingRequests = staffRequests.filter((r) => r.item_id === item.id && r.status === "pending")
                    return (
                      <tr key={item.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-foreground">{item.name}</p>
                            {itemPendingRequests.length > 0 && (
                              <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
                                <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                                {itemPendingRequests.length} pending request{itemPendingRequests.length !== 1 ? 's' : ''}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{item.category || "-"}</td>
                        <td className="py-3 px-4 text-sm font-semibold text-foreground">{item.quantity}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{item.min_quantity}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{item.supplier || "-"}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-col gap-2">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold w-fit ${
                                item.status === "ok"
                                  ? "bg-green-100 text-green-700"
                                  : item.status === "low"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                              }`}
                            >
                              {item.status === "critical" && <AlertCircle className="w-3 h-3" />}
                              {item.status === "low" && <TrendingDown className="w-3 h-3" />}
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Staff Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Supply Requests from Staff & Dentists</CardTitle>
            <CardDescription>
              {staffRequests.filter((r) => r.status === "pending").length} pending request(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {staffRequests.length === 0 ? (
                <p className="text-center text-muted-foreground py-4">No requests</p>
              ) : (
                staffRequests.map((request) => (
                  <div
                    key={request.id}
                    className={`p-4 border rounded-lg ${
                      request.status === "pending"
                        ? "border-yellow-200 bg-yellow-50/50"
                        : request.status === "approved"
                          ? "border-green-200 bg-green-50/50"
                          : "border-red-200 bg-red-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-foreground">{request.inventory?.name || "Unknown Item"}</p>
                        <p className="text-sm text-muted-foreground">
                          Requested by: {request.dentists?.name || request.staff?.name || "Unknown"}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          request.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : request.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mb-2">Quantity: {request.quantity}</p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Date: {request.requested_date ? new Date(request.requested_date).toLocaleDateString() : "-"}
                    </p>
                    {request.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleApproveRequest(request.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleRejectRequest(request.id)}
                          variant="outline"
                          className="flex-1 text-xs text-destructive hover:bg-destructive/10"
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {showAddModal && <AddInventoryItemModal onClose={() => setShowAddModal(false)} onSubmit={handleAddInventory} />}
    </MainLayout>
  )
}
