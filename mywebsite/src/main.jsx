import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './HomePage/Home';
import Projects from './ProjectsPage/Projects';
import Aboutme from './AboutmePage/Aboutme';
import NavBar from './ReusableComponents/NavBar';

import './assets/css/main.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<Aboutme />} />
    </Routes>
  </Router>
)
