import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/global.css';

import HomePage from './pages/HomePage/HomePage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {

  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;