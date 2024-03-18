import { React, useReducer } from 'react'
function reducer(state, action) {
    if(action.type === 'Increase') {
        return {
            count: state.count + 1
        }
    }
    else {
        return state
    }
}


const Usereducer = () => {
    const initialState = {
        count: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleAdd = () => {
        dispatch({ type: 'Increase' })
    }
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleAdd}>handleAdd</button>
        </div>
    )
}


export default Usereducer
// useReducer is a more advanced hook and is used for managing more complex state logic.
// use useState for simple state management, and switch to useReducer when your
// state management logic becomes complex or when you need more control over how state updates
// are handled.

// useState is a simpler hook and is used for managing local state in a component.
// useReducer is a more advanced hook and is used for managing more complex state logic.



