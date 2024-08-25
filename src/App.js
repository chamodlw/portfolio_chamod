// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './components/about';
import Skills from './components/skills';
import Services from './components/services';
import Blog from './components/blog';
import Contact from './components/contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
