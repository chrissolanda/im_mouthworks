"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoginScreen from "@/components/auth/login-screen"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in (stored in localStorage for demo)
    const user = localStorage.getItem("user")
    if (user) {
      setIsAuthenticated(true)
      const userData = JSON.parse(user)
      // Route to appropriate dashboard based on role
      if (userData.role === "patient") {
        router.push("/patient/dashboard")
      } else if (userData.role === "dentist") {
        router.push("/dentist/dashboard")
      } else if (userData.role === "hr") {
        router.push("/hr/dashboard")
      }
    }
    setLoading(false)
  }, [router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
          <p className="mt-4 text-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return <LoginScreen />
}
