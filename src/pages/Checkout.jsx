// // import { useState } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { AiFillCheckCircle } from "react-icons/ai";
// // import supabase from "../supabase";
// // import { cartActions } from "../store/shopping-cart/cartSlice";
// // import "../styles/checkout.css";

// // const Checkout = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // ✅ Read fresh from Redux every render
// //   const cartItems = useSelector((state) => state.cart.cartItems);
// //   const totalAmount = useSelector((state) => state.cart.totalAmount);

// //   const [step, setStep] = useState("summary");
// //   const [paymentMethod, setPaymentMethod] = useState("upi");
// //   const [upiId, setUpiId] = useState("");
// //   const [orderError, setOrderError] = useState(false);
// //   const [paidAmount, setPaidAmount] = useState(0); // snapshot before cart cleared

// //   const [address, setAddress] = useState({
// //     name: "", phone: "", street: "", city: "", pincode: "",
// //   });

// //   const handleAddressChange = (e) => {
// //     setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const validateAddress = () =>
// //     address.name.trim() &&
// //     address.phone.trim().length === 10 &&
// //     address.street.trim() &&
// //     address.city.trim() &&
// //     address.pincode.trim().length === 6;

// //   const clearCart = () => {
// //     cartItems.forEach((item) => dispatch(cartActions.deleteItem(item.id)));
// //   };

// //   const saveOrder = async (paymentStatus) => {
// //     const { data: { session } } = await supabase.auth.getSession();
// //     const userEmail = session?.user?.email || "guest";

// //     const { error } = await supabase.from("orders").insert([{
// //       items: cartItems,
// //       total_amount: totalAmount,
// //       status: "processing",
// //       user_email: userEmail,
// //       payment_method: paymentMethod,
// //       payment_status: paymentStatus,
// //       delivery_address: address,
// //       created_at: new Date(),
// //     }]);

// //     return error;
// //   };

// //   const handlePayment = async () => {
// //     if (paymentMethod === "upi" && !upiId.trim()) {
// //       alert("Please enter your UPI ID!");
// //       return;
// //     }

// //     setStep("processing");
// //     await new Promise((res) => setTimeout(res, 3000));

// //     const error = await saveOrder(paymentMethod === "upi" ? "paid" : "cod");

// //     if (error) {
// //       setOrderError(true);
// //       setStep("payment");
// //     } else {
// //       setPaidAmount(totalAmount);
// //       clearCart();
// //       setStep("success");
// //     }
// //   };

// //   const inputStyle = {
// //     width: "100%",
// //     padding: "11px 14px",
// //     border: "2px solid #ebebeb",
// //     borderRadius: "8px",
// //     fontSize: "0.9rem",
// //     fontFamily: "inherit",
// //     outline: "none",
// //     marginTop: "6px",
// //     boxSizing: "border-box",
// //     backgroundColor: "#f9f9f9",
// //   };

// //   const labelStyle = {
// //     fontWeight: "600",
// //     color: "#212245",
// //     fontSize: "0.85rem",
// //     display: "block",
// //     marginTop: "12px",
// //   };

// //   const cardStyle = {
// //     background: "#fff",
// //     borderRadius: "16px",
// //     padding: "22px",
// //     marginBottom: "20px",
// //     boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
// //   };

// //   // ===== EMPTY CART =====
// //   if (cartItems.length === 0 && step !== "success") {
// //     return (
// //       <div style={{ textAlign: "center", padding: "80px 20px" }}>
// //         <i className="ri-shopping-cart-line" style={{ fontSize: "4rem", color: "#ddd" }}></i>
// //         <h4 style={{ color: "#777", marginTop: "15px" }}>Your cart is empty!</h4>
// //         <button
// //           onClick={() => navigate("/pizzas")}
// //           style={{
// //             marginTop: "20px", padding: "12px 30px",
// //             backgroundColor: "#df2020", color: "#fff",
// //             border: "none", borderRadius: "10px",
// //             fontWeight: "600", cursor: "pointer",
// //           }}
// //         >
// //           Browse Menu
// //         </button>
// //       </div>
// //     );
// //   }

// //   // ===== PROCESSING SCREEN =====
// //   if (step === "processing") {
// //     return (
// //       <div style={{
// //         minHeight: "70vh", display: "flex", flexDirection: "column",
// //         alignItems: "center", justifyContent: "center",
// //         textAlign: "center", padding: "40px",
// //       }}>
// //         <div style={{
// //           width: "80px", height: "80px", borderRadius: "50%",
// //           border: "6px solid #f0f0f0",
// //           borderTop: "6px solid #df2020",
// //           animation: "spin 1s linear infinite",
// //           marginBottom: "24px",
// //         }} />
// //         <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
// //         <h4 style={{ color: "#212245", fontWeight: "700" }}>
// //           {paymentMethod === "upi" ? "Processing UPI Payment..." : "Placing Your Order..."}
// //         </h4>
// //         <p style={{ color: "#777", marginTop: "8px" }}>
// //           {paymentMethod === "upi"
// //             ? `Sending ₹${paidAmount || totalAmount} to Tasty Treat...`
// //             : "Confirming your Cash on Delivery order..."}
// //         </p>
// //         <div style={{
// //           marginTop: "20px", padding: "10px 20px",
// //           backgroundColor: "#fff3cd", borderRadius: "8px",
// //           color: "#856404", fontSize: "0.85rem",
// //         }}>
// //           ⏳ Please do not close this window
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ===== SUCCESS SCREEN =====
// //   if (step === "success") {
// //     return (
// //       <div style={{
// //         minHeight: "70vh", display: "flex", flexDirection: "column",
// //         alignItems: "center", justifyContent: "center",
// //         textAlign: "center", padding: "40px",
// //       }}>
// //         <AiFillCheckCircle style={{ fontSize: "5rem", color: "#28a745" }} />
// //         <h3 style={{ color: "#212245", fontWeight: "700", marginTop: "16px" }}>
// //           Order Placed Successfully! 🎉
// //         </h3>
// //         <p style={{ color: "#777", marginTop: "8px", maxWidth: "400px" }}>
// //           {paymentMethod === "upi"
// //             ? `₹${paidAmount} paid via UPI. Your food is being prepared!`
// //             : `Cash on Delivery order confirmed! Pay ₹${paidAmount} when delivered.`}
// //         </p>

// //         <div style={{
// //           marginTop: "20px", padding: "16px 24px",
// //           backgroundColor: "#f8f9fa", borderRadius: "12px",
// //           textAlign: "left", maxWidth: "380px", width: "100%",
// //           fontSize: "0.88rem", color: "#555",
// //         }}>
// //           <p style={{ margin: 0, fontWeight: "700", color: "#212245", marginBottom: "6px" }}>
// //             📍 Delivering to:
// //           </p>
// //           <p style={{ margin: 0 }}>{address.name} · {address.phone}</p>
// //           <p style={{ margin: 0 }}>{address.street}, {address.city} - {address.pincode}</p>
// //         </div>

// //         <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap", justifyContent: "center" }}>
// //           <button
// //             onClick={() => navigate("/orders")}
// //             style={{
// //               padding: "12px 28px", backgroundColor: "#df2020",
// //               color: "#fff", border: "none", borderRadius: "10px",
// //               fontWeight: "600", cursor: "pointer",
// //             }}
// //           >
// //             Track My Order
// //           </button>
// //           <button
// //             onClick={() => navigate("/home")}
// //             style={{
// //               padding: "12px 28px", backgroundColor: "#212245",
// //               color: "#fff", border: "none", borderRadius: "10px",
// //               fontWeight: "600", cursor: "pointer",
// //             }}
// //           >
// //             Back to Home
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{ padding: "40px 20px", maxWidth: "620px", margin: "0 auto" }}>

// //       <h2 style={{ color: "#df2020", fontWeight: "700", marginBottom: "6px" }}>Checkout</h2>

