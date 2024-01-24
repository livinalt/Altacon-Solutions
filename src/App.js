// App.jsx
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Page/Home';
import Work from './Page/Work';


const App = () => {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route index element= {<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
