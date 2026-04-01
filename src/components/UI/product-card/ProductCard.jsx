import React, { useEffect, useState } from "react";
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../../supabase";

const ProductCard = (props) => {
  const { id, title, image01, price, extraIngredients } = props.item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => listener?.subscription?.unsubscribe();
  }, []);

  const addToCart = () => {
    if (loading) return;

    if (!user) {
      alert("Please login or register first to add items to cart!");
      navigate("/login");
      return;
    }

    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        extraIngredients,
      })
    );
  };

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={image01} alt="Pizza" />
        <h5>
          <Link to={`/pizzas/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">₹{price}</span>
        <button
          className="addTOCART__btn"
          onClick={addToCart}
          disabled={loading}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;