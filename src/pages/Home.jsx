// // // import React from "react";
// // // import Helmet from "../components/Helmet/Helmet.jsx";
// // // import { Container, Row, Col } from "reactstrap";

// // // import { Link } from "react-router-dom";

// // // import guyImg from "../assets/images/delivery-guy.png";
// // // import "../styles/hero-section.css";

// // // const Home = () => {
// // //   return (
// // //     <Helmet title="Home">
// // //       <section>
// // //         <Container>
// // //           <Row>
// // //             <Col lg="6" md="6">
// // //               <div className="hero__content">
// // //                 <h5 className="mb-3">Easy order & fast delivery</h5>
// // //                 <h1 className="mb-4 hero__title">
// // //                   <span>Enjoy</span> your favorite Pizza
// // //                 </h1>

// // //                 <button className="order__btn d-flex align-items-center justify-content-between ">
// // //                   <Link to="/pizzas">
// // //                     Menu <i className="ri-arrow-right-s-line"></i>
// // //                   </Link>
// // //                 </button>
// // //               </div>
// // //             </Col>

// // //             <Col lg="6" md="6">
// // //               <div className="hero__img">
// // //                 <img src={guyImg} alt="delivery-guy" className="w-100" />
// // //               </div>
// // //             </Col>
// // //           </Row>
// // //         </Container>
// // //       </section>
// // //     </Helmet>
// // //   );
// // // };

// // // export default Home;








// // import React from "react";
// // import Helmet from "../components/Helmet/Helmet";
// // import { Container, Row, Col } from "reactstrap";

// // import { Link } from "react-router-dom";

// // import guyImg from "../assets/images/delivery-guy.png";
// // import "../styles/hero-section.css";

// // const Home = () => {
// //   return (
// //     <Helmet title="Home">
// //       <section>
// //         <Container>
// //           <Row>
// //             <Col lg="6" md="6">
// //               <div className="hero__content">
// //                 <h5 className="mb-3">Easy order & fast delivery</h5>
// //                 <h1 className="mb-4 hero__title">
// //                   <span>Enjoy</span> your favorite Pizza
// //                 </h1>

// //                 <button className="order__btn d-flex align-items-center justify-content-between ">
// //                   <Link to="/pizzas">
// //                     Menu <i className="ri-arrow-right-s-line"></i>
// //                   </Link>
// //                 </button>
// //               </div>
// //             </Col>

// //             <Col lg="6" md="6">
// //               <div className="hero__img">
// //                 <img src={guyImg} alt="delivery-guy" className="w-100" />
// //               </div>
// //             </Col>
// //           </Row>
// //         </Container>
// //       </section>
// //     </Helmet>
// //   );
// // };

// // export default Home;





// import React, { useState } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/UI/product-card/ProductCard";
// import products from "../assets/fake-data/products";

// import guyImg from "../assets/images/delivery-guy.png";
// import "../styles/hero-section.css";

// const categories = [
//   { display: "🍕 Pizza",     value: "Pizza" },
//   { display: "🍔 Burger",    value: "Burger" },
//   { display: "🥪 Sandwich",  value: "Sandwich" },
//   { display: "🍝 Pasta",     value: "Pasta" },
//   { display: "🥤 Drinks",    value: "Drink" },
// ];

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Pizza");

//   const filteredProducts = products
//     .filter((item) => item.category === selectedCategory)
//     .slice(0, 4);

//   return (
//     <Helmet title="Home">
//       {/* ===== HERO SECTION ===== */}
//       <section className="hero__section">
//         <Container>
//           <Row>
//             <Col lg="6" md="6">
//               <div className="hero__content">
//                 <h5 className="mb-3">Easy order & fast delivery</h5>
//                 <h1 className="mb-4 hero__title">
//                   <span>Enjoy</span> your favorite Food
//                 </h1>
//                 <p className="mb-4" style={{ color: "#777", lineHeight: "1.8" }}>
//                   Order from a wide variety of pizzas, burgers, sandwiches,
//                   pasta and drinks — delivered fresh and fast to your door!
//                 </p>
//                 <button className="order__btn d-flex align-items-center justify-content-between">
//                   <Link to="/category/Pizza">
//                     Order Now <i className="ri-arrow-right-s-line"></i>
//                   </Link>
//                 </button>
//               </div>
//             </Col>

