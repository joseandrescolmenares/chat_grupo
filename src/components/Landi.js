import React from "react";
import s from "./css/Landi.module.css";
import logo from "../img/Sin título.png";
import Form from './Form'

const Landi = () => {
  return (
    <div className={s.container}>
      <div className={s.izquierdo}>
        <Form/>
      </div>
      <div className={s.derecho}>
        <div className={s.img}>
          <img className={s.proba} src={logo} />
        </div>
        <div className={s.explicacion}><p>Lorem ipsum dolor sit amet, consectetur</p></div>
      </div>
    </div>
  );
};

export default Landi;
