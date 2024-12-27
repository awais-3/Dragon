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
        backgroundColor: "#410c07",
        color: "white",
        overflowX: "hidden",
        transition: "width 0.3s ease",
        zIndex: 10000000000,
        borderRight: isOpen && "10px solid gold",
        padding: isOpen ? "20px" : "0",
      }}
    >
      {/* Close Button */}
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          color: "white",
          border: "none",
          fontSize: "20px",
        }}
        onClick={onClose}
      >
        <img src="/close_icon.png" style={{ width: "40px", height: "40px" }} />
      </button>

      {/* Menu Links */}
      <div style={{ marginTop: "50px" }}>
        <div className="meni_link">Games</div>
        <div className="meni_link">Presale</div>
        <div className="meni_link">Tokenomics</div>
        <div className="meni_link">How to buy</div>
        <div className="meni_link">About</div>
      </div>

      {/* <div
        style={{
          position: "absolute",
          zIndex: 10000000000,
          bottom: "10px",
          height: "100px",
          background: "white",
        }}
      >
        <a className="atag" href="https://twitter.com" target="_blank">
          <img className="socialimg1" src="/ttw.png" alt="Twitter"></img>
        </a>

        <a className="atag1" href="https://telegram.com" target="_blank">
          <img className="socialimg" src="/telegram.png" alt="Twitter"></img>
        </a>

        <a className="atagdex" href="https://dexscreener.com" target="_blank">
          <img className="socialimgdex" src="/dex.png" alt="Twitter"></img>
        </a>
      </div> */}
    </div>
  );
};

export default SliderMenu;
