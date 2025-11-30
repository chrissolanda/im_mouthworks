import { getSupabaseClient } from "./supabase-client"

const getSupabase = () => {
  if (typeof window === "undefined") {
    throw new Error("Database service can only be used in client-side code")
  }
  return getSupabaseClient()
}

// Dentists
export const dentistService = {
  async getAll() {
    const { data, error } = await getSupabase().from("dentists").select("*").order("name", { ascending: true })
    if (error) {
      console.error("Supabase error fetching dentists:", error)
      throw new Error(`Failed to fetch dentists: ${error.message}`)
    }
    return data
  },

  async getById(id: string) {
    const { data, error } = await getSupabase().from("dentists").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async create(dentist: { name: string; email?: string; phone?: string; specialization?: string }) {
    const { data, error } = await getSupabase().from("dentists").insert([dentist]).select().single()
    if (error) {
      console.error("Supabase error creating dentist:", error)
      throw new Error(`Failed to create dentist: ${error.message}`)
    }
    return data
  },

  async update(id: string, updates: any) {
    const { data, error } = await getSupabase()
      .from("dentists")
      .update({ ...updates, updated_at: new Date() })
      .eq("id", id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  async delete(id: string) {
    const { error } = await getSupabase().from("dentists").delete().eq("id", id)
    if (error) throw error
  },
}

// Patients
export const patientService = {
  async getAll() {
    const { data, error } = await getSupabase().from("patients").select("*").order("created_at", { ascending: false })
    if (error) {
      console.error("Supabase error fetching patients:", error)
      throw new Error(`Failed to fetch patients: ${error.message}`)
    }
    return data
  },

  async getById(id: string) {
    const { data, error } = await getSupabase().from("patients").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async getByName(name: string) {
    try {
      const { data, error } = await getSupabase()
        .from("patients")
        .select("*")
        .ilike("name", name)
        .maybeSingle()
      if (error) {
        console.error("[v0] Supabase error fetching patient by name:", error)
        throw new Error(`Failed to fetch patient by name: ${error.message}`)
      }
      return data
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error("[v0] Error in patientService.getByName():", errorMsg)
      throw err
    }
  },

  async create(patient: {
    name: string
    email: string
    phone?: string | null
    dob?: string | null
    gender?: string | null
    address?: string | null
  }) {
    const { data, error } = await getSupabase().from("patients").insert([patient]).select().single()
    if (error) {
      console.error("Supabase error creating patient:", error)
      throw new Error(`Failed to create patient: ${error.message}`)
    }
    return data
  },

  async update(id: string, updates: any) {
    const { data, error } = await getSupabase()
      .from("patients")
      .update({ ...updates, updated_at: new Date() })
      .eq("id", id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  async delete(id: string) {
    const { error } = await getSupabase().from("patients").delete().eq("id", id)
    if (error) throw error
  },
}

// Appointments
export const appointmentService = {
  async getAll() {
    try {
      const { data, error } = await getSupabase()
        .from("appointments")
        .select("*, patients(name, email), dentists(name)")
        .order("date", { ascending: false })
      if (error) {
        console.error("[v0] Supabase error fetching all appointments:", error)
        throw new Error(`Failed to fetch appointments: ${error.message}`)
      }
      return data
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error("[v0] Error in appointmentService.getAll():", errorMsg)
      throw err
    }
  },

  async getByPatientId(patientId: string) {
    try {
      const { data, error } = await getSupabase()
        .from("appointments")
        .select("*, patients(name), dentists(name)")
        .eq("patient_id", patientId)
        .order("date", { ascending: false })
      if (error) {
        console.error("[v0] Supabase error fetching patient appointments:", error)
        throw new Error(`Failed to fetch patient appointments: ${error.message}`)
      }
      return data
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error("[v0] Error in appointmentService.getByPatientId():", errorMsg)
      throw err
    }
  },

  async getByDentistId(dentistId: string) {
    try {
      const { data, error } = await getSupabase()
        .from("appointments")
        .select("*, patients(name, email), dentists(name)")
        .eq("dentist_id", dentistId)
        .order("date", { ascending: false })
      if (error) {
        console.error("[v0] Supabase error fetching dentist appointments:", error)
        throw new Error(`Failed to fetch dentist appointments: ${error.message}`)
      }
      return data
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error("[v0] Error in appointmentService.getByDentistId():", errorMsg)
      throw err
    }
  },

  async create(appointment: any) {
    try {
      const { data, error } = await getSupabase()
        .from("appointments")
        .insert([appointment])
        .select("*, patients(name), dentists(name)")
        .single()
      if (error) {
        console.error("[v0] Supabase error creating appointment:", error)
        throw new Error(`Failed to create appointment: ${error.message}`)
      }
      return data
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error("[v0] Error in appointmentService.create():", errorMsg)
      throw err
    }
  },

  async update(id: string, updates: any) {
    try {
      const { data, error } = await getSupabase()
        .from("appointments")
        .update({ ...updates, updated_at: new Date() })
        .eq("id", id)
        .select("*, patients(name), dentists(name)")
        .single()
      if (error) {
        console.error("[v0] Supabase error updating appointment:", error)
        throw new Error(`Failed to update appointment: ${error.message}`)
      }
      return data
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error("[v0] Error in appointmentService.update():", errorMsg)
      throw err
    }
  },

  async delete(id: string) {
    try {
      const { error } = await getSupabase().from("appointments").delete().eq("id", id)
      if (error) {
        console.error("[v0] Supabase error deleting appointment:", error)
        throw new Error(`Failed to delete appointment: ${error.message}`)
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error("[v0] Error in appointmentService.delete():", errorMsg)
      throw err
    }
  },

  async changeStatus(id: string, status: string) {
    return this.update(id, { status })
  },
}

// Treatments
export const treatmentService = {
  async getAll() {
    const { data, error } = await getSupabase().from("treatments").select("*").order("category", { ascending: true })
    if (error) throw error
    return data
  },

  async getById(id: string) {
    const { data, error } = await getSupabase().from("treatments").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async create(treatment: any) {
    const { data, error } = await getSupabase().from("treatments").insert([treatment]).select().single()
    if (error) throw error
    return data
  },

  async update(id: string, updates: any) {
    const { data, error } = await getSupabase()
      .from("treatments")
      .update({ ...updates, updated_at: new Date() })
      .eq("id", id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  async delete(id: string) {
    const { error } = await getSupabase().from("treatments").delete().eq("id", id)
    if (error) throw error
  },
}

// Payments
export const paymentService = {
  async getAll() {
    const { data, error } = await getSupabase()
      .from("payments")
      .select("*, patients(name, email), dentists(name)")
      .order("date", { ascending: false })
    if (error) throw error
    return data
  },

  async getByPatientId(patientId: string) {
    try {
      const { data, error } = await getSupabase()
        .from("payments")
        .select("*, dentists(name)")
        .eq("patient_id", patientId)
        .order("date", { ascending: false })
      if (error) {
        console.warn("Error fetching patient payments:", error.message)
        return []
      }
      return data || []
    } catch (err) {
      console.warn("Exception fetching patient payments:", err instanceof Error ? err.message : err)
      return []
    }
  },

  async getByDentistId(dentistId: string) {
    try {
      const { data, error } = await getSupabase()
        .from("payments")
        .select("*, patients(name, email)")
        .eq("dentist_id", dentistId)
        .order("date", { ascending: false })
      if (error) {
        console.warn("Error fetching dentist payments:", error.message)
        return []
      }
      return data || []
    } catch (err) {
      console.warn("Exception fetching dentist payments:", err instanceof Error ? err.message : err)
      return []
    }
  },

  async create(payment: any) {
    const { data, error } = await getSupabase()
      .from("payments")
      .insert([payment])
      .select("*, patients(name), dentists(name)")
      .single()
    if (error) throw error
    return data
  },

  async update(id: string, updates: any) {
    const { data, error } = await getSupabase()
      .from("payments")
      .update({ ...updates, updated_at: new Date() })
      .eq("id", id)
      .select("*, patients(name), dentists(name)")
      .single()
    if (error) throw error
    return data
  },

  async delete(id: string) {
    const { error } = await getSupabase().from("payments").delete().eq("id", id)
    if (error) throw error
  },

  async getPatientBalance(patientId: string) {
    try {
      const { data, error } = await getSupabase().from("payments").select("amount, status").eq("patient_id", patientId)
      if (error) {
        console.warn("Error fetching patient balance:", error.message)
        return { totalBalance: 0, totalPaid: 0, total: 0 }
      }

      let totalBalance = 0
      let totalPaid = 0

      data?.forEach((payment: any) => {
        if (payment.status === "paid") {
          totalPaid += payment.amount
        } else if (payment.status === "unpaid") {
          totalBalance += payment.amount
        } else if (payment.status === "partial") {
          totalBalance += payment.amount
        }
      })

      return { totalBalance, totalPaid, total: totalBalance + totalPaid }
    } catch (err) {
      console.warn("Exception fetching patient balance:", err instanceof Error ? err.message : err)
      return { totalBalance: 0, totalPaid: 0, total: 0 }
    }
  },

  async getDentistEarnings(dentistId: string) {
    try {
      const { data, error } = await getSupabase()
        .from("payments")
        .select("amount, status")
        .eq("dentist_id", dentistId)
      if (error) {
        console.warn("Error fetching dentist earnings:", error.message)
        return { totalEarned: 0, totalPending: 0, totalCompleted: 0, count: 0 }
      }

      let totalEarned = 0
      let totalPending = 0
      let totalCompleted = 0

      data?.forEach((payment: any) => {
        if (payment.status === "paid") {
          totalEarned += payment.amount
          totalCompleted += 1
        } else if (payment.status === "unpaid") {
          totalPending += payment.amount
        } else if (payment.status === "partial") {
          totalEarned += payment.amount
        }
      })

      return { totalEarned, totalPending, totalCompleted, count: data?.length || 0 }
    } catch (err) {
      console.warn("Exception fetching dentist earnings:", err instanceof Error ? err.message : err)
      return { totalEarned: 0, totalPending: 0, totalCompleted: 0, count: 0 }
    }
  },
}

// Inventory
export const inventoryService = {
  async getAll() {
    const { data, error } = await getSupabase().from("inventory").select("*").order("status", { ascending: false })
    if (error) throw error
    return data
  },

  async getById(id: string) {
    const { data, error } = await getSupabase().from("inventory").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async create(item: any) {
    const { data, error } = await getSupabase().from("inventory").insert([item]).select().single()
    if (error) throw error
    return data
  },

  async update(id: string, updates: any) {
    const { data, error } = await getSupabase()
      .from("inventory")
      .update({ ...updates, updated_at: new Date() })
      .eq("id", id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  async delete(id: string) {
    const { error } = await getSupabase().from("inventory").delete().eq("id", id)
    if (error) throw error
  },

  async getLowStock() {
    const { data, error } = await getSupabase().from("inventory").select("*").or("status.eq.low,status.eq.critical")
    if (error) throw error
    return data
  },
}

// Treatment Records
export const treatmentRecordService = {
  async getByPatientId(patientId: string) {
    const { data, error } = await getSupabase()
      .from("treatment_records")
      .select("*, treatments(name, category), dentists(name)")
      .eq("patient_id", patientId)
      .order("date", { ascending: false })
    if (error) throw error
    return data
  },

  async create(record: any) {
    const { data, error } = await getSupabase()
      .from("treatment_records")
      .insert([record])
      .select("*, treatments(name), dentists(name)")
      .single()
    if (error) throw error
    return data
  },
}

// Supply Requests
export const supplyRequestService = {
  async getAll() {
    const { data, error } = await getSupabase()
      .from("supply_requests")
      .select("*, inventory(name, category), staff(name)")
      .order("requested_date", { ascending: false })
    if (error) throw error
    return data
  },

  async getPending() {
    const { data, error } = await getSupabase()
      .from("supply_requests")
      .select("*, inventory(name, category), staff(name)")
      .eq("status", "pending")
    if (error) throw error
    return data
  },

  async create(request: any) {
    const { data, error } = await getSupabase()
      .from("supply_requests")
      .insert([request])
      .select("*, inventory(name), staff(name)")
      .single()
    if (error) throw error
    return data
  },

  async update(id: string, updates: any) {
    const { data, error } = await getSupabase()
      .from("supply_requests")
      .update({ ...updates, updated_at: new Date() })
      .eq("id", id)
      .select()
      .single()
    if (error) throw error
    return data
  },
}
