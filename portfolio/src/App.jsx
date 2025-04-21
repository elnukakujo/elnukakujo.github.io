import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './styles/global.css';

import HomePage from './pages/HomePage/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (e) => {
      const isDark = e.matches;
      document.documentElement.classList.toggle('dark', isDark);
    };

    // Initial apply
    updateTheme(mediaQuery);

    // Listen for system changes
    mediaQuery.addEventListener('change', updateTheme);
    return () => mediaQuery.removeEventListener('change', updateTheme);
  }, []);

  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/projects' element={<ProjectsPage/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;