import React,{useState,useEffect} from 'react'
import socket from './Socket'
import s from './css/Home.module.css'

const  Home = () => {

    const  [nombres, setNombres] = useState([])
    
    useEffect(() => {
        socket.on('nombre', name => {
            setNombres([...nombres,name])
          return () => {socket.off()}
        })
    },[nombres])
  
    
    return (
         <div>
         {nombres.map(el => <div>{el.name}</div>)}
         </div>
    )
}

export default Home

