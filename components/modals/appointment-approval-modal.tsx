"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, XCircle } from "lucide-react"

interface AppointmentApprovalModalProps {
  appointment: any
  onClose: () => void
  onApprove: () => void
  onReject: (reason: string) => void
}

export default function AppointmentApprovalModal({
  appointment,
  onClose,
  onApprove,
  onReject,
}: AppointmentApprovalModalProps) {
  const [rejectReason, setRejectReason] = useState("")
  const [isRejecting, setIsRejecting] = useState(false)

  const handleReject = () => {
    if (rejectReason.trim()) {
      onReject(rejectReason)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Appointment Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Patient</p>
              <p className="text-foreground font-semibold">{appointment.patientName || appointment.patients?.name || "N/A"}</p>
              {appointment.patients?.email && (
                <p className="text-xs text-muted-foreground">{appointment.patients.email}</p>
              )}
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Service</p>
              <p className="text-foreground">{appointment.service}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Date</p>
                <p className="text-foreground">{appointment.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Time</p>
                <p className="text-foreground">{appointment.time}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <p className="text-foreground capitalize font-medium">{appointment.status}</p>
            </div>

            {appointment.notes && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Notes</p>
                <p className="text-foreground text-sm">{appointment.notes}</p>
              </div>
            )}
          </div>

          {isRejecting && (
            <div className="space-y-2 pt-4 border-t border-border">
              <label className="text-sm font-medium text-foreground">Rejection Reason</label>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Why are you rejecting this appointment?"
                className="w-full p-2 border border-border rounded-lg text-sm resize-none"
                rows={3}
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            {isRejecting ? (
              <>
                <Button onClick={() => setIsRejecting(false)} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleReject}
                  disabled={!rejectReason.trim()}
                  className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                >
                  Confirm Reject
                </Button>
              </>
            ) : (
              <>
                <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
                  Close
                </Button>
                <Button
                  onClick={() => setIsRejecting(true)}
                  variant="outline"
                  className="flex-1 text-destructive hover:bg-destructive/10"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject
                </Button>
                <Button onClick={onApprove} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
