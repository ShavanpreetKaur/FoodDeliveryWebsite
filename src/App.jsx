// // // import Layout from "./components/Layout/Layout";

// // // function App() {
// // //   return <Layout />;
// // // }

// // // export default App;


// // // // function App() {
// // // //   return <h1>App is Working ✅</h1>;
// // // // }

// // // // export default App;






// // import Layout from "./components/Layout/Layout";

// // function App() {
// //   return <Layout />;
// // }

// // export default App;





// import Layout from "./components/Layout/Layout";
// import supabase from "./supabase";
// import { useEffect } from "react";

// function App() {

//   useEffect(() => {
//     const testSupabase = async () => {
//       const { data, error } = await supabase
//         .from("messages")
//         .select("*");

//       if (error) {
//         console.log("❌ Supabase error:", error);
//       } else {
//         console.log("✅ Supabase connected!", data);
//       }
//     };

//     testSupabase();
//   }, []);

//   return <Layout />;
// }

// export default App;


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