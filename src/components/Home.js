import React, { useState, useEffect } from "react";
import socket from "./Socket";
import s from "./css/Home.module.css";
import Card from "./Card";

const Home = () => {
 
  const [nombres, setNombres] = useState([]);
  const [envio, setEnvio] = useState("");
  const [mensaje, setMensaje] = useState([]);
  


  useEffect(() => {
    socket.on("nombre", (algo) => {
      console.log(algo)
      setNombres([...nombres, algo]);
      
      return () => {
        socket.off();
      };
    });
  }, [nombres]);

  const handleMensaje = () => {
    socket.emit("mensaje", envio);
  };

  useEffect(() => {
    socket.on("mensajes", (recibido) => {
      console.log(recibido);
      setMensaje([...mensaje, recibido]);
      return () => {
        socket.off();
      };
    });
  }, [mensaje]);





  return (
    <>
      <div className={s.container}>
        <div className={s.izquierdo}>
          {nombres.map((el, i) => (
            <Card key={i} nombre={el.name} img={el.imagenes}/>
          ))}
        </div>
        <div className={s.derecho}>
          <div className={s.envio}> 
          {mensaje.map((el) => (
            <h1 className={s.h1}>{el.envio}</h1>
          ))}
          </div>
          <div className={s.mensaje}>
            <input
              className={s.input}
              type="text"
              placeholder="Envie un mensaje"
              maxLength='70'
              value={envio}
              onChange={(e) => setEnvio(e.target.value)}
            />{" "}
            <button onClick={handleMensaje}>enviar</button>
          </div>
        </div>
          
          
      </div>
    </>
  );
};

export default Home;
