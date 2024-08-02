// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Hepcode Solutions. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="/impressum">Impressum</a>
                    <a href="/contact">Kontakt</a>
                    <a href="/datenschutz">Datenschutz</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
