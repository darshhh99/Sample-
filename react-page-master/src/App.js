// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images'; // Assuming you have an Images component
import LoginForm from './components/LoginForm'; // Assuming you have a LoginForm component
import Contact from './components/Contact'; // Assuming you have a Contact component
import Blog from './components/Blog';
import './App.css'; // Global styles

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/images" element={<Images />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
};

export default App;
