import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Header />
      <main style={{minHeight:'80vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Otras páginas se agregarán aquí */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
