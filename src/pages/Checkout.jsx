// // // // import "../styles/checkout.css";
// // // // import { AiFillCheckCircle } from "react-icons/ai";

// // // // const Checkout = () => {
// // // //   return (
// // // //     <>
// // // //       <div className="checkoutMessage">
// // // //         <div className="checkoutTitleContainer">
// // // //           <AiFillCheckCircle className="checkoutIcon" />
// // // //           <h3>Thank you for your order!</h3>
// // // //         </div>
// // // //         <span>
// // // //           Your order is being processed and will be delivered as fast as
// // // //           possible.
// // // //         </span>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Checkout;


// // // import "../styles/checkout.css";
// // // import { AiFillCheckCircle } from "react-icons/ai";

// // // const Checkout = () => {
// // //   return (
// // //     <>
// // //       <div className="checkoutMessage">
// // //         <div className="checkoutTitleContainer">
// // //           <AiFillCheckCircle className="checkoutIcon" />
// // //           <h3>Thank you for your order!</h3>
// // //         </div>
// // //         <span>
// // //           Your order is being processed and will be delivered as fast as
// // //           possible.
// // //         </span>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Checkout;









// // import { useEffect, useState } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { AiFillCheckCircle } from "react-icons/ai";
// // import supabase from "../supabase";
// // import { cartActions } from "../store/shopping-cart/cartSlice";
// // import "../styles/checkout.css";

// // const Checkout = () => {
// //   const dispatch = useDispatch();
// //   const cartItems = useSelector((state) => state.cart.cartItems);
// //   const totalAmount = useSelector((state) => state.cart.totalAmount);
// //   const [orderSaved, setOrderSaved] = useState(false);
// //   const [orderError, setOrderError] = useState(false);

// //   useEffect(() => {
// //     const saveOrder = async () => {
// //       if (cartItems && cartItems.length > 0) {
// //         const { error } = await supabase
// //           .from("orders")
// //           .insert([{
// //             items: cartItems,
// //             total_amount: totalAmount,
// //             status: "processing",
// //             created_at: new Date(),
// //           }]);

// //         if (error) {
// //           console.log("❌ Order save error:", error);
// //           setOrderError(true);
// //         } else {
// //           console.log("✅ Order saved to database!");
// //           setOrderSaved(true);

// //           // ✅ Clear cart after order saved
// //           cartItems.forEach((item) => {
// //             dispatch(cartActions.deleteItem(item.id));
// //           });
// //         }
// //       }
// //     };

// //     saveOrder();
// //   }, []);

// //   return (
// //     <div className="checkoutMessage">
// //       <div className="checkoutTitleContainer">
// //         <AiFillCheckCircle className="checkoutIcon" />
// //         <h3>Thank you for your order!</h3>
// //       </div>

// //       <span>
// //         Your order is being processed and will be delivered as fast as
// //         possible.
// //       </span>

// //       {/* ✅ Order saved confirmation */}
// //       {orderSaved && (
// //         <div style={{
// //           marginTop: "20px",
// //           padding: "12px 20px",
// //           backgroundColor: "#d4edda",
// //           borderRadius: "8px",
// //           color: "#155724",
// //           fontWeight: "500",
// //           maxWidth: "400px",
// //           margin: "20px auto 0",
// //         }}>
// //           ✅ Your order has been saved successfully!
// //         </div>
// //       )}

// //       {/* ❌ Order error */}
// //       {orderError && (
// //         <div style={{
// //           marginTop: "20px",
// //           padding: "12px 20px",
// //           backgroundColor: "#f8d7da",
// //           borderRadius: "8px",
// //           color: "#721c24",
// //           fontWeight: "500",
// //           maxWidth: "400px",
// //           margin: "20px auto 0",
// //         }}>
// //           ❌ Could not save order. Please contact support.
// //         </div>
// //       )}

// //       {/* Order Summary */}
// //       {cartItems && cartItems.length > 0 && (
// //         <div style={{
// //           marginTop: "30px",
// //           maxWidth: "500px",
// //           margin: "30px auto 0",
// //           background: "#fff",
// //           borderRadius: "16px",
// //           padding: "25px",
// //           boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
// //         }}>
// //           <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>
// //             Order Summary
// //           </h5>

