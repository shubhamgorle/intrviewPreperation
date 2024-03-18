import { ADD,REMOVE } from "./actionsTypes";
const initialState = {
    count: 0
}

const reducer = (state = initialState,action)=>{
   if(action.type === ADD){
    return{
        ...state,
        count:state.count + action.payload
    }
   }
   else if(action.type === REMOVE){
    return{
        ...state,
         count:state.count - action.payload
     }
   }
   else{
    return state
   }
}
export default reducer