import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/partials/Header";
import Footer from '../components/partials/Footer';
import WhatsAppButton from './reutilizables/WhatsAppButton';
import Home from '../components/body/Home';
import Contact from '../components/body/Contact'
import Portafolio from '../components/body/Portafolio';
import ScrollToTop from '../components/partials/ScrollToTop';
import Services from '../components/body/servicios/Services';
import PostsEnConstruccion from '../components/body/posts/Posts';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/posts" element={<PostsEnConstruccion />} />
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
