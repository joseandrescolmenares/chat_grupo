import React from "react";
import s from "./css/Card.module.css";
const Card = ({ nombre, img}) => {
  

  return (
    <div className={s.card}>
      <div className={s.perfil}>
        <img className={s.img} src={img} alt='icono'/>
        <div className={s.nombre}>
          <h1 className={s.titulo}>{nombre}</h1>
          <p className={s.conec}>se conecto</p>
        </div>
      </div>
      <p className={s.conecto}>🔵</p>
      
    </div>
  );
};

export default Card;
