import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Cachacas from './components/Cachacas';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Cachacas />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;