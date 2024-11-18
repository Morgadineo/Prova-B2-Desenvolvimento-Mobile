import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = ''; // Coloque aqui o link da URL do projeto do Supabase
const SUPABASE_KEY = ''; // Coloque aqui o link da Chave do projeto do Supabase

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
