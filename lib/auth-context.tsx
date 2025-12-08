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
  patientAutoApproved?: boolean
  register: (email: string, password: string, name: string, phone?: string) => Promise<any>
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
  const [patientAutoApproved, setPatientAutoApproved] = useState(false)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const supabase = getSupabaseClient()
        const {
          data: { user: authUser },
          error,
        } = await supabase.auth.getUser()

        if (authUser && !error) {
          const emailStr = authUser.email || ""
          const roleFromMeta = authUser.user_metadata?.role || "patient"
          const isGmail = emailStr.toLowerCase().endsWith("@gmail.com")
          setUser({
            id: authUser.id,
            email: emailStr,
            name: authUser.user_metadata?.name || emailStr || "",
            role: roleFromMeta,
            phone: authUser.user_metadata?.phone,
            specialization: authUser.user_metadata?.specialization,
          })
          // For Gmail patients, do not show registration modal; mark as auto-approved
          if (roleFromMeta === "patient" && isGmail) {
            setShowPatientRegistration(false)
            setPatientAutoApproved(true)
            // Ensure a patient row exists for Gmail users so booking and payments work
            try {
              const { patientService } = await import("./db-service")
              const existingPatient = await patientService.getByEmail(emailStr)
              if (!existingPatient) {
                await patientService.create({
                  user_id: authUser.id,
                  name: authUser.user_metadata?.name || emailStr,
                  email: emailStr,
                  phone: authUser.user_metadata?.phone || null,
                  dob: null,
                  gender: null,
                  address: null,
                })
              }
            } catch (err) {
              console.warn("[v0] Could not auto-create patient record for Gmail user:", err)
            }
          }
        }
      } catch (error) {
        console.error("[v0] Auth initialization error:", error)
      }
      setLoading(false)
    }

    initializeAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // First try to authenticate against the `auth_users` table (registered users)
    try {
      const supabase = getSupabaseClient()
      const { data: authUser, error } = await supabase.from("auth_users").select("*").eq("email", email).maybeSingle()
      if (error) {
        console.warn("[v0] Supabase error checking auth_users:", error)
      }
      if (authUser) {
        // simple password check (password_hash stores the password in this demo app)
        if (authUser.password_hash === password) {
          const userObj: User = {
            id: authUser.id,
            email: authUser.email,
            name: authUser.name || authUser.email,
            role: authUser.role as UserRole,
            phone: authUser.phone || undefined,
            specialization: authUser.specialization || undefined,
          }
          setUser(userObj)
          localStorage.setItem("user", JSON.stringify(userObj))
          // If this is a patient and they don't have a patients row, prompt for profile
          // but if they're signing in with Gmail, auto-approve and do not show modal
          const isGmail = (userObj.email || "").toLowerCase().endsWith("@gmail.com")
          if (userObj.role === "patient") {
            if (isGmail) {
              setShowPatientRegistration(false)
              setPatientAutoApproved(true)
              // Ensure a patient row exists for Gmail logins
              try {
                const { patientService } = await import("./db-service")
                const existingPatient = await patientService.getByEmail(userObj.email)
                if (!existingPatient) {
                  await patientService.create({
                    user_id: userObj.id,
                    name: userObj.name || userObj.email,
                    email: userObj.email,
                    phone: userObj.phone || null,
                    dob: null,
                    gender: null,
                    address: null,
                  })
                }
              } catch (err) {
                console.warn("[v0] Could not auto-create patient record after login:", err)
              }
            } else {
              setShowPatientRegistration(true)
              setPatientAutoApproved(false)
            }
          }
          return
        } else {
          throw new Error("Invalid credentials")
        }
      }

    } catch (err) {
      console.warn("[v0] Error authenticating against auth_users:", err)
    }

    // If no auth_users match, try Supabase Auth sign-in (for accounts created via Supabase)
    try {
      const supabase = getSupabaseClient()
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        // Not authenticated via Supabase - proceed to mock users handling below
        console.warn("[v0] Supabase auth signIn error:", error)
      } else if (data && data.user) {
        const authUser = data.user
        const roleFromMeta = (authUser.user_metadata as any)?.role || "patient"
        const userObj: User = {
          id: authUser.id,
          email: authUser.email || email,
          name: (authUser.user_metadata as any)?.name || authUser.email || email,
          role: roleFromMeta as UserRole,
          phone: (authUser.user_metadata as any)?.phone || undefined,
          specialization: (authUser.user_metadata as any)?.specialization || undefined,
        }
        setUser(userObj)
        localStorage.setItem("user", JSON.stringify(userObj))

        // For patient users, handle registration modal and auto-approval
        if (userObj.role === "patient") {
          // Gmail patients auto-approve
          const isGmail = (userObj.email || "").toLowerCase().endsWith("@gmail.com")
          if (isGmail) {
            setShowPatientRegistration(false)
            setPatientAutoApproved(true)
          } else {
            // Non-Gmail patients created via Supabase Auth: don't show registration modal
            // (they already have an auth account), just set auto-approved
            setShowPatientRegistration(false)
            setPatientAutoApproved(true)
          }
          
          // Ensure patient record exists in database
          try {
            const { patientService } = await import("./db-service")
            const existingPatient = await patientService.getByEmail(userObj.email)
            if (!existingPatient) {
              await patientService.create({
                user_id: userObj.id,
                name: userObj.name || userObj.email,
                email: userObj.email,
                phone: userObj.phone || null,
                dob: null,
                gender: null,
                address: null,
              })
            }
          } catch (err) {
            console.warn("[v0] Could not auto-create patient record after supabase login:", err)
          }
        }

        return
      }
    } catch (err) {
      console.warn("[v0] Error authenticating via Supabase auth:", err)
    }

    const mockUsers: Record<string, User> = {
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
      return
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const register = async (email: string, password: string, name: string, phone?: string) => {
    const supabase = getSupabaseClient()
    // Check existing auth_users
    const { data: existing, error: getErr } = await supabase.from("auth_users").select("*").eq("email", email).maybeSingle()
    if (getErr) {
      console.error("[v0] Error checking existing auth user:", getErr)
      throw new Error("Registration failed")
    }
    if (existing) {
      // Return a structured result instead of throwing so callers can handle it gracefully
      return { status: "exists", user: existing }
    }

    try {
      // Create auth_users entry (password_hash stores password in this demo)
      const { data: createdAuth, error: insertErr } = await supabase
        .from("auth_users")
        .insert([
          { email, password_hash: password, name, role: "patient", phone: phone || null },
        ])
        .select()
        .single()

      if (insertErr || !createdAuth) {
        console.error("[v0] Error creating auth user:", insertErr)
        throw new Error("Registration failed")
      }

      // Create patients row linked to auth_users.id
      const { data: patientRow, error: patientErr } = await supabase
        .from("patients")
        .insert([
          { user_id: createdAuth.id, name, email, phone: phone || null },
        ])
        .select()
        .single()

      if (patientErr) {
        console.warn("[v0] Warning creating patient row:", patientErr)
      }

      const userObj: User = {
        id: createdAuth.id,
        email: createdAuth.email,
        name: createdAuth.name || name,
        role: "patient",
        phone: createdAuth.phone || phone || undefined,
      }
      setUser(userObj)
      localStorage.setItem("user", JSON.stringify(userObj))
      setShowPatientRegistration(false)
      return { status: "created", user: userObj }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err)
      console.error("[v0] Registration error:", errorMsg)
      throw err
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

      // Ensure an auth_users row exists for this email
      try {
        const supabase = getSupabaseClient()
        const { data: existingAuthUser, error: authErr } = await supabase.from("auth_users").select("*").eq("email", user.email).maybeSingle()
        if (authErr) {
          console.warn("[v0] Warning checking auth_users:", authErr)
        }
        if (!existingAuthUser) {
          const { error: insertErr } = await supabase.from("auth_users").insert([
            {
              email: user.email,
              name: name,
              role: "patient",
              phone: phone || null,
            },
          ])
          if (insertErr) {
            console.warn("[v0] Warning inserting auth_users record:", insertErr)
          }
        }
      } catch (err) {
        console.warn("[v0] Warning ensuring auth_users record:", err)
      }

      if (newPatient) {
        // Update user state with the new patient info
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
        register,
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
