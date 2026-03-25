


// import React, { useRef, useEffect, useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
// import { Container } from "reactstrap";
// import { useSelector, useDispatch } from "react-redux";

// import logo from "../../assets/images/res-logo.png";
// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
// import supabase from "../../supabase";
// import { useTheme } from "../../context/useTheme";

// import "../../styles/header.css";

// const food__categories = [
//   { display: "🍕 Pizza",    path: "/category/Pizza" },
//   { display: "🍔 Burger",   path: "/category/Burger" },
//   { display: "🥪 Sandwich", path: "/category/Sandwich" },
//   { display: "🍝 Pasta",    path: "/category/Pasta" },
//   { display: "🍟 Fries",    path: "/category/Fries" },
//   { display: "🥤 Drinks",   path: "/category/Drink" },
// ];

// const Header = () => {
//   const menuRef = useRef(null);
//   const headerRef = useRef(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const { isDark, toggleTheme } = useTheme();

//   const totalQuantity = useSelector(
//     (state) => state.cart?.totalQuantity || 0
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // ✅ Get current logged in user
//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//     });

//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null);
//       }
//     );

//     return () => subscription.unsubscribe();
//   }, []);

//   const toggleMenu = () => {
//     menuRef.current?.classList.toggle("show__menu");
//   };

//   const toggleCart = () => {
//     dispatch(cartUiActions.toggle());
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   // ✅ Logout function
//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     setUser(null);
//     navigate("/home");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current?.classList.add("header__shrink");
//       } else {
//         headerRef.current?.classList.remove("header__shrink");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest(".nav__dropdown")) {
//         closeDropdown();
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <header className="header" ref={headerRef}>
//       <Container>
//         <div className="nav__wrapper d-flex align-items-center justify-content-between">

//           {/* ===== LOGO ===== */}
//           <div
//             className="logo"
//             onClick={() => navigate("/home")}
//             style={{ cursor: "pointer" }}
//           >
//             <img src={logo} alt="logo" />
//             <h5>Tasty Treat</h5>
//           </div>

//           {/* ===== NAVIGATION ===== */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <div
//               className="menu d-flex align-items-center"
//               style={{ gap: "35px" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button (mobile) */}
//               <div className="header__closeButton">
//                 <span onClick={toggleMenu}>
//                   <i className="ri-close-fill"></i>
//                 </span>
//               </div>

//               {/* 1. HOME */}
//               <NavLink
//                 to="/home"
//                 className={({ isActive }) =>
//                   isActive ? "active__menu" : ""
//                 }
//                 onClick={toggleMenu}
//               >
//                 Home
//               </NavLink>

//               {/* 2. MENU ITEMS DROPDOWN */}
//               <div
//                 className="nav__dropdown"
//                 style={{ position: "relative" }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <span
//                   onClick={toggleDropdown}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "4px",
//                   }}
//                 >
//                   Menu Items
//                   <i
//                     className={`ri-arrow-${
//                       dropdownOpen ? "up" : "down"
//                     }-s-line`}
//                   ></i>
//                 </span>

//                 {dropdownOpen && (
//                   <div className="dropdown__list">
//                     {food__categories.map((cat, index) => (
//                       <div
//                         key={index}
//                         className="dropdown__item"
//                         onClick={() => {
//                           navigate(cat.path);
//                           closeDropdown();
//                           toggleMenu();
//                         }}
//                       >
//                         {cat.display}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* 3. CART */}
//               <NavLink
//                 to="/cart"
//                 className={({ isActive }) =>
//                   isActive ? "active__menu" : ""
//                 }
//                 onClick={toggleMenu}
//               >
//                 Cart
//               </NavLink>

//               {/* 4. MY ORDERS */}
//               <NavLink
//                 to="/orders"
//                 className={({ isActive }) =>
//                   isActive ? "active__menu" : ""
//                 }
//                 onClick={toggleMenu}
//               >
//                 My Orders
//               </NavLink>

//               {/* 5. CONTACT */}
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "active__menu" : ""
//                 }
//                 onClick={toggleMenu}
//               >
//                 Contact
//               </NavLink>

//               {/* 6. LOGIN / LOGOUT */}
//               {user ? (
//                 <span
//                   onClick={handleLogout}
//                   style={{
//                     cursor: "pointer",
//                     fontWeight: "600",
//                     fontSize: "1rem",
//                     color: isDark ? "#e0e0e0" : "#212245",
//                   }}
//                 >
//                   Logout
//                 </span>
//               ) : (
//                 <NavLink
//                   to="/login"
//                   className={({ isActive }) =>
//                     isActive ? "active__menu" : ""
//                   }
//                   onClick={toggleMenu}
//                 >
//                   Login
//                 </NavLink>
//               )}

