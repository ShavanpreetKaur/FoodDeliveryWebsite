import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../supabase";

const ADMIN_EMAIL = "shavanpreetkaursarao@gmail.com";

const ProtectedAdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const email = session?.user?.email;
      setIsAdmin(email === ADMIN_EMAIL);
      setLoading(false);
    };
    checkAdmin();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "80px", color: "#777" }}>
        <p>Checking access...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;