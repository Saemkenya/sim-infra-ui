import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
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
