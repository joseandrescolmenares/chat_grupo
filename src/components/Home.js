import React, { useState, useEffect, useRef } from "react";
import socket from "./Socket";
import s from "./css/Home.module.css";
import Card from "./Card";
import { useSelector} from "react-redux";
import Mensajes from "./Mensaje";

const Home = () => {
 
  const [nombres, setNombres] = useState([]);
  const [envio, setEnvio] = useState("");
  const [mensaje, setMensaje] = useState([]);
  const divRef = useRef(null)
  const stadoNombre = useSelector((state) =>  state.nombre)
  const stadoImg = useSelector((state) => state.img)

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
    socket.emit("mensaje", stadoImg, stadoNombre, envio);
    setEnvio('')
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


useEffect(() => {
  socket.emit('pendiete', "listo")
 socket.emit("cargarMensaje", "listo")
 socket.on('ouput-mensaje', (msg) => {
  setMensaje(msg)
})
},[])

useEffect(() => {
 socket.on('enviadoUser', (user) => {
     setNombres(user)
     return () => {
      socket.off();
    };
 })
},[nombres])

useEffect(() => {
  divRef.current.scrollIntoView({behavior: 'smooth'});
})



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
          {mensaje.map((el, i) => (
            <Mensajes key={i} msg={el.msg} name={el.name} img={el.img}/>
            
          ))}
          <div ref={divRef}></div>
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
