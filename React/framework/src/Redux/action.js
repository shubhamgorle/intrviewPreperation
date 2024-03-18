import { ADD,REMOVE } from "./actionsTypes";

export const AddAction = (data)=>{
    return{
        type:ADD,
        payload:data
    }
}

export const RemoveAction = (data)=>{
    return{
        type:REMOVE,
        payload:data
    }
}