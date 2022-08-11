import React from "react";
import { Routes, Route } from "react-router-dom";
import  Landi from './components/Landi'
import Home from "./components/Home"
function App() {

  


  return <Routes>
      <Route  path="/" element={<Landi/>}/>
      <Route path="/home" element={<Home/>}/>
  </Routes>;
}

export default App;
