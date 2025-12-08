"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { authService } from "@/lib/auth-service"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, Loader2, Bluetooth as Tooth } from "lucide-react"

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login, register } = useAuth()
  const router = useRouter()
  const [showRegister, setShowRegister] = useState(false)
  const [regName, setRegName] = useState("")
  const [regPhone, setRegPhone] = useState("")
  const [regRole, setRegRole] = useState<"patient" | "dentist" | "hr">("patient")
  const [regSpecialization, setRegSpecialization] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await login(email, password)
      // User context will handle navigation
      const userStr = localStorage.getItem("user")
      if (userStr) {
        const user = JSON.parse(userStr)
        if (user.role === "patient") {
          router.push("/patient/dashboard")
        } else if (user.role === "dentist") {
          router.push("/dentist/dashboard")
        } else if (user.role === "hr") {
          router.push("/hr/dashboard")
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      let res: any
      
      if (regRole === "patient") {
        // Patient registration via auth-context
        res = await register(email, password, regName, regPhone || undefined)
      } else if (regRole === "dentist") {
        // Dentist registration via Supabase Auth with specialization in metadata
        const supabase = (await import("@/lib/supabase-client")).getSupabaseClient()
        res = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: regName,
              role: "dentist",
              phone: regPhone || null,
              specialization: regSpecialization || null,
            },
          },
        })
        if (res.error) throw res.error
      } else {
        // HR registration via Supabase Auth
        res = await authService.signUp(email, password, regName, regRole)
      }

      if (res && res.status === "exists") {
        setError("User with this email already exists. Please sign in instead.")
        setShowRegister(false)
      } else {
        // After registering, log in the user
        try {
          await login(email, password)
          const userStr = localStorage.getItem("user")
          if (userStr) {
            const user = JSON.parse(userStr)
            if (user.role === "patient") {
              router.push("/patient/dashboard")
            } else if (user.role === "dentist") {
              router.push("/dentist/dashboard")
            } else if (user.role === "hr") {
              router.push("/hr/dashboard")
            }
          }
        } catch (loginErr) {
          setError("Account created, but auto-login failed. Please sign in manually.")
          setShowRegister(false)
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  const demoCredentials = [
    { email: "dentist@example.com", role: "Dentist" },
    { email: "hr@example.com", role: "HR/Admin" },
    { email: "sarah.smith@dental.com", role: "Dentist" },
    { email: "john.doe@dental.com", role: "Dentist" },
    { email: "emily.johnson@dental.com", role: "Dentist" },
    { email: "michael.chen@dental.com", role: "Dentist" },
    { email: "lisa.anderson@dental.com", role: "Dentist" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="bg-primary rounded-lg p-2">
              <Tooth className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Mouthworks</h1>
          </div>
          <p className="text-muted-foreground">Dental Clinic Management System</p>
        </div>

        {/* Login Card */}
        <Card className="border-2 shadow-lg">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={showRegister ? handleRegister : handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg flex gap-2">
                  <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="border-border focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="border-border focus:ring-primary"
                />
              </div>

              {showRegister && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Role</label>
                    <select
                      value={regRole}
                      onChange={(e) => setRegRole(e.target.value as "patient" | "dentist" | "hr")}
                      disabled={loading}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="patient">Patient</option>
                      <option value="dentist">Dentist</option>
                      <option value="hr">HR/Admin</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      disabled={loading}
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone (optional)</label>
                    <Input
                      type="tel"
                      placeholder="+1 234-567-8900"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      disabled={loading}
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  {regRole === "dentist" && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Specialization (optional)</label>
                      <Input
                        type="text"
                        placeholder="e.g., General Dentistry"
                        value={regSpecialization}
                        onChange={(e) => setRegSpecialization(e.target.value)}
                        disabled={loading}
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  )}
                </>
              )}

              <div className="flex gap-2">
                <Button
                  type="submit"
                  disabled={loading || !email || !password || (showRegister && !regName)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 h-10"
                >
                  {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  {loading ? (showRegister ? "Registering..." : "Signing in...") : showRegister ? "Register" : "Sign In"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                      if (showRegister) {
                        // When in registration mode, Back should go to dashboard
                        try {
                          router.replace("/patient/dashboard")
                        } catch (e) {
                          try {
                            window.location.href = "/patient/dashboard"
                          } catch (err) {
                            setShowRegister(false)
                          }
                        }
                        setTimeout(() => {
                          if (typeof window !== "undefined" && window.location.pathname !== "/patient/dashboard") {
                            window.location.href = "/patient/dashboard"
                          }
                        }, 500)
                      } else {
                        setShowRegister(true)
                      }
                    }}
                  className="px-4"
                >
                  {showRegister ? "Back" : "Register"}
                </Button>
              </div>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-xs font-medium text-muted-foreground mb-3">Demo Credentials:</p>
              <div className="space-y-2">
                {demoCredentials.map((cred) => (
                  <button
                    key={cred.email}
                    type="button"
                    onClick={() => {
                      setEmail(cred.email)
                      setPassword("demo")
                    }}
                    className="w-full p-2 text-left text-sm border border-border rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="font-medium text-foreground">{cred.role}</div>
                    <div className="text-xs text-muted-foreground">{cred.email}</div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">Any password works with demo accounts</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
