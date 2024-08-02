// src/Home.js
import './Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import mockupImage from './images/mockup.webp';
import { FaLaptop, FaChartLine, FaSearchengin, FaServer, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';

function Home() {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div>
            <header className="App-header">
                <h2 className="small-heading">IT | Digital | Marketing Services</h2>
                <h1 className="main-heading">Online-Präsenz aufbauen und stärken</h1>
                <p className="description">
                    Wir helfen Unternehmen dabei, ihre Online-Präsenz zu etablieren und zu optimieren.
                    Von der Leadrecherche bis hin zu E-Mail-Kampagnen und IT-Support bieten wir umfassende Lösungen.
                </p>
                <button className="cta-button" onClick={handleContactClick}>Jetzt Anfragen</button>
                <img src={mockupImage} alt="Trenner" className="divider-image" />
            </header>
            <section className="new-section">
                <h2>Unsere Expertise in IT und Marketing</h2>
                <p className="subdescription">Hepcode Solutions bietet maßgeschneiderte IT- und Marketing-Dienstleistungen, um Ihr Geschäft zu revolutionieren. Überzeugen Sie sich selbst:</p>
                <div className="grid-container">
                    <div className="grid-item">
                        <FaLaptop size={48} className="icon"/>
                        <p>Web Development</p>
                    </div>
                    <div className="grid-item">
                        <FaMobileAlt size={48} className="icon"/>
                        <p>Mobile Development</p>
                    </div>
                    <div className="grid-item">
                        <FaServer size={48} className="icon"/>
                        <p>IT Support</p>
                    </div>
                    <div className="grid-item">
                        <FaSearchengin size={48} className="icon"/>
                        <p>Lead Recherche</p>
                    </div>
                    <div className="grid-item">
                        <FaChartLine size={48} className="icon"/>
                        <p>SEO Optimization</p>
                    </div>
                    <div className="grid-item">
                        <FaShoppingCart size={48} className="icon"/>
                        <p>E-commerce Solutions</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
