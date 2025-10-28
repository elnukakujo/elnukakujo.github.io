import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/global.css';

import HomePage from './pages/HomePage/HomePage.tsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.tsx';
import AboutMePage from './pages/AboutMePage/AboutMePage.tsx';

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
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/aboutme' element={<AboutMePage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
      </Routes>
    </Router>
  )
}

export default App;