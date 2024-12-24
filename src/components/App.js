import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/partials/Header";
import Footer from '../components/partials/Footer';
import WhatsAppButton from './reutilizables/WhatsAppButton';
import Home from '../components/body/Home';
import Contact from '../components/body/Contact'
import Portafolio from '../components/body/Portafolio';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<div>Servicios</div>} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/posts" element={<div>Posts</div>} />
            <Route path="/contact" element={<div><Contact /></div>} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/register" element={<div>Register</div>} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
