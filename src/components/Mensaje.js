import React from "react";
import s from "./css/Mensaje.module.css";
const Mensajes = ({ name, msg, img  }) => {
    const respaldo = 'https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
  return (
    <div className={s.container}>
      <div className={s.msj}>
        <img className={s.img} src={img ? img : respaldo} alt="avatar" />
        <h1>{name}</h1>
      </div>
      <div className={s.mensaje}> <h2>{msg}</h2></div>
     
    </div>
  );
};

export default Mensajes;
