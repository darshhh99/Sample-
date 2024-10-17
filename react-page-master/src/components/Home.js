// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './css/Home.css'; // Custom CSS for Home Page

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [fadeOut, setFadeOut] = useState(false); // State to trigger the fade-out

    const handleGetStarted = () => {
        setFadeOut(true); // Trigger the fade-out animation
        setTimeout(() => {
            navigate('/login'); // Navigate to the login page after animation
        }, 1000); // Delay navigation until the animation is done (1 second)
    };

    return (
        <div className={`hero-container ${fadeOut ? 'fade-out' : ''}`}>
            <video src="/videos/particles.mp4" autoPlay loop muted />
            <div className="hero-content">
                <h1>Explore the Universe with ViewSpace</h1>
                <p>Discover the wonders of space at the click of a button</p>
                <button className="get-started-btn" onClick={handleGetStarted}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;
