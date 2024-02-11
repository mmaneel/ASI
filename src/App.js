import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Partenaire from './Components/Partenaire';
import PartenaireDetails from './Components/PartenaireDetails';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Partenaire" element={<Partenaire />} />
        <Route path="/details/:id" element={<PartenaireDetails />} />
      </Routes>
    </div>
  );

}

export default App;
