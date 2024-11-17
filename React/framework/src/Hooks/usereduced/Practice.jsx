import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === 'ADD') {
        return {
            count: state.count + 1
        }
    }
    else if (action.type === 'RED') {
        return {
            count: state.count - 1
        }
    }
    else {
        return state
    }
}
const Practice = () => {
    const initialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleAdd = () => {
     dispatch({type:'ADD'})
    }
    const handleSub = () => {
        dispatch({type:'RED'})
    }
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleAdd}>Increase</button>
            <button onClick={handleSub}>Decrease</button>
        </div>
    )
}

export default Practice
