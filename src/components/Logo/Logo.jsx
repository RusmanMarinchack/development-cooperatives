import React from "react";

// Style
import './Logo.scss'

function Logo({ LogoSvg }) {
  return (
    <div className="logo">
      <a href="#">
        <img src={LogoSvg} alt="Логотип" />
      </a>
    </div>
  );
}

export default Logo;
