import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Temp
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY ?? ""

export const useSupabase = () => {
    const [supabase] = useState(() => createClient(SUPABASE_URL, SUPABASE_KEY));
    return supabase;
};