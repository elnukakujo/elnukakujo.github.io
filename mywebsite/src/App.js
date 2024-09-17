import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';
import './assets/css/main.css';


export default function App(){
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Sidebar />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
                <Contact />
            </div>
        </Router>
    );
};