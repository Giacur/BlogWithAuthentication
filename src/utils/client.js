import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://nrzxrrqghoozxlzznjit.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yenhycnFnaG9venhsenpuaml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MTk2NzcsImV4cCI6MjAxOTE5NTY3N30.1CL1fneZBFs3a96QlPJd0ITLGdOH40HzySmpMdkjxSg";
export const supabase = createClient(supabaseUrl, supabaseKey)