import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import { themeVars } from './theme';

function App() {
  const [theme, setTheme] = useState(themeVars);

  return (
    <Router>
      <Header theme={theme} onThemeChange={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
        </Routes>
      </main>
      <Footer theme={theme} />
    </Router>
  );
}

export default App;
