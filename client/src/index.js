// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Products from './Products';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
