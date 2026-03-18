// // // // import React, { useState } from "react";

// // // // import { Container, Row, Col } from "reactstrap";

// // // // import products from "../assets/fake-data/products";
// // // // import ProductCard from "../components/UI/product-card/ProductCard";
// // // // import Helmet from "../components/Helmet/Helmet";
// // // // import ReactPaginate from "react-paginate";
// // // // import "../styles/pagination.css";

// // // // const Pizzas = () => {
// // // //   const [pageNumber, setPageNumber] = useState(0);

// // // //   const searchedProduct = products;

// // // //   const productPerPage = 4;
// // // //   const visitedPage = pageNumber * productPerPage;
// // // //   const displayPage = searchedProduct.slice(
// // // //     visitedPage,
// // // //     visitedPage + productPerPage
// // // //   );

// // // //   const pageCount = Math.ceil(searchedProduct.length / productPerPage);

// // // //   const changePage = ({ selected }) => {
// // // //     setPageNumber(selected);
// // // //   };

// // // //   return (
// // // //     <Helmet title="All Pizzas">
// // // //       <Container>
// // // //         <Row>
// // // //           {displayPage.map((item) => (
// // // //             <Col
// // // //               lg="3"
// // // //               md="4"
// // // //               sm="6"
// // // //               xs="6"
// // // //               key={item.id}
// // // //               className="mb-4 mt-4"
// // // //             >
// // // //               <ProductCard item={item} />
// // // //             </Col>
// // // //           ))}
// // // //           <div className="d-flex justify-content-center mt-4 mb-4">
// // // //             <ReactPaginate
// // // //               pageCount={pageCount}
// // // //               onPageChange={changePage}
// // // //               previousLabel={"Prev"}
// // // //               nextLabel={"Next"}
// // // //               containerClassName="paginationBttns"
// // // //             />
// // // //           </div>
// // // //         </Row>
// // // //       </Container>
// // // //     </Helmet>
// // // //   );
// // // // };

// // // // export default Pizzas;


// // // import React, { useState } from "react";
// // // import { Container, Row, Col } from "reactstrap";
// // // import ReactPaginate from "react-paginate";

// // // import products from "../assets/fake-data/products";
// // // import ProductCard from "../components/UI/product-card/ProductCard";
// // // import Helmet from "../components/Helmet/Helmet";

// // // import "../styles/pagination.css";

// // // const Pizzas = () => {
// // //   const [pageNumber, setPageNumber] = useState(0);

// // //   // ✅ safety: ensure array
// // //   const searchedProduct = Array.isArray(products) ? products : [];

// // //   const productPerPage = 4;
// // //   const visitedPage = pageNumber * productPerPage;

// // //   const displayPage = searchedProduct.slice(
// // //     visitedPage,
// // //     visitedPage + productPerPage
// // //   );

// // //   const pageCount = Math.ceil(searchedProduct.length / productPerPage);

// // //   const changePage = ({ selected }) => {
// // //     setPageNumber(selected);
// // //   };

// // //   return (
// // //     <Helmet title="All Pizzas">
// // //       <Container>
// // //         <Row>
// // //           {displayPage.length > 0 ? (
// // //             displayPage.map((item) => (
// // //               <Col
// // //                 lg="3"
// // //                 md="4"
// // //                 sm="6"
// // //                 xs="6"
// // //                 key={item.id}
// // //                 className="mb-4 mt-4"
// // //               >
// // //                 <ProductCard item={item} />
// // //               </Col>
// // //             ))
// // //           ) : (
// // //             <h4 className="text-center mt-5">No Products Found</h4>
// // //           )}

// // //           {/* Pagination */}
// // //           {pageCount > 1 && (
// // //             <div className="d-flex justify-content-center mt-4 mb-4">
// // //               <ReactPaginate
// // //                 pageCount={pageCount}
// // //                 onPageChange={changePage}
// // //                 previousLabel={"Prev"}
// // //                 nextLabel={"Next"}
// // //                 containerClassName="paginationBttns"
// // //                 activeClassName="paginationActive"
// // //               />
// // //             </div>
// // //           )}
// // //         </Row>
// // //       </Container>
// // //     </Helmet>
// // //   );
// // // };

