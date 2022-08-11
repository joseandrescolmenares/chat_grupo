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
        <div className={s.explicacion}><p>Este chat es un proyecto que hice para reforzar conocimiento.<br/> espero que te guste 🤗🙌<hr></hr> </p></div>
      </div>
    </div>
  );
};

export default Landi;
