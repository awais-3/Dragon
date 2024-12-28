"use client";

import React from "react";

const SliderMenu = ({ isOpen, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isOpen ? "300px" : "0px",
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
        {["HOME", "EPISODES", "HOW TO BUY", "TOKENOMICS", "FAQ"].map(
          (link, index) => (
            <div
              key={index}
              className="menu_link"
              style={{
                fontSize: "24px",
                margin: "15px 0",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff8a65")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <span
                style={{
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <img
                  src="/dragon.png" // Use your Chinese-themed icon or image here
                  alt="Lantern"
                  style={{ width: "24px", height: "24px" }}
                />
              </span>
              {link}
            </div>
          )
        )}
      </div>

      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        {[
          { href: "https://dexscreener.com", src: "/telegram.png" },
          { href: "https://telegram.com", src: "/telegram.png" },
          { href: "https://twitter.com", src: "/telegram.png" },
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
