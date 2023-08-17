import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Style
import "./Navigation.scss";

function Navigation({ clearBurger }) {
  return (
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <AnchorLink onClick={clearBurger} offset='68' href="#about-us" className="nav__link">
              Про нас
            </AnchorLink>
          </li>
          <li className="nav__item">
            <AnchorLink onClick={clearBurger} offset='68' href="#project" className="nav__link">
              Наші проєкти
            </AnchorLink>
          </li>
          <li className="nav__item">
            <AnchorLink onClick={clearBurger} offset='68' href="#join-us" className="nav__link">
              Приєднуйтесь до нас
            </AnchorLink>
          </li>
          <li className="nav__item">
            <AnchorLink onClick={clearBurger} offset='68' href="#contact" className="nav__link">
              Зв'яжіться з нами
            </AnchorLink>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;
