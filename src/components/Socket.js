import io from 'socket.io-client'

let socket = io("https://grupo-chat.herokuapp.com/")

export default socket