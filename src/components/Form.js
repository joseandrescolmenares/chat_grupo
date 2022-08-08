import React, {useState} from 'react'
import s from './css/Form.module.css'
import socket from './Socket'
import { useNavigate } from "react-router-dom";
const Form = () => {
const [name, setName] = useState('')

let navigate = useNavigate();
const handleOnsubmit = (e) => {
    e.preventDefault()
    socket.emit('conectado', name)

   setTimeout(() =>{
    navigate("/home")
   },1500)
   
}
 return(
    <div className={s.container}>
    <h1 className={s.h1}>Master chat</h1>
    <form className={s.form} onSubmit={handleOnsubmit}> 
         <label >Ingrese su nombre</label>
        <input className={s.input} placeholder='Nombre'  value={name}  type='text' minLength='4' required  onChange={(e) => setName(e.target.value)}></input>
        <button className={s.boton}>Registrar</button>
        </form>
    </div>
 )
}

export default Form;
