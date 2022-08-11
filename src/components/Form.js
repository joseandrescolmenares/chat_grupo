import React, {useState, useEffect} from 'react'
import s from './css/Form.module.css'
import socket from './Socket'
import { Modal } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {privado} from './redux/actions'
const Form = () => {
const [name, setName] = useState('')
const [modal, setModal] = useState(false);
const [imagenes, setImg] = useState("");
// const dispatch = useDispatch()
// const rutapriv = useSelector((state) => state.privado)


const abrirmodal = () => {
   setModal(!modal);
 };

let navigate = useNavigate();

const handleOnsubmit = (e) => {
    e.preventDefault()
    abrirmodal()
}

const handleEnviar = () => {
  navigate("/home")
   window.localStorage.setItem('ruta','fun')
   socket.emit('resultado', imagenes,name)

   socket.on('envioResultado', ({result}) =>{
    window.localStorage.setItem('name', result.name)
    window.localStorage.setItem('id', result._id)
    window.localStorage.setItem('img', result.imagenes)
    setTimeout(()=>{
    // socket.emit('conectado' , imagenes, name)
   
    },2000)
  })
 
}


 return(
   
    <div className={s.container}>
    <h1 className={s.h1}>Master chat</h1>
    <form className={s.form} onSubmit={handleOnsubmit}> 
         <label >Ingrese su nombre</label>
        <input className={s.input} placeholder='Nombre'  value={name}  type='text' minLength='4' maxLength='15' titulo='no se puese' required  onChange={(e) => setName(e.target.value)}></input>
        <button className={s.botones}>Registrar</button>
        </form>
        <Modal className={s.modalito} open={modal} onClose={abrirmodal}>
        <div className={s.contenedorModal}>
          <div className={s.conte}>
            {" "}
            <img className={s.boton} src="https://lasimagenesdegoku.com/wp-content/uploads/2017/05/render_de_goku_ssj_dios_dorado_by_vegeta_ediciones9-d7axup4-300x300.png" alt='img'/>
            <button
              className={s.agra}
              value="https://lasimagenesdegoku.com/wp-content/uploads/2017/05/render_de_goku_ssj_dios_dorado_by_vegeta_ediciones9-d7axup4-300x300.png"
              onClick={(e) => setImg(e.target.value)}
            ></button>
          </div>
          <div className={s.conte}>
            {" "}
            <img className={s.boton} src="https://i.pinimg.com/564x/5f/26/48/5f2648d0073fd15dd1b39f81157ca9d8.jpg" alt='img'/>
            <button
              className={s.agra}
              value="https://i.pinimg.com/564x/5f/26/48/5f2648d0073fd15dd1b39f81157ca9d8.jpg"
              onClick={(e) => setImg(e.target.value)}
            ></button>
          </div>
          <div className={s.conte}>
            {" "}
            <img className={s.boton} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKGY1zGc7xr6LFrfogm1sth0ygOKDwPUQtg&usqp=CAU" alt='img'/>
            <button
              className={s.agra}
              value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKGY1zGc7xr6LFrfogm1sth0ygOKDwPUQtg&usqp=CAU"
              onClick={(e) => setImg(e.target.value)}
            ></button>
          </div>
          <div className={s.conte}>
            {" "}
            <img className={s.boton} src="https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000" alt='img'/>
            <button
              className={s.agra}
              value="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000"
              onClick={(e) => setImg(e.target.value)}
            ></button>
          </div>
          <div className={s.conte}>
            {" "}
            <img className={s.boton} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu80FmMkORNPUwJPeHNZHFGy8pWHi2x_bYGA&usqp=CAU" alt='img'/>
            <button
              className={s.agra}
              value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu80FmMkORNPUwJPeHNZHFGy8pWHi2x_bYGA&usqp=CAU"
              onClick={(e) => setImg(e.target.value)}
            ></button>
          </div>
          <div className={s.conte}>
            {" "}
            <img className={s.boton} src="https://images.ole.com.ar/2022/01/23/dgnR0nTmN_720x0__1.jpg" alt='img'/>
            <button
              className={s.agra}
              value="https://images.ole.com.ar/2022/01/23/dgnR0nTmN_720x0__1.jpg"
              onClick={(e) => setImg(e.target.value)}
            ></button>
          </div>
          <div className={s.conte}>
            {" "}
            <img className={s.boton} src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6" alt='img'/>
            <button
              className={s.agra}
              value="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6"
              onClick={(e) => setImg(e.target.value)}
            ></button>
          </div>
          <button className={s.cerra} onClick={handleEnviar}>Listo</button>
        </div>
      </Modal>
    </div>
 )
}

export default Form;
