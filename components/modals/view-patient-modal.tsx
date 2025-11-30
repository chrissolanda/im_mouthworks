"use client"

import { Button } from "@/components/ui/button"
import { X, Phone, Mail } from "lucide-react"

interface ViewPatientModalProps {
  patient: any
  onClose: () => void
}

export default function ViewPatientModal({ patient, onClose }: ViewPatientModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">Patient Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{patient.name.charAt(0)}</span>
            </div>
          </div>

          {/* Patient Info */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p className="text-foreground font-semibold">{patient.name}</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:${patient.email}`} className="text-primary hover:underline text-sm">
                {patient.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:${patient.phone}`} className="text-primary hover:underline text-sm">
                {patient.phone}
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
              <p className="text-foreground">{patient.dob}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Gender</p>
              <p className="text-foreground">{patient.gender}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Address</p>
              <p className="text-foreground text-sm">{patient.address}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Patient Since</p>
              <p className="text-foreground">{patient.createdAt}</p>
            </div>
          </div>

          {/* Close Button */}
          <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
