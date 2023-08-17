import React from "react";

// Style
import './Footer.scss'

// Svg
import LogoSvg from '../../assets/images/svg/logo.svg' 

// Components
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container _container">
                <Logo LogoSvg={LogoSvg} />
                <Navigation />
            </div>
        </footer>
    )
}

export default Footer