import React, { useState, useEffect } from "react";
import socket from "./Socket";
import s from "./css/Home.module.css";
import data from "./data";
import Card from "./Card";
const Home = () => {
  const [nombres, setNombres] = useState([]);
  const [envio, setEnvio] = useState('');
 const [mensaje, setMensaje] = useState([]);
 console.log(mensaje)
  useEffect(() => {
    socket.on("nombre", (name) => {
      setNombres([...nombres, name]);
      return () => {
        socket.off();
      };
    });
  }, [nombres]);

  const handleMensaje = () => {
     socket.emit('mensaje', envio)
  }

  useEffect(() => {
    socket.on('mensajes', recibido => {
      console.log(recibido)
      setMensaje([...mensaje, recibido]);
      return () => {
        socket.off();
      };
    })
  },[mensaje]);

  return (
    <>
      <div className={s.container}>
        <div className={s.izquierdo}>
          {nombres.map((el) => (
            <Card nombre={el.name} />
          ))}
        </div>
        <div className={s.derecho}>
          {mensaje.map(el => <h1>{el.envio}</h1>)}
          <div className={s.mensaje}>
            <input
              className={s.input}
              type="text"
              placeholder="Envie un mensaje"
              value={envio}
              onChange={ (e) => setEnvio(e.target.value)}
            />{" "}
            <button onClick={handleMensaje}>enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
