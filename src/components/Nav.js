import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import MainMenu from  "./MainMenu";
import Reservations from "./Reservations";
import Testimonials from "./Testimonials";

import './Nav.css';
import { Routes, Route, Link } from "react-router-dom";

function Nav(props) {

    return (
        <>

            <nav className="nav-header">
                <img className="nav-logo" src="nav-logo.jpg" alt="nav-logo"/>
                <Link to = "/" className="nav-item">Home</Link>
                <Link to = "/about" className="nav-item">About</Link>
                <Link to = "/main-menu" className="nav-item">Menu</Link>
                <Link to = "/reservations" className="nav-item">Reservations</Link>
                <Link to = "/testimonials" className="nav-item">Testimonials</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/main-menu" element={<MainMenu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
        </>
    )
}

export default Nav;