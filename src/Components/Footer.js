import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer ">
      <p className="footer-text">Copyright reserved from {currentYear} </p>
    </div>
  );
}
