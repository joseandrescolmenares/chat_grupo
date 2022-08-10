

export function getNombre(nombre){
    console.log(nombre)
  return {
    type: 'NOMBRE',
    payload: nombre
  }
}


export function getImg(img){
    console.log(img)
    return{
    type: 'IMG',
    payload: img
    }
}