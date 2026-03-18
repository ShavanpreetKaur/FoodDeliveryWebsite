// // // import React from "react";

// // // import Header from "../Header/Header.jsx";
// // // import Footer from "../Footer/Footer.jsx";
// // // import AppRoutes from "../../routes/Routers";
// // // import Carts from "../UI/cart/Carts.jsx";

// // // import { useSelector } from "react-redux";

// // // const Layout = () => {
// // //   const showCart = useSelector((state) => state.cartUi.cartIsVisible);

// // //   return (
// // //     <div className="d-flex flex-column vh-100 justify-content-between">
// // //       <Header />
// // //       {showCart && <Carts />}
// // //       <div>
// // //         <Routes />
// // //       </div>
// // //       <Footer />
// // //       <Footer />
// // //       <Footer />
// // //       <Footer />
// // //       <Footer />
// // //       <Footer />

// // //     </div>
// // //   );
// // // };

// // // export default Layout;



// // import React from "react";

// // import Header from "../Header/Header.jsx";
// // import Footer from "../Footer/Footer.jsx";
// // import AppRoutes from "../../routes/Routers.jsx"; // ✅ renamed
// // import Carts from "../UI/cart/Carts.jsx";

// // import { useSelector } from "react-redux";

// // const Layout = () => {
// //   const showCart = useSelector((state) => state.cartUi.cartIsVisible);

// //   return (
// //     <div className="d-flex flex-column vh-100 justify-content-between">
// //       <Header />
// //       {showCart && <Carts />}
      
// //       <div>
// //         <AppRoutes /> {/* ✅ use renamed component */}
// //       </div>

// //       <Footer /> {/* ✅ keep only ONE footer */}
// //     </div>
// //   );
// // };

// // export default Layout;



// import React from "react";

// import Header from "../Header/Header.jsx";
// import Footer from "../Footer/Footer.jsx";
// import Routes from "../../routes/Routers";
// import Carts from "../UI/cart/Carts.jsx";

// import { useSelector } from "react-redux";

// const Layout = () => {
//   const showCart = useSelector((state) => state.cartUi.cartIsVisible);

//   return (
//     <div className="d-flex flex-column vh-100 justify-content-between">
//       <Header />
//       {showCart && <Carts />}
//       <div>
//         <Routes />
//       </div>
//       <Footer />
//       <Footer />
//       <Footer />
//       <Footer />
//       <Footer />
//       <Footer />

//     </div>
//   );
// };

// export default Layout;







import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routers from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      {showCart && <Carts />}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;