// //       {/* ===== STEP INDICATOR ===== */}
// //       <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
// //         {["summary", "address", "payment"].map((s, i) => {
// //           const steps = ["summary", "address", "payment"];
// //           const currentIndex = steps.indexOf(step);
// //           const isDone = currentIndex > i;
// //           const isActive = step === s;
// //           return (
// //             <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //               <div style={{
// //                 width: "28px", height: "28px", borderRadius: "50%",
// //                 backgroundColor: isActive ? "#df2020" : isDone ? "#28a745" : "#ebebeb",
// //                 color: isActive || isDone ? "#fff" : "#aaa",
// //                 display: "flex", alignItems: "center", justifyContent: "center",
// //                 fontSize: "0.8rem", fontWeight: "700",
// //               }}>
// //                 {isDone ? "✓" : i + 1}
// //               </div>
// //               <span style={{
// //                 fontSize: "0.82rem", fontWeight: "600",
// //                 color: isActive ? "#df2020" : "#aaa",
// //                 textTransform: "capitalize",
// //               }}>
// //                 {s === "summary" ? "Order" : s}
// //               </span>
// //               {i < 2 && <span style={{ color: "#ddd" }}>›</span>}
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {/* ===== STEP 1: ORDER SUMMARY + DELETE ITEMS ===== */}
// //       {step === "summary" && (
// //         <>
// //           <div style={cardStyle}>
// //             <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>
// //               🧾 Order Summary
// //             </h5>

// //             {cartItems.map((item, idx) => (
// //               <div key={idx} style={{
// //                 display: "flex", justifyContent: "space-between",
// //                 alignItems: "center", padding: "10px 0",
// //                 borderBottom: "1px solid #f0f0f0",
// //               }}>
// //                 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //                   <img src={item.image01} alt={item.title} style={{
// //                     width: "45px", height: "45px",
// //                     borderRadius: "8px", objectFit: "cover",
// //                   }} />
// //                   <div>
// //                     <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.88rem" }}>
// //                       {item.title}
// //                     </p>
// //                     <p style={{ margin: 0, color: "#777", fontSize: "0.78rem" }}>
// //                       Qty: {item.quantity} × ₹{item.price}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                   <span style={{ fontWeight: "700", color: "#df2020", minWidth: "55px", textAlign: "right" }}>
// //                     ₹{Number(item.price) * Number(item.quantity)}
// //                   </span>

// //                   {/* ✅ Add / Remove quantity buttons */}
// //                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// //                     <button
// //                       onClick={() => dispatch(cartActions.removeItem(item.id))}
// //                       style={{
// //                         width: "26px", height: "26px",
// //                         backgroundColor: "#f0f0f0", border: "none",
// //                         borderRadius: "50%", cursor: "pointer",
// //                         fontWeight: "700", fontSize: "1rem",
// //                         display: "flex", alignItems: "center", justifyContent: "center",
// //                         color: "#212245",
// //                       }}
// //                     >−</button>
// //                     <span style={{ fontWeight: "600", minWidth: "16px", textAlign: "center" }}>
// //                       {item.quantity}
// //                     </span>
// //                     <button
// //                       onClick={() => dispatch(cartActions.addItem({
// //                         id: item.id,
// //                         title: item.title,
// //                         image01: item.image01,
// //                         price: item.price,
// //                         extraIngredients: item.extraIngredients,
// //                       }))}
// //                       style={{
// //                         width: "26px", height: "26px",
// //                         backgroundColor: "#df2020", border: "none",
// //                         borderRadius: "50%", cursor: "pointer",
// //                         fontWeight: "700", fontSize: "1rem",
// //                         display: "flex", alignItems: "center", justifyContent: "center",
// //                         color: "#fff",
// //                       }}
// //                     >+</button>
// //                   </div>

// //                   {/* ✅ Delete item button */}
// //                   <button
// //                     onClick={() => dispatch(cartActions.deleteItem(item.id))}
// //                     style={{
// //                       background: "none", border: "none",
// //                       cursor: "pointer", color: "#df2020",
// //                       fontSize: "1.1rem", padding: "0",
// //                       display: "flex", alignItems: "center",
// //                     }}
// //                     title="Remove item"
// //                   >
// //                     <i className="ri-delete-bin-line"></i>
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}

// //             {/* Total */}
// //             <div style={{
// //               display: "flex", justifyContent: "space-between",
// //               marginTop: "16px", paddingTop: "16px",
// //               borderTop: "2px solid #f0f0f0",
// //             }}>
// //               <span style={{ fontWeight: "700", color: "#212245", fontSize: "1rem" }}>
// //                 Total ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
// //               </span>
// //               <span style={{ fontWeight: "800", color: "#df2020", fontSize: "1.2rem" }}>
// //                 ₹{totalAmount}
// //               </span>
// //             </div>
// //           </div>

// //           <button
// //             onClick={() => setStep("address")}
// //             disabled={cartItems.length === 0}
// //             style={{
// //               width: "100%", padding: "14px",
// //               backgroundColor: cartItems.length === 0 ? "#ccc" : "#df2020",
// //               color: "#fff", border: "none", borderRadius: "12px",
// //               fontSize: "1rem", fontWeight: "700",
// //               cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
// //             }}
// //           >
// //             Continue to Address →
// //           </button>
// //         </>
// //       )}

// //       {/* ===== STEP 2: DELIVERY ADDRESS ===== */}
// //       {step === "address" && (
// //         <>
// //           <div style={cardStyle}>
// //             <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "5px" }}>
// //               📍 Delivery Address
// //             </h5>

// //             <label style={labelStyle}>Full Name</label>
// //             <input name="name" placeholder="Your full name"
// //               value={address.name} onChange={handleAddressChange} style={inputStyle} />

// //             <label style={labelStyle}>Phone Number</label>
// //             <input name="phone" placeholder="10-digit mobile number"
// //               maxLength={10} value={address.phone} onChange={handleAddressChange} style={inputStyle} />

// //             <label style={labelStyle}>Street Address</label>
// //             <input name="street" placeholder="House no., Street, Area"
// //               value={address.street} onChange={handleAddressChange} style={inputStyle} />

// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
// //               <div>
// //                 <label style={labelStyle}>City</label>
// //                 <input name="city" placeholder="City"
// //                   value={address.city} onChange={handleAddressChange} style={inputStyle} />
// //               </div>
// //               <div>
// //                 <label style={labelStyle}>Pincode</label>
// //                 <input name="pincode" placeholder="6-digit pincode"
// //                   maxLength={6} value={address.pincode} onChange={handleAddressChange} style={inputStyle} />
// //               </div>
// //             </div>
// //           </div>

// //           <div style={{ display: "flex", gap: "12px" }}>
// //             <button onClick={() => setStep("summary")} style={{
// //               flex: 1, padding: "14px",
// //               backgroundColor: "#f0f0f0", color: "#212245",
// //               border: "none", borderRadius: "12px",
// //               fontSize: "1rem", fontWeight: "600", cursor: "pointer",
// //             }}>
// //               ← Back
// //             </button>
// //             <button
// //               onClick={() => {
// //                 if (!validateAddress()) {
// //                   alert("Please fill all fields correctly!\n• Phone must be 10 digits\n• Pincode must be 6 digits");
// //                   return;
// //                 }
// //                 setStep("payment");
// //               }}
// //               style={{
// //                 flex: 2, padding: "14px",
// //                 backgroundColor: "#df2020", color: "#fff",
// //                 border: "none", borderRadius: "12px",
// //                 fontSize: "1rem", fontWeight: "700", cursor: "pointer",
// //               }}
// //             >
// //               Continue to Payment →
// //             </button>
// //           </div>
// //         </>
// //       )}

// //       {/* ===== STEP 3: PAYMENT ===== */}
// //       {step === "payment" && (
// //         <>
// //           <div style={cardStyle}>
// //             <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>
// //               💳 Payment Method
// //             </h5>

