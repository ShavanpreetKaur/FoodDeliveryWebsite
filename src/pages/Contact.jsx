import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import emailjs from "@emailjs/browser";
import supabase from "../supabase";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (!name) { setNameError(true); return; }
    if (!email) { setEmailError(true); return; }
    if (!message) { setMessageError(true); return; }

    setLoading(true);
    setSuccess(false);
    setError(false);

    // ✅ Save to Supabase database
    const { error: dbError } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);

    if (dbError) {
      console.log("❌ Supabase DB Error:", dbError);
    } else {
      console.log("✅ Message saved to database!");
    }

    // ✅ Send Email via EmailJS
    emailjs
      .send(
        "service_4b35qse",
        "template_trnxrbv",
        { from_name: name, from_email: email, message: message },
        "Fq7xT4AT4KEdCuVY9"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log("EmailJS Error:", err);
      });
  };

  return (
    <Helmet title="Contact">
      <div style={{ padding: "60px 20px" }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
        }}>

          {/* ===== LEFT INFO ===== */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h2 style={{ color: "#df2020", fontWeight: "700", marginBottom: "10px" }}>
              Get In Touch
            </h2>
            <p style={{ color: "#777", marginBottom: "30px", lineHeight: "1.7" }}>
              Have a question or feedback? We'd love to hear from you!
            </p>

            {/* Address */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <span style={{
                width: "45px", height: "45px", background: "#df2020",
                color: "#fff", borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>
                <i className="ri-map-pin-line"></i>
              </span>
              <p style={{ margin: 0, color: "#555" }}>123 Pizza Street, Food City, FC 12345</p>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <span style={{
                width: "45px", height: "45px", background: "#df2020",
                color: "#fff", borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>
                <i className="ri-phone-line"></i>
              </span>
              <p style={{ margin: 0, color: "#555" }}>+1 (555) 123-4567</p>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <span style={{
                width: "45px", height: "45px", background: "#df2020",
                color: "#fff", borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>
                <i className="ri-mail-line"></i>
              </span>
              <p style={{ margin: 0, color: "#555" }}>hello@tastytreats.com</p>
            </div>

            {/* Timing */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <span style={{
                width: "45px", height: "45px", background: "#df2020",
                color: "#fff", borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>
                <i className="ri-time-line"></i>
              </span>
              <p style={{ margin: 0, color: "#555" }}>Mon - Sun: 9:00 AM - 11:00 PM</p>
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div style={{
            flex: 1,
            minWidth: "280px",
            background: "#fff",
            padding: "35px",
            borderRadius: "16px",
            boxShadow: "0 4px 25px rgba(0,0,0,0.09)",
          }}>
            <h4 style={{ color: "#212245", fontWeight: "700", marginBottom: "25px" }}>
              Send Us a Message
            </h4>

            {/* Success */}
            {success && (
              <div style={{
                backgroundColor: "#d4edda", borderRadius: "8px",
                color: "#155724", fontWeight: "500",
                padding: "12px 16px", marginBottom: "20px",
              }}>
                ✅ Message sent! We'll get back to you soon.
              </div>
            )}

            {/* Error */}
            {error && (
              <div style={{
                backgroundColor: "#f8d7da", borderRadius: "8px",
                color: "#721c24", fontWeight: "500",
                padding: "12px 16px", marginBottom: "20px",
              }}>
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail}>

              {/* NAME */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block", fontWeight: "600",
                  color: "#212245", marginBottom: "8px", fontSize: "0.95rem",
                }}>
                  <i className="ri-user-line"></i> Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your full name"
                  onChange={() => setNameError(false)}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    border: nameError ? "2px solid #df2020" : "2px solid #ebebeb",
                    borderRadius: "10px",
                    fontSize: "0.95rem",
                    fontFamily: "inherit",
                    outline: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#f9f9f9",
                    color: "#212245",
                  }}
                />
                {nameError && (
                  <span style={{ color: "#df2020", fontSize: "0.83rem", marginTop: "5px", display: "block" }}>
                    ⚠️ Name is required!
                  </span>
                )}
              </div>

              {/* EMAIL */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block", fontWeight: "600",
                  color: "#212245", marginBottom: "8px", fontSize: "0.95rem",
                }}>
                  <i className="ri-mail-line"></i> Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email address"
                  onChange={() => setEmailError(false)}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    border: emailError ? "2px solid #df2020" : "2px solid #ebebeb",
                    borderRadius: "10px",
                    fontSize: "0.95rem",
                    fontFamily: "inherit",
                    outline: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#f9f9f9",
                    color: "#212245",
                  }}
                />
                {emailError && (
                  <span style={{ color: "#df2020", fontSize: "0.83rem", marginTop: "5px", display: "block" }}>
                    ⚠️ Email is required!
                  </span>
                )}
              </div>

              {/* MESSAGE */}
              <div style={{ marginBottom: "25px" }}>
                <label style={{
                  display: "block", fontWeight: "600",
                  color: "#212245", marginBottom: "8px", fontSize: "0.95rem",
                }}>
                  <i className="ri-message-3-line"></i> Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  onChange={() => setMessageError(false)}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    border: messageError ? "2px solid #df2020" : "2px solid #ebebeb",
                    borderRadius: "10px",
                    fontSize: "0.95rem",
                    fontFamily: "inherit",
                    outline: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#f9f9f9",
                    color: "#212245",
                    minHeight: "140px",
                    resize: "vertical",
                  }}
                ></textarea>
                {messageError && (
                  <span style={{ color: "#df2020", fontSize: "0.83rem", marginTop: "5px", display: "block" }}>
                    ⚠️ Message is required!
                  </span>
                )}
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.3s",
                }}
              >
                {loading ? (
                  <><i className="ri-loader-4-line"></i> Sending...</>
                ) : (
                  <><i className="ri-send-plane-fill"></i> Send Message</>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </Helmet>
  );
};

export default Contact;