// // // // // // // // // import React, { useRef, useEffect } from "react";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // import { Container } from "reactstrap";
// // // // // // // // // import logo from "../../assets/images/res-logo.png";
// // // // // // // // // import { NavLink, Link } from "react-router-dom";
// // // // // // // // // import { useSelector, useDispatch } from "react-redux";

// // // // // // // // // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // // // // // // // // import "../../styles/header.css";

// // // // // // // // // const nav__links = [
// // // // // // // // //   {
// // // // // // // // //     display: "Home",
// // // // // // // // //     path: "/home",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     display: "Foods",
// // // // // // // // //     path: "/pizzas",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     display: "Cart",
// // // // // // // // //     path: "/cart",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     display: "Contact",
// // // // // // // // //     path: "/contact",
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // const Header = () => {
// // // // // // // // //   const menuRef = useRef(null);
// // // // // // // // //   const headerRef = useRef(null);
// // // // // // // // //   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
// // // // // // // // //   const dispatch = useDispatch();

// // // // // // // // //   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
// // // // // // // // //   let navigate = useNavigate();

// // // // // // // // //   const toggleCart = () => {
// // // // // // // // //     dispatch(cartUiActions.toggle());
// // // // // // // // //   };

// // // // // // // // //   console.log(menuRef?.current?.classList.value);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     window.addEventListener("scroll", () => {
// // // // // // // // //       if (
// // // // // // // // //         document.body.scrollTop > 80 ||
// // // // // // // // //         document.documentElement.scrollTop > 80
// // // // // // // // //       ) {
// // // // // // // // //         headerRef.current.classList.add("header__shrink");
// // // // // // // // //       } else {
// // // // // // // // //         headerRef.current.classList.remove("header__shrink");
// // // // // // // // //       }
// // // // // // // // //     });

// // // // // // // // //     return () => window.removeEventListener("scroll");
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <header className="header" ref={headerRef}>
// // // // // // // // //       <Container>
// // // // // // // // //         <div className="nav__wrapper d-flex align-items-center justify-content-between">
// // // // // // // // //           <div className="logo" onClick={() => navigate("/home")}>
// // // // // // // // //             <img src={logo} alt="logo" />
// // // // // // // // //             <h5>Tasty Treat</h5>
// // // // // // // // //           </div>
// // // // // // // // //           {/* ======= menu ======= */}
// // // // // // // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // // // // // // //             <div
// // // // // // // // //               className="menu d-flex align-items-center gap-5"
// // // // // // // // //               onClick={(event) => event.stopPropagation()}
// // // // // // // // //             >
// // // // // // // // //               <div className="header__closeButton">
// // // // // // // // //                 <span onClick={toggleMenu}>
// // // // // // // // //                   <i className="ri-close-fill"></i>
// // // // // // // // //                 </span>
// // // // // // // // //               </div>
// // // // // // // // //               {nav__links.map((item, index) => (
// // // // // // // // //                 <NavLink
// // // // // // // // //                   to={item.path}
// // // // // // // // //                   key={index}
// // // // // // // // //                   className={(navClass) =>
// // // // // // // // //                     navClass.isActive ? "active__menu" : ""
// // // // // // // // //                   }
// // // // // // // // //                   onClick={toggleMenu}
// // // // // // // // //                 >
// // // // // // // // //                   {item.display}
// // // // // // // // //                 </NavLink>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* ======== nav right icons ========= */}
// // // // // // // // //           <div className="nav__right d-flex align-items-center gap-4">
// // // // // // // // //             <span className="cart__icon" onClick={toggleCart}>
// // // // // // // // //               <i className="ri-shopping-basket-line"></i>
// // // // // // // // //               <span className="cart__badge">{totalQuantity}</span>
// // // // // // // // //             </span>
            
// // // // // // // // //             <span className="mobile__menu" onClick={toggleMenu}>
// // // // // // // // //               <i className="ri-menu-line"></i>
// // // // // // // // //             </span>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </Container>
// // // // // // // // //     </header>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Header;


// // // // // // // // import React, { useRef, useEffect } from "react";
// // // // // // // // import { useNavigate, NavLink } from "react-router-dom";
// // // // // // // // import { Container } from "reactstrap";
// // // // // // // // import { useSelector, useDispatch } from "react-redux";

// // // // // // // // import logo from "../../assets/images/res-logo.png";
// // // // // // // // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // // // // // // // import "../../styles/header.css";

// // // // // // // // const nav__links = [
// // // // // // // //   { display: "Home", path: "/home" },
// // // // // // // //   { display: "Foods", path: "/pizzas" },
// // // // // // // //   { display: "Cart", path: "/cart" },
// // // // // // // //   { display: "Contact", path: "/contact" },
// // // // // // // // ];

// // // // // // // // const Header = () => {
// // // // // // // //   const menuRef = useRef(null);
// // // // // // // //   const headerRef = useRef(null);