// //             {/* UPI Option */}
// //             <label style={{
// //               display: "flex", alignItems: "flex-start", gap: "12px",
// //               padding: "14px 16px", marginBottom: "12px",
// //               border: `2px solid ${paymentMethod === "upi" ? "#df2020" : "#ebebeb"}`,
// //               borderRadius: "10px", cursor: "pointer",
// //               backgroundColor: paymentMethod === "upi" ? "#fff5f5" : "#fff",
// //               transition: "all 0.2s",
// //             }}>
// //               <input type="radio" name="payment" value="upi"
// //                 checked={paymentMethod === "upi"}
// //                 onChange={() => setPaymentMethod("upi")}
// //                 style={{ accentColor: "#df2020", marginTop: "3px" }}
// //               />
// //               <div style={{ width: "100%" }}>
// //                 <p style={{ margin: 0, fontWeight: "700", color: "#212245" }}>
// //                   📱 UPI Payment
// //                 </p>
// //                 <p style={{ margin: "2px 0 8px", color: "#777", fontSize: "0.8rem" }}>
// //                   GPay · PhonePe · Paytm · BHIM
// //                 </p>
// //                 {paymentMethod === "upi" && (
// //                   <input
// //                     placeholder="Enter UPI ID (e.g. name@okaxis)"
// //                     value={upiId}
// //                     onChange={(e) => setUpiId(e.target.value)}
// //                     style={{ ...inputStyle, marginTop: 0 }}
// //                   />
// //                 )}
// //               </div>
// //             </label>

// //             {/* COD Option */}
// //             <label style={{
// //               display: "flex", alignItems: "center", gap: "12px",
// //               padding: "14px 16px",
// //               border: `2px solid ${paymentMethod === "cod" ? "#df2020" : "#ebebeb"}`,
// //               borderRadius: "10px", cursor: "pointer",
// //               backgroundColor: paymentMethod === "cod" ? "#fff5f5" : "#fff",
// //               transition: "all 0.2s",
// //             }}>
// //               <input type="radio" name="payment" value="cod"
// //                 checked={paymentMethod === "cod"}
// //                 onChange={() => setPaymentMethod("cod")}
// //                 style={{ accentColor: "#df2020" }}
// //               />
// //               <div>
// //                 <p style={{ margin: 0, fontWeight: "700", color: "#212245" }}>
// //                   💵 Cash on Delivery
// //                 </p>
// //                 <p style={{ margin: "2px 0 0", color: "#777", fontSize: "0.8rem" }}>
// //                   Pay ₹{totalAmount} when your order arrives
// //                 </p>
// //               </div>
// //             </label>
// //           </div>

// //           {/* Amount summary */}
// //           <div style={{
// //             ...cardStyle,
// //             display: "flex", justifyContent: "space-between", alignItems: "center",
// //           }}>
// //             <span style={{ fontWeight: "600", color: "#212245" }}>Amount to Pay</span>
// //             <span style={{ fontWeight: "800", color: "#df2020", fontSize: "1.3rem" }}>
// //               ₹{totalAmount}
// //             </span>
// //           </div>

// //           {orderError && (
// //             <div style={{
// //               padding: "12px", backgroundColor: "#f8d7da",
// //               borderRadius: "10px", color: "#721c24",
// //               fontWeight: "600", marginBottom: "16px", textAlign: "center",
// //             }}>
// //               ❌ Order failed. Please try again.
// //             </div>
// //           )}

// //           <div style={{ display: "flex", gap: "12px" }}>
// //             <button onClick={() => setStep("address")} style={{
// //               flex: 1, padding: "14px",
// //               backgroundColor: "#f0f0f0", color: "#212245",
// //               border: "none", borderRadius: "12px",
// //               fontSize: "1rem", fontWeight: "600", cursor: "pointer",
// //             }}>
// //               ← Back
// //             </button>
// //             <button onClick={handlePayment} style={{
// //               flex: 2, padding: "14px",
// //               backgroundColor: "#df2020", color: "#fff",
// //               border: "none", borderRadius: "12px",
// //               fontSize: "1rem", fontWeight: "700", cursor: "pointer",
// //             }}>
// //               {paymentMethod === "upi"
// //                 ? `📱 Pay ₹${totalAmount} via UPI`
// //                 : `✅ Place COD Order — ₹${totalAmount}`}
// //             </button>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Checkout;



// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { AiFillCheckCircle } from "react-icons/ai";
// import supabase from "../supabase";
// import { cartActions } from "../store/shopping-cart/cartSlice";
// import "../styles/checkout.css";

// const Checkout = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);

//   const [step, setStep] = useState("summary");
//   const [paymentMethod, setPaymentMethod] = useState("upi");
//   const [upiId, setUpiId] = useState("");
//   const [orderError, setOrderError] = useState(false);
//   const [paidAmount, setPaidAmount] = useState(0);

//   const [address, setAddress] = useState({
//     name: "", phone: "", street: "", city: "", pincode: "",
//   });

//   const handleAddressChange = (e) => {
//     setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const validateAddress = () =>
//     address.name.trim() &&
//     address.phone.trim().length === 10 &&
//     address.street.trim() &&
//     address.city.trim() &&
//     address.pincode.trim().length === 6;

//   const clearCart = () => {
//     cartItems.forEach((item) => dispatch(cartActions.deleteItem(item.id)));
//   };

//   // ✅ FIXED: saveOrder now passes user_id and blocks guest users
//   const saveOrder = async (paymentStatus) => {
//     const { data: { session } } = await supabase.auth.getSession();

//     // ✅ Block guest users — RLS requires authenticated user
//     if (!session) {
//       alert("Please login to place an order!");
//       navigate("/login");
//       return { message: "Not logged in" };
//     }

//     const { error } = await supabase.from("orders").insert([{
//       user_id: session.user.id,         // ✅ Required for RLS policy
//       user_email: session.user.email,   // ✅ From session directly
//       items: cartItems,
//       total_amount: totalAmount,
//       status: "processing",
//       payment_method: paymentMethod,
//       payment_status: paymentStatus,
//       delivery_address: address,
//       created_at: new Date(),
//     }]);

//     if (error) {
//       console.error("❌ Supabase order error:", error); // ✅ helpful for debugging
//     }

//     return error;
//   };

//   const handlePayment = async () => {
//     if (paymentMethod === "upi" && !upiId.trim()) {
//       alert("Please enter your UPI ID!");
//       return;
//     }

//     setStep("processing");
//     await new Promise((res) => setTimeout(res, 3000));

//     const error = await saveOrder(paymentMethod === "upi" ? "paid" : "cod");

//     if (error) {
//       setOrderError(true);
//       setStep("payment");
//     } else {
//       setPaidAmount(totalAmount);
//       clearCart();
//       setStep("success");
//     }
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "11px 14px",
//     border: "2px solid #ebebeb",
//     borderRadius: "8px",
//     fontSize: "0.9rem",
//     fontFamily: "inherit",
//     outline: "none",
//     marginTop: "6px",
//     boxSizing: "border-box",
//     backgroundColor: "#f9f9f9",
//   };

//   const labelStyle = {
//     fontWeight: "600",
//     color: "#212245",
//     fontSize: "0.85rem",
//     display: "block",
//     marginTop: "12px",
//   };

//   const cardStyle = {
//     background: "#fff",
//     borderRadius: "16px",
//     padding: "22px",
//     marginBottom: "20px",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//   };

//   // ===== EMPTY CART =====
//   if (cartItems.length === 0 && step !== "success") {
//     return (
//       <div style={{ textAlign: "center", padding: "80px 20px" }}>
//         <i className="ri-shopping-cart-line" style={{ fontSize: "4rem", color: "#ddd" }}></i>
//         <h4 style={{ color: "#777", marginTop: "15px" }}>Your cart is empty!</h4>
//         <button
//           onClick={() => navigate("/pizzas")}
//           style={{
//             marginTop: "20px", padding: "12px 30px",
//             backgroundColor: "#df2020", color: "#fff",
//             border: "none", borderRadius: "10px",
//             fontWeight: "600", cursor: "pointer",
//           }}
//         >
//           Browse Menu
//         </button>
//       </div>
//     );
//   }

