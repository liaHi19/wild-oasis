import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qzjofxqvjqinbnnpqiad.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6am9meHF2anFpbmJubnBxaWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2OTU4NzAsImV4cCI6MjA0MzI3MTg3MH0.gTPblHnQoaw5pl5tKZFcraDVS7lIfJ1Ge7n5Q9C3zQk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