// // // // // // // //   // ✅ SAFE selector
// // // // // // // //   const totalQuantity = useSelector(
// // // // // // // //     (state) => state.cart?.totalQuantity || 0
// // // // // // // //   );

// // // // // // // //   const dispatch = useDispatch();
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const toggleMenu = () => {
// // // // // // // //     menuRef.current?.classList.toggle("show__menu");
// // // // // // // //   };

// // // // // // // //   const toggleCart = () => {
// // // // // // // //     dispatch(cartUiActions.toggle());
// // // // // // // //   };

// // // // // // // //   // ✅ FIXED useEffect
// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => {
// // // // // // // //       if (
// // // // // // // //         document.body.scrollTop > 80 ||
// // // // // // // //         document.documentElement.scrollTop > 80
// // // // // // // //       ) {
// // // // // // // //         headerRef.current?.classList.add("header__shrink");
// // // // // // // //       } else {
// // // // // // // //         headerRef.current?.classList.remove("header__shrink");
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     window.addEventListener("scroll", handleScroll);

// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener("scroll", handleScroll); // ✅ correct
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <header className="header" ref={headerRef}>
// // // // // // // //       <Container>
// // // // // // // //         <div className="nav__wrapper d-flex align-items-center justify-content-between">
          
// // // // // // // //           {/* LOGO */}
// // // // // // // //           <div className="logo" onClick={() => navigate("/home")}>
// // // // // // // //             <img src={logo} alt="logo" />
// // // // // // // //             <h5>Tasty Treat</h5>
// // // // // // // //           </div>

// // // // // // // //           {/* MENU */}
// // // // // // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // // // // // //             <div
// // // // // // // //               className="menu d-flex align-items-center gap-5"
// // // // // // // //               onClick={(e) => e.stopPropagation()}
// // // // // // // //             >
// // // // // // // //               <div className="header__closeButton">
// // // // // // // //                 <span onClick={toggleMenu}>
// // // // // // // //                   <i className="ri-close-fill"></i>
// // // // // // // //                 </span>
// // // // // // // //               </div>

// // // // // // // //               {nav__links.map((item, index) => (
// // // // // // // //                 <NavLink
// // // // // // // //                   to={item.path}
// // // // // // // //                   key={index}
// // // // // // // //                   className={({ isActive }) =>
// // // // // // // //                     isActive ? "active__menu" : ""
// // // // // // // //                   }
// // // // // // // //                   onClick={toggleMenu}
// // // // // // // //                 >
// // // // // // // //                   {item.display}
// // // // // // // //                 </NavLink>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* RIGHT SIDE */}
// // // // // // // //           <div className="nav__right d-flex align-items-center gap-4">
// // // // // // // //             <span className="cart__icon" onClick={toggleCart}>
// // // // // // // //               <i className="ri-shopping-basket-line"></i>
// // // // // // // //               <span className="cart__badge">{totalQuantity}</span>
// // // // // // // //             </span>

// // // // // // // //             <span className="mobile__menu" onClick={toggleMenu}>
// // // // // // // //               <i className="ri-menu-line"></i>
// // // // // // // //             </span>
// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </Container>
// // // // // // // //     </header>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Header;



// // // // // // // // // import React, { useRef, useEffect } from "react";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // import { Container } from "reactstrap";
// // // // // // // // // import logo from "../../assets/images/res-logo.png";
// // // // // // // // // import { NavLink, Link } from "react-router-dom";
// // // // // // // // // import { useSelector, useDispatch } from "react-redux";

// // // // // // // // // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // // // // // // // // import "../../styles/header.css";

// // // // // // // // // const nav__links = [
// // // // // // // // //   {
// // // // // // // // //     display: "Home",
// // // // // // // // //     path: "/home",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     display: "Foods",
// // // // // // // // //     path: "/pizzas",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     display: "Cart",
// // // // // // // // //     path: "/cart",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     display: "Contact",
// // // // // // // // //     path: "/contact",
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // const Header = () => {
// // // // // // // // //   const menuRef = useRef(null);
// // // // // // // // //   const headerRef = useRef(null);
// // // // // // // // //   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
// // // // // // // // //   const dispatch = useDispatch();

// // // // // // // // //   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
// // // // // // // // //   let navigate = useNavigate();

// // // // // // // // //   const toggleCart = () => {
// // // // // // // // //     dispatch(cartUiActions.toggle());
// // // // // // // // //   };

// // // // // // // // //   console.log(menuRef?.current?.classList.value);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     window.addEventListener("scroll", () => {
// // // // // // // // //       if (
// // // // // // // // //         document.body.scrollTop > 80 ||
// // // // // // // // //         document.documentElement.scrollTop > 80
// // // // // // // // //       ) {
// // // // // // // // //         headerRef.current.classList.add("header__shrink");
// // // // // // // // //       } else {
// // // // // // // // //         headerRef.current.classList.remove("header__shrink");
// // // // // // // // //       }
// // // // // // // // //     });

// // // // // // // // //     return () => window.removeEventListener("scroll");
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <header className="header" ref={headerRef}>
// // // // // // // // //       <Container>
// // // // // // // // //         <div className="nav__wrapper d-flex align-items-center justify-content-between">
// // // // // // // // //           <div className="logo" onClick={() => navigate("/home")}>
// // // // // // // // //             <img src={logo} alt="logo" />
// // // // // // // // //             <h5>Tasty Treat</h5>
// // // // // // // // //           </div>
// // // // // // // // //           {/* ======= menu ======= */}
// // // // // // // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // // // // // // //             <div
// // // // // // // // //               className="menu d-flex align-items-center gap-5"
// // // // // // // // //               onClick={(event) => event.stopPropagation()}
// // // // // // // // //             >
// // // // // // // // //               <div className="header__closeButton">
// // // // // // // // //                 <span onClick={toggleMenu}>
// // // // // // // // //                   <i className="ri-close-fill"></i>
// // // // // // // // //                 </span>
// // // // // // // // //               </div>
// // // // // // // // //               {nav__links.map((item, index) => (
// // // // // // // // //                 <NavLink
// // // // // // // // //                   to={item.path}
// // // // // // // // //                   key={index}
// // // // // // // // //                   className={(navClass) =>
// // // // // // // // //                     navClass.isActive ? "active__menu" : ""
// // // // // // // // //                   }
// // // // // // // // //                   onClick={toggleMenu}
// // // // // // // // //                 >
// // // // // // // // //                   {item.display}
// // // // // // // // //                 </NavLink>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* ======== nav right icons ========= */}
// // // // // // // // //           <div className="nav__right d-flex align-items-center gap-4">
// // // // // // // // //             <span className="cart__icon" onClick={toggleCart}>
// // // // // // // // //               <i className="ri-shopping-basket-line"></i>
// // // // // // // // //               <span className="cart__badge">{totalQuantity}</span>
// // // // // // // // //             </span>
            
// // // // // // // // //             <span className="mobile__menu" onClick={toggleMenu}>
// // // // // // // // //               <i className="ri-menu-line"></i>
// // // // // // // // //             </span>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </Container>
// // // // // // // // //     </header>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Header;





// // // // // // // import React from "react";
// // // // // // // import { Container } from "reactstrap";

// // // // // // // const Header = () => {
// // // // // // //   return (
// // // // // // //     <header>
// // // // // // //       <Container>
// // // // // // //         <h1>Header Test</h1>
// // // // // // //       </Container>
// // // // // // //     </header>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Header;







// // // // // // import React, { useRef, useEffect } from "react";
// // // // // // import { useNavigate, NavLink } from "react-router-dom";
// // // // // // import { Container } from "reactstrap";
// // // // // // import { useSelector, useDispatch } from "react-redux";

// // // // // // import logo from "../../assets/images/res-logo.png";
// // // // // // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // // // // // import "../../styles/header.css";

// // // // // // const nav__links = [
// // // // // //   { display: "Home", path: "/home" },
// // // // // //   { display: "Foods", path: "/pizzas" },
// // // // // //   { display: "Cart", path: "/cart" },
// // // // // //   { display: "Contact", path: "/contact" },
// // // // // // ];

// // // // // // const Header = () => {
// // // // // //   const menuRef = useRef(null);
// // // // // //   const headerRef = useRef(null);

// // // // // //   const totalQuantity = useSelector(
// // // // // //     (state) => state.cart?.totalQuantity || 0
// // // // // //   );

// // // // // //   const dispatch = useDispatch();
// // // // // //   const navigate = useNavigate();

// // // // // //   const toggleMenu = () => {
// // // // // //     menuRef.current?.classList.toggle("show__menu");
// // // // // //   };

// // // // // //   const toggleCart = () => {
// // // // // //     dispatch(cartUiActions.toggle());
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       if (
// // // // // //         document.body.scrollTop > 80 ||
// // // // // //         document.documentElement.scrollTop > 80
// // // // // //       ) {
// // // // // //         headerRef.current?.classList.add("header__shrink");
// // // // // //       } else {
// // // // // //         headerRef.current?.classList.remove("header__shrink");
// // // // // //       }
// // // // // //     };

// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <header className="header" ref={headerRef}>
// // // // // //       <Container>
// // // // // //         <div className="nav__wrapper d-flex align-items-center justify-content-between">

// // // // // //           {/* LOGO */}
// // // // // //           <div className="logo" onClick={() => navigate("/home")}>
// // // // // //             <img src={logo} alt="logo" />
// // // // // //             <h5>Tasty Treat</h5>
// // // // // //           </div>

// // // // // //           {/* MENU */}
// // // // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // // // //             <div
// // // // // //               className="menu d-flex align-items-center gap-5"
// // // // // //               onClick={(e) => e.stopPropagation()}
// // // // // //             >
// // // // // //               <div className="header__closeButton">
// // // // // //                 <span onClick={toggleMenu}>
// // // // // //                   <i className="ri-close-fill"></i>
// // // // // //                 </span>
// // // // // //               </div>

// // // // // //               {nav__links.map((item, index) => (
// // // // // //                 <NavLink
// // // // // //                   to={item.path}
// // // // // //                   key={index}
// // // // // //                   className={({ isActive }) =>
// // // // // //                     isActive ? "active__menu" : ""
// // // // // //                   }
// // // // // //                   onClick={toggleMenu}
// // // // // //                 >
// // // // // //                   {item.display}
// // // // // //                 </NavLink>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* RIGHT SIDE */}
// // // // // //           <div className="nav__right d-flex align-items-center gap-4">
// // // // // //             <span className="cart__icon" onClick={toggleCart}>
// // // // // //               <i className="ri-shopping-basket-line"></i>
// // // // // //               <span className="cart__badge">{totalQuantity}</span>
// // // // // //             </span>

// // // // // //             <span className="mobile__menu" onClick={toggleMenu}>
// // // // // //               <i className="ri-menu-line"></i>
// // // // // //             </span>
// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </Container>
// // // // // //     </header>
// // // // // //   );
// // // // // // };

// // // // // // export default Header;








// // // // // import React, { useRef, useEffect } from "react";
// // // // // import { useNavigate, NavLink } from "react-router-dom";
// // // // // import { Container } from "reactstrap";
// // // // // import { useSelector, useDispatch } from "react-redux";

// // // // // import logo from "../../assets/images/res-logo.png";
// // // // // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // // // // import "../../styles/header.css";

// // // // // const nav__links = [
// // // // //   { display: "Home", path: "/home" },
// // // // //   { display: "Pizza", path: "/category/Pizza" },
// // // // //   { display: "Burgers", path: "/category/Burger" },
// // // // //   { display: "Sandwiches", path: "/category/Sandwich" },
// // // // //   { display: "Drinks", path: "/category/Drink" },
// // // // //   { display: "Cart", path: "/cart" },
// // // // //   { display: "Contact", path: "/contact" },
// // // // // ];

// // // // // const Header = () => {
// // // // //   const menuRef = useRef(null);
// // // // //   const headerRef = useRef(null);

// // // // //   const totalQuantity = useSelector(
// // // // //     (state) => state.cart?.totalQuantity || 0
// // // // //   );

// // // // //   const dispatch = useDispatch();
// // // // //   const navigate = useNavigate();

// // // // //   const toggleMenu = () => {
// // // // //     menuRef.current?.classList.toggle("show__menu");
// // // // //   };

// // // // //   const toggleCart = () => {
// // // // //     dispatch(cartUiActions.toggle());
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       if (
// // // // //         document.body.scrollTop > 80 ||
// // // // //         document.documentElement.scrollTop > 80
// // // // //       ) {
// // // // //         headerRef.current?.classList.add("header__shrink");
// // // // //       } else {
// // // // //         headerRef.current?.classList.remove("header__shrink");
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   return (
// // // // //     <header className="header" ref={headerRef}>
// // // // //       <Container>
// // // // //         <div className="nav__wrapper d-flex align-items-center justify-content-between">

// // // // //           {/* LOGO */}
// // // // //           <div className="logo" onClick={() => navigate("/home")}>
// // // // //             <img src={logo} alt="logo" />
// // // // //             <h5>Tasty Treat</h5>
// // // // //           </div>

// // // // //           {/* MENU */}
// // // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // // //             <div
// // // // //               className="menu d-flex align-items-center gap-4"
// // // // //               onClick={(e) => e.stopPropagation()}
// // // // //             >
// // // // //               <div className="header__closeButton">
// // // // //                 <span onClick={toggleMenu}>
// // // // //                   <i className="ri-close-fill"></i>
// // // // //                 </span>
// // // // //               </div>

// // // // //               {nav__links.map((item, index) => (
// // // // //                 <NavLink
// // // // //                   to={item.path}
// // // // //                   key={index}
// // // // //                   className={({ isActive }) =>
// // // // //                     isActive ? "active__menu" : ""
// // // // //                   }
// // // // //                   onClick={toggleMenu}
// // // // //                 >
// // // // //                   {item.display}
// // // // //                 </NavLink>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* RIGHT SIDE */}
// // // // //           <div className="nav__right d-flex align-items-center gap-4">
// // // // //             <span className="cart__icon" onClick={toggleCart}>
// // // // //               <i className="ri-shopping-basket-line"></i>
// // // // //               <span className="cart__badge">{totalQuantity}</span>
// // // // //             </span>

// // // // //             <span className="mobile__menu" onClick={toggleMenu}>
// // // // //               <i className="ri-menu-line"></i>
// // // // //             </span>
// // // // //           </div>

// // // // //         </div>
// // // // //       </Container>
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // // export default Header;




// // // // import React, { useRef, useEffect } from "react";
// // // // import { useNavigate, NavLink } from "react-router-dom";
// // // // import { Container } from "reactstrap";
// // // // import { useSelector, useDispatch } from "react-redux";

// // // // import logo from "../../assets/images/res-logo.png";
// // // // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // // // import "../../styles/header.css";

// // // // const nav__links = [
// // // //   { display: "Home",       path: "/home" },
// // // //   { display: "Pizza",      path: "/category/Pizza" },
// // // //   { display: "Burgers",    path: "/category/Burger" },
// // // //   { display: "Sandwiches", path: "/category/Sandwich" },
// // // //   { display: "Pasta",      path: "/category/Pasta" },
// // // //   { display: "Fries",      path: "/category/Fries" },
// // // //   { display: "Drinks",     path: "/category/Drink" },
// // // //   { display: "Cart",       path: "/cart" },
// // // //   { display: "Contact",    path: "/contact" },
// // // // ];

// // // // const Header = () => {
// // // //   const menuRef = useRef(null);
// // // //   const headerRef = useRef(null);

// // // //   const totalQuantity = useSelector(
// // // //     (state) => state.cart?.totalQuantity || 0
// // // //   );

// // // //   const dispatch = useDispatch();
// // // //   const navigate = useNavigate();

// // // //   const toggleMenu = () => {
// // // //     menuRef.current?.classList.toggle("show__menu");
// // // //   };

// // // //   const toggleCart = () => {
// // // //     dispatch(cartUiActions.toggle());
// // // //   };

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       if (
// // // //         document.body.scrollTop > 80 ||
// // // //         document.documentElement.scrollTop > 80
// // // //       ) {
// // // //         headerRef.current?.classList.add("header__shrink");
// // // //       } else {
// // // //         headerRef.current?.classList.remove("header__shrink");
// // // //       }
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   return (
// // // //     <header className="header" ref={headerRef}>
// // // //       <Container>
// // // //         <div className="nav__wrapper d-flex align-items-center justify-content-between">

// // // //           {/* LOGO */}
// // // //           <div className="logo" onClick={() => navigate("/home")}>
// // // //             <img src={logo} alt="logo" />
// // // //             <h5>Tasty Treat</h5>
// // // //           </div>

// // // //           {/* NAVIGATION MENU */}
// // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // //             <div
// // // //               className="menu d-flex align-items-center gap-3"
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <div className="header__closeButton">
// // // //                 <span onClick={toggleMenu}>
// // // //                   <i className="ri-close-fill"></i>
// // // //                 </span>
// // // //               </div>

// // // //               {nav__links.map((item, index) => (
// // // //                 <NavLink
// // // //                   to={item.path}
// // // //                   key={index}
// // // //                   className={({ isActive }) =>
// // // //                     isActive ? "active__menu" : ""
// // // //                   }
// // // //                   onClick={toggleMenu}
// // // //                 >
// // // //                   {item.display}
// // // //                 </NavLink>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* RIGHT SIDE ICONS */}
// // // //           <div className="nav__right d-flex align-items-center gap-4">
// // // //             <span className="cart__icon" onClick={toggleCart}>
// // // //               <i className="ri-shopping-basket-line"></i>
// // // //               <span className="cart__badge">{totalQuantity}</span>
// // // //             </span>

// // // //             <span className="mobile__menu" onClick={toggleMenu}>
// // // //               <i className="ri-menu-line"></i>
// // // //             </span>
// // // //           </div>

// // // //         </div>
// // // //       </Container>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;






// // // import React, { useRef, useEffect, useState } from "react";
// // // import { useNavigate, NavLink } from "react-router-dom";
// // // import { Container } from "reactstrap";
// // // import { useSelector, useDispatch } from "react-redux";

// // // import logo from "../../assets/images/res-logo.png";
// // // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // // import "../../styles/header.css";

// // // const food__categories = [
// // //   { display: "🍕 Pizza",     path: "/category/Pizza" },
// // //   { display: "🍔 Burger",    path: "/category/Burger" },
// // //   { display: "🥪 Sandwich",  path: "/category/Sandwich" },
// // //   { display: "🍝 Pasta",     path: "/category/Pasta" },
// // //   { display: "🍟 Fries",     path: "/category/Fries" },
// // //   { display: "🥤 Drinks",    path: "/category/Drink" },
// // // ];

// // // const Header = () => {
// // //   const menuRef = useRef(null);
// // //   const headerRef = useRef(null);
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);

// // //   const totalQuantity = useSelector(
// // //     (state) => state.cart?.totalQuantity || 0
// // //   );

// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();

// // //   const toggleMenu = () => {
// // //     menuRef.current?.classList.toggle("show__menu");
// // //   };

// // //   const toggleCart = () => {
// // //     dispatch(cartUiActions.toggle());
// // //   };

// // //   const toggleDropdown = () => {
// // //     setDropdownOpen(!dropdownOpen);
// // //   };

// // //   const closeDropdown = () => {
// // //     setDropdownOpen(false);
// // //   };

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (
// // //         document.body.scrollTop > 80 ||
// // //         document.documentElement.scrollTop > 80
// // //       ) {
// // //         headerRef.current?.classList.add("header__shrink");
// // //       } else {
// // //         headerRef.current?.classList.remove("header__shrink");
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   // Close dropdown when clicking outside
// // //   useEffect(() => {
// // //     const handleClickOutside = (e) => {
// // //       if (!e.target.closest(".nav__dropdown")) {
// // //         closeDropdown();
// // //       }
// // //     };
// // //     document.addEventListener("click", handleClickOutside);
// // //     return () => document.removeEventListener("click", handleClickOutside);
// // //   }, []);

// // //   return (
// // //     <header className="header" ref={headerRef}>
// // //       <Container>
// // //         <div className="nav__wrapper d-flex align-items-center justify-content-between">

// // //           {/* ===== LOGO ===== */}
// // //           <div className="logo" onClick={() => navigate("/home")}
// // //             style={{ cursor: "pointer" }}>
// // //             <img src={logo} alt="logo" />
// // //             <h5>Tasty Treat</h5>
// // //           </div>

// // //           {/* ===== NAVIGATION MENU ===== */}
// // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // //             <div
// // //               className="menu d-flex align-items-center"
// // //               style={{ gap: "35px" }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               {/* Close Button (mobile) */}
// // //               <div className="header__closeButton">
// // //                 <span onClick={toggleMenu}>
// // //                   <i className="ri-close-fill"></i>
// // //                 </span>
// // //               </div>

// // //               {/* 1. HOME */}
// // //               <NavLink
// // //                 to="/home"
// // //                 className={({ isActive }) =>
// // //                   isActive ? "active__menu nav__link" : "nav__link"
// // //                 }
// // //                 style={{ whiteSpace: "nowrap" }}
// // //               >
// // //                 Home
// // //               </NavLink>

// // //               {/* 2. ITEMS DROPDOWN */}
// // //               <div
// // //                 className="nav__dropdown"
// // //                 style={{ position: "relative" }}
// // //                 onClick={(e) => e.stopPropagation()}
// // //               >
// // //                 <span
// // //                   className="nav__link"
// // //                   onClick={toggleDropdown}
// // //                   style={{
// // //                     cursor: "pointer",
// // //                     display: "flex",
// // //                     alignItems: "center",
// // //                     gap: "4px",
// // //                     whiteSpace: "nowrap",
// // //                   }}
// // //                 >
// // //                   Menu Items
// // //                   <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line`}></i>
// // //                 </span>

// // //                 {/* Dropdown Menu */}
// // //                 {dropdownOpen && (
// // //                   <div
// // //                     style={{
// // //                       position: "absolute",
// // //                       top: "100%",
// // //                       left: "0",
// // //                       backgroundColor: "#fff",
// // //                       boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
// // //                       borderRadius: "12px",
// // //                       padding: "10px 0",
// // //                       minWidth: "180px",
// // //                       zIndex: 9999,
// // //                       marginTop: "10px",
// // //                     }}
// // //                   >
// // //                     {food__categories.map((cat, index) => (
// // //                       <div
// // //                         key={index}
// // //                         onClick={() => {
// // //                           navigate(cat.path);
// // //                           closeDropdown();
// // //                           toggleMenu();
// // //                         }}
// // //                         style={{
// // //                           padding: "10px 20px",
// // //                           cursor: "pointer",
// // //                           fontSize: "0.95rem",
// // //                           fontWeight: "500",
// // //                           color: "#333",
// // //                           transition: "all 0.2s",
// // //                           borderRadius: "8px",
// // //                           margin: "2px 8px",
// // //                         }}
// // //                         onMouseEnter={(e) => {
// // //                           e.currentTarget.style.backgroundColor = "#fff5f5";
// // //                           e.currentTarget.style.color = "#df2020";
// // //                         }}
// // //                         onMouseLeave={(e) => {
// // //                           e.currentTarget.style.backgroundColor = "transparent";
// // //                           e.currentTarget.style.color = "#333";
// // //                         }}
// // //                       >
// // //                         {cat.display}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* 3. CART */}
// // //               <NavLink
// // //                 to="/cart"
// // //                 className={({ isActive }) =>
// // //                   isActive ? "active__menu nav__link" : "nav__link"
// // //                 }
// // //                 style={{ whiteSpace: "nowrap" }}
// // //                 onClick={toggleMenu}
// // //               >
// // //                 Cart
// // //               </NavLink>

// // //               {/* 4. CONTACT */}
// // //               <NavLink
// // //                 to="/contact"
// // //                 className={({ isActive }) =>
// // //                   isActive ? "active__menu nav__link" : "nav__link"
// // //                 }
// // //                 style={{ whiteSpace: "nowrap" }}
// // //                 onClick={toggleMenu}
// // //               >
// // //                 Contact
// // //               </NavLink>

// // //             </div>
// // //           </div>

// // //           {/* ===== RIGHT SIDE ICONS ===== */}
// // //           <div className="nav__right d-flex align-items-center gap-4">
// // //             <span className="cart__icon" onClick={toggleCart}>
// // //               <i className="ri-shopping-basket-line"></i>
// // //               <span className="cart__badge">{totalQuantity}</span>
// // //             </span>

// // //             <span className="mobile__menu" onClick={toggleMenu}>
// // //               <i className="ri-menu-line"></i>
// // //             </span>
// // //           </div>

// // //         </div>
// // //       </Container>
// // //     </header>
// // //   );
// // // };

// // // export default Header;







// // import React, { useRef, useEffect, useState } from "react";
// // import { useNavigate, NavLink } from "react-router-dom";
// // import { Container } from "reactstrap";
// // import { useSelector, useDispatch } from "react-redux";

// // import logo from "../../assets/images/res-logo.png";
// // import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// // import "../../styles/header.css";

// // const food__categories = [
// //   { display: "🍕 Pizza",     path: "/category/Pizza" },
// //   { display: "🍔 Burger",    path: "/category/Burger" },
// //   { display: "🥪 Sandwich",  path: "/category/Sandwich" },
// //   { display: "🍝 Pasta",     path: "/category/Pasta" },
// //   { display: "🍟 Fries",     path: "/category/Fries" },
// //   { display: "🥤 Drinks",    path: "/category/Drink" },
// // ];

// // const Header = () => {
// //   const menuRef = useRef(null);
// //   const headerRef = useRef(null);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);

// //   const totalQuantity = useSelector(
// //     (state) => state.cart?.totalQuantity || 0
// //   );

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const toggleMenu = () => {
// //     menuRef.current?.classList.toggle("show__menu");
// //   };

// //   const toggleCart = () => {
// //     dispatch(cartUiActions.toggle());
// //   };

// //   const toggleDropdown = () => {
// //     setDropdownOpen((prev) => !prev);
// //   };

// //   const closeDropdown = () => {
// //     setDropdownOpen(false);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (
// //         document.body.scrollTop > 80 ||
// //         document.documentElement.scrollTop > 80
// //       ) {
// //         headerRef.current?.classList.add("header__shrink");
// //       } else {
// //         headerRef.current?.classList.remove("header__shrink");
// //       }
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (!e.target.closest(".nav__dropdown")) {
// //         closeDropdown();
// //       }
// //     };
// //     document.addEventListener("click", handleClickOutside);
// //     return () => document.removeEventListener("click", handleClickOutside);
// //   }, []);

// //   return (
// //     <header className="header" ref={headerRef}>
// //       <Container>
// //         <div className="nav__wrapper d-flex align-items-center justify-content-between">

// //           {/* ===== LOGO ===== */}
// //           <div
// //             className="logo"
// //             onClick={() => navigate("/home")}
// //             style={{ cursor: "pointer" }}
// //           >
// //             <img src={logo} alt="logo" />
// //             <h5>Tasty Treat</h5>
// //           </div>

// //           {/* ===== NAVIGATION MENU ===== */}
// //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// //             <div
// //               className="menu d-flex align-items-center"
// //               style={{ gap: "35px" }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               {/* Close Button (mobile) */}
// //               <div className="header__closeButton">
// //                 <span onClick={toggleMenu}>
// //                   <i className="ri-close-fill"></i>
// //                 </span>
// //               </div>

// //               {/* 1. HOME */}
// //               <NavLink
// //                 to="/home"
// //                 className={({ isActive }) =>
// //                   isActive ? "active__menu" : ""
// //                 }
// //                 onClick={toggleMenu}
// //               >
// //                 Home
// //               </NavLink>

// //               {/* 2. MENU ITEMS DROPDOWN */}
// //               <div
// //                 className="nav__dropdown"
// //                 style={{ position: "relative" }}
// //                 onClick={(e) => e.stopPropagation()}
// //               >
// //                 <span
// //                   onClick={toggleDropdown}
// //                   style={{
// //                     cursor: "pointer",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     gap: "4px",
// //                     whiteSpace: "nowrap",
// //                     // same font as nav links
// //                     fontFamily: "inherit",
// //                     fontSize: "inherit",
// //                     fontWeight: "inherit",
// //                     color: "inherit",
// //                     textDecoration: "none",
// //                   }}
// //                 >
// //                   Menu Items
// //                   <i
// //                     className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line`}
// //                   ></i>
// //                 </span>

// //                 {/* Dropdown List */}
// //                 {dropdownOpen && (
// //                   <div
// //                     style={{
// //                       position: "absolute",
// //                       top: "calc(100% + 10px)",
// //                       left: "0",
// //                       backgroundColor: "#fff",
// //                       boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
// //                       borderRadius: "12px",
// //                       padding: "8px 0",
// //                       minWidth: "190px",
// //                       zIndex: 9999,
// //                     }}
// //                   >
// //                     {food__categories.map((cat, index) => (
// //                       <div
// //                         key={index}
// //                         onClick={() => {
// //                           navigate(cat.path);
// //                           closeDropdown();
// //                           toggleMenu();
// //                         }}
// //                         style={{
// //                           padding: "10px 20px",
// //                           cursor: "pointer",
// //                           // same font family and size as nav links
// //                           fontFamily: "inherit",
// //                           fontSize: "0.9rem",
// //                           fontWeight: "500",
// //                           color: "#212245",
// //                           transition: "all 0.2s",
// //                           borderRadius: "8px",
// //                           margin: "2px 8px",
// //                         }}
// //                         onMouseEnter={(e) => {
// //                           e.currentTarget.style.backgroundColor = "#fff5f5";
// //                           e.currentTarget.style.color = "#df2020";
// //                         }}
// //                         onMouseLeave={(e) => {
// //                           e.currentTarget.style.backgroundColor = "transparent";
// //                           e.currentTarget.style.color = "#212245";
// //                         }}
// //                       >
// //                         {cat.display}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* 3. CART */}
// //               <NavLink
// //                 to="/cart"
// //                 className={({ isActive }) =>
// //                   isActive ? "active__menu" : ""
// //                 }
// //                 onClick={toggleMenu}
// //               >
// //                 Cart
// //               </NavLink>

// //               {/* 4. CONTACT */}
// //               <NavLink
// //                 to="/contact"
// //                 className={({ isActive }) =>
// //                   isActive ? "active__menu" : ""
// //                 }
// //                 onClick={toggleMenu}
// //               >
// //                 Contact
// //               </NavLink>

// //             </div>
// //           </div>

// //           {/* ===== RIGHT SIDE ICONS ===== */}
// //           <div className="nav__right d-flex align-items-center gap-4">
// //             <span className="cart__icon" onClick={toggleCart}>
// //               <i className="ri-shopping-basket-line"></i>
// //               <span className="cart__badge">{totalQuantity}</span>
// //             </span>

// //             <span className="mobile__menu" onClick={toggleMenu}>
// //               <i className="ri-menu-line"></i>
// //             </span>
// //           </div>

// //         </div>
// //       </Container>
// //     </header>
// //   );
// // };

// // export default Header;









// import React, { useRef, useEffect, useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
// import { Container } from "reactstrap";
// import { useSelector, useDispatch } from "react-redux";

// import logo from "../../assets/images/res-logo.png";
// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

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

//   const totalQuantity = useSelector(
//     (state) => state.cart?.totalQuantity || 0
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

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

//               {/* 4. CONTACT */}
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "active__menu" : ""
//                 }
//                 onClick={toggleMenu}
//               >
//                 Contact
//               </NavLink>

//             </div>
//           </div>

//           {/* ===== RIGHT SIDE ICONS ===== */}
//           <div className="nav__right d-flex align-items-center gap-4">
//             <span className="cart__icon" onClick={toggleCart}>
//               <i className="ri-shopping-basket-line"></i>
//               <span className="cart__badge">{totalQuantity}</span>
//             </span>

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

import "../../styles/header.css";

const food__categories = [
  { display: "🍕 Pizza",    path: "/category/Pizza" },
  { display: "🍔 Burger",   path: "/category/Burger" },
  { display: "🥪 Sandwich", path: "/category/Sandwich" },
  { display: "🍝 Pasta",    path: "/category/Pasta" },
  { display: "🍟 Fries",    path: "/category/Fries" },
  { display: "🥤 Drinks",   path: "/category/Drink" },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const totalQuantity = useSelector(
    (state) => state.cart?.totalQuantity || 0
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav__dropdown")) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">

          {/* ===== LOGO ===== */}
          <div
            className="logo"
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ===== NAVIGATION ===== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center"
              style={{ gap: "35px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (mobile) */}
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>

              {/* 1. HOME */}
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "active__menu" : ""
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>

              {/* 2. MENU ITEMS DROPDOWN */}
              <div
                className="nav__dropdown"
                style={{ position: "relative" }}
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  onClick={toggleDropdown}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
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

              {/* 3. CART */}
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "active__menu" : ""
                }
                onClick={toggleMenu}
              >
                Cart
              </NavLink>

              {/* 4. CONTACT */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active__menu" : ""
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>

            </div>
          </div>

          {/* ===== RIGHT SIDE ICONS ===== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

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