"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { getSupabaseClient } from "./supabase-client"

export type UserRole = "patient" | "dentist" | "hr"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  phone?: string
  specialization?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
  showPatientRegistration: boolean
  savePatientProfile: (name: string, phone?: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [showPatientRegistration, setShowPatientRegistration] = useState(false)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const supabase = getSupabaseClient()
        const {
          data: { user: authUser },
          error,
        } = await supabase.auth.getUser()

        if (authUser && !error) {
          setUser({
            id: authUser.id,
            email: authUser.email || "",
            name: authUser.user_metadata?.name || authUser.email || "",
            role: authUser.user_metadata?.role || "patient",
            phone: authUser.user_metadata?.phone,
            specialization: authUser.user_metadata?.specialization,
          })
        }
      } catch (error) {
        console.error("[v0] Auth initialization error:", error)
      }
      setLoading(false)
    }

    initializeAuth()
  }, [])

  const login = async (email: string, password: string) => {
    const mockUsers: Record<string, User> = {
      "patient@example.com": {
        id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        email: "patient@example.com",
        name: "John Patient",
        role: "patient",
        phone: "+1 234-567-8900",
      },
      "dentist@example.com": {
        id: "7a8c5e19-d3f2-4b7a-8c6f-5e2d9a1b3c47",
        email: "dentist@example.com",
        name: "Dr. Sarah Dentist",
        role: "dentist",
        specialization: "General Dentistry",
      },
      "hr@example.com": {
        id: "9b2d1f8a-6c3e-4d9a-8b5f-7e2c1a3d6b9e",
        email: "hr@example.com",
        name: "Admin HR",
        role: "hr",
      },
      "sarah.smith@dental.com": {
        id: "a2b6f9aa-c1db-4126-91ea-e68ce0764cf7",
        email: "sarah.smith@dental.com",
        name: "Dr. Sarah Smith",
        role: "dentist",
        specialization: "General Dentistry",
      },
      "john.doe@dental.com": {
        id: "36bbff44-0df3-4926-a241-83e753324ffa",
        email: "john.doe@dental.com",
        name: "Dr. John Doe",
        role: "dentist",
        specialization: "Orthodontics",
      },
      "emily.johnson@dental.com": {
        id: "63d250c7-d355-4eaa-b99e-d502b7db5dfb",
        email: "emily.johnson@dental.com",
        name: "Dr. Emily Johnson",
        role: "dentist",
        specialization: "Periodontics",
      },
      "michael.chen@dental.com": {
        id: "eab4dac1-1534-4b6d-80d1-243273ee4773",
        email: "michael.chen@dental.com",
        name: "Dr. Michael Chen",
        role: "dentist",
        specialization: "Prosthodontics",
      },
      "lisa.anderson@dental.com": {
        id: "8e87c140-0749-4fe1-9713-39b05df2f566",
        email: "lisa.anderson@dental.com",
        name: "Dr. Lisa Anderson",
        role: "dentist",
        specialization: "Endodontics",
      },
    }

    const mockUser = mockUsers[email]
    if (mockUser) {
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      
      // Show registration modal for new patients
      if (mockUser.role === "patient") {
        setShowPatientRegistration(true)
      }
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    const supabase = getSupabaseClient()
    supabase.auth.signOut()
  }

  const savePatientProfile = async (name: string, phone?: string) => {
    try {
      if (!user || user.role !== "patient") {
        throw new Error("Only patients can register")
      }

      // Import patientService dynamically to avoid circular imports
      const { patientService } = await import("./db-service")

      // Check for duplicate patient name
      const existingPatient = await patientService.getByName(name)
      if (existingPatient) {
        throw new Error(`Patient with name '${name}' already exists. Please use a different name.`)
      }

      // Create patient record in database
      const newPatient = await patientService.create({
        name: name,
        email: user.email,
        phone: phone || null,
        dob: null,
        gender: null,
        address: null,
      })

      if (newPatient) {
        // Update user state with the new patient ID if needed
        const updatedUser = { ...user, name: name, phone: phone }
        setUser(updatedUser)
        localStorage.setItem("user", JSON.stringify(updatedUser))
        setShowPatientRegistration(false)
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error)
      console.error("[v0] Error saving patient profile:", errorMsg)
      throw error
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
        showPatientRegistration,
        savePatientProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
