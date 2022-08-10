const stateInitial = {
    nombre: '',
    img: ''
   };
   
   
   
   function rootReducer(state = stateInitial, action) {
     switch (action.type) {
 
        case 'NOMBRE':
          return{
            ...state,
            nombre: action.payload
          }
          case 'IMG':
            return {
              ...state,
              img: action.payload
            }
           
       default:
         return state;
     }
 }
   export default rootReducer;