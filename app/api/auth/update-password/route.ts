import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

    if (!serviceRoleKey || !supabaseUrl) {
      console.error("Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL")
      return NextResponse.json(
        { message: "Server not configured for user admin operations" },
        { status: 500 },
      )
    }

    // Create a Supabase admin client using the service role key
    const supabase = createClient(supabaseUrl, serviceRoleKey)

    // Get the user list (the admin API may return { users: [...] } or an array depending on SDK version)
    const { data, error: fetchError } = await supabase.auth.admin.listUsers()

    if (fetchError) {
      console.error("Error fetching users:", fetchError)
      return NextResponse.json({ message: "Failed to fetch users" }, { status: 500 })
    }

    const userList = Array.isArray(data) ? data : (data && (data as any).users) || []

    const user = userList.find((u: any) => u.email === email)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Update the user password
    const { data: updated, error: updateError } = await supabase.auth.admin.updateUserById(user.id, {
      password,
    })

    if (updateError) {
      console.error("Error updating password:", updateError)
      return NextResponse.json({ message: "Failed to update password" }, { status: 500 })
    }

    return NextResponse.json({ message: "Password updated successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error in update-password API:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
