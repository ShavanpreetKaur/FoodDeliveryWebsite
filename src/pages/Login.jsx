import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabase";
import Helmet from "../components/Helmet/Helmet";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log("✅ Logged in!", data);
      setLoading(false);
      navigate("/home");
    }
  };

  return (
    <Helmet title="Login">
      <div style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}>
        <div style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 25px rgba(0,0,0,0.09)",
          width: "100%",
          maxWidth: "420px",
        }}>
          <h2 style={{ color: "#df2020", fontWeight: "700", marginBottom: "8px", textAlign: "center" }}>
            Welcome Back!
          </h2>
          <p style={{ color: "#777", textAlign: "center", marginBottom: "30px" }}>
            Login to your account
          </p>

          {error && (
            <div style={{
              backgroundColor: "#f8d7da",
              borderRadius: "8px",
              color: "#721c24",
              padding: "12px 16px",
              marginBottom: "20px",
              fontWeight: "500",
            }}>
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{
                display: "block", fontWeight: "600",
                color: "#212245", marginBottom: "8px",
              }}>
                <i className="ri-mail-line"></i> Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "13px 16px",
                  border: "2px solid #ebebeb",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontFamily: "inherit",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            {/* PASSWORD */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block", fontWeight: "600",
                color: "#212245", marginBottom: "8px",
              }}>
                <i className="ri-lock-line"></i> Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "13px 16px",
                  border: "2px solid #ebebeb",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontFamily: "inherit",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: loading ? "#e87070" : "#df2020",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p style={{ textAlign: "center", marginTop: "20px", color: "#777" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#df2020", fontWeight: "600" }}>
              Register
            </Link>
          </p>

        </div>
      </div>
    </Helmet>
  );
};

export default Login;