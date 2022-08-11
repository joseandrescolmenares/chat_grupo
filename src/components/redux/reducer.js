const stateInitial = {
  privado : false,
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

            case 'PRIVATE':
              return {
                ...state,
                privado: true
              }
           
       default:
         return state;
     }
 }
   export default rootReducer;