//             </div>
//           </div>

//           {/* ===== RIGHT SIDE ICONS ===== */}
//           <div className="nav__right d-flex align-items-center gap-4">

//             {/* Show username if logged in */}
//             {user && (
//               <span style={{
//                 fontSize: "0.85rem",
//                 color: isDark ? "#e0e0e0" : "#212245",
//                 fontWeight: "600",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "5px",
//               }}>
//                 <i className="ri-user-line"></i>
//                 {user.email?.split("@")[0]}
//               </span>
//             )}

//             {/* ✅ Dark / Light Mode Toggle */}
//             <span
//               onClick={toggleTheme}
//               style={{
//                 cursor: "pointer",
//                 fontSize: "1.3rem",
//                 color: isDark ? "#f0c040" : "#212245",
//                 transition: "all 0.3s",
//               }}
//               title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
//             </span>

//             {/* Cart Icon */}
//             <span className="cart__icon" onClick={toggleCart}>
//               <i className="ri-shopping-basket-line"></i>
//               <span className="cart__badge">{totalQuantity}</span>
//             </span>

//             {/* Mobile Menu */}
//             <span className="mobile__menu" onClick={toggleMenu}>
//               <i className="ri-menu-line"></i>
//             </span>

//           </div>

//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;


import React, { useRef, useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/images/res-logo.png";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import supabase from "../../supabase";
import { useTheme } from "../../context/useTheme";

import "../../styles/header.css";

const food__categories = [
  { display: "🍕 Pizza", path: "/category/Pizza" },
  { display: "🍔 Burger", path: "/category/Burger" },
  { display: "🥪 Sandwich", path: "/category/Sandwich" },
  { display: "🍝 Pasta", path: "/category/Pasta" },
  { display: "🍟 Fries", path: "/category/Fries" },
  { display: "🥤 Drinks", path: "/category/Drink" },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const { isDark, toggleTheme } = useTheme();

  // 🔥 DEBUG (IMPORTANT)
  console.log("Header isDark:", isDark);

  const totalQuantity = useSelector(
    (state) => state.cart?.totalQuantity || 0
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get logged-in user
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("show__menu");
  };

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/home");
  };

  // Header shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("header__shrink");
      } else {
        headerRef.current?.classList.remove("header__shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav__dropdown")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">

          {/* LOGO */}
          <div
            className="logo"
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* NAVIGATION */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center"
              style={{ gap: "35px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>

              <NavLink to="/home" onClick={toggleMenu}>
                Home
              </NavLink>

              {/* DROPDOWN */}
              <div
                className="nav__dropdown"
                style={{ position: "relative" }}
                onClick={(e) => e.stopPropagation()}
              >
                <span onClick={toggleDropdown}>
                  Menu Items
                  <i
                    className={`ri-arrow-${
                      dropdownOpen ? "up" : "down"
                    }-s-line`}
                  ></i>
                </span>

                {dropdownOpen && (
                  <div className="dropdown__list">
                    {food__categories.map((cat, index) => (
                      <div
                        key={index}
                        className="dropdown__item"
                        onClick={() => {
                          navigate(cat.path);
                          closeDropdown();
                          toggleMenu();
                        }}
                      >
                        {cat.display}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/cart" onClick={toggleMenu}>
                Cart
              </NavLink>

              <NavLink to="/orders" onClick={toggleMenu}>
                My Orders
              </NavLink>

              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>

              {user ? (
                <span
                  onClick={handleLogout}
                  style={{
                    cursor: "pointer",
                    fontWeight: "600",
                    color: isDark ? "#e0e0e0" : "#212245",
                  }}
                >
                  Logout
                </span>
              ) : (
                <NavLink to="/login" onClick={toggleMenu}>
                  Login
                </NavLink>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="nav__right d-flex align-items-center gap-4">

            {user && (
              <span style={{
                fontSize: "0.85rem",
                color: isDark ? "#e0e0e0" : "#212245",
                fontWeight: "600",
              }}>
                <i className="ri-user-line"></i>
                {user.email?.split("@")[0]}
              </span>
            )}

            {/* 🔥 FIXED TOGGLE */}
            <span
              onClick={() => {
                console.log("TOGGLE CLICKED");
                toggleTheme();
              }}
              style={{
                cursor: "pointer",
                fontSize: "1.3rem",
                color: isDark ? "#f0c040" : "#212245",
              }}
            >
              <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
            </span>

            {/* CART */}
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            {/* MOBILE MENU */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>

          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
