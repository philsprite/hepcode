// src/Services.js
import React from 'react';
import { FaLaptop, FaChartLine, FaSearchengin, FaServer, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';
import './Services.css';
import codingImage from './images/coding.jpg'; // Fügen Sie Ihr Platzhalterbild hinzu

function Services() {
    return (
        <div className="services-page">
            <section className="intro-section">
                <div className="intro-text">
                    <h1>Unsere Dienstleistungen</h1>
                    <h3 className="intro-subtitle">Platzhalter kleine Überschrift</h3>
                    <p className="intro-description">
                        Dies ist ein zweizeiliger Platzhaltertext.
                        Er kann beliebig durch echten Inhalt ersetzt werden.
                    </p>
                </div>
                <div className="intro-image">
                    <img src={codingImage} alt="Platzhalter" />
                </div>
            </section>
            <section className="nav-section">
                <div className="nav-container">
                    <div className="nav-item">
                        <FaLaptop size={48} className="nav-icon" />
                        <p>Web Development</p>
                    </div>
                    <div className="nav-item">
                        <FaMobileAlt size={48} className="nav-icon" />
                        <p>Mobile Development</p>
                    </div>
                    <div className="nav-item">
                        <FaServer size={48} className="nav-icon" />
                        <p>IT Support</p>
                    </div>
                    <div className="nav-item">
                        <FaSearchengin size={48} className="nav-icon" />
                        <p>Lead Recherche</p>
                    </div>
                    <div className="nav-item">
                        <FaChartLine size={48} className="nav-icon" />
                        <p>SEO Optimization</p>
                    </div>
                    <div className="nav-item">
                        <FaShoppingCart size={48} className="nav-icon" />
                        <p>E-commerce Solutions</p>
                    </div>
                </div>
            </section>
            <section id="web-development" className="service-section">
                <h2><FaLaptop /> Web Development</h2>
                <p>Wir bieten maßgeschneiderte Webentwicklungsdienste, die genau auf Ihre Bedürfnisse zugeschnitten sind. Unser erfahrenes Team übernimmt sowohl die Frontend- als auch die Backend-Entwicklung, um Ihnen eine umfassende Lösung zu bieten. Egal, ob Sie eine Webanwendung benötigen oder eine robuste Datenbankintegration, wir haben die Expertise, um Ihr Projekt erfolgreich umzusetzen. Von der Planung bis zur Implementierung stehen wir Ihnen zur Seite und entwickeln individuelle Weblösungen, die Ihre Erwartungen übertreffen.</p>
            </section>
            <section id="mobile-development" className="service-section">
                <h2><FaMobileAlt /> Mobile Development</h2>
                <p>Unsere Expertise in der Entwicklung von mobilen Apps erstreckt sich über verschiedene Plattformen, einschließlich iOS und Android. Wir erstellen benutzerfreundliche und leistungsstarke mobile Anwendungen, die auf die Bedürfnisse Ihrer Nutzer zugeschnitten sind. Egal, ob Sie eine native App oder eine plattformübergreifende Lösung benötigen, unser Team sorgt dafür, dass Ihre App auf allen Geräten reibungslos funktioniert und ein hervorragendes Benutzererlebnis bietet.</p>
            </section>
            <section id="it-support" className="service-section">
                <h2><FaServer /> IT Support</h2>
                <p>Unser IT-Support-Team steht Ihnen für die Wartung Ihrer Website und das Management Ihrer Datenbanken zur Verfügung. Wir bieten schnelle und zuverlässige Hilfe bei allen anfallenden Fragen und Problemen, um sicherzustellen, dass Ihre Systeme stets reibungslos funktionieren. Von der Fehlerbehebung bis zur regelmäßigen Wartung – wir kümmern uns um Ihre IT-Bedürfnisse, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.</p>
            </section>
            <section id="lead-recherche" className="service-section">
                <h2><FaSearchengin /> Lead Recherche</h2>
                <p>Wir unterstützen Ihr B2B-Vorhaben durch die gezielte Recherche und Identifizierung relevanter Ansprechpartner. Unser Team erstellt und bereinigt qualitativ hochwertige Kontaktlisten nach Ihren spezifischen Anforderungen, um sicherzustellen, dass Sie die besten Chancen auf erfolgreiche Geschäftsbeziehungen haben. Mit unserer Expertise finden Sie die richtigen Kontakte, um Ihr Netzwerk zu erweitern und neue Geschäftsmöglichkeiten zu erschließen.</p>
            </section>
            <section id="seo-optimization" className="service-section">
                <h2><FaChartLine /> SEO Optimization</h2>
                <p>Unsere SEO-Dienstleistungen helfen Ihnen dabei, Ihre Online-Sichtbarkeit zu maximieren und mehr organischen Traffic zu generieren. Wir bieten umfassende SEO-Strategien, einschließlich Keyword-Recherche, On-Page-Optimierung und Linkbuilding, um Ihre Website in den Suchmaschinenrankings nach oben zu bringen. Unser Ziel ist es, Ihre Reichweite zu erhöhen und Ihre Zielgruppe effektiv anzusprechen.</p>
            </section>
            <section id="e-commerce-solutions" className="service-section">
                <h2><FaShoppingCart /> E-commerce Solutions</h2>
                <p>Wir bieten umfassende E-Commerce-Lösungen, die Ihnen helfen, Ihren Online-Shop erfolgreich zu betreiben und zu skalieren. Von der Entwicklung maßgeschneiderter E-Commerce-Plattformen bis zur Integration sicherer Zahlungssysteme und effizienter Warenwirtschaft – wir unterstützen Sie dabei, Ihren Umsatz zu steigern und ein nahtloses Einkaufserlebnis für Ihre Kunden zu schaffen. Unser Team steht Ihnen bei jedem Schritt zur Seite, um Ihren E-Commerce-Erfolg sicherzustellen.</p>
            </section>
        </div>
    );
}

export default Services;
