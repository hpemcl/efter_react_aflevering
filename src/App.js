import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontpage from './app/Frontpage';
import OnePage from './pages/one_page';
import InformationWebsite from './pages/information_website';
import CssAnimation from './pages/css_animation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/one_page" element={<OnePage />} />
        <Route path="/information_website" element={<InformationWebsite />} />
        <Route path="/css_animation" element={<CssAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;
