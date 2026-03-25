// // // // // // import { useState, useEffect } from "react";
// // // // // // import { ThemeContext } from "./ThemeContext";

// // // // // // export const ThemeProvider = ({ children }) => {
// // // // // //   const [isDark, setIsDark] = useState(
// // // // // //     localStorage.getItem("theme") === "dark"
// // // // // //   );

// // // // // // //   useEffect(() => {
// // // // // // //     localStorage.setItem("theme", isDark ? "dark" : "light");
// // // // // // //     document.body.classList.toggle("dark__mode", isDark);
// // // // // // //   }, [isDark]);


// // // // // // useEffect(() => {
// // // // // //   const body = document.body;

// // // // // //   if (isDark) {
// // // // // //     body.classList.add("dark__mode");
// // // // // //   } else {
// // // // // //     body.classList.remove("dark__mode");
// // // // // //   }

// // // // // //   localStorage.setItem("theme", isDark ? "dark" : "light");
// // // // // // }, [isDark]);

// // // // // //   const toggleTheme = () => setIsDark((prev) => !prev);

// // // // // //   return (
// // // // // //     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
// // // // // //       {children}
// // // // // //     </ThemeContext.Provider>
// // // // // //   );
// // // // // // };

// // // // // import { useState, useEffect } from "react";
// // // // // import { ThemeContext } from "./ThemeContext";

// // // // // export const ThemeProvider = ({ children }) => {
// // // // //   const [isDark, setIsDark] = useState(() => {
// // // // //     return localStorage.getItem("theme") === "dark";
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     const body = document.body;

// // // // //     if (isDark) {
// // // // //       body.classList.add("dark__mode");
// // // // //     } else {
// // // // //       body.classList.remove("dark__mode");
// // // // //     }

// // // // //     localStorage.setItem("theme", isDark ? "dark" : "light");

// // // // //     // ✅ DEBUG (check in console)
// // // // //     console.log("Theme changed:", isDark);
// // // // //   }, [isDark]);

// // // // //   const toggleTheme = () => {
// // // // //     setIsDark((prev) => !prev);
// // // // //   };

// // // // //   return (
// // // // //     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
// // // // //       {children}
// // // // //     </ThemeContext.Provider>
// // // // //   );
// // // // // };


// // // // import { useState, useEffect } from "react";
// // // // import { ThemeContext } from "./ThemeContext";

// // // // export const ThemeProvider = ({ children }) => {
// // // //   const [isDark, setIsDark] = useState(false);

// // // //   // ✅ Load from localStorage ONLY ONCE
// // // //   useEffect(() => {
// // // //     const savedTheme = localStorage.getItem("theme");
// // // //     if (savedTheme === "dark") {
// // // //       setIsDark(true);
// // // //     }
// // // //   }, []);

// // // //   // ✅ Apply theme
// // // //   useEffect(() => {
// // // //     const body = document.body;

// // // //     if (isDark) {
// // // //       body.classList.add("dark__mode");
// // // //     } else {
// // // //       body.classList.remove("dark__mode");
// // // //     }

// // // //     localStorage.setItem("theme", isDark ? "dark" : "light");

// // // //     console.log("Theme changed:", isDark);
// // // //   }, [isDark]);

// // // //   // ✅ Toggle function (fixed)
// // // //   const toggleTheme = () => {
// // // //     setIsDark((prev) => !prev);
// // // //   };

// // // //   return (
// // // //     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
// // // //       {children}
// // // //     </ThemeContext.Provider>
// // // //   );
// // // // };



// // // import { useState, useEffect } from "react";
// // // import { ThemeContext } from "./ThemeContext";

// // // export const ThemeProvider = ({ children }) => {
// // //   const [isDark, setIsDark] = useState(() => {
// // //     return localStorage.getItem("theme") === "dark";
// // //   });

// // //   useEffect(() => {
// // //     const body = document.body;

// // //     body.classList.remove("dark__mode"); // reset

// // //     if (isDark) {
// // //       body.classList.add("dark__mode");
// // //     }

// // //     localStorage.setItem("theme", isDark ? "dark" : "light");

// // //     console.log("Theme changed:", isDark);
// // //   }, [isDark]);

// // //   const toggleTheme = () => {
// // //     setIsDark((prev) => !prev);
// // //   };

// // //   return (
// // //     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
// // //       {children}
// // //     </ThemeContext.Provider>
// // //   );
// // // };


// // import { useState, useEffect } from "react";
// // import { ThemeContext } from "./ThemeContext";

// // export const ThemeProvider = ({ children }) => {
// //   const [isDark, setIsDark] = useState(false);

// //   // Load theme once
// //   useEffect(() => {
// //     const saved = localStorage.getItem("theme");
// //     if (saved === "dark") {
// //       setIsDark(true);
// //     }
// //   }, []);

// //   // Apply theme
// //   useEffect(() => {
// //     console.log("Theme changed:", isDark);

// //     if (isDark) {
// //       document.body.classList.add("dark__mode");
// //     } else {
// //       document.body.classList.remove("dark__mode");
// //     }

// //     localStorage.setItem("theme", isDark ? "dark" : "light");
// //   }, [isDark]);

// //   // 🔥 IMPORTANT FIX
// //   const toggleTheme = () => {
// //     console.log("TOGGLE CLICKED");
// //     setIsDark(prev => !prev);
// //   };

// //   return (
// //     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };



// import { useState, useEffect } from "react";
// import { ThemeContext } from "./ThemeContext";

// export const ThemeProvider = ({ children }) => {

//   // ✅ FIX: initialize state directly (NO useEffect needed)
//   const [isDark, setIsDark] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   // ✅ Only handle side effects here
//   useEffect(() => {
//     if (isDark) {
//       document.body.classList.add("dark__mode");
//     } else {
//       document.body.classList.remove("dark__mode");
//     }

//     localStorage.setItem("theme", isDark ? "dark" : "light");

//     console.log("Theme changed:", isDark);
//   }, [isDark]);

//   const toggleTheme = () => {
//     console.log("TOGGLE CLICKED");
//     setIsDark(prev => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };



import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme
  useEffect(() => {
    console.log("Theme changed:", isDark);

    document.body.className = isDark ? "dark__mode" : "";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // 🔥 IMPORTANT: ensure new state reference
  const toggleTheme = () => {
    console.log("TOGGLE CLICKED");
    setIsDark(prev => {
      const newValue = !prev;
      console.log("NEW VALUE:", newValue);
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
