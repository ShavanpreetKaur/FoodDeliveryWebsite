import React, { useState, useEffect } from "react";
import supabase from "../supabase";

const statusOptions = [
  { value: "processing", label: "Order Placed" },
  { value: "confirmed", label: "Order Confirmed" },
  { value: "preparing", label: "Preparing" },
  { value: "out_for_delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
];

const statusColors = {
  processing:       { bg: "#f8d7da", color: "#721c24" },
  confirmed:        { bg: "#d1ecf1", color: "#0c5460" },
  preparing:        { bg: "#fff3cd", color: "#856404" },
  out_for_delivery: { bg: "#cce5ff", color: "#004085" },
  delivered:        { bg: "#d4edda", color: "#155724" },
  cancelled:        { bg: "#e2e3e5", color: "#383d41" },
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const [cancelling, setCancelling] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [confirmCancel, setConfirmCancel] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Error fetching orders:", error);
    } else {
      setOrders(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    setUpdating(orderId);
    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus })
      .eq("id", orderId);

    if (error) {
      alert("❌ Failed to update status. Try again.");
    } else {
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
      setSuccessMsg(`Order #${orderId} updated to "${newStatus.replace(/_/g, " ")}"`);
      setTimeout(() => setSuccessMsg(null), 3000);
    }
    setUpdating(null);
  };

  const handleCancelOrder = async (orderId) => {
    setCancelling(orderId);
    setConfirmCancel(null);

    const { error } = await supabase
      .from("orders")
      .update({ status: "cancelled" })
      .eq("id", orderId);

    if (error) {
      alert("❌ Failed to cancel order. Try again.");
    } else {
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: "cancelled" } : o))
      );
      setSuccessMsg(`Order #${orderId} has been cancelled.`);
      setTimeout(() => setSuccessMsg(null), 3000);
    }
    setCancelling(null);
  };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>

      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        flexWrap: "wrap",
        gap: "10px",
      }}>
        <div>
          <h2 style={{ color: "#df2020", fontWeight: "700", margin: 0 }}>
            🛠 Admin — Order Management
          </h2>
          <p style={{ color: "#777", margin: "5px 0 0" }}>
            Update or cancel orders for all customers
          </p>
        </div>
        <button
          onClick={fetchOrders}
          style={{
            padding: "10px 20px",
            backgroundColor: "#212245",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          🔄 Refresh
        </button>
      </div>

      {/* Success Message */}
      {successMsg && (
        <div style={{
          padding: "12px 20px",
          backgroundColor: "#d4edda",
          borderRadius: "10px",
          color: "#155724",
          fontWeight: "600",
          marginBottom: "20px",
          textAlign: "center",
        }}>
          ✅ {successMsg}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: "center", color: "#777", padding: "60px" }}>
          <p style={{ fontSize: "1.1rem" }}>Loading orders...</p>
        </div>
      )}

      {/* No Orders */}
      {!loading && orders.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "60px",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
          <p style={{ fontSize: "1.2rem", color: "#777" }}>No orders found.</p>
        </div>
      )}

      {/* ===== Confirm Cancel Modal ===== */}
      {confirmCancel && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}>
          <div style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "35px",
            maxWidth: "400px",
            width: "90%",
            textAlign: "center",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>⚠️</div>
            <h5 style={{ color: "#212245", fontWeight: "700", marginBottom: "10px" }}>
              Cancel Order #{confirmCancel}?
            </h5>
            <p style={{ color: "#777", marginBottom: "25px", fontSize: "0.95rem" }}>
              This will mark the order as <strong>cancelled</strong>. The customer will see this update immediately.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={() => setConfirmCancel(null)}
                style={{
                  padding: "11px 24px",
                  backgroundColor: "#f0f0f0",
                  color: "#212245",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                }}
              >
                Keep Order
              </button>
              <button
                onClick={() => handleCancelOrder(confirmCancel)}
                style={{
                  padding: "11px 24px",
                  backgroundColor: "#df2020",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                }}
              >
                Yes, Cancel It
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Orders List */}
      {!loading && orders.map((order) => {
        const statusStyle = statusColors[order.status] || statusColors.processing;
        const isCancelled = order.status === "cancelled";

        return (
          <div
            key={order.id}
            style={{
              background: isCancelled ? "#fafafa" : "#fff",
              borderRadius: "16px",
              padding: "25px",
              marginBottom: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              borderLeft: `5px solid ${statusStyle.color}`,
              opacity: isCancelled ? 0.75 : 1,
            }}
          >
            {/* Order Header */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "15px",
              marginBottom: "15px",
            }}>
              <div>
                <h5 style={{ margin: 0, color: "#212245", fontWeight: "700" }}>
                  Order #{order.id}
                  {isCancelled && (
                    <span style={{
                      marginLeft: "10px",
                      fontSize: "0.75rem",
                      backgroundColor: "#e2e3e5",
                      color: "#383d41",
                      padding: "3px 10px",
                      borderRadius: "50px",
                      fontWeight: "600",
                    }}>
                      CANCELLED
                    </span>
                  )}
                </h5>
                <p style={{ margin: "4px 0 0", color: "#777", fontSize: "0.85rem" }}>
                  👤 {order.user_email || "Guest"}
                </p>
                <p style={{ margin: "2px 0 0", color: "#aaa", fontSize: "0.8rem" }}>
                  🕐 {new Date(order.created_at).toLocaleDateString("en-IN", {
                    year: "numeric", month: "long", day: "numeric",
                    hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              </div>

              {/* Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>

                {/* Status Badge */}
                <span style={{
                  padding: "5px 14px",
                  borderRadius: "50px",
                  backgroundColor: statusStyle.bg,
                  color: statusStyle.color,
                  fontWeight: "600",
                  fontSize: "0.82rem",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}>
                  {order.status?.replace(/_/g, " ")}
                </span>

                {/* Status Dropdown — hidden if cancelled */}
                {!isCancelled && (
                  <select
                    value={order.status}
                    disabled={updating === order.id}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "2px solid #ebebeb",
                      fontWeight: "600",
                      color: "#212245",
                      cursor: updating === order.id ? "not-allowed" : "pointer",
                      fontSize: "0.85rem",
                      outline: "none",
                      backgroundColor: updating === order.id ? "#f5f5f5" : "#fff",
                    }}
                  >
                    {statusOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}

                {updating === order.id && (
                  <span style={{ color: "#777", fontSize: "0.85rem" }}>Saving...</span>
                )}

                {/* Cancel Button — hidden if already cancelled or delivered */}
                {!isCancelled && order.status !== "delivered" && (
                  <button
                    onClick={() => setConfirmCancel(order.id)}
                    disabled={cancelling === order.id}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#fff",
                      color: "#df2020",
                      border: "2px solid #df2020",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: cancelling === order.id ? "not-allowed" : "pointer",
                      fontSize: "0.85rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cancelling === order.id ? "Cancelling..." : "✕ Cancel Order"}
                  </button>
                )}
              </div>
            </div>

            {/* Order Items */}
            {order.items && order.items.length > 0 && (
              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "12px" }}>
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "6px 0",
                      borderBottom: "1px solid #fafafa",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src={item.image01}
                        alt={item.title}
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          filter: isCancelled ? "grayscale(100%)" : "none",
                        }}
                      />
                      <div>
                        <p style={{ margin: 0, fontWeight: "600", color: "#212245", fontSize: "0.88rem" }}>
                          {item.title}
                        </p>
                        <p style={{ margin: 0, color: "#777", fontSize: "0.78rem" }}>
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span style={{ fontWeight: "600", color: isCancelled ? "#aaa" : "#df2020", fontSize: "0.88rem" }}>
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}

                {/* Total */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  paddingTop: "10px",
                  borderTop: "2px solid #f0f0f0",
                }}>
                  <span style={{ fontWeight: "700", color: "#212245" }}>Total:</span>
                  <span style={{ fontWeight: "700", color: isCancelled ? "#aaa" : "#df2020" }}>
                    ₹{order.total_amount}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AdminOrders;