// //           {cartItems.map((item, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 alignItems: "center",
// //                 padding: "8px 0",
// //                 borderBottom: "1px solid #f0f0f0",
// //               }}
// //             >
// //               <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //                 <img
// //                   src={item.image01}
// //                   alt={item.title}
// //                   style={{
// //                     width: "45px",
// //                     height: "45px",
// //                     borderRadius: "8px",
// //                     objectFit: "cover",
// //                   }}
// //                 />
// //                 <div>
// //                   <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.9rem" }}>
// //                     {item.title}
// //                   </p>
// //                   <p style={{ margin: 0, color: "#777", fontSize: "0.8rem" }}>
// //                     Qty: {item.quantity}
// //                   </p>
// //                 </div>
// //               </div>
// //               <span style={{ fontWeight: "600", color: "#df2020" }}>
// //                 ₹{item.price * item.quantity}
// //               </span>
// //             </div>
// //           ))}

// //           <div style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginTop: "15px",
// //             paddingTop: "15px",
// //             borderTop: "2px solid #f0f0f0",
// //           }}>
// //             <span style={{ fontWeight: "700", color: "#212245", fontSize: "1rem" }}>
// //               Total Amount:
// //             </span>
// //             <span style={{ fontWeight: "700", color: "#df2020", fontSize: "1rem" }}>
// //               ₹{totalAmount}
// //             </span>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Checkout;


// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { AiFillCheckCircle } from "react-icons/ai";
// import supabase from "../supabase";
// import { cartActions } from "../store/shopping-cart/cartSlice";
// import "../styles/checkout.css";

// const Checkout = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   const [orderSaved, setOrderSaved] = useState(false);
//   const [orderError, setOrderError] = useState(false);
//   const [saving, setSaving] = useState(false);

//   // ✅ Debug - check cart items
//   console.log("Cart Items on Checkout:", cartItems);
//   console.log("Total Amount:", totalAmount);

//   const handlePlaceOrder = async () => {
//     if (!cartItems || cartItems.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     setSaving(true);

//     const { error } = await supabase
//       .from("orders")
//       .insert([{
//         items: cartItems,
//         total_amount: totalAmount,
//         status: "processing",
//         created_at: new Date(),
//       }]);

//     if (error) {
//       console.log("❌ Order save error:", error);
//       setOrderError(true);
//     } else {
//       console.log("✅ Order saved to database!");
//       setOrderSaved(true);

//       // ✅ Clear cart after order saved
//       cartItems.forEach((item) => {
//         dispatch(cartActions.deleteItem(item.id));
//       });
//     }

//     setSaving(false);
//   };

//   return (
//     <div className="checkoutMessage">
//       <div className="checkoutTitleContainer">
//         <AiFillCheckCircle className="checkoutIcon" />
//         <h3>Thank you for your order!</h3>
//       </div>

//       <span>
//         Your order is being processed and will be delivered as fast as
//         possible.
//       </span>

//       {/* Order Summary */}
//       {cartItems && cartItems.length > 0 && (
//         <div style={{
//           marginTop: "30px",
//           maxWidth: "500px",
//           margin: "30px auto 0",
//           background: "#fff",
//           borderRadius: "16px",
//           padding: "25px",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//         }}>
//           <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>
//             Order Summary
//           </h5>

//           {cartItems.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 padding: "8px 0",
//                 borderBottom: "1px solid #f0f0f0",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                 <img
//                   src={item.image01}
//                   alt={item.title}
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "8px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div>
//                   <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.9rem" }}>
//                     {item.title}
//                   </p>
//                   <p style={{ margin: 0, color: "#777", fontSize: "0.8rem" }}>
//                     Qty: {item.quantity}
//                   </p>
//                 </div>
//               </div>
//               <span style={{ fontWeight: "600", color: "#df2020" }}>
//                 ₹{item.price * item.quantity}
//               </span>
//             </div>
//           ))}

//           <div style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "15px",
//             paddingTop: "15px",
//             borderTop: "2px solid #f0f0f0",
//           }}>
//             <span style={{ fontWeight: "700", color: "#212245", fontSize: "1rem" }}>
//               Total Amount:
//             </span>
//             <span style={{ fontWeight: "700", color: "#df2020", fontSize: "1rem" }}>
//               ₹{totalAmount}
//             </span>
//           </div>

//           {/* ✅ Place Order Button */}
//           {!orderSaved && (
//             <button
//               onClick={handlePlaceOrder}
//               disabled={saving}
//               style={{
//                 marginTop: "20px",
//                 width: "100%",
//                 padding: "14px",
//                 backgroundColor: saving ? "#e87070" : "#df2020",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "10px",
//                 fontSize: "1rem",
//                 fontWeight: "600",
//                 cursor: saving ? "not-allowed" : "pointer",
//               }}
//             >
//               {saving ? "Saving Order..." : "✅ Confirm & Place Order"}
//             </button>
//           )}

