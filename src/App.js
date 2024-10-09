import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;