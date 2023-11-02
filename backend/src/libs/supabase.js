const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY

module.exports = {
  publicSupabase: createClient(supabaseUrl, supabaseAnonKey),
  privateSupabase: createClient(supabaseUrl, supabaseSecretKey),
} 