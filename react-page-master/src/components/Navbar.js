// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // Import custom CSS for the Navbar

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="../images/space.png" alt="Logo" />
                <span className="navbar-title">ViewSpace</span>
            </div>
            <button className="burger-menu" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/images">Images</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
