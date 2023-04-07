import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
import Favicon from 'react-favicon';
  
function App() {

  return (
    <div className="App">
      <Favicon url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggqiozvGwJEVxDVWnwnGp3qCbHYfU4LPt1BiwLyySBlAYaiDe55kn5m56OdWTqaC6XXDs4aBZqcnffg2B2CvlpFQat_J8H4BhqExv-9D_aKHxK2OJ2AvuIqolPYs5nrqFuH3XHLAPSVJHW9Gq-48N0TTLaUmMzLW3w_QABCJQd_H1BYs68KbGi6Pmr/s1600/icon.png" />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App
