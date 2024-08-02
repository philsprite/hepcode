// src/Navbar.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    const handleMockupClick = () => {
        navigate('/contact');
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="navbar-logo">
                <span className="hepcode">hepcode</span> <span className="solutions">solutions</span>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <div
                    className="dropdown"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <Link to="/services">Services</Link>
                    {dropdown && (
                        <div className="dropdown-content">
                            <Link to="/services/webentwicklung">Webentwicklung</Link>
                            <Link to="/services/leadrecherche">Marketing Service</Link>
                        </div>
                    )}
                </div>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Kontakt</Link>
                <button className="mockup-button" onClick={handleMockupClick}>Free Mockup</button>
            </div>
        </nav>
    );
};

export default Navbar;