// // // export default Pizzas;



// // // import React, { useState } from "react";
// // // import { Container, Row, Col } from "reactstrap";
// // // import ReactPaginate from "react-paginate";

// // // import products from "../assets/fake-data/products"; // ✅ default import
// // // import ProductCard from "../components/UI/product-card/ProductCard";
// // // import Helmet from "../components/Helmet/Helmet";

// // // import "../styles/pagination.css";



// // import React, { useState } from "react";
// // import { Container, Row, Col } from "reactstrap";
// // import ReactPaginate from "react-paginate";

// // import products from "../assets/fake-data/products"; // ✅ default import
// // import ProductCard from "../components/UI/product-card/ProductCard"; // ✅ default
// // import Helmet from "../components/Helmet/Helmet"; // ✅ default

// // import "../styles/pagination.css";


// // const Pizzas = () => {
// //   const [pageNumber, setPageNumber] = useState(0);

// //   const productPerPage = 4;
// //   const visitedPage = pageNumber * productPerPage;

// //   const displayPage = products.slice(
// //     visitedPage,
// //     visitedPage + productPerPage
// //   );

// //   const pageCount = Math.ceil(products.length / productPerPage);

// //   const changePage = ({ selected }) => {
// //     setPageNumber(selected);
// //   };

// //   return (
// //     <Helmet title="All Pizzas">
// //       <Container>
// //         <Row>
// //           {displayPage.map((item) => (
// //             <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
// //               <ProductCard item={item} />
// //             </Col>
// //           ))}

// //           <div className="d-flex justify-content-center mt-4">
// //             <ReactPaginate
// //               pageCount={pageCount}
// //               onPageChange={changePage}
// //               previousLabel="Prev"
// //               nextLabel="Next"
// //               containerClassName="paginationBttns"
// //               activeClassName="paginationActive"
// //             />
// //           </div>
// //         </Row>
// //       </Container>
// //     </Helmet>
// //   );
// // };

// // export default Pizzas;



// import React, { useState } from "react";

// import { Container, Row, Col } from "reactstrap";

// import products from "../assets/fake-data/products";
// import ProductCard from "../components/UI/product-card/ProductCard";
// import Helmet from "../components/Helmet/Helmet";
// import ReactPaginate from "react-paginate";
// import "../styles/pagination.css";

// const Pizzas = () => {
//   const [pageNumber, setPageNumber] = useState(0);

//   const searchedProduct = products;

//   const productPerPage = 4;
//   const visitedPage = pageNumber * productPerPage;
//   const displayPage = searchedProduct.slice(
//     visitedPage,
//     visitedPage + productPerPage
//   );

//   const pageCount = Math.ceil(searchedProduct.length / productPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <Helmet title="All Pizzas">
//       <Container>
//         <Row>
//           {displayPage.map((item) => (
//             <Col
//               lg="3"
//               md="4"
//               sm="6"
//               xs="6"
//               key={item.id}
//               className="mb-4 mt-4"
//             >
//               <ProductCard item={item} />
//             </Col>
//           ))}
//           <div className="d-flex justify-content-center mt-4 mb-4">
//             <ReactPaginate
//               pageCount={pageCount}
//               onPageChange={changePage}
//               previousLabel={"Prev"}
//               nextLabel={"Next"}
//               containerClassName="paginationBttns"
//             />
//           </div>
//         </Row>
//       </Container>
//     </Helmet>
//   );
// };

// export default Pizzas;







import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import "../styles/pagination.css";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(products.length / productPerPage);

  return (
    <Helmet title="All Pizzas">
      <Container>
        <Row>
          {displayPage.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4 mt-4">
              <ProductCard item={item} />
            </Col>
          ))}

          <div className="d-flex justify-content-center mt-4 mb-4">
            {[...Array(pageCount)].map((_, index) => (
              <button
                key={index}
                onClick={() => setPageNumber(index)}
                className={pageNumber === index ? "paginationActive" : "paginationBttns"}
                style={{ margin: "0 4px", padding: "6px 12px", cursor: "pointer" }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Pizzas;