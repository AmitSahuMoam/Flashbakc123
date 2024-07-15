import { supabase } from "../supabaseClient/supabaseClient";

// eslint-disable-next-line import/prefer-default-export
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data };
};


