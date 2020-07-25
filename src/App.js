import React from 'react';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Navbar/Nav';
import Works from './Components/Skills/Works';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,

} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Home />
    <About />
    <Works />
    <Footer />
    </div>
    </Router>
  )
}

export default App;
