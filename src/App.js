import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';

const compDetails = {
  name: "CNC WEB WORLD",
  logo: "./logo192.png"
}

function App() {

  return (
    <BrowserRouter>
      <Navbar props = {compDetails} />
      <Routes>
        <Route path="/" element={<Home props ={compDetails} />} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
        <Route path="/about_us_detail" element={<h1>About Us Detail</h1>} />
        <Route path="/about_us_in_depth" element={<h1>About Us In Depth</h1>} />
        <Route path="/gallery" element={<h1>Gallery Page</h1>} />
        <Route path="/contact" element={<h1>Contact Us Page</h1>} />
        <Route path="/product" element={<h1>Product Page</h1>} />
        <Route path="/types_of_product" element={<h1>Types of Product</h1>} />
        <Route path="/quality_1" element={<h1>Quality 1</h1>} />
        <Route path="/quality_2" element={<h1>Quality 2</h1>} />
        <Route path="/service" element={<h1>Service Page</h1>} />


      </Routes>
    </BrowserRouter>

  )
}

export default App