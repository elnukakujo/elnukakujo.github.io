import './styles/global.css';

import PageLayout from './layouts/PageLayout.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import AboutMePage from './pages/AboutMePage/AboutMePage.tsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.tsx';

export const routes = [
  {
    path: '/',
    element: <PageLayout />,
    entry: 'src/layouts/PageLayout.tsx',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'aboutme', element: <AboutMePage /> },
      { path: 'projects', element: <ProjectsPage /> },
    ],
  },
];
