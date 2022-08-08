import React, { useState, useEffect } from "react";
import socket from "./Socket";
import s from "./css/Home.module.css";
import data from "./data"
import Card  from "./Card";
const Home = () => {
  const [nombres, setNombres] = useState([]);

  useEffect(() => {
    socket.on("nombre", (name) => {
      setNombres([...nombres, name]);
      return () => {
        socket.off();
      };
    });
  }, [nombres]);

  return (
    <>
      <div className={s.container}>
        <div className={s.izquierdo}>
          {data.map(el => <Card titulo={el.titulo}/> )}
        </div>
        <div className={s.derecho}>
          <div>
            <input type="text" />{" "}
            <button>enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
