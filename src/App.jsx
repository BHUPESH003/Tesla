import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
   <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>}>
        </Route>
    <Route path="/about" element={<About/>}>
        </Route>
    <Route path="/contact" element={<Contact/>}>
        </Route>
    </Routes>
    <Contact/>
    </Router>
   
  )
}

export default App