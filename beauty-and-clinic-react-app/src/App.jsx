// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'


import Home1 from './pages/Home1/Home1';
import Home2 from './pages/Home2/Home2';
// import Home2 from './pages/Home2/Home2';
import AboutPage from './pages/About/AboutPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
// import Service from './pages/Service';
// import Gallery from './pages/Gallery';
// import Team from './pages/Team';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} 
        />
        {/* <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </>

  );
}

export default App;
