import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xugvfzoafaazhfywiqog.supabase.co";

const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Z3Zmem9hZmFhemhmeXdpcW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjYxMDksImV4cCI6MjA3NzMwMjEwOX0.6ntdp882r72OPv7N2cbzOUQJdXtkFXIKBY2eOfegclU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
