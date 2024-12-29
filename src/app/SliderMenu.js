"use client";

import React from "react";

const SliderMenu = ({ isOpen, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isOpen ? "380px" : "0px",
        height: "100%",
        backgroundColor: "#1c1c1c",
        color: "white",
        overflowX: "hidden",
        transition: "width 0.3s ease",
        zIndex: 100000000000,
        padding: isOpen ? "20px" : "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Close Button */}
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          color: "white",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <img
          src="/close_icon.png"
          alt="Close"
          style={{ width: "30px", height: "30px" }}
        />
      </button>

      {/* Menu Links */}
      <div style={{ marginTop: "50px" }}>
        {[
          "HOME",
          "ABOUT",
          "PRESALE",
          "HOW TO BUY",
          "TOKENOMICS",
          "GAMES",
          "FAQ",
        ].map((link, index) => (
          <div
            key={index}
            className="menu_link"
            style={{
              fontSize: "36px",
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "color 0.3s ease, transform 0.3s ease",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              letterSpacing: "1px",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ff8a65";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            <span
              style={{
                marginRight: "15px",
                color: "#ff8a65",
                fontSize: "42px",
                transition: "transform 0.3s ease",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              ★
            </span>
            {link}
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          gap: "20px",
        }}
      >
        {[
          { href: "https://telegram.com", src: "/telegram.png" },
          { href: "https://twitter.com", src: "/ttw.png" },
        ].map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <img
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              src={icon.src}
              alt="Social Icon"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SliderMenu;
