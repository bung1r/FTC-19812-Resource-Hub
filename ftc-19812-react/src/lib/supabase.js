import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishKey = import.meta.env.VITE_SUPABASE_PUBLISH_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabasePublishKey
);