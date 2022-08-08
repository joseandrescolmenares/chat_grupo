import React from "react";
import s from "./css/Card.module.css";
const Card = ({ titulo }) => {
  return (
    <div>
      <div className={s.card}>{titulo} </div>
    </div>
  );
};

export default Card;