//             <Col lg="6" md="6">
//               <div className="hero__img">
//                 <img src={guyImg} alt="delivery-guy" className="w-100" />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* ===== CATEGORY SECTION ===== */}
//       <section className="pt-5 pb-3">
//         <Container>
//           <Row>
//             <Col lg="12" className="text-center mb-4">
//               <h2 className="fw-bold" style={{ color: "#df2020" }}>
//                 Our Menu
//               </h2>
//               <p style={{ color: "#777" }}>
//                 Choose a category and explore our delicious options
//               </p>
//             </Col>

//             {/* Category Buttons */}
//             <Col lg="12" className="mb-4">
//               <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat.value}
//                     onClick={() => setSelectedCategory(cat.value)}
//                     style={{
//                       padding: "10px 24px",
//                       borderRadius: "50px",
//                       border: "2px solid #df2020",
//                       backgroundColor:
//                         selectedCategory === cat.value ? "#df2020" : "transparent",
//                       color:
//                         selectedCategory === cat.value ? "#fff" : "#df2020",
//                       fontWeight: "600",
//                       cursor: "pointer",
//                       transition: "all 0.3s ease",
//                       fontSize: "0.95rem",
//                     }}
//                   >
//                     {cat.display}
//                   </button>
//                 ))}
//               </div>
//             </Col>

//             {/* Products Grid */}
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((item) => (
//                 <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
//                   <ProductCard item={item} />
//                 </Col>
//               ))
//             ) : (
//               <Col lg="12" className="text-center mt-4">
//                 <h5 style={{ color: "#777" }}>
//                   No items available in this category yet.
//                 </h5>
//               </Col>
//             )}

//             {/* View All Button */}
//             {filteredProducts.length > 0 && (
//               <Col lg="12" className="text-center mt-3 mb-4">
//                 <button
//                   className="order__btn"
//                   style={{ margin: "0 auto", display: "inline-block" }}
//                 >
//                   <Link to={`/category/${selectedCategory}`}>
//                     View All {selectedCategory}s{" "}
//                     <i className="ri-arrow-right-s-line"></i>
//                   </Link>
//                 </button>
//               </Col>
//             )}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Home;







import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/UI/product-card/ProductCard";
import products from "../assets/fake-data/products";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";

const categories = [
  { display: "🍕 Pizza",     value: "Pizza" },
  { display: "🍔 Burger",    value: "Burger" },
  { display: "🥪 Sandwich",  value: "Sandwich" },
  { display: "🍝 Pasta",     value: "Pasta" },
  { display: "🥤 Drinks",    value: "Drink" },
  { display: "🍟 Fries",     value: "Fries" },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  const filteredProducts = products
    .filter((item) => item.category === selectedCategory)
    .slice(0, 4);

  return (
    <Helmet title="Home">

      {/* ===== HERO SECTION ===== */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Food
                </h1>
                <p className="mb-4" style={{ color: "#777", lineHeight: "1.8" }}>
                  Order from a wide variety of pizzas, burgers, sandwiches,
                  pasta, fries and drinks — delivered fresh and fast to your door!
                </p>
                <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/category/Pizza">
                    Order Now <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== MENU SECTION ===== */}
      <section className="pt-5 pb-3">
        <Container>
          <Row>

            {/* Section Title */}
            <Col lg="12" className="text-center mb-4">
              <h2 className="fw-bold" style={{ color: "#df2020" }}>
                Our Menu
              </h2>
              <p style={{ color: "#777" }}>
                Choose a category and explore our delicious options
              </p>
            </Col>

            {/* Category Filter Buttons */}
            <Col lg="12" className="mb-5">
              <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    style={{
                      padding: "10px 24px",
                      borderRadius: "50px",
                      border: "2px solid #df2020",
                      backgroundColor:
                        selectedCategory === cat.value ? "#df2020" : "transparent",
                      color:
                        selectedCategory === cat.value ? "#fff" : "#df2020",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontSize: "0.95rem",
                    }}
                  >
                    {cat.display}
                  </button>
                ))}
              </div>
            </Col>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              ))
            ) : (
              <Col lg="12" className="text-center mt-4">
                <h5 style={{ color: "#777" }}>
                  No items available in this category yet.
                </h5>
              </Col>
            )}

            {/* View All Button */}
            {filteredProducts.length > 0 && (
              <Col lg="12" className="text-center mt-3 mb-5">
                <button
                  className="order__btn"
                  style={{ margin: "0 auto", display: "inline-block" }}
                >
                  <Link to={`/category/${selectedCategory}`}>
                    View All {selectedCategory}s{" "}
                    <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </Col>
            )}

          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;