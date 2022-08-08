import React from "react";
import s from "./css/Card.module.css";
const Card = ({ nombre}) => {
  return (
    <div  className={s.card}>
     <h1> {nombre}</h1> 
      <p>{nombre} se conecto </p> 
      
    </div>
  );
};

export default Card;
