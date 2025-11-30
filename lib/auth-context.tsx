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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

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
        id: "1",
        email: "patient@example.com",
        name: "John Patient",
        role: "patient",
        phone: "+1 234-567-8900",
      },
      "dentist@example.com": {
        id: "2",
        email: "dentist@example.com",
        name: "Dr. Sarah Dentist",
        role: "dentist",
        specialization: "General Dentistry",
      },
      "hr@example.com": {
        id: "3",
        email: "hr@example.com",
        name: "Admin HR",
        role: "hr",
      },
    }

    const mockUser = mockUsers[email]
    if (mockUser) {
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
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

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
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
