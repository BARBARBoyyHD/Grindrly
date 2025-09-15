import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../config/supabaseKey";
const supabase = createClient(supabaseUrl,supabaseKey);
export default supabase;
