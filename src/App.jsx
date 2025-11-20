// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';

import Home1 from './pages/Home1';
// import Home2 from './pages/Home2';
// import About from './pages/About';
// import Service from './pages/Service';
// import Gallery from './pages/Gallery';
// import Team from './pages/Team';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home1 />} />
        {/* <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </>

  );
}

export default App;
