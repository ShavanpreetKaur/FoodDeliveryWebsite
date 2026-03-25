// import React, { useState, useEffect } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import supabase from "../supabase";

// const steps = [
//   { label: "Order Placed",     icon: "ri-shopping-cart-line",    key: "placed" },
//   { label: "Order Confirmed",  icon: "ri-checkbox-circle-line",  key: "confirmed" },
//   { label: "Preparing",        icon: "ri-restaurant-line",       key: "preparing" },
//   { label: "Out for Delivery", icon: "ri-e-bike-line",           key: "out_for_delivery" },
//   { label: "Delivered",        icon: "ri-map-pin-line",          key: "delivered" },
// ];

// const statusIndex = {
//   processing:       0,
//   confirmed:        1,
//   preparing:        2,
//   out_for_delivery: 3,
//   delivered:        4,
// };

// const OrderTracking = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//     });
//   }, []);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from("orders")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) {
//         console.log("Error fetching orders:", error);
//       } else {
//         setOrders(data);
//       }
//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <Helmet title="Order Tracking">
//       <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

//         <h2 style={{ color: "#df2020", fontWeight: "700", marginBottom: "8px" }}>
//           My Orders
//         </h2>
//         <p style={{ color: "#777", marginBottom: "30px" }}>
//           Track your order status here
//         </p>

//         {loading ? (
//           <div style={{ textAlign: "center", color: "#777", padding: "40px" }}>
//             <i className="ri-loader-4-line" style={{ fontSize: "2rem" }}></i>
//             <p>Loading orders...</p>
//           </div>
//         ) : orders.length === 0 ? (
//           <div style={{
//             textAlign: "center",
//             padding: "60px 20px",
//             background: "#fff",
//             borderRadius: "16px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//           }}>
//             <i className="ri-shopping-bag-line" style={{ fontSize: "3rem", color: "#ddd" }}></i>
//             <h5 style={{ color: "#777", marginTop: "15px" }}>No orders yet!</h5>
//             <p style={{ color: "#aaa" }}>Your orders will appear here after you place them.</p>
//           </div>
//         ) : (
//           orders.map((order) => (
//             <div
//               key={order.id}
//               style={{
//                 background: "#fff",
//                 borderRadius: "16px",
//                 padding: "25px",
//                 marginBottom: "25px",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//               }}
//             >
//               {/* Order Header */}
//               <div style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: "20px",
//                 flexWrap: "wrap",
//                 gap: "10px",
//               }}>
//                 <div>
//                   <h5 style={{ margin: 0, color: "#212245", fontWeight: "700" }}>
//                     Order #{order.id}
//                   </h5>
//                   <p style={{ margin: 0, color: "#777", fontSize: "0.85rem" }}>
//                     {new Date(order.created_at).toLocaleDateString("en-IN", {
//                       year: "numeric", month: "long", day: "numeric",
//                       hour: "2-digit", minute: "2-digit",
//                     })}
//                   </p>
//                 </div>
//                 <span style={{
//                   padding: "6px 16px",
//                   borderRadius: "50px",
//                   backgroundColor:
//                     order.status === "delivered" ? "#d4edda" :
//                     order.status === "out_for_delivery" ? "#cce5ff" :
//                     order.status === "preparing" ? "#fff3cd" :
//                     "#f8d7da",
//                   color:
//                     order.status === "delivered" ? "#155724" :
//                     order.status === "out_for_delivery" ? "#004085" :
//                     order.status === "preparing" ? "#856404" :
//                     "#721c24",
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   textTransform: "capitalize",
//                 }}>
//                   {order.status?.replace(/_/g, " ")}
//                 </span>
//               </div>

//               {/* ===== TRACKING STEPS ===== */}
//               <div style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-start",
//                 marginBottom: "25px",
//                 overflowX: "auto",
//                 paddingBottom: "10px",
//               }}>
//                 {steps.map((step, index) => {
//                   const currentStep = statusIndex[order.status] ?? 0;
//                   const isCompleted = index <= currentStep;
//                   const isActive = index === currentStep;

//                   return (
//                     <div
//                       key={index}
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         flex: 1,
//                         position: "relative",
//                       }}
//                     >
//                       {/* Line between steps */}
//                       {index < steps.length - 1 && (
//                         <div style={{
//                           position: "absolute",
//                           top: "20px",
//                           left: "50%",
//                           width: "100%",
//                           height: "3px",
//                           backgroundColor: index < currentStep ? "#df2020" : "#ebebeb",
//                           zIndex: 0,
//                         }} />
//                       )}

