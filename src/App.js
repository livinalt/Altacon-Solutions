// App.jsx
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Page/Home';
import Work from './Page/Work';
import Footer from './Components/Footer';

const App = () => {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route index element= {<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
