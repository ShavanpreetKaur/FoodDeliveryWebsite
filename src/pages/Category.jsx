import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import "../styles/pagination.css";

const CategoryPage = () => {
  const { category } = useParams();
  const [pageNumber, setPageNumber] = useState(0);

  const categoryProducts = products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = categoryProducts.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(categoryProducts.length / productPerPage);

  return (
    <Helmet title={category}>
      <Container>
        <Row>
          <Col lg="12" className="mb-4 mt-4">
            <h2 className="text-center fw-bold" style={{ color: "#df2020" }}>
              {category}s
            </h2>
          </Col>

          {displayPage.length > 0 ? (
            displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4 mt-4">
                <ProductCard item={item} />
              </Col>
            ))
          ) : (
            <h5 className="text-center mt-5">No items found in this category.</h5>
          )}

          {pageCount > 1 && (
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
          )}
        </Row>
      </Container>
    </Helmet>
  );
};

export default CategoryPage;