//   // ===== PROCESSING SCREEN =====
//   if (step === "processing") {
//     return (
//       <div style={{
//         minHeight: "70vh", display: "flex", flexDirection: "column",
//         alignItems: "center", justifyContent: "center",
//         textAlign: "center", padding: "40px",
//       }}>
//         <div style={{
//           width: "80px", height: "80px", borderRadius: "50%",
//           border: "6px solid #f0f0f0",
//           borderTop: "6px solid #df2020",
//           animation: "spin 1s linear infinite",
//           marginBottom: "24px",
//         }} />
//         <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//         <h4 style={{ color: "#212245", fontWeight: "700" }}>
//           {paymentMethod === "upi" ? "Processing UPI Payment..." : "Placing Your Order..."}
//         </h4>
//         <p style={{ color: "#777", marginTop: "8px" }}>
//           {paymentMethod === "upi"
//             ? `Sending ₹${paidAmount || totalAmount} to Tasty Treat...`
//             : "Confirming your Cash on Delivery order..."}
//         </p>
//         <div style={{
//           marginTop: "20px", padding: "10px 20px",
//           backgroundColor: "#fff3cd", borderRadius: "8px",
//           color: "#856404", fontSize: "0.85rem",
//         }}>
//           ⏳ Please do not close this window
//         </div>
//       </div>
//     );
//   }

//   // ===== SUCCESS SCREEN =====
//   if (step === "success") {
//     return (
//       <div style={{
//         minHeight: "70vh", display: "flex", flexDirection: "column",
//         alignItems: "center", justifyContent: "center",
//         textAlign: "center", padding: "40px",
//       }}>
//         <AiFillCheckCircle style={{ fontSize: "5rem", color: "#28a745" }} />
//         <h3 style={{ color: "#212245", fontWeight: "700", marginTop: "16px" }}>
//           Order Placed Successfully! 🎉
//         </h3>
//         <p style={{ color: "#777", marginTop: "8px", maxWidth: "400px" }}>
//           {paymentMethod === "upi"
//             ? `₹${paidAmount} paid via UPI. Your food is being prepared!`
//             : `Cash on Delivery order confirmed! Pay ₹${paidAmount} when delivered.`}
//         </p>

//         <div style={{
//           marginTop: "20px", padding: "16px 24px",
//           backgroundColor: "#f8f9fa", borderRadius: "12px",
//           textAlign: "left", maxWidth: "380px", width: "100%",
//           fontSize: "0.88rem", color: "#555",
//         }}>
//           <p style={{ margin: 0, fontWeight: "700", color: "#212245", marginBottom: "6px" }}>
//             📍 Delivering to:
//           </p>
//           <p style={{ margin: 0 }}>{address.name} · {address.phone}</p>
//           <p style={{ margin: 0 }}>{address.street}, {address.city} - {address.pincode}</p>
//         </div>

//         <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap", justifyContent: "center" }}>
//           <button
//             onClick={() => navigate("/orders")}
//             style={{
//               padding: "12px 28px", backgroundColor: "#df2020",
//               color: "#fff", border: "none", borderRadius: "10px",
//               fontWeight: "600", cursor: "pointer",
//             }}
//           >
//             Track My Order
//           </button>
//           <button
//             onClick={() => navigate("/home")}
//             style={{
//               padding: "12px 28px", backgroundColor: "#212245",
//               color: "#fff", border: "none", borderRadius: "10px",
//               fontWeight: "600", cursor: "pointer",
//             }}
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "40px 20px", maxWidth: "620px", margin: "0 auto" }}>

//       <h2 style={{ color: "#df2020", fontWeight: "700", marginBottom: "6px" }}>Checkout</h2>

//       {/* ===== STEP INDICATOR ===== */}
//       <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
//         {["summary", "address", "payment"].map((s, i) => {
//           const steps = ["summary", "address", "payment"];
//           const currentIndex = steps.indexOf(step);
//           const isDone = currentIndex > i;
//           const isActive = step === s;
//           return (
//             <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//               <div style={{
//                 width: "28px", height: "28px", borderRadius: "50%",
//                 backgroundColor: isActive ? "#df2020" : isDone ? "#28a745" : "#ebebeb",
//                 color: isActive || isDone ? "#fff" : "#aaa",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: "0.8rem", fontWeight: "700",
//               }}>
//                 {isDone ? "✓" : i + 1}
//               </div>
//               <span style={{
//                 fontSize: "0.82rem", fontWeight: "600",
//                 color: isActive ? "#df2020" : "#aaa",
//                 textTransform: "capitalize",
//               }}>
//                 {s === "summary" ? "Order" : s}
//               </span>
//               {i < 2 && <span style={{ color: "#ddd" }}>›</span>}
//             </div>
//           );
//         })}
//       </div>

//       {/* ===== STEP 1: ORDER SUMMARY ===== */}
//       {step === "summary" && (
//         <>
//           <div style={cardStyle}>
//             <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>
//               🧾 Order Summary
//             </h5>

//             {cartItems.map((item, idx) => (
//               <div key={idx} style={{
//                 display: "flex", justifyContent: "space-between",
//                 alignItems: "center", padding: "10px 0",
//                 borderBottom: "1px solid #f0f0f0",
//               }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                   <img src={item.image01} alt={item.title} style={{
//                     width: "45px", height: "45px",
//                     borderRadius: "8px", objectFit: "cover",
//                   }} />
//                   <div>
//                     <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.88rem" }}>
//                       {item.title}
//                     </p>
//                     <p style={{ margin: 0, color: "#777", fontSize: "0.78rem" }}>
//                       Qty: {item.quantity} × ₹{item.price}
//                     </p>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                   <span style={{ fontWeight: "700", color: "#df2020", minWidth: "55px", textAlign: "right" }}>
//                     ₹{Number(item.price) * Number(item.quantity)}
//                   </span>

//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <button
//                       onClick={() => dispatch(cartActions.removeItem(item.id))}
//                       style={{
//                         width: "26px", height: "26px",
//                         backgroundColor: "#f0f0f0", border: "none",
//                         borderRadius: "50%", cursor: "pointer",
//                         fontWeight: "700", fontSize: "1rem",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         color: "#212245",
//                       }}
//                     >−</button>
//                     <span style={{ fontWeight: "600", minWidth: "16px", textAlign: "center" }}>
//                       {item.quantity}
//                     </span>
//                     <button
//                       onClick={() => dispatch(cartActions.addItem({
//                         id: item.id,
//                         title: item.title,
//                         image01: item.image01,
//                         price: item.price,
//                         extraIngredients: item.extraIngredients,
//                       }))}
//                       style={{
//                         width: "26px", height: "26px",
//                         backgroundColor: "#df2020", border: "none",
//                         borderRadius: "50%", cursor: "pointer",
//                         fontWeight: "700", fontSize: "1rem",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         color: "#fff",
//                       }}
//                     >+</button>
//                   </div>

