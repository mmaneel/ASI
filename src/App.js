import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
