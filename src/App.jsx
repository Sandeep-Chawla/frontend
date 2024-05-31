import "./App.css";


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculator from "./pages/Calculator";
import Listing from "./components/Listing";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Layout><Home /></Layout>} />
      <Route exact path="/about" element={<Layout><About /></Layout>} />
      <Route exact path="/Calculator" element={<Layout><Calculator /></Layout>} />
      <Route exact path="/contact" element={<Layout><Contact /></Layout>} />
      <Route exact path="/listing" element={<Layout><Listing/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