//                   <button
//                     onClick={() => dispatch(cartActions.deleteItem(item.id))}
//                     style={{
//                       background: "none", border: "none",
//                       cursor: "pointer", color: "#df2020",
//                       fontSize: "1.1rem", padding: "0",
//                       display: "flex", alignItems: "center",
//                     }}
//                     title="Remove item"
//                   >
//                     <i className="ri-delete-bin-line"></i>
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <div style={{
//               display: "flex", justifyContent: "space-between",
//               marginTop: "16px", paddingTop: "16px",
//               borderTop: "2px solid #f0f0f0",
//             }}>
//               <span style={{ fontWeight: "700", color: "#212245", fontSize: "1rem" }}>
//                 Total ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
//               </span>
//               <span style={{ fontWeight: "800", color: "#df2020", fontSize: "1.2rem" }}>
//                 ₹{totalAmount}
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={() => setStep("address")}
//             disabled={cartItems.length === 0}
//             style={{
//               width: "100%", padding: "14px",
//               backgroundColor: cartItems.length === 0 ? "#ccc" : "#df2020",
//               color: "#fff", border: "none", borderRadius: "12px",
//               fontSize: "1rem", fontWeight: "700",
//               cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
//             }}
//           >
//             Continue to Address →
//           </button>
//         </>
//       )}

//       {/* ===== STEP 2: DELIVERY ADDRESS ===== */}
//       {step === "address" && (
//         <>
//           <div style={cardStyle}>
//             <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "5px" }}>
//               📍 Delivery Address
//             </h5>

//             <label style={labelStyle}>Full Name</label>
//             <input name="name" placeholder="Your full name"
//               value={address.name} onChange={handleAddressChange} style={inputStyle} />

//             <label style={labelStyle}>Phone Number</label>
//             <input name="phone" placeholder="10-digit mobile number"
//               maxLength={10} value={address.phone} onChange={handleAddressChange} style={inputStyle} />

//             <label style={labelStyle}>Street Address</label>
//             <input name="street" placeholder="House no., Street, Area"
//               value={address.street} onChange={handleAddressChange} style={inputStyle} />

//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
//               <div>
//                 <label style={labelStyle}>City</label>
//                 <input name="city" placeholder="City"
//                   value={address.city} onChange={handleAddressChange} style={inputStyle} />
//               </div>
//               <div>
//                 <label style={labelStyle}>Pincode</label>
//                 <input name="pincode" placeholder="6-digit pincode"
//                   maxLength={6} value={address.pincode} onChange={handleAddressChange} style={inputStyle} />
//               </div>
//             </div>
//           </div>

//           <div style={{ display: "flex", gap: "12px" }}>
//             <button onClick={() => setStep("summary")} style={{
//               flex: 1, padding: "14px",
//               backgroundColor: "#f0f0f0", color: "#212245",
//               border: "none", borderRadius: "12px",
//               fontSize: "1rem", fontWeight: "600", cursor: "pointer",
//             }}>
//               ← Back
//             </button>
//             <button
//               onClick={() => {
//                 if (!validateAddress()) {
//                   alert("Please fill all fields correctly!\n• Phone must be 10 digits\n• Pincode must be 6 digits");
//                   return;
//                 }
//                 setStep("payment");
//               }}
//               style={{
//                 flex: 2, padding: "14px",
//                 backgroundColor: "#df2020", color: "#fff",
//                 border: "none", borderRadius: "12px",
//                 fontSize: "1rem", fontWeight: "700", cursor: "pointer",
//               }}
//             >
//               Continue to Payment →
//             </button>
//           </div>
//         </>
//       )}

//       {/* ===== STEP 3: PAYMENT ===== */}
//       {step === "payment" && (
//         <>
//           <div style={cardStyle}>
//             <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>
//               💳 Payment Method
//             </h5>

//             {/* UPI Option */}
//             <label style={{
//               display: "flex", alignItems: "flex-start", gap: "12px",
//               padding: "14px 16px", marginBottom: "12px",
//               border: `2px solid ${paymentMethod === "upi" ? "#df2020" : "#ebebeb"}`,
//               borderRadius: "10px", cursor: "pointer",
//               backgroundColor: paymentMethod === "upi" ? "#fff5f5" : "#fff",
//               transition: "all 0.2s",
//             }}>
//               <input type="radio" name="payment" value="upi"
//                 checked={paymentMethod === "upi"}
//                 onChange={() => setPaymentMethod("upi")}
//                 style={{ accentColor: "#df2020", marginTop: "3px" }}
//               />
//               <div style={{ width: "100%" }}>
//                 <p style={{ margin: 0, fontWeight: "700", color: "#212245" }}>
//                   📱 UPI Payment
//                 </p>
//                 <p style={{ margin: "2px 0 8px", color: "#777", fontSize: "0.8rem" }}>
//                   GPay · PhonePe · Paytm · BHIM
//                 </p>
//                 {paymentMethod === "upi" && (
//                   <input
//                     placeholder="Enter UPI ID (e.g. name@okaxis)"
//                     value={upiId}
//                     onChange={(e) => setUpiId(e.target.value)}
//                     style={{ ...inputStyle, marginTop: 0 }}
//                   />
//                 )}
//               </div>
//             </label>

//             {/* COD Option */}
//             <label style={{
//               display: "flex", alignItems: "center", gap: "12px",
//               padding: "14px 16px",
//               border: `2px solid ${paymentMethod === "cod" ? "#df2020" : "#ebebeb"}`,
//               borderRadius: "10px", cursor: "pointer",
//               backgroundColor: paymentMethod === "cod" ? "#fff5f5" : "#fff",
//               transition: "all 0.2s",
//             }}>
//               <input type="radio" name="payment" value="cod"
//                 checked={paymentMethod === "cod"}
//                 onChange={() => setPaymentMethod("cod")}
//                 style={{ accentColor: "#df2020" }}
//               />
//               <div>
//                 <p style={{ margin: 0, fontWeight: "700", color: "#212245" }}>
//                   💵 Cash on Delivery
//                 </p>
//                 <p style={{ margin: "2px 0 0", color: "#777", fontSize: "0.8rem" }}>
//                   Pay ₹{totalAmount} when your order arrives
//                 </p>
//               </div>
//             </label>
//           </div>

//           {/* Amount summary */}
//           <div style={{
//             ...cardStyle,
//             display: "flex", justifyContent: "space-between", alignItems: "center",
//           }}>
//             <span style={{ fontWeight: "600", color: "#212245" }}>Amount to Pay</span>
//             <span style={{ fontWeight: "800", color: "#df2020", fontSize: "1.3rem" }}>
//               ₹{totalAmount}
//             </span>
//           </div>

//           {orderError && (
//             <div style={{
//               padding: "12px", backgroundColor: "#f8d7da",
//               borderRadius: "10px", color: "#721c24",
//               fontWeight: "600", marginBottom: "16px", textAlign: "center",
//             }}>
//               ❌ Order failed. Please try again.
//             </div>
//           )}

//           <div style={{ display: "flex", gap: "12px" }}>
//             <button onClick={() => setStep("address")} style={{
//               flex: 1, padding: "14px",
//               backgroundColor: "#f0f0f0", color: "#212245",
//               border: "none", borderRadius: "12px",
//               fontSize: "1rem", fontWeight: "600", cursor: "pointer",
//             }}>
//               ← Back
//             </button>
//             <button onClick={handlePayment} style={{
//               flex: 2, padding: "14px",
//               backgroundColor: "#df2020", color: "#fff",
//               border: "none", borderRadius: "12px",
//               fontSize: "1rem", fontWeight: "700", cursor: "pointer",
//             }}>
//               {paymentMethod === "upi"
//                 ? `📱 Pay ₹${totalAmount} via UPI`
//                 : `✅ Place COD Order — ₹${totalAmount}`}
//             </button>
//           </div>
//         </>
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

  const [step, setStep] = useState("summary");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [orderError, setOrderError] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);

  // Fake UPI payment states
  const [upiStep, setUpiStep] = useState("enter"); // enter | confirm | pinentry | processing | success | failed
  const [upiPin, setUpiPin] = useState("");
  const [upiError, setUpiError] = useState("");
  const [selectedUpiApp, setSelectedUpiApp] = useState(null);

  const [address, setAddress] = useState({
    name: "", phone: "", street: "", city: "", pincode: "",
  });

  const handleAddressChange = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateAddress = () =>
    address.name.trim() &&
    address.phone.trim().length === 10 &&
    address.street.trim() &&
    address.city.trim() &&
    address.pincode.trim().length === 6;

  const clearCart = () => {
    cartItems.forEach((item) => dispatch(cartActions.deleteItem(item.id)));
  };

  const saveOrder = async (paymentStatus) => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      alert("Please login to place an order!");
      navigate("/login");
      return { message: "Not logged in" };
    }

    const { error } = await supabase.from("orders").insert([{
      user_id: session.user.id,
      user_email: session.user.email,
      items: cartItems,
      total_amount: totalAmount,
      status: "processing",
      payment_method: paymentMethod,
      payment_status: paymentStatus,
      delivery_address: address,
      created_at: new Date(),
    }]);

    if (error) console.error("❌ Supabase order error:", error);
    return error;
  };

  // ===== FAKE UPI FLOW HANDLERS =====
  const handleUpiAppSelect = (appName) => {
    setSelectedUpiApp(appName);
    setUpiStep("confirm");
  };

  const handleUpiConfirm = () => {
    setUpiStep("pinentry");
    setUpiPin("");
    setUpiError("");
  };

  const handlePinInput = (digit) => {
    if (upiPin.length < 6) setUpiPin((prev) => prev + digit);
  };

  const handlePinDelete = () => {
    setUpiPin((prev) => prev.slice(0, -1));
  };

  const handlePinSubmit = async () => {
    if (upiPin.length < 4) {
      setUpiError("Please enter at least 4 digits");
      return;
    }
    setUpiStep("processing");
    await new Promise((res) => setTimeout(res, 2500));

    // 90% success simulation
    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      const error = await saveOrder("paid");
      if (error) {
        setUpiStep("failed");
      } else {
        setPaidAmount(totalAmount);
        clearCart();
        setUpiStep("success");
        setStep("success");
      }
    } else {
      setUpiStep("failed");
    }
  };

  const handlePayment = async () => {
    if (paymentMethod === "upi") {
      setStep("upi_payment");
      setUpiStep("enter");
      return;
    }
    // COD flow
    setStep("processing");
    await new Promise((res) => setTimeout(res, 3000));
    const error = await saveOrder("cod");
    if (error) {
      setOrderError(true);
      setStep("payment");
    } else {
      setPaidAmount(totalAmount);
      clearCart();
      setStep("success");
    }
  };

  const inputStyle = {
    width: "100%", padding: "11px 14px",
    border: "2px solid #ebebeb", borderRadius: "8px",
    fontSize: "0.9rem", fontFamily: "inherit",
    outline: "none", marginTop: "6px",
    boxSizing: "border-box", backgroundColor: "#f9f9f9",
  };

  const labelStyle = {
    fontWeight: "600", color: "#212245",
    fontSize: "0.85rem", display: "block", marginTop: "12px",
  };

  const cardStyle = {
    background: "#fff", borderRadius: "16px",
    padding: "22px", marginBottom: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  };

  const upiApps = [
    { name: "Google Pay", icon: "🟢", color: "#34A853" },
    { name: "PhonePe",   icon: "🟣", color: "#5F259F" },
    { name: "Paytm",     icon: "🔵", color: "#00B9F1" },
    { name: "BHIM",      icon: "🟠", color: "#FF6B00" },
  ];

  // ===== EMPTY CART =====
  if (cartItems.length === 0 && step !== "success") {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <i className="ri-shopping-cart-line" style={{ fontSize: "4rem", color: "#ddd" }}></i>
        <h4 style={{ color: "#777", marginTop: "15px" }}>Your cart is empty!</h4>
        <button onClick={() => navigate("/pizzas")} style={{
          marginTop: "20px", padding: "12px 30px",
          backgroundColor: "#df2020", color: "#fff",
          border: "none", borderRadius: "10px",
          fontWeight: "600", cursor: "pointer",
        }}>Browse Menu</button>
      </div>
    );
  }

  // ===== COD PROCESSING =====
  if (step === "processing") {
    return (
      <div style={{
        minHeight: "70vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "40px",
      }}>
        <div style={{
          width: "80px", height: "80px", borderRadius: "50%",
          border: "6px solid #f0f0f0", borderTop: "6px solid #df2020",
          animation: "spin 1s linear infinite", marginBottom: "24px",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <h4 style={{ color: "#212245", fontWeight: "700" }}>Placing Your Order...</h4>
        <p style={{ color: "#777", marginTop: "8px" }}>Confirming your Cash on Delivery order...</p>
        <div style={{
          marginTop: "20px", padding: "10px 20px",
          backgroundColor: "#fff3cd", borderRadius: "8px",
          color: "#856404", fontSize: "0.85rem",
        }}>⏳ Please do not close this window</div>
      </div>
    );
  }

  // ===== FAKE UPI PAYMENT SCREENS =====
  if (step === "upi_payment") {

    // — Choose UPI App or enter UPI ID —
    if (upiStep === "enter") {
      return (
        <div style={{ padding: "40px 20px", maxWidth: "420px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div style={{
              width: "60px", height: "60px", borderRadius: "50%",
              backgroundColor: "#f0f7ff", display: "flex",
              alignItems: "center", justifyContent: "center",
              margin: "0 auto 12px", fontSize: "1.8rem",
            }}>📱</div>
            <h4 style={{ color: "#212245", fontWeight: "700", margin: 0 }}>UPI Payment</h4>
            <p style={{ color: "#777", fontSize: "0.85rem", marginTop: "4px" }}>
              Pay ₹{totalAmount} to Tasty Treat
            </p>
          </div>

          {/* Amount banner */}
          <div style={{
            background: "linear-gradient(135deg, #df2020, #ff6b6b)",
            borderRadius: "16px", padding: "20px",
            textAlign: "center", marginBottom: "24px", color: "#fff",
          }}>
            <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.9 }}>Amount to Pay</p>
            <h2 style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "2rem" }}>₹{totalAmount}</h2>
          </div>

          {/* UPI App grid */}
          <p style={{ fontWeight: "700", color: "#212245", marginBottom: "12px" }}>
            Choose UPI App
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {upiApps.map((app) => (
              <button key={app.name} onClick={() => handleUpiAppSelect(app.name)}
                style={{
                  padding: "14px", border: "2px solid #ebebeb",
                  borderRadius: "12px", backgroundColor: "#fff",
                  cursor: "pointer", fontWeight: "600",
                  color: "#212245", fontSize: "0.9rem",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                <span style={{ fontSize: "1.4rem" }}>{app.icon}</span>
                {app.name}
              </button>
            ))}
          </div>

          {/* Manual UPI ID */}
          <p style={{ fontWeight: "700", color: "#212245", marginBottom: "8px" }}>
            Or Enter UPI ID
          </p>
          <input
            placeholder="yourname@okaxis"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            style={inputStyle}
          />
          {upiId.trim() && (
            <button onClick={() => handleUpiAppSelect("UPI ID")} style={{
              width: "100%", marginTop: "12px", padding: "14px",
              backgroundColor: "#df2020", color: "#fff",
              border: "none", borderRadius: "12px",
              fontSize: "1rem", fontWeight: "700", cursor: "pointer",
            }}>Proceed to Pay →</button>
          )}

          <button onClick={() => setStep("payment")} style={{
            width: "100%", marginTop: "12px", padding: "12px",
            backgroundColor: "#f0f0f0", color: "#212245",
            border: "none", borderRadius: "12px",
            fontSize: "0.95rem", fontWeight: "600", cursor: "pointer",
          }}>← Back</button>
        </div>
      );
    }

    // — Confirm payment details —
    if (upiStep === "confirm") {
      return (
        <div style={{ padding: "40px 20px", maxWidth: "420px", margin: "0 auto" }}>
          <div style={cardStyle}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>
                {upiApps.find(a => a.name === selectedUpiApp)?.icon || "📱"}
              </div>
              <h5 style={{ color: "#212245", fontWeight: "700", margin: 0 }}>{selectedUpiApp}</h5>
              <p style={{ color: "#777", fontSize: "0.85rem", margin: "4px 0 0" }}>Confirm Payment</p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa", borderRadius: "12px",
              padding: "16px", marginBottom: "16px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "#777", fontSize: "0.85rem" }}>Paying To</span>
                <span style={{ fontWeight: "700", color: "#212245" }}>Tasty Treat</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "#777", fontSize: "0.85rem" }}>UPI ID</span>
                <span style={{ fontWeight: "600", color: "#212245", fontSize: "0.85rem" }}>
                  tastytreeat@okaxis
                </span>
              </div>
              <div style={{
                display: "flex", justifyContent: "space-between",
                paddingTop: "10px", borderTop: "1px solid #ebebeb",
              }}>
                <span style={{ color: "#777", fontSize: "0.85rem" }}>Amount</span>
                <span style={{ fontWeight: "800", color: "#df2020", fontSize: "1.2rem" }}>₹{totalAmount}</span>
              </div>
            </div>

            <button onClick={handleUpiConfirm} style={{
              width: "100%", padding: "14px",
              backgroundColor: "#df2020", color: "#fff",
              border: "none", borderRadius: "12px",
              fontSize: "1rem", fontWeight: "700", cursor: "pointer",
            }}>Enter UPI PIN →</button>

            <button onClick={() => setUpiStep("enter")} style={{
              width: "100%", marginTop: "10px", padding: "12px",
              backgroundColor: "#f0f0f0", color: "#212245",
              border: "none", borderRadius: "12px",
              fontSize: "0.95rem", fontWeight: "600", cursor: "pointer",
            }}>← Change App</button>
          </div>
        </div>
      );
    }

    // — PIN Entry —
    if (upiStep === "pinentry") {
      return (
        <div style={{ padding: "40px 20px", maxWidth: "380px", margin: "0 auto" }}>
          <div style={cardStyle}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                backgroundColor: "#fff3cd", display: "flex",
                alignItems: "center", justifyContent: "center",
                margin: "0 auto 12px", fontSize: "1.6rem",
              }}>🔒</div>
              <h5 style={{ color: "#212245", fontWeight: "700", margin: 0 }}>Enter UPI PIN</h5>
              <p style={{ color: "#777", fontSize: "0.82rem", marginTop: "4px" }}>
                {selectedUpiApp} · ₹{totalAmount}
              </p>
            </div>

            {/* PIN dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "8px" }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} style={{
                  width: "16px", height: "16px", borderRadius: "50%",
                  backgroundColor: i < upiPin.length ? "#212245" : "#e0e0e0",
                  transition: "background 0.2s",
                }} />
              ))}
            </div>

            {upiError && (
              <p style={{ color: "#df2020", textAlign: "center", fontSize: "0.82rem", marginBottom: "8px" }}>
                {upiError}
              </p>
            )}

            {/* Number pad */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
              {[1,2,3,4,5,6,7,8,9].map((digit) => (
                <button key={digit} onClick={() => handlePinInput(String(digit))} style={{
                  padding: "16px", fontSize: "1.2rem", fontWeight: "700",
                  backgroundColor: "#f8f9fa", border: "2px solid #ebebeb",
                  borderRadius: "12px", cursor: "pointer", color: "#212245",
                }}>{digit}</button>
              ))}
              {/* Empty left cell */}
              <div />
              <button onClick={() => handlePinInput("0")} style={{
                padding: "16px", fontSize: "1.2rem", fontWeight: "700",
                backgroundColor: "#f8f9fa", border: "2px solid #ebebeb",
                borderRadius: "12px", cursor: "pointer", color: "#212245",
              }}>0</button>
              <button onClick={handlePinDelete} style={{
                padding: "16px", fontSize: "1.2rem",
                backgroundColor: "#fff0f0", border: "2px solid #ebebeb",
                borderRadius: "12px", cursor: "pointer", color: "#df2020",
              }}>⌫</button>
            </div>

            <button onClick={handlePinSubmit} disabled={upiPin.length < 4} style={{
              width: "100%", marginTop: "20px", padding: "14px",
              backgroundColor: upiPin.length < 4 ? "#ccc" : "#df2020",
              color: "#fff", border: "none", borderRadius: "12px",
              fontSize: "1rem", fontWeight: "700",
              cursor: upiPin.length < 4 ? "not-allowed" : "pointer",
            }}>
              {upiPin.length < 4 ? "Enter PIN to Continue" : `✅ Pay ₹${totalAmount}`}
            </button>

            <p style={{ textAlign: "center", color: "#aaa", fontSize: "0.75rem", marginTop: "12px" }}>
              🔒 This is a demo payment. No real money is charged.
            </p>
          </div>
        </div>
      );
    }

    // — Processing —
    if (upiStep === "processing") {
      return (
        <div style={{
          minHeight: "70vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "40px",
        }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%",
            border: "6px solid #f0f0f0", borderTop: "6px solid #df2020",
            animation: "spin 1s linear infinite", marginBottom: "24px",
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <h4 style={{ color: "#212245", fontWeight: "700" }}>Processing Payment...</h4>
          <p style={{ color: "#777", marginTop: "8px" }}>
            Sending ₹{totalAmount} via {selectedUpiApp}
          </p>
          <div style={{
            marginTop: "20px", padding: "10px 20px",
            backgroundColor: "#fff3cd", borderRadius: "8px",
            color: "#856404", fontSize: "0.85rem",
          }}>⏳ Please do not close this window</div>
        </div>
      );
    }

    // — Payment Failed —
    if (upiStep === "failed") {
      return (
        <div style={{
          minHeight: "70vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "40px",
        }}>
          <div style={{ fontSize: "5rem", marginBottom: "16px" }}>❌</div>
          <h3 style={{ color: "#df2020", fontWeight: "700" }}>Payment Failed!</h3>
          <p style={{ color: "#777", maxWidth: "320px", marginTop: "8px" }}>
            Your payment could not be processed. Please try again.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={() => { setUpiStep("enter"); setUpiPin(""); }} style={{
              padding: "12px 28px", backgroundColor: "#df2020",
              color: "#fff", border: "none", borderRadius: "10px",
              fontWeight: "600", cursor: "pointer",
            }}>Try Again</button>
            <button onClick={() => setStep("payment")} style={{
              padding: "12px 28px", backgroundColor: "#212245",
              color: "#fff", border: "none", borderRadius: "10px",
              fontWeight: "600", cursor: "pointer",
            }}>Change Payment</button>
          </div>
        </div>
      );
    }
  }

  // ===== SUCCESS SCREEN =====
  if (step === "success") {
    return (
      <div style={{
        minHeight: "70vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "40px",
      }}>
        <AiFillCheckCircle style={{ fontSize: "5rem", color: "#28a745" }} />
        <h3 style={{ color: "#212245", fontWeight: "700", marginTop: "16px" }}>
          Order Placed Successfully! 🎉
        </h3>
        <p style={{ color: "#777", marginTop: "8px", maxWidth: "400px" }}>
          {paymentMethod === "upi"
            ? `₹${paidAmount} paid via ${selectedUpiApp || "UPI"}. Your food is being prepared!`
            : `Cash on Delivery order confirmed! Pay ₹${paidAmount} when delivered.`}
        </p>

        <div style={{
          marginTop: "20px", padding: "16px 24px",
          backgroundColor: "#f8f9fa", borderRadius: "12px",
          textAlign: "left", maxWidth: "380px", width: "100%",
          fontSize: "0.88rem", color: "#555",
        }}>
          <p style={{ margin: 0, fontWeight: "700", color: "#212245", marginBottom: "6px" }}>📍 Delivering to:</p>
          <p style={{ margin: 0 }}>{address.name} · {address.phone}</p>
          <p style={{ margin: 0 }}>{address.street}, {address.city} - {address.pincode}</p>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => navigate("/orders")} style={{
            padding: "12px 28px", backgroundColor: "#df2020",
            color: "#fff", border: "none", borderRadius: "10px",
            fontWeight: "600", cursor: "pointer",
          }}>Track My Order</button>
          <button onClick={() => navigate("/home")} style={{
            padding: "12px 28px", backgroundColor: "#212245",
            color: "#fff", border: "none", borderRadius: "10px",
            fontWeight: "600", cursor: "pointer",
          }}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "620px", margin: "0 auto" }}>
      <h2 style={{ color: "#df2020", fontWeight: "700", marginBottom: "6px" }}>Checkout</h2>

      {/* ===== STEP INDICATOR ===== */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
        {["summary", "address", "payment"].map((s, i) => {
          const steps = ["summary", "address", "payment"];
          const currentIndex = steps.indexOf(step);
          const isDone = currentIndex > i;
          const isActive = step === s;
          return (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                backgroundColor: isActive ? "#df2020" : isDone ? "#28a745" : "#ebebeb",
                color: isActive || isDone ? "#fff" : "#aaa",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.8rem", fontWeight: "700",
              }}>{isDone ? "✓" : i + 1}</div>
              <span style={{
                fontSize: "0.82rem", fontWeight: "600",
                color: isActive ? "#df2020" : "#aaa", textTransform: "capitalize",
              }}>{s === "summary" ? "Order" : s}</span>
              {i < 2 && <span style={{ color: "#ddd" }}>›</span>}
            </div>
          );
        })}
      </div>

      {/* ===== STEP 1: ORDER SUMMARY ===== */}
      {step === "summary" && (
        <>
          <div style={cardStyle}>
            <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>🧾 Order Summary</h5>
            {cartItems.map((item, idx) => (
              <div key={idx} style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f0f0f0",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={item.image01} alt={item.title} style={{
                    width: "45px", height: "45px", borderRadius: "8px", objectFit: "cover",
                  }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.88rem" }}>{item.title}</p>
                    <p style={{ margin: 0, color: "#777", fontSize: "0.78rem" }}>Qty: {item.quantity} × ₹{item.price}</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "700", color: "#df2020", minWidth: "55px", textAlign: "right" }}>
                    ₹{Number(item.price) * Number(item.quantity)}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <button onClick={() => dispatch(cartActions.removeItem(item.id))} style={{
                      width: "26px", height: "26px", backgroundColor: "#f0f0f0",
                      border: "none", borderRadius: "50%", cursor: "pointer",
                      fontWeight: "700", fontSize: "1rem",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#212245",
                    }}>−</button>
                    <span style={{ fontWeight: "600", minWidth: "16px", textAlign: "center" }}>{item.quantity}</span>
                    <button onClick={() => dispatch(cartActions.addItem({
                      id: item.id, title: item.title, image01: item.image01,
                      price: item.price, extraIngredients: item.extraIngredients,
                    }))} style={{
                      width: "26px", height: "26px", backgroundColor: "#df2020",
                      border: "none", borderRadius: "50%", cursor: "pointer",
                      fontWeight: "700", fontSize: "1rem",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                    }}>+</button>
                  </div>
                  <button onClick={() => dispatch(cartActions.deleteItem(item.id))} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "#df2020", fontSize: "1.1rem", padding: "0",
                    display: "flex", alignItems: "center",
                  }} title="Remove item"><i className="ri-delete-bin-line"></i></button>
                </div>
              </div>
            ))}
            <div style={{
              display: "flex", justifyContent: "space-between",
              marginTop: "16px", paddingTop: "16px", borderTop: "2px solid #f0f0f0",
            }}>
              <span style={{ fontWeight: "700", color: "#212245", fontSize: "1rem" }}>
                Total ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
              </span>
              <span style={{ fontWeight: "800", color: "#df2020", fontSize: "1.2rem" }}>₹{totalAmount}</span>
            </div>
          </div>
          <button onClick={() => setStep("address")} disabled={cartItems.length === 0} style={{
            width: "100%", padding: "14px",
            backgroundColor: cartItems.length === 0 ? "#ccc" : "#df2020",
            color: "#fff", border: "none", borderRadius: "12px",
            fontSize: "1rem", fontWeight: "700",
            cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
          }}>Continue to Address →</button>
        </>
      )}

      {/* ===== STEP 2: DELIVERY ADDRESS ===== */}
      {step === "address" && (
        <>
          <div style={cardStyle}>
            <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "5px" }}>📍 Delivery Address</h5>
            <label style={labelStyle}>Full Name</label>
            <input name="name" placeholder="Your full name"
              value={address.name} onChange={handleAddressChange} style={inputStyle} />
            <label style={labelStyle}>Phone Number</label>
            <input name="phone" placeholder="10-digit mobile number"
              maxLength={10} value={address.phone} onChange={handleAddressChange} style={inputStyle} />
            <label style={labelStyle}>Street Address</label>
            <input name="street" placeholder="House no., Street, Area"
              value={address.street} onChange={handleAddressChange} style={inputStyle} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={labelStyle}>City</label>
                <input name="city" placeholder="City"
                  value={address.city} onChange={handleAddressChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Pincode</label>
                <input name="pincode" placeholder="6-digit pincode"
                  maxLength={6} value={address.pincode} onChange={handleAddressChange} style={inputStyle} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => setStep("summary")} style={{
              flex: 1, padding: "14px", backgroundColor: "#f0f0f0", color: "#212245",
              border: "none", borderRadius: "12px", fontSize: "1rem", fontWeight: "600", cursor: "pointer",
            }}>← Back</button>
            <button onClick={() => {
              if (!validateAddress()) {
                alert("Please fill all fields correctly!\n• Phone must be 10 digits\n• Pincode must be 6 digits");
                return;
              }
              setStep("payment");
            }} style={{
              flex: 2, padding: "14px", backgroundColor: "#df2020", color: "#fff",
              border: "none", borderRadius: "12px", fontSize: "1rem", fontWeight: "700", cursor: "pointer",
            }}>Continue to Payment →</button>
          </div>
        </>
      )}

      {/* ===== STEP 3: PAYMENT ===== */}
      {step === "payment" && (
        <>
          <div style={cardStyle}>
            <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "15px" }}>💳 Payment Method</h5>

            <label style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              padding: "14px 16px", marginBottom: "12px",
              border: `2px solid ${paymentMethod === "upi" ? "#df2020" : "#ebebeb"}`,
              borderRadius: "10px", cursor: "pointer",
              backgroundColor: paymentMethod === "upi" ? "#fff5f5" : "#fff",
            }}>
              <input type="radio" name="payment" value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
                style={{ accentColor: "#df2020", marginTop: "3px" }} />
              <div>
                <p style={{ margin: 0, fontWeight: "700", color: "#212245" }}>📱 UPI Payment</p>
                <p style={{ margin: "2px 0 0", color: "#777", fontSize: "0.8rem" }}>GPay · PhonePe · Paytm · BHIM</p>
              </div>
            </label>

            <label style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "14px 16px",
              border: `2px solid ${paymentMethod === "cod" ? "#df2020" : "#ebebeb"}`,
              borderRadius: "10px", cursor: "pointer",
              backgroundColor: paymentMethod === "cod" ? "#fff5f5" : "#fff",
            }}>
              <input type="radio" name="payment" value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                style={{ accentColor: "#df2020" }} />
              <div>
                <p style={{ margin: 0, fontWeight: "700", color: "#212245" }}>💵 Cash on Delivery</p>
                <p style={{ margin: "2px 0 0", color: "#777", fontSize: "0.8rem" }}>
                  Pay ₹{totalAmount} when your order arrives
                </p>
              </div>
            </label>
          </div>

          <div style={{
            ...cardStyle,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontWeight: "600", color: "#212245" }}>Amount to Pay</span>
            <span style={{ fontWeight: "800", color: "#df2020", fontSize: "1.3rem" }}>₹{totalAmount}</span>
          </div>

          {orderError && (
            <div style={{
              padding: "12px", backgroundColor: "#f8d7da", borderRadius: "10px",
              color: "#721c24", fontWeight: "600", marginBottom: "16px", textAlign: "center",
            }}>❌ Order failed. Please try again.</div>
          )}

          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => setStep("address")} style={{
              flex: 1, padding: "14px", backgroundColor: "#f0f0f0", color: "#212245",
              border: "none", borderRadius: "12px", fontSize: "1rem", fontWeight: "600", cursor: "pointer",
            }}>← Back</button>
            <button onClick={handlePayment} style={{
              flex: 2, padding: "14px", backgroundColor: "#df2020", color: "#fff",
              border: "none", borderRadius: "12px", fontSize: "1rem", fontWeight: "700", cursor: "pointer",
            }}>
              {paymentMethod === "upi"
                ? `📱 Pay ₹${totalAmount} via UPI`
                : `✅ Place COD Order — ₹${totalAmount}`}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;