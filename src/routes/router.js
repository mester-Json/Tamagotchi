import React, { StrictMode, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PetsPage from '../pages/pets';


function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetsPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;