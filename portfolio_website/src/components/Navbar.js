import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/navbar.css';

export default function Navbar()
{
    return (
        <div id="nav">
            <div className="nav_content">
                <Link to="/">
                    <h1>Noe Jager</h1>
                </Link>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <div className="dropdown">
                        <Link to="/education" className="drop-trigger">Education</Link>
                        <div className="dropdown-content">
                            <Link to="/education#masterUdem">Master</Link>
                            <Link to="/education#bacUniLu">Bachelor</Link>
                            <Link to="/education#oc">Online Courses</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/projects" className="drop-trigger">Projects</Link>
                        <div className="dropdown-content">
                            <Link to="/projects#master_projects">Master Projects</Link>
                            <Link to="/projects#bachelor_projects">Bachelor Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}