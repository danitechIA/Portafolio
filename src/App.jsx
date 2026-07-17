import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import ParticleField from './components/Background/ParticleField';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import WhatsApp from './components/WhatsApp/WhatsApp';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <ParticleField />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Certificates />
          <Contact />
          <WhatsApp />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
