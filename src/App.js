import React,{ useState } from 'react'
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home.jsx"
import Work from './components/Work';
import Timeline from './components/Timeline.jsx';
import Services from './components/Service.jsx';
import Testimonial from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return  (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) 
}

export default App;

