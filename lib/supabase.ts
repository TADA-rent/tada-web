// Creating a new supabase client object:
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { Database } from 'types/supabase'

export const supabaseClient = createBrowserSupabaseClient<any>()
