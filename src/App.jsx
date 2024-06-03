import "./App.css";


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculator from "./pages/Calculator";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/Calculator" element={<Layout><Calculator /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/Listing" element={<Layout><Register/></Layout>} />
      <Route path="/Register" element={<Layout><Register/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
