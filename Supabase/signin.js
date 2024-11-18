
import { supabase } from '../Supabase/supabase';

export async function signIn(email, password) {

  if (!email || !password) {
    return { error: 'Por favor, preencha todos os campos!' };
  }
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  if (error) {
    return { error: error.message };
  }
  else
  {
    return {data};
  }
}