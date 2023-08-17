import React, { useEffect, useRef, useState } from "react";

// Components
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

// Style
import "./Header.scss";

// Svg
import LogoSvg from '../../assets/images/svg/logo.svg' 

function Header() {
  const [activeBurger, setActiveBurger] = useState(false);

  const headerRef = useRef(null)

  function heandlerBurger() {
    setActiveBurger(!activeBurger)
  }

  useEffect(() => {
    if(activeBurger) {
      document.body.classList.add('look')
    } else {
      document.body.classList.remove('look')
    }
  }, [activeBurger])

  function clearBurger() {
    setActiveBurger(false)
  }

  return (
    <header className={`header`} ref={headerRef}>
      <div className="header__container _container">
        <div className="header__wrapper">
          <Logo LogoSvg={LogoSvg} />
          <div className={`header__inner${activeBurger ? " active" : ""}`}>
            <Navigation clearBurger={clearBurger} />
          </div>
          <div 
          className={`header__burger${activeBurger ? " active" : ""}`}
          onClick={heandlerBurger}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
