import React from 'react'
import s from './css/Form.module.css'

const Form = () => {
 return(
    <div className={s.container}>
    <h1 className={s.h1}>Master chat</h1>
    <div className={s.form}> 
         <label>Ingrese su Nombre</label>
        <input className={s.input}></input>
        <button className={s.boton}>Registrar</button>
        </div>
    </div>
 )
}

export default Form;