//                       {/* Step Circle */}
//                       <div style={{
//                         width: "40px",
//                         height: "40px",
//                         borderRadius: "50%",
//                         backgroundColor: isCompleted ? "#df2020" : "#ebebeb",
//                         color: isCompleted ? "#fff" : "#aaa",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "1.1rem",
//                         zIndex: 1,
//                         position: "relative",
//                         boxShadow: isActive ? "0 0 0 4px rgba(223,32,32,0.2)" : "none",
//                         transition: "all 0.3s",
//                       }}>
//                         <i className={step.icon}></i>
//                       </div>

//                       {/* Step Label */}
//                       <p style={{
//                         fontSize: "0.75rem",
//                         fontWeight: isActive ? "700" : "500",
//                         color: isCompleted ? "#df2020" : "#aaa",
//                         marginTop: "8px",
//                         textAlign: "center",
//                         whiteSpace: "nowrap",
//                       }}>
//                         {step.label}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Order Items */}
//               {order.items && order.items.length > 0 && (
//                 <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "15px" }}>
//                   <h6 style={{ color: "#212245", fontWeight: "700", marginBottom: "12px" }}>
//                     Items Ordered
//                   </h6>
//                   {order.items.map((item, idx) => (
//                     <div
//                       key={idx}
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         padding: "8px 0",
//                         borderBottom: "1px solid #f9f9f9",
//                       }}
//                     >
//                       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                         <img
//                           src={item.image01}
//                           alt={item.title}
//                           style={{
//                             width: "40px",
//                             height: "40px",
//                             borderRadius: "8px",
//                             objectFit: "cover",
//                           }}
//                         />
//                         <div>
//                           <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.9rem" }}>
//                             {item.title}
//                           </p>
//                           <p style={{ margin: 0, color: "#777", fontSize: "0.8rem" }}>
//                             Qty: {item.quantity}
//                           </p>
//                         </div>
//                       </div>
//                       <span style={{ fontWeight: "600", color: "#df2020" }}>
//                         ₹{item.price * item.quantity}
//                       </span>
//                     </div>
//                   ))}

//                   {/* Total */}
//                   <div style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginTop: "12px",
//                     paddingTop: "12px",
//                     borderTop: "2px solid #f0f0f0",
//                   }}>
//                     <span style={{ fontWeight: "700", color: "#212245" }}>Total:</span>
//                     <span style={{ fontWeight: "700", color: "#df2020" }}>
//                       ₹{order.total_amount}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </Helmet>
//   );
// };

// export default OrderTracking;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import supabase from "../supabase";

const steps = [
  { label: "Order Placed",     icon: "ri-shopping-cart-line",   key: "placed" },
  { label: "Order Confirmed",  icon: "ri-checkbox-circle-line", key: "confirmed" },
  { label: "Preparing",        icon: "ri-restaurant-line",      key: "preparing" },
  { label: "Out for Delivery", icon: "ri-e-bike-line",          key: "out_for_delivery" },
  { label: "Delivered",        icon: "ri-map-pin-line",         key: "delivered" },
];

const statusIndex = {
  processing:       0,
  confirmed:        1,
  preparing:        2,
  out_for_delivery: 3,
  delivered:        4,
};

