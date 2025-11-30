import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xpybqjfofdmkeiijvwnx.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweWJxamZvZmRta2VpaWp2d254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MDEyODAsImV4cCI6MjA4MDA3NzI4MH0.Dww9fKSwqzINDt18uhgcQJbeq4rnH3AEedEiteHZ-FQ"

let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createBrowserClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseClient
}
