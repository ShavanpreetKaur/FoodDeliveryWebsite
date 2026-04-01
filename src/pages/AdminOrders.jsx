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
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null); // order id being updated
  const [successMsg, setSuccessMsg] = useState(null);

  // Fetch all orders
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

  // Update order status
  const handleStatusChange = async (orderId, newStatus) => {
    setUpdating(orderId);

    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus })
      .eq("id", orderId);

    if (error) {
      console.log("Error updating status:", error);
      alert("❌ Failed to update status. Try again.");
    } else {
      // Update locally without refetching
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
      setSuccessMsg(`Order #${orderId} updated to "${newStatus.replace(/_/g, " ")}"`);
      setTimeout(() => setSuccessMsg(null), 3000);
    }

    setUpdating(null);
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
            Update order statuses for all customers
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

      {/* Orders List */}
      {!loading && orders.map((order) => {
        const statusStyle = statusColors[order.status] || statusColors.processing;

        return (
          <div
            key={order.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "25px",
              marginBottom: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              borderLeft: `5px solid ${statusStyle.color}`,
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

              {/* Status Badge + Dropdown */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
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

                {/* Status Dropdown */}
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

                {updating === order.id && (
                  <span style={{ color: "#777", fontSize: "0.85rem" }}>Saving...</span>
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
                    <span style={{ fontWeight: "600", color: "#df2020", fontSize: "0.88rem" }}>
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
                  <span style={{ fontWeight: "700", color: "#df2020" }}>
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