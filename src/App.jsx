import Layout from "./components/Layout/Layout";
import supabase from "./supabase";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const testSupabase = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*");

      if (error) {
        console.log("❌ Supabase error:", error);
      } else {
        console.log("✅ Supabase connected!", data);
      }
    };

    testSupabase();
  }, []);

  return <Layout />;
}

export default App;