//         </div>
//       )}

//       {/* ✅ Order saved confirmation */}
//       {orderSaved && (
//         <div style={{
//           marginTop: "20px",
//           padding: "12px 20px",
//           backgroundColor: "#d4edda",
//           borderRadius: "8px",
//           color: "#155724",
//           fontWeight: "500",
//           maxWidth: "400px",
//           margin: "20px auto 0",
//         }}>
//           ✅ Your order has been placed and saved successfully!
//         </div>
//       )}

//       {/* ❌ Order error */}
//       {orderError && (
//         <div style={{
//           marginTop: "20px",
//           padding: "12px 20px",
//           backgroundColor: "#f8d7da",
//           borderRadius: "8px",
//           color: "#721c24",
//           fontWeight: "500",
//           maxWidth: "400px",
//           margin: "20px auto 0",
//         }}>
//           ❌ Could not save order. Please contact support.
//         </div>
//       )}

//     </div>
//   );
// };

// export default Checkout;



import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import supabase from "../supabase";
import { cartActions } from "../store/shopping-cart/cartSlice";
import "../styles/checkout.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [orderSaved, setOrderSaved] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const [saving, setSaving] = useState(false);

  const handlePlaceOrder = async () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setSaving(true);

    // ✅ Get current logged in user email
    const { data: { session } } = await supabase.auth.getSession();
    const userEmail = session?.user?.email || "guest";

    const { error } = await supabase
      .from("orders")
      .insert([{
        items: cartItems,
        total_amount: totalAmount,
        status: "processing",
        user_email: userEmail,   // ✅ save user email
        created_at: new Date(),
      }]);

    if (error) {
      console.log("❌ Order save error:", error);
      setOrderError(true);
    } else {
      console.log("✅ Order saved to database!");
      setOrderSaved(true);

      // ✅ Clear cart after order saved
      cartItems.forEach((item) => {
        dispatch(cartActions.deleteItem(item.id));
      });
    }

    setSaving(false);
  };

  return (
    <div className="checkoutMessage">
      <div className="checkoutTitleContainer">
        <AiFillCheckCircle className="checkoutIcon" />
        <h3>Thank you for your order!</h3>
      </div>

      <span>
        Your order is being processed and will be delivered as fast as
        possible.
      </span>

      {/* Order Summary */}
      {cartItems && cartItems.length > 0 && (
        <div style={{
          marginTop: "30px",
          maxWidth: "500px",
          margin: "30px auto 0",
          background: "#fff",
          borderRadius: "16px",
          padding: "25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
          <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>
            Order Summary
          </h5>

          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src={item.image01}
                  alt={item.title}
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.9rem" }}>
                    {item.title}
                  </p>
                  <p style={{ margin: 0, color: "#777", fontSize: "0.8rem" }}>
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
              <span style={{ fontWeight: "600", color: "#df2020" }}>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            paddingTop: "15px",
            borderTop: "2px solid #f0f0f0",
          }}>
            <span style={{ fontWeight: "700", color: "#212245", fontSize: "1rem" }}>
              Total Amount:
            </span>
            <span style={{ fontWeight: "700", color: "#df2020", fontSize: "1rem" }}>
              ₹{totalAmount}
            </span>
          </div>

          {/* ✅ Place Order Button */}
          {!orderSaved && (
            <button
              onClick={handlePlaceOrder}
              disabled={saving}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "14px",
                backgroundColor: saving ? "#e87070" : "#df2020",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: saving ? "not-allowed" : "pointer",
              }}
            >
              {saving ? "Saving Order..." : "✅ Confirm & Place Order"}
            </button>
          )}

        </div>
      )}

      {/* ✅ Order saved confirmation */}
      {orderSaved && (
        <div style={{
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "#d4edda",
          borderRadius: "8px",
          color: "#155724",
          fontWeight: "500",
          maxWidth: "400px",
          margin: "20px auto 0",
          textAlign: "center",
        }}>
          <p style={{ margin: 0, marginBottom: "10px" }}>
            ✅ Your order has been placed and saved successfully!
          </p>
          <button
            onClick={() => navigate("/orders")}
            style={{
              padding: "10px 24px",
              backgroundColor: "#155724",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Track My Order
          </button>
        </div>
      )}

      {/* ❌ Order error */}
      {orderError && (
        <div style={{
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          color: "#721c24",
          fontWeight: "500",
          maxWidth: "400px",
          margin: "20px auto 0",
          textAlign: "center",
        }}>
          ❌ Could not save order. Please contact support.
        </div>
      )}

    </div>
  );
};

export default Checkout;