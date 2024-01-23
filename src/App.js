import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/home/Home'));
const AboutPage = lazy(() => import('./pages/about/About'));


function App() {
  return (

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        </Suspense>
      </Router>
  );
}

export default App;