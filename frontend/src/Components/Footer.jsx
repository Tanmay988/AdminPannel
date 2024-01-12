import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Tp's Group {date}</p>
    </div>
  );
};

export default Footer;
