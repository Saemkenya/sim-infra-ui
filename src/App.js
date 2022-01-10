import Navbar from './components/Navbar';
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Navbar />
    <p> hey there </p>
      <Routes>
        <Route path="/" />
        <Route path="/money" />
        <Route path="/contacts" />
        <Route path="/voice" />
        <Route path="/ussd" />
        <Route path="/messaging" />
        <Route path="/data" />
        <Route path="/whatsapp" />
      </Routes>
    </Router>   
    

  );
}

export default App;


