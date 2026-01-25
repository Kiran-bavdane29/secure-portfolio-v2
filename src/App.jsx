import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <BrowserRouter>
      {/* 1. Global Background (Fixed Position) */}
      <MatrixRain />
      
      {/* 2. Content Layer (Let it grow naturally) */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;