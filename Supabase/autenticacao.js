import { supabase } from '../Supabase/supabase';

export async function signUp(email, senha) {
  if (!email || !senha) {
    return { error: 'Por favor, preencha todos os campos.' };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha,
  });

  if (error) return { error: error.message };
  return { data };
}

export async function signIn(email, password) {
  if (!email || !password) {
    return { error: 'Por favor, preencha todos os campos.' };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error: error.message };
  return { data };
}