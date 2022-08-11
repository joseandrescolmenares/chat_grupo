import React from "react";
import { Routes, Route } from "react-router-dom";
import  Landi from './components/Landi'
import Home from "./components/Home"
function App() {
const rutapri = window.localStorage.getItem('name')

console.log(rutapri)
  return <Routes>
      <Route  path="/" element={<Landi/>}/>
      <Route path="/home" element={rutapri ? <Home/>: <div>No puede acceder sin un Nombre</div>}/>
  </Routes>;
}

export default App;
