// /* eslint-disable import/prefer-default-export */
// // eslint-disable-next-line import/no-extraneous-dependencies
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jsywubldyyidgbflglao.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzeXd1YmxkeXlpZGdiZmxnbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNTc4MzYsImV4cCI6MjAzMzkzMzgzNn0.y2CYwR_fANx3CeSO4gQR-lNluiVHme68qGFVWac06l0";

// eslint-disable-next-line import/prefer-default-export
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
