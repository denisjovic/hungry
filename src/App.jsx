import { useState } from 'react';
import Pages from './pages/Pages';
import Cuisine from './pages/Cuisine';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cuisine/:cuisine' element={<Cuisine />} />
        <Route path='/' element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
