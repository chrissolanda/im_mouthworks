import { getSupabaseClient } from "./supabase-client"

export const authService = {
  async signUp(email: string, password: string, name: string, role: "patient" | "dentist" | "hr") {
    const supabase = getSupabaseClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role,
        },
      },
    })

    if (error) throw error
    return data
  },

  async signIn(email: string, password: string) {
    const supabase = getSupabaseClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
    return data
  },

  async signOut() {
    const supabase = getSupabaseClient()
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentUser() {
    const supabase = getSupabaseClient()
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
    if (error) throw error
    return user
  },

  async getSession() {
    const supabase = getSupabaseClient()
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession()
    if (error) throw error
    return session
  },

  async updatePassword(email: string, newPassword: string) {
    const supabase = getSupabaseClient()
    
    try {
      // Use Supabase admin REST API via a server-side endpoint
      // For now, we'll throw an error directing to use server-side update
      const response = await fetch("/api/auth/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: newPassword,
        }),
      })

      if (!response.ok) {
        // Try to parse error message; if server isn't configured for admin ops,
        // fall back to sending a password reset email to the user (safer for client-only setups).
        let errJson: any = null
        try {
          errJson = await response.json()
        } catch (e) {
          // ignore parse errors
        }

        const errMsg = errJson?.message || null

        if (errMsg && errMsg.toLowerCase().includes("server not configured")) {
          // fallback: send password reset email using client anon key
          const { data, error } = await supabase.auth.resetPasswordForEmail(email)
          if (error) throw error
          return data
        }

        throw new Error(errMsg || "Failed to update password")
      }

      return await response.json()
    } catch (error) {
      throw error
    }
  },
}
