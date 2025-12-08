"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { dentistService } from "@/lib/db-service"

interface AssignDentistModalProps {
  appointment: any
  onClose: () => void
  onAssign: (dentistId: string) => void
}

export default function AssignDentistModal({ appointment, onClose, onAssign }: AssignDentistModalProps) {
  const [dentists, setDentists] = useState<any[]>([])
  const [selectedDentist, setSelectedDentist] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDentists = async () => {
      try {
        const data = await dentistService.getAll().catch(() => [])
        setDentists(data || [])
      } catch (error) {
        console.error("[v0] Error loading dentists:", error)
      } finally {
        setLoading(false)
      }
    }

    loadDentists()
  }, [])

  const handleAssign = () => {
    if (selectedDentist) {
      onAssign(selectedDentist)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Assign Dentist</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">Patient: <span className="font-semibold text-foreground">{appointment.patients?.name || appointment.patientName}</span></p>
            <p className="text-sm text-muted-foreground">Service: <span className="font-semibold text-foreground">{appointment.service}</span></p>
            <p className="text-sm text-muted-foreground">Date & Time: <span className="font-semibold text-foreground">{appointment.date} at {appointment.time}</span></p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">Select Dentist</label>
            {loading ? (
              <div className="text-center py-4 text-muted-foreground text-sm">Loading dentists...</div>
            ) : dentists.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground text-sm">No dentists available</div>
            ) : (
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {dentists.map((dentist) => (
                  <button
                    key={dentist.id}
                    onClick={() => setSelectedDentist(dentist.id)}
                    className={`w-full p-3 border rounded-lg transition-colors text-left ${
                      selectedDentist === dentist.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <p className="font-medium text-foreground">Dr. {dentist.name}</p>
                    {dentist.specialization && (
                      <p className="text-xs text-muted-foreground">{dentist.specialization}</p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex gap-2">
          <Button onClick={onClose} variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={handleAssign}
            disabled={!selectedDentist}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Assign
          </Button>
        </div>
      </div>
    </div>
  )
}