const OrderTracking = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // ✅ Get current user
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  // ✅ Fetch only this user's orders
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);

      const { data: { session } } = await supabase.auth.getSession();
      const userEmail = session?.user?.email;

      if (!userEmail) {
        setOrders([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_email", userEmail)
        .order("created_at", { ascending: false });

      if (error) {
        console.log("Error fetching orders:", error);
      } else {
        setOrders(data);
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <Helmet title="Order Tracking">
      <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h2 style={{ color: "#df2020", fontWeight: "700", marginBottom: "8px" }}>
          My Orders
        </h2>
        <p style={{ color: "#777", marginBottom: "30px" }}>
          Track your order status here
        </p>

        {/* ✅ Not logged in message */}
        {!user && !loading && (
          <div style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <i className="ri-lock-line" style={{ fontSize: "3rem", color: "#df2020" }}></i>
            <h5 style={{ color: "#212245", marginTop: "15px" }}>
              Please login to view your orders
            </h5>
            <p style={{ color: "#777" }}>
              You need to be logged in to see your order history.
            </p>
            <button
              onClick={() => navigate("/login")}
              style={{
                marginTop: "15px",
                padding: "12px 30px",
                backgroundColor: "#df2020",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Login Now
            </button>
          </div>
        )}

        {/* ✅ Loading */}
        {loading && (
          <div style={{ textAlign: "center", color: "#777", padding: "40px" }}>
            <i className="ri-loader-4-line" style={{ fontSize: "2rem" }}></i>
            <p>Loading orders...</p>
          </div>
        )}

        {/* ✅ No orders yet */}
        {!loading && user && orders.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <i className="ri-shopping-bag-line" style={{ fontSize: "3rem", color: "#ddd" }}></i>
            <h5 style={{ color: "#777", marginTop: "15px" }}>No orders yet!</h5>
            <p style={{ color: "#aaa" }}>
              Your orders will appear here after you place them.
            </p>
            <button
              onClick={() => navigate("/home")}
              style={{
                marginTop: "15px",
                padding: "12px 30px",
                backgroundColor: "#df2020",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Order Now
            </button>
          </div>
        )}

        {/* ✅ Orders List */}
        {!loading && user && orders.length > 0 && (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "25px",
                marginBottom: "25px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              {/* Order Header */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                flexWrap: "wrap",
                gap: "10px",
              }}>
                <div>
                  <h5 style={{ margin: 0, color: "#212245", fontWeight: "700" }}>
                    Order #{order.id}
                  </h5>
                  <p style={{ margin: 0, color: "#777", fontSize: "0.85rem" }}>
                    {new Date(order.created_at).toLocaleDateString("en-IN", {
                      year: "numeric", month: "long", day: "numeric",
                      hour: "2-digit", minute: "2-digit",
                    })}
                  </p>
                </div>
                <span style={{
                  padding: "6px 16px",
                  borderRadius: "50px",
                  backgroundColor:
                    order.status === "delivered"        ? "#d4edda" :
                    order.status === "out_for_delivery" ? "#cce5ff" :
                    order.status === "preparing"        ? "#fff3cd" :
                    "#f8d7da",
                  color:
                    order.status === "delivered"        ? "#155724" :
                    order.status === "out_for_delivery" ? "#004085" :
                    order.status === "preparing"        ? "#856404" :
                    "#721c24",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  textTransform: "capitalize",
                }}>
                  {order.status?.replace(/_/g, " ")}
                </span>
              </div>

              {/* ===== TRACKING STEPS ===== */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "25px",
                overflowX: "auto",
                paddingBottom: "10px",
              }}>
                {steps.map((step, index) => {
                  const currentStep = statusIndex[order.status] ?? 0;
                  const isCompleted = index <= currentStep;
                  const isActive = index === currentStep;

                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: 1,
                        position: "relative",
                      }}
                    >
                      {/* Line between steps */}
                      {index < steps.length - 1 && (
                        <div style={{
                          position: "absolute",
                          top: "20px",
                          left: "50%",
                          width: "100%",
                          height: "3px",
                          backgroundColor: index < currentStep ? "#df2020" : "#ebebeb",
                          zIndex: 0,
                        }} />
                      )}

                      {/* Step Circle */}
                      <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: isCompleted ? "#df2020" : "#ebebeb",
                        color: isCompleted ? "#fff" : "#aaa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        zIndex: 1,
                        position: "relative",
                        boxShadow: isActive ? "0 0 0 4px rgba(223,32,32,0.2)" : "none",
                        transition: "all 0.3s",
                      }}>
                        <i className={step.icon}></i>
                      </div>

                      {/* Step Label */}
                      <p style={{
                        fontSize: "0.75rem",
                        fontWeight: isActive ? "700" : "500",
                        color: isCompleted ? "#df2020" : "#aaa",
                        marginTop: "8px",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}>
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Order Items */}
              {order.items && order.items.length > 0 && (
                <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "15px" }}>
                  <h6 style={{ color: "#212245", fontWeight: "700", marginBottom: "12px" }}>
                    Items Ordered
                  </h6>
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 0",
                        borderBottom: "1px solid #f9f9f9",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                          src={item.image01}
                          alt={item.title}
                          style={{
                            width: "40px",
                            height: "40px",
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

                  {/* Total */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "12px",
                    paddingTop: "12px",
                    borderTop: "2px solid #f0f0f0",
                  }}>
                    <span style={{ fontWeight: "700", color: "#212245" }}>Total:</span>
                    <span style={{ fontWeight: "700", color: "#df2020" }}>
                      ₹{order.total_amount}
                    </span>
                  </div>
                </div>
              )}

            </div>
          ))
        )}

      </div>
    </Helmet>
  );
};

export default OrderTracking;