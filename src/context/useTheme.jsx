// // import { useContext } from "react";
// // import { ThemeContext } from "./ThemeContext";

// // export const useTheme = () => {
// //   const context = useContext(ThemeContext);
// //   if (!context) {
// //     throw new Error("useTheme must be used within ThemeProvider");
// //   }
// //   return context;
// // };

// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// export const useTheme = () => useContext(ThemeContext);


import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
