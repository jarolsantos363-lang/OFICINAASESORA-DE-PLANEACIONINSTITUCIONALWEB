
import { createClient } from '@supabase/supabase-js';

// Credentials derived from the user provided input.
// Note: In a production environment, these should be environment variables.

const SUPABASE_URL = 'https://jfyohucfvfyvcujfoes.supabase.co';
// The user provided JWT is typically the ANON key in this context
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeW9odWNmdmZ5dmN1dWpmb2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MTM3NjAsImV4cCI6MjA4MDk4OTc2MH0.FVtPvYzHEUU9J_J8EFdg33hIGD7NtSx1PB0qHu5q3wI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
