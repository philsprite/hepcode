// src/App.js
import './App.css';
import React from 'react';
import NavbarComponent from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
