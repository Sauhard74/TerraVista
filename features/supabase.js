import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pxjndsqvvhrmlfgoxfhg.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4am5kc3F2dmhybWxmZ294ZmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2NTIyNjMsImV4cCI6MjA1MDIyODI2M30.aH79bw5Q9Rt1OWIsavvWn9hQnjzWIkfYuXyMtREVuac'; // Replace with your Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;