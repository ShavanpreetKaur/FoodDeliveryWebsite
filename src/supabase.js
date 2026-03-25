import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abvozgilanomoixucsrp.supabase.co";      // paste your Project URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFidm96Z2lsYW5vbW9peHVjc3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5OTU3ODYsImV4cCI6MjA4OTU3MTc4Nn0.Lof4wKwuNSkiCWFOUa-ZtKGCu9-DIjYXeGs0NfYtkE0";  // paste your anon public key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;