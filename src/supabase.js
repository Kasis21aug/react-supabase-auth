import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dechhotzwdonqehaubhw.supabase.co";
const supabaseAnonKey = "sb_publishable_owxYtV5tCevRj55pva1hwA_Tf7ENFET";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);