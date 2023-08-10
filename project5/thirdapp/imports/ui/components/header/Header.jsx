import React from "react";
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <img className="logo"  src="/assets/logo.png" alt="logo" />
            <ul className="header-menu">
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        
        </div>
    )
}

export default Header