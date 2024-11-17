import { ADD, REMOVE } from "./actionType"
export const AddCount = (data) => {
    return {
        type: ADD,
        payload: data
    }
}
export const RemoveCount = (data) => {
    return {
        type: REMOVE,
        payload: data
    }
}