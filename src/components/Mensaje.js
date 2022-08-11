import React,{ useEffect, useState} from "react";
import s from "./css/Mensaje.module.css";
const Mensajes = ({ name, msg, img, id }) => {
    const respaldo = 'https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
    const idMsg = window.localStorage.getItem('id')
    const [proba, setProba] = useState('')
    
useEffect(() => {
let min = 1;
let max = 3;
let  x = Math.random()*(max - min)+min;
let  jo = parseInt(x)

setProba(jo)
},[])

  return (
    <div className={proba == 1? s.mio: s.container} >
      <div className={s.msj}>
        <img className={s.img} src={img ? img : respaldo} alt="avatar" />
        <h1 className={s.name}>{name}</h1>
      </div>
      <div className={s.mensaje}> <p className={s.h2}>{msg}</p></div>
    </div>
  );
};

export default Mensajes;
