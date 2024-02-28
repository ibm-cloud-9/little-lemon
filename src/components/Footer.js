import React from "react";
import { Link } from "react-router-dom";

import './Footer.css'

function Footer() {

    return (
        <>
        <article className="footer-container">
            <div className="footer-block footer-nav">
                <img className="footer-logo" src="footer.png"/>
            </div>
            <div className="footer-block footer-nav">
                <p>Navigation</p>
                <Link to = "/" className="nav-item">Home</Link>
                <Link to = "/about" className="nav-item">About</Link>
                <Link to = "/main-menu" className="nav-item">Menu</Link>
                <Link to = "/reservations" className="nav-item">Reservations</Link>
                <Link to = "/order-online" className="nav-item">Order online</Link>
                <Link to = "/login" className="nav-item">Login</Link>
            </div>
            <div className="footer-block footer-nav">
                <p>Contact</p><p></p>
                <p>Little Lemon<br/>100 State Street<br/>Chicago, IL<br/>(312) 555-1212<br/></p>
            </div>
            <div className="footer-block footer-nav">
                <p>Social media links</p><p></p>
                <Link to = "#" className="nav-item">Facebook</Link>
                <Link to = "#" className="nav-item">Twitter</Link>
                <Link to = "#" className="nav-item">Instagram</Link>
            </div>
            <div className="footer-block footer-nav">
                <p className="footer-copyright">Copyright &copy; Little Lemon 2024</p>
            </div>
        </article>
        </>
    )
}

export default Footer;