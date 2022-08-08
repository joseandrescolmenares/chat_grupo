import io from 'socket.io-client'

let socket = io("//localhost:3001" || "https://grupo-chat.herokuapp.com/" )

export default socket