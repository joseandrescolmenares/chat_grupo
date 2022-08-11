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
 const name = window.localStorage.getItem('name')
 const id = window.localStorage.getItem('id')
 const imagen = window.localStorage.getItem('img')


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
    if(envio === '') return
    socket.emit("mensaje", imagen, name, envio, id);
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
          {nombres.map((el) => (
            <Card key={el.id} nombre={el.name} img={el.imagenes}/>
          ))}
        </div>
        <div className={s.derecho}>
          <div className={s.envio}> 
          {mensaje.map((el, i) => (
            <Mensajes key={i} msg={el.msg} name={el.name} img={el.img} id={el.id} />
            
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
            <button className={s.enviado} onClick={handleMensaje}><img className={s.send} src="https://cdn.icon-icons.com/icons2/259/PNG/128/ic_send_128_28719.png"/></button>
          </div>
        </div>
          
          
      </div>
    </>
  );
};

export default Home;
