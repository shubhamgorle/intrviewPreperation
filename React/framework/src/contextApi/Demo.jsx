import React, { useContext } from 'react'
import { AuthContexts } from './Auth'
const Demo = () => {
    const {handleState, state}= useContext(AuthContexts)
    const handleClick=()=>{
        handleState();
    }
  return (
    <div>
      <h1>{state?"True":"False"}</h1>
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default Demo
