import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://zxbbnoueosxqdkkigbmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YmJub3Vlb3N4cWRra2lnYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2ODEyNDcsImV4cCI6MjAxNDI1NzI0N30.acLhmn-NpCb5oQgjme98QtDMp03JJ8irkR9jpvwwnTs";

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
