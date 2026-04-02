// import { useState, useEffect } from "react";
// import { ThemeContext } from "./ThemeContext";

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(() => {
//     // ✅ Persist dark mode preference across page refreshes
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     // ✅ Apply/remove dark class on body
//     if (isDark) {
//       document.body.classList.add("dark__mode");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark__mode");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   const toggleTheme = () => setIsDark((prev) => !prev);

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark__mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark__mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};