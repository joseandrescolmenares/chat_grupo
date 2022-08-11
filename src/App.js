import React,{useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import  Landi from './components/Landi'
import Home from "./components/Home"
function App() {
const [estado, setStado] = useState(false)

  useEffect(() => {
    const rutapri = window.localStorage.getItem('name')
    if(rutapri) {
      setStado(true)
    }
  },[])



  return <Routes>
      <Route  path="/" element={<Landi/>}/>
      <Route path="/home" element={estado ? <Home/>: <div>No puede acceder sin un Nombre</div>}/>
  </Routes>;
}

export default App;
